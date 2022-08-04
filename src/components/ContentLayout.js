import React, { useEffect, useRef, useState } from "react";
import { Table } from "./Table";
import { Graph } from "./Graph";

import 'handsontable/dist/handsontable.full.css'


export const ContentLayout = (props) => {
    //const [data, setData] = useState()
    const containerRef = useRef(null)

    const handleClick = () => {
        props.setPage(props.nextPage)
    }

    const updateData = (newData) => {
        props.setStudentData(newData)
    }

    return (
        <div className="container-fluid d-flex flex-column vh-100">
            <div className="row mt-auto mb-3 mx-auto">
                <h2>Data for Student Name</h2>
            </div>
            <div className="row mb-auto">
                <div className="col d-flex" ref={containerRef}>
                    <div className="mx-auto">
                        {props.currentPage === "table" ? <Table container={containerRef} update={props.setStudentData} setPage={props.setPage} nextPage={props.nextPage}/> : <Graph container={containerRef} studentData={props.data}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}


