import React, { useState } from "react";
import "./App.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  // ag-grid komponentin sarakkeet
  const columns = [
    { headerName: "Description", field: "description", sortable: true, filter: true },
    { headerName: "Date", field: "date", sortable: true, filter: true },
    { headerName: "Priority", field: "priority", sortable: true, filter: true,
      cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
  ];

  // ag-grid komponentin ominaisuudet
  const gridOptions = {
    // Floating filter ominaisuuden päälle kytkeminen
    floatingFilter: true,
    // Row animation ominaisuuden päälle kytkeminen
    animateRows: true,
  };

  return (
    <div className="App">
      <TodoList todos={todos} setTodos={setTodos} />
      <div className="ag-theme-material" style={{height: '700px', width: '70%', margin: 'auto'}} >
        <AgGridReact rowSelection="single" columnDefs={columns} rowData={todos} />
      </div>
    </div>
  );
}

export default App;