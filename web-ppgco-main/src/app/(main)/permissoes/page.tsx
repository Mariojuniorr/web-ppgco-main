import { AcessosContainer } from "@/features/permissoes/components/AcessosContainer";

export default async function PermissoesPage() {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return (
    <AcessosContainer />
  );
}
