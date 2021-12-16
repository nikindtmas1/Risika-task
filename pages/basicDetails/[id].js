import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const host = "http://localhost:3000";

const BasicDetails = () => {

    const router = useRouter();
    const { id } = router.query;
    const title = router.query.query;

    let arrayData = [];
    let arrayValues = [];

    const [companyData, setCompanyData] = React.useState(null);

  

    React.useEffect(() => {

        return fetch(host + `/api/company/basics/${id}`)
            .then((data) => data.json())
            .then(({ data }) => { setCompanyData(data) }
            )
    }, [title]);

    let dataValue;
    console.log(companyData);

    if(companyData != undefined){
        arrayData = Object.entries(companyData);
       

        arrayData.forEach((row) => {
            if (row[0] === 'vat') {
                dataValue = row[1]
            }else if(row[0] === 'bank'){
                dataValue = row[1]
            }else if(row[0] === 'email'){
                dataValue = row[1]
            }else if(row[0] === 'phone'){
                dataValue = row[1]
            }else if(row[0] === 'score'){
                dataValue = row[1]
            }else if(row[0] === 'address'){
                dataValue = row[1]
            }else if(row[0] === 'purpose'){
                dataValue = row[1]
            }else if(row[0] === 'webpage'){
                dataValue = row[1]
            }else if(row[0] === 'status_code'){
                dataValue = row[1]
            }else if(row[0] === 'company_name'){
                dataValue = row[1]
            }else if(row[0] === 'company_type'){
                dataValue = row[1]
            }else if(row[0] === 'audit_selected'){
                dataValue = row[1]
            }else if(row[0] === 'financial_year'){
                dataValue = row[1]
            }else if(row[0] === 'powers_to_bind'){
                dataValue = row[1]
            }else if(row[0] === 'holding_company'){
                dataValue = row[1]
            }else if(row[0] === 'last_report_date'){
                dataValue = row[1]
            }else if(row[0] === 'financial_reports'){
                dataValue = row[1]
            }else if(row[0] === 'status_valid_from'){
                dataValue = row[1]
            }else if(row[0] === 'main_industry_code'){
                dataValue = row[1]
            }else if(row[0] === 'registered_capital'){
                dataValue = row[1]
            }else if(row[0] === 'number_of_employees'){
                dataValue = row[1]
            }else if(row[0] === 'risk_assessment_code'){
                dataValue = row[1]
            }else if(row[0] === 'date_of_incorporation'){
                dataValue = row[1]
            }else if(row[0] === 'local_organization_id'){
                dataValue = row[1]
            }else if(row[0] === 'company_secondary_names'){
                dataValue = row[1]
            }else if(row[0] === 'advertisement_protection'){
                dataValue = row[1]
            }else if(row[0] === 'secondary_industry_codes'){
                dataValue = row[1]
            }else if(row[0] === 'status'){
                dataValue = row[1]
            }else if(row[0] === 'risk_assessment'){
                dataValue = row[1]
            }
        }
        )

        console.log(arrayData);
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
);
}

export default BasicDetails;