import  { BrowserRouter,Routes,Route, useNavigate } from "react-router-dom";
// import Assignment1 from "./components/Assignment1";
// import Assignment2 from "./components/Assignment2";
// import Assignment3 from "./components/Assignment3";
import React, { Suspense } from "react";
const Assignment1 = React.lazy(() => import("./components/Assignment1"));
const Assignment2 = React.lazy(() => import("./components/Assignment2"));
const Assignment3 = React.lazy(() => import("./components/Assignment3"));


function App(){

  return (
    <>
    {/* <Assignment1 />
    <Assignment2 />
    <Assignment3 /> */}

    <BrowserRouter>
    <Appbar />
    <Suspense fallback={<div>Loading...</div>} >
    <Routes>
      <Route path="/assignment1" element={<Assignment1/>} />
      <Route path="/assignment2" element={<Assignment2/>} />
      <Route path="/assignment3" element={<Assignment3/>} />
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=> {
      navigate("/assignment1")
    }}>Assignment1</button>
    <button onClick={()=> {
      navigate("/assignment2")
    }}>Assignment2</button>
    <button onClick={()=> {
      navigate("/assignment3")
    }}>Assignment3</button>

  </div>
}

export default App;