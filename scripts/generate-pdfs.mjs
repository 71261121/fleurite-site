import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Color scheme matching the site
const colors = {
  primary: '#2D5016', // evergreen
  secondary: '#B89968', // clay
  accent: '#D4C9B8', // oat
  text: '#1a1a1a',
  lightText: '#666666',
  background: '#F5F1E8'
};

function createFreeGuidePDF() {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 50,
    bufferPages: true
  });

  const filename = path.join(__dirname, '../public/pdfs/free-guide-level-100.pdf');
  
  // Create directory if it doesn't exist
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  
  const stream = fs.createWriteStream(filename);
  doc.pipe(stream);

  // Title Page
  doc.fillColor(colors.primary);
  doc.fontSize(48).font('Helvetica-Bold').text('WHY YOU SHRINK YOURSELF', { align: 'center' });
  
  doc.moveDown(0.5);
  doc.fillColor(colors.secondary);
  doc.fontSize(28).font('Helvetica').text('And How to Stop in 3 Days', { align: 'center' });

  doc.moveDown(2);
  doc.fillColor(colors.lightText);
  doc.fontSize(14).font('Helvetica').text('The Nervous System Reset That Actually Works', { align: 'center' });

  doc.moveDown(3);
  doc.fillColor(colors.text);
  doc.fontSize(12).font('Helvetica').text('Level 100 Edition: Micro-Optimized Content Based on Audience Psychology', { align: 'center' });

  doc.moveDown(1);
  doc.fontSize(11).font('Helvetica').text('From Fleurite: Relationship Psychology for Women Who Deserve Better', { align: 'center' });

  // Add page break
  doc.addPage();

  // Content sections
  const sections = [
    {
      title: 'PART 1: THE TRUTH ABOUT SHRINKING',
      content: `You Weren't Born This Way
      
There was a moment—maybe many moments—when you learned that your needs weren't safe.

Your nervous system is in chronic survival mode. It's flooding your system with cortisol every time he withdraws.

The exhausting part? This never actually keeps you safe. It just trains him to take everything while giving nothing back.

Your Nervous System Is Trying to Survive
When you suppress a need, your nervous system registers it as a threat. This is why you experience:

Physical: Heart racing, insomnia, chest tightness, nausea, exhaustion
Emotional: Hypervigilance, shame, rage, numbness, desperation  
Behavioral: Phone obsession, over-functioning, people-pleasing, constant reassurance-seeking

This isn't weakness. This is your body in survival mode.`
    },
    {
      title: 'PART 2: THE 3-DAY NERVOUS SYSTEM RESET',
      content: `How This Works
Your nervous system learned: "I'm only safe when I'm invisible."
This reset teaches: "I'm safe when I listen to myself and act on what I know."

When you honor your own needs, your vagus nerve shifts from threat/survival to rest/safety.

DAY 1: THE MIRROR (Notice Without Shame)
Write down one moment where you wanted to speak but didn't. One time you said yes when you meant no. One feeling you suppressed.

Your nervous system needs to know: You're paying attention.

DAY 2: THE BOUNDARY (One Small Act)
Pick ONE:
- Wait 1 hour before responding to his texts
- Ask for something you normally wouldn't say
- Say "no" or "let me think about that"
- Give yourself reassurance instead of seeking his

Your nervous system learns: I get to decide what happens to my time/energy.

DAY 3: THE INTEGRATION (Making It Real)
Tell one trusted person what you've learned. Say it out loud.

When you speak truth to another person, your nervous system registers it as TRUE.`
    },
    {
      title: 'WHAT CHANGES AFTER 3 DAYS',
      content: `Your Nervous System Has New Data
It learned:
- You can survive with your own needs
- Honoring yourself doesn't lead to abandonment
- You're stronger than you thought
- You can self-soothe
- Speaking truth makes you stronger

What You'll Notice
Physical: Easier breathing, better sleep, more energy, clearer thinking
Emotional: Less shame, more clarity, lighter feeling, strength
Relational: Either he respects the change (and rises) or you see he won't

This is the beginning, not the end. But it's where freedom starts.`
    }
  ];

  sections.forEach((section, index) => {
    if (index > 0) doc.addPage();
    
    doc.fillColor(colors.primary);
    doc.fontSize(24).font('Helvetica-Bold').text(section.title);
    doc.moveDown(0.5);
    
    doc.fillColor(colors.lightText);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
    
    doc.moveDown(1);
    doc.fillColor(colors.text);
    doc.fontSize(11).font('Helvetica').text(section.content, { align: 'left', lineGap: 4 });
  });

  // Final page with call to action
  doc.addPage();
  doc.fillColor(colors.primary);
  doc.fontSize(32).font('Helvetica-Bold').text('READY FOR THE DEEP WORK?', { align: 'center' });
  
  doc.moveDown(1);
  doc.fillColor(colors.lightText);
  doc.fontSize(12).font('Helvetica').text('Get the Complete System', { align: 'center' });
  
  doc.moveDown(2);
  doc.fillColor(colors.text);
  const paidBookText = 'The paid book includes:\n• 47 specific scripts for every scenario\n• The Binary Question (know if he\'ll change)\n• Decision-making framework (stay with boundaries or leave with dignity)\n• Advanced nervous system work\n• Real clarity for real situations';
  doc.fontSize(11).font('Helvetica').text(paidBookText, { align: 'center', lineGap: 6 });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

