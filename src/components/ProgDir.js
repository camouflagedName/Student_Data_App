import React, { useEffect, useState } from "react";

export const ProgDir = (props) => {
    const [buttonState, setButtonState] = useState("Input Data")
    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        setIsDisabled(props.nextPage === 'graph' ? false : true)
    }, [props.nextPage])

    const handleClick = () => {
        props.setPage(props.nextPage)
    }

    return (
        <div className="d-flex flex-column container-fluid vh-100 main-bg-md">
            <div className="row text-center mt-auto mb-5">
                <h1 className="catchy-title">Catchy Name</h1>
            </div>
            <div className="col-10 offset-1 mb-auto">
                <div className="row ">
                    <div id="data" className="col-4 offset-4">
                        <div className="card border border-5 border-dark">
                            <button className="btn btn-primary-outline" type="button" onClick={handleClick} >
                                <div className="text-center mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" fill="currentColor" className="bi bi-table" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
                                    </svg>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Input Data</h5>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mb-auto text-center">
                    <div id="graph" className="col">
                        <div className="card border border-5 border-dark">
                            <button className="btn btn-primary-outline" type="button" onClick={handleClick} disabled={isDisabled}>
                                <div className="text-center mt-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" />
                                    </svg>
                                </div>

                                <div className="card-body">
                                    <h5 className="card-title">Create Graph</h5>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div id="arrowLeft" className="col d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" fill="currentColor" className="bi bi-arrow-return-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z" />
                        </svg>
                    </div>
                    <div id="arrowRight" className="col d-flex justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" fill="currentColor" className="bi bi-arrow-return-right" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.5 1.5A.5.5 0 0 0 1 2v4.8a2.5 2.5 0 0 0 2.5 2.5h9.793l-3.347 3.346a.5.5 0 0 0 .708.708l4.2-4.2a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 8.3H3.5A1.5 1.5 0 0 1 2 6.8V2a.5.5 0 0 0-.5-.5z" />
                        </svg>
                    </div>
                    <div id="report" className="col">
                        <div className="card border border-5 border-dark">
                            <div className="text-center mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
                                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                    <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Generate Report</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}