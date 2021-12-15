import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const host = "http://localhost:3000";


export default function Home() {
  const router = useRouter();

  const [companyData, setCompanyData] = React.useState(null);

  let companyName = (router.query.name);

  React.useEffect(() => {
    if (companyName != undefined) {

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
        {/* <h1>Good luck! {JSON.stringify(router.query)}</h1> */}
        {/* <h3>Search Company</h3> */}
        <div>

        </div>
        {companyData
          ? <div className="jumbotron">
            <h3>Hello, {companyName}!</h3>
            <p></p>
            <h5>Company Name <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="company name" className="form-control" placeholder="Name" defaultValue={companyData[0].company_name} />
            </div>

            <h5>City <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="city" className="form-control" placeholder="Name" defaultValue={companyData[0].address.city} />
            </div>

            <h5>Country <span class="label label-default"></span></h5>
            <div className="form-group">
              <input type="text" name="country" className="form-control" placeholder="Name" defaultValue={companyData[0].address.country} />
            </div>
            <h5>Informations <span class="label label-default"></span></h5>
            <p>
              <a className="btn btn-primary btn-lg" href={host + `/company/${companyData[0].local_organization_id.id}`} role="button">Management</a>
              <a className="btn btn-primary btn-lg" href={host + `/company/${companyData[0].local_organization_id.id}`} role="button">General</a>
              <a className="btn btn-primary btn-lg" href={`/highlights/${companyData[0].local_organization_id.id}`} role="button">Highlights</a>
              <a className="btn btn-primary btn-lg" href={host + `/company/${companyData[0].local_organization_id.id}`} role="button">Relations</a>
            </p>
          </div>
          : <form className="navbar-form navbar-left" role="search">
            <h3>Search Company <span class="label label-default"></span></h3>
            <div className="form-group">
              <input type="text" name="name" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        }

      </div>


    </Layout>
  )
}
