import { Link, usePage } from '@inertiajs/react';
import {
    ChevronDown,
    FileText,
    LayoutGrid,
    Mail,
    Settings,
    Wrench,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { dashboard } from '@/routes/admin';

export interface AdminSidebarProps {
    isCollapsed?: boolean;
    activeSlug?: string | null;
}

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

    return (

        <aside
            className={cn(
                'relative hidden h-screen shrink-0 flex-col border-r bg-background transition-all duration-300 ease-in-out md:flex p-2',
                isCollapsed ? 'w-16' : 'w-64'
            )}
        >
                <h2 className="text-lg font-bold">BathPro Remodeling</h2>
                <nav className="space-y-1">
                    <Link
                        href={dashboardPath}
                        className={cn(
                            'group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
                            dashboardActive
                                ? 'bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary'
                                : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                        )}
                    >
                        <LayoutGrid className="h-5 w-5" />
                        <span className="flex-1 truncate">Dashboard</span>
                        {dashboardActive && (
                            <div className="relative h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary">
                                <div className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-primary" />
                            </div>
                        )}
                    </Link>
                    <div className="relative">
                        <div data-state="closed" data-slot="collapsible">
                            <button
                                type="button"
                                aria-controls="radix-_r_0_"
                                aria-expanded="false"
                                data-state="closed"
                                data-slot="collapsible-trigger"
                                className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                <LayoutGrid className="h-5 w-5" />
                                <span className="flex-1 truncate">
                                    Page Management
                                </span>
                                <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200" />
                            </button>
                            <div
                                data-state="closed"
                                id="radix-_r_0_"
                                hidden
                                data-slot="collapsible-content"
                                className="mt-1 ml-4 space-y-1 border-l-2 border-border/30 pr-2 pl-4"
                            ></div>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                        <FileText className="h-5 w-5" />
                        <span className="flex-1 truncate">Estimates</span>
                    </Link>
                    <div className="relative">
                        <div data-state="closed" data-slot="collapsible">
                            <button
                                type="button"
                                aria-controls="radix-_r_1_"
                                aria-expanded="false"
                                data-state="closed"
                                data-slot="collapsible-trigger"
                                className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                            >
                                <Wrench className="h-5 w-5" />
                                <span className="flex-1 truncate">
                                    Services
                                </span>
                                <ChevronDown className="h-4 w-4 flex-shrink-0 transition-transform duration-200" />
                            </button>
                            <div
                                data-state="closed"
                                id="radix-_r_1_"
                                hidden
                                data-slot="collapsible-content"
                                className="mt-1 ml-4 space-y-1 border-l-2 border-border/30 pr-2 pl-4"
                            ></div>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="flex-1 truncate">Contact</span>
                    </Link>
                    <Link
                        href="#"
                        className="group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                        <Settings className="h-5 w-5" />
                        <span className="flex-1 truncate">Site Settings</span>
                </Link>
            </nav>
        </aside>
    );
}
