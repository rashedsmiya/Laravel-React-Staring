import { Head } from '@inertiajs/react';

import { HeroSection } from '@/components/frontend/how-it-works/hero-section';
import { HowItWorksList } from '@/components/frontend/how-it-works/how-it-works-list';
import { PreferToTalkSection } from '@/components/frontend/how-it-works/prefer-to-talk-section';
import { StayInformedSection } from '@/components/frontend/how-it-works/stay-informed-section';
import { WhatIsProbateSection } from '@/components/frontend/how-it-works/what-is-probate-section';
import FrontendLayout from '@/layouts/frontend-layout';

export default function HowItWorks() {
    return (
        <FrontendLayout>
            <Head title="How It Works" />
            <HeroSection />
            <HowItWorksList />
            <WhatIsProbateSection />
            <StayInformedSection />
            <PreferToTalkSection />
        </FrontendLayout>
    );
}
