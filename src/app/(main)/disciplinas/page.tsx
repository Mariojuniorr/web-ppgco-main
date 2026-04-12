import { DisciplinasContainer } from "@/features/gestao-academica/components/DisciplinasContainer";

export default async function DisciplinasPage() {
  // Simulate network load to trigger the global loading.tsx visually as requested
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return (
    <DisciplinasContainer />
  );
}
