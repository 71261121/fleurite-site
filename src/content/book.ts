/**
 * "The Avoidant's Unwritten Rules"
 * Complete paid book for Fleurite.me — 94-page system.
 *
 * Sections:
 *   FRONT MATTER (1-6)   — Resentment-first validation + Reader Map (anti-refund)
 *   SECTION 1: SEE       — The 5 Unwritten Rules (decoded mechanics)
 *   SECTION 2: CALM      — Nervous System Protocol (regulation as strategy)
 *   SECTION 3: STAND     — 47 word-for-word scripts (Groups A-G)
 *   SECTION 4: CHOOSE    — The 3-Question Decision Framework (Stay / Stand / Leave)
 *   BACK MATTER (91-94)  — 7-Day Implementation Map + final page
 *
 * Voice principles (from audience psychology analysis):
 *  - Validate resentment first. Never shame her for chasing.
 *  - Explain the WHY (nervous system + attachment) so she stops blaming herself.
 *  - Give the HOW (scripts, protocols, frameworks) — specific, ready to use.
 *  - Reframe the avoidant as surviving, not cruel — without excusing harm.
 *  - Nothing depends on him changing. Every tool works regardless.
 */

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "script"; when: string; say: string; why?: string }
  | { type: "reader_map"; title: string; items: Array<{ situation: string; page: string }> }
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
  slug: "the-avoidants-unwritten-rules",
  title: "The Avoidant's Unwritten Rules",
  subtitle:
    "5 hidden dynamics of every avoidant relationship — and the framework to stay calm, stand your ground, and decide: stay or go. On your terms.",
  author: "Lena",
  brand: "Fleurite.me",
  year: 2026,
  frontMatter: [
    {
      type: "h1",
      text: "Before You Read One More Word",
    },
    {
      type: "p",
      text: "At some point you stopped calling it unfair and started calling it your anxious attachment. This book is about what happened before that — and what it cost you.",
    },
    {
      type: "quote",
      text: "You have been told to \"give him space,\" \"regulate your anxiety,\" \"stop chasing,\" and \"work on your attachment style.\" None of those people told you: you were also being trained by a set of unspoken rules you never agreed to, never were warned about, and absorbed the full consequences of. That's what this book is about. Not you. Them.",
    },
    {
      type: "reader_map",
      title: "Where Are You Right Now? Start Here.",
      items: [
        { situation: "Still in it, trying to understand him", page: "Page 7 — Section 1" },
        { situation: "Still in it, need to know if it's fixable", page: "Page 81 — Section 4" },
        { situation: "Want to leave but feel stuck", page: "Page 81 — Section 4" },
        { situation: "Already left but can't stop thinking about it", page: "Page 29 — Section 2" },
        { situation: "Know all the theory, still can't stop chasing", page: "Page 29 — Section 2" },
        { situation: "Need exact words right now", page: "Page 45 — Section 3" },
      ],
    },
    { type: "divider" },
    {
      type: "h2",
      text: "What To Know Before Page One",
    },
    {
      type: "p",
      text: "You did not get here because you are broken. You got here because you were reasonable, and the situation wasn't.",
    },
    {
      type: "p",
      text: "Nothing in this book requires you to transform yourself or do six months of inner work before it works. The scripts work today. The protocol works tonight. The framework works the moment you answer the three questions honestly.",
    },
    {
      type: "p",
      text: "Nothing in this book depends on him changing. Every tool here works regardless of what he decides.",
    },
  ],
  chapters: [
    // ═══════════════════════════════════════════════════════════════
    // SECTION 1 — SEE: THE 5 UNWRITTEN RULES  (Pages 7-28)
    // ═══════════════════════════════════════════════════════════════
    {
      part: "Section 1 — SEE",
      number: "One",
      title: "Rule One — He Doesn't Pull Away Because You Did Something Wrong. He Pulls Away Because Closeness Is His Trigger.",
      blocks: [
        {
          type: "p",
          text: "You spent months trying to figure out what you did wrong. You replayed conversations. You modified your behavior. You asked if he was okay. The answer was never about what you did — it was about what closeness does to his nervous system. You were trying to fix the wrong thing.",
        },
        {
          type: "p",
          text: "Think about the pattern for a moment. It rarely happens after an argument. It happens after a good night. After a vulnerable conversation. After a moment where the two of you felt genuinely close. You walk away feeling connected, hopeful — and then, within a day or two, he is gone. Not angry. Not cold, exactly. Gone. And you are left holding the warmth you shared, wondering what you did to make him retreat from it.",
        },
        {
          type: "quote",
          text: "His distance is not rejection of you. It is regulation of him.",
        },
        {
          type: "h2",
          text: "Closeness is his trigger",
        },
        {
          type: "p",
          text: "For someone with an avoidant pattern, intimacy registers in the body as a threat. Not consciously — he isn't choosing to feel endangered by your love. But somewhere in his early life, needing someone led to disappointment, engulfment, or shame. So his nervous system built the opposite rule of yours: when I feel too close, I get away, and getting away keeps me safe. Closeness, for him, doesn't register as comfort. It registers as pressure. When you reach, his alarm says retreat — the same way your alarm says pursue when he withdraws.",
        },
        {
          type: "h2",
          text: "Why you absorbed the consequences",
        },
        {
          type: "p",
          text: "You absorbed the consequences because nobody ever explained the mechanics to you. You were told it was about you — that you were too much, too sensitive, too needy. You were told his distance meant something you did. And because his behavior was inconsistent — warm enough to keep hope alive, distant enough to keep you working — you kept adjusting yourself, kept trying to find the version of you that wouldn't trigger his retreat. There was never such a version.",
        },
        {
          type: "h2",
          text: "The tool — Trigger Identification Exercise",
        },
        {
          type: "script",
          when: "Trigger Identification Exercise",
          say: "Write down the last 3 times he pulled away. What happened immediately before each one? A vulnerable moment? A close night? A real conversation? The pattern will be visible: distance almost always follows intimacy, not conflict.",
          why: "Converting his behavior from a mystery into a predictable pattern removes its power to make you feel personally rejected.",
        },
        {
          type: "p",
          text: "Once you see the trigger, his behavior stops being personal. It stops meaning something about your worth, and starts meaning something about his wiring. That is the first rule decoded — and the first time you get to set the pattern down instead of carrying it.",
        },
      ],
    },
    {
      part: "Section 1 — SEE",
      number: "Two",
      title: "Rule Two — The More You Explain Your Feelings, The Less Safe He Feels. This Is Not Your Fault. It Is His Architecture.",
      blocks: [
        {
          type: "p",
          text: "You were told to communicate your feelings. You did. It made everything worse. This is the cruelest part of the dynamic: the healthy thing — expressing yourself honestly — is also the thing that activates his retreat. And nobody told you that was what was happening.",
        },
        {
          type: "p",
          text: "So you did the only thing you knew how to do. You tried harder. You wrote longer texts. You explained more carefully — surely, you thought, if he just understood how I feel, he would stop running. Every word was an attempt to build a bridge. Every word landed as a wall being raised on his side.",
        },
        {
          type: "quote",
          text: "Paragraphs communicate your anxiety. He can respond to a need. He shuts down at anxiety.",
        },
        {
          type: "h2",
          text: "Emotional depth reads as pressure",
        },
        {
          type: "p",
          text: "Here is what is actually happening on his side: emotional bandwidth registers as threat-of-engulfment in an avoidant nervous system. Your honest communication — the very thing every relationship guide told you to do — activates his escape response. Not because your feelings are wrong, and not because you are \"too much.\" Because his architecture interprets deep emotional demand as a threat to his autonomy, and his system responds the only way it knows: by creating distance.",
        },
        {
          type: "h2",
          text: "Why you kept explaining anyway",
        },
        {
          type: "p",
          text: "You kept explaining because explanation was the only tool you had. You believed, with the full force of someone who loves honestly, that if he truly understood your pain, he could not keep causing it. That belief is not naive — it is the reasonable assumption of a person who assumes other people operate like she does. He does not. His withdrawal is not a failure to understand. It is a response to the pressure of being understood too closely.",
        },
        {
          type: "h2",
          text: "The tool — Name, Not Explain Protocol",
        },
        {
          type: "script",
          when: "Before sending a long emotional text",
          say: "Reduce it to one sentence. Not: \"I've been feeling really disconnected and I don't know if something's wrong or if I'm reading too much into it but when you went quiet last week I started spiraling...\" Instead: \"I noticed distance between us this week. Can we talk?\"",
          why: "One sentence communicates your need. Paragraphs communicate your anxiety. He can respond to a need. He shuts down at anxiety.",
        },
        {
          type: "p",
          text: "This is not about performing detachment. It is about refusing to do the labor of over-explaining to someone who experiences your depth as pressure. Your feelings deserve to be expressed. They also deserve to be expressed in a form that can actually be received.",
        },
      ],
    },
    {
      part: "Section 1 — SEE",
      number: "Three",
      title: "Rule Three — His Silence Is a Regulation Strategy. You Are Paying the Cost of His Coping.",
      blocks: [
        {
          type: "p",
          text: "You were not overreacting to his silence. You were accurately perceiving that you were being made responsible for his emotional regulation without your consent.",
        },
        {
          type: "p",
          text: "His silence was not passive. It transferred the entire weight of the relationship's emotional state onto you. While he felt better, you fell apart. And his equilibrium was maintained on your dysregulation.",
        },
        {
          type: "quote",
          text: "While he felt better, you fell apart.",
        },
        {
          type: "h2",
          text: "Silence is not neutral. It is regulation.",
        },
        {
          type: "p",
          text: "When an avoidant goes silent, he is not thinking about you. He is regulating himself. Withdrawal works for him the way protest behavior works for you — it is a nervous-system strategy for managing overwhelm. The difference is who pays for it. His silence \"works\" because you always fill it. You text, you check, you smooth things over, you carry the emotional labor of his inability to communicate. The silence regulates him, and it dysregulates you — and over time, that asymmetry becomes the entire architecture of the relationship.",
        },
        {
          type: "h2",
          text: "Why you always fill the silence",
        },
        {
          type: "p",
          text: "You fill the silence because silence feels like danger to your nervous system. Your alarm reads disconnection as abandonment, and every minute without a reply confirms the worst story. So you reach — not because you are weak, but because your system is trying to restore connection the only way it knows how. And every time your reaching is rewarded with his eventual return, the pattern is reinforced: you chase, he returns, relief floods, the loop resets. He never has to change because the strategy keeps working — for him.",
        },
        {
          type: "h2",
          text: "The tool — The Silence Budget",
        },
        {
          type: "script",
          when: "After one unanswered message",
          say: "Internal rule only (not sent to him): I reached out once. I won't reach out again for 24 hours. I'm not punishing him. I'm stopping the labor transfer. If he wants connection, he knows where I am.",
          why: "The silence budget is self-regulation, not silence games. It stops the automatic filling of his silence with her anxiety.",
        },
        {
          type: "p",
          text: "The silence budget is behavioral data collection, not emotional management. You are not playing a game to make him miss you. You are documenting what happens when the labor transfer stops. His response — or his continued silence — is information. Either way, you get to stop being the one who pays for his coping.",
        },
      ],
    },
    {
      part: "Section 1 — SEE",
      number: "Four",
      title: "Rule Four — He Comes Back After Distance and Expects Nothing to Have Changed. Because For Him, Nothing Did.",
      blocks: [
        {
          type: "p",
          text: "He came back like nothing happened. And somehow you let it slide. Again. Not because you were weak — because his re-entry felt like relief, and relief cancels clarity.",
        },
        {
          type: "p",
          text: "There is a specific disorientation to his return. You have been living in the wreckage of his silence for days — replaying, spiraling, mourning — and then he appears, warm and ordinary, as if no time passed. The gap between what you experienced and what he acknowledges is so vast that you question your own memory. Did it really happen? Was I overreacting? He seems fine, so maybe I was the problem.",
        },
        {
          type: "quote",
          text: "Understanding this does not make it acceptable. It makes it predictable.",
        },
        {
          type: "h2",
          text: "For him, nothing did change",
        },
        {
          type: "p",
          text: "His \"reset\" is not manipulation, though it functions as manipulation. His nervous system processed the distance as resolution, not as rupture. He actually does not experience the absence as an event requiring repair. While you were drowning, he was regulating — and once he regulated, the episode was over for him. Not because he is cruel. Because his system resolved the tension the only way it knew, and moved on. Understanding this does not make it acceptable. It makes it predictable.",
        },
        {
          type: "h2",
          text: "Why you let it slide",
        },
        {
          type: "p",
          text: "You let it slide because his return flooded your system with relief, and relief is the enemy of clarity. The moment he is warm again, every boundary you rehearsed in his absence feels unnecessary. You convince yourself the peace is worth more than the conversation. But the conversation is the price of the pattern changing — and skipping it guarantees the next silence will come, and the next return, and the next slide. Each cycle, a piece of your trust dissolves, and a piece of your self-respect goes with it.",
        },
        {
          type: "h2",
          text: "The tool — The Re-Entry Script",
        },
        {
          type: "script",
          when: "When he comes back after silence as if nothing happened",
          say: "I want to reconnect. And I also need us to acknowledge what happened before we move forward like it didn't. I'm not trying to punish you. I'm trying to be honest about what I need.",
          why: "This script does two things simultaneously: it keeps the door open (you want to reconnect) and it sets a condition (acknowledgment). It requires him to respond to both.",
        },
        {
          type: "p",
          text: "Next time he returns, you have words. Not accusations — conditions. The difference matters: accusations invite defensiveness; conditions invite decisions. His response tells you whether the pattern has room to change, or whether you are the only one in the relationship paying attention.",
        },
      ],
    },
    {
      part: "Section 1 — SEE",
      number: "Five",
      title: "Rule Five — You Keep Getting Blamed for Reacting to Behavior He Won't Acknowledge. That Is the Rule, Not the Exception.",
      blocks: [
        {
          type: "p",
          text: "You reacted. He made your reaction the entire story. And somewhere along the way you started to believe that story.",
        },
        {
          type: "p",
          text: "This is the meta-rule — the one that makes all the others invisible. It works like this: he withdraws (Rule 1), you respond with distress (Rule 3's cost), and instead of the withdrawal being examined, your reaction becomes the problem. He didn't disappear — you overreacted. He didn't go cold — you're too sensitive. The spotlight swings to you, and the original behavior — his — quietly exits the conversation.",
        },
        {
          type: "quote",
          text: "Your anxiety is not a pre-existing condition he had the bad luck to encounter. It's a predictable output of a dynamic designed to produce it.",
        },
        {
          type: "h2",
          text: "The system that keeps you focused on yourself",
        },
        {
          type: "p",
          text: "The 5th Rule is the one that makes all the others work for him: the system is designed to keep you focused on your reactions and him unaccountable for his behavior. Your anxiety is not a pre-existing condition he had the bad luck to encounter. It's a predictable output of a dynamic designed to produce it. Every cycle trains you to look inward for the fault — to apologize for wanting connection, to manage your needs down to nothing, to become the quiet, easy, uncomplicated version of yourself that never disturbs the peace. That version is not peace. That version is erasure.",
        },
        {
          type: "h2",
          text: "The tool — DARVO Recognition Checklist",
        },
        {
          type: "p",
          text: "DARVO is the acronym psychologists use for this pattern: Deny, Attack, Reverse Victim and Offender. When you raise a legitimate concern, the response is denial of the behavior, an attack on your delivery, and a reversal that makes you the offender. Run this checklist the next time a conversation ends with you feeling like the problem:",
        },
        {
          type: "list",
          items: [
            "Did I raise a legitimate concern or express a real need?",
            "Did he acknowledge it — or redirect to my tone/delivery?",
            "Did the conversation end with me apologizing?",
            "Do I feel like the problem, even though I raised the problem?",
            "Would I tell a friend she was overreacting if this happened to her?",
          ],
        },
        {
          type: "p",
          text: "If you answered yes to 3 or more of these, you encountered DARVO — not evidence that you were too much.",
        },
        {
          type: "h2",
          text: "What you now know",
        },
        {
          type: "p",
          text: "These are the 5 Unwritten Rules. Together they form the architecture of the dynamic — the hidden mechanics that made you feel crazy, then made you feel guilty for feeling crazy. You were not crazy. You were inside a system with rules you were never told. Now you know them. That knowledge is the foundation — Section 2 gives you the calm to act on it, Section 3 gives you the words, and Section 4 gives you the decision.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // SECTION 2 — CALM: NERVOUS SYSTEM PROTOCOL  (Pages 29-44)
    // ═══════════════════════════════════════════════════════════════
    {
      part: "Section 2 — CALM",
      number: "Six",
      title: "The 90-Second Interrupt",
      blocks: [
        {
          type: "p",
          text: "A regulated body is not a passive body. It is a strategic one. When you are activated, you make his job easy. A regulated woman is the most disruptive thing in this dynamic.",
        },
        {
          type: "p",
          text: "This is the framing that makes everything else in this section possible: regulation is not suppression, and it is not \"fixing yourself.\" It is the opposite of what you've been doing. When you are flooded — heart pounding, mind racing, thumb hovering over send — you are operating from the survival part of your brain, and the survival brain makes terrible decisions. It sends the fifth text. It says the thing you regret. It hands your power to the person who triggered you. Regulation takes that power back.",
        },
        {
          type: "h2",
          text: "The science in one paragraph",
        },
        {
          type: "p",
          text: "Dr. Jill Bolte Taylor, a Harvard-trained neuroanatomist, found that a pure emotion — chemically, in the body — lasts about 90 seconds. That's it. The emotion rises, peaks, and would pass through your system in a minute and a half. What extends it far past 90 seconds is the thought loop: the replaying, the imagining, the constructing of conversations that haven't happened. Your nervous system isn't stuck in anxiety because the feeling is too strong. It is stuck because your mind keeps feeding it. The interrupt breaks the loop — and the feeling, left alone, passes.",
        },
        {
          type: "h2",
          text: "The 5 Steps",
        },
        {
          type: "list",
          items: [
            "STEP 1 — TIME: Look at the clock. Say the time out loud or type it. \"It is 11:47pm.\" This activates the prefrontal cortex and begins interrupting the anxiety loop. Takes 3 seconds.",
            "STEP 2 — LOCATE: Find where the feeling lives in your body. Chest? Stomach? Jaw? Name it once: \"My chest is tight.\" You are not analyzing — you are locating. This signals safety to the amygdala.",
            "STEP 3 — BREATHE: Inhale 4 counts. Exhale 8 counts. Repeat 4 times (not 10 — 10 feels like a task; 4 feels like a pause). Long exhale activates the vagus nerve within seconds.",
            "STEP 4 — DELAY: Do not make a decision about what to send for exactly 20 minutes. Set a timer. Tell yourself: \"I can still do whatever I was going to do. I'm giving myself 20 minutes first.\" The decision is not canceled — it is paused.",
            "STEP 5 — GROUNDED QUESTION: After 20 minutes, ask: \"If I felt completely stable right now, what would I do?\" The answer almost never involves sending a fifth text.",
          ],
        },
        {
          type: "p",
          text: "Run the whole sequence the next time the spiral starts. Time. Locate. Breathe. Delay. Grounded question. Five steps, under five minutes, and the loop is broken — not by force, but by attention.",
        },
        {
          type: "script",
          when: "Self-practice log — complete within 24 hours",
          say: "My trigger moment today was: ___. I noticed it in my: ___. I waited 20 minutes. After 20 minutes, I: ___.",
          why: "Completing this once converts the protocol from information to habit. One practice is worth 20 reads.",
        },
        {
          type: "p",
          text: "Same script. Same silence. Different nervous system. Different result. That is the entire point of Section 2 — not to change what happens to you, but to change what happens inside you when it does.",
        },
      ],
    },
    {
      part: "Section 2 — CALM",
      number: "Seven",
      title: "The Reality Anchor",
      blocks: [
        {
          type: "p",
          text: "He goes quiet. Within seconds, your mind is not observing the silence — it is writing a story about it. He's done with me. He hates me. I ruined it. I knew this would happen. The story feels like insight. It is not insight. It is your mind's fear, wearing the costume of truth.",
        },
        {
          type: "p",
          text: "The Reality Anchor comes from a well-researched approach called cognitive defusion (used in Acceptance and Commitment Therapy). The idea is simple: you do not have to argue with the story, and you do not have to believe it. You separate the story from the observable facts — and you anchor to the facts.",
        },
        {
          type: "h2",
          text: "The three checks",
        },
        {
          type: "script",
          when: "When the story takes over (\"He's done with me / He hates me / I ruined it\")",
          say: "Check 1 — OBSERVABLE FACT: \"He hasn't replied in 6 hours.\" Check 2 — KNOWN PATTERN: \"He goes quiet when overwhelmed. He has come back before.\" Check 3 — WHAT AM I ADDING: \"That he's done with me, that this is different, that I ruined it — these are not facts. These are fear.\" ANCHOR SENTENCE: \"He hasn't replied. That's all I know right now.\"",
          why: "The Anchor sentence is not positivity. It is precision. Replace the fear story with only what is verifiably true.",
        },
        {
          type: "p",
          text: "Notice what the anchor does not do. It does not tell you everything is fine. It does not promise he will come back. It strips the situation down to what is actually true, and refuses to let your imagination furnish the rest. Precision, not positivity. That is the whole method.",
        },
        {
          type: "h2",
          text: "Your Reality Anchor Card",
        },
        {
          type: "list",
          items: [
            "Write your anchor sentence on a physical card. Not a note app — paper. The physical act matters.",
            "Take a photo of it and save it to your favorites. This is the version you reach for at 2am.",
            "Keep the card by your bed, and one in your bag. It belongs where the spiral happens.",
            "Rewrite it each week. The facts change; the precision stays.",
          ],
        },
        {
          type: "p",
          text: "The card is not a mantra and it is not an affirmation. It is a fact-checker you can hold in your hand. When the story starts, you do not argue with it — you simply hold the card, and the story loses its grip, because a story cannot stand against a fact you can see.",
        },
      ],
    },
    {
      part: "Section 2 — CALM",
      number: "Eight",
      title: "The Sleep Protocol",
      blocks: [
        {
          type: "p",
          text: "The spiral has a preferred time of day: night. The room is dark, the phone is bright, and the silence feels louder than any argument ever could. Sleep is where the pattern wins — not because you are weak at night, but because your nervous system is exhausted and your defenses are down. The Sleep Protocol is not self-care. It is strategy. A woman who sleeps is a woman who thinks clearly, and a woman who thinks clearly is the most dangerous thing to a dynamic that depends on her confusion.",
        },
        {
          type: "h2",
          text: "The three rules",
        },
        {
          type: "list",
          items: [
            "No phone contact after 10pm when activated. Set an alarm at 9:45pm labeled \"BOUNDARY — no contact after this.\" This is a rule you make for yourself, not a rule you explain to him.",
            "The 3-word sleep anchor: Pick three words that represent who you are outside this dynamic. Not about relationships. About you. (\"Creative, sharp, warm.\" \"Strong, funny, loyal.\") Write them on paper. Read them in bed. Not as affirmations — as a reminder you exist beyond this crisis.",
            "The containment script: Write the thing you want to send. Write it fully, uncensored. Then write: \"I will come back to this in the morning with fresh eyes.\" Do not send. Put the phone face-down. You contained the impulse without suppressing the feeling.",
          ],
        },
        {
          type: "p",
          text: "Each rule has the same structure: the impulse is not wrong, and it is not fought — it is contained and deferred. The message gets written (the feeling is honored), the phone gets turned over (the behavior is stopped), and the morning gets a chance to arrive before the decision does. Almost nothing that feels urgent at 1am is still urgent at 9am. Sleep is the evidence.",
        },
      ],
    },
    {
      part: "Section 2 — CALM",
      number: "Nine",
      title: "Days 1–7: Your Personal Emergency Plan",
      blocks: [
        {
          type: "p",
          text: "The next silence will come. Not because of anything you do — because patterns repeat until they are interrupted. This plan makes sure the next silence never catches you unprepared. One day at a time, one small build. Each day takes under ten minutes.",
        },
        {
          type: "p",
          text: "Day 1: Set up your physical environment. Remove his contact from phone favorites. Set screen time limits. Write the Reality Anchor Card.",
        },
        {
          type: "p",
          text: "Day 2: Map your trigger moments. When does the panic spike? What precedes it? What time of day? Build self-knowledge about your specific pattern.",
        },
        {
          type: "p",
          text: "Day 3: Practice the 90-Second Interrupt on a SMALL trigger — not the relationship. A daily frustration. Build the tool before you need it in high-stakes moments.",
        },
        {
          type: "p",
          text: "Day 4: Write your Reality Anchor sentence for the current situation. Photo it. Save it.",
        },
        {
          type: "p",
          text: "Day 5: Run the Sleep Protocol for one night. Evaluate: did you sleep? did you send the message? what happened?",
        },
        {
          type: "p",
          text: "Day 6: Identify one person in your support network who can receive a 2am text from you instead of him. Ask them in advance.",
        },
        {
          type: "p",
          text: "Day 7: Read Section 4 (The 3-Question Framework) and answer the three questions for the first time.",
        },
        {
          type: "p",
          text: "Seven days. That is the whole plan — because the goal was never to become a different person. The goal is to walk into the next silence holding tools instead of panic. And when the tools are in your hands, the dynamic changes — because the dynamic depended on you showing up empty-handed.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // SECTION 3 — STAND: 47 WORD-FOR-WORD SCRIPTS  (Pages 45-80)
    // ═══════════════════════════════════════════════════════════════
    {
      part: "Section 3 — STAND",
      number: "Ten",
      title: "Group A — When He Pulls Away (Scripts 1–9)",
      blocks: [
        {
          type: "p",
          text: "These scripts are not about making him do anything different. They are about making sure you leave every interaction having said what is true — so you're not carrying the weight of the unsaid. What he does with them is information. Information is useful.",
        },
        {
          type: "p",
          text: "A regulated nervous system delivers a secure message. That is why Section 2 came before Section 3. Scripts sent from panic produce panic responses. The same words, from a regulated place, land differently.",
        },
        {
          type: "script",
          when: "Script 1 — The First Check-In: when it goes quiet and it has been less than 24 hours",
          say: "Hey. I noticed it went quiet between us. I'm not trying to start something — I just wanted to check in. Are you okay?",
          why: "Low-stakes, no accusation, clear. Gives him an easy re-entry point. If he doesn't take it, that is your information.",
        },
        {
          type: "script",
          when: "Script 2 — The Second Check-In: 24 hours after Script 1 with no response",
          say: "I checked in yesterday and didn't hear back. I'm not following up to pressure you — I just want to know you're okay, and I want you to know I'm here.",
          why: "Two check-ins is reasonable. Three becomes pursuit. Script 2 closes with presence, not desperation.",
        },
        {
          type: "script",
          when: "Script 3 — The Mirror Text: when his energy feels flat or off and you're being pulled toward a big reaction",
          say: "You seem a little different today. Not a complaint — just noticing. Happy to give you space or talk, whatever you need.",
          why: "Names the observation without accusation. Offers both options (space or connection) so the ball is in his court without pressure.",
        },
        {
          type: "script",
          when: "Script 4 — The Space Acceptance: when he says \"I need space\" directly",
          say: "I can give you space. I need one thing so I can actually do that: how much time are we talking? A few hours? A few days? I'm not asking to count down — I'm asking so I know what I'm in.",
          why: "Accepts the need without dissolving into panic. Asks for specificity — which is not a demand, it's a reasonable request that tells you a great deal about his self-awareness.",
        },
        {
          type: "script",
          when: "Script 5 — The Tone Question: when his texts feel flat, short, or cold and you're not sure if something's wrong",
          say: "Your messages feel a little different lately. I could be reading into it — but I'd rather ask than assume. Is everything okay with us?",
          why: "Named the observation, asked directly, acknowledged she could be wrong. Three moves in two sentences.",
        },
        {
          type: "script",
          when: "Script 6 — The Reality Request: when something is clearly wrong and he's not naming it",
          say: "I'm not asking you to fix this right now. I'm asking you to tell me what 'this' is.",
          why: "Separates the fix from the naming. He can often name the problem even when he can't fix it.",
        },
        {
          type: "script",
          when: "Script 7 — The Clarity Demand: when you've been in the dark for too long and need an answer",
          say: "I've been sitting with the quiet and I need to say something directly. I don't know if we're working through something or if this is you stepping back from us entirely. I'm not going to keep guessing. Can you tell me which one it is?",
          why: "Binary question. He must answer one of two options. There is no \"I'm fine\" door here. The binary structure prevents the conversation from dissolving into reassurance without substance.",
        },
        {
          type: "script",
          when: "Script 8 — The Silent Boundary: after you've checked in once and he hasn't responded — establishing non-pursuit",
          say: "I reached out once. I'm not reaching out again after this. When you're ready to talk, I'm here. I'm not going anywhere. But I'm also not coming to you again.",
          why: "This is not a threat. It is a statement of your behavior going forward. It draws the line with warmth and without punishment.",
        },
        {
          type: "script",
          when: "Script 9 — Return-From-No-Contact: when you've been the one who stopped texting and are ready to re-enter",
          say: "I know I went quiet. I needed to. I'm reaching out now because I've been thinking about what happened and I'd like to talk if you're open to it.",
          why: "Honest about the silence, takes ownership, invites without demanding. Does not over-explain.",
        },
      ],
    },
    {
      part: "Section 3 — STAND",
      number: "Eleven",
      title: "Group B — When He Shuts Down Mid-Conversation (Scripts 10–16)",
      blocks: [
        {
          type: "p",
          text: "The shutdown is different from the pull-away. It happens mid-sentence: the conversation is alive, and then suddenly it isn't. His answers go flat, his eyes go somewhere else, the words stop landing. You are left talking to a closed door. The scripts in this group keep you from doing the two things that make shutdown worse — pushing harder into a flooded system, or abandoning your own point to chase his comfort.",
        },
        {
          type: "script",
          when: "Script 10 — The Pause Offer: when you can see him shutting down mid-conversation",
          say: "I can see you're flooded right now, and I don't want to keep pushing when you're in that state. Can we take 15 minutes and come back to this? I need us to actually finish this conversation — I'm not going to drop it.",
          why: "Acknowledges his state (shows emotional intelligence), asks for a pause (not avoidance), and makes clear the conversation will continue (prevents the topic from disappearing into silence forever).",
        },
        {
          type: "script",
          when: "Script 11 — The Return Anchor: when the pause is over and you're resuming the conversation",
          say: "Okay. I'm ready when you are. I want to finish what we started — not to fight, to actually understand each other. You go first, or I can.",
          why: "Reopens the conversation without re-igniting it. Offering him the first word respects his regulation while holding the commitment to finish.",
        },
        {
          type: "script",
          when: "Script 12 — The Feeling Translation: when he says something flat or dismissive and you feel yourself spiraling",
          say: "What I'm hearing is that you're overwhelmed. I'm not going to argue with that. I'd still like us to finish this — at a pace that works for both of us.",
          why: "Translates his harshness into its underlying state (overwhelm) without accepting the harshness. You don't fight his experience, and you don't abandon your point.",
        },
        {
          type: "script",
          when: "Script 13 — The Non-Negotiable: when the conversation turns into you being talked over or dismissed",
          say: "I'm not willing to continue a conversation where I'm being talked over. I'll be here when you're ready to talk to me — not at me.",
          why: "Names the behavior, states your limit, and leaves the door open without subjecting yourself to more of the same. One sentence, no debate about whether you're allowed to say it.",
        },
        {
          type: "script",
          when: "Script 14 — The Shutdown Witness: when he has fully shut down and is not responding at all",
          say: "I can see you've gone somewhere I can't reach right now. I'm not going to force it. I'm going to say what I need to say, and you can respond when you're able.",
          why: "Witnesses his state without chasing it. You speak your truth once, you release the need for an immediate response, and you keep your dignity either way.",
        },
        {
          type: "script",
          when: "Script 15 — Ask for a Signal: when you can't have the full conversation right now but need to know he's still present",
          say: "I'm not asking for a full conversation right now. Can you just let me know you're still here? That's all I need right now.",
          why: "The smallest possible ask. Gives him an easy yes. His answer (or silence) is information either way.",
        },
        {
          type: "script",
          when: "Script 16 — The Conversation Boundary: when the conversation is going nowhere and you need to end it cleanly",
          say: "I don't think we're going to resolve this tonight. I'm going to stop here — not to punish you, to protect myself from saying something I'll regret. We can pick this up tomorrow.",
          why: "Ends the loop without ending the relationship. You name the reason honestly, you protect yourself, and you leave the door open for a better conversation — on your terms.",
        },
      ],
    },
    {
      part: "Section 3 — STAND",
      number: "Twelve",
      title: "Group C — The Ghosting Protocol: Hour-by-Hour (Scripts 17–24)",
      blocks: [
        {
          type: "p",
          text: "Ghosting is the hardest test, because it removes every anchor at once. No context, no timeline, no explanation — just absence. The hour-by-hour protocol exists to give you a plan where your nervous system wants to give you panic. You do not have to decide anything in the moment. The protocol has already decided. You just follow it.",
        },
        {
          type: "script",
          when: "Script 17 — Hour 6: silence with no context",
          say: "Hey. I noticed you've gone quiet. Is everything okay or is something happening on your end?",
          why: "Neutral. Does not assume the worst. Checks on him before checking on the relationship.",
        },
        {
          type: "script",
          when: "Script 18 — Hour 12: still no response",
          say: "I'm not going to keep checking. If you're okay, good — I'm here. If something's wrong, you can tell me when you're ready.",
          why: "Lowers the temperature. One message that releases the watching — you state your availability without performing your anxiety.",
        },
        {
          type: "script",
          when: "Script 19 — Hour 24, no response",
          say: "I'm going to take your silence as an answer for now. If something's actually wrong, I'm open to hearing it. If you've decided to step back, I deserve to know that directly. Either way, I'm here for 24 more hours and then I'm going to take care of myself.",
          why: "Does not beg. Does not punish. Names two possibilities. Sets a time boundary. Leaves with dignity.",
        },
        {
          type: "script",
          when: "Script 20 — Hour 36: the shift from waiting to living",
          say: "I've given this space. I'm not going to keep sitting in silence. When you're ready to talk, I'm ready to listen — but I'm also going to keep living my life in the meantime.",
          why: "Marks the transition internally and externally: the waiting has a boundary, and your life is no longer on hold for a reply.",
        },
        {
          type: "script",
          when: "Script 21 — Hour 48: the last check-in",
          say: "This is my last check-in. Not because I'm angry — because I deserve more than waiting. I'm here if you want to talk.",
          why: "The final message. It is not a threat and not a goodbye — it is a statement of self-respect that ends the pursuit permanently.",
        },
        {
          type: "script",
          when: "Script 22 — The Ghosting Name: when he returns after ghosting and you need to name what happened",
          say: "What you did is ghosting. I'm not going to pretend it wasn't. I need to understand if this is something that will happen again, because I can't build something on a foundation where you disappear when things get hard.",
          why: "Names the behavior without softening it. Asks a direct future-oriented question. Does not demand he apologize — demands he answer a behavioral question.",
        },
        {
          type: "script",
          when: "Script 23 — The Re-Entry Script: when he comes back after silence as if nothing happened",
          say: "I want to reconnect. And I also need us to acknowledge what happened before we move forward like it didn't. I'm not trying to punish you. I'm trying to be honest about what I need.",
          why: "This script does two things simultaneously: it keeps the door open (you want to reconnect) and it sets a condition (acknowledgment). It requires him to respond to both.",
        },
        {
          type: "script",
          when: "Script 24 — The Processed Return: when you've already done your processing during his absence",
          say: "I processed your silence while you were gone. I'm not the person who was waiting when you left. If we're going to talk, it starts from here — not from where we left off.",
          why: "For when the silence changed you more than it changed him. You refuse to resume the old loop, and you set the starting point on your terms.",
        },
      ],
    },
    {
      part: "Section 3 — STAND",
      number: "Thirteen",
      title: "Group D — When He Calls You \"Too Much\" (Scripts 25–31)",
      blocks: [
        {
          type: "p",
          text: "\"Too much.\" \"Too sensitive.\" \"Too emotional.\" These are not observations — they are verdicts, delivered by someone who benefits from you being smaller. The scripts in this group do not argue with the verdict. They decline to stand trial for it. Your needs are not on trial. His capacity is simply being measured against them.",
        },
        {
          type: "script",
          when: "Script 25 — The Calm Correction: when he says you're \"too much\" directly",
          say: "I'm not going to apologize for caring about you. If caring about you is too much, then I need to know what 'enough' looks like.",
          why: "Refuses the apology reflex without attacking him. It converts his vague verdict into a concrete question he now has to answer.",
        },
        {
          type: "script",
          when: "Script 26 — The 'You're Overreacting' Response: when he dismisses your feelings as an overreaction",
          say: "I hear that you think I'm overreacting. I want you to hear that my feelings aren't up for debate. I'm telling you what I need. Whether you agree with the need isn't the question.",
          why: "Separates his opinion of your reaction from the validity of your need. You are not asking permission to feel — you are informing him of a fact.",
        },
        {
          type: "script",
          when: "Script 27 — The 'Too Sensitive' Reframe: when he calls you sensitive as a criticism",
          say: "You're calling me sensitive. I'm calling it aware. I notice when things change between us — that's not a flaw, that's attention.",
          why: "Reframes the insult as a strength without a fight. You decline the shame and keep your perception intact.",
        },
        {
          type: "script",
          when: "Script 28 — The Need Reclaim: when you catch yourself shrinking to avoid being 'too much'",
          say: "I'd rather be 'too much' than pretend I don't need anything. Pretending is what got me here.",
          why: "Internal and external at once. It names the cost of the old strategy and commits to the new one out loud.",
        },
        {
          type: "script",
          when: "Script 29 — The One-Question Boundary: when he frames your needs as unreasonable",
          say: "If what I need is too much for you, that's information. It doesn't make me wrong. It makes us incompatible.",
          why: "Takes the verdict and converts it into data. Incompatibility is a fact, not a judgment — and it ends the argument cleanly.",
        },
        {
          type: "script",
          when: "Script 30 — The Self-Validation: when you need to state your position without his agreement",
          say: "I'm not going to argue with you about whether my needs are valid. They're mine. They're valid. The question is what you want to do about that.",
          why: "Removes the argument entirely. The debate about your validity is over — you have decided. His move is now the only open question.",
        },
        {
          type: "script",
          when: "Script 31 — The Exit Line: when 'too much' has been the story long enough",
          say: "You called me too much. I believed you for a long time. I don't anymore. I'm done shrinking.",
          why: "The closing statement of the group — for when the pattern is old and the verdict has done its damage. It declares the end of the shrinking, not necessarily the end of the relationship.",
        },
      ],
    },
    {
      part: "Section 3 — STAND",
      number: "Fourteen",
      title: "Group E — Setting a Boundary (Scripts 32–38)",
      blocks: [
        {
          type: "p",
          text: "A boundary is not a demand that he change. It is a statement of what you will accept — and what you will do if it is not met. The difference matters: demands depend on him complying; boundaries depend only on you enforcing them. That is why they are the most powerful tool in this book — they are the only tool that works even when he does nothing.",
        },
        {
          type: "script",
          when: "Script 32 — The Basic Boundary: when a specific behavior needs to stop",
          say: "I need you to stop [behavior]. I'm not asking. I'm telling you what I can't accept anymore.",
          why: "Clear, direct, and non-negotiable in tone. It leaves no room for the reinterpretation that keeps the loop alive.",
        },
        {
          type: "script",
          when: "Script 33 — The Consequence Statement: when you need him to know what will happen if the boundary is crossed",
          say: "If [behavior] happens again, I will [action]. I'm not threatening you. I'm telling you what I will do, so you're never surprised.",
          why: "A boundary without a consequence is a suggestion. This names the consequence calmly, which makes it real without making it a weapon.",
        },
        {
          type: "script",
          when: "Script 34 — The Time Boundary: when contact at all hours is part of the problem",
          say: "I'm available until 10pm. After that, I'm turning my phone off. I'm not punishing you — I'm protecting my sleep.",
          why: "Makes your availability a fact he can rely on instead of a resource he can draw on at any hour. Protection, not punishment.",
        },
        {
          type: "script",
          when: "Script 35 — The Consistency Boundary: when you're tired of words without follow-through",
          say: "I need to see consistent behavior over time. Words without follow-through are just words to me now.",
          why: "Moves the relationship's currency from promises to evidence. It is the boundary that ends the hope-loop.",
        },
        {
          type: "script",
          when: "Script 36 — The Acknowledgment Boundary: when he wants to skip past something that happened",
          say: "I need us to acknowledge what happened before we move forward. I'm not going to pretend it didn't happen to keep the peace.",
          why: "Refuses the peace that comes from erasure. Acknowledgment is the minimum condition for repair, and you are stating it plainly.",
        },
        {
          type: "script",
          when: "Script 37 — The Repair Boundary: when disappearances keep happening without acknowledgment",
          say: "When you disappear, I need you to come back and acknowledge it. That's not a punishment. That's the minimum of what I need to feel safe.",
          why: "Names the specific repair behavior you need. It is not about punishment or scorekeeping — it is about safety, stated as a requirement.",
        },
        {
          type: "script",
          when: "Script 38 — The Full Stop: when the pattern has run its course and the boundary is total",
          say: "I'm not accepting this treatment anymore. I'm not angry. I'm finished.",
          why: "The boundary of last resort. It is calm precisely because it is final — anger would still be engagement. This is the end of the negotiation.",
        },
      ],
    },
    {
      part: "Section 3 — STAND",
      number: "Fifteen",
      title: "Group F — When He Comes Back (Scripts 39–43)",
      blocks: [
        {
          type: "p",
          text: "He always comes back — that is the predictable part. The question is never whether he returns. The question is what happens at the return: whether the pattern resumes as if nothing happened, or whether the return becomes the moment the pattern is finally named. These scripts are for the return. They decide what it means.",
        },
        {
          type: "script",
          when: "Script 39 — The Neutral Return: when he comes back and you want to acknowledge it without erasing the gap",
          say: "I see you're back. I'm glad you're okay. I'm not going to pretend the silence didn't happen — we'll need to talk about it.",
          why: "Warm without amnesia. It welcomes him and refuses the reset, holding both at once.",
        },
        {
          type: "script",
          when: "Script 40 — The 'Where Were You' Question: when you need understanding before any repair",
          say: "I'm not asking for an apology yet. I'm asking for an explanation — what happened? I can't move forward without understanding.",
          why: "Sequences the conversation: understanding before apology. It keeps you from accepting a sorry that explains nothing.",
        },
        {
          type: "script",
          when: "Script 41 — THE WALK-AWAY TEXT: when you have made the decision to leave (exactly 19 words)",
          say: "I've decided I can't keep doing this version of us. I'm letting you go. I truly wish you well.",
          why: "Nineteen words. No anger. No blame. No door left open. No question asked. Door closed with dignity intact.",
        },
        {
          type: "script",
          when: "Script 42 — The 'What's Different' Question: when he returns promising change",
          say: "You're back, and I want to know: what's different? Not what you say is different — what's actually different about what you'll do?",
          why: "Moves from promises to behavior, the same move the whole book makes. His answer is either evidence or it isn't.",
        },
        {
          type: "script",
          when: "Script 43 — The Self-Protection Return: when you're willing to talk but not willing to resume the old position",
          say: "I'll talk to you, but I need you to know something first: I'm not the same person who waited around last time. I have boundaries now.",
          why: "States the change in you before the conversation starts. It protects the new position from being swallowed by the old dynamic.",
        },
      ],
    },
    {
      part: "Section 3 — STAND",
      number: "Sixteen",
      title: "Group G — Leave and Closure (Scripts 44–47)",
      blocks: [
        {
          type: "p",
          text: "If you are here, the decision is made — or nearly made. The scripts in this group are not for winning him back. They are for leaving with the one thing the dynamic tried to take from you: your voice. Closure does not come from his understanding or his permission. It comes from saying what is true, and letting that be enough.",
        },
        {
          type: "script",
          when: "Script 44 — The Short Goodbye: when the relationship is over and a debate is not welcome",
          say: "This isn't working for me anymore. I'm ending it. I don't want a debate about it.",
          why: "Ends without negotiation. It is not cruel — it is honest. You are not asking for agreement; you are stating a decision.",
        },
        {
          type: "script",
          when: "Script 45 — The 'You Don't Get to Choose' Closure: when he wants to argue with your decision",
          say: "I'm not asking you to agree with my decision. I'm telling you I've made it. My closure isn't your permission.",
          why: "Closes the argument about whether you are allowed to leave. The decision is yours; his agreement was never a requirement.",
        },
        {
          type: "script",
          when: "Script 46 — The Final Text: when you want to leave with warmth and finality",
          say: "I'm choosing myself. That's not a punishment to you — it's a kindness to me. Take care.",
          why: "Leaves without blame. It is the rare goodbye that is both gentle and absolute — no door open, no guilt left behind.",
        },
        {
          type: "script",
          when: "Script 47 — The No-Contact Statement: when you need space to heal and the healing requires distance",
          say: "I'm going no-contact. Not as a game, not to make you miss me — because I can't heal while I'm still checking my phone for you. This is goodbye.",
          why: "Defines the silence on your terms. No-contact is named as what it is: a condition for healing, not a strategy for his attention.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // SECTION 4 — CHOOSE: THE 3-QUESTION FRAMEWORK  (Pages 81-90)
    // ═══════════════════════════════════════════════════════════════
    {
      part: "Section 4 — CHOOSE",
      number: "Seventeen",
      title: "The 3-Question Decision Framework",
      blocks: [
        {
          type: "p",
          text: "Every book about avoidant relationships will give you tools to stay in the loop longer. This one gives you a way out of the loop entirely — in either direction.",
        },
        {
          type: "p",
          text: "The question is not \"will he change?\" The question is: based on his actual behavior — not his words, not his potential — does this relationship have a future you actually want? Three questions. Answer them on paper, not in your head. Your head has been lying to you; paper doesn't.",
        },
        {
          type: "h2",
          text: "Question 1 — Behavioral: What has he consistently DONE? (Not said. Done.)",
        },
        {
          type: "list",
          items: [
            "Go back 90 days. Not last week — the last three months.",
            "Ignore what he promised, explained, or said when confronted.",
            "Look only at repeated behavior patterns.",
            "Write down at least 5 behavioral examples.",
            "Assessment: Are 3+ of 5 examples showing withdrawal-without-repair, or repair-after-difficulty?",
          ],
        },
        {
          type: "p",
          text: "Words are what he wants you to evaluate. Behavior is what you actually have to build on. When the two conflict — and they will — behavior wins, every time.",
        },
        {
          type: "h2",
          text: "Question 2 — Pattern: Is this improving, or are you adjusting your standards downward?",
        },
        {
          type: "p",
          text: "There is a quiet mechanism in long one-sided dynamics called standard-drift: you gradually accept less while calling it adaptation. Each cycle you lower the bar a little — you no longer expect a reply today, then no longer expect one this week, then you celebrate the fact that he texted at all. The lowering feels like maturity. It is not maturity. It is the slow abandonment of what you actually need.",
        },
        {
          type: "list",
          items: [
            "Write down: What did she need from a relationship 2 years ago? (Be honest.)",
            "Write down: What does she currently accept? (Be brutal.)",
            "Compare the lists. The gap IS the answer.",
          ],
        },
        {
          type: "p",
          text: "If the gap is large, you have not become more understanding. You have been trained to need less. The question asks you to notice the training.",
        },
        {
          type: "h2",
          text: "Question 3 — Direction: Where is this realistically headed in 6 months if nothing changes in his behavior?",
        },
        {
          type: "p",
          text: "The word \"realistically\" is load-bearing. It is the word that stops hope from writing the answer. Ask it the way a scientist would: if I felt nothing about either outcome, what would I predict? Then ask the second question, the one that bypasses your hopes entirely: what would I tell my best friend to do in this situation?",
        },
        {
          type: "h2",
          text: "The Decision Matrix",
        },
        {
          type: "list",
          items: [
            "Pattern IMPROVING + Standards HOLDING + Realistic GOOD OUTCOME → STAY. Use the boundary conversation scripts from Section 3.",
            "Pattern STAGNANT + Standards DRIFTING + Realistic NO-CHANGE → STAND. Use the Clarity Conversation scripts (Group E). You are in it with new conditions.",
            "Pattern WORSENING + Standards COLLAPSING + Realistic EXIT → LEAVE. Use Group G scripts. Your decision has already been made by the data.",
          ],
        },
        {
          type: "p",
          text: "Three outcomes — Stay, Stand, Leave. Not two. \"STAND\" means still in it, operating from a fundamentally different position. This is the option neither of the other books in this niche provides: the woman who is not yet ready to leave but refuses to keep absorbing. The framework gives her a position to stand on, not just a door to walk through.",
        },
      ],
    },
    {
      part: "Section 4 — CHOOSE",
      number: "Eighteen",
      title: "Closing Validation — Where You Are Now",
      blocks: [
        {
          type: "p",
          text: "You came into this book from one of five places. The next five pages speak to exactly where you are — no generic ending, no single answer for everyone. Find your place. Read your page. Take what belongs to you.",
        },
        {
          type: "h2",
          text: "If You're Still In It, Trying to Understand",
        },
        {
          type: "p",
          text: "You do not have to leave tonight. But you have to stop living like his ambiguity is the same as your ambiguity. You know what you know. The framework has said it. Trust it.",
        },
        {
          type: "h2",
          text: "If You're Still In It, Wondering If It's Fixable",
        },
        {
          type: "p",
          text: "Fixable is not a feeling — it is a pattern. You have the questions now. Run them on paper. If the answers say it can change, the boundary scripts are your next move. If the answers say it can't, you already know what the data is telling you. Either way, you are no longer guessing.",
        },
        {
          type: "h2",
          text: "If You Want to Leave but Feel Stuck",
        },
        {
          type: "p",
          text: "Stuck is not a fact. It is a feeling produced by the gap between knowing and doing. The framework gave you the knowing. Group G gave you the words. The only thing left is the moment you choose yourself over the familiar pain. You have everything you need for that moment. It is closer than it feels.",
        },
        {
          type: "h2",
          text: "If You've Already Left but Still Feel Hooked",
        },
        {
          type: "p",
          text: "The hook is not love — it is an unfinished nervous-system loop. Section 2 is your home now. The 90-Second Interrupt, the Reality Anchor, the Sleep Protocol — these are not for the relationship. They are for the withdrawal. Run them until the loop closes. It will close.",
        },
        {
          type: "h2",
          text: "If You Know All the Theory but Still Can't Stop Chasing",
        },
        {
          type: "p",
          text: "Knowing has never been your problem — the gap between knowing and doing is where the dynamic lives. That is why this book gave you scripts instead of essays and protocols instead of explanations. The next time the urge to chase fires, you do not need another insight. You need a script. They are in Section 3. Use them like tools, not like literature.",
        },
        {
          type: "quote",
          text: "The relationship was never the question. You were never waiting for him to decide. You were always waiting for yourself.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════
    // BACK MATTER  (Pages 91-94)
    // ═══════════════════════════════════════════════════════════════
    {
      number: "Nineteen",
      title: "Your 7-Day Implementation Map",
      blocks: [
        {
          type: "h1",
          text: "Your 7-Day Implementation Map",
        },
        {
          type: "p",
          text: "The book is done. Now what? Here is the only plan you need.",
        },
        {
          type: "p",
          text: "Day 1: Identify which of the 5 audience segments you are (from the Reader Map on page 3). Return to that section.",
        },
        {
          type: "p",
          text: "Day 2: Reread the Rule that hit hardest. Write one sentence about why.",
        },
        {
          type: "p",
          text: "Day 3: Complete the 3-Question Framework in writing if you haven't already.",
        },
        {
          type: "p",
          text: "Day 4: Select one script from Group A or B. Send it or prepare to.",
        },
        {
          type: "p",
          text: "Day 5: Run the Reality Anchor on whatever happened after Day 4.",
        },
        {
          type: "p",
          text: "Day 6: Return to the decision matrix. Update it based on his response to Day 4.",
        },
        {
          type: "p",
          text: "Day 7: Write the sentence: \"Based on what I know now, the most honest next step for me is ___.\"",
        },
      ],
    },
    {
      number: "Twenty",
      title: "A Final Word",
      blocks: [
        {
          type: "p",
          text: "You're reading the complete edition. If you ever need another copy, email support@fleurite.me. No questions asked.",
        },
        {
          type: "p",
          text: "If you want to revisit the foundation, the 3-Day Reset guide is available at fleurite.me",
        },
        { type: "divider" },
        {
          type: "p",
          text: "— Lena · Fleurite.me · 2026",
        },
      ],
    },
  ],
}
