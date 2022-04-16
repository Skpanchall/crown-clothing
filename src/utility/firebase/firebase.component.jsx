import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword} from "firebase/auth";
import {getFirestore, doc,setDoc, getDoc} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC72V2TBPoSRb5UlQg-7zyh8IIbmVpWd_g",
  authDomain: "crown-db-c2abd.firebaseapp.com",
  projectId: "crown-db-c2abd",
  storageBucket: "crown-db-c2abd.appspot.com",
  messagingSenderId: "849704681091",
  appId: "1:849704681091:web:ef6cebb4238626df9425b6",
  measurementId: "G-CJH2W99D9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider  = new  GoogleAuthProvider();

provider.getCustomParameters({
    prompt :"select_account"
});

export const auth = getAuth();
export const signInWithGooglepopup = ()=> signInWithPopup(auth,provider);
export const signInWithGoogleredirect = ()=> signInWithRedirect(auth,provider);
export const db = getFirestore();
export const CreateUserDocumentfromauth =async(auth,additionalinformation = {}) =>{

  const  userDocref = doc(db,'users',auth.uid);
  console.log(additionalinformation)

  const existsuser = await getDoc(userDocref);
  console.log(existsuser.exists())

  if(!existsuser.exists()){
    
    const {displayName,email} = auth;
    const createdAt = new Date();
    console.log(displayName,email)
    try{
       await setDoc(userDocref,{
        displayName,
        email,
        createdAt,
        ...additionalinformation
      });
    }
    catch(eror){
      console.log(eror);
    };
  }
}
export const createauthuserwithemailandpassword = async (email,password)=>{
  if(!email || !password) return ;
  return await createUserWithEmailAndPassword(auth,email,password);

}