import React from "react";
import { Link } from "react-router-dom";

const footerFormLinks = ["Terms", "Privacy", "Security", "Contact GitHup"];

function FooterForm() {
    return (
        <footer>
            {footerFormLinks.map((link, index) => (
                <Link key={index} to={link}>
                    {link}
                </Link>
            ))}
        </footer>
    );
}

export default FooterForm;
