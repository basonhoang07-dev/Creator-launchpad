/* ===========================================================================
   Offer to Client — the lessons

   All 55 items, taken from the CL 3.0 Notion modules:
     Branding Sheets · D1 Offer Mastery · Appointment Setting ·
     High-ticket Sales · Content Ecosystem

   Loaded by roadmap.html. Kept separate from the page so the teaching can be
   re-pulled from Notion without touching any of the page logic.

   D(title, teaching, track) — track is optional, 'inbound' or 'outbound'.
   Tasks with a track still render for everybody; they are just labelled.
   =========================================================================== */

function D(title, body, track) { return { t: title, teach: body, track: track }; }

var PHASE_0 = {
  n: 0,
  title: 'Positioning',
  goal: 'Three sheets before you build anything: what you are known for, who you are for, and who else is already selling near you. The other three branding sheets are content prep and come later.',
  tasks: [
    D('Fill the Zone Of Genius sheet',
      "<p>Your zone of genius is <strong>the pattern you see and solve better than most</strong>. It becomes the one idea people associate with you. It is not what you <em>can</em> do — it is what you are known for doing repeatedly and extremely well.</p>" +
      "<h5>What it looks like when it is sharp</h5><ul>" +
      "<li>Scaled to $400k/mo purely through organic content</li>" +
      "<li>Made $425,800 with an AI tracking system</li>" +
      "<li>Lost 40lbs in three months working less than an hour a day</li>" +
      "</ul>" +
      "<h5>Your industry</h5><ul>" +
      "<li>What industry do you operate in?</li>" +
      "<li>How would you describe the current state of it?</li>" +
      "<li>What major trends are you seeing right now?</li>" +
      "<li>How competitive is it?</li>" +
      "</ul>" +
      "<h5>Your contrarian view</h5><ul>" +
      "<li>What do you believe that others in your industry do not?</li>" +
      "<li>Why do you believe it so strongly — experience, results, frustration, observation?</li>" +
      "<li>What pisses you off in your industry right now?</li>" +
      "<li>What is missing that you feel called to fill?</li>" +
      "</ul>" +
      "<h5>Your evidence</h5><ul>" +
      "<li>What do people consistently compliment you on?</li>" +
      "<li>What do friends, clients or your audience come to you for?</li>" +
      "<li>What skills or subjects have you put significant time into?</li>" +
      "<li>What problems have you been through that you can now help someone else with?</li>" +
      "<li>What can you talk about for hours?</li>" +
      "<li>What comes easy to you but seems difficult to others?</li>" +
      "</ul>" +
      "<div class='do'><b>Do this now</b>Answer all of it in a Google Doc, in depth. Then write your zone of genius as a single claim, in the shape of the three examples above.</div>"),

    D('Fill the Dream Followers sheet — persona, then ICP',
      "<p>Two different things on one sheet, and people conflate them. The <strong>dream follower</strong> is who your content is for. The <strong>ICP</strong> is the slice of that fanbase you actually sell to.</p>" +
      "<h5>Dream follower persona</h5><ul>" +
      "<li>Who are they, what is their story, what do they look like? (three answers)</li>" +
      "<li>What are they passionate about?</li>" +
      "<li>What are their goals, dreams and desires?</li>" +
      "<li>What are their deepest fears?</li>" +
      "<li>What are their struggles?</li>" +
      "</ul>" +
      "<h5>Picking a side</h5><p>This is the part that makes content land instead of float:</p><ul>" +
      "<li>Who are you trying to piss off?</li>" +
      "<li>Who are you trying to make emotional?</li>" +
      "<li>Who are you trying to motivate?</li>" +
      "<li>Who are you trying to relate to?</li>" +
      "</ul>" +
      "<h5>ICP — the people inside that fanbase who buy</h5><ul>" +
      "<li>How much are they making</li>" +
      "<li>What business or service they provide</li>" +
      "<li>Current situation</li>" +
      "<li>Desired outcome</li>" +
      "<li>Perceived problems</li>" +
      "<li>What makes a customer a <em>bad</em> fit</li>" +
      "<li>What limiting beliefs your ICP holds</li>" +
      "</ul>" +
      "<div class='do'><b>Do this now</b>Build the sheet in a Google Doc. Three answers minimum per question — the first answer is always the obvious one.</div>"),

    D('Fill the Competitor Research sheet — 5 competitors',
      "<p>List five of your main competitors, and for each note <strong>five things you like</strong> about their content and their brand.</p>" +
      "<p>Split it deliberately into the two:</p><ul>" +
      "<li><strong>Content</strong> — what they make, what formats, what hooks</li>" +
      "<li><strong>Brand</strong> — how they position, what they are known for, what they charge</li>" +
      "</ul>" +
      "<p>You are not copying. You are building a map of what the market already sounds like, so that when you write your own offer you can tell whether it is a category of one or just another entry in a crowded list.</p>" +
      "<div class='do'><b>Do this now</b>Five real names with real links. Replace every placeholder — a sheet of generic observations is worth nothing.</div>")
  ]
};

