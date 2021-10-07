import { IonButton, IonCard, IonCardContent, IonCardTitle, IonCol, IonList, IonNote, IonRow } from "@ionic/react";
import { Player } from "./Player";

export const Players = ({ players, setPlayers }) => {

  const handlePlayerChange = (e, index, field) => {

    const newValue = e.target.value;
    const newPlayers = [ ...players ];
    
    newPlayers[index][field] = newValue;
    setPlayers(newPlayers);
  }

  const handleAdd = () => {
    
    const tempPlayer = {

      name: "",
      score: 0
    };

    setPlayers([ ...players, tempPlayer ]);
  }

  const handleRemove = index => {

    setPlayers(current => current.filter((c, i) => i !== index));
  }

	return (

		<IonCard>
      <IonCardContent>
        <IonRow>
          <IonCol size="9">
            <IonCardTitle>Players</IonCardTitle>
            <IonNote>Add some players</IonNote>
          </IonCol>

          <IonCol size="3">
            <IonButton color="primary" onClick={ handleAdd }>Add</IonButton>
          </IonCol>
        </IonRow>

        { players.length > 0 &&
        
          <IonList className="ion-margin-top ion-padding-top">
            { players.map((player, index) => <Player key={ index } player={ player } index={ index } handleChange={ handlePlayerChange } handleRemove={ handleRemove } /> )}
          </IonList>
        }
      </IonCardContent>
    </IonCard>
	);
}