function createPaidBookPDF() {
  const doc = new PDFDocument({
    size: 'A4',
    margin: 50,
    bufferPages: true
  });

  const filename = path.join(__dirname, '../public/pdfs/paid-book-level-100.pdf');
  
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  
  const stream = fs.createWriteStream(filename);
  doc.pipe(stream);

  // Title Page
  doc.fillColor(colors.primary);
  doc.fontSize(44).font('Helvetica-Bold').text('STOP SHRINKING YOURSELF', { align: 'center' });
  
  doc.moveDown(0.5);
  doc.fillColor(colors.secondary);
  doc.fontSize(24).font('Helvetica').text('The Complete Scripts, Decision Framework & Clarity System', { align: 'center' });

  doc.moveDown(1);
  doc.fillColor(colors.lightText);
  doc.fontSize(13).font('Helvetica').text('How to Know If He\'ll Change, Stay With Boundaries, or Leave With Dignity', { align: 'center' });

  doc.moveDown(3);
  doc.fillColor(colors.text);
  doc.fontSize(12).font('Helvetica').text('47 Scripts + The Binary Question + Complete Nervous System Rewiring Framework', { align: 'center' });

  doc.moveDown(2);
  doc.fontSize(11).font('Helvetica').text('Level 100 Edition: Micro-Optimized Based on 943 Shares & 45K+ Women\'s Data', { align: 'center' });

  // Content pages
  doc.addPage();

  const paidSections = [
    {
      title: 'THE FOUNDATION: Understanding the Cycle',
      content: `Avoidant Attachment: His Side

Avoidant attachment forms when emotional needs go unmet in childhood. His nervous system learned: "Needing anyone = danger."

His survival rule: "I'm only safe when I'm completely independent."

When intimacy increases, his nervous system sounds the alarm: THREAT. His body floods with adrenaline. He withdraws to feel safe.

Anxious Attachment: Your Side

You learned: "I'm only safe when I'm needed. When I'm small and accommodating."

When he pulls away, your nervous system reads it as abandonment. You panic. You chase. You shrink more.

The Dance

He withdraws to feel safe. You chase to feel safe. You're both making it worse.

The Cost

To your body: Sleep disruption, digestive issues, chronic pain, accelerated aging, weakened immunity
To your mind: Loss of identity, depression, anxiety disorder, shame, rage
To the relationship: No real intimacy, eroded trust, resentment, deeper cycle`
    },
    {
      title: 'THE BINARY TRUTH',
      content: `There are only two outcomes in this dynamic:

OUTCOME 1: HE WAKES UP
His nervous system gets safe. He does the work. He becomes available. Real intimacy becomes possible.

For this: He must admit the problem, want to change, get help, follow through.

OUTCOME 2: HE DOESN'T
He keeps doing what works. You stay in pain or you leave.

There is no middle ground where you shrink and he suddenly becomes secure.

THE QUESTION THAT CHANGES EVERYTHING:

"Is he showing any signs of being willing to change?"

This question determines everything.`
    },
    {
      title: 'THE 47 SCRIPTS: Overview',
      content: `Script Set 1: When He Pulls Away (Slow replies, sudden distance)
Script Set 2: When He Shuts Down Mid-Conversation
Script Set 3: When He Ghosts or Disappears
Script Set 4: When He Says You're "Too Much"
Script Set 5: Setting Your First Real Boundary
Script Set 6: The Clarity Conversation (Most important)
Script Set 7: Leaving With Dignity
Script Set 8-10: Advanced Scenarios

HOW THE SCRIPTS WORK

They do three things:
1. Name reality without theory or blame
2. State your boundary without apology
3. Give him information so he can choose

When you speak your truth:
- Your nervous system shifts from fight/flight to rest/digest
- Your rational brain comes back online
- You stop operating from desperation
- You show: "I can handle this. I don't need to collapse."

The psychology is neuroscience-based. The power is in the honesty.`
    },
    {
      title: 'THE BINARY QUESTION: Can He Actually Change?',
      content: `Three Questions That Answer Everything:

Question 1: Is he willing to admit there's a problem?
YES = He acknowledges the pattern is hurting you both
NO = He blames you, denies it, or says "this is just who I am"

Question 2: Is he taking action to address it?
YES = Therapy, reading, inner work, consistency
NO = He says he'll work on it but does nothing

Question 3: Is he showing up differently?
YES = Concrete behavior changes (responds faster, engages, shows interest)
NO = Everything's the same, just promised words

WHAT THE ANSWERS MEAN:

All three YES = He can change. This is worth staying for.
Two YES, one NO = He's trying but something's missing. Give 8 weeks. If stalled, he's not willing.
One YES, two NO = He's not actually willing. Leave.
All three NO = He's clearly not interested. Leave immediately.`
    },
    {
      title: 'STAY WITH BOUNDARIES OR LEAVE: The Decision',
      content: `IF HE'S WILLING: Rebuilding With Boundaries

Slow: Nervous systems take 6-18 months to rewire
Not linear: He'll have setbacks and regressions
Requires both: You can't do his work for him

Your job:
- Stop shrinking (model health)
- Keep boundaries (don't go backward)
- Hold him accountable (gently name regressions)
- Get support (therapy, friends, community)
- Believe change is possible but not guaranteed

Reality check at 8 weeks: Is he in therapy? Behavior changed? Acknowledging patterns? Willing to be uncomfortable? Am I safer or just hiding better?

IF HE'S NOT WILLING: Leave With Dignity

Leaving is not dramatic. It's quiet and powerful.

Step 1: Make the decision (after the Clarity Conversation)
Step 2: Get support (tell one trusted person)
Step 3: Make a practical plan (where, when, how)
Step 4: Send the script (or have the conversation)
Step 5: Don't explain or justify
Step 6: Follow through (actually leave)

The script:
"I've made a decision. I'm leaving. This isn't negotiable. I'm telling you out of respect. I'm taking [timeframe] to get my things. After that, I'm gone."

That's it. You owe him nothing more.`
    }
  ];

  paidSections.forEach((section, index) => {
    if (index > 0) doc.addPage();
    
    doc.fillColor(colors.primary);
    doc.fontSize(22).font('Helvetica-Bold').text(section.title);
    doc.moveDown(0.5);
    
    doc.fillColor(colors.lightText);
    doc.moveTo(50, doc.y).lineTo(545, doc.y).stroke();
    
    doc.moveDown(1);
    doc.fillColor(colors.text);
    doc.fontSize(10).font('Helvetica').text(section.content, { align: 'left', lineGap: 3 });
  });

  // Final page: The Last Truth
  doc.addPage();
  doc.fillColor(colors.primary);
  doc.fontSize(28).font('Helvetica-Bold').text('THE LAST TRUTH', { align: 'center' });
  
  doc.moveDown(1.5);
  doc.fillColor(colors.text);
  const finalTruth = 'It was never that you were too much.\n\nIt was that safety was never truly available.\n\nYour needs aren\'t the problem. The refusal to meet them is.\n\nYour voice isn\'t too loud. It\'s been silenced for so long.\n\nYour body isn\'t too much to love. It\'s asking for someone who actually loves it.\n\nYou are exactly right.\n\nFor someone willing to show up.\n\nThe question isn\'t how to make yourself smaller.\n\nThe question is:\n\nAre YOU worth honoring?\n\nBecause the answer is always yes.';
  doc.fontSize(11).font('Helvetica').text(finalTruth, { align: 'center', lineGap: 8 });

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

async function generatePDFs() {
  try {
    console.log('Generating Free Guide PDF...');
    await createFreeGuidePDF();
    console.log('✓ Free Guide PDF created successfully');

    console.log('Generating Paid Book PDF...');
    await createPaidBookPDF();
    console.log('✓ Paid Book PDF created successfully');

    console.log('\nBoth PDFs generated and saved to public/pdfs/');
  } catch (error) {
    console.error('Error generating PDFs:', error);
    process.exit(1);
  }
}

generatePDFs();
