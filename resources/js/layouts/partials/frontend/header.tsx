import { Link } from '@inertiajs/react';
import { useState } from 'react';

import AppLogo from '@/components/app-logo';

export function FrontendHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                <Link href="/" className="text-blue-700 tracking-tight whitespace-nowrap font-inter font-bold text-2xl">
                    BathPro Remodeling
                </Link>
                <nav className="hidden min-[992px]:flex items-center gap-2 lg:gap-5 xl:gap-7 text-base font-bold text-gray-800 font-inter ">
                    <Link href="/" className="transition-colors duration-150 text-sm font-normal text-blue-600">
                        Home
                    </Link>
                    <Link href={route('remodeling')} className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600">
                        Bathroom Remodeling
                    </Link>
                    <Link href="/how-it-works" className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600">
                        How It Works
                    </Link>
                    <Link href="/about" className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600">
                        About
                    </Link>
                    <Link href="/contact" className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600">
                        Contact
                    </Link>
                    <Link href="/track-orders" className="transition-colors duration-150 text-sm font-normal text-gray-900 hover:text-blue-600">
                        Track Order
                    </Link>
                </nav>
                <Link
                    href="/free-estimate"
                    className="hidden min-[992px]:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-base font-bold font-inter shadow-sm active:bg-blue-900 transition-colors duration-150 whitespace-nowrap"
                >
                    Get Free Estimates
                </Link>
                <button
                    type="button"
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
                    className="min-[992px]:hidden p-1.5 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isMobileMenuOpen ? '' : 'hidden'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className={`min-[992px]:hidden border-t border-gray-100 bg-white px-6 pb-5 pt-3 flex flex-col gap-1 ${isMobileMenuOpen ? '' : 'hidden'}`}>
                <Link href="/" className="py-2 text-sm font-medium transition-colors duration-150 text-blue-600">
                    Home
                </Link>
                <Link href={route('remodeling')} className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600">
                    Bathroom Remodeling
                </Link>
                <Link href="/how-it-works" className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600">
                    How It Works
                </Link>
                <Link href="/about" className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600">
                    About
                </Link>
                <Link href="/contact" className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600">
                    Contact
                </Link>
                <Link href="/track-orders" className="py-2 text-sm font-medium transition-colors duration-150 text-gray-800 hover:text-blue-600">
                    Track Order
                </Link>
                <Link
                    href="/free-estimate"
                    className="mt-3 inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors duration-150"
                >
                    Get Free Estimates
                </Link>
            </div>
        </header>
    );
}
