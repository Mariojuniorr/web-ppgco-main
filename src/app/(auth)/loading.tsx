import NexusLoader from "@/components/feedback/NexusLoader";

export default function AuthLoading() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#201540]/90 backdrop-blur-md">
      <div className="flex flex-col items-center">
        <NexusLoader size={80} color="#ffffff" />
      </div>
    </div>
  );
}
