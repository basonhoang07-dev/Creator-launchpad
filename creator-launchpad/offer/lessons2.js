/* ===========================================================================
   Offer to Client: the lessons, part 2 (v6 expansion, 2026-11-17)

   Loaded by roadmap.html AFTER lessons.js. lessons.js is at the connector
   size cap, so every v6 addition lives here instead of being edited into it.

   Two kinds of change, both append-only so every existing progress id
   (p<phase>t<index>) keeps pointing at the same lesson:
     1. tasks.push(...) onto the existing phases: the Jonas 370aq additions
        Akira approved on 2026-11-17 (drafted in jonas-370aq-additions-draft.md),
        the extras from the same mine, Akira's own SOP additions, and the
        fulfilment and scaling lifts from jonas-370aq-value-brief.md.
     2. PHASE_6, the Copywriting module, built from the Writing Copy course
        harvest (Info Op's Coaching). roadmap.html folds it into the Content
        group behind PHASE_4.

   New copy has no em or en dashes, per the funnel standard. Jonas's numbers
   are never used as proof; mechanisms only.
   =========================================================================== */



/* --- additions to PHASE_2 --- */

PHASE_2.tasks.push(D('Build your pre-call stack',
      "<p>Booking the call is not the win. A booked call with a curious person who half-remembers why they booked is where most sales quietly die. The fix is a stack of assets that does the convincing <strong>before</strong> the call, so the call itself is short and about fit and payment, not persuasion.</p>" +
      "<h5>The page they land on after booking</h5><ul>" +
      "<li>A short confirmation video: what happens next, what to do before the call, what the call is and is not</li>" +
      "<li>An offer breakdown video: how working with you actually runs, step by step</li>" +
      "<li>Instructions to accept the calendar invite. Say it plainly: people who do not confirm are the ones who do not show</li>" +
      "<li>Breakout videos answering the questions and objections you hear most</li>" +
      "<li>Your results and case studies, stacked in one place</li>" +
      "</ul>" +
      "<h5>The follow-up rhythm</h5><ul>" +
      "<li>Emails for the three days before the call: a belief-breaking story, a client interview, a look inside how you deliver</li>" +
      "<li>Simple reminder messages at 24 hours, 6 hours and 1 hour out, and one when the call goes live</li>" +
      "<li>A group chat with you (and your setter or closer if you have one): voice notes that dig into their actual problem, assets dropped in as they become relevant</li>" +
      "</ul>" +
      "<p>Done right, people arrive pre-sold. Some will ask for the payment link before the call even happens. Assume every booker is only curious until this stack has done its work.</p>"));

PHASE_2.tasks.push(D('Run the intent check on every lead',
      "<p>Every person who replies, votes or sends a keyword gets a conversation the same day, and every conversation runs the same three checks. You are not pitching. You are finding out where this person actually is, because that decides what they see next and whether they get a call.</p>" +
      "<h5>The three checks</h5><ul>" +
      "<li>Opportunity aware: are you already doing this, or is it new to you?</li>" +
      "<li>Problem aware: what is the main thing in your way right now? A specific blocker named without prompting means problem aware. A vague answer like 'I just need to start' means not yet</li>" +
      "<li>Solution aware: have you tried anything for that, or looked at how other people solved it? If they can describe a method, even a wrong one, they are solution aware</li>" +
      "</ul>" +
      "<p>Open on what they just did: reference their exact vote or reply, and never open with the offer. Tag every lead by the furthest stage they reached: not aware gets top-of-funnel content, problem aware gets belief-shifting content, solution aware gets proof and a call, booked the same day. Log their exact words next to the tag. Those words are your future content.</p>"));

