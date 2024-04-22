import React, { useEffect, useRef } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useNavigate } from "react-router-dom";
import { useFormContext } from "react-hook-form";

const AlanContainer = () => {
  const rootElRef = useRef(null);
  const methods = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    alanBtn({
      key: "41611a47cda5163b560077e37e4ec1f12e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "openForm") {
          // props.history.push('/step-two')
          navigate("/step-two");
        }
        if (commandData.command === "getName") {
          methods.setValue("name", commandData.value);
          console.log(commandData.value);
        }
      },
    });
  }, [navigate]);

  return (
    <div>
      <div ref={rootElRef}></div>
    </div>
  );
};

export default AlanContainer;
