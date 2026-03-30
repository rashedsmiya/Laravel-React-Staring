import { Head } from '@inertiajs/react';

import { Banner } from '@/components/frontend/home/banner';
import { EstateApproachSection } from '@/components/frontend/home/EstateApproachSection';
import { FindingSupportSection } from '@/components/frontend/home/FindingSupportSection';
import { HowItWorksSection } from '@/components/frontend/home/HowItWorksSection';
import { WhyCreateWillCardsGrid } from '@/components/frontend/home/WhyCreateWillCardsGrid';
import { WhyCreateWillSection } from '@/components/frontend/home/WhyCreateWillSection';
import FrontendLayout from '@/layouts/frontend-layout';

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
