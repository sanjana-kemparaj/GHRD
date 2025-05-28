
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { membershipFormSchema, MembershipFormValues } from "./schema"; // Adjust path

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import PageBanner from "@/components/PageBanner";

const howDidYouKnowOptions = [
    "Social Media (LinkedIn, Facebook, etc.)",
    "Referral from a colleague/friend",
    "GHRD Website / Online Search",
    "GHRD Event / Webinar",
    "Advertisement",
    "Other",
];



export default function MembershipForm() {
    const form = useForm<MembershipFormValues>({
        resolver: zodResolver(membershipFormSchema),
        defaultValues: {
            fullName: "",
            currentLocation: "",
            mobileNumber: "",
            alternativeMobile: "",
            personalEmail: "",
            officialEmail: "",
            currentOrganization: "",
            currentDesignation: "",
            totalYearsExpHR: "",
            howDidYouKnow: undefined,
        },
    });


    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Membership" }, // Current page, no href
    ];
    return (
        <>
            <PageBanner title="Membership" breadcrumbs={breadcrumbs} />
            <Form {...form}>
                <form  action="https://formspree.io/f/mpwdgkvz"
                       method="POST" className="space-y-8 p-10 w-2/3 m-10">
                    <p className="text-xl font-bold">Join Global HRD Network today and be a part of a dynamic global HR community committed to your growth and success in the field of Human Resources.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Full Name" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Current Location */}
                        <FormField
                            control={form.control}
                            name="currentLocation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Current Location" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Mobile Number (WhatsApp Only) */}
                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Mobile Number (WhatsApp Only)" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Alternative Mobile */}
                        <FormField
                            control={form.control}
                            name="alternativeMobile"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Alternative Mobile" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Personal Email */}
                        <FormField
                            control={form.control}
                            name="personalEmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="email" placeholder="Personal Email" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Official Email */}
                        <FormField
                            control={form.control}
                            name="officialEmail"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input type="email" placeholder="Official Email" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Current Organization */}
                        <FormField
                            control={form.control}
                            name="currentOrganization"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Current Organization" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Current Designation */}
                        <FormField
                            control={form.control}
                            name="currentDesignation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Current Designation" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Total Years of Exp into HR */}
                        <FormField
                            control={form.control}
                            name="totalYearsExpHR"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Total Years of Exp into HR" {...field} className="bg-gray-100/70 border-gray-200 focus:bg-white focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* How do you know about GHRD? */}
                        <FormField
                            control={form.control}
                            name="howDidYouKnow"
                            render={({ field }) => (
                                <FormItem>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-gray-100/70 border-gray-200 focus:bg-white focus:ring-primary focus:border-primary">
                                                <SelectValue placeholder="How do you know about GHRD?" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {howDidYouKnowOptions.map((option) => (
                                                <SelectItem key={option} value={option}>
                                                    {option}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                        Submit
                    </Button>
                </form>
            </Form>

        </>

    );
}
