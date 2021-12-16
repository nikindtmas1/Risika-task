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
       

        arrayData.forEach((row) => {
            if (row[0] === 'address') {
                dataValue = row[1]
            }else if(row[0] === 'age'){
                dataValue = row[1]
            }else if(row[0] === 'industry_risk'){
                dataValue = row[1]
            }else if(row[0] === 'change_in_management'){
                dataValue = row[1]
            }else if(row[0] === 'change_in_employees'){
                dataValue = row[1]
            }else if(row[0] === 'three_years_profitloss'){
                dataValue = row[1]
            }else if(row[0] === 'intangible_assets'){
                dataValue = row[1]
            }else if(row[0] === 'type_of_auditor_assistance'){
                dataValue = row[1]
            }else if(row[0] === 'connected_bankruptcies'){
                dataValue = row[1]
            }else if(row[0] === 'return_on_assets'){
                dataValue = row[1]
            }
        }
        )


        Object.keys(dataValue).forEach(key => {

            //console.log(`${key}, ${dataValue[key]}`);
          arrayValues.push(`${key} => ${dataValue[key]}`)
        })
    }


return (
    <Layout>
        <div className="container">
        {  
            <div class="panel panel-default">
                <div class="panel-heading">{`${
                    arrayValues.join("  ;  ")
                    //arrayValues.forEach(row => document.write(row + "<br >"))
                    }`}</div>
                    
            </div>}
        </div>

    </Layout>
)
}

export default Details;