import PDFDocument from 'pdfkit';
import { Readable } from 'stream';

const COLORS = {
  evergreen: '#2D5A4F',
  clay: '#A67F7F',
  oat: '#D4C5B9',
  warmWhite: '#F9F7F4',
  dark: '#1a1a1a'
};

const FONTS = {
  serif: 'Helvetica',
  sansSerif: 'Helvetica'
};

export async function generateFreePDF(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({
      size: 'letter',
      margin: 48,
      bufferPages: true
    });

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    // Title page
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(28).font(FONTS.serif, 'bold').text(
      'Why You Shrink Yourself',
      { align: 'center' }
    );
    doc.fontSize(16).text(
      '(And What Your Body Really Needs)',
      { align: 'center' }
    );
    
    doc.moveDown();
    doc.fillColor(COLORS.clay);
    doc.fontSize(14).text(
      'The 3-Day Reset for Anxious Attachment',
      { align: 'center' }
    );

    doc.moveDown(2);
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'A Free Guide by Fleurite',
      { align: 'center' }
    );

    // Content
    doc.addPage();
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(18).font(FONTS.serif, 'bold').text('PART 1: Understanding Why You Shrink');
    
    doc.moveDown(0.5);
    doc.fillColor(COLORS.dark);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('You weren\'t born doing this.');
    doc.fontSize(11).text(
      'There was a moment—maybe many moments—when you learned that your needs weren\'t safe.\n' +
      '\n' +
      'Maybe someone important got angry when you needed them. Maybe they disappeared when you reached out. Maybe they made you feel like a burden for simply existing with feelings.\n' +
      '\n' +
      'So you learned: If I\'m smaller, quieter, less needy—I\'ll be safer.\n' +
      '\n' +
      'But here\'s what\'s true: Your nervous system wasn\'t broken. It was injured.',
      { align: 'left', lineGap: 4 }
    );

    doc.moveDown();
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('What happens when you shrink yourself');
    
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'When you consistently suppress your needs, something shifts. Your nervous system stops believing you can keep yourself safe. It stays on high alert.\n' +
      '\n' +
      'That\'s why:\n' +
      '• Your anxiety spikes when he\'s distant\n' +
      '• You obsessively check your phone for his messages\n' +
      '• You panic when he doesn\'t respond\n' +
      '• You replay conversations looking for what you did wrong\n' +
      '• You feel guilty for even having needs\n' +
      '\n' +
      'This isn\'t weakness. This is your body trying to survive an unsafe dynamic.',
      { align: 'left', lineGap: 4 }
    );

    doc.moveDown();
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(18).font(FONTS.serif, 'bold').text('PART 2: What Your Body Actually Needs');
    
    doc.moveDown(0.5);
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'Your nervous system needs to relearn one thing: You\'re safe when you honor yourself.\n',
      { align: 'left', lineGap: 4 }
    );

    // The 3-day reset
    const days = [
      {
        title: 'Day 1: Notice Without Changing',
        content: 'For 24 hours, notice:\n• One moment where you wanted to say something but didn\'t\n• One time you agreed to something you didn\'t want\n• One instant where you shrunk to avoid conflict\n\nWrite them down. Just notice. Don\'t judge yourself.'
      },
      {
        title: 'Day 2: Small Expansion',
        content: 'Pick ONE small boundary to honor:\n• If he texts late: Don\'t respond immediately\n• If he asks for something: Say "I need to think about it"\n• If you\'re anxious: Name it to yourself\n\nOne small act of honoring yourself. That\'s it.'
      },
      {
        title: 'Day 3: The Integration',
        content: 'Talk to one trusted person about what you noticed. Say out loud:\n• "I realized I\'ve been shrinking myself"\n• "My nervous system has been in survival mode"\n• "I\'m learning to honor my own needs"\n\nSaying it out loud makes it real.'
      }
    ];

    days.forEach((day) => {
      doc.moveDown();
      doc.fillColor(COLORS.clay);
      doc.fontSize(12).font(FONTS.serif, 'bold').text(day.title);
      doc.fillColor(COLORS.dark);
      doc.fontSize(11).text(day.content, { align: 'left', lineGap: 3 });
    });

    doc.moveDown(1.5);
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(13).font(FONTS.serif, 'bold').text('The Truth They Never Told You');
    
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'It was never that you were too much.\n' +
      '\n' +
      'It was that safety was never truly available.\n' +
      '\n' +
      'You don\'t have to untangle this alone. But you do have to start believing: Your needs aren\'t the problem. The refusal to meet them is.',
      { align: 'center', lineGap: 4 }
    );

    doc.moveDown(1);
    doc.fontSize(10).text(
      'Get the full book: "Stop Shrinking Yourself: The Exact Words to Say + How to Know If He\'ll Actually Change"',
      { align: 'center' }
    );

    doc.end();
  });
}