var PHASE_1 = {
  n: 1,
  title: 'The Offer',
  goal: 'The single biggest lever you can pull. Position it so nobody can compare you to anyone else, and sales stops being a fight. You finish this phase with a deliverable sheet and a booking link.',
  tasks: [
    D('Run market research — book 20-minute calls and ask the nine questions',
      "<p><strong>Goal:</strong> understand exactly what product your ideal clients are looking for. If you have not sold yet, you need to do this part to perfection. And even if you already have a product, you still need it to understand product–market fit — creating a product a market segment <em>absolutely wants and desires</em>.</p>" +
      "<h5>The process</h5>" +
      "<p>Book a free 20-minute call with your followers and offer something free — early access, a story shoutout, whatever. Get a Zoom notetaker running (read.ai, Fathom, Fireflies).</p>" +
      "<h5>Ask exactly these</h5><ul>" +
      "<li>What do you struggle with right now, and where do you want to be?</li>" +
      "<li>Short story about yourself — what happened in the past that led you here? What major life events led to your interest in [topic]?</li>" +
      "<li>What is preventing you from accomplishing your goals on your own?</li>" +
      "<li>We are thinking about creating an exclusive community with people just like you with [pain point] to get [desired result]. What would you like about that community?</li>" +
      "<li>What could we add that would make it extremely valuable?</li>" +
      "<li>How much would you pay for a program like this?</li>" +
      "<li>What would someone pay more for?</li>" +
      "<li>What would make <em>you</em> want to pay more?</li>" +
      "</ul>" +
      "<div class='do'><b>Do this now</b>During or after each call, list every problem the avatar faces. Ten minimum. Keep going past the obvious ones.</div>"),

    D('Build the irresistible offer — 4 variables, then the core components',
      "<p><strong>Why bother?</strong> If you are not making at least $30k/mo, do not get many referrals, and struggle to scale — adjusting your offer is usually the issue. It is the single biggest lever you can pull for profit.</p>" +
      "<p>Position it so uniquely they cannot compare you to others. Then you are never constrained by price, because it is a value-based offer. <em>Master your offer and sales becomes easy.</em></p>" +
      "<h5>The 4 variables of a good market</h5><ul>" +
      "<li>Extreme pain</li><li>Purchasing power</li><li>Easy to target</li><li>Growing market</li>" +
      "</ul>" +
      "<h5>Riches in the niches — same product, 100x the price</h5><ul>" +
      "<li>I help people achieve their dream physique — <strong>$20</strong></li>" +
      "<li>I help skinny people bulk up and put on muscle — <strong>$500</strong></li>" +
      "<li>I help busy businessmen be more energised and lose weight without spending more than an hour in the gym — <strong>$2,000</strong></li>" +
      "</ul>" +
      "<p>The goal of great writing is for the reader to understand. <strong>The goal of great copy is for the prospect to feel understood.</strong> Articulate their problems better and you can sell the solution better. The bigger the pain, the more they pay upfront.</p>" +
      "<h5>Core components</h5>" +
      "<p><strong>1. Dream outcome.</strong> <em>I help [specific outcome] in [time period] without [biggest pain or fear].</em><br>Example: I help business owners and coaches hit $50–100k/mo in 60 days without spending all day doing outreach and posting reels.</p>" +
      "<p><strong>2. List every perceived problem</strong> a client would have about your offer, and answer all of them. Example: <em>hire bad sales reps</em> → you have a huge pipeline from the training and 2+ years in sales. <em>Not have control over the business</em> → coach hops on group calls any time, and you keep approval before anything moves.</p>" +
      "<h5>Then list 5 main deliverables</h5>" +
      "<p>Each one solving a problem you listed. The pattern — name the outcome, then what it concretely is:</p><ul>" +
      "<li><strong>DFY systems and processes:</strong> track every lead so you lose no sales, save time with DFY SOPs, one centralised system to scale. → We build your entire sales CRM, Notion scripts, Discord automations.</li>" +
      "<li><strong>Offer blueprint:</strong> charge $5–10k upfront and be a category of one. No more price comparisons. → Our exact offer blueprint plus nonstop consulting.</li>" +
      "<li><strong>Content mastery:</strong> attract and nurture dream clients completely organically. → Scripting tutorials, content blueprint, access to our creative director.</li>" +
      "<li><strong>Ads masterclass:</strong> flood your inbox with qualified inbound. → Ad scripting tutorial, winning ad blueprint, in-house media buyer, 1-1 launch call.</li>" +
      "<li><strong>Sales assets:</strong> turn sales calls into onboarding calls where you barely sell. → VSL template, DFY lead magnets, ManyChat automations, post-booking sequence.</li>" +
      "</ul>" +
      "<h5>The two scaling questions</h5>" +
      "<p><strong>What would I deliver if my product cost 10x?</strong> Run ads for them, train setters 1-1, hire a VA, set up Zapier, in-house editor, automations. Pick a few and actually implement them.</p>" +
      "<p><strong>What would I deliver if it cost 1/10th and still had to beat my current value?</strong> Crazy group training, valuable video modules, Looms for bottlenecks, tons of role plays, accountability check-ins. <em>Implement every single thing you list here.</em></p>" +
      "<div class='do'><b>Do this now</b>Use the offer template sheet, then brainstorm your own five deliverables.</div>"),

    D('Price it — competitors first, then climb',
      "<p>Look at competitors and charge in the same ballpark. <strong>This is very temporary.</strong> The goal is to raise it as fast as you can.</p>" +
      "<p>Increase the price by a fifth each time until you are at a <strong>35% close rate with genuinely good closing skills</strong>. That is how you find the sweet spot. You can only go down to $0 on price — you can go infinitely higher on value.</p>" +
      "<h5>The mistake almost everyone makes</h5><ul>" +
      "<li>Look at the marketplace</li><li>Take the average of what everyone offers</li>" +
      "<li>Price slightly below to stay <em>competitive</em></li>" +
      "<li>Offer what competitors offer plus <em>a little more</em></li>" +
      "<li>End up at a value proposition of <strong>more for less</strong></li>" +
      "</ul>" +
      "<p><strong>High prices signal high value.</strong> The blind wine taste test: cheap, medium, expensive — all the same wine, different tags. People perceived more value purely because the price was higher.</p>" +
      "<p>Goal: be expensive enough that a buyer pauses and thinks <em>this cannot be the same category of solution as everyone else</em>. That is a category of one.</p>" +
      "<h5>The value equation</h5><ul>" +
      "<li><strong>Dream outcome</strong> — is the end result meaningful to them?</li>" +
      "<li><strong>Perceived likelihood of success</strong> — do they think they will actually succeed?</li>" +
      "<li><strong>Time delay</strong> — how long until they see the result?</li>" +
      "<li><strong>Effort and sacrifice</strong> — what else does it cost them?</li>" +
      "</ul>" +
      "<p>Drive the bottom two toward zero — make it more convenient, more seamless, less effort. Then raise the top two — more meaningful outcome, higher perceived likelihood of success.</p>"),

    D('Add bonuses and a guarantee',
      "<h5>Bonuses</h5>" +
      "<p>The value of your bonuses should always exceed the core offer — people subconsciously conclude the core must be worth even more.</p><ul>" +
      "<li>Tell them in context: what will it do for them, how does it specifically improve their situation, faster or easier or less effort?</li>" +
      "<li>Provide social proof and paint a vivid picture — include money and time saved</li>" +
      "<li><strong>Tools and checklists beat extra training</strong> — lower effort, lower time, higher perceived value</li>" +
      "<li>Always attach a price tag</li>" +
      "<li>Solve problems they will hit <em>in the future</em> — it implies they are going to succeed, which raises conviction</li>" +
      "</ul>" +
      "<h5>Templates</h5>" +
      "<div class='script'>Only people who sign up for [program] get access to Bonus #1, #2 and #3 — never for sale and not available anywhere else.</div>" +
      "<div class='script'>If you buy today I will add [bonus] that normally costs $1,000, free. I do that to reward action takers.</div>" +
      "<p>Worked example: pre-loaded landing page software with our templates ($500) — that website led to a $5k revenue increase. Access to the sales CRM ($200/mo) — $13.4k cash collected in one day. Text support for your clients — saves 3–4 hours a day with automated FAQ responses.</p>" +
      "<h5>Guarantees</h5>" +
      "<p>A huge selling point, because people think buying is too risky. Zero risk appeals to everyone — use it. <strong>Be bold and own your position.</strong></p>" +
      "<p><strong>Unconditional:</strong> 30-day money back, no questions asked. Shows an insane amount of confidence.</p>" +
      "<p><strong>Conditional:</strong> if you do not achieve X in Y time, we keep working with you until you do — provided you attend the calls. Or: if you do not achieve X in Y, full refund plus an extra $1,000, and we keep working free, if you do X, Y and Z. A safety net without handing them an easy refund button.</p>"),

    D('Design how you deliver it — war map, 1-1s, group calls, check-ins',
      "<p><strong>Goal:</strong> deliver so well the client wants to continue past the 90 days. Your business should run on monthly recurring revenue, not a constant hunt for new clients — it is the only sustainable, exponential way to grow.</p>" +
      "<p>The program must focus on <em>execution</em>: the most value comes from the war map call, the 1-1s and the group calls. Minimum two weekly group calls, lots of 1-1 support, and a strong war map.</p>" +
      "<h5>War map call</h5>" +
      "<p>Give clarity on the next 90 days. Timestamps for when they finish modules, implement strategies, expect results. Explain the support structure and how to use it. Then get them hyped — show what other clients achieved by taking action, so they listen to everything you say.</p>" +
      "<h5>1-1 call</h5><ul>" +
      "<li>Solve the problem they have <strong>now</strong>. Do not solve a problem from six months ahead — reassure them you will be there when it arrives.</li>" +
      "<li>Make advice extremely personal and give action items. Vague advice that applies to everyone helps nobody.</li>" +
      "<li>Do not overload them — overwhelmed clients quit before they start.</li>" +
      "<li>Ask good questions so they reach the conclusion themselves. Far more bought in that way.</li>" +
      "<li>Hold your time in high regard. Set expectations and keep a strict cut-off.</li>" +
      "</ul>" +
      "<h5>Loom method</h5>" +
      "<p>Let clients request feedback on a specific topic and answer with a 5–10 minute Loom instead of a call. Faster and a far more efficient use of your time.</p>" +
      "<h5>Group calls</h5>" +
      "<p>Two or more weekly, at different times so everyone can make one. Thirty minutes of slides on a problem lots of clients share, thirty minutes of Q&amp;A. Themed workshops are excellent for retention, especially with MRR.</p>" +
      "<h5>Accountability check-ins</h5>" +
      "<p>Check in constantly — do not assume they are as self-motivated as you. A weekly text at minimum. Better: a client success manager on a weekly call with every client for the first 60 days, reviewing their progress tracker against their goals.</p>" +
      "<h5>The extras that compound</h5><ul>" +
      "<li>Welcome and introduce new clients properly — treat it like their new home</li>" +
      "<li>Incentivise the behaviour you want. Celebrate wins. If they will not post their own win, post it for them</li>" +
      "<li>As the community grows you stop being the only source of help — that is good. Connect people who were recently where the new client is</li>" +
      "<li>Create sub-communities as you scale so it stays tight-knit rather than diluted</li>" +
      "<li>MRR: after the program ends, charge a weekly fee to stay in the community</li>" +
      "</ul>"),

    D('Build the D1 fulfilment system so it scales past you',
      "<p>Your initial offer has one job: <strong>get the client a result, as fast as possible.</strong> Do not over-engineer fulfilment on day one.</p>" +
      "<p>But as you grow, that stops being enough. Fulfilment has to improve on a schedule, not only when something breaks. Once the offer is dialled in enough to guarantee the result, the constraint stops being the offer — it becomes whether you can onboard more than a handful of clients a month without the wheels coming off. <em>Most people plateau around $30k/mo because their onboarding or fulfilment literally cannot scale past what they can personally hold together.</em></p>" +
      "<h5>1. Re-map every client failure and pre-build the fix</h5>" +
      "<p>List every way a client has failed to get the result. For each, decide whether the fix is done <em>with</em> them or done <em>for</em> them so it never depends on their follow-through again: updated roadmap, SOPs, systems, AI automation, DFY placement (hiring someone), or DFY built (you make it, ideally outsourced to a VA).</p>" +
      "<h5>2. Reverse-engineer your best result into a roadmap</h5>" +
      "<p>Take your single best client outcome — or your own journey if that is the strongest case — and map the full path from day one onboarding to hitting the guarantee. Every new client should see exactly where they sit on it at any moment.</p>" +
      "<h5>3. Turn your best client's questions into SOPs</h5>" +
      "<p>Find the handful of questions your best performers keep asking and build a doc or short video for each. Record once, never explain live again.</p>" +
      "<h5>4. Find the metrics that predict the result</h5>" +
      "<p>Work out the few numbers that actually determine the outcome — for a fitness coach, food intake logged against fat loss. Give clients a simple way to track and see those numbers themselves.</p>" +
      "<h5>5. Get your best client on a feedback call</h5>" +
      "<p>Not a testimonial call. Ask: knowing the program now, would you refer someone to it, and why? What would make this program better? What takes up the most time in your industry and what could be improved?</p>" +
      "<h5>6. Run a monthly feedback form</h5>" +
      "<p>Low-friction, recurring, surfaces honest opinions every month. It doubles as a content source — client language becomes your hooks and scripts.</p>" +
      "<h5>7. Get feedback from existing clients</h5>" +
      "<p>Call at least five, successful and unsuccessful both. Full question list is in the Getting Feedback task below.</p>" +
      "<h5>8. Log every fulfilment change</h5>" +
      "<p>Keep a changelog — what changed, why, what it replaced — so an improvement for one cohort does not silently break something that worked for another. This is what makes fulfilment compound rather than churn.</p>" +
      "<div class='do'><b>The core idea</b>Your offer scales exactly as far as your fulfilment system does, and no further. Every step above removes a manual bottleneck and replaces it with something that runs the same for the 50th client as the 5th.</div>"),

    D('Write the offer pitch deck — the deliverable sheet',
      "<p>Once you have complete clarity on the program, create a <strong>2–3 page document</strong> of exactly what it includes.</p>" +
      "<p>In this specific order:</p><ul>" +
      "<li>Deliverables</li><li>Coaching structure</li><li>Process</li><li>Bonuses</li><li>Guarantees</li>" +
      "</ul>" +
      "<p>The order matters — deliverables first because that is what they are buying, guarantees last because that is what removes the final hesitation.</p>" +
      "<div class='do'><b>Do this now</b>Fill out the deliverable sheet properly. There are worked examples for both fitness and UGC offers in the template pack.</div>"),

    D('Submit the offer for approval',
      "<p>Once you have done every step and watched the offer mastery modules, answer these — then send it to Akira to look at.</p><ul>" +
      "<li>What is your new offer? (who you help, how you help them, their desired result)</li>" +
      "<li>What are the 3–5 points that make your program stand out from everyone else — your unique mechanisms?</li>" +
      "<li>What specifically did you change compared to your last offer?</li>" +
      "<li>What is your irresistible guarantee?</li>" +
      "<li>Describe your ideal prospect in detail. What does their current situation look like?</li>" +
      "<li>Upload your deliverable sheet.</li>" +
      "</ul>"),

    D('Get feedback from five existing clients — the twelve questions',
      "<p><strong>The easiest way</strong> to improve your product, get more client results and make more money. One of the most overlooked parts of building an offer is simply asking the people already in it.</p>" +
      "<p>Call at least five existing clients — successful <em>and</em> unsuccessful, ideally everyone. No clients yet? Do it with followers.</p><ul>" +
      "<li>Why did you buy the program?</li>" +
      "<li>What resonated with you most in my content?</li>" +
      "<li>What pushed you over the edge to get in contact with me?</li>" +
      "<li>What specifically made you buy?</li>" +
      "<li>What could we have done better in the sales process?</li>" +
      "<li>What part of the program do you like most?</li>" +
      "<li>What part do you not like?</li>" +
      "<li>What could we add that would make it extremely valuable?</li>" +
      "<li>How much would you pay for a community like this?</li>" +
      "<li>What would someone pay more for?</li>" +
      "<li>What would make you want to pay more?</li>" +
      "<li>If you knew the value you would get, would you buy again? — get them to really elaborate this one</li>" +
      "</ul>" +
      "<p>Probe deeper on every point. <strong>Put your ego aside</strong> — the more honest the feedback, the better the offer gets.</p>" +
      "<h5>Onboarding form</h5>" +
      "<p>Build one that captures <em>why</em> people bought into you. That answer is what you double down on in your marketing, and it is one of the best sources of content ideas you will have.</p>"),

    D('Set up your call booking link',
      "<p>No need to overcomplicate it. Just have somewhere a prospect can book a call with you.</p>" +
      "<p>A 1-1 strategy call on Calendly is enough. The point is that the next phase has a destination — everything in Booked Calls assumes this link exists.</p>")
  ]
};

