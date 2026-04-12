import { FaqContainer } from "@/features/comunicacao/components/FaqContainer";

export default async function FAQPage() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return <FaqContainer />;
}
