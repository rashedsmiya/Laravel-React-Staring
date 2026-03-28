import { Head } from '@inertiajs/react';
import FrontendLayout from '@/layouts/frontend-layout';
import { HeroSection } from '@/components/frontend/how-it-works/hero-section';
import { HowItWorksList } from '@/components/frontend/how-it-works/how-it-works-list';
import { WhatIsProbateSection } from '@/components/frontend/how-it-works/what-is-probate-section';
import { StayInformedSection } from '@/components/frontend/how-it-works/stay-informed-section';
import { PreferToTalkSection } from '@/components/frontend/how-it-works/prefer-to-talk-section';

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
