import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const host = "http://localhost:3000";

const Basic = () => {

    const router = useRouter();
    const { id } = router.query;

    let arrayData = [];

    const [companyData, setCompanyData] = React.useState(null);


    React.useEffect(() => {

        return fetch(host + `/api/company/basics/${id}`)
            .then((data) => data.json())
            .then(({ data }) => { setCompanyData(data) }
            )
    }, [id]);

    if (companyData != undefined) {
        arrayData = Object.entries(companyData);

    }


    return (
        <Layout>

            <div className="container">
                <h3>Basics Informations</h3>
                {arrayData.map(x =>
                    <div class="panel panel-default">
                        <div class="panel-heading">{x[0]}</div>
                        <a className="btn btn-secondary btn-lg" href={`/basicDetails/${id}?query=${x[0]}`} role="button">Details</a>
                    </div>)}
            </div>
        </Layout>
    );
}

export default Basic;