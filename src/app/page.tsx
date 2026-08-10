import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import ProblemAgitation from '@/components/ProblemAgitation';
import SocialProof from '@/components/SocialProof';
import ProductBreakdown from '@/components/ProductBreakdown';
import CreatorBio from '@/components/CreatorBio';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        {/* ACT 1: HOOK — Resentment validation, avoidant hook format */}
        <Hero />
        {/* ACT 2: MIRROR — 8 pain points, resentment-first */}
        <FadeIn>
          <ProblemAgitation />
        </FadeIn>
        {/* ACT 3: PROOF — 5 testimonials, 3 different outcome types */}
        <FadeIn>
          <SocialProof />
        </FadeIn>
        {/* ACT 4: SOLUTION — 4 pillars + named techniques + Zara/Aisha story */}
        <FadeIn>
          <ProductBreakdown />
        </FadeIn>
        {/* ACT 5: TRUST — Lena identity + 6-year story */}
        <FadeIn>
          <CreatorBio />
        </FadeIn>
        {/* ACT 6: OBJECTION KILL — 8 questions including "what are the unwritten rules?" */}
        <FadeIn>
          <FAQ />
        </FadeIn>
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
