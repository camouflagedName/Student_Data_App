import React, { useEffect, useState } from 'react';
import './App.css';
import { ProgDir } from './components/ProgDir';
import { ContentLayout } from './components/ContentLayout';
import { Graph } from './components/Graph'

function App() {

  const [page, setPage] = useState("dir1")
  const [pageComp, setPageComp] = useState()
  const [studentData, setStudentData] = useState()

  const handleClick = (page) => {
    setPage(page)
  }

  useEffect(() => {
    switch (page) {
      case "dir1": setPageComp(<ProgDir setPage={handleClick} nextPage={'table'} />)
        break
      case "table": setPageComp(<ContentLayout updateData={updateData} setPage={handleClick} currentPage={"table"} nextPage={'dir2'} setStudentData={setStudentData} />)
        break
      case "dir2": setPageComp(<ProgDir setPage={handleClick} nextPage={'graph'}/>)
        break
      case "graph": setPageComp(<ContentLayout setPage={handleClick} currentPage={"graph"} nextPage={'dir3'} data={studentData}/>)
        break
      case "dir3": setPageComp(<ProgDir />)
        break
      case "report": break

    }
  }, [page])


  const updateData = (dataObject) => {
    setStudentData(dataObject)
  }

  return (
    <div className="App">
      {pageComp}
    </div>
  );
}

export default App;
