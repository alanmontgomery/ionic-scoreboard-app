import { IonCard, IonCardContent, IonCardTitle, IonCol, IonInput, IonItem, IonLabel, IonNote, IonRow } from "@ionic/react";

export const Details = ({ details, setDetails }) => (

	<IonCard>   
    <IonCardContent>
      <IonRow>
        <IonCol size="12">
          <IonCardTitle>Details</IonCardTitle>
          <IonNote>Some basic info</IonNote>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12">
          <IonItem lines="none" className="ion-no-padding">
            <IonLabel position="stacked">Scoreboard title</IonLabel>
            <IonInput value={ details.title } onIonChange={ e => setDetails({ ...details, title: e.target.value })} placeholder="Give your scoreboard a title" />
          </IonItem>
        </IonCol>
      </IonRow>
    </IonCardContent>
  </IonCard>
);