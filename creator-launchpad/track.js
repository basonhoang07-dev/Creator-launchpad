/* ---------------------------------------------------------------------------
   Elevate — what the funnels tell the CRM.

   Both roadmaps are static files on Netlify and the CRM lives somewhere else
   entirely, so this is the only thread between them. It reports two things:

     steps     — landed, started the quiz, finished it, opened the roadmap.
                 Anonymous, deduplicated per browser, and the reason the
                 /magnets page can say "380 landed, 90 started, 12 gave
                 details" instead of one click count that explains nothing.

     captures  — the actual lead, with whatever the quiz asked and the
                 tracked link they arrived on, so the CRM can say which
                 magnet and which placement without anybody being asked.

   Every call is fire-and-forget on purpose. The job of these pages is to
   hand somebody a roadmap; if the CRM is asleep, slow or misconfigured, that
   still has to happen. Nothing here is awaited and nothing here can throw
   into the funnel.

   `keepalive` matters more than it looks: a capture fires on the same click
   that navigates to the roadmap, and without it the browser cancels the
   request on unload. That is the one report worth protecting.
--------------------------------------------------------------------------- */
(function (global) {
  'use strict';

  /* Where the CRM is. Render's blueprint names the service elevate-crm, so
     this is its address on the free plan; a custom domain later is a
     one-line change here. */
  var CRM = 'https://elevate-crm.onrender.com';

  /* The tenant. The workspace's slug, not its display name — the name was
     changed to Elevate during the rebrand and the slug deliberately was not,
     because things like this file point at it. */
  var WORKSPACE = 'creator-launchpad';

  var VISITOR_KEY = 'elv_visitor';
  var SOURCE_KEY = 'elv_src';

  /* A random id for this browser, so a refresh is not a second visit and a
     funnel can be measured before anybody has typed anything.

     Deliberately meaningless: not a fingerprint, not derived from anything
     about the person, and never joined to anything but the step counts. */
  function visitor() {
    try {
      var found = localStorage.getItem(VISITOR_KEY);
      if (found) return found;
      var made = 'v' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      localStorage.setItem(VISITOR_KEY, made);
      return made;
    } catch (e) {
      return null;   // private mode: the step is counted, just not deduplicated
    }
  }

  /* Which tracked link found them.

     The CRM mints short codes and tags every destination it hands out with
     utm_campaign=<code>, so the code is sitting in the url they arrived on.
     `?v=` is the same thing by another name, for a link written by hand.

     Stored, because the url is rewritten as the quiz moves and because the
     journey this exists to catch is not one sitting: tap the link from a
     story, come back a week later through the bio, finish then. The link
     that did the work should still get the credit.

     `src` and /get/:slug are this repo's own campaign names - words like
     "spring-reel" - which are not CRM codes, so they are only accepted when
     they happen to match the shape of one. */
  function source() {
    var code = null;
    try {
      var q = new URLSearchParams(window.location.search);
      code = q.get('v') || q.get('utm_campaign') || q.get('src');
      if (!code) {
        var m = window.location.pathname.match(/\/get\/([A-Za-z0-9_-]{1,60})/);
        if (m) code = m[1];
      }
      if (code) code = String(code).trim().toLowerCase();
      if (code && !/^[a-z0-9]{4,16}$/.test(code)) code = null;
    } catch (e) { code = null; }

    try {
      if (code) { localStorage.setItem(SOURCE_KEY, code); return code; }
      return localStorage.getItem(SOURCE_KEY);
    } catch (e) {
      return code;
    }
  }

  function send(body) {
    try {
      fetch(CRM + '/api/public/magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        keepalive: true,
        mode: 'cors'
      }).catch(function () { /* the roadmap still opens */ });
    } catch (e) { /* ancient browser, no fetch: nothing to do and nothing lost */ }
  }

  global.Elevate = {
    /* `magnet` is the slug the CRM knows this funnel by. It is registered on
       the CRM's /magnets page and must match it exactly — a typo here is a
       funnel that silently reports nothing. */
    step: function (magnet, step) {
      send({
        workspace: WORKSPACE,
        magnet: magnet,
        step: step,
        visitor: visitor(),
        v: source()
      });
    },

    /* The lead. `answers` is a plain list of {question, answer} pairs — the
       CRM has never seen these questions and does not need to: it stores
       them as they are and composes the one line a setter reads. That is
       what lets either funnel change its quiz without a migration. */
    capture: function (magnet, lead) {
      send({
        workspace: WORKSPACE,
        magnet: magnet,
        name: lead.name || null,
        email: lead.email || null,
        phone: lead.phone || null,
        igHandle: lead.igHandle || null,
        answers: lead.answers || [],
        visitor: visitor(),
        v: source()
      });
    },

    /* Exposed so the roadmap pages can report an open without re-deriving it. */
    source: source
  };
})(window);
