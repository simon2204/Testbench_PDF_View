import React, {useEffect, useState} from "react";
import CSyntaxHighlighter from "./CSyntaxHighlighter";
import { Collapse } from 'antd';
const { Panel } = Collapse;


function CFilesList({files}) {
    const [submissionFiles, setSubmissionFiles] = useState([])

    useEffect(() => {
        files.forEach(function (file) {
            setSubmissionFiles(file)
        })
    }, [files]);

    function highLightedCFiles() {
        return submissionFiles.map(function (file, key) {
            return (
                <Panel forceRender={true} header={file.name} key={key}>
                    <CSyntaxHighlighter code={file.data}/>
                </Panel>
            )
        })
    }

    return (
        <div style={{padding: "20px"}}>
            <Collapse bordered={false}>
                { submissionFiles.length > 0 && highLightedCFiles() }
            </Collapse>
        </div>
    )
}

export default CFilesList;
