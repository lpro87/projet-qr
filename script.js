<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD09ASJgRUtalU7mJ8a9s3Lw4OBGhJxAPE",
    authDomain: "clisson-2025.firebaseapp.com",
    databaseURL: "https://clisson-2025-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "clisson-2025",
    storageBucket: "clisson-2025.firebasestorage.app",
    messagingSenderId: "980033637644",
    appId: "1:980033637644:web:70eee4c08ffb65e77f0d29"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

firebase.database().ref("triggered").on("value", (snapshot) => {
    const triggered = snapshot.val();

    if (triggered) {
        console.log("Redirection en cours...");
        // Mettez l'URL cible ici :
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSfTYxM8_a2u5VrEZojRuOKI2mJ-PjcAD30tUBWiEOaG7GX6Vw/viewform";
    }
});




</script>
