import Layout from "@/Layout"
import Dashboard from "@/components/Dashboard"
import Aside from "@/components/Aside"
import Badge from "@/components/Badge"

export default function Home() {
  return (
    <Layout>
      <Badge/>
      <Aside />
      <Dashboard/>
    </Layout>
  )
}
