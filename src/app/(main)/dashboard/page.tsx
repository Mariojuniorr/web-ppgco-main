import { DashboardContainer } from "@/features/gestao-academica/components/DashboardContainer";

export default async function DashboardPage() {
  // Simulate network load to trigger the global loading.tsx visually as requested
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return (
    <DashboardContainer />
  );
}
