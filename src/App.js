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
    { headerName: "Priority", field: "priority", sortable: true, filter: true },
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
      <div
        className="ag-theme-alpine"
        style={{ height: "500px", width: "600px", marginTop: "20px" }}>
        <AgGridReact
               columnDefs={columns}
               rowData={todos}
               gridOptions={gridOptions}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;