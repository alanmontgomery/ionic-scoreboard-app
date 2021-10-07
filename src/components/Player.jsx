import { IonCheckbox, IonCol, IonIcon, IonInput, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonRow } from "@ionic/react";
import { trashOutline } from "ionicons/icons";

export const Player = ({ player, index, handleChange, handleRemove }) => {

  return (

    <IonItemSliding>
      <IonItem className="ion-no-padding animate__animated animate__fadeIn" lines="full">
        <IonRow>

          <IonCol size="12">
            <IonLabel position="stacked">Name</IonLabel>
            <IonInput value={ player.name } onIonChange={ e => handleChange(e, index, "name") } placeholder="Enter a name" type="text" enterkeyhint="done" />
          </IonCol>
        </IonRow>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption color="danger" style={{ paddingLeft: "1rem", paddingRight: "1rem" }} onClick={ () => handleRemove(index) }>
          <IonIcon icon={ trashOutline } />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
}