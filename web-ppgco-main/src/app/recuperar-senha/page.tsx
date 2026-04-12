import RecuperarSenhaForm from "@/features/auth/components/RecuperarSenhaForm";
import AuthLayout from "@/features/auth/components/AuthLayout";

export default function RecuperarSenhaPage() {
  return (
    <AuthLayout centerOnly>
      <RecuperarSenhaForm />
    </AuthLayout>
  );
}
