import RecuperarSenhaForm from "@/features/auth/components/RecuperarSenhaForm";
import AuthLayout from "@/features/auth/components/AuthLayout";

export default async function RecuperarSenhaPage() {
  await new Promise(resolve => setTimeout(resolve, 300));

  return (
    <AuthLayout centerOnly>
      <RecuperarSenhaForm />
    </AuthLayout>
  );
}
