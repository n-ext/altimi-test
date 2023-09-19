import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from "@ionic/react";
import { addOutline, removeOutline } from "ionicons/icons";
import React, { useState } from "react";

type Props = {};

const IncrementValue = (props: Props) => {
  const [value, setValue] = useState<number>(1);

  return (
    <IonGrid>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <h1>{value}</h1>
      </IonRow>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonButton onClick={() => setValue(value - 1)}>
          <IonIcon slot="icon-only" icon={removeOutline}></IonIcon>
        </IonButton>
        <IonButton onClick={() => setValue(1)}>Reset</IonButton>
        <IonButton onClick={() => setValue(value + 1)}>
          <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
        </IonButton>
      </IonRow>
    </IonGrid>
  );
};

export default IncrementValue;
