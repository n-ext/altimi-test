import { IonButton, IonGrid, IonRow } from "@ionic/react";
import React, { useEffect, useState } from "react";

type Props = {};

const Counter = (props: Props) => {
  const [value, setValue] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  if (isRunning) {
    useEffect(() => {
      setInterval(() => {
        setValue((v) => v + 1);
      }, 1000);
    }, [isRunning]);
  } else {
    useEffect(() => {}, [isRunning]);
  }

  const toggleCounter = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setValue(0);
  };

  return (
    <IonGrid>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <h1>{value}</h1>
      </IonRow>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonButton onClick={toggleCounter}>
          {isRunning ? "Stop" : "Start"}
        </IonButton>
        <IonButton onClick={reset}>Reset</IonButton>
      </IonRow>
    </IonGrid>
  );
};

export default Counter;
