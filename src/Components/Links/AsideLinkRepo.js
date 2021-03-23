import React from 'react'
import { RiGitRepositoryLine, RiGitRepositoryPrivateLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import CODE_TYPES from '../../application/types/CODE_TYPES';


function AsideLinkRepo({ repository, to, className }) {
    const dispatch = useDispatch();
    if (repository) {
        return (
            <Link className={className} onClick={e => { dispatch({ type: CODE_TYPES.GET_CODE_RESET }) }} to={{ pathname: to, state: { id: repository.id } }}>
                {repository.isPrivate
                    ? <RiGitRepositoryPrivateLine fill={"orange"} size={20} />
                    : <RiGitRepositoryLine fill={"gray"} size={20} />}
                { repository.name}
            </Link>
        )
    } else {
        return <></>
    }

}

export default AsideLinkRepo

