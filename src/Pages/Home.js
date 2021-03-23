import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRepositories } from "../application/Services/RepositoryService";
import AsideHome from "../Components/Asides/AsideHome";
import AsiderRightHome from "../Components/Asides/AsiderRightHome";
import PostContainer from "../Components/Containers/PostsContainer/PostContainer";
function Home() {
    const dispatch = useDispatch();
    const { RX_REPOSITORY } = useSelector((state) => state);
    useEffect(() => {
        dispatch(getAllRepositories());
    }, []);

    return (
        <>

            <div className="container__home">
                {RX_REPOSITORY.repositories && (
                    <>

                        <AsideHome listRepository={RX_REPOSITORY.repositories} />
                        <PostContainer />
                        <AsiderRightHome />
                    </>
                )}
            </div>
        </>
    );
}

export default Home;
