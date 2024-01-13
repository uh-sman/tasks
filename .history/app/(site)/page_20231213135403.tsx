import AuthForm from "@/components/AuthForm";
// import Dashboard from "../../components/Dashboard";
import Dashboard from "./dashboard/components/dashboard";

export default function Home() {
  return (
    <div>
     <AuthForm />
     <Dashboard />
    </div>
  )
}
