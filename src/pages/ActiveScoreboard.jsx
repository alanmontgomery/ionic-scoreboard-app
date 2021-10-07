import { IonBadge, IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonRow, useIonModal, useIonRouter, useIonViewWillEnter } from '@ionic/react';
import { addOutline, arrowBack } from 'ionicons/icons';
import { useStoreState } from 'pullstate';
import { useRef } from 'react';
import { MainStore } from '../store';
import { getScoreboard } from '../store/Selectors';

import './Page.css';
import styles from "./ActiveScoreboard.module.scss";
import { addScoreToPlayer } from '../store/MainStore';
import FinishModal from '../components/FinishModal';
import { useParams } from 'react-router';

const ActiveScoreboard = () => {

  const pageRef = useRef();
  const headingRef = useRef();
  const router = useIonRouter();
  
  const { id } = useParams();
  const activeScoreboard = useStoreState(MainStore, getScoreboard(id));

  const [ present, dismiss ] = useIonModal(FinishModal, {

    dismiss: () => dismiss()
  });

  useIonViewWillEnter(() => {

		headingRef.current.classList.add("animate__slideInDown");
		headingRef.current.style.display = "";
	});

  const handleAddScore = (index) => {
    
    addScoreToPlayer(activeScoreboard.id, index);
  }

  return (
    <IonPage ref={ pageRef }>
      <IonHeader>
				<div className={ styles.customHeader }>
					<img alt="header" src="/assets/scoreboardheader.jpeg" className="animate__animated animate__slideInRight animate__faster" />

					<div className="ion-justify-content-between">
						<div className={ styles.customBackButton } onClick={ () => router.goBack() }>
							<IonIcon icon={ arrowBack } color="light" />
						</div>
					</div>

					<div className={ `${ styles.mainContent } animate__animated` } ref={ headingRef } style={{ display: "none" }}>

						<IonGrid>
							<IonRow>
								<IonCol size="10">
									<IonCard className={ styles.placeHeading }>
										<IonCardContent>
											<IonCardTitle>{ activeScoreboard.title }</IonCardTitle>
											<p>{ activeScoreboard.players.length } players</p>
										</IonCardContent>
									</IonCard>
								</IonCol>
							</IonRow>
						</IonGrid>
					</div>
				</div>
			</IonHeader>

      <IonContent fullscreen>

        { activeScoreboard.done &&
        
          <IonRow>
            <IonCol size="12" className="ion-text-center">
              <h3>Game has finished.</h3>
            </IonCol>
          </IonRow>
        }

        <IonList>
          { activeScoreboard.players.map((player, index) => {

            return (

              <IonItem lines="none" className={ `${ styles.playerItem } animate__animated animate__fadeIn` }>
                <IonBadge color="light" className="ion-margin-end">{ index + 1 }</IonBadge>
                <IonLabel className="ion-text-wrap">{ player.name }</IonLabel>
                <IonLabel>
                  { player.score } points
                </IonLabel>
                <IonButton disabled={ activeScoreboard.done || !activeScoreboard.active } color="light" onClick={ () => handleAddScore(index) }>
                  <IonIcon icon={ addOutline } />
                </IonButton>
              </IonItem>
            );
          })}
        </IonList>

        <IonButton disabled={ activeScoreboard.done || !activeScoreboard.active } className="ion-padding-start ion-padding-end" expand="block" color="dark" onClick={ () => present({
          presentingElement: pageRef.current
        })}>Finish Game &rarr;</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ActiveScoreboard;