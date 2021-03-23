import React from "react";
import { useSelector } from "react-redux";
import Logo from "../Logos/Logo";
import ProfileBox from "./ProfileBox";
const navLinks = ["Pull requests", "Issues", "Marketplace", "Explore"];

function NavBar() {
    const {
        RX_AUTH: { role, isAuthenticated },
    } = useSelector((state) => state);
    if (isAuthenticated) {
        return (
            <nav>
                <Logo />
                <div className="nav_box_seacrh">
                    <input type="text" placeholder="Search or jump to ..." />
                </div>

                <div className="nav_box_links">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={"/"}
                            className="nav_link"
                            to={"/" + link.toLowerCase()}
                        >
                            {link}
                        </a>
                    ))}
                </div>
                {isAuthenticated && <ProfileBox />}
            </nav>
        );
    }
    return <></>;
}

export default NavBar;
