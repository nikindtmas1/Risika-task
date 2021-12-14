import Head from "next/head";
import Navbar from "./Navbar";
import Link from "next/link";

const Layout = (props) => (
    <div>
        <Head>
            <title>Risika</title>
            {/* <Link rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css" /> */}
        </Head>
        <Navbar />
        
        {props.children}
    </div>

);

export default Layout;