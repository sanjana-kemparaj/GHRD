// src/app/membership/schema.ts (or wherever you prefer)
import { z } from "zod";

export const membershipFormSchema = z.object({
    fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
    currentLocation: z.string().min(2, { message: "Location is required." }),
    mobileNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid mobile number (WhatsApp only)." }), // Basic E.164-like regex
    alternativeMobile: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid mobile number." }).optional().or(z.literal('')), // Optional, allow empty string
    personalEmail: z.string().email({ message: "Invalid personal email address." }),
    officialEmail: z.string().email({ message: "Invalid official email address." }).optional().or(z.literal('')),
    currentOrganization: z.string().min(2, { message: "Organization is required." }),
    currentDesignation: z.string().min(2, { message: "Designation is required." }),
    totalYearsExpHR: z.string().min(1, {message: "Experience is required."}), // Or use z.number().min(0) if you parse it
    howDidYouKnow: z.string({
        required_error: "Please select how you heard about us.",
    }),
});

export type MembershipFormValues = z.infer<typeof membershipFormSchema>;