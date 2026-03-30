import { Head } from '@inertiajs/react';

import { ServiceAreaSection } from '@/components/frontend/about/service-area-section';
import { HeroSection } from '@/components/frontend/remodeling/hero-section';
import { JobSection } from '@/components/frontend/remodeling/job-section';
import { MissionSection } from '@/components/frontend/remodeling/mission-section';
import { TeamSection } from '@/components/frontend/remodeling/team-section';
import FrontendLayout from '@/layouts/frontend-layout';

export default function Remodeling() {
    return (
        <FrontendLayout>
            <Head title="Remodeling" />
            <HeroSection />
            <JobSection />
            <MissionSection />
            <TeamSection />
            <ServiceAreaSection />
        </FrontendLayout>
    );
}
