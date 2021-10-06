import { IonButton, IonButtons, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonModal } from '@ionic/react';
import { arrowUndoCircleOutline, arrowUndoOutline, contract, contractOutline, personOutline, statsChartOutline } from 'ionicons/icons';
import { useRef } from 'react';
import { useParams } from 'react-router';
import GenerateModal from '../components/GenerateModal';

import './Page.css';

const Dashboard = () => {

  const pageRef = useRef();
  const [ present, dismiss ] = useIonModal(GenerateModal, {

    dismiss: () => dismiss()
  })

  const features = [

    {
      label: "Track scores easily",
      icon: contractOutline
    },
    {
      label: "Save players",
      icon: personOutline
    },
    {
      label: "See previous scores",
      icon: arrowUndoOutline,
      
    }
  ];

  const Feature = ({ feature }) => (

    <IonItem lines="none">
      <IonIcon icon={ feature.icon } />
      <IonLabel className="ion-padding-start">{ feature.label }</IonLabel>
    </IonItem>
  );

  const handleShow = () => {

    present({

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
            {/* <IonIcon icon={ statsChartOutline } color="primary" style={{ fontSize: "2rem" }} /> */}

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
