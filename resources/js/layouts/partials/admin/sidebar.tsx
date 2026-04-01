import { Link, usePage } from '@inertiajs/react';
import {
    ChevronDown,
    FileText,
    LayoutGrid,
    Mail,
    Settings,
    Wrench,
} from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { dashboard } from '@/routes/admin';

export interface AdminSidebarProps {
    isCollapsed?: boolean;
    activeSlug?: string | null;
}

interface SubItem {
    label: string;
    href: string;
    slug?: string;
}

interface NavGroup {
    label: string;
    icon: React.ReactNode;
    slug?: string;
    href?: string;
    children?: {
        label: string;
        slug?: string;
        href?: string;
        children?: SubItem[];
    }[];
}

const navGroups: NavGroup[] = [
    {
        label: 'Page Management',
        icon: <LayoutGrid className="h-5 w-5" />,
        children: [
            {
                label: 'Home Page',
                children: [
                    {
                        label: 'Hero Section',
                        href: '#',
                        slug: 'hero-section',
                    },
                    {
                        label: 'Services Section',
                        href: '#',
                        slug: 'service-section',
                    },
                    {
                        label: 'About Section',
                        href: '#',
                        slug: 'about-section',
                    },
                    {
                        label: 'Contact Section',
                        href: '#',
                        slug: 'contact-section',
                    },
                ],
            },
        ],
    },
    {
        label: 'Services',
        icon: <Wrench className="h-5 w-5" />,
        children: [
            { label: 'Service Types', href: '#', slug: 'service-types' },
            { label: 'Options', href: '#', slug: 'service-options' },
            { label: 'Current Setup', href: '#', slug: 'service-setup' },
        ],
    },
];

export function AdminSidebar({
    isCollapsed = false,
    activeSlug = null,
}: AdminSidebarProps) {
    const { url } = usePage();
    const dashboardPath = dashboard.url();
    const dashboardActive =
        activeSlug === 'dashboard' ||
        url === dashboardPath ||
        url.startsWith(`${dashboardPath}/`);

    const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
    const [openPages, setOpenPages] = useState<Record<string, boolean>>({});

    const toggleGroup = (label: string) =>
        setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));

    const togglePage = (label: string) =>
        setOpenPages((prev) => ({ ...prev, [label]: !prev[label] }));

    return (
        <aside
            className={cn(
                'relative hidden h-screen shrink-0 flex-col border-r bg-background p-2 transition-all duration-300 ease-in-out md:flex',
                isCollapsed ? 'w-16' : 'w-64',
            )}
        >
            <h2 className="p-2 text-lg font-bold text-blue-600">
                BathPro Remodeling
            </h2>
            <nav className="space-y-1 overflow-y-auto">
                {/* Dashboard */}
                <Link
                    href={dashboardPath}
                    className={cn(
                        'group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
                        dashboardActive
                            ? 'bg-primary/10 text-primary hover:bg-primary/15'
                            : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                    )}
                >
                    <LayoutGrid className="h-5 w-5" />
                    {!isCollapsed && (
                        <span className="flex-1 truncate">Dashboard</span>
                    )}
                    {dashboardActive && (
                        <div className="relative h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary">
                            <div className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-primary" />
                        </div>
                    )}
                </Link>

                {/* Dynamic nav groups */}
                {navGroups.map((group) => (
                    <div key={group.label}>
                        <button
                            type="button"
                            onClick={() => toggleGroup(group.label)}
                            className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                        >
                            {group.icon}
                            {!isCollapsed && (
                                <>
                                    <span className="flex-1 truncate">
                                        {group.label}
                                    </span>
                                    <ChevronDown
                                        className={cn(
                                            'h-4 w-4 flex-shrink-0 transition-transform duration-200',
                                            openGroups[group.label] &&
                                                'rotate-180',
                                        )}
                                    />
                                </>
                            )}
                        </button>

                        {openGroups[group.label] &&
                            !isCollapsed &&
                            group.children && (
                                <div className="ml-4 space-y-1 border-l-2 border-border/30 pl-4">
                                    {group.children.map((page) => (
                                        <div key={page.label}>
                                            {'children' in page &&
                                            page.children ? (
                                                <>
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            togglePage(
                                                                page.label,
                                                            )
                                                        }
                                                        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                                                    >
                                                        <span>
                                                            {page.label}
                                                        </span>
                                                        <ChevronDown
                                                            className={cn(
                                                                'h-3.5 w-3.5 transition-transform duration-200',
                                                                openPages[
                                                                    page.label
                                                                ] &&
                                                                    'rotate-180',
                                                            )}
                                                        />
                                                    </button>

                                                    {openPages[page.label] && (
                                                        <div className="ml-3 space-y-1 border-l-2 border-border/20 pl-3">
                                                            {page.children.map(
                                                                (sub) => (
                                                                    <Link
                                                                        key={
                                                                            sub.label
                                                                        }
                                                                        href={
                                                                            sub.href
                                                                        }
                                                                        className={cn(
                                                                            'flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground',
                                                                            activeSlug ===
                                                                                sub.slug ||
                                                                                url ===
                                                                                    sub.href
                                                                                ? 'font-medium text-primary'
                                                                                : 'text-muted-foreground',
                                                                        )}
                                                                    >
                                                                        {
                                                                            sub.label
                                                                        }
                                                                    </Link>
                                                                ),
                                                            )}
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <Link
                                                    href={page.href ?? '#'}
                                                    className={cn(
                                                        'flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground',
                                                        activeSlug ===
                                                            page.slug ||
                                                            url === page.href
                                                            ? 'font-medium text-primary'
                                                            : 'text-muted-foreground',
                                                    )}
                                                >
                                                    {page.label}
                                                </Link>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                    </div>
                ))}

                {/* Static links */}
                <Link
                    href="#"
                    className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                >
                    <FileText className="h-5 w-5" />
                    {!isCollapsed && (
                        <span className="flex-1 truncate">Estimates</span>
                    )}
                </Link>
                <Link
                    href="#"
                    className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                >
                    <Mail className="h-5 w-5" />
                    {!isCollapsed && (
                        <span className="flex-1 truncate">Contact</span>
                    )}
                </Link>
                <Link
                    href="#"
                    className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                >
                    <Settings className="h-5 w-5" />
                    {!isCollapsed && (
                        <span className="flex-1 truncate">Site Settings</span>
                    )}
                </Link>
            </nav>
        </aside>
    );
}
