import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const host = "http://localhost:3000";


export default function Home() {
  const router = useRouter();

  const [companyData, setCompanyData] = React.useState(null);

  let companyName = (router.query.name);

  React.useEffect(() => {
    if(companyName != undefined){
    
      return fetch(host + `/api/search?query=${companyName}` )
      .then((data) => data.json())
      .then(({data}) => 
       {setCompanyData(data) }
      )
    }
  },[]);

  return (
    <Layout>
      <div>
        {/* <h1>Good luck! {JSON.stringify(router.query)}</h1> */}
        <h3>Search Company</h3>
        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" name="name" className="form-control" placeholder="Search" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </Layout>
  )
}
