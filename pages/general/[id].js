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


    return (
        <Layout>
             <div className="container">
            {companyData
            ?   <div className="jumbotron">
            <h3>This is {companyName}</h3>
           
            <h5>Company Name <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="company name" className="form-control"  defaultValue={companyData[0].company_name} />
            </div>
            <h5>Email <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="city" className="form-control" defaultValue={companyData[0].email.email} />
            </div>
            <h5>Phone number <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].phone.phone_number}  />
            </div>
            <h5>Score <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].score}  />
            </div>
            <h5>Address <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].address.city}  />
            </div>
            <h5>Status <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].status}  />
            </div>
            <h5>Company type <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].company_type.long}  />
            </div>
            <h5>Local organiztion id <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="country" className="form-control" defaultValue={companyData[0].local_organization_id.id}  />
            </div>
            <h5>Risk assessment <span class="label label-default"></span></h5>
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