PHASE_2.tasks.push(D('Pick your funnel from data, not vibes',
      "<p>Most people copy a funnel that matches someone else's lead flow and then wonder why it leaks. Run a 7-day test first: stories and polls that measure three things. How many conversations a day you actually get. What share of your audience is not aware, problem aware and solution aware. And which content angle moves them.</p>" +
      "<h5>Then choose, once</h5><ul>" +
      "<li>Lead flow flooding and filtering is the problem: application funnel</li>" +
      "<li>A real live room showed up and you have setup time: webinar funnel</li>" +
      "<li>Your VSL is filmed, or lead flow is thin and friction has to drop: VSL to booked call</li>" +
      "<li>A low-ticket front end and a high-ticket back end both exist: ascension funnel</li>" +
      "<li>Everything else, and any doubt: DM to booked call. It works at any lead flow and it is the default for a reason</li>" +
      "</ul>" +
      "<p>Decide from the test numbers only, and do not re-decide mid-launch. Count every night of the test: conversations, keyword sends, calls booked, the awareness split, and your top five objections in their exact words.</p>"));

PHASE_2.tasks.push(D('Build an application that qualifies without leaking',
      "<p>If you use an application, every question has to earn its place, and you should be able to see where people quit it. Seven questions is a working set: name and handle, what they do now, their main goal, the biggest thing stopping them, what they have tried, their timeline, and how much they could invest to get the outcome.</p>" +
      "<p>Check the drop-off every night. A question that loses a third or more of the people who start it gets rewritten, moved later or cut the next morning, one change at a time so you know what fixed it. A question everyone answers that never predicts a close gets cut too. And if you have to cut anything, the timeline and budget questions survive. They are the qualification.</p>"));


/* --- additions to PHASE_4 --- */

PHASE_4.tasks.push(D('Run the weekly story structure',
      "<p>Reels get attention. Stories close. Stories are full screen, one person at a time, no comments and no comparison, which makes them the closest thing to a one-on-one conversation you have. Authority there is built by repetition: showing up daily and showing wins until people file you as someone in their world.</p>" +
      "<h5>One week, on repeat</h5><ul>" +
      "<li>Monday: a client result, with a direct call to action to message you</li>" +
      "<li>Tuesday: value and pain. Why they have not hit the goal yet, and the belief they need to drop</li>" +
      "<li>Wednesday: your personal story. A risk you took, where you are going</li>" +
      "<li>Thursday: your own wins, not just client wins. You are selling the identity as much as the method</li>" +
      "<li>Friday: a soft call to action. Message you for a free resource</li>" +
      "<li>Weekend: free choice. Keep the habit alive</li>" +
      "</ul>" +
      "<p>Two rules underneath it: give more than you take, and never be predictable. The moment people can guess what is next, they stop tapping.</p>"));

PHASE_4.tasks.push(D('Pre-handle your five biggest objections in content',
      "<p>Every objection you dread on a sales call should already have a piece of content answering it. When it does, calls start with someone who is already problem aware and solution aware, and the content has done the persuading for you.</p>" +
      "<h5>The drill</h5><ul>" +
      "<li>Write down the five objections you hear most, or expect to hear: price, time, 'I need to think', a partner, a past bad experience</li>" +
      "<li>For each one, name the belief underneath it. The objection is the surface; the belief is what the content has to break</li>" +
      "<li>Make one piece of content per objection that breaks the belief and replaces it, using a real example where you have one</li>" +
      "<li>Repeat the set on rotation. New followers arrive every week and have seen none of it</li>" +
      "</ul>" +
      "<p>If your attention is fine but your calls are not converting, this is usually the missing layer. It is a trust and readiness problem, not a sales script problem.</p>"));

