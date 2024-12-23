import './navbar.css';
import Link from 'next/link';
import { AiOutlineWeiboCircle } from "react-icons/ai";
import Image from 'next/image';
// import Cosmotech from "/assets/cosmotech.png";

interface link {
    name: string;
    href: string;
}

const links: link[] = [
    {
        name: "Home", href: "/home"
    },
    {
        name: "Features", href: "/features"
    },
    {
        name: "FAQs", href: "/faq"
    },
    {
        name: "About", href: "/about"
    },
    {
        name: "Contact", href: "/contact"
    },
];

export default function navbar() {
    return (
        <div className="nav-container">
            <Link
                className="logo-container"
                href="/">
                <Image
                    className='logo'
                    src="/assets/cosmotech.png"
                    width={55}
                    height={55}
                    alt="Cosmotech" />
                <span className="logo-label">Cosmotech</span>
            </Link>
            <div className="nav-links">
                {links.map(({ name, href }) => (
                    <Link
                        key={name}
                        href={href}
                        className='links'
                    >
                        <span className="link-label">{name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};