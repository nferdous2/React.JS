import initializeAuthentication from "../components/Firebase/firebase.init";

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication()
const provider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState()

    const auth = getAuth();
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user)
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {

            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {

        });
    }

    return {
        user,
        logOut,
        signInWithGoogle,
    }
};

export default useFirebase;