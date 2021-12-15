import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const host = "http://localhost:3000";


const Details = () => {

    const router = useRouter();
    const { id } = router.query;
    const title = router.query.query;

    let arrayData = [];
    let arrayValues = [];

    const [companyData, setCompanyData] = React.useState(null);

  

    React.useEffect(() => {

        return fetch(host + `/api/company/highlights/${id}`)
            .then((data) => data.json())
            .then(({ data }) => { setCompanyData(data) }
            )
    }, [title]);

    let dataValue;

    if(companyData != undefined){
        arrayData = Object.entries(companyData);
       
    }

    arrayData.forEach((row) => { 
        if(row[0] === 'address'){
            dataValue = row[1]
        }
    }
      )

      Object.keys(dataValue).forEach(key => {

          console.log(`${key}, ${dataValue[key]}`);
        //   arrayValues.push(`${key}, ${dataValue[key]}`)
      })

      console.log(arrayValues);

return (
    <Layout>
        <div className="container">
      
        </div>

    </Layout>
)
}

export default Details;