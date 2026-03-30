import { Head } from "@inertiajs/react";

import { ContactConsultationSection } from "@/components/frontend/contact/contact-consultation-section";
import { ContactFAQSection } from "@/components/frontend/contact/contact-faq-section";
import FrontendLayout from "@/layouts/frontend-layout";

export default function Contact() {
    return (
        <FrontendLayout>
            <Head title="Contact" />
            <ContactConsultationSection />
            <ContactFAQSection />
        </FrontendLayout>
    );
}
