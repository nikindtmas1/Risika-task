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

    if (companyData != undefined) {
        arrayData = Object.entries(companyData);


        if (arrayData[0][0] === title) {
            dataValue = arrayData[0][1]
        } else if (arrayData[1][0] === title) {
            dataValue = arrayData[1][1]
        } else if (arrayData[2][0] === title) {
            dataValue = arrayData[2][1]
        } else if (arrayData[3][0] === title) {
            dataValue = arrayData[3][1]
        } else if (arrayData[4][0] === title) {
            dataValue = arrayData[4][1]
        } else if (arrayData[5][0] === title) {
            dataValue = arrayData[5][1]
        } else if (arrayData[6][0] === title) {
            dataValue = arrayData[6][1]
        } else if (arrayData[7][0] === title) {
            dataValue = arrayData[7][1]
        } else if (arrayData[8][0] === title) {
            dataValue = arrayData[8][1]
        } else if (arrayData[9][0] === title) {
            dataValue = arrayData[9][1]
        } else if (arrayData[10][0] === title) {
            dataValue = arrayData[10][1]
        } else if (arrayData[11][0] === title) {
            dataValue = arrayData[11][1]
        } else if (arrayData[12][0] === title) {
            dataValue = arrayData[12][1]
        } else if (arrayData[13][0] === title) {
            dataValue = arrayData[13][1]
        } else if (arrayData[14][0] === title) {
            dataValue = arrayData[14][1]
        } else if (arrayData[15][0] === title) {
            dataValue = arrayData[15][1]
        } else if (arrayData[16][0] === title) {
            dataValue = arrayData[16][1]
        } else if (arrayData[17][0] === title) {
            dataValue = arrayData[17][1]
        } else if (arrayData[18][0] === title) {
            dataValue = arrayData[18][1]
        } else if (arrayData[19][0] === title) {
            dataValue = arrayData[19][1]
        } else if (arrayData[20][0] === title) {
            dataValue = arrayData[20][1]
        } else if (arrayData[28][0] === title) {
            dataValue = arrayData[28][1]
        }

        Object.keys(dataValue).forEach(key => {
            arrayValues.push(` * ${key}  >>>  ${dataValue[key]}`)
        })
    }

    let result; 

    if(arrayValues){

        result = arrayValues.join('\n');
    }

    return (
        <Layout>
            <textarea className="result" defaultValue={result}></textarea>
            <picture>
            <source srcset="https://s27389.pcdn.co/wp-content/uploads/2021/03/fintech-disruption-of-the-banking-industry-innovation-vs-tradition.jpeg.optimal.jpeg" type="image/svg+xml" />
            <img src="https://s27389.pcdn.co/wp-content/uploads/2021/03/fintech-disruption-of-the-banking-industry-innovation-vs-tradition.jpeg.optimal.jpeg" className="img-fluid img-thumbnail" alt="..." />
            </picture>
            <style jsx>{`
            .result {
            margin: 0px 300px; 
            width: 1090px;
            height: 312px;
            color: blue;
            font-size: large;
            }
            img {
                margin: 0px 300px
            }
            `}</style>
        </Layout>
    );
}

export default BasicDetails;