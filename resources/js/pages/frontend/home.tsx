import { Head } from '@inertiajs/react';
import FrontendLayout from '@/layouts/frontend-layout';
import { Banner } from '@/components/frontend/home/banner';
import { WhyCreateWillSection } from '@/components/frontend/home/WhyCreateWillSection';
import { WhyCreateWillCardsGrid } from '@/components/frontend/home/WhyCreateWillCardsGrid';
import { HowItWorksSection } from '@/components/frontend/home/HowItWorksSection';
import { EstateApproachSection } from '@/components/frontend/home/EstateApproachSection';
import { FindingSupportSection } from '@/components/frontend/home/FindingSupportSection';

export default function Home() {
    return (
        <FrontendLayout>
            <Head title="Home Page" />
            <Banner />
            <WhyCreateWillSection />
            <WhyCreateWillCardsGrid />
            <HowItWorksSection />
            <EstateApproachSection />
            <FindingSupportSection />
        </FrontendLayout>
    );
}
