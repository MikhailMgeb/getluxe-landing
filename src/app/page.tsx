import { Suspense } from 'react';
import DownloadSection from '@/components/DownloadSection/DownloadSection'
import FeaturesBlock from '@/components/FeaturesBlock/FeaturesBlock'
import HeroSection from '@/components/HeroSection/HeroSection'
import InviteProcess from '@/components/InviteProcess/InviteProcess'

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <InviteProcess />
      </Suspense>
      <FeaturesBlock />
      <HeroSection/>
      <DownloadSection />
    </div>
  );
}
