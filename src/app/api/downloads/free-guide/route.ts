import { generateFreePDF } from '@/lib/pdf-generator';

export async function GET() {
  try {
    const pdf = await generateFreePDF();
    
    return new Response(pdf, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="why-you-shrink-yourself.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return new Response('Error generating PDF', { status: 500 });
  }
}
