import AuthForm from "@/components/AuthForm";
import Dashboard from "../../components/Dashboard";
export const revalidate = 0

export default function Home() {
  return (
    <div>
     <AuthForm />
     <Dashboard />
    </div>
  )
}
