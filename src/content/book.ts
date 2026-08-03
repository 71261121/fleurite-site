/**
 * "When He Goes Quiet" — The Rooted Method
 * The full, deliverable product for the paid Fleurite book.
 *
 * This is a TWO-PART TACTICAL SYSTEM, not a philosophy book:
 *   PART ONE — WHAT TO SAY: the avoidant-vs-toxic filter, the stay-or-leave
 *     framework, the 90-second reset, and 47 word-for-word scripts.
 *   PART TWO — HOW TO STAY CALM: the 7-day relationship-anxiety reset.
 *
 * Voice principles (derived from audience psychology analysis):
 *  - She is a WARM buyer who already trusts us from social media. Sell the
 *    outcome, skip the philosophy lecture. Every page is a tool she can use.
 *  - Validate the pain in one line, then hand her the exact words.
 *  - Scripts are copy-paste ready. She should be able to send one in 30 seconds.
 *  - Regulate first (Part Two), then speak (Part One's scripts). Say so.
 *  - Never shame her. Never teach her to manipulate him. Keep her dignity.
 */

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "script"; num?: number; when: string; say: string; why?: string }
  | { type: "divider" }

export type Chapter = {
  part?: string
  number?: string
  title: string
  blocks: Block[]
}

export type Book = {
  slug: string
  title: string
  subtitle: string
  author: string
  brand: string
  year: number
  frontMatter: Block[]
  chapters: Chapter[]
}

