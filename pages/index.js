import { useRouter } from "next/router";
import Layout from "@/components/Layout";


export default function Home() {
  const router = useRouter()
  return (
    <Layout>
      <div>
        <h1>Good luck! {JSON.stringify(router.query)}</h1>
        <h1>Home page</h1>
      </div>
    </Layout>
  )
}
