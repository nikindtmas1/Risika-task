import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const host = "http://localhost:3000";


const General = () => {

    const router = useRouter();
    const { id } = router.query;
    // let arrayData = []

    const [companyData, setCompanyData] = React.useState(null);

  let companyName = (router.query.name);
  

  React.useEffect(() => {
    if(companyName != undefined){
      return fetch(host + `/api/search?query=${companyName}`)
        .then((data) => data.json())
        .then(({ data }) => { setCompanyData(data) }
        )
    }
  }, [companyName]);

console.log(companyData);
    return (
        <Layout>
             <div className="container">
            {companyData
            ?   <div className="jumbotron">
            <h3>{companyName}!</h3>
            <p></p>
            <div className="form-group">
              <input type="text" name="company name" className="form-control"  defaultValue={companyData[0].company_name} />
            </div>
            <div className="form-group">
              <input type="text" name="city" className="form-control" defaultValue={companyData[0].email.email} />
            </div>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].phone.phone_number}  />
            </div>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].score}  />
            </div>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].address.city}  />
            </div>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].status}  />
            </div>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].company_type.long}  />
            </div>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].local_organization_id.id}  />
            </div>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].risk_assessment}  />
            </div>
          </div>
            :null

            }
            
         
         </div>
           
        </Layout>
        
    )
}

export default General;
