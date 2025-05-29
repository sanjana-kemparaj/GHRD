// src/app/events/page.tsx
"use client"; // Accordion needs client-side interaction

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import EventItem from "@/components/EventItem";
import PageBanner from "@/components/PageBanner"; // Adjust path if needed

const upcomingEventsData: string[] = [
    // "We will update with the Upcoming Events status soon.", // Handled directly in JSX
    "Inauguration on 31-May-2025 in Abu Dhabi",
];

// const pastEventsData: string[] = [
//     "1st meet held on 13-May-2017 in Hyderabad",
//     "2nd meet held on 24-June-2017 in Visakhapatnam",
//     "3rd meet held on 10-Feb-2018 in Visakhapatnam",
//     "4th meet held on 12-May-2018 in Hyderabad",
//     "5th meet held on 23-June-2018 in Hyderabad",
//     "6th meet held on 10-July-2018 in Vijayawada",
//     "7th meet held on 12-Aug-2018 in Visakhapatnam",
//     "8th meet held on 18-Aug-2018 in Hyderabad",
//     "9th meet held on 18-Sep-2018 in Kakinada",
//     "10th meet held on 29-Sep-2018 in Delhi",
//     "11th meet held on 06-Oct-2018 in Bangalore", // Added one more for the example
//     "12th meet held on 20-Oct-2018 in Chennai",   // Added one more
//     "13th meet held on 03-Nov-2018 in Pune",      // Added one more
//     "14th meet held on 17-Nov-2018 in Vijayawada",
//     "15th meet held on 24-Nov-2018 in Hyderabad",
//     "16th meet held on 25-Nov-2018 in Kakinada",
//     "17th meet held on 15-Dec-2018 in Visakhapatnam",
//     "18th meet held on 02-Feb-2019 in Vijayawada",
//     "19th meet held on 18-MAY-2019 in Kakinada",
//     "20th meet held on 08-JUN-2019 in Hyderabad",
//     "21st meet held on 06-JUL-2019 in Hyderabad",
//     "22nd meet held on 13-JUL-2019 in Visakhapatnam",
//     "23rd meet held on 17-JUL-2019 in Vijayawada",
//     "24th meet held on 14-SEP-2019 in Hyderabad",
//     "25th meet held on 09-NOV-2019 in Hyderabad",
//     "26th meet held on 07-DEC-2019 in Hyderabad",
//     "27th meet held on 21-DEC-2019 in Hyderabad",
//     "28th meet held on 27-DEC-2019 in Kolkata",
//     "29th meet held on 28-DEC-2019 in Nellore",
//     "30th meet held on 28-DEC-2019 in Visakhapatnam",
// ];


export default function EventsPage() {
    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Events" }, // Current page, no href
    ];
    return (
        <>
            <PageBanner title="Events" breadcrumbs={breadcrumbs} />
            <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto"> {/* Max width can be adjusted */}
                    <div className="text-center mb-12 md:mb-16">
                        <p className="text-sm md:text-base text-blue-600 font-semibold uppercase tracking-wider mb-2">
                            Events
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
                            Stay updated with our upcoming events.
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <Accordion type="multiple" defaultValue={["upcoming-events", "past-events"]} className="w-full">
                            {/* Upcoming Events Section */}
                            <AccordionItem value="upcoming-events" className="bg-white shadow-sm rounded-lg">
                                <AccordionTrigger className="px-6 py-4 text-blue-600 font-semibold hover:no-underline text-lg">
                                    Upcoming Events:
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 pt-2">
                                    {upcomingEventsData.length > 0 ? (
                                        <ul role="list" className="space-y-1">
                                            {upcomingEventsData.map((event, index) => (
                                                <EventItem key={`upcoming-${index}`} description={event} />
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            We will update with the Upcoming Events status soon.
                                        </p>
                                    )}
                                </AccordionContent>
                            </AccordionItem>

                            {/* Past Events Section */}
                            {/* <AccordionItem value="past-events" className="bg-white shadow-sm rounded-lg">
                                <AccordionTrigger className="px-6 py-4 text-blue-600 font-semibold hover:no-underline text-lg">
                                    Past Events:
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6 pt-2">
                                    {pastEventsData.length > 0 ? (
                                        <ul role="list" className="space-y-1">
                                            {pastEventsData.map((event, index) => (
                                                <EventItem key={`past-${index}`} description={event} />
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            No past events to display.
                                        </p>
                                    )}
                                </AccordionContent>
                            </AccordionItem> */}
                        </Accordion>
                    </div>
                </div>
            </div>
        </>

    );
}