var PHASE_2 = {
  n: 2,
  title: 'Booked Calls',
  goal: 'Take someone who showed interest and move them from conversation to booked call. Not selling — getting the right person into the right conversation. This is the phase that produces money fastest.',
  tasks: [
    D('Understand what appointment setting actually is',
      "<p>Appointment setting is simply <strong>getting a potential client to book a call with you</strong>. You take someone who has shown interest and move them from <em>conversation → booked call</em>. For us this usually happens in the DMs.</p>" +
      "<p>Someone might reply to your story, DM you a keyword, respond to your content, engage with your profile, or show interest in your offer. From there you start a conversation, understand where they are, and work out whether they are a good fit.</p>" +
      "<h5>The basic process</h5><ul>" +
      "<li>Lead comes in</li><li>Start the conversation</li><li>Understand their situation</li>" +
      "<li>Identify their problem and goal</li><li>Qualify them</li><li>Invite them onto a call</li><li>Book the appointment</li>" +
      "</ul>" +
      "<p>The goal is <strong>not</strong> to sell the entire program through DMs. It is: create a real conversation → qualify the lead → get them onto a call. The sales call is where you go deeper, present the offer, handle objections and close.</p>" +
      "<div class='do'><b>The whole job in one line</b>Getting the right person into the right conversation.</div>"),

    D('Learn the two dials: Trust and Incentive',
      "<p>Every conversation lives or dies on two variables. <strong>Not one or the other — both, always.</strong></p>" +
      "<h5>Trust</h5>" +
      "<p>Built through acknowledgment, relatability and social proof during rapport and qualifying — through your content and through the DM itself. Trust is really a measure of warmth: the warmer the lead, the more likely they buy.</p><ul>" +
      "<li>Mirror the lead's energy instead of running your own agenda</li>" +
      "<li>Actually listen — respond to what they said, not what your script expected</li>" +
      "<li>Bring personal stories that match their situation, with specific details that dig at the same emotions</li>" +
      "</ul>" +
      "<h5>Incentive</h5>" +
      "<p>Built through pain digging and urgency. It determines show-up rate and whether the first call closes.</p><ul>" +
      "<li>Deepen the pain with probing follow-ups instead of accepting the first surface answer</li>" +
      "<li>Get them to name their actual why, not the surface goal</li>" +
      "<li>Have them articulate the contrast — what happens if they hit the goal versus if nothing changes</li>" +
      "<li>Ask directly: who is actually responsible for getting them there?</li>" +
      "</ul>" +
      "<p><em>Incentive cannot be manufactured from nothing — only surfaced and sharpened. If a lead has zero incentive to change, that is not a conversation to force. You can lead a horse to water.</em></p>" +
      "<div class='do'><b>The fastest diagnostic you have</b>When a conversation stalls, ask which dial is low. No urgency → dig pain, more rapport will not fix it. Feels the pain but will not engage with you → trust gap, slow down and bring proof.</div>"),

    D('Run the client shoes theory (setters)',
      "<p>Answer and continue every conversation by double-thinking <em>what would my client say?</em> Put yourself in their shoes.</p>" +
      "<p>What you are imitating: mannerisms, style of language, and the specific slang they always use — brotha, g, bro, man, awesome, alright. It makes the DMs natural, and makes the lead believe they are actually talking to the client without second-guessing it.</p>" +
      "<h5>As a setter</h5><ul>" +
      "<li>Get on calls daily with your client to understand how they speak</li>" +
      "<li>Watch their videos, list their vocabulary and mannerisms</li>" +
      "<li>Study the offer — if you do not understand it you can never sell it</li>" +
      "<li>If your client is a middle-aged woman selling content coaching, she would not say <em>brotha</em> or <em>g</em></li>" +
      "</ul>" +
      "<h5>As the business owner</h5><ul>" +
      "<li>Prioritise what your setter needs — the more you tailor the DMs for them the more calls they book</li>" +
      "<li>Talk to your setters daily, give tips on how you speak, and review DMs explaining how you would have answered</li>" +
      "</ul>"),

    D('Learn the four lead types and how each one needs handling',
      "<h5>Inbound vs outbound psychology</h5>" +
      "<p><strong>Inbound</strong> message you first. Warm, already interested, you represent the solution. Your job is not to mess it up — do not oversell, do not get pushy. Like someone walking into a shop already looking for help. Be more direct, qualify faster, move to booking quicker.</p>" +
      "<p><strong>Outbound</strong> have not asked for anything. Their instinct is resistance — <em>who is this and what do they want?</em> Like approaching someone at a party: you do not open with business. You have to earn the right to ask qualifying questions.</p>" +
      "<h5>The four types</h5>" +
      "<p><strong>Warm.</strong> Usually inbound, already know what you do, already have urgency. Do not overthink it, skip heavy pain-building, guide straight to the call.</p>" +
      "<p><strong>Ego / know-it-all.</strong> Convinced they have it figured out despite no results. Common on outbound. Assert authority gently: <em>if you already know what to do, why have you not hit the goal yet?</em> Let them explain, point out the gap. Most will not budge — do not burn hours.</p>" +
      "<p><strong>Approval seekers.</strong> Constantly self-deprecating. They need to feel understood before anything. Build rapport, find where the pain comes from, relate directly — <em>I felt exactly the same before I got help</em>. Once they open up, that is your window.</p>" +
      "<p><strong>Big wall.</strong> One-word answers. Keep questions short and open-ended — long questions lose them entirely. <em>What would hitting X actually do for you?</em> Keep the call pitch casual: <em>hard to explain over text, let's just hop on a call.</em></p>" +
      "<h5>Pain theory and bridging the gap</h5>" +
      "<p>People downplay their problems until you make them sit with it. Ask how long it has been going on, and what it is actually costing in money, time and stress. Then bridge: <em>picture six months from now, this is fully handled — what does that look like?</em> Now they hold the dream state and current reality side by side, and the gap does the persuading.</p>" +
      "<div class='do'><b>The biggest mistake</b>Trying to be someone you are not. Naturally casual? Do not force corporate. Naturally professional? Do not force being someone's best mate. People sense fake instantly and it kills trust on contact.</div>"),

    D('Format your DM inbox so leads stop falling through',
      "<p>With hundreds to thousands of DMs you have to format a business account properly or you will lose leads by simply forgetting them.</p>" +
      "<p>A business account gives you Primary, General and Channels. The obvious move is personal chats in General and leads in Primary — that is not the most efficient split.</p>" +
      "<p><strong>The best split:</strong> keep <em>outbound</em> in Primary, and move <em>inbound leads together with nurtured conversations and proposed calls</em>. That keeps your focus on the conversations closest to booking while still letting you do outreach efficiently.</p>"),

    D('Qualify in three messages — without sounding like an interview',
      "<p>You do not need twenty minutes of small talk to know if someone is worth your time. Qualifying early is not rude, it is respecting your own time.</p>" +
      "<h5>What you need, quickly</h5><ul>" +
      "<li>Where they are from — does their situation support buying what you sell?</li>" +
      "<li>Working or studying — do they have income?</li>" +
      "<li>What they do — gives you rapport material</li>" +
      "<li>Why they reached out — the actual problem</li>" +
      "</ul>" +
      "<h5>Worked inbound example</h5>" +
      "<div class='script'>You: What's up [Name], appreciate you reaching out — mind if I ask a few quick questions?\nLead: Alright\nYou: Where you from?\nLead: Washington\nYou: Damn, always wanted to check out DC. You working there?\nLead: Yeah man\nYou: Not working for the president are you? What's your day look like — sitting around all day?\nLead: Haha I wish. I'm a banker, so yeah, sat on my arse all day.</div>" +
      "<p>Three messages and you know: American, finance, sedentary job. That is material — health from sitting, stress from banking, likely decent income.</p>" +
      "<p>The trick is staying casual. <em>You don't work for the president, do you?</em> lands miles better than <em>What is your occupation?</em></p>" +
      "<p>For outbound, same information target — but warm them up first: comment on a story or post, chat briefly, then work in where they are based and what they do.</p>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Run the inbound framework',
      "<p>Inbound leads message you first. They have seen the content, they are interested, and they are reaching out because they want help. Your job is to not mess it up.</p>" +
      "<p><strong>Structure:</strong> rapport → pain → urgency → competitive advantage (not always necessary) → pitch → post-call rapport.</p>" +
      "<p><em>This is a rough guide to a structure that works. You should never follow it word for word or be reliant on it.</em></p>" +
      "<h5>Intro</h5>" +
      "<div class='script'>Hey (name) appreciate you reaching out\nCool if I ask you a couple questions to see how I can help?</div>" +
      "<h5>Qualification (only if needed)</h5>" +
      "<p>Only ask where they are from if they have an unusual name or profile. Only ask about their job if you suspect a disqualification, or they seem young or broke.</p>" +
      "<div class='script'>So what does your day to day look like? Do you have an active job, or is it more of a sitting desk job?\nWhat do you do specifically for context? (if vague)</div>" +
      "<h5>Discovery — three layers</h5>" +
      "<p><strong>Layer one:</strong> <em>So what goals are you currently working towards?</em> → acknowledge, then go deeper on their specific goal.</p>" +
      "<p><strong>Layer two:</strong> <em>Why is that important to you specifically? What motivates you to make that change — health, looking better, or do you have a deeper reason maybe?</em></p>" +
      "<p><strong>Layer three:</strong> <em>What about your current situation makes you feel X right now? Where would you say you are right now compared to where you need to be?</em></p>" +
      "<p>Then: <em>So what do you think is holding you back from [goal] right now?</em></p>" +
      "<h5>Transition</h5>" +
      "<div class='script'>I mean, is dealing with [their pain] something that you are looking to actually get help with so you can [their goal]?\n\n(then build urgency)\n\nAnd is this something you are looking to deal with right now man?\nHow big of a priority is this for you?</div>" +
      "<h5>Proposing the call</h5>" +
      "<div class='script'>In that case bro I think I could definitely help you out\nGot a couple time slots open in the next few days\nLet's jump on a call and I'll show you exactly how I can help you with (their pain)\nYou down?</div>" +
      "<h5>Booking them in</h5>" +
      "<div class='script'>Cool man here's my calendar\n[Calendly link]\nJust about to head out to the gym so lock that in now for me so I can send over some resources before the call</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>", 'inbound'),

    D('Run the outbound framework',
      "<p>Outbound leads have not asked for your help. The psychology is <strong>resistance</strong> — <em>who is this person and what do they want from me?</em> Much more casual and relationship-focused first. You have to earn the right to ask qualifying questions.</p>" +
      "<h5>Openers</h5>" +
      "<div class='script'>Hey (name) appreciate the follow\nHey (name) just saw you commented on my post 🤝\nHey (name) saw you engaging with my story, appreciate it 💪\nReaching out to a couple followers today and was wondering how your [journey] is going atm?\nWhat's up man saw you posted about XYZ — you into XYZ?</div>" +
      "<p><strong>Best outbound is always a story reply.</strong></p>" +
      "<h5>Branching off the reply</h5><ul>" +
      "<li>Big answer → go straight into layer one</li>" +
      "<li>Short answer where digging would feel weird → ask for specifics first to build rapport: <em>Nice man, what [specific] are you trying to get to?</em></li>" +
      "<li>Seems disqualified → <em>What do you do for work btw? Just asking because people underestimate how big an impact their job has on their [goal]</em></li>" +
      "</ul>" +
      "<p>From there the layers, transition, pitch and booking are identical to the inbound framework.</p>" +
      "<div class='do'><b>Do this now</b>Build a list of 30 names matching your dream follower. Not 100 — thirty you can message well.</div>", 'outbound'),

    D('Build your problem / solution pitch library',
      "<p>Use this the moment a lead names their problem. Match what they say to one of your three, and pull the solution language straight from the sheet.</p>" +
      "<p><em>The three below are written for content-creator offers — the most common ones setters here run into. If you are setting for a different business, treat this as the template: problem the lead names → what they are feeling → one-line solution.</em></p>" +
      "<h5>Problem 1 — editing time</h5>" +
      "<p><strong>What they feel:</strong> spending 1–4 hours a day editing. It caps how many deals they take and leaves no time to scale.</p>" +
      "<p><strong>What to say:</strong> <em>We outsource all your editing to an in-house editor we provide — you get those hours back and multiply your output instead of being capped by how fast you can edit.</em></p>" +
      "<h5>Problem 2 — low-paying deals</h5>" +
      "<p><strong>What they feel:</strong> stuck on platforms getting ghosted or lowballed at $300–600/month with bad bonuses, no access to $1k+ brands.</p>" +
      "<p><strong>What to say:</strong> <em>We place you directly onto premium deals, reposition your portfolio, and pitch you to brands — so you are not doing any of the outbound yourself.</em></p>" +
      "<h5>Problem 3 — not going viral / missing bonuses</h5>" +
      "<p><strong>What they feel:</strong> posting with no viral strategy, collecting base pay only, leaving thousands in bonus payouts on the table.</p>" +
      "<p><strong>What to say:</strong> <em>You get a dedicated content coach working 1-on-1 with you on strategy — auditing your videos and helping you crack the viral formula so you actually start collecting those bonuses.</em></p>" +
      "<h5>The curiosity-gap contrast</h5>" +
      "<p>Once you have matched their problem, run this before pitching the call:</p>" +
      "<div class='script'>Interesting bro, when I speak to creators they usually struggle with [the other two] more than [problem they gave] — I'm curious what makes you say [problem] is the biggest one right now?</div>" +
      "<p>It makes the conversation feel like real pattern-recognition instead of a script, and it gets them to defend their own problem out loud — which sharpens urgency before you pitch.</p>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Write openers with SPARK',
      "<p>You get about two seconds before someone decides to respond or ignore. Generic, salesy or try-hard all die in that window.</p><ul>" +
      "<li><strong>S — Stop the scroll.</strong> Never open with <em>Hey</em> or <em>How are you</em>. Reference something specific, ask something intriguing, or open bold.</li>" +
      "<li><strong>P — Personalize.</strong> Their name, a recent post, their bio. Ten extra seconds, double the response rate.</li>" +
      "<li><strong>A — Avoid sales language.</strong> Skip <em>opportunity</em>, <em>program</em>, <em>helping people</em>. The moment you sound like you are selling, their guard goes up.</li>" +
      "<li><strong>R — Relate.</strong> Shared experience, mutual interest, mutual connection.</li>" +
      "<li><strong>K — Keep it conversational.</strong> Text like a friend, not a business email.</li>" +
      "</ul>" +
      "<h5>Story replies, done right</h5>" +
      "<p>Reply with genuine interest, then let it build. They posted wanting engagement — genuine engagement is exactly what they wanted.</p>" +
      "<div class='script'>You: Maltese are so cute, I've got a Pomeranian myself\nLead: Pomeranians are cute too\nYou: Yeah but mine's so loud every walk, barks the whole time\nLead: Haha yeah my Maltese is loud too\nYou: Annoying as hell — I'm just out here trying to get my steps in for my cut lmao</div>" +
      "<p>You have bridged into fitness without ever sounding salesy. Build rapport through shared experience before you introduce your world.</p>" +
      "<div class='do'><b>The goal of your opener</b>Is not to book a call. It is to start a conversation. Optimise for a response, not a sale.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Master pain digging — the three layers',
      "<p>Pain digging is what separates setters who close from setters who just chat. Most people avoid it because it feels rude — but people want to talk about what is bothering them. The more they talk about it, the more it hurts, and the more they want a solution. <em>A problem shared is a problem doubled</em>, and that is exactly what you are after.</p>" +
      "<h5>Three layers</h5><ul>" +
      "<li><strong>Level 1 — surface.</strong> <em>I want to lose weight</em>, <em>I need more clients</em>. Barely the surface. Do not stop here.</li>" +
      "<li><strong>Level 2 — practical impact.</strong> How long has it been going on, what have they tried, what has it cost? Gets them thinking logically about consequences.</li>" +
      "<li><strong>Level 3 — emotional impact.</strong> How does it make them feel, what is the real deep why? This is where buying motivation lives.</li>" +
      "</ul>" +
      "<h5>Four core questions</h5><ul>" +
      "<li><em>What have you tried so far?</em> — shows what has not worked and gets them replaying their failed attempts</li>" +
      "<li><em>What's your main goal here?</em> — do not assume, let them paint it</li>" +
      "<li><em>How long have you been dealing with this?</em> — time builds urgency</li>" +
      "<li><em>What's the real, deep why behind this?</em> — <em>I want to lose weight</em> becomes <em>I want to feel confident taking my shirt off at the beach</em></li>" +
      "</ul>" +
      "<h5>Transitions that avoid interrogation</h5>" +
      "<p><em>Tell me more about that… Can you be more specific? How has that affected you? What's that actually been costing you? How does that make you feel?</em></p>" +
      "<p>Let it progress naturally — do not machine-gun questions. When something painful comes up, follow it: <em>that sounds rough, how long has that been going on?</em></p>" +
      "<div class='do'><b>The goal</b>Not to make anyone cry — to get them emotionally invested in solving it. Once they have shared the real frustration and the real dream outcome, booking the call becomes easy instead of forced.</div>"),

    D('Handle objections with ACE',
      "<p>An objection is a belief holding someone back — <strong>not a wall, a signal</strong>. If they truly were not interested they would ghost. Objecting means they are interested but have a concern.</p>" +
      "<h5>Three golden rules</h5><ul>" +
      "<li>Always tie back to their pain — remind them why they reached out</li>" +
      "<li>Always agree with the lead, never disagree — fighting kills trust instantly</li>" +
      "<li>Facts tell, stories sell — use a real client story that mirrors how they feel</li>" +
      "</ul>" +
      "<div class='script'>Lead: I just have zero experience and no followers, how would you even help me?\nYou: I hear you man, it's always tough at the start without direction or the right support. I had a guy join with zero followers and zero experience — made $2.4K in his first single week in the program.</div>" +
      "<h5>Why getting defensive backfires</h5>" +
      "<p>The moment you argue, you lose. Pushing puts their brain into defence mode — they stop listening and start generating more reasons you are wrong. Acknowledge instead and ask a question: now they feel heard and start generating solutions. <strong>Questions lower resistance, statements raise it.</strong></p>" +
      "<h5>The ACE method</h5><ul>" +
      "<li><strong>Acknowledge</strong> — absorb the concern. Why would they be thinking this?</li>" +
      "<li><strong>Connect</strong> — clarify and empathise. Share your own or a relatable story.</li>" +
      "<li><strong>Explain</strong> — address it confidently without sounding defensive. Bring a success story. Check in: <em>does that make sense?</em></li>" +
      "</ul>" +
      "<h5>Worked example — the money objection</h5>" +
      "<p>First analyse their profile (first-world country, employed, old enough to invest) and confirm at least two check out. Then:</p>" +
      "<div class='script'>Gotcha, no problem at all. Happy to figure out how to make this work. When I first thought about investing, I had no money either — I was broke, took on a part-time job, and had it within a month. What do you think you could do to solve this so we can get you to [goal]?</div>" +
      "<h5>Pre-handling sales resistance</h5>" +
      "<p>Whenever a question could feel like an interrogation, frame <em>why</em> you are asking before you ask it. Instead of <em>so what have you done in the last 6 months to lose that weight?</em> → <em>Just so I can make sure you're on the right track — what have you tried in the last 6 months?</em> Same question, dramatically less resistance.</p>" +
      "<div class='do'><b>The rule</b>The instant you start arguing, you have lost the exchange. Your job is to understand their world, not prove you are right.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Run the post-booking disqualification layout',
      "<p>As soon as a booked call comes through, claim it and run the budget check.</p>" +
      "<h5>If they put down $0–999</h5>" +
      "<div class='script'>Bet bro just saw that come through on my end, looking forward to hearing about it\nBtw I noticed you put down $0 - $999 as your budget, was that accurate?</div>" +
      "<p>If accurate:</p>" +
      "<div class='script'>Tbh man at the end of the call if it was a fit to carry on working together it would tend to be a low four figure investment, would that be manageable for you at all?</div>" +
      "<p>If they cannot do four figures:</p>" +
      "<div class='script'>Ok so tbh man, that would be less than the minimum amount required. If you are super serious about this though, we could potentially figure out putting an amount on credit so you could get started straight away after the call if it made sense. Is that something that would work for you?</div>" +
      "<p>If yes: <em>just to make sure this could work, do you have an idea of what your credit score is?</em> If no, they are disqualified.</p>" +
      "<h5>If qualified — send the VSL and position it</h5>" +
      "<div class='script'>Sounds good brother, looking forward to the call\nI've got a quick video that shows the basics of how I scaled — take a look so we can save you time on the call and focus on how we can get you to your goal as well\n[link]\nCould you check if the link works?</div>" +
      "<p>Then a couple of hours later: <em>How'd you find the vid man?</em> If they watched it, send the second video (your story) the same way.</p>" +
      "<h5>Then rapport, then reminders</h5>" +
      "<p>Only if the call is a couple of days out, keep them warm: <em>btw where are you based? / I noticed you play [X] / how's life in [place]?</em></p><ul>" +
      "<li><strong>24 hours before:</strong> Hey [name] good for the call tomorrow?</li>" +
      "<li><strong>3 hours before:</strong> Yoyo all good to go for the call in 3 hours?</li>" +
      "<li><strong>1 hour before:</strong> Here's the meet link for your call in an hour</li>" +
      "</ul>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Use the two urgency levers — and keep both honest',
      "<p>Nobody books a call out of boredom. They book because they feel pressure. Two distinct ways to create it.</p>" +
      "<h5>Natural urgency — the cost of waiting</h5>" +
      "<p>Not a fake deadline — the real realisation they cannot afford to wait.</p><ul>" +
      "<li><strong>Emotional triggers:</strong> fear of falling behind, frustration with the status quo, anxiety about competitors, FOMO</li>" +
      "<li><strong>Logical pain:</strong> money lost monthly, time wasted, opportunities slipping, a problem actively getting worse</li>" +
      "</ul>" +
      "<p>Build it: identify what is bleeding → quantify it (<em>every month you stay with [situation] costs roughly $X</em>) → show the opportunity cost (<em>while you deal with [problem], your competitors are already [doing the thing]</em>).</p>" +
      "<h5>Artificial urgency — real scarcity</h5>" +
      "<div class='script'>Taking on 3 more clients before I close intake for Q4. Based on your revenue you'd likely be a good fit — got 15 minutes Thursday to see if it makes sense?</div>" +
      "<p>You are not lying. You are genuinely limiting spots, just doing it strategically and out loud.</p>" +
      "<div class='do'><b>Rules that keep this honest</b>Natural urgency = make them feel the real cost of waiting. Artificial = genuinely limit your own availability. Always be truthful about your actual constraints. Never deploy urgency without real value behind it. Keep it about their problem, never about your quota.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Fix your tonality — the five rules',
      "<p>Possibly the most overlooked skill in setting. You would not talk to a 45-year-old lawyer the way you talk to a 19-year-old student, yet most setters use one flat tone for everyone.</p>" +
      "<h5>1. Be casual</h5>" +
      "<p><em>What goals have you reached and what are you aiming for in your fitness journey</em> versus <em>You cutting or bulking rn?</em> — same question, completely different feel.</p>" +
      "<p>A variation: make a false assumption and let them correct you. <em>Damn, you've been at this for ages, you must be at 10K a month by now</em> → <em>I wish man, I barely make 3K</em> → <em>Oh what, how come?</em> People naturally want to correct you, which pulls the real answer out without interrogating.</p>" +
      "<h5>2. Shift your energy</h5>" +
      "<p>Rapport runs high-energy — jokes, relatability, banter. Transitioning into advice or pitching, shift into authority: fuller sentences, slower pace, more command. You go from sounding like a friend to sounding like someone who knows what they are talking about.</p>" +
      "<h5>3. Talk like you are talking to a friend</h5>" +
      "<p>Mirror their language, bring your own relatable experiences, stay genuinely curious, help without expecting anything back immediately.</p>" +
      "<h5>4. Break your messages up</h5>" +
      "<p>A wall of text looks copy-pasted and does not get read.</p>" +
      "<h5>5. Do not turn every message into a question</h5>" +
      "<p>All-questions reads like an interview. Roughly <strong>three statements per question</strong>.</p>" +
      "<div class='do'><b>Common mistakes</b>One tone the whole conversation. Industry jargon. Too formal with a casual lead. Rushing to pitch before rapport. Copying someone else's script word for word instead of making it sound like you.</div>"),

    D('Read emotional state through text and match it',
      "<p>A perfect script still sounds robotic if you cannot read emotion through text.</p>" +
      "<h5>Cues</h5><ul>" +
      "<li><strong>Length and speed:</strong> short/quick = engaged or slightly defensive. Long/detailed = genuine interest or self-justification. Delayed = busy, unsure, or losing interest.</li>" +
      "<li><strong>Language:</strong> lots of questions = interested but cautious. Hedging (<em>maybe, I think, possibly</em>) = uncertainty or fear. Emotional words are worth flagging directly.</li>" +
      "<li><strong>Punctuation:</strong> multiple question marks = confusion. Trailing dots = hesitation. No punctuation = casual comfort.</li>" +
      "</ul>" +
      "<h5>Five states, and how to meet each</h5><ul>" +
      "<li><strong>Excited</strong> → match their energy, skip small talk, build urgency while they are motivated</li>" +
      "<li><strong>Frustrated</strong> → acknowledge first, position yourself as different from what they tried, do not overcompensate with forced cheerfulness</li>" +
      "<li><strong>Skeptical</strong> → specific examples and social proof, do not rush — pushing deepens skepticism</li>" +
      "<li><strong>Overwhelmed</strong> → simplify, small steps, patient and reassuring</li>" +
      "<li><strong>Insecure</strong> → reassure without condescension, share a similar success story, focus on potential not current limitation</li>" +
      "</ul>" +
      "<h5>Managing your own state</h5>" +
      "<p>Your state leaks into every message. Before: breathe, remind yourself you are helping. During: do not take objections personally, stay curious instead of defensive. On a genuinely bad day, take a break rather than letting one bad conversation compound into ten.</p>" +
      "<div class='do'><b>When someone stays guarded</b>Drop the framework temporarily and just build rapport until they are comfortable. Forcing structure onto a guarded conversation makes them guard harder.</div>"),

    D('Work the post-booking window',
      "<p>Between booking and the call, people quietly cycle through buyer's remorse, imposter syndrome, doubt and plain forgetfulness. Silence lets all four grow.</p>" +
      "<h5>1. Restart a real conversation</h5>" +
      "<p>Do not open with business. Ask what life is like in their country (consistently the strongest opener), how their day has been, or how things have been going generally.</p>" +
      "<h5>2. Transition into the post-booking video</h5>" +
      "<div class='script'>Oh btw, did you get a chance to watch the post-booking video after you booked the call?</div>" +
      "<p><strong>If no:</strong> <em>Make sure you catch it before the call — it's important, I'll be asking you about it when we talk.</em> <strong>If yes:</strong> send the VSL as a deeper free training.</p>" +
      "<h5>3. Send the VSL immediately — not the day before</h5>" +
      "<div class='script'>Just saw that come through for [day/time], looking forward to it. Before we chat, give this a watch — it'll give you a good sense of how I work and what we'll cover.</div>" +
      "<h5>4. Follow up 2–3 hours later</h5>" +
      "<p><em>Did you get a chance to watch that video? What'd you think?</em></p>" +
      "<h5>5. Keep digging pain and building anticipation</h5>" +
      "<p>What made them book, how long the problem has been going on, what it would feel like handled. Then: <em>Based on what you've told me, I've got a few specific ideas for [their problem] — looking forward to walking through them.</em></p>" +
      "<div class='do'><b>Worth chasing every time</b>Not everyone watches the videos — but the ones who do close at meaningfully higher rates, and the show-up rate rises with it.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Drive your show-up rate to 80%+',
      "<p>A booked call means nothing if nobody shows. Show-up rate is the percentage of booked calls that actually happen — book 10, get 7, that is 70%.</p>" +
      "<ul>" +
      "<li><strong>Poor setters:</strong> 40–50%</li>" +
      "<li><strong>Average setters:</strong> 60–70%</li>" +
      "<li><strong>Elite setters:</strong> 80–100%</li>" +
      "</ul>" +
      "<p>What moves the number: immediate post-booking engagement, delivering value through a VSL, reinforcing pain and building excitement, and making the prospect feel prepared and specifically chosen.</p>" +
      "<p>The VSL itself should cover your background, real client results, what to expect on the call, why your method works, and credibility.</p>" +
      "<div class='do'><b>Do not give everything away</b>Give enough in the VSL and follow-ups to build real excitement, while leaving something to actually deliver on the call.</div>"),

    D('Run the right follow-up sequence for the situation',
      "<p>Giving up after one follow-up is the fastest way to tank your booking rate. Different situations need different approaches.</p>" +
      "<h5>Booked calls</h5><ul>" +
      "<li><strong>24h before:</strong> <em>Hey, all good for the call tomorrow? Did you catch the video? Any questions?</em></li>" +
      "<li><strong>1h before:</strong> <em>Here's the Zoom link for your call in an hour (also in your email).</em></li>" +
      "</ul><p>Do not overdo it — they have already committed.</p>" +
      "<h5>Proposed calls — the 7 touches</h5><ul>" +
      "<li>Like their most recent message — bumps your text back to the top of their notifications</li>" +
      "<li><em>Found a time?</em></li>" +
      "<li><em>Let me know</em></li>" +
      "<li>Value + reminder — send the VSL, <em>watch this before the call, it'll prep you</em></li>" +
      "<li>Urgency — <em>wanted to make sure you grab a slot, they're filling up fast this week</em></li>" +
      "<li>Passive engagement — like their stories to stay visible without messaging</li>" +
      "<li>Story re-engagement — reply to a story to naturally restart the conversation</li>" +
      "</ul>" +
      "<h5>Warm outreach</h5>" +
      "<p>Touch 1: <em>let me know</em>. Touch 2: re-engage via a story. <strong>Stop after that</strong> — no response after two touches means not interested right now.</p>" +
      "<h5>Timing</h5><ul>" +
      "<li>Booked calls — 24h before → 1h before</li>" +
      "<li>Proposed calls — all 7 steps over 2–3 weeks</li>" +
      "<li>Post-call follow-up — day of booking → 3h before</li>" +
      "<li>Warm outreach — 2–3 days between touches</li>" +
      "</ul>"),

    D("Use Akira's inbound script — the one question that forks everything",
      "<p>Ask this first, always:</p>" +
      "<div class='script'>Yo, appreciate you reaching out — you already doing [business model], or looking to start?</div>" +
      "<p>Their answer decides which scenario you run. <strong>Scenario A — Already Doing It.</strong> <strong>Scenario B — Looking to Start.</strong></p>" +
      "<h5>Scenario A questions</h5><ul>" +
      "<li><em>How long have you been doing [business model] for?</em></li>" +
      "<li><em>What would be the main goal with this, and where would you actually wanna take it income-wise?</em></li>" +
      "<li><em>What's the main motivation behind getting that [specific number]?</em></li>" +
      "<li><em>You've been running [X] for [timeframe] — what do you feel like you need the most help with right now to reach [financial goal]?</em></li>" +
      "</ul>" +
      "<h5>Scenario B questions</h5><ul>" +
      "<li><em>Are you looking to do this full-time or balancing it with something else starting out?</em></li>" +
      "<li><em>What do you do for work at the moment?</em></li>" +
      "<li><em>What would be the main goal, and where would you wanna take it income-wise?</em></li>" +
      "<li><em>What's the main motivation behind getting that [specific number]?</em></li>" +
      "<li><em>How long have you been wanting to achieve [emotional goal]?</em> — under 2 months, dig for the recent trigger. Over 2 months, dig for what has actually held them back and push past vague answers.</li>" +
      "</ul>" +
      "<p><strong>Every bracket gets filled live</strong> from what the lead actually tells you, never guessed ahead of time. And every question gets a genuine acknowledgment before the next one lands — skipping that is what makes qualifying feel like an interrogation.</p>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>", 'inbound'),

    D("Use Akira's outbound script",
      "<p>Same underlying questions as inbound, but you have to earn rapport first because they did not reach out to you.</p>" +
      "<p>Open with a story, comment or post approach. Confirm whether they are already doing [business model] or looking to start. Then run the matching scenario — A or B, exactly as in the inbound script.</p>" +
      "<div class='do'><b>Do not rush the opener</b>If they respond dry, stay in rapport longer before qualifying.</div>", 'outbound'),

    D("Learn Akira's DM objection responses",
      "<h5>I don't really have time to book a call</h5>" +
      "<div class='script'>How come?\n\nI feel you man life can be busy — just so I understand, is it the schedule in the calendly that doesn't fit, or is it that you're working 24/7 being batman 🤣\n\nAh I gotcha man, the chat will just be 30-40 minutes. Is that too big of a commitment? ☺️\n\nI feel you man, we can circle back at a later time. When do you think would be a better time-frame? 🤝</div>" +
      "<h5>I don't know if I can actually do it (fear)</h5>" +
      "<div class='script'>I feel you man, I used to be there too.\n\nThe thing that got me over the fear of starting and committing is realizing we will all pass away eventually — so we gotta chase greatness and our dream even if it's risky, because we only live once right?\n\nAnd we're not really risking much except the current life we have… which is not something we want to settle for.</div>" +
      "<h5>I'm scared of being judged</h5>" +
      "<div class='script'>What are you exactly scared of being judged for?\n\nA lot of my fear came from being judged for bad videos. But something I realized is that hate never comes from above, only below. No successful entrepreneur would ever shit on you — only those below you do, because it reminds them what they could be doing.</div>" +
      "<h5>I already have a coach</h5>" +
      "<p>Goal: understand why they are still stuck, and why they reached out anyway. <em>What made you reach out to us then? If you already have support, why do you think you're still not getting [result] consistently? Are they helping with outreach, pricing and landing deals, or mostly content only? Do you feel like you're getting enough accountability to actually execute?</em></p>" +
      "<h5>What's the cost before booking?</h5>" +
      "<div class='script'>To be honest it really depends on where you're currently at and what kind of support you actually need. Do you mind if I ask a couple questions to see if I can help?</div>" +
      "<h5>I want to try on my own first</h5>" +
      "<p><em>Totally fair man, but what's making you want to keep trying the same thing that hasn't gotten you to [outcome]? How long have you been trying on your own so far? If doing it alone was working, would we even be having this convo right now?</em></p>" +
      "<h5>I'm broke right now</h5>" +
      "<div class='script'>I hear that man, I'd love to see how we can work around this. If you're really serious about getting [X], how do you think you could save up to let me help you?\n\nI don't want finances to be the only thing holding you back — how much do you have saved up right now? Let's try work around it.</div>" +
      "<h5>What if I don't see results?</h5>" +
      "<p><em>I get you, it's always scary trying something new. I do have client results showing the systems work — but it's determined by how much effort you put in. Do you think you could trust yourself to put in that work?</em> Or: <em>would you rather keep doing what you're doing and getting the same results, or try something proven?</em></p>" +
      "<h5>It's not my priority right now</h5>" +
      "<p><em>How come? Is [pain point] not something you care a lot about?</em> Then build back into the pain.</p>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Keep the toolkit open while you set',
      "<h5>Words to avoid</h5><ul>" +
      "<li><strong>But</strong> → say <em>and</em>. Reduces defensiveness.</li>" +
      "<li>Interrogation-style questions (<em>What is your occupation?</em>) → casual assumption instead (<em>You cutting or bulking rn?</em>)</li>" +
      "<li><em>Opportunity</em>, <em>program</em>, <em>helping people</em> → sounds like a pitch the second it lands</li>" +
      "<li>All questions, no statements → feels like an interview. Mix in 2–3 statements per question.</li>" +
      "</ul>" +
      "<h5>The frameworks, condensed</h5><ul>" +
      "<li><strong>Trust + Incentive</strong> — the core diagnostic. Not buying <em>you</em> → trust gap. Not motivated to act → incentive gap.</li>" +
      "<li><strong>SPARK</strong> — opening messages.</li>" +
      "<li><strong>ACE</strong> — Acknowledge, Connect, Explain. The shape under every objection response.</li>" +
      "<li><strong>Sandler Pain Funnel</strong> — surface → practical impact → emotional impact.</li>" +
      "</ul>" +
      "<h5>Golden rules across every objection</h5>" +
      "<p>Always tie back to their pain. Always agree, never disagree. Facts tell, stories sell. <strong>Never fear-monger</strong> — only bring up the pain point when they are hesitant or not acknowledging it, never as a scare tactic.</p>" +
      "<h5>Follow-up quick lines</h5><ul>" +
      "<li><strong>Proposed but not booked, 12h:</strong> <em>Found a time yet bro?</em></li>" +
      "<li><strong>24h no response:</strong> <em>Don't wanna lose this conversation — I see a lot of potential in you and I'm speaking to some guys this week. Let me know if you still want to lock it in.</em></li>" +
      "<li><strong>Longer silence:</strong> unsend the last two messages if unseen and restart from the top — treat it like a fresh outbound.</li>" +
      "</ul>" +
      "<div class='do'><b>Glossary</b>Scenario A / B — already doing it vs looking to start, the fork that opens every script. VSL — video sales letter, sent right after booking. Show-up rate — % of booked calls that happen; 80%+ is elite.</div>")
  ]
};

