export function validateInquiry(data: Record<string, string>) {
  const errors: Record<string, string> = {};
  if ((data.name || "").trim().length < 2)
    errors.name = "Please enter at least two characters.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || ""))
    errors.email = "Please enter a valid email address.";
  if ((data.message || "").trim().length < 20)
    errors.message =
      "Please include at least 20 characters so we can understand your needs.";
  if (!data.service) errors.service = "Please select a service.";
  if (
    ["Phone", "WhatsApp"].includes(data.preferredContact) &&
    !data.phone?.trim()
  )
    errors.phone =
      "Please add a phone number for your preferred contact method.";
  for (const [field, limit] of Object.entries({ name: 200, email: 254, company: 200, phone: 40, message: 5000 })) {
    if ((data[field] || "").length > limit) errors[field] = `Please use no more than ${limit} characters.`;
  }
  return errors;
}
