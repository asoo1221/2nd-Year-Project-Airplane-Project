
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDxZ1-9MWBd4E-er0r1nHEr4nQ4wbyN1bc",
  authDomain: "y2proj-messaging-b99ab.firebaseapp.com",
  databaseURL: "https://y2proj-messaging-b99ab.firebaseio.com",
  projectId: "y2proj-messaging-b99ab",
  storageBucket: "y2proj-messaging-b99ab.appspot.com",
  messagingSenderId: "328895011464",
  appId: "1:328895011464:web:aa410c59fd3dcab5eb5d3d",
  measurementId: "G-99HEY0EYKR"
  // Use for Google analytics//,
 
};

// name of the the Firebase collection to be used
const COLLECTION_ID = "messages";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Uncomment if using google analytics
// firebase.analytics();

// Get a reference to the database service
let database = firebase.firestore();

/*
    Get all messages
*/
async function getMessagesAsync() {
    // Declare empty array
    let messages = [];
  
    // await calls must be made in try-catch blocks
    try {
      // Get a snapshot of the products collection
      let snapshot = await database.collection(COLLECTION_ID).get();
  
      // use map() to retrieve product document objects from the snapshot - storing each in the array
      // map returns each document from the firestore snapshot
      messages = snapshot.docs.map(doc => {
        return doc;
      });
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    // return the messages array
    return messages;
  }

/*
    Get single message by id from a firebase collection
*/
async function getMessageByIdAsync(id) {
    // Declare empty product
    let message;
  
    // await calls must be made in try-catch blocks
    try {
      // Get product document which matches id
      product = await database.doc(`${FB_COLLECTION}/${id}`).get();
  
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    // return the products array
    return message;
  }


  /*
    Delete single message by id from a firebase collection
*/
async function deleteMessageByIdAsync(id) {
  
    // await calls must be made in try-catch blocks
    try {
      // Get product document which matches id
      await database.doc(`${FB_COLLECTION}/${id}`).delete();
      return true;
  
    } catch (err) {
      // catch errors
      console.log(err);
    }
  
    return false;
  }