import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";
import IncrementValue from "../components/IncrementValue";
import Counter from "../components/Counter";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Example App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IncrementValue />
        <Counter />
      </IonContent>
    </IonPage>
  );
};

export default Home;
