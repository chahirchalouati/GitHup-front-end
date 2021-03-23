import React from 'react'
import ReactMarkdown from 'react-markdown'

function ReadmeFileContent({ renderers, code }) {
    return (
        <div className="readme_file_content">
            <ReactMarkdown renderers={renderers} children={code}></ReactMarkdown>
        </div>
    )
}

export default ReadmeFileContent