PHASE_4.tasks.push(D('Rotate the four YouTube formats',
      "<p>Long videos are where trust is built. Short clips cannot change a mind or sell a mechanism in under a minute; a shelf of long videos can, and people chain from one to the next when each video points at another. Rotate four formats and you answer every reason someone says yes.</p>" +
      "<h5>The four formats</h5><ul>" +
      "<li>Raw sitdown: sells the person. Your story, a turning point, a belief that changed</li>" +
      "<li>Vlog: sells the world. Your routine, your environment, proof moments, the people around you</li>" +
      "<li>Value breakdown: sells the brain. One framework taught clearly, why most people fail at it, the real bottleneck</li>" +
      "<li>Case study: sells the proof. Who they were, the problem, what changed, the process, the result, why it worked</li>" +
      "</ul>" +
      "<p>At one video a week, the rotation covers all four every month. Every video you plan should answer one of three buyer questions: is this an opportunity I want, is this someone I want to spend time with, and do they have proof it works for people like me.</p>"));

PHASE_4.tasks.push(D('Manufacture replies before you sell',
      "<p>Stories are not just for reach. Run them as farms: sequences engineered so the audience talks back, because every vote, reply and keyword is a lead raising their hand, and every hand gets worked the same day.</p>" +
      "<h5>Four to start with</h5><ul>" +
      "<li>Polls farm: three polls (where are you from, what are you interested in, what content do you want) and the results decide your next two weeks of topics</li>" +
      "<li>Guess the number: first correct guess wins a free call. Every guesser gets a DM, not just the winner</li>" +
      "<li>Question box: ask me anything, answer the best five publicly, and bank the rest. Price questions get deflected, outcome questions get answered</li>" +
      "<li>Obstacle sticker: what is your biggest obstacle? The answers cluster into time, knowledge and fear, and each cluster becomes an objection-handling story in their own words</li>" +
      "</ul>" +
      "<p>Two rules underneath all of it. Every reply gets worked the same day with the intent check. And the link goes up last, never first: polls and keywords keep people inside the app, which is why the next stories get pushed.</p>"));

/* --- additions to PHASE_1 --- */
PHASE_1.tasks.push(D('Write your headline as the first qualifier',
  "<p>Qualification does not start on the application or the call. It starts at the headline, before anyone has watched or read a thing. A headline that names who you help and where they are stuck does two jobs at once: the right people lean in, and the wrong people remove themselves for free.</p>" +
  "<h5>The worksheet</h5><ul>" +
  "<li>Who, exactly: the role or identity of the person this is for</li>" +
  "<li>Stuck where: their current state, in the words they would use themselves</li>" +
  "<li>Going where: the state your offer takes them to</li>" +
  "<li>Who should not proceed: the reader you are happy to repel, named just as plainly</li>" +
  "</ul>" +
  "<p>Expect a smaller, better audience. People will tell you they did not book because the headline was not talking to them. That is the headline working, not failing.</p>"));

/* --- additions to PHASE_2 (continued) --- */
PHASE_2.tasks.push(D('Put a financial floor on your booking page',
  "<p>If your calendar is open to anyone, your calls fill with people who could never pay you. One plain line on the booking page fixes it before it costs you an hour: under a set amount, you are not financially qualified to work with us, so please do not book.</p>" +
  "<h5>Set your number</h5><ul>" +
  "<li>Take it from your own price: the floor is the minimum someone needs to realistically pay it, not a number copied from anyone else</li>" +
  "<li>State it once, early, where a booker cannot miss it, and state it without apology</li>" +
  "<li>Pair it with the calendar questions that carry the rest of the qualifying: what they do, where they are now, what they have tried</li>" +
  "</ul>" +
  "<p>This is self-selection, not rejection. The people it turns away were never going to buy, and the people it keeps arrive knowing the level they are stepping into.</p>"));

PHASE_2.tasks.push(D('Run the short reminder ladder',
  "<p>Not every offer needs the full pre-call stack on day one. This is the minimum ladder, the one that runs even when it is just you and a phone. Four touches, each with one job.</p>" +
  "<h5>The ladder</h5><ul>" +
  "<li>On booking: reply YES to confirm. No reply means the slot is not real yet, and you chase it the same day</li>" +
  "<li>24 hours before: have your goal and your biggest blocker ready. It makes them think before the call instead of during it</li>" +
  "<li>1 hour before: here is the link, plus anything they need open in front of them</li>" +
  "<li>On a no-show: one message offering two specific new times. Two, not an open calendar, so rebooking takes one reply</li>" +
  "</ul>" +
  "<p>When the full stack from the pre-call lesson is built, this ladder runs inside it. Until then, this is the floor. Never book a call with nothing underneath it.</p>"));

