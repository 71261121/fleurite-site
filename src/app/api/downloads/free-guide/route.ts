import { generateBookPdf } from '@/lib/pdf';
import { FREE_GUIDE } from '@/content/free-guide';

export async function GET() {
  try {
    const pdf = await generateBookPdf(FREE_GUIDE);

    return new Response(pdf as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="the-3am-text-rescue.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new Response('Error generating PDF', { status: 500 });
  }
}
