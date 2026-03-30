import { Link } from '@inertiajs/react';
import type {
    ButtonHTMLAttributes,
    ChangeEventHandler,
    ComponentType,
    FormEventHandler,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
} from 'react';

export interface ContactConsultationSectionProps {
    flash?: { success?: string; error?: string };
    data?: Record<string, unknown>;
    errors?: Record<string, string>;
    handleChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    handleSubmit?: FormEventHandler<HTMLFormElement>;
    processing?: boolean;
    Input?: ComponentType<InputHTMLAttributes<HTMLInputElement>>;
    Textarea?: ComponentType<TextareaHTMLAttributes<HTMLTextAreaElement>>;
    Button?: ComponentType<ButtonHTMLAttributes<HTMLButtonElement>>;
}

export function ContactConsultationSection({ flash, handleChange, handleSubmit }: ContactConsultationSectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-8 py-6 bg-[#F9FAFB] mt-5 md:mt-20">

            {/* Contact Info */}
            <div className="md:col-span-1">
                <h2 className="text-2xl font-normal font-inter mb-6 text-gray-900">Get in Touch</h2>
                <div className="space-y-5">
                    {/* Phone */}
                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 text-brand-600 bg-[#DBEAFE] rounded-full p-2">
                            <svg className="w-5 h-5" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-base font-normal font-inter text-gray-900 uppercase tracking-wide mb-0.5">Phone</p>
                            <a href="tel:5551234567" className="text-blue-600 text-base font-normal font-inter hover:underline">(555) 123-4567</a>
                            <p className="text-sm font-normal font-inter text-gray-500 mt-0.5">Mon–Fri: 8am–6pm<br />Sat: 9am–4pm</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 text-brand-600 bg-[#DBEAFE] rounded-full p-2">
                            <svg className="w-5 h-5" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-base font-normal font-inter text-gray-900 uppercase tracking-wide mb-0.5">Email</p>
                            <a href="mailto:info@bathproremodeling.com" className="text-blue-600 text-base font-normal font-inter hover:underline text-sm">info@bathproremodeling.com</a>
                            <p className="text-sm font-normal font-inter text-gray-500 mt-0.5">We respond within 24 hours</p>
                        </div>
                    </div>

                    {/* Service Area */}
                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 text-brand-600 bg-[#DBEAFE] rounded-full p-2">
                            <svg className="w-5 h-5" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-base font-normal font-inter text-gray-900 uppercase tracking-wide mb-0.5">Service Area</p>
                            <p className="text-sm font-normal font-inter text-gray-700">Columbus, Cleveland, Cincinnati and surrounding Ohio areas</p>
                        </div>
                    </div>

                    {/* Text Messages */}
                    <div className="flex gap-3 items-start">
                        <div className="mt-0.5 text-brand-600 bg-[#DBEAFE] rounded-full p-2">
                            <svg className="w-5 h-5" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="text-base font-normal font-inter text-gray-900 uppercase tracking-wide mb-0.5">Text Messages</p>
                            <p className="text-sm font-normal font-inter text-gray-700">Text us at (555) 123-4567 for quick questions</p>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-[#BEDBFF]/30 border border-[#BEDBFF] rounded-xl p-4 mt-2">
                        <div className="flex items-center gap-2 mb-3">
                            <svg className="w-4 h-4 text-brand-600" fill="none" stroke="blue" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <p className="text-base font-normal font-inter text-gray-800">Business Hours</p>
                        </div>
                        <div className="space-y-1 text-base font-normal font-inter">
                            <div className="flex justify-between"><span className="text-gray-600 text-sm">Monday – Friday</span><span className="text-gray-800 text-sm">8:00 AM – 6:00 PM</span></div>
                            <div className="flex justify-between"><span className="text-gray-600 text-sm">Saturday</span><span className="text-gray-800 text-sm">9:00 AM – 4:00 PM</span></div>
                            <div className="flex justify-between"><span className="text-gray-600 text-sm">Sunday</span><span className="text-gray-800 text-sm">Closed</span></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 py-8 px-6">
                    <h2 className="text-2xl font-normal font-inter mb-6 text-gray-900">Send Us a Message</h2>

                    {/* Flash Messages */}
                    {flash?.success && (
                        <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
                            <p className="text-base font-normal font-inter text-green-800">{flash.success}</p>
                        </div>
                    )}
                    {flash?.error && (
                        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-sm text-red-800">{flash.error}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name, Email, Phone, Subject, Message fields go here... */}
                        {/* Use Input, Textarea, Button components as in your original code */}
                    </form>
                </div>

                {/* Estimate CTA */}
                <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-5">
                    <p className="text-base font-normal font-inter text-amber-900 mb-1">Need a quote for your bathroom remodel?</p>
                    <p className="text-base font-normal font-inter text-amber-800 mb-3">For the fastest service, use our online estimate request form. You'll receive a detailed quote within 24 hours!</p>
                    <Link href="/free-estimate" className="text-[#733E0A] text-base font-bold font-inter hover:underline">Request Free Estimate →</Link>
                </div>
            </div>

        </div>
    );
}
