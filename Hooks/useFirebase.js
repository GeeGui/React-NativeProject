import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../Firebase/firebase.config'; // Your firebase config file

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: 'your-google-client-id.apps.googleusercontent.com', // Replace with your Google client ID
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential).then(result => {
                // Handle successful authentication
                setUser(result.user);
            }).catch((error) => {
                // Handle errors here
                setError(error.message);
            });
        }
    }, [response]);

    const signInWithGoogle = async () => {
        await promptAsync();
    };

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // The following useEffect will run once on component mount and subscribe to auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        // Unsubscribe from the listener when the component unmounts
        return unsubscribe;
    }, []);

    return {
        user,
        error,
        signInWithGoogle,
        logout,
    };
};

export default useFirebase;