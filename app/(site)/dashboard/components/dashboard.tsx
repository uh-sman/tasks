
interface DashboardPageProps {
  children: React.ReactNode
}
const DashboardPage = ({children} : DashboardPageProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default DashboardPage
