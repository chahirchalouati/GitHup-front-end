import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Logo from '../Logos/Logo';
const navLinks = [
    "Why GitHub?",
    "Team",
    "Enterprise",
    "Explore",
    "Marketplace",
    "Pricing",
    "Search GitHub",

];
function HomeNav() {
    return (
        <nav style={{ padding: "0px 6em", height: '5em' }}>
            <Logo />

            <div className="nav_box_links" style={{ padding: "0px 2em" }}>
                {navLinks.map((link, i) => (
                    <a
                        style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}
                        key={i}
                        href={"/"}
                        className="nav_link"
                        to={"/" + link.toLowerCase()}
                    >
                        <span>{link}</span>{i % 2 == 0 ? <RiArrowDropDownLine size={25} /> : <span style={{ width: '1em' }}></span>}
                    </a>
                ))}
            </div>        <div className="nav_box_profile">

                <div className="nav_box_profile__item">
                    <div className="nav_box_seacrh">
                        <input type="text" placeholder="Search in GitHap" />
                    </div>
                    <Link to={"/"} style={{ color: 'white', fontSize: '16px' }} className="nav_box_profile__item_drop">
                        Sign in
                </Link>


                </div>

            </div>
        </nav>
    )
}

export default HomeNav
