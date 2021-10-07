import { IonButton, IonButtons, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import { MainStore } from '../store';
import { getScoreboards } from '../store/Selectors';

import './Page.css';

const PreviousScoreboards = () => {

  const pageRef = useRef();
  const scoreboards = useStoreState(MainStore, getScoreboards)

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Previous Scoreboards</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Previous Scoreboards</IonTitle>
          </IonToolbar>
        </IonHeader>

        { scoreboards.length > 0 &&

          <>
            { scoreboards.map((scoreboard, index) => {

              return (

                <IonCard key={ index } className="animate__animated animate__slideInLeft active-scoreboard-card">
                  <IonCardContent>
                    <IonRow>
                      <IonCol size="6">
                        <IonCardSubtitle color="light">Title</IonCardSubtitle>
                        <IonText color="light">
                          <p className="ion-text-wrap">{ scoreboard.title }</p>
                        </IonText>
                      </IonCol>

                      <IonCol size="3" className="ion-text-center">
                        <IonCardSubtitle color="light">Players</IonCardSubtitle>
                        <IonText color="light"> 
                          <p>{ scoreboard.players && scoreboard.players.length }</p>
                        </IonText>
                      </IonCol>

                      <IonCol size="2">
                        <IonButton color="light" fill="outline" routerLink={ `/page/active-scoreboard/${ scoreboard.id }`}>
                          <IonIcon icon={ arrowForward } />
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonCardContent>
                </IonCard>
              );
            })}
          </>
        }

        { scoreboards.length < 1 &&
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <IonLabel color="primary">
                <h1>No scoreboards to show</h1>
                <p>You can easily add a new one</p>
              </IonLabel>
              <IonButton className="ion-margin-top" color="primary" fill="outline" routerLink="/page/Dashboard">Add one &rarr;</IonButton>
            </IonCol>
          </IonRow>
        }
      </IonContent>
    </IonPage>
  );
};

export default PreviousScoreboards;
