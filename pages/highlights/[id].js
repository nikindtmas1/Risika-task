import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

import Tamplate from "@/components/Custom/Template";

const host = "http://localhost:3000";


const Highlights = () => {
    const router = useRouter();
    const { id } = router.query;
    let arrayData = [];

    const [companyData, setCompanyData] = React.useState(null);


    React.useEffect(() => {

        return fetch(host + `/api/company/highlights/${id}`)
            .then((data) => data.json())
            .then(({ data }) => { setCompanyData(data) }
            )
    }, [id]);
    if(companyData != undefined){
        console.log(Object.keys(companyData));
        console.log(Object.entries(companyData));
        arrayData = Object.entries(companyData);
    }

    let sortArray = arrayData.filter(x => x[1].classification === 'positive')


    return (
        <Layout>
            <div className="container">
              
            {arrayData.map(x =>  
            <div class="panel panel-default">
                <div class="panel-heading">{x[0]}</div>
                {Object.keys(x[1]).map(x => 
                    
                <div class="panel-body">{x}</div>
                    )}
            </div>)}
            
            </div>
        </Layout>
    )

}

export default Highlights;