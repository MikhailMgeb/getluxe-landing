import DownloadSection from '@/components/DownloadSection/DownloadSection'
import FeaturesBlock from '@/components/FeaturesBlock/FeaturesBlock'
import HeroSection from '@/components/HeroSection/HeroSection'

export default function Home() {
  return (
    <div>
      <FeaturesBlock />
      <HeroSection/>
      <DownloadSection />
    </div>
  );
}
