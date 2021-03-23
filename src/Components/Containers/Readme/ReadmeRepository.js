import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ReadmeFileContent from "./ReadmeFileContent";
import ReadmeFileHeader from "./ReadmeFileHeader";
import { getCode } from "../../../application/Services/CodeService";
function ReadmeRepository({ respository }) {
    const [isReadme, setIsReadme] = useState(false);
    const dispatch = useDispatch();
    const { RX_CODE } = useSelector((state) => state);
    const renderers = {
        code: ({ language, value }) => {
            return <SyntaxHighlighter language={language} children={value} />
        }
    }
    useEffect(() => {
        const find = respository.directorie
            .map((dir) =>
                dir.files.find((file) =>
                    file.name.toString().toLowerCase().startsWith("readme")
                )
            )
            .filter((found) => found != null || found != undefined);
        if (find.length > 0) {
            dispatch(getCode(find[0].url));
            setIsReadme((prev) => true);
        }

        //console.log(readme.url);
    }, []);



















    return (
        <>

            {RX_CODE.code && (
                <div className='readme_file'>

                    <ReadmeFileHeader
                        lines={RX_CODE.code.lines}
                        length={RX_CODE.code.length}
                    />

                    <ReadmeFileContent
                        renderers={renderers}
                        code={RX_CODE.code.content}
                    />




                </div>
            )}
        </>
    );
}

export default ReadmeRepository;
/***/