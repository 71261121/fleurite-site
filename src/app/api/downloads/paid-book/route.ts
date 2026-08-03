import { generateBookPdf } from '@/lib/pdf';
import { BOOK } from '@/content/book';

export async function GET() {
  try {
    // Single source of truth: the full, typeset book from src/content/book.ts
    const pdf = await generateBookPdf(BOOK);

    return new Response(pdf as unknown as BodyInit, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${BOOK.slug}.pdf"`,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new Response('Error generating PDF', { status: 500 });
  }
}
