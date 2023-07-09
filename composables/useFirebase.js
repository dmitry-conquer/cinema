import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export async function createUser(email, password) {
  const auth = getAuth();
  const credential = await createUserWithEmailAndPassword(auth, email, password).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credential;
}

export async function signIn(email, password) {
  const auth = getAuth();
  const credential = await signInWithEmailAndPassword(auth, email, password).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return credential;
}

export function signOutUser() {
  const auth = getAuth();
  const result = signOut(auth).catch(error => {
    console.log(error);
  });
  return result;
}