/* --- additions to PHASE_4 (continued) --- */
PHASE_4.tasks.push(D('Prove it, do not promise it: selling in a trust recession',
  "<p>Your buyers have been lied to before, and they know it. The default assumption now is that everyone is exaggerating, which is why sales cycles keep getting longer. Content that promises harder makes it worse. Content that proves shortens the cycle.</p>" +
  "<h5>What proving looks like</h5><ul>" +
  "<li>Show the process, not just the outcome: the actual work, screens, documents and decisions</li>" +
  "<li>Show artefacts: the sheets, systems and assets a client actually gets</li>" +
  "<li>Show receipts in context: a result with the story of how it happened beats a screenshot on its own</li>" +
  "<li>Say what it is not: honest limits build more trust than another claim</li>" +
  "</ul>" +
  "<p>Flexing is dead, and being genuine on its own is not enough either. Every rule in this phase exists because of this lesson: your content is evidence, delivered daily, until believing you is the easy option.</p>"));

PHASE_4.tasks.push(D('Audit your touchpoints: hours, contacts, platforms',
  "<p>Trust is mostly exposure, accumulated. Jonas borrows a rule of thumb he attributes to Google research: a buyer needs roughly 7 hours of interaction with you, across 11 touchpoints, on 4 different platforms, before buying feels safe. Treat the numbers as a lens, not a law. The audit underneath them is the useful part.</p>" +
  "<h5>The audit</h5><ul>" +
  "<li>Hours: add up the watch time a determined lead could actually get from you today. Short clips alone take hundreds of posts to reach hours; a handful of long videos does it</li>" +
  "<li>Touchpoints: count the distinct places a lead can bump into you in a week: posts, stories, lives, emails, a group, DMs</li>" +
  "<li>Platforms: count the platforms where you genuinely exist. One platform means one algorithm between you and every future client</li>" +
  "</ul>" +
  "<p>Fill the emptiest column first. For most people that is hours, and the fix is long form: short content gets them onto the bridge, long content walks them across it, and the offer waits on the other side.</p>"));

PHASE_4.tasks.push(D('Build a proof page once you have results',
  "<p>Once clients are winning, give the wins their own home: a second profile that does nothing but stack results, linked from your main bio. Prospects who are close to buying do not need more teaching. They need volume of proof, in one place, with nobody selling at them.</p>" +
  "<h5>The build</h5><ul>" +
  "<li>Bio in four parts: who it is for, what the program does, the result it produces, and the link to book</li>" +
  "<li>Highlights that walk the offer: one highlight per pillar of what you deliver, then an apply or book highlight</li>" +
  "<li>One highlight per student, named, so a prospect can find someone like them</li>" +
  "<li>Posts that are results only: the person, the starting point, what changed</li>" +
  "</ul>" +
  "<p>Sequence matters: this page only works with real results on it, so it comes after your first wins, not at the start. Built then, it quietly closes people your content already warmed.</p>"));

/* --- additions to PHASE_5 --- */
PHASE_5.tasks.push(D('Turn onboarding into market research',
  "<p>The best content research you will ever get is sitting inside the people who just paid you. They can tell you, in their own words, why they bought and what nearly stopped them. Ask while it is fresh, on the onboarding form, and feed the answers straight back into your content.</p>" +
  "<h5>The questions</h5><ul>" +
  "<li>Why did you buy from us, and what was the final thing that pushed you over the edge?</li>" +
  "<li>Which piece of content made you buy, or got you closest?</li>" +
  "<li>What do you like and dislike about how we teach and deliver?</li>" +
  "<li>Who else were you watching before you chose us?</li>" +
  "</ul>" +
  "<p>Video or voice answers beat typed ones: you hear the exact phrasing. Those phrases become hooks, angles and sales language, aimed at the next buyers who look just like this one.</p>" +
  "<div class=\'do\'><b>Do this</b>Add the four questions to your onboarding form this week, and read every answer before you plan next week\'s content.</div>"));

