import React from "react";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";



const host = "http://localhost:3000";


const Highlights = () => {
    const router = useRouter();
    const { id } = router.query;
  
    let arrayData = [];
    let sortedData = [];

    const [companyData, setCompanyData] = React.useState(null);


    React.useEffect(() => {

        return fetch(host + `/api/company/highlights/${id}`)
            .then((data) => data.json())
            .then(({ data }) => { setCompanyData(data) }
            )
    }, [id]);
 
    if(companyData != undefined){
        arrayData = Object.entries(companyData);
        sortedData = arrayData;
    }

    if(router.query.sort === 'negative'){
       sortedData = arrayData.filter(x => x[1].classification === 'negative')
    }else if(router.query.sort === 'positive'){
      sortedData = arrayData.filter(x => x[1].classification === 'positive')
    }else if(router.query.sort === 'neutral'){
      sortedData = arrayData.filter(x => x[1].classification === 'neutral')
    }else if(router.query.sort === 'weight'){
       sortedData = arrayData.filter(x => x[1].classification === 'weight')
    }


    return (
        <Layout>
            <div className="container">

            <p>
              <a className="btn btn-primary btn-lg" href={`?sort=negative`} role="button">Sort by negative</a>
              <a className="btn btn-primary btn-lg" href={`?sort=positive`} role="button">Sort by positive</a>
              <a className="btn btn-primary btn-lg" href={`?sort=neutral`} role="button">Sort by neutral</a>
              <a className="btn btn-primary btn-lg" href={`?sort=weight`} role="button">Sort by weight</a>
              <a className="btn btn-primary btn-lg" href={`/highlights/${id}`} role="button">Not Sort</a>
            </p>

            {sortedData.map(x =>  
            <div class="panel panel-default">
                <div class="panel-heading">{x[0]}</div>
                <a className="btn btn-secondary btn-lg" href={`/details/${id}?query=${x[0]}`} role="button">Details</a>
                {Object.keys(x[1]).forEach(key =>
                    
                <div class="panel-body">{(x[1][key])}</div>
                    )}
            </div>)}
            
            </div>
        </Layout>
    )

}

export default Highlights;