import React from "react";
import RespositoryHeaderNameBox from "./RepositoryPageHeaderItems/RespositoryHeaderNameBox";
import RespositoryHeaderActionsBox from "./RepositoryPageHeaderItems/RespositoryHeaderActionsBox";
function RepositoryPageHeader({ respository }) {
    return (
        <div className="repo_page__header">
            <RespositoryHeaderNameBox {...respository} />
            <RespositoryHeaderActionsBox {...respository} />

        </div>
    );
}

export default RepositoryPageHeader;
