import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import "./App.css";
import StepOne from "./component/Step";
import StepTwo from "./component/StepTwo";
import AlanContainer from "./AlanConainer";
import { FormProvider, useForm } from "react-hook-form";

function App() {
  const methods = useForm();
  return (
    <>
      <FormProvider {...methods}>
        <Router>
          <>
            <Routes>
              <Route path="/" element={<StepOne />} />
              <Route path="/step-two" element={<StepTwo />} />
            </Routes>
            <AlanContainer />
          </>
        </Router>
      </FormProvider>
    </>
  );
}

export default App;
