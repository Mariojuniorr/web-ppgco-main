import { DefesaContainer } from "@/features/gestao-academica/components/DefesaContainer";

export default async function DefesaPage() {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return (
    <DefesaContainer />
  );
}
