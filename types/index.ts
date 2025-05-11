import type { z } from "zod"
import type { contactFormSchema } from "@/lib/validation"

export type ContactFormData = z.infer<typeof contactFormSchema>
