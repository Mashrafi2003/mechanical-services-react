import { getAuth, signInWithPopup, GoogleAuthProvider, signOut , onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () =>{
    const [users , setUsers] = useState({});
    const auth = getAuth();

    const signinUsingGoogle = () =>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUsers(result.user);
        });

    }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUsers({})
            }
            else{

            }
        });
        return ()=> unsubscribed;
    },[]);

    const logOut = () =>{
        signOut(auth)
        .then(()=>{

        });
    }
    
    return{
        users,
        signinUsingGoogle,
        logOut,
    };
};

export default useFirebase;