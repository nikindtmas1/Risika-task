import Link from "next/link";

const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/company"><a>Company</a></Link></li>
        </ul>
        <style jsx>{`
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
        `}</style>
    </div>
);

export default Navbar;