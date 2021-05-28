import React from 'react';
import './TestResult.css'
import CFilesList from "./Components/CFilesList";
import TestEntryTable from "./Components/TestEntryTable";
import {Descriptions, Divider, PageHeader} from "antd";
import Overview from "./Components/Overview";

function TestResult(props) {
    return (
        <div>
            <PageHeader ghost={true} title="Auswertungsprotokoll" subTitle="PPR Testbench">
                <Descriptions size="small" column={1}>

                    <Descriptions.Item className="description-item" label="Name">
                        {props.name}
                    </Descriptions.Item>

                    <Descriptions.Item className="description-item" label="Erstellt">
                        {props.date}
                    </Descriptions.Item>

                </Descriptions>
            </PageHeader>

            <Divider orientation="left">Übersicht</Divider>
            <Overview/>
            <Divider orientation="left">Auswertung</Divider>

            <TestEntryTable entries={props.entries} title={props.title}/>

            <Divider orientation="left">Anhang</Divider>
            {/*<CFilesList files={props.files} />*/}
        </div>
    )
}

export default TestResult;
