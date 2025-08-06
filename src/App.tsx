import { useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Priceing from "./components/Pricing";
import Steps from "./components/Steps";

function App() {
  const [isVisable, setVisability] = useState(false);

  return (
    <>
      <NavBar></NavBar>
      <Home isVisable={isVisable} setVisability={setVisability}></Home>
      <Form isVisable={isVisable}></Form>
      <Features></Features>
      <Steps></Steps>
      <Priceing></Priceing>
      <Footer></Footer>
    </>
  );
}

export default App;
