import React from 'react'
import {useHistory} from "react-router-dom";

import {Table} from 'antd';
import './Buyers.css'

export const Buyers = (props) => {
    let history = useHistory();
    const columns = [
        {
            title: 'Покупатели',
            children: [
                {
                    title: 'ID покупателя',
                    dataIndex: 'id',
                    render: id => <a onClick={() => {
                        history.push(`buyers/${id}`)
                        props.getBuyerPage(id)
                    }}>{id}</a>,
                },
                {
                    title: 'Имя покупателя',
                    dataIndex: 'name',
                    filters: [
                        {
                            text: 'John',
                            value: 'John',
                        },
                        {
                            text: 'Jim',
                            value: 'Jim',
                        },
                        {
                            text: 'Joe',
                            value: 'Joe',
                        },
                    ],
                    filterMultiple: false,
                    onFilter: (value, record) => record.name.indexOf(value) === 0,
                },
                {
                    title: 'Средний чек',
                    dataIndex: 'average',
                    sorter: {
                        compare: (a, b) => a.average - b.average,
                        multiple: 3,
                    },
                },
                {
                    title: 'Количество покупок',
                    dataIndex: 'count',
                    sorter: {
                        compare: (a, b) => a.count - b.count,
                        multiple: 2,
                    },
                },
                {
                    title: 'Общая выручка',
                    dataIndex: 'total',
                    sorter: {
                        compare: (a, b) => a.total - b.total,
                        multiple: 1,
                    },
                },]
        }
    ];
    const data = props.buyers

    return (
        <div className={'table'}>
            <Table columns={columns}
                   dataSource={data}
                // onChange={onChange}
                   bordered
                   pagination={{
                       pageSizeOptions: [5, 10, 15],
                       showSizeChanger: true,
                       defaultPageSize: 5,
                       position: ['topRight']
                   }}
            />
        </div>
    )
}