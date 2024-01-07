import * as admin from 'firebase-admin';
import 'server-only';

interface FirebaseAdminAppParams{
    projectID: string;
    clientEmail: string;
    storageBucket: string
    privateKey: string;
}

function formatPrivateKey(key: string)
{
    return key.replace(/\\n/g, "\n");
}


export function createFirebaseAdminApp( params: FirebaseAdminAppParams)
{
    const privateKey = formatPrivateKey(params.privateKey) 

    if(admin.apps.length >0)
    {
        return admin.app();
    }

    const cert = admin.credential.cert({
        privateKey,
        projectId: params.projectID,
        clientEmail: params.clientEmail
    })

    return admin.initializeApp({
        credential: cert,
        projectId: params.projectID,
        storageBucket: params.storageBucket
    });

}

export async function initAdmin() 
{
    const params = {
        projectID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID as string,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET as string,
        privateKey: process.env.FIREBASE_PRIVATE_KEY as string,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL as string,
    };

    return createFirebaseAdminApp(params);
    
}


