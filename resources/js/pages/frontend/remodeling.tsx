import { Head } from '@inertiajs/react';
import FrontendLayout from '@/layouts/frontend-layout';
import { HeroSection } from '@/components/frontend/remodeling/hero-section';
import { JobSection } from '@/components/frontend/remodeling/job-section';
import { MissionSection } from '@/components/frontend/remodeling/mission-section';
import { TeamSection } from '@/components/frontend/remodeling/team-section';

export default function Remodeling() {
    return (
        <FrontendLayout>
            <Head title="Remodeling" />
            <HeroSection />
            <JobSection />
            <MissionSection />
            <TeamSection />
        </FrontendLayout>
    );
}
