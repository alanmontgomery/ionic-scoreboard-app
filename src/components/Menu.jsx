import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { arrowUndoOutline, arrowUndoSharp, pieChartOutline, pieChartSharp } from 'ionicons/icons';
import './Menu.css';

const appPages = [
  {
    title: 'Dashboard',
    url: '/page/Dashboard',
    iosIcon: pieChartOutline,
    mdIcon: pieChartSharp
  },
  {
    title: 'Previous scoreboards',
    url: '/page/Previous',
    iosIcon: arrowUndoOutline,
    mdIcon: arrowUndoSharp
  }
];

const Menu = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Ionic Scoreboard</IonListHeader>
          <IonNote>An awesome scoreboard</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