PHASE_5.tasks.push(D('Build your course backwards, from real questions',
  "<p>Do not pre-build a course out of what you think clients will ask. You will film lessons nobody needs while repeating yourself daily on the questions they actually have. Build it backwards instead: deliver first, log what recurs, and turn the repeats into lessons.</p>" +
  "<h5>The loop</h5><ul>" +
  "<li>Keep a repeat-question log: every question a client asks you twice goes on it</li>" +
  "<li>When a question hits the log three times, it earns a lesson, a template, or both</li>" +
  "<li>Answer with the lesson next time, and note which lesson you sent</li>" +
  "<li>Review the log monthly: the gaps in the log are the gaps in your delivery</li>" +
  "</ul>" +
  "<p>Your course becomes a map of real problems in the order clients hit them, and your call time shifts from repeating basics to the work only you can do.</p>"));

PHASE_5.tasks.push(D('Run topic-led group calls, not open Q and A',
  "<p>Open question calls feel generous and teach badly: your clients do not know what they do not know, so they cannot ask for the thing that would move them. Map the calls instead. Every group call has a topic chosen in advance, aimed at the bottleneck the group is actually at.</p>" +
  "<h5>The standard</h5><ul>" +
  "<li>Plan the month of topics ahead, sequenced to where clients are in the roadmap</li>" +
  "<li>Teach first, then take questions on that topic while it is live in their heads</li>" +
  "<li>Record every call and file it with a line of context: what it covers, who it is for, when to send it</li>" +
  "<li>Send the recording, not your presence, when an old question comes back</li>" +
  "</ul>" +
  "<p>The library compounds. A year of mapped calls becomes a second course your clients navigate themselves, and your live time goes to the problems that are actually new.</p>"));

PHASE_5.tasks.push(D('Repurpose one video into a newsletter',
  "<p>A newsletter is the cheapest extra touchpoint you own: no algorithm, no filming, and it lands in the one inbox your lead checks daily. The system is repurposing, not writing from scratch. One strong video becomes one email.</p>" +
  "<h5>The workflow</h5><ul>" +
  "<li>Pick the best performing long video of the week or month; its argument is already proven</li>" +
  "<li>Turn it into an email: the hook, the framework, one story, one action, in the same order the video teaches it</li>" +
  "<li>Add one thing the video did not have: a template, a checklist, or the honest mistake you cut</li>" +
  "<li>Market the issue in a story sequence so the list keeps growing from the audience you already have</li>" +
  "</ul>" +
  "<p>Solo, do this monthly with your best video. With help, it is a weekly job you hand over whole: the raw material already exists, so the system runs without your hours.</p>"));

PHASE_5.tasks.push(D('Hire specialists against the bottleneck',
  "<p>Your first hires are not a team, they are plugs for specific leaks. Hire against the bottleneck role, with a written list of outputs that role owns, and ask one question before every hire: at ten times your income, are you still the only operator? Who does this work then?</p>" +
  "<h5>A working order for a coaching offer</h5><ul>" +
  "<li>Copywriter: every written asset, sales pages, pre-call emails, story scripts, newsletters</li>" +
  "<li>VA: builds, automations, posting, the admin that loses money when it slips</li>" +
  "<li>Content roles: creative direction, scripting and editing, once the message is proven</li>" +
  "<li>DM setter: when conversation volume, not skill, is what caps your bookings</li>" +
  "</ul>" +
  "<p>Specialist before generalist, every time. A person hired to own one measurable output outperforms a helper hired to do a bit of everything, and you find out within weeks whether the hire worked.</p>"));
