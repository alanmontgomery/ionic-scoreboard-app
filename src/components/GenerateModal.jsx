import { IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { arrowUndoCircleOutline, arrowUndoOutline, contract, contractOutline, personOutline, statsChartOutline } from 'ionicons/icons';
import { useRef } from 'react';

const GenerateModal = ({ dismiss }) => {

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

      </IonContent>
    </IonPage>
  );
};

export default GenerateModal;
