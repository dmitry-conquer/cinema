import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useFirebaseStore } from "~/stores/firestoreUser";

export async function createUser(email, password) {
  const auth = getAuth();
  const { user } = await createUserWithEmailAndPassword(auth, email, password).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  await setDoc(doc(useNuxtApp().$db, "users", user.uid), {
    name: `Petro - ${email}`,
    password: password,
    uid: user.uid,
  });
}

export async function signIn(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      const { $toast } = useNuxtApp();
      $toast(`Успішний вхід! - ${email}`, {
        autoClose: 2000,
        type: $toast.TYPE.SUCCESS,
        hideProgressBar: false,
        position: $toast.POSITION.TOP_RIGHT,
      });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function signOutUser() {
  const auth = getAuth();
  signOut(auth).catch(error => {
    console.log(error);
  });
}

export async function initUser() {
  const firebaseStore = useFirebaseStore();
  const auth = getAuth();
  onAuthStateChanged(auth, async user => {
    const { $db } = useNuxtApp();
    if (user) {
      console.log("Signed in", user);
      const docRef = doc($db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        firebaseStore.updateUser(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } else {
      console.log("Signed out", user);
      firebaseStore.updateUser(null);
    }
  });
}