export const BOOK: Book = {
  slug: "when-he-goes-quiet",
  title: "When He Goes Quiet",
  subtitle:
    "The exact words to send when he pulls away — and the 7-day reset that keeps you calm enough to send them.",
  author: "Fleurite",
  brand: "Fleurite",
  year: 2025,
  frontMatter: [
    { type: "h1", text: "Read This First" },
    {
      type: "p",
      text: "You did not buy a book to be told to \"just relax\" or to \"work on yourself.\" You bought this because it is late, he has gone quiet, and you need to know what to actually say — or whether to say anything at all. So we are going to skip the lecture. This is a toolkit. Every page is a script, a filter, or a technique you can use tonight.",
    },
    {
      type: "quote",
      text: "You were never too much. You just never had the words. Now you do.",
    },
    {
      type: "p",
      text: "Here is how it fits together, because using it in order is what makes it work:",
    },
    {
      type: "list",
      items: [
        "PART ONE — WHAT TO SAY. First we make sure he is avoidant (worth the effort) and not toxic (run). Then a clean stay-or-leave framework, a 90-second reset to run before you touch your phone, and 47 word-for-word scripts organized by exactly what is happening.",
        "PART TWO — HOW TO STAY CALM. A 7-day reset that rewires the panic so the next silence does not wreck you. This is the part that makes the scripts land — a perfect script sent from a shaking hand still reads as a chase.",
      ],
    },
    {
      type: "p",
      text: "If you are in a live situation right now: run the 90-Second Reset (page in Part One), find the script that matches your exact moment, adjust two words, send it, then put the phone in another room. That is the whole method in one sentence. Everything else is here to make that sentence easy.",
    },
    { type: "divider" },
    {
      type: "p",
      text: "One honest note before we start. This is emotional education built on attachment science — not therapy, and not a tool for someone who is being controlled, threatened, or harmed. Chapter One will help you tell the difference in sixty seconds. If you are in danger, please reach a professional or a local support line. Choosing real support is the most secure thing a person can do.",
    },
  ],
  chapters: [
    // ==================================================================
    // PART ONE — WHAT TO SAY
    // ==================================================================
    {
      part: "Part One — What to Say",
      number: "One",
      title: "Avoidant or Toxic? The 60-Second Filter",
      blocks: [
        {
          type: "p",
          text: "Before a single script matters, you need to know what you are actually dealing with. Because the scripts in this book are built for one specific situation: a partner who pulls away because closeness scares his nervous system — not a partner who hurts you on purpose. One of those is worth the effort. The other is worth the exit. Confusing them is the single most expensive mistake you can make, so we settle it right now.",
        },
        {
          type: "quote",
          text: "Avoidant means he retreats to feel safe. Toxic means he hurts you to feel powerful. Never spend an avoidant strategy on a toxic person.",
        },
        {
          type: "h2",
          text: "This is likely AVOIDANT (the scripts will help) if:",
        },
        {
          type: "list",
          items: [
            "He pulls away when things get close or intense, then comes back on his own once the pressure drops.",
            "He goes quiet or asks for \"space\" — but he does not punish, mock, or threaten you.",
            "When he is present, he is warm, and you have felt genuine care that was real, not performed.",
            "His distance feels like a wall going up, not a weapon coming down.",
            "He can, in calmer moments, admit he struggles with closeness or shuts down under pressure.",
          ],
        },
        {
          type: "h2",
          text: "This is likely TOXIC (close the book, protect yourself) if:",
        },
        {
          type: "list",
          items: [
            "He uses your reactions against you — twisting your words, calling you crazy, rewriting what happened (gaslighting).",
            "There is a cycle of contempt: name-calling, humiliation, or punishment when he is upset.",
            "You feel afraid — of his temper, his reactions, or what he will do — rather than just anxious.",
            "He isolates you from friends or family, controls money, or monitors where you go.",
            "There is any physical intimidation or violence, ever, even once, even \"only that one time.\"",
          ],
        },
        {
          type: "p",
          text: "If you checked even one line in the toxic list, this is the most important sentence in the entire book: the problem is not that you lack the right script. No script fixes contempt, control, or fear. That is not an attachment pattern you can soothe — it is a safety issue you deserve to leave. Talk to someone you trust, and if you are in danger, reach a professional or a local hotline. The rest of this system will still be here for a relationship that is safe.",
        },
        {
          type: "p",
          text: "If you landed firmly in the avoidant column: good. You are in exactly the right place, and everything from here forward is built for you. Turn the page.",
        },
      ],
    },
    {
      part: "Part One — What to Say",
      number: "Two",
      title: "The Stay-or-Leave Framework",
      blocks: [
        {
          type: "p",
          text: "Most women in this pattern are not actually confused about their feelings. They are exhausted by the not-knowing. You have run the same loop for months: maybe he'll change, maybe if I'm patient, maybe this time is different. This chapter ends the maybe. Not with your feelings — feelings keep you circling — but with his behavior, which does not lie.",
        },
        {
          type: "quote",
          text: "Do not decide based on his potential. Decide based on his pattern. Potential is a story. A pattern is evidence.",
        },
        {
          type: "h2",
          text: "The three questions",
        },
        {
          type: "p",
          text: "Answer each one about what he has actually done in the last three months — not what he promised, not what he could be, not how it felt on the good days. Write the answers down. Something shifts when they leave your head and hit the page.",
        },
        {
          type: "list",
          items: [
            "1. Movement: Over the last three months, is his behavior actually improving — or have I just gotten better at tolerating it? Be brutal. Adjusting to less is not the same as him giving more.",
            "2. Repair: When I calmly name a hurt, does he move toward me and try — or does he get defensive, disappear, or turn it back on me? A partner who cannot repair cannot grow with you.",
            "3. The friend test: If my closest friend described this exact relationship to me, word for word, what would I tell her to do? And why haven't I done it myself?",
          ],
        },
        {
          type: "h2",
          text: "How to read your answers",
        },
        {
          type: "list",
          items: [
            "Mostly hopeful answers (real movement, real attempts at repair): there is something here worth working — use the scripts, hold your boundaries, and give it a defined window (say 60–90 days) with clear eyes, not open-ended hope.",
            "Mostly heavy answers (no movement, no repair, and you already know what you'd tell your friend): you have your answer. It is not the answer you wanted. It is the one that frees you. Chapter Five will hand you the words to leave with your dignity fully intact.",
          ],
        },
        {
          type: "p",
          text: "You do not have to act on this today. You just have to stop pretending you don't know. Clarity is not the same as a decision — but you cannot make a good decision without it, and you have been starved of it for a long time. Keep your written answers. You will come back to them on the hard nights, and they will remind you what you actually saw when you were thinking clearly.",
        },
      ],
    },
    {
      part: "Part One — What to Say",
      number: "Three",
      title: "The 90-Second Reset (Do This First)",
      blocks: [
        {
          type: "p",
          text: "This is the most important ninety seconds in the book, and you run it before you send anything. Here is why: the moment he goes quiet, your body classifies it as danger and floods you with adrenaline. In that state, the thinking part of your brain goes offline and the survival part grabs the phone. You cannot out-think a nervous system in alarm. You can only calm it first — and it only takes ninety seconds.",
        },
        {
          type: "quote",
          text: "A perfect script sent from panic still reads as a chase. Regulate first. Then speak.",
        },
        {
          type: "h2",
          text: "The protocol — do it in order",
        },
        {
          type: "list",
          items: [
            "1. NAME IT (10 sec). Say silently: \"My alarm is firing. This is protest, not truth.\" Naming a state shrinks its grip — that is neuroscience, not a platitude.",
            "2. BREATHE 4–7–8 (40 sec). Inhale for 4, hold for 7, exhale for 8. Do it three times. A long exhale is the fastest physical signal to your body that you are safe. This is the same technique therapists use to stop a panic attack.",
            "3. ANCHOR TO REALITY (20 sec). Press your feet into the floor. Name five things you can see. Then say the Reality Anchor: \"His silence is not evidence about me. Right now, in this room, I am okay.\"",
            "4. ASK THE GROUNDED QUESTION (20 sec). \"If I felt completely secure right now, what would I do?\" The honest answer is almost never \"send the fifth text.\" Usually it is sleep, call a friend, or nothing.",
          ],
        },
        {
          type: "p",
          text: "Only now — with your body back online — do you open the scripts. If after the reset you still want to send something, send it. But nine times out of ten, the reset does not just change how you send. It changes whether you need to at all.",
        },
        {
          type: "quote",
          text: "The Phone Ban rule: if you cannot trust yourself not to send it, the phone goes in another room and you run the reset again. You are not forbidding the reach. You are giving your calm self the final vote.",
        },
      ],
    },
    {
      part: "Part One — What to Say",
      number: "Four",
      title: "The Scripts, Part A — When He Pulls Away",
      blocks: [
        {
          type: "p",
          text: "Here they are — the words. Copy one, change a detail or two so it sounds like you, and send. A few of these are things you say to yourself instead of to him; those matter just as much. Remember the rule: run the 90-Second Reset first, always. A script from a calm place changes the dynamic. The same script from panic just continues it.",
        },
        { type: "h2", text: "When you first feel him going distant" },
        {
          type: "script",
          num: 1,
          when: "The first flicker of distance — before you assume the worst",
          say: "\"Hey — you've felt a little far away the last couple days. No pressure at all. Just letting you know I noticed, and I'm here when you want to reconnect.\"",
          why: "Names reality without accusation. It lowers his threat response and keeps you honest instead of silently spiraling.",
        },
        {
          type: "script",
          num: 2,
          when: "He's been slow to reply for days and you want answers",
          say: "\"I've noticed the pace has changed between us. I'd rather ask you directly than spiral quietly — is everything okay with you?\"",
          why: "One clean question beats ten anxious ones. It invites the truth instead of demanding reassurance.",
        },
        {
          type: "script",
          num: 3,
          when: "He's giving one-word, dry replies",
          say: "\"Sounds like a full day. I'll leave you to it — let's talk properly when you've actually got the space for it.\"",
          why: "You stop performing enthusiasm to earn his warmth. You model the calm you want back instead of chasing it.",
        },
        {
          type: "script",
          num: 4,
          when: "He cancelled last-minute again",
          say: "\"That's twice this week. I know things come up — and I want to be honest that I'm starting to feel low on your list. Can we lock in something that actually holds?\"",
          why: "States the impact plus a concrete ask. It is a standard, not a guilt trip.",
        },
        {
          type: "script",
          num: 5,
          when: "He says he's \"busy\" and vanishes for a day",
          say: "\"Totally get being slammed. When you resurface, I'd love a real catch-up — not a rushed five-minute check-in.\"",
          why: "Warmth and a standard in the same breath. You are easy to be close to and clear about what you need.",
        },
        {
          type: "script",
          num: 6,
          when: "You want to know where you stand but fear the answer",
          say: "\"I don't need a label tonight. I do need to know we're moving toward the same thing. Are we?\"",
          why: "Asks for direction, not a promise he'll dodge. It is answerable, which makes it hard to avoid.",
        },
        {
          type: "script",
          num: 7,
          when: "He says \"I need space\" (the one everyone gets wrong)",
          say: "\"Okay — I respect that, and I mean it. Take the space you need; I'm not going to chase you through it. When you're ready to reconnect, reach out and we'll talk properly.\"",
          why: "This is the script women write to us about most. You genuinely grant the space (which drops his alarm) while making it clear you won't be waiting by the phone (which protects yours). You are not performing calm here. You are choosing it — and he will feel the difference.",
        },
        {
          type: "script",
          num: 8,
          when: "He's gone fully silent and you sense him pulling the plug",
          say: "\"I'm not going to keep texting into silence — that's not good for either of us. I care about you, and I also care about me. When you want to talk, I'm reachable. Until then, I'm getting on with my life.\"",
          why: "Closes the anxious loop out loud and hands the next move to him — without an ultimatum, without a threat, without begging.",
        },
        { type: "h2", text: "When the 2 AM spiral hits" },
        {
          type: "script",
          num: 9,
          when: "It's midnight and you've typed and deleted the same text ten times",
          say: "If you must send anything, send only: \"Thinking of you. Talk tomorrow.\" Then put the phone in another room.",
          why: "A short, warm, low-stakes line discharges the urge without creating a mess you'll wake up dreading.",
        },
        {
          type: "script",
          num: 10,
          when: "You already sent the anxious text and want to send five more",
          say: "\"Ignore my last message if it landed like a lot — I'm good. Let's talk when you're free.\"",
          why: "One graceful patch, then stop. Do not explain the explanation. The follow-up flood is the real damage, not the first text.",
        },
        {
          type: "script",
          num: 11,
          when: "You want to fire off \"why are you doing this to me?\"",
          say: "\"I'm feeling really disconnected and it's hard. I'm going to sleep on it and talk to you tomorrow when I'm calmer.\"",
          why: "Names the feeling, delays the reaction, protects your dignity. Tomorrow you'll be grateful you didn't send the other thing.",
        },
        {
          type: "script",
          num: 12,
          when: "You're about to beg — the 2 AM text that ends the spiral",
          say: "Do NOT send this to him. Send it to a friend, or write it in your notes: \"I'm not sending the message I want to send, because it's coming from panic, not from me. I'll reach out tomorrow.\"",
          why: "This is the single move that ends the 2 AM spiral. You interrupt the loop by narrating it instead of acting on it. Ninety seconds later, the urge has passed and you've sent nothing you regret.",
        },
        {
          type: "script",
          num: 13,
          when: "You keep checking if he's online",
          say: "Say to yourself: \"His last-seen is not evidence of anything about me. I am okay, in this room, tonight.\"",
          why: "The Reality Anchor cuts the \"he's online and ignoring ME\" spiral in under a minute. His green dot is not a verdict on your worth.",
        },
        {
          type: "script",
          num: 14,
          when: "You want to pick a fight just to get a reaction",
          say: "\"I noticed I want to start something just to feel connected to you. That's my anxiety, not us. What I actually want is to feel close — can we do that tomorrow?\"",
          why: "Turns protest behavior into an honest request. The fight was never the goal. Contact was.",
        },
        { type: "h2", text: "When you need reassurance (and you're allowed to)" },
        {
          type: "script",
          num: 15,
          when: "You need reassurance but don't want to sound needy",
          say: "\"I've been a little in my head lately. Some reassurance would go a long way right now — where's your head at with us?\"",
          why: "Asking directly is secure. Extracting it through hints, tests, and sulking is what actually reads as needy.",
        },
        {
          type: "script",
          num: 16,
          when: "You want to say \"I miss you\" but fear it's too much",
          say: "\"I miss you. That's not pressure — it's just true.\"",
          why: "A clean feeling stated once is attractive. The same feeling leaked through ten anxious texts is not. Say it plainly, then let it stand.",
        },
      ],
    },
    {
      part: "Part One — What to Say",
      number: "Five",
      title: "The Scripts, Part B — Standing Your Ground",
      blocks: [
        { type: "h2", text: "Asking for what you need without chasing it" },
        {
          type: "script",
          num: 17,
          when: "You keep over-apologizing to keep the peace",
          say: "Delete \"sorry, ignore me, I'm being crazy.\" Send instead: \"What I said matters to me, and I'd like to actually talk about it.\"",
          why: "Every time you erase your own reality to keep him comfortable, you teach both of you that your feelings are negotiable. This reverses that lesson.",
        },
        {
          type: "script",
          num: 18,
          when: "He pulled away right after a close, intimate moment",
          say: "\"I loved being close with you. I know you sometimes need to recharge after that — take it. I'm not going anywhere, and I'm not going to shrink while you do.\"",
          why: "You give him room without abandoning yourself in the process. You regulate your own alarm out loud instead of managing his.",
        },
        {
          type: "script",
          num: 19,
          when: "You want to express a need without it becoming a fight",
          say: "\"When [specific thing happens], I feel [honest feeling]. What would help me is [specific, doable request]. Can we do that?\"",
          why: "The XYZ formula. It is a request, not an accusation — which makes it far harder for an avoidant partner to hear as pressure.",
        },
        {
          type: "script",
          num: 20,
          when: "He says you're \"too much\" or \"too sensitive\"",
          say: "\"I'm not too much. I have real needs, and I'm allowed to say them out loud. If they're too much for you, that's honest information for both of us — but I'm done apologizing for having them.\"",
          why: "You refuse the frame that your needs are the problem, without escalating into war. Calm, clear, immovable.",
        },
        {
          type: "script",
          num: 21,
          when: "You want more consistency but don't want to nag",
          say: "\"I'm not trying to speed anything up. I just do better with a bit of steadiness — a text in the day, plans that hold. Small stuff. Does that feel doable for you?\"",
          why: "Names a reasonable standard as a shared logistics question, not a referendum on his love.",
        },
        {
          type: "script",
          num: 22,
          when: "He makes a vague promise to \"do better\" with no specifics",
          say: "\"I appreciate that. What would 'better' actually look like this week — one concrete thing? I trust actions more than intentions, and I think you do too.\"",
          why: "Turns a fog of good intentions into something you can actually observe. Vague promises are how the pattern survives.",
        },
        {
          type: "script",
          num: 23,
          when: "Asking for consistency without auditioning for his love",
          say: "\"I'm not asking you to prove anything to me. I'm telling you what I need to feel secure — regular contact and plans I can count on. That's not me being needy. That's me being clear about what a relationship needs to work for me.\"",
          why: "This is the mindset shift that changes everything: you stop performing to earn a place and start stating the terms on which you'll happily stay. A woman who knows her standard is not chasing — there is nothing left to chase.",
        },
        {
          type: "script",
          num: 24,
          when: "He gives you crumbs and you're tempted to be grateful for them",
          say: "Say to yourself first: \"A text after three days of silence is not a reward. It's the bare minimum I'd stopped expecting.\" Then respond warmly but without over-thanking: \"Good to hear from you. How are you doing?\"",
          why: "Over-gratitude for crumbs trains him that crumbs are enough. Warmth is fine; relief-flooding is not.",
        },
        {
          type: "script",
          num: 25,
          when: "You want to make a real repair after you overreacted",
          say: "\"I want to own my part. I got flooded and I reacted from fear, not from what's actually true for me. Here's what I really meant to say...\"",
          why: "Modeling repair does two things: it keeps your integrity, and it quietly shows an avoidant partner that conflict can be survived. Most have never seen that.",
        },
        {
          type: "script",
          num: 26,
          when: "He blows hot and cold and you're dizzy from it",
          say: "\"I've noticed we go really warm and then really distant, and the whiplash is hard on me. I'm not blaming you — I just can't keep matching a pace that keeps changing. I need something steadier.\"",
          why: "Names the pattern kindly and states what you can and can't sustain. You stop absorbing the inconsistency as if it were normal.",
        },
        { type: "h2", text: "When you've had enough" },
        {
          type: "script",
          num: 27,
          when: "You need to set a real boundary (not an ultimatum)",
          say: "\"I'm not able to stay in something where I go days without any contact and no sense of where we stand. I need more consistency to feel okay — and if that's not something you want, I'm going to take care of myself accordingly.\"",
          why: "A boundary states your need and your own next step. It is not a demand that he change; it is a decision about how you'll be treated. His response is information, not the whole verdict.",
        },
        {
          type: "script",
          num: 28,
          when: "He breaks a boundary you already set",
          say: "\"We talked about this, and it happened again. I'm not going to keep re-explaining it. I'm just going to start acting on what I said I'd do for myself.\"",
          why: "A boundary you don't enforce is just a complaint. This is you enforcing it — calmly, without a lecture he's already ignored once.",
        },
        {
          type: "script",
          num: 29,
          when: "You keep waiting for him to \"be ready\"",
          say: "Say to yourself: \"I can wait for someone who is trying and slow. I cannot wait for someone who isn't trying at all. Which one is this — honestly?\"",
          why: "Patience is a gift for a partner doing the work. It is self-abandonment for one who isn't. The question sorts them.",
        },
        {
          type: "script",
          num: 30,
          when: "He wants to keep things \"casual\" but you want more",
          say: "\"I've been telling myself casual is fine, and it isn't — not for me, not with you. I'm not trying to trap you. I'd just rather be honest and let us both choose than keep pretending I want less than I do.\"",
          why: "Ends the exhausting performance of chill. You'd rather lose him honestly than keep him by disappearing.",
        },
        {
          type: "script",
          num: 31,
          when: "You catch yourself lowering your standards to keep him",
          say: "Say to yourself: \"I am not auditioning for a role I already have. If I have to shrink this much to be kept, I'm not being kept — I'm being erased.\"",
          why: "The quiet erosion is the real danger, not the dramatic fights. This sentence interrupts the shrink.",
        },
        {
          type: "script",
          num: 32,
          when: "He comes back after a disappearance like nothing happened",
          say: "\"I'm glad you're back. Before we just slide past it — the disappearing act really affected me, and I need us to actually talk about it, not pretend it didn't happen.\"",
          why: "Refuses the reset button. The relief of reconnection is exactly when the pattern renews itself. This names it instead.",
        },
        {
          type: "script",
          num: 33,
          when: "You want to give a defined chance, not open-ended hope",
          say: "\"I care about you, so I want to be real with you: I'm giving this my full effort for the next while, with an open heart. But I'm also paying attention. I'm not going to keep hoping indefinitely with no change.\"",
          why: "Turns bottomless waiting into a bounded, dignified experiment. You stay open and awake at the same time.",
        },
        {
          type: "script",
          num: 34,
          when: "He tries to pull you back in the moment you start detaching",
          say: "\"I notice you reach for me right when I start to let go. I need to see it when I'm not halfway out the door — consistent effort, not a grand gesture when you sense me leaving.\"",
          why: "The breadcrumb often arrives precisely when you detach. Naming the timing dissolves its power over you.",
        },
        {
          type: "script",
          num: 35,
          when: "You're done being breadcrumbed and need to say it with your dignity intact",
          say: "\"I've realized I've been living on scraps of your attention and calling it a relationship. I'm not angry — I'm just done accepting so little from someone I've given so much to. I deserve consistency, and I'm going to stop pretending I don't.\"",
          why: "No insults, no ultimatum, no begging. Just the truth, said cleanly. This is what leaving the breadcrumbs behind sounds like — and it is unforgettable precisely because it isn't a threat.",
        },
        {
          type: "script",
          num: 36,
          when: "He gives you the \"I'm just not good at relationships\" line",
          say: "\"I hear that, and I believe it's hard for you. But 'I'm bad at this' can't become the reason I accept being hurt. You can struggle with closeness and still choose to show up. I need to see you choose it.\"",
          why: "Holds compassion and a standard at once. His difficulty is real; it is not a permanent hall pass.",
        },
        {
          type: "script",
          num: 37,
          when: "You want to stop initiating everything and see what's really there",
          say: "Say nothing. Simply stop being the one who always reaches first — and watch, without panic, what he does with the silence.",
          why: "Not a game — a data-gathering pause. When you stop carrying the whole connection, you finally see how much he was ever carrying.",
        },
        {
          type: "script",
          num: 38,
          when: "He asks for another chance after you've pulled back",
          say: "\"I'm open to it. But 'another chance' means something specific to me now: steady effort I can actually see, not a good week followed by the same fade. Show me over time, not over text.\"",
          why: "Accepts the possibility of change while refusing to reward words alone. The bar is behavior, sustained.",
        },
        { type: "h2", text: "Leaving with your dignity fully intact" },
        {
          type: "script",
          num: 39,
          when: "You've decided to end it and want to be kind but clear",
          say: "\"I care about you, and I've realized we need different things right now. I'm not going to keep waiting for a version of this that isn't here. I'm going to step back for real. I wish you well — genuinely.\"",
          why: "Kind, final, and free of blame. You can honor what was real and still choose yourself.",
        },
        {
          type: "script",
          num: 40,
          when: "He tries to negotiate or love-bomb the moment you leave",
          say: "\"I know this is landing right as I'm leaving, and I believe you mean it in this moment. But I can't build on a promise that only appears when I'm walking out. My decision is about the pattern, not this one conversation.\"",
          why: "The exit is exactly when the best behavior arrives. This holds your line against the most tempting version of him.",
        },
        {
          type: "script",
          num: 41,
          when: "The walk-away — two sentences, door closed, no drama",
          say: "\"I'm choosing to end this, and I'm at peace with it. Please respect that I won't be reaching out, and I won't be waiting to hear back.\"",
          why: "Two sentences. No essay, no re-litigating, no leaving a crack in the door labelled 'maybe.' The shortest scripts protect you the most — there is nothing here to argue with.",
        },
        {
          type: "script",
          num: 42,
          when: "He wants to \"stay friends\" and you know it'll keep you hooked",
          say: "\"Maybe someday. Not now. I need real distance to actually heal, and staying in touch would just keep me half-in. I hope you understand.\"",
          why: "Protects your recovery. 'Friends' too soon is often just the pattern in a quieter outfit.",
        },
        {
          type: "script",
          num: 43,
          when: "You're tempted to break the no-contact you set",
          say: "Say to yourself: \"Reaching out won't get me the closure I want. It'll just restart the clock on my healing. The peace I'm looking for is on the other side of not sending it.\"",
          why: "The urge to reach back is the withdrawal, not a sign you made the wrong choice. Name it and let it pass.",
        },
        { type: "h2", text: "The scripts you say only to yourself" },
        {
          type: "script",
          num: 44,
          when: "On the nights the loneliness convinces you to settle",
          say: "\"Being alone and at peace is not worse than being with someone and constantly anxious. I've done the second one. I know exactly what it costs.\"",
          why: "Loneliness lies most convincingly at night. Answer it with what you already know to be true.",
        },
        {
          type: "script",
          num: 45,
          when: "When you start blaming yourself for the whole thing",
          say: "\"I brought my anxious patterns; he brought his avoidant ones. I'm responsible for my half — not for carrying both. I can own my part without carrying all the weight.\"",
          why: "Ends the self-blame spiral without swinging into blaming him. Responsibility, split fairly, is where peace lives.",
        },
        {
          type: "script",
          num: 46,
          when: "When you miss the good version of him",
          say: "\"I don't miss him. I miss the moments he was capable of — and the version of us I kept hoping he'd become. Missing a potential is not a reason to return to a pattern.\"",
          why: "Grief for potential feels identical to grief for a person. Naming the difference keeps you from going back for a ghost.",
        },
        {
          type: "script",
          num: 47,
          when: "The one you repeat until your body believes it",
          say: "\"I am not going to leave myself to keep anyone.\"",
          why: "This is the whole method in a single line. Say it in the mirror on the hardest nights. The day you truly mean it is the day the chasing ends — not because of a technique, but because someone is finally home.",
        },
      ],
    },
    // ==================================================================
    // PART TWO — HOW TO STAY CALM
    // ==================================================================
    {
      part: "Part Two — How to Stay Calm",
      number: "Six",
      title: "Why the Scripts Aren't Enough on Their Own",
      blocks: [
        {
          type: "p",
          text: "Let me tell you about two women who bought this exact book. Same situation, same scripts, completely different outcomes — and the difference is the whole reason Part Two exists.",
        },
        {
          type: "p",
          text: "The first woman reads Part One, finds Script 7, and sends it the next time he asks for space. Then she waits. Six hours of silence. Her heart races, she opens the chat forty times, and by hour seven she cracks and sends: \"Sorry, did that come off wrong? I didn't mean it like that.\" He pulls further away. She decides the script didn't work.",
        },
        {
          type: "p",
          text: "The second woman sends the same Script 7. Same six hours of silence. But she runs the 90-Second Reset. She uses the Reality Anchor: \"He's at work. This isn't rejection.\" She does her breathing. The panic passes. She doesn't send the follow-up. That evening he writes: \"You're right, I have been distant. Can we talk tonight?\"",
        },
        {
          type: "quote",
          text: "Same script. Same man. Same silence. Different nervous system — and so, different result.",
        },
        {
          type: "p",
          text: "The script was never the variable. Her regulation was. A calm woman sending an average text will out-perform an anxious woman sending a perfect one every single time, because he isn't only reading your words — he's feeling the energy underneath them. Part Two is how you become the second woman. Not by faking calm, but by actually rewiring the alarm underneath. Seven days, one focus each. Do it in order.",
        },
      ],
    },
    {
      part: "Part Two — How to Stay Calm",
      number: "Seven",
      title: "The 7-Day Anxiety Reset",
      blocks: [
        {
          type: "p",
          text: "This is a seven-day guided reset — one gentle focus per day. It is not a program to win him back; it is a week to get you back, so that whatever you decide about him, you decide it from calm instead of panic. Keep a note on your phone or a page in a notebook and answer each day's question honestly. Repeat the week as many times as you need. Rewiring is repetition, not perfection.",
        },
        { type: "h2", text: "Day 1 — Understand your wiring" },
        {
          type: "p",
          text: "Today you learn why you panic, because \"you're being crazy\" is a lie and it's keeping you stuck. When he goes quiet, your body classifies it as a threat to a lifeline and floods you with adrenaline — the racing heart, the checking, the inability to focus. That is not weakness or brokenness. It is a nervous system doing exactly what it was built to do. Write down your loop as it actually happens: what's the first trigger, what do you do, how does it end? You're not judging it. You're meeting it. Question to answer: \"Where did I first learn that love had to be earned?\"",
        },
        { type: "h2", text: "Day 2 — Map your triggers and your alarm" },
        {
          type: "p",
          text: "Today, just notice your body. When the anxious feeling comes, where do you feel it first — chest, stomach, throat? What set it off — a slow reply, a flat tone, a change of plans? Name your top three triggers. Then, the next time even a small one fires, run one round of the 90-Second Reset. You are learning the early-warning signs so you can catch the wave before it becomes a flood. Question to answer: \"What is my body actually trying to protect me from?\"",
        },
        { type: "h2", text: "Day 3 — Silence the spiral (catch the thought)" },
        {
          type: "p",
          text: "The panic is powered by catastrophic thoughts — \"he's leaving,\" \"I ruined it,\" \"I'll be alone forever\" — that your brain presents as facts. Today you catch them mid-flight. When one appears, do this: name it (\"that's a catastrophe thought\"), then ask, \"what's the evidence, and what's a calmer explanation that fits the same facts?\" He didn't reply for three hours: the catastrophe says rejection; the calmer truth is usually a meeting, a nap, a bad day of his own. Question to answer: \"What story am I treating as a fact right now?\"",
        },
        { type: "h2", text: "Day 4 — Reclaim your body and your sleep" },
        {
          type: "p",
          text: "Anxiety is worse at night, and lost sleep makes tomorrow's panic louder — it's a loop, and we break it today. Practice the 4–7–8 breath until it's automatic, so it's ready when you need it at 2 AM. Build a wind-down: phone out of the bedroom, screen off an hour before sleep, something calming for your hands and eyes. When you wake at 3 AM reaching for the phone, do progressive relaxation instead — tense and release each muscle group from your feet up. You are teaching your body that night-time is for rest, not for surveillance. Question to answer: \"What would help my body feel safe enough to rest tonight?\"",
        },
        { type: "h2", text: "Day 5 — Reclaim one channel that is yours" },
        {
          type: "p",
          text: "When you've spent months organizing your inner life around his moods, you lose contact with your own signal — you genuinely don't know what you want for dinner, what you think, how your own day was. Today, do one thing purely because you want to, unrelated to him or anyone's approval: a walk, a meal you love, an hour on something that's yours. Then reclaim one small preference — the tea or the coffee, the walk or the rest — and honor it. You are rebuilding trust with yourself, one small kept promise at a time. Question to answer: \"What did I love before I got so busy monitoring someone else?\"",
        },
        { type: "h2", text: "Day 6 — Face the silence without crumbling" },
        {
          type: "p",
          text: "Today is gentle exposure. Pick a low-stakes moment — you'd normally text him within the hour — and deliberately let it sit. Not as a game, not to punish him: as practice tolerating the discomfort so it stops running you. Set a timer for the exact length that scares you. Run the reset. Feel the urge rise, crest, and fall on its own, without you doing anything. Each time you let a wave pass untouched, you prove to your nervous system that silence is survivable — that the alarm is not an emergency. Question to answer: \"What happened to the urge when I didn't obey it?\"",
        },
        { type: "h2", text: "Day 7 — Build your emergency protocol" },
        {
          type: "p",
          text: "Look back at the week and turn what worked into a plan, so the next crisis doesn't catch you defenseless. Write your personal Emergency Protocol on one page: your top three triggers, the exact reset steps in order, two people you can text instead of him, and one line that always grounds you (many women use Script 47). Save it where you'll find it fast. This is the difference between spiraling and reaching for a plan you already trust. Then write this sentence and mean a little more of it than you did on Day 1: \"I am not going to leave myself to keep anyone.\" Question to answer: \"What will I do the very next time the silence hits?\"",
        },
        {
          type: "quote",
          text: "The goal was never to make him stay. It was to make sure that whatever he does, you never abandon yourself again.",
        },
      ],
    },
    {
      part: "Part Two — How to Stay Calm",
      number: "",
      title: "A Closing Letter",
      blocks: [
        {
          type: "p",
          text: "I want to leave you with a picture of where this leads, because on the hard nights it helps to know what you're walking toward. Picture a version of you who still feels deeply — she never lost her tenderness, that was never the goal — but who no longer bleeds herself dry to keep someone close. A text goes unanswered; she feels the old flicker, breathes, and lets it pass. She says what's true. She asks for what she needs, plainly. And if someone can't meet her, she grieves and lets them go, because she's no longer willing to trade herself for a maybe.",
        },
        {
          type: "p",
          text: "That woman is not colder than you. She's warmer, actually — because her warmth is finally safe. It isn't a bid, it isn't a bargain; it's just love, freely given by someone who knows she'll be okay either way. That is what secure love feels like. Not the breathless chase. The quiet, sturdy \"I'm here, and I'm not going anywhere, and I don't need you to fix me, because I'm already home.\"",
        },
        {
          type: "quote",
          text: "You'll know you've healed not when you stop wanting love, but when you stop abandoning yourself to get it.",
        },
        {
          type: "p",
          text: "You were never too much. You were a person with a big, real heart, asking for safety in the wrong place, and blaming yourself for a gap that was never yours to fill. Now you know the difference between avoidant and unsafe. Now you have the words for every moment you used to freeze. Now you have a way to calm the alarm instead of obeying it. Be patient with yourself — you're undoing a lifetime of training, and it won't happen in a week. But it will happen: one reset, one true sentence, one kept promise at a time.",
        },
        {
          type: "p",
          text: "Come home to yourself. She's been waiting, and she is so glad you're back.",
        },
        { type: "divider" },
        {
          type: "p",
          text: "— With so much warmth,\nThe Fleurite team",
        },
      ],
    },
  ],
}