var PHASE_3 = {
  n: 3,
  title: 'Closing',
  goal: 'Reading this makes you a 2/10 closer. Drilling it gets you to 7. Reviewing your own calls weekly is what makes you a 9. Every module here ends with a drill — the reading is 20% of the work.',
  tasks: [
    D('Read the three truths, and the mindset underneath them',
      "<h5>Detach yourself from the sale</h5>" +
      "<p>You should <strong>never let a prospect leave your call as the same person they were when they got on it.</strong> Whether they buy or not, they should leave with a new perspective, more clarity on their situation, and genuinely grateful they got on the call.</p>" +
      "<p>Your job is not to force a sale. <em>Your job is to genuinely help them make the right decision for themselves.</em> And when you stop being attached to whether they buy, you can finally focus on doing exactly that.</p>" +
      "<h5>Truth 1 — only one objection exists: fear</h5>" +
      "<p>Money, timing, <em>I need to check with my partner</em>, <em>let me think about it</em> — none of these are the real thing. They are smokescreens. Underneath every one is fear of exactly two things: fear of <strong>you</strong> (the company, the offer, you as a person), or fear of <strong>themselves</strong> (self-doubt, past failure, uncertainty about the future). Your entire job in objection handling is peeling back the smokescreen until you can see which it is.</p>" +
      "<h5>Truth 2 — four outcomes are acceptable. Indecision is not</h5>" +
      "<p><strong>Acceptable:</strong> yes · no · get lost · hang up.<br><strong>Not acceptable:</strong> maybe · let me think about it · I'll circle back · anything vague.</p>" +
      "<p>Your job is to walk them to a clear yes or a clear no — not to be liked, not to avoid discomfort. A prospect who leaves undecided does not leave better off. They leave exactly as stuck as they called in. <strong>Letting that happen is not kindness.</strong></p>" +
      "<h5>Truth 3 — calm beats everything</h5>" +
      "<p>Whoever is calmest in the room reads as the most credible person in it. The instinct when a result excites you is to speed up — resist it. The instinct when someone objects is to defend faster — resist that too, and ask a question instead. The gap between high-stakes content and completely calm delivery is the single most persuasive thing you have.</p>" +
      "<div class='do'><b>Drill</b>Write each truth on an index card next to your laptop. Read all three out loud before every call for the next 14 days. <em>You've got it once:</em> &ldquo;let me think about it&rdquo; stops triggering panic and starts triggering curiosity.</div>"),

    D('Learn the 7 stages of a call, in order',
      "<p>Every closing call breaks into 7 stages that always happen in the same order. <strong>The order itself is the framework.</strong></p>" +
      "<ul>" +
      "<li><strong>Rapport</strong> — 30–90 sec — lower their guard. Skipped: they stay defensive the whole call.</li>" +
      "<li><strong>Set the frame</strong> — 1–2 min — establish who is leading. Skipped: they run the call instead of you.</li>" +
      "<li><strong>Discovery</strong> — 15–25 min — surface the real goal, pain and urgency. Skipped: you pitch features instead of a transformation.</li>" +
      "<li><strong>The pitch</strong> — 10–15 min — show the solution, land the price. Skipped: price lands too early or the offer feels vague.</li>" +
      "<li><strong>Buy-in</strong> — 2–5 min — confirm they believe you can help. Skipped: every objection afterwards hits twice as hard.</li>" +
      "<li><strong>Objection handling</strong> — 5–20 min — cut through the smokescreen. Skipped: they leave with <em>let me think about it</em>.</li>" +
      "<li><strong>The close</strong> — 1–3 min — lock in the decision. Skipped: the deal quietly disappears after the call.</li>" +
      "</ul>" +
      "<p>A full call runs <strong>45–60 minutes</strong>. If your booking page still says 30, change it — a 30-minute slot forces you to cut Discovery short, and that is the costliest mistake on the list.</p>" +
      "<h5>Run it like a doctor's visit</h5>" +
      "<p>A doctor does not spend fifteen minutes on your weekend — he asks what hurts, then gets to work. Nobody blocks 45 minutes for a chat; they show up because they think you might have the answer. The faster you get there, the more they respect you.</p>" +
      "<h5>The frame comes from belief, not a script</h5>" +
      "<p>They booked time on <em>your</em> calendar. They saw your name and decided they wanted to talk to you specifically — age, background, none of it changes that. Hold that position from minute zero. The moment you let it slip, the call is over.</p>" +
      "<div class='do'><b>Drill</b>After every call, mark the timestamp where each stage starts. Flag any stage under 90% of its target length — that is the stage that broke the call.</div>"),

    D('Set the frame in the first 60 seconds',
      "<p>The frame decides who leads. Either you lead or the prospect does — there is no shared middle ground. Skip small talk about their day; they cleared 45 minutes for a reason.</p>" +
      "<h5>The opening line — say it close to word for word</h5>" +
      "<div class='script'>Hey [Name], thanks for jumping on. Before we dive in, let me give you context on how I run these calls.\n\nI'm gonna ask you a bunch of questions to understand where you're at, what you're trying to get to, and what's been holding you back. Then I'll show you how we work and we'll see if it's a fit. If it is, I'll show you how we move forward. If it's not, I'll tell you straight.\n\nSound fair?</div>" +
      "<p>That paragraph does five jobs at once: puts you in the driver's seat, pre-warns them about the questions (so they do not get defensive), promises honesty either way, reframes the call as <em>checking for fit</em> rather than being sold to, and closes with a verbal yes before Discovery starts.</p>" +
      "<h5>Framing out loud is optional — dead air is not</h5>" +
      "<p>Some closers deliver it word for word, others drop straight into Discovery. Both work. What never works is five minutes of awkward chit-chat. If you do frame it, keep it under 60 seconds.</p>" +
      "<h5>The five loaded questions that open Discovery</h5>" +
      "<ul><li>What got you to book this call?</li><li>What are you looking to get to?</li><li>Where are you at right now?</li>" +
      "<li>How long have you been at that?</li><li>What have you tried so far?</li><li>Why now?</li></ul>" +
      "<div class='do'><b>The trap</b>Closers who pad the open with small talk are afraid of seeming pushy — they want to be liked. Liking is not the goal, trust is. And trust is a byproduct of conviction, not the reverse.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Run the Discovery Engine — North Star, Future Pace, Cost of Inaction',
      "<p>Discovery eats roughly half the clock and drives about <strong>80% of whether it closes</strong>. Nail it and the close takes care of itself. Rush it and no amount of objection handling saves the call.</p>" +
      "<h5>Layer 1 — North Star (5–10 min)</h5>" +
      "<p>You are digging for two things: a <strong>tangible, measurable target</strong> (a dollar figure, a number of pounds, a client count) and the <strong>intangible why</strong> underneath it.</p>" +
      "<p>Weak: <em>I want to make more money.</em> Strong: <em>I want $20K a month within 6 months so I can quit my IT job.</em></p>" +
      "<ul>" +
      "<li>What's the outcome you're after in the next 6 months, specifically?</li>" +
      "<li>Why that number? <em>(push until it is one number — &ldquo;5 to 10K&rdquo; is not a goal)</em></li>" +
      "<li>Where are you sitting right now relative to that?</li>" +
      "<li>What are you currently doing to get there?</li>" +
      "<li>How long has this been the goal?</li>" +
      "<li>Do you feel what you're doing now is getting you there as fast as you'd like — or does it feel like a few small changes are needed?</li>" +
      "<li>Why now?</li>" +
      "</ul>" +
      "<p><strong>Two phrasings that unlock honest answers.</strong> <em>A few small changes</em> gives permission to admit the current approach is not working without feeling attacked — ask <em>isn't this working?</em> directly and they get defensive. <em>As quickly as you'd like</em> lets their ego stay intact: they can believe they would get there solo, just slower.</p>" +
      "<p>When the answer is vague, push. <em>When you say financial freedom, what does that actually look like for you specifically?</em> / <em>More money is just more zeros in an account. Beyond the number — what actually changes?</em></p>" +
      "<p><strong>Do not paraphrase their words back.</strong> Save them exactly. You need them in the Pitch and in objection handling.</p>" +
      "<h5>Layer 2 — Future Pace (3–8 min)</h5>" +
      "<p>Where they emotionally rehearse the win. Money by itself is digits — this is where digits turn into a life.</p>" +
      "<ul><li>If you actually got there, how would that feel?</li>" +
      "<li>If you fell asleep tonight and woke up already there, what would your day look like?</li>" +
      "<li>What would that change for your family?</li><li>How is that different from today?</li>" +
      "<li>What would you do that you're not doing now?</li></ul>" +
      "<p>Ask these the way you would ask a friend about their goal — not like a therapist, not like a salesman. If they push back: <em>Fair. I just want to be clear on what actually changes for you, because the people I work with who get results are crystal clear on that.</em></p>" +
      "<h5>Layer 3 — Cost of Inaction (5–10 min)</h5>" +
      "<p>Future Pace shows them heaven. This shows what staying still costs. You need both — the wider the gap feels, the harder it becomes to do nothing.</p>" +
      "<p><strong>The rat study.</strong> Rats in a tube with food in front of them pulled hard when starving. Add the smell of a cat behind them and the same rats pulled dramatically harder. Moving toward a reward is not enough — people also need something to move away from. <em>Future Pace is the food. Cost of Inaction is the cat.</em></p>" +
      "<div class='script'>1. [Name], everything we covered — feeling X, your family getting Y, you being able to do Z — that's the top of the mountain. The flip side is doing nothing. If nothing changes, what does that look like going forward?\n\n2. How would it feel knowing you never took the steps — not just for you, but for your family and your future?\n\n3. I don't want to put you on the spot or come off harsh, but — would you actually be okay settling for that? Honestly?\n\n4. So why not, then? Because you could change it. Most people just tell themselves 'next week' and nothing moves. Why would that be different for you?\n\n5. Who's actually in control of whether you hit [North Star] — for you, for your family?\n\n6. If you're the one in control, is now the moment to draw a line and commit to getting there — whether or not that's with me?</div>" +
      "<p><strong>This is not a pitch for your program.</strong> The instant it sounds like <em>buy from me or you'll fail</em>, they smell it and shut down. The consequence is theirs whether they ever work with you or not — keep the frame there.</p>" +
      "<p>The closing line: <em>It's like smoking. One cigarette today, nothing happens. A few years of cigarettes, and you look back wishing you'd stopped sooner.</em></p>" +
      "<h5>Pre-frame and post-frame</h5>" +
      "<p>Give a reason for asking so the question does not feel like an interrogation. <strong>Pre:</strong> <em>One thing I've noticed about people who hit their goals — they're crystal clear on what they want. So: what's the specific outcome?</em> <strong>Post:</strong> <em>I ask because the people who get the best results can always answer that specifically.</em></p>" +
      "<div class='do'><b>Drill</b>Time each layer across your next 5 calls. Targets: North Star 8–12 min, Future Pace 3–8, Cost of Inaction 5–10. Running short means you cut a corner.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Deploy Identity Framing — once per call',
      "<p>The single most powerful pre-handle in the system. Deploy it correctly and half your objections never surface, because the prospect has already talked themselves into being a different kind of person.</p>" +
      "<p><strong>The mechanic:</strong> name a positive trait, contrast it against a negative one you want them to avoid, then ask what happens to people who fall into that category. You never call them flawed — you let them arrive there themselves.</p>" +
      "<h5>The 4-step sequence</h5><ul>" +
      "<li><em>I can tell from how we've talked that you're [positive trait]. You'd be shocked how many [people like them] I talk to who [negative trait]…</em></li>" +
      "<li><em>What usually happens to people who [negative trait]?</em></li>" +
      "<li><em>Where do they typically end up?</em></li>" +
      "<li><em>Why does it matter to you that you don't become one of them?</em></li>" +
      "</ul>" +
      "<h5>Five prospect types, five variants</h5>" +
      "<p><strong>A — eager but green:</strong> <em>I can tell you're genuinely eager to learn — I respect that. You'd be surprised how many people let their ego get in the way of learning from someone else. Six months later they've barely moved.</em></p>" +
      "<p><strong>B — confident but plateaued:</strong> <em>I enjoy talking to people who stay humble while they keep grinding. You wouldn't believe how many guys hit one good month, start believing their own hype, and fall right back off.</em></p>" +
      "<p><strong>C — stubborn / blames outside factors:</strong> <em>You strike me as someone who actually adapts based on what's working. You'd be amazed how many people refuse to change anything.</em></p>" +
      "<p><strong>D — closed off:</strong> <em>I'm glad to be talking to someone actually open about this. So many people stay stuck in their own head, convinced they can figure it out alone — even when what they're doing clearly isn't working.</em></p>" +
      "<p><strong>E — the 1.0 vs 2.0 frame (strongest):</strong> <em>What would the 2.0 version of you look like? Does the version on this call have those traits? I respect that you'd say that out loud — most won't. Becoming that version means changing how you think starting now, even though it's scary. So what does the 2.0 version of you do — stay put, or take the risk?</em></p>" +
      "<h5>The hidden layer</h5>" +
      "<p>Frame someone as <em>the type who decides quickly</em> and you have neutralised <em>let me think about it</em> thirty minutes early — they cannot be a fast decider and need a week. Frame them as <em>someone who owns their results</em> and the partner objection is pre-handled. Pick the frame based on the objection you can already sense coming.</p>" +
      "<div class='do'><b>Use it once per call</b>A second use and it stops feeling genuine. If your tone slips into sarcasm the whole frame collapses and they feel manipulated. Record 5 takes — your first will sound stiff.</div>"),

    D('Pitch only what maps to what they told you',
      "<p>Discovery and Identity Framing have earned you the right to pitch. Four ingredients, in order: <strong>deliverables → success stories → common mistakes → the price drop.</strong></p>" +
      "<h5>Deliverables</h5>" +
      "<p>Match every deliverable to a pain they actually named. If it does not map to something they said, <strong>cut it</strong>. After each, check in — <em>does that make sense?</em> — stacking small yeses as you go.</p>" +
      "<h5>Success stories</h5>" +
      "<p>Pick a case study whose <strong>starting point</strong> matches theirs — the start matters more than the result. Tell someone at $3K/month about a client who went $50K → $200K and they disengage; there is no bridge between those realities.</p>" +
      "<p>Structure: who they were (relatable starting point) → what was broken (the same pain) → what changed (vague enough to still sell the call, specific enough to feel real) → the result (real number, real timeframe) → the emotional high point (the message they sent, the call where it clicked).</p>" +
      "<h5>Common mistakes — the meta-frame</h5>" +
      "<p>This is what makes you sound like a doctor rather than a salesman: tell them what <em>not</em> to do and where other clients went wrong. It builds more trust in thirty seconds than any positive claim.</p>" +
      "<div class='script'>The biggest mistake I see is people going through the program without putting in the daily reps. They watch every video, show up to every call, but skip the actual work — then 90 days later they're frustrated it didn't happen faster. The ones who win show up even on the days they don't feel like it.\n\nAre you that kind of person?</div>" +
      "<p>That last question is Identity Framing in disguise — they commit to being a doer before buying anything.</p>" +
      "<h5>The price drop</h5>" +
      "<p>Land the number in the <strong>last 30 seconds</strong>, never earlier. Frame it as the answer to <em>here's how we'd work together</em>. Never apologise, never over-explain, never soften it with <em>just</em>.</p>" +
      "<div class='script'>The investment to work together is $6K total. No upsells, no surprise costs. You can pay it in full or split it. Either way, here's what happens next…</div>" +
      "<div class='do'><b>Drill</b>After Discovery write the exact 3 pains they raised. Map one deliverable to each. Pitch only those three. Target 5–10 minutes — if you are at 20, you are over-pitching.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Lock buy-in before you touch a single objection',
      "<p>The single most important moment on the call. Miss it and every objection lands twice as hard.</p>" +
      "<p><strong>The non-negotiable rule: never handle an objection before you have locked buy-in.</strong> If they do not yet believe your offer solves their problem, no framework saves you — you would be answering a question they are not asking.</p>" +
      "<div class='script'>So with everything we just went over — the deliverables, the coaching structure, [whatever mattered most to them] — do you feel like what we do can get you to [their North Star]? That's really the most important thing here.</div>" +
      "<h5>Three responses, three scripts</h5>" +
      "<p><strong>Positive certainty.</strong> <em>Okay, cool — why do you feel that way?</em> Let them build the case; their own words become ammunition later. If soft: <em>mind if I ask why those things specifically?</em></p>" +
      "<p><strong>Negative uncertainty.</strong> <em>When you say maybe, sounds like you're somewhere in the middle, and that's completely fine. Of everything we covered, what parts do you feel can't get you there?</em> Then immediately: <em>And what parts can?</em> The negative-then-positive pairing — each answer sharpens the other.</p>" +
      "<p><strong>A hard no.</strong> <em>Totally fair. What would need to be different for you to feel like it could work?</em> No answer means it is not a fit — disqualify cleanly.</p>" +
      "<h5>Pre-handling money right here</h5>" +
      "<div class='script'>Money aside — because that part's easy — do you feel what we do can get you where you want to go?</div>" +
      "<p>A yes takes money off the table for good. When it comes up later: <em>You told me money aside, this could work. So is it that you don't have the money, or that you have it and you're just not sure?</em> That splits any money objection into fear or logistics.</p>" +
      "<div class='do'><b>Drill</b>On your next 5 calls, do not touch a single objection until you have explicitly asked for buy-in. <em>You've got it once:</em> you feel the pull to skip ahead — and resist it every time.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Run every objection through the 7-step engine',
      "<ul>" +
      "<li><strong>1. Diffuse</strong> — take the resistance out of the air. <em>Yeah, totally fine.</em> Never push back; pushing makes people dig in.</li>" +
      "<li><strong>2. Re-confirm buy-in</strong> — <em>before we get into that, do you feel what we covered can get you to [North Star]?</em></li>" +
      "<li><strong>3. Pierce the smokescreen</strong> — the first thing they say is almost never the real issue. <em>When you say &lsquo;kind of&rsquo;, what do you mean specifically? / Setting the money aside, what else is making you want to think it over?</em></li>" +
      "<li><strong>4. Isolate</strong> — narrow to one of four: money, fear, partner, logistics.</li>" +
      "<li><strong>5. Double tie-down</strong> — <em>just to be clear, if the money piece were sorted, would you do this? Because if not, money was never really the issue.</em></li>" +
      "<li><strong>6. Handle</strong> — apply the specific script.</li>" +
      "<li><strong>7. Force the decision</strong> — binary, no wiggle room. <em>Are you 100% committed to hitting [North Star] — yes or no? Why though? You don't have to be — most people say they want it but their actions don't back it up. What makes you different?</em></li>" +
      "</ul>" +
      "<h5>Lean-in / lean-back</h5>" +
      "<p>You are mirroring their energy. When they pull back, pull back too — pushing while they lean out builds resistance until they walk. <em>That's cool, if you'd rather stay where you are, that's your call. The question is whether that's actually what you want — why isn't it?</em> You have not agreed or pushed — you have handed their own stance back and asked them to defend it.</p>" +
      "<h5>Sales is mirroring, full stop</h5>" +
      "<p>You never introduce new information — you reflect their own words back so they land differently. Discovery mirrors. Future Pace mirrors. Objection handling mirrors. Take what they gave you, reorganise it, hand it back.</p>" +
      "<h5>Certainty, conviction, confidence</h5>" +
      "<ul><li><strong>Certainty</strong> — belief in the outcome. Comes from your tone.</li>" +
      "<li><strong>Conviction</strong> — belief in the offer. Comes from your track record.</li>" +
      "<li><strong>Confidence</strong> — belief in yourself. Comes from reps.</li></ul>" +
      "<p>None can be faked — they feel the gap immediately.</p>" +
      "<h5>Rules across every objection</h5><ul>" +
      "<li>Never say <strong>but</strong> — use <em>and</em></li>" +
      "<li>Show appreciation first: <em>I respect that. Thanks for being straight with me.</em></li>" +
      "<li>Multiple objections? Handle the biggest first — usually money</li>" +
      "<li>Tonality carries more weight than words. Ask, do not state</li>" +
      "<li>Lean back as often as you lean in</li>" +
      "</ul>" +
      "<div class='do'><b>The 10-minute ceiling</b>If objection handling runs past 10 minutes, Discovery was not deep enough. Anything past that just manufactures resistance.</div>"),

    D('Learn the four real objections — and the fear scripts',
      "<p><strong>Fear is the only real objection.</strong> <em>I just met you</em> — yet they booked. <em>I've never invested in myself</em> — yet showing up is an investment. <em>How do I know this'll work?</em> — yet they have consumed your content for months. The moment the logic stops adding up, you are in fear territory.</p>" +
      "<p>Think About It, Partner, Money and Logistics are four covers for the same thing. <strong>Tying one off</strong> means closing it so completely it cannot resurface, until only the real fear is left. Master them one at a time: Money first for two weeks, then Fear, then Partner, then Think About It.</p>" +
      "<h5>&ldquo;I need to think about it&rdquo;</h5>" +
      "<p>Diffuse → tie down buy-in → then isolate: <em>when you go think this over, what's actually coming up for you that makes you want to? Just trying to see where I can help.</em> That forces the real objection to surface.</p>" +
      "<h5>&ldquo;I need to talk to my partner&rdquo; — three loops</h5>" +
      "<p><strong>Loop 1:</strong> <em>Completely fine, I've got a partner myself. Before you talk to them — do you feel what we covered can get you to your goals?</em></p>" +
      "<p><strong>Loop 2:</strong> <em>Do you think they'd want you to hit [North Star], for both of you? And in that conversation, what's actually gotten in the way before of moving forward on something like this?</em> Usually lands on money, fear or logistics — then: <em>so would it be fair to say this isn't really about talking to your partner?</em></p>" +
      "<p><strong>Loop 3 — the Responsibility Close</strong> (only if partner comes up a <em>second</em> time; at that point it is a shield):</p>" +
      "<div class='script'>Whose responsibility is it to hit [North Star] in your life?\nEverything you've built over the last 5 years — was that you?\nSo your partner hasn't been in the room for those wins and losses — that's been all you, right?\nWhat does your partner do for work?\nThey don't come to you asking how to do their job, do they?\nSame way you don't fully understand what they do — they don't fully understand what you do.\nSo is it fair to ask them to weigh in on something they've never been part of?\nThat doesn't mean they can't support you — they absolutely can. But the responsibility sits with you, like you said.\nWhen you hit [North Star] in three months — how do you think they'll feel?\nBut who's actually responsible for getting there?\nSo if it's on you — what's the decision the version of you who's already at [North Star] makes, right here, right now?\nAnd it's probably not 'go ask my partner first', is it?\nSo what's really coming up — is it that you're unsure about the investment, or that you just don't have it right now?</div>" +
      "<h5>&ldquo;Money&rdquo;</h5>" +
      "<p>There is no pure money objection — it reduces to fear (<em>I have it, I'm just not sure</em>) or logistics (<em>I don't have it</em>). The splitting question:</p>" +
      "<div class='script'>If I handed you $4K in cash right now, would you actually do this, or would you take a trip to the Bahamas instead?\n\n(pause) Why do you say that? Because even with the money in hand, you'd still have to show up every day for six months — why would you do it?\n\nSo is it a bit of uncertainty about the investment, or that you genuinely don't have it right now? Which one?</div>" +
      "<p>Do not offer payment options before you have isolated fear vs logistics — showing that card early tips your hand.</p>" +
      "<h5>&ldquo;Fear&rdquo; — the four flavours</h5>" +
      "<ul><li><strong>Fear of you</strong> — <em>how do I know this isn't a scam? I just met you.</em></li>" +
      "<li><strong>Fear of themselves</strong> — <em>what if I can't do it?</em></li>" +
      "<li><strong>Fear of the future</strong> — <em>what if it doesn't work?</em></li>" +
      "<li><strong>Fear from the past</strong> — <em>I got burned before.</em></li></ul>" +
      "<p><strong>The Bridge Frame</strong> — for <em>I'm not sure this will work</em>: <em>What you're really after is certainty. But if you never try it, how would you ever know? Right now you're standing at a bridge. On one side is [North Star]. On the other is where you are today. All that's between them is the decisions you make day to day. Are you willing to back yourself, every single day? Yes or no? Why though — you don't have to. Most people won't. The version of you who's already hit [North Star] — how does he make this call?</em></p>" +
      "<p><strong>The Plane Frame</strong> — for <em>how does this work</em> questions that are really fear: <em>Ever flown before? When you board, do you walk into the cockpit and ask the pilot to explain every switch? No — you sit down, buckle in, and trust you'll land. That fear you're feeling is a good sign. I felt it too.</em></p>" +
      "<p><strong>The Skydiving Frame</strong> — for <em>I'm not ready yet</em>: <em>You climb to 10,000 feet, look out thinking this is amazing — then the door opens. That's the moment. Do you trust yourself enough to jump? And you're not jumping alone, I'm right there with you. Or are you the guy who rides the plane back down?</em></p>" +
      "<p><strong>The Burnt Before Frame</strong>: <em>That's the tuition you paid to make a smarter choice this time. Was your partner the first person you ever kissed? Did one breakup make you give up entirely?</em></p>" +
      "<div class='do'><b>Clarify first, reframe second</b>Throwing the Bridge Frame at the wrong fear is a Hail Mary, not a strategy.</div>" +
      "<button class='copy-btn' onclick='copyScript(this)'>Copy</button>"),

    D('Score every call on the 10-point rubric',
      "<p>No read-through or re-watch does the work for you. Closing is a skill and skills build through reps. Most people who never crack five figures a month mistook consuming content for building the skill.</p>" +
      "<h5>Score 1–5 on each, out of 50. Under 35 means go back and re-listen.</h5><ul>" +
      "<li>Did I open with the frame and get a verbal yes?</li>" +
      "<li>Did I land on a specific, tangible North Star — not a range?</li>" +
      "<li>Did I find the intangible why underneath it?</li>" +
      "<li>Did I run Future Pacing for at least 3 minutes?</li>" +
      "<li>Did I run Cost of Inaction for at least 5 minutes?</li>" +
      "<li>Did I use at least one Identity Frame?</li>" +
      "<li>Did I get explicit buy-in <em>before</em> touching any objection?</li>" +
      "<li>Did I run every objection through the full 7 steps?</li>" +
      "<li>Did I avoid saying <em>but</em>, even once?</li>" +
      "<li>Did I close on a clean binary — no drift into indecision?</li>" +
      "</ul>" +
      "<h5>The 7-day drill plan, 15 min/day</h5><ul>" +
      "<li><strong>Mon</strong> — read the 3 Truths out loud, record the opening 5 times</li>" +
      "<li><strong>Tue</strong> — pick one Identity Frame variant, record 3 takes</li>" +
      "<li><strong>Wed</strong> — run a fake Discovery on yourself, time each layer</li>" +
      "<li><strong>Thu</strong> — read one objection script once, close the page, record it from memory</li>" +
      "<li><strong>Fri</strong> — pull one real call from this week, score it</li>" +
      "<li><strong>Sat</strong> — listen to a top closer, note one thing they did that you didn't</li>" +
      "<li><strong>Sun</strong> — full review. What pattern shows up across your last 5 calls?</li>" +
      "</ul>" +
      "<h5>Ten mistakes that quietly kill calls</h5>" +
      "<p>Skipping Cost of Inaction · handling objections before buy-in · saying <em>but</em> · pitching every deliverable instead of the three that map · a vague North Star · speeding up when nervous · defending the price · running Identity Framing twice · letting <em>let me think about it</em> stand · ending without a binary.</p>" +
      "<div class='do'><b>You've got it once</b>You score yourself honestly every Sunday and the trend line keeps climbing. Top closers do not have a stable score — they have a rising one.</div>"),

    D('Keep the sales toolkit open on calls',
      "<h5>Binary close questions</h5><ul>" +
      "<li>Are you 100% committed to [North Star] — yes or no? Why though?</li>" +
      "<li>Do you want the next 2 years to look like the last 2?</li>" +
      "<li>Do you feel like you deserve to hit [goal]? Yes or no?</li>" +
      "<li>Are you willing to back yourself every day to do what it takes? Yes or no?</li>" +
      "<li>Are you willing to put in the work every single day — even when it's hard, even when it's scary? Yes or no?</li>" +
      "</ul>" +
      "<h5>Phrase bank for stuck moments</h5><ul>" +
      "<li><strong>Diffusing</strong> — <em>Yeah, no problem at all. / Totally fair.</em></li>" +
      "<li><strong>Buying time</strong> — <em>Help me understand what you mean by that.</em></li>" +
      "<li><strong>Push/pull</strong> — <em>You don't have to. Most people don't. What makes you different?</em></li>" +
      "<li><strong>Reframing</strong> — <em>What does the 2.0 version of you do here?</em></li>" +
      "<li><strong>Tie-down</strong> — <em>Would it be fair to say [the real objection] is what's actually going on?</em></li>" +
      "<li><strong>The closer</strong> — <em>What's the best decision you make right here, right now?</em></li>" +
      "<li><strong>Lean back</strong> — <em>That's fine, if you'd rather stay where you are. The question is whether that's actually what you want.</em></li>" +
      "</ul>" +
      "<h5>Words to cut entirely</h5><ul>" +
      "<li><strong>But</strong> → <em>and</em></li>" +
      "<li><strong>Just</strong> → minimises everything (<em>just $6K</em>) — drop it</li>" +
      "<li><strong>Trust me</strong> → trust is earned in the call, not requested</li>" +
      "<li><strong>To be honest</strong> → implies you were not a second ago</li>" +
      "<li><strong>I think</strong> → at the close you do not think, you know</li>" +
      "</ul>")
  ]
};

