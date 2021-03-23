import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/github";
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getCode } from "../../Services/CodeService";

function ContainerCode({ code, language, respository }) {

    const [isReadme, setIsReadme] = useState(false);
    const dispatch = useDispatch();
    const { RX_CODE } = useSelector(state => state);

    useEffect(() => {
        const find = respository.directorie.map(dir =>
            dir.files.find(file => file.name.toString().toLowerCase().startsWith("readme"))).filter(found => found != null || found != undefined)
        if (find.length > 0) {
            dispatch(getCode(find[0].url));
            setIsReadme(prev => true)
        }

        //console.log(readme.url);
    }, [])

    return (

        <> {RX_CODE.code &&

            <Highlight {...defaultProps}  theme={theme} code={RX_CODE.code.content} language={language}>
                {({ tokens, getLineProps, getTokenProps }) => (
                    <pre className="container_code">
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {!isReadme && <span className="column_number">{i + 1} {i <= 8 && " "}{" "}</span>}
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        }
        </>
    )
}

export default ContainerCode
