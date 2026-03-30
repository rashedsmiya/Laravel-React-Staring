import type { ReactNode } from 'react';

import { AdminSidebar } from '@/layouts/partials/admin/sidebar';

interface AdminLayoutProps {
    children: ReactNode;
    activeSlug?: string | null;
    /** When false, main content is full width (e.g. admin dashboard home). */
    showSidebar?: boolean;
}

export default function AdminLayout({
    children,
    activeSlug = null,
    showSidebar = true,
}: AdminLayoutProps) {
    return (
        <div className="flex min-h-screen w-full">
            {showSidebar && <AdminSidebar isCollapsed={false} activeSlug={activeSlug} />}
            <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-auto">{children}</main>
        </div>
    );
}
