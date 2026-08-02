import Header from '@/components/Header';
import AnnouncementBar from '@/components/AnnouncementBar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import ProblemAgitation from '@/components/ProblemAgitation';
import TrustCredibility from '@/components/TrustCredibility';
import AttachmentStyleQuiz from '@/components/AttachmentStyleQuiz';
import ScienceSection from '@/components/ScienceSection';
import SocialProof from '@/components/SocialProof';
import ProductBreakdown from '@/components/ProductBreakdown';
import ProductComparison from '@/components/ProductComparison';
import Differentiation from '@/components/Differentiation';
import TransformationMatrix from '@/components/TransformationMatrix';
import FinalCTA from '@/components/FinalCTA';
import CreatorBio from '@/components/CreatorBio';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import StickyBar from '@/components/StickyBar';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import FadeIn from '@/components/FadeIn';
import PaymentTrust from '@/components/PaymentTrust';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ProductBreakdown />
        <TrustBadges />
        <PaymentTrust />
        <FadeIn>
          <ProblemAgitation />
        </FadeIn>
        <TrustCredibility />
        <AttachmentStyleQuiz />
        <FadeIn>
          <ScienceSection />
        </FadeIn>
        <FadeIn>
          <Differentiation />
        </FadeIn>
        <FadeIn>
          <TransformationMatrix />
        </FadeIn>
        <ProductComparison />
        <SocialProof />
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
      <ExitIntentPopup />
    </div>
  );
}
