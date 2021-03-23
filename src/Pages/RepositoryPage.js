import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import RepositoryPageContainer from '../Components/Containers/RespositoryContainer/RepositoryPageContainer';
import RepositoryPageHeader from "../Components/Headers/RepositoryPageHeader";

function RepositoryPage() {

    const { name } = useParams();

    const [currentRepository, setCurrentRepository] = useState(null);

    const { RX_REPOSITORY } = useSelector(state => state);

    useEffect(() => {
        setCurrentRepository(prev => RX_REPOSITORY.repositories.find(repo => repo.name == name));
    }, [RX_REPOSITORY])

    if (currentRepository) {
        return (
            <div className='repo_page'>

                <RepositoryPageHeader
                    respository={currentRepository}
                />
                <RepositoryPageContainer
                    respository={currentRepository}
                />


            </div>
        )
    } else {
        return (
            <div className='repo_page'>

            </div>
        )
    }

}

export default RepositoryPage
