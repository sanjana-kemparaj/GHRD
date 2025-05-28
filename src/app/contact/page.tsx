"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactInfoCard from "@/components/ContactInfoCard";
import AddressBlock from "@/components/AddressBlock";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import PageBanner from "@/components/PageBanner";

export default function ContactPage() {

    const handleSimpleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Form data:", data);
        alert("Message Sent! (This is a demo - check console for data)");
        event.currentTarget.reset();
    };



    const uaeAddress = [
        "No.709, Gulf Business Center,",
        "Abu Dhabi Plaza Building,",
        "Fatima Bint Mubarak Street,",
        "Abu Dhabi, UAE.",
        "Ph: +971543546423 | Fax : (971 2) 6738815",
        "Mail: raj@aceglobalhr.com",
        "Website: www.aceglobalhr.com",
    ];


    const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.771721123964!2d54.36427297597107!3d24.493365178170738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e666731514303%3A0xf4049f85e9f18fd!2sAbu%20Dhabi%20Plaza%20Complex%20ASPM!5e0!3m2!1sen!2snl!4v1748260460184!5m2!1sen!2snl";

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Contact" }, // Current page, no href
    ];
    return (
        <>
            <PageBanner title="Contact" breadcrumbs={breadcrumbs} />
            <div className="bg-white min-h-screen">
                <section className="py-16 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ContactInfoCard
                                icon={<Phone />}
                                title="Call Us"
                                details={
                                    <a href="tel:+919666669267" className="hover:text-blue-600">+91 96666 69267</a>
                                }
                            />
                            <ContactInfoCard
                                icon={<Mail />}
                                title="Email Us"
                                details={
                                    <a href="mailto:chro@ghrd.in" className="hover:text-blue-600">chro@ghrd.in</a>
                                }
                            />
                            <ContactInfoCard
                                icon={<MapPin />}
                                title="Location"
                                details="Abu Dhabi Plaza Complex"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 3: Office Addresses & Map */}
                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-10">

                            <AddressBlock title="UAE Office Address" lines={uaeAddress} />
                        </div>

                        {/* Map Column */}
                        <div className="rounded-lg overflow-hidden shadow-xl h-96 md:h-full">
                            <iframe
                                src={googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location Map"
                            ></iframe>
                        </div>
                    </div>
                </section>

                <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                            GET IN TOUCH
                        </p>
                        <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Needs Help? Lets Get in Touch
                        </h1>
                    </div>

                    <form onSubmit={handleSimpleSubmit} className="mt-12 max-w-xl mx-auto space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Input type="text" name="name" placeholder="Your Name" required className="bg-slate-100 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500"/>
                            <Input type="email" name="email" placeholder="Email Address" required className="bg-slate-100 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <Input type="tel" name="phone" placeholder="Phone Number" className="bg-slate-100 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div>
                            <Textarea name="message" placeholder="Type Your Message" rows={5} required className="bg-slate-100 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500"/>
                        </div>
                        <div className="text-center">
                            <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-10">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </section>

                {/* Section 2: Contact Info Cards */}

            </div>
        </>

    );
}