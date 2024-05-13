import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function createNewRoom(userId: string) : string {
    const newRoom = {
        messages: [],
        participants: [],
    };

    addDoc(collection(db, 'rooms'), newRoom)
    .then((docRef) => {
        console.log("Room added with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding room: ", error);
        return null;
    });

    let newRoomId: string = "new room id";
    return newRoomId;
}

function addMessageToRoom() {

}

function addUserToParticipants(userName: string, userId: string, roomId: string) : boolean {


    return true;
}

function addNewUser() {

}
