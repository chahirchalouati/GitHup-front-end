import React from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinkItemRepository } from "../../Utils/NavRepoData";
import ReadmeRepository from "../Readme/ReadmeRepository";



function RepositoryPageContainer({ respository }) {
    const { pathname } = useLocation();

    return (
        <div className="repository__container">
            <div className="repository__container_header">
                {navLinkItemRepository.map((link, index) => (
                    <Link
                        className={"repository__container_header_link"}
                        key={index}
                        to={`/repository/${respository.name.toLowerCase()}/${link.path.toLowerCase()}`}
                    >
                        {link.icon} {link.name}
                    </Link>
                ))}
            </div>

            <ReadmeRepository respository={respository} />
        </div>
    );
}

export default RepositoryPageContainer;
