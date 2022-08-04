import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';


export const Graph = (props) => {
    const [width, setWidth] = useState(null)

    useEffect(() => {
        if (props.container.current) {
            setWidth(props.container.current.offsetWidth)
        }

    }, [props.container])

    const data = props.studentData;

    console.log(props.studentData)

    return (
        <LineChart width={width/1.5} height={width/3} data={data}>
            <Line type="monotone" dataKey="prog" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
        </LineChart>
    )

}
