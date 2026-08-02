/**
 * "You Were Never Too Much" — The Rooted Method
 * Full original manuscript for the paid Fleurite book.
 *
 * Voice principles (derived from audience psychology analysis):
 *  - Validate the pain first. Never shame her for chasing.
 *  - Explain the WHY (nervous system + attachment) so she stops blaming herself.
 *  - Give her the HOW (scripts, boundaries, a 7-day return).
 *  - Reframe the avoidant partner as surviving, not cruel — without excusing harm.
 *  - Always land on: you are not too much, and you are allowed to come home to yourself.
 */

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "script"; when: string; say: string; why?: string }
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
  slug: "you-were-never-too-much",
  title: "You Were Never Too Much",
  subtitle: "The Rooted Method for stopping the chase, quieting the anxiety, and coming home to yourself",
  author: "Fleurite",
  brand: "Fleurite",
  year: 2025,
  frontMatter: [
    { type: "h1", text: "Before You Begin" },
    {
      type: "p",
      text: "If you are reading this at 2am with your phone warm in your hand, waiting for a reply that hasn't come, I want you to know something before we go any further: nothing is wrong with you. You are not broken. You are not too much. You are a person whose care for someone else has been turned into a loop of waiting, checking, and quietly disappearing.",
    },
    {
      type: "p",
      text: "This book is not about how to make him choose you. It is about how to stop abandoning yourself while you wait to be chosen. Those two things feel the same when you are inside the panic. They are not. One keeps you chasing. The other brings you home.",
    },
    {
      type: "quote",
      text: "It was never that you were too much. Safety was never available.",
    },
    {
      type: "p",
      text: "Read this slowly. Read it in order. Part One will help you understand why you feel the way you feel, so the shame can finally loosen its grip. Part Two will give you the exact words, boundaries, and daily practice to change the pattern. You do not have to become someone new. You have to come back to who you were before you learned that love meant earning it.",
    },
    { type: "divider" },
    {
      type: "p",
      text: "A gentle note: this book is a work of emotional education, drawn from attachment psychology and nervous-system science. It is not therapy or medical advice. If you are in crisis or in danger, please reach out to a licensed professional or a local support line. You deserve real support, and asking for it is not weakness — it is the most secure thing a person can do.",
    },
  ],
  chapters: [
    // ---------- PART ONE: UNDERSTAND ----------
    {
      part: "Part One — Understand",
      number: "One",
      title: "You Were Never Too Much",
      blocks: [
        {
          type: "p",
          text: "Somewhere along the way, you started to believe that your feelings were the problem. That if you could just need less, want less, feel less, then love would finally stay. So you began to edit yourself. You shortened your texts. You swallowed the question you actually wanted to ask. You told yourself you were being 'crazy' for wanting a reply, for wanting to be told where you stand, for wanting to matter to the person you love.",
        },
        {
          type: "p",
          text: "Here is the truth that the panic has been hiding from you: wanting closeness is not a flaw. Wanting to be reassured by someone who says they love you is not neediness. It is the most human thing there is. What feels like 'too much' is not the size of your love. It is the size of the gap between what you are giving and what you are getting back.",
        },
        {
          type: "quote",
          text: "You were not too much. You were under-met.",
        },
        {
          type: "p",
          text: "When you pour a full cup of care into a container with a hole in the bottom, you will always feel like you are pouring too much. Not because you are. Because it never fills. And so you pour faster, harder, more anxiously — and you conclude that the problem must be the amount you are pouring. It isn't. It's the container.",
        },
        {
          type: "h2",
          text: "The four lies the pattern tells you",
        },
        {
          type: "list",
          items: [
            "\"I'm too needy.\" — You have normal needs that are going unmet. Unmet needs get louder, not because you are needy, but because they are trying to be heard.",
            "\"I'm too sensitive.\" — You are accurately sensing distance. Your radar is not broken. It is picking up something real and being told to ignore it.",
            "\"If I were easier to love, he'd stay.\" — People stay when they are capable of staying and choose to. Not when you shrink enough to deserve it.",
            "\"I'm the problem in every relationship.\" — You may be the common denominator, but not because you are unlovable. Because you keep choosing the same unavailable dynamic that feels like home.",
          ],
        },
        {
          type: "p",
          text: "We are going to take these apart one by one across this book. But for now, I only need you to hold a single new sentence in your body. Say it out loud if you can, even if you don't believe it yet: 'I am not too much. I have simply been asking the wrong person to be my safety.'",
        },
      ],
    },
    {
      part: "Part One — Understand",
      number: "Two",
      title: "How You Were Trained to Chase",
      blocks: [
        {
          type: "p",
          text: "You were not born a chaser. No baby is. A baby cries and reaches, and if a warm, consistent someone comes — most of the time, not perfectly — that baby learns a quiet, unshakeable fact: 'When I need connection, connection comes.' That child grows up able to relax into love, because their body was taught that closeness is reliable.",
        },
        {
          type: "p",
          text: "But if the warmth came unpredictably — loving one day, distant the next; present when you achieved, absent when you struggled — your body learned a different fact: 'Connection is possible, but I have to work for it, watch for it, earn it, and never take it for granted.' That is not a character flaw. That is a survival strategy that a small child built brilliantly, with the only materials available.",
        },
        {
          type: "quote",
          text: "Anxious attachment is not weakness. It is the intelligence of a child who learned to keep love from leaving.",
        },
        {
          type: "h2",
          text: "The strategy that used to save you",
        },
        {
          type: "p",
          text: "When love was inconsistent, hypervigilance kept you safe. Reading the room, sensing a mood shift before anyone spoke, working twice as hard to be good, to be easy, to be worth keeping — these were not neurotic habits. They were how you held onto a bond that felt like it could vanish. The tragedy is that the very strategy that protected you as a child is the one that exhausts you as an adult.",
        },
        {
          type: "p",
          text: "As a grown woman, you don't need to earn love anymore. You are allowed to be met. But your nervous system doesn't know that yet, because no one ever told your body it was safe to stop working. So when you meet someone who is a little distant, a little hard to read, a little inconsistent — your whole system lights up with recognition. Not because it's healthy. Because it's familiar. And familiar, to a nervous system, feels like home.",
        },
        {
          type: "h2",
          text: "Why the unavailable ones feel like 'chemistry'",
        },
        {
          type: "p",
          text: "This is the part almost no one tells you. The breathless, addictive, can't-eat-can't-sleep feeling you call chemistry is very often not love. It is activation. It is your childhood alarm system going off, disguised as passion. A securely available person can feel 'boring' at first — not because they are, but because they don't trigger the alarm. There's no hole to fill, so there's no frantic pouring, so your body reads calm as 'no spark.'",
        },
        {
          type: "p",
          text: "One of the quiet goals of this book is to help you re-learn that calm is not the absence of love. Calm is what love actually feels like when it's safe.",
        },
      ],
    },
    {
      part: "Part One — Understand",
      number: "Three",
      title: "Why He Pulls Away",
      blocks: [
        {
          type: "p",
          text: "To stop taking his distance personally, you have to understand what his distance actually is. And it is almost never what it feels like to you. When someone with an avoidant pattern pulls away, it feels to you like rejection, like you did something wrong, like you are being punished. To him, it is something else entirely: it is relief from a pressure he can barely name.",
        },
        {
          type: "quote",
          text: "His distance is not coldness. It is survival. That does not make it your job to endure.",
        },
        {
          type: "p",
          text: "Where you learned that love means staying close and vigilant, he learned the opposite. Somewhere in his early life, needing someone led to disappointment, engulfment, or shame. So his body built the mirror-image strategy of yours: 'When I feel too close, I get away, and getting away keeps me safe.' Closeness, for him, doesn't register as comfort. It registers as threat. When you reach, his alarm says 'retreat,' the same way yours says 'pursue.'",
        },
        {
          type: "h2",
          text: "What is really happening when he goes quiet",
        },
        {
          type: "list",
          items: [
            "He is not calmly ignoring you. He is often flooded and shutting down to cope — a nervous-system freeze, not a strategic power move.",
            "He may genuinely care and still disappear. Caring and capacity are not the same thing. He can love you and be unable to stay present with intimacy.",
            "Your pursuit, however loving, reads to him as pressure — which deepens the retreat, which deepens your panic. Two alarms, feeding each other.",
            "His returning after distance is not proof the pattern is fixed. It is the pattern. The relief of reconnection resets the cycle.",
          ],
        },
        {
          type: "h2",
          text: "The line you must hold",
        },
        {
          type: "p",
          text: "Understanding him is not the same as excusing what his distance does to you. This is the balance point of the whole book: you can hold deep compassion for why he is the way he is, and refuse to keep abandoning yourself inside it. Compassion without boundaries is self-erasure. Boundaries without compassion is war. You are learning to do both at once.",
        },
        {
          type: "p",
          text: "His pattern is his to heal, if he chooses to. That is not cruelty on your part — it is the only honest division of labor. You cannot love someone into safety who experiences your love as danger. You can only stop making his regulation your full-time job.",
        },
      ],
    },
    {
      part: "Part One — Understand",
      number: "Four",
      title: "The Dance: The Chase-and-Withdraw Loop",
      blocks: [
        {
          type: "p",
          text: "Put an anxious pattern and an avoidant pattern in a room together and you get one of the most predictable dynamics in all of relationship psychology. Researchers sometimes call it the pursue-withdraw cycle. You might just call it 'my last three relationships.' Understanding the exact mechanics of it will do something powerful: it will let you see the pattern instead of only feeling it.",
        },
        {
          type: "h2",
          text: "The loop, step by step",
        },
        {
          type: "list",
          items: [
            "1. You sense a small distance — a shorter text, a flatter tone, a delay. Your alarm activates.",
            "2. You reach: you ask if everything's okay, you seek reassurance, you over-give, you over-explain.",
            "3. Your reaching lands on him as pressure. His alarm activates. He withdraws further to feel safe.",
            "4. His withdrawal confirms your worst fear. Your panic spikes. You reach harder — or you collapse and go silent, which is just quieter reaching.",
            "5. Eventually he returns, the tension releases, and the relief feels like love. The loop resets, a little more worn each time.",
          ],
        },
        {
          type: "quote",
          text: "The more you shrink yourself to keep the peace, the more comfortable the distance becomes for him — and the more invisible you become to yourself.",
        },
        {
          type: "p",
          text: "Notice what the loop does to you over months and years. Each cycle, you give a little more and ask for a little less. You learn to be 'low maintenance.' You call it being chill. But chill, here, is just fear wearing a calm face. You are not becoming more secure. You are becoming smaller. And the smaller you get, the more the relationship organizes itself around his comfort and your silence.",
        },
        {
          type: "h2",
          text: "Why you can't logic your way out",
        },
        {
          type: "p",
          text: "You already know, intellectually, that texting him five more times won't help. You've told yourself a hundred times to 'just relax.' It doesn't work, and here's why: the loop doesn't live in your thoughts. It lives in your body. When your attachment alarm fires, the thinking part of your brain goes quiet and the survival part takes over. You cannot out-think a nervous system in alarm. You can only learn to calm it. That is exactly what Part Two teaches your body to do.",
        },
      ],
    },
    {
      part: "Part One — Understand",
      number: "Five",
      title: "Your Nervous System Isn't Broken",
      blocks: [
        {
          type: "p",
          text: "Let's talk about what actually happens in your body when he goes quiet, because once you understand this, you will stop calling yourself crazy. The frantic feeling — the racing heart, the tight chest, the compulsion to check your phone, the inability to focus on anything else — is not a personality defect. It is a threat response. Your body has classified 'disconnection from my person' as 'danger,' and it is doing exactly what it evolved to do in danger: mobilize.",
        },
        {
          type: "quote",
          text: "Your body doesn't care why they went quiet. It only knows one thing: I wasn't protected. So it sounds the alarm.",
        },
        {
          type: "h2",
          text: "Protest behavior, explained",
        },
        {
          type: "p",
          text: "Attachment researchers have a name for the texting, the checking, the picking-a-fight-just-to-get-a-response: protest behavior. When a bond feels threatened, the nervous system escalates its bids for connection, the same way a child cries louder when a parent walks away. It is not manipulation. It is a biological protest against the loss of a lifeline. When you understand your 2am spiral as protest behavior, you can finally meet it with compassion instead of shame.",
        },
        {
          type: "h2",
          text: "The two states you keep swinging between",
        },
        {
          type: "list",
          items: [
            "Activation (fight/flight): heart pounding, mind racing, urge to text, call, fix, chase. This is your system trying to force reconnection.",
            "Collapse (freeze/shutdown): numbness, exhaustion, hopelessness, 'I don't even care anymore' — which is not peace, but your system giving up because activation didn't work.",
          ],
        },
        {
          type: "p",
          text: "Neither of these is the real you. They are states your body drops into when it doesn't feel safe. The whole practice of coming home to yourself is learning to notice which state you're in, and to gently bring your body back to a third state — a regulated, grounded calm — before you decide what to do. Regulation first, decision second. Always in that order.",
        },
        {
          type: "h2",
          text: "The most important reframe in this book",
        },
        {
          type: "p",
          text: "Your nervous system was not overreacting. It was accurately responding to a relationship in which safety was inconsistent. The problem was never that your alarm is too loud. The problem is that you have been trying to soothe the alarm by getting the very person who triggers it to reassure you. In Part Two, you will learn to become your own source of safety first. Not so that you never need anyone — but so that you never again need someone so badly that you disappear to keep them.",
        },
      ],
    },
    // ---------- PART TWO: REWIRE ----------
    {
      part: "Part Two — Rewire",
      number: "Six",
      title: "Coming Home to Yourself",
      blocks: [
        {
          type: "p",
          text: "Everything changes here. Part One helped you understand the pattern. Part Two is where you begin to live differently inside it. And it starts not with him, not with a text, not with a boundary — but with the relationship you have abandoned the most: the one with yourself.",
        },
        {
          type: "quote",
          text: "You have been waiting for him to choose you. Start by choosing to come back to yourself.",
        },
        {
          type: "p",
          text: "When you have spent months or years organizing your inner life around another person's moods, you lose contact with your own signal. You genuinely don't know what you want for dinner, what you think about a film, how your own day was — because every channel has been tuned to him. Coming home means slowly turning some of those channels back to yourself.",
        },
        {
          type: "h2",
          text: "The practice of self-return",
        },
        {
          type: "list",
          items: [
            "Reclaim one small preference a day. What do you actually want right now — the tea or the coffee, the walk or the rest? Answer it, then honor it. You are rebuilding trust with yourself.",
            "Notice when you are performing 'easy.' Catch the moment you're about to shrink a real feeling into a casual one. You don't have to voice it yet. Just notice it. Awareness is the first act of return.",
            "Keep one promise to yourself daily. Small and non-negotiable. You told yourself you'd go to bed by eleven — do it. Self-trust is built the same way it was broken: through repeated, tiny evidence.",
            "Let yourself feel without fixing. When the ache comes, instead of texting to make it stop, place a hand on your chest and say, 'I'm here. I've got you.' You are becoming the consistent presence you always needed.",
          ],
        },
        {
          type: "p",
          text: "This is not about becoming cold or 'not caring.' You will always be a warm, feeling person — thank goodness. It is about widening your base so that his response is no longer the ground you stand on. When you have your own ground, you can love someone without drowning. And, quietly, this is also the thing that changes the dynamic most: a woman standing on her own ground is not chasing. And a person who was pulling away from pressure suddenly has nothing to pull away from.",
        },
      ],
    },
    {
      part: "Part Two — Rewire",
      number: "Seven",
      title: "The Pause: Regulate Before You React",
      blocks: [
        {
          type: "p",
          text: "This is the single most practical skill in the book, and if you learn nothing else, learn this. Between the trigger — the unanswered text, the flat tone — and your response, there is a moment. In that moment, right now, you react automatically: you reach, you check, you spiral. We are going to widen that moment. Because in the space of the pause is where your freedom lives.",
        },
        {
          type: "quote",
          text: "You cannot make a secure decision from an activated body. First calm the body. Then choose.",
        },
        {
          type: "h2",
          text: "The 2am Protocol",
        },
        {
          type: "p",
          text: "When the panic hits and your hand goes for the phone, do this before you type a single word. It takes ninety seconds and it interrupts the survival loop long enough for your thinking brain to come back online.",
        },
        {
          type: "list",
          items: [
            "1. Name it. Say silently: 'My attachment alarm is firing. This is protest, not truth.' Naming a state reduces its grip — this is basic neuroscience, not a platitude.",
            "2. Breathe long and low. Inhale for four, exhale for eight. A long exhale is the fastest physical signal to your body that it is safe. Do this six times.",
            "3. Feel your feet. Press them into the floor. Look around and name five things you can see. This pulls you out of the imagined future and into the present, where you are actually okay.",
            "4. Ask the grounded question: 'If I felt completely secure right now, what would I do?' The answer is almost never 'send the fifth text.' Usually it is 'sleep,' 'call a friend,' or 'nothing.'",
            "5. Delay, don't suppress. Tell yourself you can respond in the morning. You are not forbidding the reach. You are giving your regulated self the final vote.",
          ],
        },
        {
          type: "p",
          text: "You will not do this perfectly. Some nights the text will send before the pause. That is not failure — that is a nervous system healing at the pace nervous systems heal, which is unevenly. Each time you manage even one step of the protocol, you are laying down a new pathway. Repetition, not perfection, rewires the brain.",
        },
      ],
    },
    {
      part: "Part Two — Rewire",
      number: "Eight",
      title: "Words That Keep You Whole",
      blocks: [
        {
          type: "p",
          text: "Now we get to the words. But notice what these scripts are for. They are not tricks to make him chase you. They are not reverse psychology. They are ways of speaking that let you stay honest and stay whole at the same time — that let you express a real need without collapsing into pursuit, and hold a real line without turning it into a punishment. Say them from a regulated body (that's why the Pause comes first). A secure sentence delivered in a panic is just a chase with better grammar.",
        },
        {
          type: "quote",
          text: "Secure communication says: here is what's true for me, and I can stay standing whatever you choose.",
        },
        {
          type: "h2",
          text: "When he's gone quiet and you want to spiral-text",
        },
        {
          type: "script",
          when: "Instead of five anxious texts asking if everything's okay",
          say: "\"Hey — I noticed it's been quiet between us. I'm not chasing an answer tonight, just letting you know I'd love to connect when you're around.\"",
          why: "It names the truth, removes the pressure, and — crucially — tells your own body you don't have to hover for a reply. Then you put the phone down and do the Pause.",
        },
        {
          type: "h2",
          text: "When you need reassurance (and you're allowed to)",
        },
        {
          type: "script",
          when: "Instead of 'Do you even still want this?' asked in tears at midnight",
          say: "\"I've been feeling a little disconnected and I care about us, so I wanted to say it directly rather than let it build. Can we make some real time this week?\"",
          why: "You're asking for connection as a request, not extracting it as proof. Requests keep your dignity. Extraction erodes it.",
        },
        {
          type: "h2",
          text: "When he pulls away after closeness",
        },
        {
          type: "script",
          when: "Instead of panicking that intimacy 'scared him off'",
          say: "\"I loved being close with you. I know you sometimes need space to recharge — take it. I'm not going anywhere, and I'm not going to shrink while you do.\"",
          why: "You give him room without abandoning yourself in the process. You're regulating your alarm out loud instead of managing his.",
        },
        {
          type: "h2",
          text: "When you catch yourself over-apologizing",
        },
        {
          type: "script",
          when: "Instead of 'Sorry, ignore me, I'm being crazy'",
          say: "\"What I said matters to me and I'd like to actually talk about it.\"",
          why: "Every time you delete your own reality to keep the peace, you teach him — and yourself — that your feelings are negotiable. This one sentence reverses that lesson.",
        },
        {
          type: "h2",
          text: "The most powerful words of all",
        },
        {
          type: "p",
          text: "There is one script that changes everything, and you say it to no one but yourself, in the mirror, on the nights it's hardest: 'I am not going to leave me to keep you.' Say it until your body believes it. Because the day you truly mean it is the day the chasing ends — not through a technique, but because there is finally someone home.",
        },
      ],
    },
    {
      part: "Part Two — Rewire",
      number: "Nine",
      title: "Boundaries That Reveal",
      blocks: [
        {
          type: "p",
          text: "Most of what you've been told about boundaries is wrong. A boundary is not a threat. It's not an ultimatum you deliver to control his behavior. It's not a wall you build to keep love out. A boundary is simply the line where you end and he begins — a statement of what you will do to take care of yourself, regardless of what he chooses to do.",
        },
        {
          type: "quote",
          text: "A boundary is not a demand that he change. It is a decision about how you will be treated — and what you'll do if you're not.",
        },
        {
          type: "h2",
          text: "The difference that changes everything",
        },
        {
          type: "list",
          items: [
            "An ultimatum: 'If you don't text me back faster, we're done.' — It tries to control him and hands him all your power.",
            "A boundary: 'I'm not able to stay in a relationship where I go days without any contact. I need more consistency to feel okay, and I'm going to act on my own well-being if that's not something you want.' — It states your need and your own next step. His response is information, not the whole verdict.",
          ],
        },
        {
          type: "p",
          text: "Here is the reframe that gives boundaries their real power: a boundary is not a test he passes or fails. It is a filter. When you finally stop over-functioning, stop chasing, and start stating clear needs from a grounded place, one of two things happens — and both of them free you.",
        },
        {
          type: "list",
          items: [
            "He rises. Given a real, calm requirement instead of anxious pursuit, some partners step up. The relationship reorganizes around mutual effort, and you get to find out that being met was possible.",
            "He reveals. He can't or won't meet even a reasonable need. This is painful — but it is not rejection. It is clarity. You have just learned, without years more of shrinking, that this was never going to be safe. The boundary revealed the truth so you didn't have to keep guessing.",
          ],
        },
        {
          type: "p",
          text: "This is why boundaries feel terrifying to an anxious heart: some part of you knows they might reveal the truth. You have kept yourself small precisely so you'd never have to find out. But a life spent avoiding the truth is a life spent chasing a maybe. Boundaries trade the exhausting maybe for a clean answer — and a clean answer, even a sad one, is the beginning of peace.",
        },
      ],
    },
    {
      part: "Part Two — Rewire",
      number: "Ten",
      title: "The 7-Day Return",
      blocks: [
        {
          type: "p",
          text: "Reading changes your mind. Practice changes your life. This is a seven-day guided return to yourself — one gentle focus per day. Do it in order. It is not a program to win him back; it is a week to get you back. Keep a note on your phone or a page in a notebook, and answer the day's question honestly. Repeat the whole week as many times as you need. Rewiring is repetition.",
        },
        {
          type: "h2",
          text: "Day 1 — Name the pattern without shame",
        },
        {
          type: "p",
          text: "Write down the loop as it actually happens for you. What's your first trigger? What do you do? How does it end? You are not judging it. You are meeting it. Ask: 'Where did I first learn that love had to be earned?'",
        },
        {
          type: "h2",
          text: "Day 2 — Learn your alarm",
        },
        {
          type: "p",
          text: "Today, just notice your body. When the anxious feeling comes, where do you feel it — chest, stomach, throat? Practice one round of the 2am Protocol even if the trigger is small. Ask: 'What is my body trying to protect me from?'",
        },
        {
          type: "h2",
          text: "Day 3 — Reclaim one channel",
        },
        {
          type: "p",
          text: "Do one thing today purely because you want to, unrelated to him or anyone's approval. A walk, a meal you love, an hour on something that's yours. Ask: 'What did I used to love before I got so busy monitoring someone else?'",
        },
        {
          type: "h2",
          text: "Day 4 — Practice the pause",
        },
        {
          type: "p",
          text: "The next time you feel the pull to reach anxiously, run the full Protocol before you act. Whatever you do afterward is fine — the win is the pause itself. Ask: 'If I felt completely secure, what would I do here?'",
        },
        {
          type: "h2",
          text: "Day 5 — Say one true thing",
        },
        {
          type: "p",
          text: "Use one script from Chapter Eight, out loud, to him or to someone in your life — a small honest sentence you'd normally swallow. Notice you survive it. Ask: 'What have I been editing out to keep the peace?'",
        },
        {
          type: "h2",
          text: "Day 6 — Draw one line",
        },
        {
          type: "p",
          text: "Identify one boundary you've been afraid to hold, and name your own next step inside it — not as a threat, as a plan for your own care. You don't have to deliver it today. Naming it to yourself is the work. Ask: 'What am I no longer available for?'",
        },
        {
          type: "h2",
          text: "Day 7 — Choose yourself on purpose",
        },
        {
          type: "p",
          text: "Look back at the week. Write the sentence: 'I am not going to leave me to keep anyone.' Then plan one way you'll keep choosing yourself next week. Ask: 'What would my life look like if I trusted that I was never the problem?'",
        },
        {
          type: "quote",
          text: "The goal was never to make him stay. It was to make sure that whatever he does, you never abandon yourself again.",
        },
      ],
    },
    {
      part: "Part Two — Rewire",
      number: "",
      title: "A Closing Letter: Being Chosen Without Begging",
      blocks: [
        {
          type: "p",
          text: "I want to leave you with a picture of where this leads, because on the hard nights it helps to know what you're walking toward. Imagine a version of you who still feels deeply — she never lost her tenderness, that was never the goal — but who no longer bleeds herself dry to keep someone close. When a text goes unanswered, she feels the flicker of the old alarm, breathes, and lets it pass. She says what's true. She asks for what she needs, plainly. And if someone can't meet her, she grieves, and she lets them go, because she is no longer willing to trade herself for a maybe.",
        },
        {
          type: "p",
          text: "That woman is not colder than you. She is warmer, actually, because her warmth is finally safe — it isn't a bid, it isn't a bargain, it's just love, freely given by someone who knows she'll be okay either way. That is what secure love feels like. Not the breathless chase. The quiet, sturdy 'I'm here, and I'm not going anywhere, and I don't need you to fix me because I'm already home.'",
        },
        {
          type: "quote",
          text: "You will know you've healed not when you stop wanting love, but when you stop abandoning yourself to get it.",
        },
        {
          type: "p",
          text: "You were never too much. You were a person with a big, real heart, asking for safety in the wrong places, blaming yourself for a gap that was never yours to fill. Now you know better. Now you have the tools. Be patient with yourself — you are undoing a lifetime of training, and it will not happen in a week. But it will happen, one pause, one true sentence, one kept promise at a time.",
        },
        {
          type: "p",
          text: "Come home. She's been waiting for you, and she's so glad you're back.",
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
