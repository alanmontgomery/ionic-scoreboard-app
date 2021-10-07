import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonNote, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useStoreState } from 'pullstate';
import { useEffect, useState } from 'react';
import { MainStore } from '../store';
import { getActiveScoreboard } from '../store/Selectors';

import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { markActiveAsDone } from '../store/MainStore';


const FinishModal = ({ dismiss }) => {

  const activeScoreboard = useStoreState(MainStore, getActiveScoreboard);
  const [ winner, setWinner ] = useState({});
  const [ width, height ] = useWindowSize();

  useEffect(() => {

    activeScoreboard && setWinner(activeScoreboard.players[0]);
  }, [ activeScoreboard ]);

  const finish = () => {

    markActiveAsDone();
    dismiss();
  }

  return (
    <IonPage>
    <Confetti width={ width } height={ height } />
      <IonHeader>
        <IonToolbar>
          <IonTitle>Results!</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

	  	<IonGrid>
        
        <IonRow className="animate__animated animate__slideInLeft">
          <IonCol size="12">
            <IonCard>   
              <IonCardContent>
                <IonRow>
                  <IonCol size="12" className="ion-text-center">
                    <img alt="winner" height="150" width="150" src="/assets/icons/crown_ionicreacthub.png" />
                    <IonCardTitle>Winner</IonCardTitle>
                    <IonNote>with { winner.score } points</IonNote>
                  </IonCol>
                </IonRow>

                <IonRow>
                  <IonCol size="12" className="ion-text-center">
                    <h1>{ winner.name }</h1>
                  </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>

            <IonButton color="primary" expand="block" className="ion-padding-start ion-padding-end" onClick={ finish }>Done</IonButton>
          </IonCol>
        </IonRow>
		  </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default FinishModal;