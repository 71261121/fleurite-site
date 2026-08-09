/**
 * "The 3am Text Rescue" — Fleurite free lead magnet.
 * A short, high-value guide delivered by email in exchange for a signup.
 * Purpose: give a real quick win (stop the panic-text spiral tonight) and
 * nurture the reader toward the paid book "The Avoidant's Unwritten Rules".
 */

import type { Book } from "./book"

export const FREE_GUIDE: Book = {
  slug: "the-3am-text-rescue",
  title: "The 3am Text Rescue",
  subtitle: "5 things to do the moment you want to text him — so you never send the message you'll regret",
  author: "Fleurite",
  brand: "Fleurite",
  year: 2025,
  frontMatter: [
    { type: "h1", text: "Read this the next time your hand reaches for your phone." },
    {
      type: "p",
      text: "It's late. He hasn't replied. Your chest is tight and your thumb is already hovering over his name. Before you send anything — read this. It's short on purpose. You can get through it in the ninety seconds it takes for the worst of the wave to pass.",
    },
    {
      type: "quote",
      text: "The urge to text isn't weakness. It's your nervous system trying to end the pain of not knowing. You can end it a kinder way.",
    },
  ],
  chapters: [
    {
      title: "First, the truth that loosens the grip",
      blocks: [
        {
          type: "p",
          text: "What you're feeling right now has a name: protest behavior. When a bond feels threatened, your body escalates its bids for connection — texting, checking, re-reading — the way a child cries louder when a parent walks away. It is not crazy. It is not needy. It is a nervous system doing exactly what it was built to do. And that means it can be soothed, gently, without sending a single text.",
        },
      ],
    },
    {
      title: "The 5-step rescue",
      blocks: [
        {
          type: "list",
          items: [
            "1. Name it. Say silently: 'My attachment alarm is firing. This is protest, not truth.' Naming the state instantly softens it.",
            "2. Breathe long and low. Inhale for four, exhale for eight — six times. A long exhale tells your body it is safe faster than any thought can.",
            "3. Feel your feet on the floor and name five things you can see. This pulls you out of the imagined future and back into the present, where you are actually okay.",
            "4. Ask: 'If I felt completely secure right now, what would I do?' It's almost never 'send the text.' Usually it's sleep, water, or calling a friend.",
            "5. Delay, don't suppress. Tell yourself you can reply in the morning. You're not forbidding it — you're giving your calm self the final vote.",
          ],
        },
      ],
    },
    {
      title: "If you only remember one line",
      blocks: [
        {
          type: "quote",
          text: "I am not going to leave me to keep him.",
        },
        {
          type: "p",
          text: "Say it out loud. Put the phone face-down. You just interrupted the loop — and every time you do, you make the next night a little easier. That is what healing actually looks like: not perfect, just one pause at a time.",
        },
      ],
    },
    {
      title: "When you're ready for the rest",
      blocks: [
        {
          type: "p",
          text: "This rescue calms the moment. But the pattern underneath — the chasing, the shrinking, the belief that you're 'too much' — has roots, and it can be healed for good. That's what our book, The Avoidant's Unwritten Rules, is for: the full nervous-system science of why you chase, the exact scripts to stay whole, the boundaries that reveal the truth, and a 7-day return to yourself.",
        },
        {
          type: "quote",
          text: "It was never that you were too much. Safety was never available. Let us show you how to build it — in yourself, first.",
        },
        {
          type: "p",
          text: "Whenever you're ready, it's waiting for you at fleurite.me. For now, be gentle with yourself tonight. You did the brave thing: you paused. — The Fleurite team",
        },
      ],
    },
  ],
}
