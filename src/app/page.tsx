import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import ProblemAgitation from '@/components/ProblemAgitation';
import SocialProof from '@/components/SocialProof';
import ProductBreakdown from '@/components/ProductBreakdown';
import CreatorBio from '@/components/CreatorBio';
import FinalCTA from '@/components/FinalCTA';
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
        {/* 1. Hook — pain-first direct attack */}
        <Hero />
        {/* 2. Mirror — "does this sound like you?" */}
        <FadeIn>
          <ProblemAgitation />
        </FadeIn>
        {/* 3. Social proof — testimonials + stats */}
        <FadeIn>
          <SocialProof />
        </FadeIn>
        {/* 4. Product — what's inside, exactly */}
        <FadeIn>
          <ProductBreakdown />
        </FadeIn>
        {/* 5. Who made this + why trust it */}
        <FadeIn>
          <CreatorBio />
        </FadeIn>
        {/* 6. Final buy CTA */}
        <FinalCTA />
        {/* 7. FAQ — kill the last objections */}
        <FadeIn>
          <FAQ />
        </FadeIn>
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
