import { Head } from '@inertiajs/react';

import { AboutHeroSection } from '@/components/frontend/about/about-hero-section';
import { AboutInformation } from '@/components/frontend/about/about-information';
import { LicenseSection } from '@/components/frontend/about/license-section';
import { LPAFeaturedLogosSection } from '@/components/frontend/about/lpa-featured-logos-section';
import { LPASupportSection } from '@/components/frontend/about/lpa-support-section';
import { ServiceAreaSection } from '@/components/frontend/about/service-area-section';
import { WhyChooseSection } from '@/components/frontend/about/why-choose-section';
import FrontendLayout from '@/layouts/frontend-layout';

export default function About() {
    return (
        <FrontendLayout>
            <Head title="About Us" />
            <AboutHeroSection />
            <AboutInformation />
            <LPAFeaturedLogosSection />
            <WhyChooseSection />
            <LicenseSection />
            <ServiceAreaSection />
            <LPASupportSection />
        </FrontendLayout>
    );
}
