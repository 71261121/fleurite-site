/**
 * "The Feminine Bloom Reset System" — By Eliza
 * Full original manuscript for the paid Fleurite book.
 *
 * Voice principles:
 *  - Validate the exhaustion first. She's not broken.
 *  - Explain the WHY (cycles, nervous system, alignment) so she stops blaming herself.
 *  - Give her the HOW (7-day reset, daily practices, the psychology).
 *  - Reframe fatigue as her body trying to communicate, not a character flaw.
 *  - Always land on: your cycle is not a bug, it's a feature. Learn to work with it.
 */

export type Block =
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "practice"; name: string; description: string; when?: string }
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
  slug: "feminine-bloom-reset-system",
  title: "The Feminine Bloom Reset System",
  subtitle: "Reclaim Your Energy in 7 Days — Aligned with Your Cycle, Not Against It",
  author: "Eliza",
  brand: "Fleurite",
  year: 2025,
  frontMatter: [
    { type: "h1", text: "Before You Begin" },
    {
      type: "p",
      text: "If you're reading this at 3 PM on a Tuesday, about to hit a wall you can't explain, I want you to know something before we go any further: nothing is wrong with you. You're not lazy. You're not broken. You're not failing at productivity. You're experiencing a pattern your body has been trying to communicate for years — and nobody taught you to listen.",
    },
    {
      type: "p",
      text: "This system is not about 'pushing through' or 'hacking' your energy. It's about coming home to your cycle instead of fighting it. Seven days to reset the pattern. After that, sustainable energy that actually lasts.",
    },
    {
      type: "quote",
      text: "Your exhaustion is not weakness. It's information. This book teaches you how to read it.",
    },
    {
      type: "p",
      text: "Read this in order. Part One will help you understand why your body does what it does, so the shame can finally stop. Part Two is your 7-day reset — the exact practices that rewire your nervous system back to alignment. You don't need to become someone new. You need to sync up with who you already are.",
    },
    { type: "divider" },
    {
      type: "p",
      text: "A gentle note: this system is educational, drawn from neuroscience and psychology. It is not medical advice. If you have diagnosed hormonal conditions or are under medical care, talk to your doctor. This complements medicine — it doesn't replace it.",
    },
  ],
  chapters: [
    // ---------- PART ONE: UNDERSTAND ----------
    {
      part: "Part One — Understand",
      number: "One",
      title: "Why You're Exhausted (And It's Not Laziness)",
      blocks: [
        {
          type: "p",
          text: "You've been taught to operate on a linear schedule. Monday through Friday at the same intensity. Same productivity. Same presence. Same you. But your body doesn't work that way. Your body operates in phases, and every week you're fighting against those phases instead of moving with them.",
        },
        {
          type: "p",
          text: "When you ignore your cycle, your nervous system goes into constant negotiation with your environment. It's like driving with the parking brake on — technically possible, but exhausting. That exhaustion isn't a personal failing. It's your body telling you the truth: you're out of sync.",
        },
        {
          type: "quote",
          text: "You weren't born tired. You were trained to ignore your own rhythm.",
        },
        {
          type: "p",
          text: "The good news? Exhaustion is reversible. When you align with your actual cycle instead of fighting it, everything changes — your energy, your mood, your relationships, your productivity. Not because you're trying harder. Because you're finally trying smarter.",
        },
        {
          type: "h2",
          text: "The four lies productivity culture told you",
        },
        {
          type: "list",
          items: [
            "\"If I had more discipline, I'd have more energy.\" — You have normal fluctuation that discipline can't override. Fighting it makes it worse.",
            "\"Everyone else sustains this pace.\" — They don't. They're also crashing. Most are just not talking about it.",
            "\"I'm not supposed to need rest mid-week.\" — Your body is supposed to rest mid-week. That's not failure. That's design.",
            "\"If I slow down, I'll fall behind.\" — If you keep burning out, you stay behind. Alignment is faster than friction.",
          ],
        },
        {
          type: "p",
          text: "Say this out loud, even if you don't believe it yet: 'My exhaustion is not my fault. It's information. And I'm going to learn what it's trying to tell me.'",
        },
      ],
    },
    {
      part: "Part One — Understand",
      number: "Two",
      title: "How Your Cycle Actually Works (No Textbook)",
      blocks: [
        {
          type: "p",
          text: "Your cycle isn't just about one week a month. It's about four weeks of different energy, different capacity, different needs. Most women are taught about this in health class and then told to ignore it. Keep going the same. Don't let it affect you. But that's like being given a car's owner's manual and then being told never to check the oil.",
        },
        {
          type: "p",
          text: "Here's what's actually happening: your hormones are shifting, which shifts your nervous system state, which shifts your energy availability. This is not a bug. It's a feature. And when you work WITH it instead of against it, you unlock way more capacity than if you tried to force yourself to be the same all month.",
        },
        {
          type: "quote",
          text: "Your cycle isn't a limitation. It's a superpower you've been taught to hide.",
        },
        {
          type: "h2",
          text: "The four phases (simplified)",
        },
        {
          type: "list",
          items: [
            "Menstrual (Days 1-5): Your nervous system is naturally inward-focused. Deep rest is optimal. Heavy projects feel hard. This is design, not weakness.",
            "Follicular (Days 6-14): Rising energy. Your creativity and focus are sharpest. Big projects, collaboration, visibility — this is your launch window.",
            "Ovulation (Days 15-17): Peak social and assertive energy. Your communication is clearest. This is when to lead, speak up, make asks.",
            "Luteal (Days 18-28): Your energy is real, but it's different. It's analytical, detail-oriented, relational. Switching to deep work here makes sense. Hard stops toward the end are necessary.",
          ],
        },
        {
          type: "p",
          text: "Notice what happens when you try to run your high-intensity projects during your luteal phase. Or when you push through menstruation like it's just any other week. You burn twice as hard to get half the result. That's not failure. That's misalignment.",
        },
      ],
    },
    {
      part: "Part One — Understand",
      number: "Three",
      title: "The Pattern That Created Your Exhaustion",
      blocks: [
        {
          type: "p",
          text: "Most of us grew up in systems that valued consistency over presence. Show up the same. Perform at the same level. Need the same amount. Any variation was seen as instability or unreliability. So you learned to override your body's signals. You pushed through. You powered on. You proved you could be 'stable.'",
        },
        {
          type: "p",
          text: "But pushing through your cycle every month isn't stability. It's friction. And friction compounds. By year five, by year ten, you're running on fumes and wondering why you can't keep up with the life you're supposed to be living.",
        },
        {
          type: "quote",
          text: "Ignoring your cycle isn't independence. It's self-abandonment with a to-do list.",
        },
        {
          type: "h2",
          text: "What this pattern cost you",
        },
        {
          type: "list",
          items: [
            "Chronic burnout disguised as 'just how things are'",
            "Loss of connection to your own signals (you don't even know what you need anymore)",
            "Relationships suffer because you're too tired to show up authentically",
            "Shame about being 'weak' on certain weeks (when you were just out of sync)",
            "Actual health impacts from sustained nervous-system dysregulation",
          ],
        },
        {
          type: "p",
          text: "The reset isn't about becoming someone new. It's about returning to someone you were before you learned to ignore yourself.",
        },
      ],
    },
    {
      part: "Part One — Understand",
      number: "Four",
      title: "Why the Reset Works in 7 Days",
      blocks: [
        {
          type: "p",
          text: "Seven days is enough time to break a pattern and establish a new one. Not because seven days is magic. Because seven days is enough for your nervous system to experience a different way of being and start to trust it.",
        },
        {
          type: "p",
          text: "When you practice alignment for seven days, your body learns something new: 'Oh. This is what it feels like to not be fighting myself.' Once your nervous system knows that feeling exists, it becomes possible. Not automatic, but possible. And from possible comes sustainable change.",
        },
        {
          type: "h2",
          text: "What will shift in those seven days",
        },
        {
          type: "list",
          items: [
            "Day 1-2: You'll feel the relief of giving yourself permission to slow down. Guilt might come. That's normal.",
            "Day 3-4: Your nervous system will start to settle. Small moments of calm you haven't felt in months.",
            "Day 5-6: Energy returns, but different. Grounded. Sustainable. You'll notice you're actually present for your life.",
            "Day 7: You'll feel the difference so clearly that going back feels impossible. Because your body has remembered what alignment feels like.",
          ],
        },
        {
          type: "p",
          text: "After day 7, the practice continues — but you're not resetting anymore. You're maintaining. And maintaining is infinitely easier than burning out.",
        },
      ],
    },
    // ---------- PART TWO: THE 7-DAY RESET ----------
    {
      part: "Part Two — The 7-Day Reset",
      number: "Five",
      title: "Day 1-2: Permission to Stop",
      blocks: [
        {
          type: "p",
          text: "The first two days of the reset are about giving yourself permission to pause. Not just mentally, but physically and emotionally. You're going to downshift your nervous system from 'high alert' to 'safe to rest.' This doesn't feel productive. That's the point.",
        },
        {
          type: "h2",
          text: "Day 1-2 Core Practices",
        },
        {
          type: "practice",
          name: "The 5-Minute Ground",
          description: "Each morning and before bed: feet on floor, hand on heart, five deep breaths. Feel the ground beneath you. Say: 'My body is safe right now.'",
          when: "Morning + evening",
        },
        {
          type: "practice",
          name: "The One Thing",
          description: "Choose one big work project and pause it. Just pause it. Not cancel — pause. One email thread you don't answer. One commitment you softly delay.",
          when: "By noon Day 1",
        },
        {
          type: "practice",
          name: "No Screens After 9 PM",
          description: "Your nervous system can't downshift if it's bathed in blue light. Hard stop at 9 PM. Read. Talk. Be bored. Your brain needs boredom to reset.",
          when: "Both nights",
        },
        {
          type: "p",
          text: "By end of Day 2, you'll feel guilty. That's your internalized 'productivity voice' freaking out. That voice is not your wisdom. That's your nervous system in old patterns. Thank it for trying to protect you, and keep going.",
        },
      ],
    },
    {
      part: "Part Two — The 7-Day Reset",
      number: "Six",
      title: "Day 3-4: Nervous System Recalibration",
      blocks: [
        {
          type: "p",
          text: "Now that you've given yourself permission to stop, your nervous system is starting to believe you. Days 3-4 are about actively recalibrating how your body responds to stress. You're teaching your system: 'Rest is safe. Calm is possible. You don't need to stay in high alert.'",
        },
        {
          type: "h2",
          text: "Day 3-4 Core Practices",
        },
        {
          type: "practice",
          name: "The 90-Second Reset",
          description: "When you feel anxiety spike: stop, take 90 seconds to breathe deeply, move your body (shake it out, stretch, walk). You're interrupting the alarm cycle.",
          when: "As needed, minimum 2x daily",
        },
        {
          type: "practice",
          name: "Eat Aligned",
          description: "Instead of coffee at 3 PM, eat protein + fat + complex carb. Real food that stabilizes blood sugar. Your nervous system is partially freaking out because you're on a sugar rollercoaster.",
          when: "Every meal/snack",
        },
        {
          type: "practice",
          name: "The Slow Walk",
          description: "20 minutes outside, no phone, no music, no goal. Just walking and noticing. This is how your vagus nerve downregulates.",
          when: "One time minimum",
        },
        {
          type: "p",
          text: "By the end of Day 4, you'll notice the difference. You're calmer. Your shoulders aren't at your ears. This is what it's supposed to feel like.",
        },
      ],
    },
    {
      part: "Part Two — The 7-Day Reset",
      number: "Seven",
      title: "Day 5-7: Integration and Return",
      blocks: [
        {
          type: "p",
          text: "The last three days, you're integrating the reset into your life. You're not staying in pause mode — you're learning to move from a grounded place. You're proving to your nervous system that you can engage with life AND stay calm.",
        },
        {
          type: "h2",
          text: "Day 5-7 Core Practices",
        },
        {
          type: "practice",
          name: "One Real Task",
          description: "Day 5-7, add back ONE meaningful project or commitment. Do it from a grounded place. Notice how different it feels when you're not frantic.",
          when: "Starting Day 5",
        },
        {
          type: "practice",
          name: "The Body Scan",
          description: "Before bed: lie down, notice where you hold tension. Breathe into it. This is how you stay connected to your nervous system signal.",
          when: "Every night",
        },
        {
          type: "practice",
          name: "Celebrate the Shift",
          description: "Day 7, notice what's different. Write it down. Energy? Sleep? Clarity? Patience? These are your reset wins. You just proved to yourself that alignment is possible.",
          when: "Day 7 reflection",
        },
        {
          type: "p",
          text: "By Day 7, you'll feel the stability from inside. This is your baseline. This is what's possible when you work WITH your body instead of against it. Now the work is maintaining it.",
        },
      ],
    },
    {
      part: "Part Two — The 7-Day Reset",
      number: "Eight",
      title: "Beyond Day 7: Life Aligned",
      blocks: [
        {
          type: "p",
          text: "The reset ends, but the alignment continues. You're not going back to the old pattern. You're building a new relationship with your own cycle. Some things to carry forward:",
        },
        {
          type: "h2",
          text: "Your Ongoing Practices",
        },
        {
          type: "list",
          items: [
            "Track your energy, not just your dates. Notice which weeks feel which way. You're building a personal map of your cycle.",
            "Protect your low-energy weeks. Schedule lighter work, fewer meetings, more space. This isn't weakness — this is strategy.",
            "Keep the nervous-system practices. The 90-second reset. The slow walks. These are your tools for life, not just the reset.",
            "Adjust your expectations to match your cycle, not your calendar. You'll do 3x more in your high weeks if you accept less in your low weeks.",
          ],
        },
        {
          type: "quote",
          text: "You can't out-will your way to energy. But you can sync up with yourself and never burn out again.",
        },
        {
          type: "p",
          text: "The Feminine Bloom Reset System isn't a phase. It's a return to who you actually are. Welcome home.",
        },
      ],
    },
  ],
}
