import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./Components/Search";
import Card from "./Components/Card";
// import Pagination from "./Components/Pagination";
// import Filter from "./Components/Filter";
// import Navbar from "./Components/Navbar";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Episodes from "./Pages/Episodes";
// import Location from "./Pages/Location";
// import CardDetails from "./Components/CardDetails";

function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  let { /*info,*/ results } = fetchedData;
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
      console.log(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
        <div className="row">
          <Card results={results} />
          Filter component will be placed here. &nbsp;
          <div className="col-lg-8 col-12">
            <div className="row">Card component will be placed here</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
