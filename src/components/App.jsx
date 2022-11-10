import React from "react";
import { Route, Routes } from "react-router-dom";
import JobList from "./jobList/JobList";
import DetailedJob from "./detailedJob/DetailedJob";
import NotFound from "./notFound/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={ <JobList /> } />
        <Route path="/:jobId" element={<DetailedJob />} />
        <Route path="*" element={ <NotFound /> }/>
      </Routes>
    </>
  );
};

export default App;
