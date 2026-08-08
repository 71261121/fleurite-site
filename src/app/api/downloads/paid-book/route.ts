import { generateBookPdf } from '@/lib/pdf';
import { BOOK } from '@/content/book';

export async function GET(_request: Request) {
  try {
    const pdf = await generateBookPdf(BOOK);

    return new Response(pdf as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="the-avoidants-unwritten-rules.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new Response('Error generating PDF', { status: 500 });
  }
}
