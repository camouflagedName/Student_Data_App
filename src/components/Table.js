import React, { useState, useEffect, useRef } from "react"
import { HotTable, HotColumn } from "@handsontable/react"

import { registerAllModules, registerAllPlugins } from 'handsontable/registry'

export const Table = (props) => {
    const [tableData, settableData] = useState([{ "date": null, "desc": null, "prog": null, "ex": null }])
    const [width, setWidth] = useState(null)

    useEffect(() => {
        if (props.container.current) {
            setWidth(props.container.current.offsetWidth)
        }

    }, [props.container])

    const tableSettings = {
        colWidths: [width / 8, width / 4, width / 8, width / 4]
    }

    const handleClick = () => {
        props.update(tableData)
        props.setPage(props.nextPage)
    }

    return (
        <>
            <HotTable
                settings={tableSettings}
                licenseKey='non-commercial-and-evaluation'
                afterChange={(outerIndex) => {
                    if (outerIndex) {
                        const map = new Map()
                        const index = outerIndex[0]
                        const row = index[0]
                        const col = index[1]
                        const prevData = index[2]
                        const currData = index[3]

                        let colName = col === 0 ? "date" : col === 1 ? "desc" : col === 2 ? "prog" : "ex"
                        settableData(prevDataArr => {

                            if (prevDataArr[row] === undefined) {
                                prevDataArr[row] = { "date": null, "desc": null, "prog": null, "ex": null }
                            }
                            let updateObject = prevDataArr[row]

                            updateObject[colName] = currData
                            prevDataArr.splice(row, 1, updateObject)
                            return prevDataArr
                            //let currRow = prevDataArr[row]
                            //console.log(currRow)
                        })
                    }

                }}
            >
                <HotColumn title="Date Created" />
                <HotColumn title="Description" />
                <HotColumn title="Progress" />
                <HotColumn title="Example" />
            </HotTable>

            <div className="row mb-auto mt-5 mx-auto">
                <div className="col d-flex justify-content-center">
                    <button className="btn btn-success" type="button" onClick={handleClick}>Submit</button>
                </div>
            </div>
        </>
    )
}