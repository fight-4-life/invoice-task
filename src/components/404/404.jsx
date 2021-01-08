import React from 'react'
import { useHistory } from "react-router-dom";

import {Result, Button} from "antd";

export const NotFound = () => {
    let history = useHistory()

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button
                onClick={() => {
                    history.push(`/login`)
                }}
                type="primary">To Login Page</Button>}
        />
    )
}