var PHASE_4 = {
  n: 4,
  title: 'Attention',
  goal: 'Stop doing outbound forever. Your personal brand directly affects your ability to sell — and content is the slowest lever you own, which is exactly why it comes last.',
  tasks: [
    D('Learn the 4 stages of personal brand — and why balance beats maxing one',
      "<p>A lot of creators think: <em>if I just become credible enough, people will buy from me.</em> So they make nothing but educational content. And while that builds credibility, <strong>nobody actually gives a shit about you.</strong></p>" +
      "<p>There are hundreds of people online more knowledgeable than you. So why would someone choose <em>you</em>? Because buying is not purely logical. It is emotional.</p>" +
      "<h5>The four stages, in order</h5><ul>" +
      "<li><strong>Admiration</strong> — <em>I want what this person has.</em></li>" +
      "<li><strong>Likeability</strong> — <em>I like this person.</em></li>" +
      "<li><strong>Credibility</strong> — <em>This person knows what they're talking about.</em></li>" +
      "<li><strong>Trust</strong> — <em>I believe this person will actually help me.</em></li>" +
      "</ul>" +
      "<p>Nobody sees one educational post and hands over thousands. They discover you → watch your content → learn about you → see your results → start relating → begin trusting → eventually buy. That is the journey your content has to create.</p>" +
      "<h5>You can have too much of one</h5>" +
      "<p>Think of it like a table. One leg missing and the whole thing is unstable.</p>" +
      "<ul>" +
      "<li><strong>Too much credibility</strong> — tips, frameworks, tutorials, more tips. They think <em>this guy knows his stuff</em>, not <em>I want to follow this guy</em>. Credibility without likeability creates <strong>a teacher</strong>.</li>" +
      "<li><strong>Too much likeability</strong> — vlogs, jokes, memes, lifestyle. They enjoy watching but have no idea what you are good at. Likeability without credibility creates <strong>an entertainer</strong>.</li>" +
      "<li><strong>Too much admiration</strong> — money, cars, travel, <em>look what I built</em>. They see the result but feel no connection. Admiration without likeability creates <strong>distance</strong>.</li>" +
      "<li><strong>Too much trust</strong> — only relatable and vulnerable. They love you but do not see you as the solution. Trust without credibility creates <strong>a friend</strong>, not a solution provider.</li>" +
      "</ul>" +
      "<div class='do'><b>The sales journey</b>&ldquo;I want his life&rdquo; → &ldquo;I like this guy&rdquo; → &ldquo;He knows what he's talking about&rdquo; → &ldquo;I trust him&rdquo; → &ldquo;I want him to help me.&rdquo;</div>"),

    D('Build the content ecosystem',
      "<p>An ecosystem is the set of pieces that move someone from stranger to buyer, each doing a different job. The components:</p><ul>" +
      "<li><strong>Instagram profile funnel</strong> — what a stranger sees and what it makes them do</li>" +
      "<li><strong>Story sequence</strong> — the daily nurture layer</li>" +
      "<li><strong>The buyer's journey</strong> — the path from first view to DM</li>" +
      "<li><strong>Content funnel</strong> — top, middle and bottom of funnel pieces working together</li>" +
      "</ul>" +
      "<p>Most people post only top-of-funnel and wonder why nobody buys, or only bottom-of-funnel and wonder why nobody sees it. The ecosystem is the thing that makes a post do more than get views.</p>"),

    D('Run the 7 × 4 format testing framework',
      "<p>You do not find a winning format by thinking about it. You find it by testing in a structure.</p>" +
      "<p>The module covers: what a format actually is, the 7 × 4 testing framework itself, how to find outlier formats, how to actually run the test, and a full format library to pull from.</p>" +
      "<p>The core discipline is <strong>not abandoning a format after two quiet posts</strong> — which is what almost everyone does. You need enough reps per format to separate signal from the algorithm's noise.</p>" +
      "<div class='do'><b>Do this now</b>Pick your formats and commit to the full test before changing anything.</div>"),

    D('Run the content ideation SOP — extract patterns, do not invent ideas',
      "<p><em>I don't come up with ideas. I extract patterns from my dream followers and turn them into angles.</em> Good content ideas are repackaged truths your audience already struggles with. <strong>The job is not creative. It is pattern recognition plus positioning.</strong></p>" +
      "<p>Not having content ideas is a symptom of not understanding your viewer persona. If you have not filled out your brand sheets, do that first.</p>" +
      "<h5>1. Start with positioning, not ideas</h5>" +
      "<p>If you do not know what you want to be known for, ideas feel random. Content is a vehicle to own a word in people's heads. Every idea should reinforce <strong>one belief, one problem, one type of person</strong>. If an idea does not strengthen your positioning, discard it.</p>" +
      "<h5>2. Mine patterns, not inspiration</h5>" +
      "<p>The best ideas come from repeated observations: the same mistake clients make, the same question you answer, the same belief holding people back. Turn those into <em>why most people fail at X</em>, <em>the belief that keeps you stuck in X</em>, <em>I see this mistake every week…</em> That is where authority comes from.</p>" +
      "<h5>3. Decide the purpose before the idea</h5>" +
      "<p>Every piece does one job: <strong>emotional</strong> (build connection), <strong>authority</strong> (prove experience), or <strong>conversion</strong> (shift belief and drive action). Skip this and your content becomes noise.</p>" +
      "<h5>4. Use proven formats as containers</h5>" +
      "<p>You do not invent formats, you reuse them. <em>This used to be me…</em> → story → lesson. <em>Why most people never…</em> → insight → reframe. <em>If I had to start over…</em> Ideas feel easier when you already know the structure.</p>" +
      "<h5>5. Volume beats perfect ideas</h5>" +
      "<p>You do not find great ideas by thinking longer. You find them by posting more and observing what hits. Volume creates feedback, feedback sharpens ideas.</p>" +
      "<h5>The build</h5><ul>" +
      "<li><strong>Step 1 — idea bank:</strong> 10 problems your audience has, 10 beliefs they hold, 10 patterns you have seen repeatedly. That is 30+ ideas already.</li>" +
      "<li><strong>Step 2 — turn each into angles:</strong> one <em>why they're stuck</em>, one <em>my experience</em>, one <em>how to fix it</em>. Now you have depth, not just topics.</li>" +
      "<li><strong>Step 3 — match to format:</strong> storytelling, talking head, green screen.</li>" +
      "<li><strong>Step 4 — ship and observe:</strong> post 1–3x/day. Track saves (value), comments (emotion), follows (positioning clarity). Double down on what repeats.</li>" +
      "</ul>" +
      "<div class='do'><b>If you're stuck you're not lacking ideas</b>You are either not seeing patterns, or not clear on who you are speaking to. Fix that and ideas stop being a problem.</div>"),

    D('Study your content data — the 7-step loop',
      "<ul>" +
      "<li><strong>1. Quick filter — average watch time.</strong> High → worth analysing deeper. Low → something is fundamentally off, fix basics and do not overanalyse.</li>" +
      "<li><strong>2. Check core signals.</strong> High shares → strong emotion. High saves → strong value. High follows per 1K → strong conversion.</li>" +
      "<li><strong>3. Open the retention graph</strong> (only if step 1 passed). Scan for the first drop (hook), mid drops (weak moments), spikes (strong moments).</li>" +
      "<li><strong>4. Identify the break point.</strong> Early drop → fix the hook. Mid drop → fix structure or clarity. Spike → highlight or reuse.</li>" +
      "<li><strong>5. Extract ONE lesson.</strong> One sentence: <em>this worked because…</em> or <em>this failed because…</em> Only one insight. No overanalysis.</li>" +
      "<li><strong>6. Apply it to the next post</strong> immediately.</li>" +
      "<li><strong>7. Track patterns every 10 posts.</strong> Look for repetition — same failures, same wins. Patterns, not guesses.</li>" +
      "</ul>" +
      "<h5>Quality checks</h5><ul>" +
      "<li>Analysing every post deeply → you are wasting time</li>" +
      "<li>Not applying lessons → the data is useless</li>" +
      "<li>Changing everything each time → no conditioning</li>" +
      "</ul>" +
      "<div class='do'><b>The loop</b>Filter → diagnose → extract → apply. That is how you get better without burning out.</div>"),

    D('Fill the Business Identity sheet',
      "<ul>" +
      "<li>Who does your business sell to?</li>" +
      "<li>What is your offer?</li>" +
      "<li>How much do you make in MRR?</li>" +
      "<li>How much do you make in profit?</li>" +
      "<li>What case studies do you have?</li>" +
      "<li>What do you promise your customers?</li>" +
      "</ul>" +
      "<p>You are doing this now rather than in Phase 0 because the honest version only exists once you have sold a few times and found out what you actually like delivering — and what you can genuinely promise.</p>"),

    D('Fill the Brand Identity sheet',
      "<h5>Why will people love you for you</h5>" +
      "<ul><li>What is your story?</li><li>What are your values?</li><li>What are your beliefs?</li><li>Your personality?</li></ul>" +
      "<h5>Your visual design</h5>" +
      "<ul><li>Describe your style</li><li>Favourite colours</li><li>Signature fonts</li><li>Editing</li></ul>" +
      "<h5>Brand outliers</h5>" +
      "<p>What makes you different? Special talents, sports you play, where you live, languages you speak. These are the things that make you a person rather than an account.</p>" +
      "<h5>Vehicle (B2B only)</h5>" +
      "<ul><li>Explain your business</li><li>What is your goal with it?</li><li>Why are you running it?</li><li>What value can you provide around it?</li></ul>"),

    D('Fill the Brand Pillar sheet',
      "<h5>Start with the big idea</h5>" +
      "<p><strong>What do I ultimately want my audience to believe?</strong> Everything else hangs off that one answer.</p>" +
      "<p>Then name <strong>3–5 brand pillars</strong> underneath it.</p>" +
      "<h5>The structure</h5>" +
      "<p><strong>Big idea</strong> → <strong>3–5 brand pillars</strong> → <strong>content topics</strong> → <strong>individual posts</strong></p>" +
      "<div class='do'><b>The final check</b>If someone looked at your last 20 pieces of content, they should be able to recognise your big idea and what you stand for — without you having to explain it.</div>")
  ]
};


/* Assembled in phase order. Ordered by speed to cash rather than curriculum
   order, which is why Content Ecosystem sits last: content is the slowest
   lever, outbound books a call this week. */
var PHASES = [PHASE_0, PHASE_1, PHASE_2, PHASE_3, PHASE_4];
