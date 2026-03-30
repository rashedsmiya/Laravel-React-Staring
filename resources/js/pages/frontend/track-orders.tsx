import { Head } from '@inertiajs/react';

import { TrackOrdersSection } from '@/components/frontend/track-orders/index';
import FrontendLayout from '@/layouts/frontend-layout';

export default function TrackOrders() {
    return (
        <FrontendLayout>
            <Head title="Track Orders" />
            <TrackOrdersSection />
        </FrontendLayout>
    );
}
