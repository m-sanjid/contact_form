import type { ContactFormData } from "@/types"

export async function submitContactForm(data: ContactFormData): Promise<void> {
  // Simulate API call with a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a 90% success rate
      if (Math.random() > 0.1) {
        console.log("Form submitted successfully:", data)
        resolve()
      } else {
        reject(new Error("Failed to submit form"))
      }
    }, 1500) // 1.5 second delay to simulate network request
  })
}
