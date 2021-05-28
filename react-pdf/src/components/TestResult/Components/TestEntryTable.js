import React from 'react'
import {Table} from "antd";
import {StatusTag} from "./StatusTag";

const columns = [
    {
        title: 'Testfall',
        dataIndex: 'testcase',
        key: 'testcase',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (text, record) => <StatusTag status={record.status}/>,
    },
];

function entriesToData() {
    let data = [];

    let i;
    for (i = 0; i < 30; i++) {
        const dataEntry = {
            key: i,
            testcase: "Testfall",
            status: 'success'
        }
        data.push(dataEntry);
    }

    return data;
}

function TestEntryTable(props) {
    return (
        <div style={{padding: "0 20px 0 20px"}}>
            <Table
                columns={columns}
                dataSource={entriesToData()}
                title={() => props.title}
                pagination={{pageSize: 500, position: []}}
            />
        </div>
    )
}

export default TestEntryTable;
