import { useRouter } from "next/router";
import Layout from "@/components/Layout";

export default function Company(){

  const router = useRouter()

    return (
        <Layout>
            <div>
                <h1>Company page {JSON.stringify(router.query)}</h1>
            </div>
        </Layout>
    )
}