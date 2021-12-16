import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const host = "http://localhost:3000";

import { createContext, useContext } from 'react';

let id; 

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {id}

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default function Home() {
  const router = useRouter();

  const [companyData, setCompanyData] = React.useState(null);

  let companyName = (router.query.name);

  React.useEffect(() => {
    if (companyName != undefined) {

      return fetch(host + `/api/search?query=${companyName}`)
        .then((data) => data.json())
        .then(({ data }) => { setCompanyData(data) })
    }
  }, [companyName]);

  if(companyData){
    id = companyData[0].local_organization_id.id
  }
  return (
    <Layout>
      <div className="container">
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
              <a className="btn btn-primary btn-lg" href={host + `/general/${companyData[0].local_organization_id.id}?name=${companyName}`} role="button">General</a>
              <a className="btn btn-primary btn-lg" href={`/highlights/${companyData[0].local_organization_id.id}`} role="button" id={`${companyData[0].local_organization_id.id}`}>Highlights</a>
              <a className="btn btn-primary btn-lg" href={host + `/company/${companyData[0].local_organization_id.id}`} role="button">Relations</a>
              <a className="btn btn-primary btn-lg" href={`/basic/${companyData[0].local_organization_id.id}`} role="button">Basic</a>
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

        <picture>
          <source srcset="https://s27389.pcdn.co/wp-content/uploads/2021/03/fintech-disruption-of-the-banking-industry-innovation-vs-tradition.jpeg.optimal.jpeg" type="image/svg+xml" />
          <img src="https://s27389.pcdn.co/wp-content/uploads/2021/03/fintech-disruption-of-the-banking-industry-innovation-vs-tradition.jpeg.optimal.jpeg" className="img-fluid img-thumbnail" alt="..." />
        </picture>
      </div>
    </Layout>
  )
}
