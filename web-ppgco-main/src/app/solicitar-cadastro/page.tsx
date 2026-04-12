import SolicitarCadastroForm from "@/features/auth/components/SolicitarCadastroForm";
import AuthLayout from "@/features/auth/components/AuthLayout";

export default function SolicitarCadastroPage() {
  return (
    <AuthLayout centerOnly>
      <SolicitarCadastroForm />
    </AuthLayout>
  );
}
