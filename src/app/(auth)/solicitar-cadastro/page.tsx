import SolicitarCadastroForm from "@/features/auth/components/SolicitarCadastroForm";
import AuthLayout from "@/features/auth/components/AuthLayout";

export default async function SolicitarCadastroPage() {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  return (
    <AuthLayout centerOnly>
      <SolicitarCadastroForm />
    </AuthLayout>
  );
}
