import LoginForm from "@/features/auth/components/LoginForm";
import AuthLayout from "@/features/auth/components/AuthLayout";

export default async function LoginPage() {
  // Simulate network load to trigger loading.tsx visually as requested
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
