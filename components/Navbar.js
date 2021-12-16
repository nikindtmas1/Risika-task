//import Link from "next/link";

const Navbar = () => (
    <div className="container">

        <ul className="nav nav-pills">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/"><h3>Search</h3></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={`/highlights/37677892`}><h3>Highlights</h3></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={`/general/37677892?name=risika`}><h3>General</h3></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={`/company/37677892`}><h3>Relations</h3></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={`/basic/37677892`}><h3>Basics</h3></a>
            </li>
        </ul>


        {/* <style jsx>{`
        ul {
            background: #c0c0c0;
            color: #ff0000;
            list-style: none;
            display: flex;
        }

        ul li {
            font-size: 18px;
            margin-right: 20px;
        }

        ul li a {
            color; #ff0000;
            text-decoration: none;
        }
        `}</style> */}
    </div>
);

export default Navbar;

{/* <nav class="navbar navbar-inverse">
            
            ...

            <Link href="/"><a>Search</a></Link>
            ...
            <Link href={`/highlights/37677892`}><a>Highlights</a></Link>
            ...
            <Link href={`/general/37677892?name=risika`}><a>General</a></Link>
            ...
            <Link href={`/company/37677892`}><a>Relations</a></Link>
            ...
            <Link href={`/basic/37677892`}><a>Basics</a></Link>
        </nav> */}