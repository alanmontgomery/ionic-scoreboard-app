import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { useState } from 'react';
import { addScoreboard } from '../store/MainStore';
import { Details } from './Details';
import { Players } from './Players';

const GenerateModal = ({ dismiss }) => {

  const [ players, setPlayers ] = useState([]);
  const [ details, setDetails ] = useState({});
  const [ showToast ] = useIonToast();

  const save = () => {

    addScoreboard(players, details);
    showToast({
      
      header: "Success",
      message: "Scoreboard added successfully.",
      color: "primary",
      duration: 3500
    });

    dismiss();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={ dismiss }>Close</IonButton>
          </IonButtons>
          <IonTitle>Generate a scoreboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

	  	<IonGrid>
        
        <IonRow className="animate__animated animate__slideInLeft">
          <IonCol size="12">
            <Details details={ details } setDetails={ setDetails } />
          </IonCol>
        </IonRow>

			  <IonRow className="animate__animated animate__slideInLeft">
          <IonCol size="12">
            <Players players={ players } setPlayers={ setPlayers } />         
          </IonCol>
        </IonRow>

        <IonRow className="animate__animated animate__slideInLeft">
          <IonCol size="12">
            <IonButton expand="block" color="primary" onClick={ save }>Save</IonButton>
          </IonCol>
        </IonRow>
		  </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default GenerateModal;