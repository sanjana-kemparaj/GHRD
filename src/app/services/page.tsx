import React from 'react'
import ServicesSection from "@/components/ServicesSection";
import PageBanner from "@/components/PageBanner";

const Page = () => {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Events" }, // Current page, no href
    ];
    return (
        <div>
            <PageBanner title="Services" breadcrumbs={breadcrumbs} />
            <ServicesSection/>
        </div>
    )
}
export default Page
