import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import ProblemAgitation from '@/components/ProblemAgitation';
import AttachmentStyleQuiz from '@/components/AttachmentStyleQuiz';
import ScienceSection from '@/components/ScienceSection';
import TwoAMTest from '@/components/TwoAMTest';
import SocialProof from '@/components/SocialProof';
import ProductBreakdown from '@/components/ProductBreakdown';
import Differentiation from '@/components/Differentiation';
import TransformationMatrix from '@/components/TransformationMatrix';
import ValueSummary from '@/components/ValueSummary';
import FinalCTA from '@/components/FinalCTA';
import CreatorBio from '@/components/CreatorBio';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import FadeIn from '@/components/FadeIn';
import StoryComparison from '@/components/StoryComparison';
import PaymentTrust from '@/components/PaymentTrust';
import ClosingPitch from '@/components/ClosingPitch';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <PaymentTrust />
        <FadeIn>
          <ProblemAgitation />
        </FadeIn>
        <AttachmentStyleQuiz />
        <FadeIn>
          <ScienceSection />
        </FadeIn>
        <FadeIn>
          <TwoAMTest />
        </FadeIn>
        <SocialProof />
        <FadeIn>
          <ProductBreakdown />
        </FadeIn>
        <FadeIn>
          <Differentiation />
        </FadeIn>
        <StoryComparison />
        <FadeIn>
          <TransformationMatrix />
        </FadeIn>
        <FadeIn>
          <ValueSummary />
        </FadeIn>
        <ClosingPitch />
        <FadeIn>
          <FinalCTA />
        </FadeIn>
        <FadeIn>
          <CreatorBio />
        </FadeIn>
        <FadeIn>
          <FAQ />
        </FadeIn>
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
