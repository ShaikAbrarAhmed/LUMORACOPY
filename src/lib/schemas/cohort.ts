import { z } from "zod";

export const CohortSubmitSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),
  email: z.string()
    .email("Invalid email address format")
    .max(100, "Email must not exceed 100 characters")
    .toLowerCase()
    .trim(),
  college: z.string()
    .min(2, "College name must be at least 2 characters")
    .max(100, "College name is too long")
    .optional()
    .or(z.literal("")),
  phone: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits")
    .regex(/^\+?[0-9\s\-]+$/, "Invalid phone number format"),
  message: z.string()
    .max(500, "Message must not exceed 500 characters")
    .optional()
    .or(z.literal("")),
  year: z.string()
    .min(1, "Year is required")
    .max(50, "Year is too long")
    .optional()
    .or(z.literal("")),
  status: z.string()
    .min(1, "Status is required")
    .max(50, "Status is too long")
    .optional()
    .or(z.literal("")),
  paymentPlan: z.enum(["FULL PAYMENT", "SPLIT PAYMENT"]).optional(),
  programSlug: z.string().min(1, "Program slug is required"),
});

export type CohortSubmitInput = z.infer<typeof CohortSubmitSchema>;
