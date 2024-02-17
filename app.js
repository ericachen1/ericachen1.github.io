const firebaseConfig = {
    apiKey: "AIzaSyAyo27u_KVwQQsijBGvHcBcQGYE-KOX-Co",
    authDomain: "personal-website-a7734.firebaseapp.com",
    projectId: "personal-website-a7734",
    storageBucket: "personal-website-a7734.appspot.com",
    messagingSenderId: "298348417083",
    appId: "1:298348417083:web:c7e1a6f8af7af5cc1e0c1e",
    measurementId: "G-PQPS86CCQS"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

function submitText() {
    const inputText = document.getElementById('textInput').value;

    if (inputText.trim() !== '') {
        firestore.collection('texts').add({
            text: inputText,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log('Text submitted successfully!');
        })
        .catch((error) => {
            console.error('Error submitting text: ', error);
        });
    } else {
        console.log('Input is empty. Please enter text.');
    }
}