export async function generatePaidPDF(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const doc = new PDFDocument({
      size: 'letter',
      margin: 48,
      bufferPages: true
    });

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    // Title page
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(32).font(FONTS.serif, 'bold').text(
      'Stop Shrinking Yourself',
      { align: 'center' }
    );
    doc.fontSize(14).text(
      'The Exact Words to Say + How to Know If He\'ll Actually Change',
      { align: 'center' }
    );

    doc.moveDown(2);
    doc.fontSize(12).text(
      'A Complete Guide to Anxious Attachment & Relationship Clarity',
      { align: 'center' }
    );

    doc.moveDown(2);
    doc.fontSize(10).text(
      '47 Scripts You Can Copy & Paste',
      { align: 'center' }
    );

    // Part 1 intro
    doc.addPage();
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(20).font(FONTS.serif, 'bold').text('PART 1: UNDERSTAND');
    
    doc.moveDown();
    doc.fontSize(14).font(FONTS.serif, 'bold').text('Why You Chase & He Pulls Away');

    doc.moveDown();
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'Great date. Deep conversation. Real connection.\n' +
      '\n' +
      'Then overnight: Replies slow down. He suddenly needs space. The warmth vanishes.\n' +
      '\n' +
      'It feels like rejection. It\'s not.\n' +
      '\n' +
      'For someone with avoidant attachment, intimacy triggers their nervous system like a threat. Not because of you. Because of how they learned safety as a child.',
      { align: 'left', lineGap: 4 }
    );

    // Key insights
    doc.moveDown();
    doc.fillColor(COLORS.clay);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('What\'s happening inside THEIR nervous system:');
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'Their rule: "I\'m only safe when I need no one."\n' +
      '\n' +
      'Every time you get close, every vulnerability, every ask—it activates ancient fear. Their body floods with cortisol. They experience closeness as suffocation.\n' +
      '\n' +
      'Their move? Withdraw. Create distance. Make you chase.',
      { align: 'left', lineGap: 3 }
    );

    doc.moveDown();
    doc.fillColor(COLORS.clay);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('What\'s happening inside YOUR nervous system:');
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'Your rule: "If I\'m small and perfect, I\'ll be safe."\n' +
      '\n' +
      'When he pulls away, you panic. Your system reads it as: I\'m not worthy. I need to fix this. I need to earn back his attention.\n' +
      '\n' +
      'You chase. You shrink. And he gets more comfortable.',
      { align: 'left', lineGap: 3 }
    );

    doc.moveDown();
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('The Cost of Shrinking:');
    doc.fillColor(COLORS.dark);
    doc.fontSize(10).text(
      'Chronic anxiety • Hypervigilance • Loss of self • Deep shame • Panic attacks • No real repair • Intimacy dies • Resentment builds • He gets everything, you get nothing',
      { align: 'left', lineGap: 2 }
    );

    // Binary truth
    doc.moveDown();
    doc.fillColor(COLORS.clay);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('The Binary Truth:');
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'There are only two outcomes:\n' +
      '\n' +
      '1. He wakes up. His nervous system gets safe. He does the work. Real intimacy becomes possible.\n' +
      '\n' +
      '2. He doesn\'t. He keeps doing what works. You keep shrinking. The relationship stays in pain or ends.\n' +
      '\n' +
      'There is no middle ground where you shrink and he becomes secure.\n' +
      '\n' +
      'So the real question isn\'t "How do I make him change?"\n' +
      '\n' +
      'The real question is: "How do I know which one is happening?"',
      { align: 'left', lineGap: 3 }
    );

    // Part 2 preview
    doc.addPage();
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(20).font(FONTS.serif, 'bold').text('PART 2: REWIRE');
    
    doc.moveDown();
    doc.fontSize(14).font(FONTS.serif, 'bold').text('47 Scripts + How to Know If He\'ll Change');

    doc.moveDown();
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      'Inside this section, you\'ll find 47 exact scripts organized by situation:\n' +
      '\n' +
      '• When He Pulls Away (Replies Slow, "Needs Space")\n' +
      '• When He Shuts Down Mid-Conversation\n' +
      '• When He Ghosts or Disappears\n' +
      '• When He Says You\'re "Too Much"\n' +
      '• Setting Your First Real Boundary\n' +
      '• The Clarity Conversation\n' +
      '• Leaving With Dignity (If That\'s What You Choose)\n' +
      '\n' +
      'Each script includes:\n' +
      '• What NOT to say (and why it backfires)\n' +
      '• What TO say (the exact words)\n' +
      '• Why it works (what it does to his nervous system)\n' +
      '• How to follow up (if he doesn\'t respond as expected)',
      { align: 'left', lineGap: 3 }
    );

    doc.moveDown();
    doc.fillColor(COLORS.clay);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('The Most Important Script:');
    doc.fillColor(COLORS.dark);
    doc.fontSize(11).text(
      '"I need to be really honest with you about something. I love you, but I\'m in pain. The pattern we\'re in—where I chase and you pull away—is hurting me. And I need to know: Are you actually willing to work on this? Not just say it, but actually do it? Because I can\'t keep living like this."\n' +
      '\n' +
      'Then pause. Let him answer.',
      { align: 'left', lineGap: 3 }
    );

    doc.moveDown();
    doc.fillColor(COLORS.evergreen);
    doc.fontSize(11).font(FONTS.serif, 'bold').text('His answer tells you everything.');

    doc.moveDown(1);
    doc.fontSize(10).text('—', { align: 'center' });

    doc.moveDown();
    doc.fillColor(COLORS.dark);
    doc.fontSize(12).font(FONTS.serif, 'bold').text('Your Last Script:');
    doc.fontSize(11).text(
      '"It was never that I was too much. It was that safety was never truly available. And my nervous system deserved better than that. So I\'m going to start believing: I\'m exactly the right amount. My needs matter. And I deserve someone who agrees."\n' +
      '\n' +
      'Say it until you believe it.\n' +
      '\n' +
      'Because it\'s true.',
      { align: 'left', lineGap: 3 }
    );

    doc.end();
  });
}
