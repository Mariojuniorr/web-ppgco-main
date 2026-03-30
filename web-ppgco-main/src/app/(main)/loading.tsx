import NexusLoader from "@/components/feedback/NexusLoader";

export default function DashboardLoading() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex flex-col items-center">
        {/* Usamos classes de utilitário puro em Server Components para checar os modos de cor antes de hidratar o front */}
        <div className="block dark:hidden">
          <NexusLoader size={80} color="#3c1d7c" />
        </div>
        <div className="hidden dark:block">
          <NexusLoader size={80} color="#ffffff" />
        </div>
      </div>
    </div>
  );
}
