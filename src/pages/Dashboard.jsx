import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { arrowForward, arrowUndoOutline, contractOutline } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import GenerateModal from '../components/GenerateModal';
import { MainStore } from '../store';
import { getActiveScoreboard } from '../store/Selectors';

import './Page.css';

const Dashboard = () => {

  const pageRef = useRef();
  const activeScoreboard = useStoreState(MainStore, getActiveScoreboard)

  const [ presentGenerateModal, dismissGenerateModal ] = useIonModal(GenerateModal, {

    dismiss: () => dismissGenerateModal()
  });

  const features = [

    {
      label: "Track scores easily",
      icon: contractOutline
    },
    {
      label: "See previous scoreboards",
      icon: arrowUndoOutline
    }
  ];

  const Feature = ({ feature }) => (

    <IonItem lines="none">
      <IonIcon icon={ feature.icon } />
      <IonLabel className="ion-padding-start">{ feature.label }</IonLabel>
    </IonItem>
  );

  const handleShow = () => {

    presentGenerateModal({

      presentingElement: pageRef.current
    });
  }

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dashboard</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard className="animate__animated animate__slideInLeft">
          <IonCardContent>

            <IonRow className="ion-justify-content-center ion-align-items-center">
              <IonCol size="3">
                <img src="/assets/icons/dashboard_ionicreacthub.png" width="80" height="80" alt="icon" />
              </IonCol>

              <IonCol size="9">
                <IonCardTitle>Ionic Scoreboard</IonCardTitle>
                <p>Track scores easily for games!</p>
              </IonCol>
            </IonRow>

            <IonList>
              { features.map((feature, index) => <Feature key={ index } feature={ feature } /> )}
            </IonList>
          </IonCardContent>
        </IonCard>

        { activeScoreboard &&
        
          <IonCard className="animate__animated animate__slideInLeft active-scoreboard-card">
            <IonCardContent>
              <IonCardTitle>Active Scoreboard</IonCardTitle>

              <IonRow>
                <IonCol size="6">
                  <IonCardSubtitle color="light">Title</IonCardSubtitle>
                  <IonText color="light">
                    <p className="ion-text-wrap">{ activeScoreboard.title }</p>
                  </IonText>
                </IonCol>

                <IonCol size="3" className="ion-text-center">
                  <IonCardSubtitle color="light">Players</IonCardSubtitle>
                  <IonText color="light"> 
                    <p>{ activeScoreboard.players.length }</p>
                  </IonText>
                </IonCol>

                <IonCol size="2">
                  <IonButton disabled={ activeScoreboard.done } color="light" fill="outline" routerLink={ `/page/active-scoreboard/${ activeScoreboard.id }`}>
                    <IonIcon icon={ arrowForward } />
                  </IonButton>
                </IonCol>
              </IonRow>

              { activeScoreboard.done &&
                <IonRow>
                  <IonCol size="12">
                    <IonCardSubtitle color="light">Scoreboard finished.</IonCardSubtitle>
                  </IonCol>
                </IonRow>
              }
            </IonCardContent>
          </IonCard>
        }

        <IonCard className="animate__animated animate__slideInLeft">
          <IonCardContent>
            <IonCardTitle>Ready to get started?</IonCardTitle>
            <IonButton expand="block" className="ion-margin-top" onClick={ handleShow }>Generate a scoreboard &rarr;</IonButton>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
