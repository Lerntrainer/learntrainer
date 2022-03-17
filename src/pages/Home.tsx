import { useState } from 'react';
import { Lernen, getMessages } from '../data/lernen';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  useIonViewWillEnter
} from '@ionic/react';
import {settingsOutline, closeCircleOutline} from 'ionicons/icons';
import './Home.css';
import { nextTick } from 'process';

const Home: React.FC = () => {

  const [showModal, setShowModal] = useState(false);
  const [modal, setModal] = useState(0);
  const [lernen, setMessages] = useState<Lernen[]>([]);
  const [showAntwort, setShowAntwort] = useState(false);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  function next(){
    lernen[modal]?.fragen.push(lernen[modal]?.fragen.shift()!)
  }

  function nextr(){
    var nex =  Math.floor(Math.random() * 15);
    if(nex == 0){
      nex = 1
    }
    if(nex >= lernen[modal]?.fragen.length){
      nex = lernen[modal]?.fragen.length-1
    }
    if(lernen[modal]?.fragen.length == 0){
      nex = 0
    }
    lernen[modal]?.fragen.splice(nex, 0, lernen[modal]?.fragen.shift()!)
  }

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar mode="md">
          <IonTitle><h1>Learntrainer</h1></IonTitle>
          <IonButton slot="end">
            <IonIcon icon={settingsOutline}></IonIcon>
        </IonButton >
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {lernen.map(m => <IonButton key={m.id} onClick={() => {setShowModal(true) ; setModal(m.id) ; setShowAntwort(false)}}>{m.titel}</IonButton>)}
        <IonModal isOpen={showModal}>
          <IonHeader translucent>
            <IonToolbar>
              <IonTitle>{lernen[modal]?.titel}</IonTitle>
              <IonButton slot="end" onClick={() => setShowModal(false)}>
                <IonIcon icon={closeCircleOutline}></IonIcon>
              </IonButton>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonButton expand="block" onClick={() => setShowAntwort(true)}>{lernen[modal]?.fragen[0]?.frage}</IonButton>
            {showAntwort && <IonButton expand="block">{lernen[modal]?.fragen[0]?.antwort}</IonButton>}
            {showAntwort && 
              <IonGrid>
                <IonRow>
                  <IonCol><IonButton expand="block" onClick={() => {setShowAntwort(false) ; next()}}>Richtig</IonButton></IonCol>
                  <IonCol><IonButton expand="block" onClick={() => {setShowAntwort(false) ; nextr()}}>Falsch</IonButton></IonCol>
                </IonRow>
              </IonGrid>
            }
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Home;
