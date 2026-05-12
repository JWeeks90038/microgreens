import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ?? "AIzaSyDwnx5243VefTbtwfIq4ADvHgIzAPqAZ0c",
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ?? "thriving-greens.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ?? "thriving-greens",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ?? "thriving-greens.firebasestorage.app",
  messagingSenderId:
    process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ?? "559530175579",
  appId:
    process.env.NEXT_PUBLIC_FIREBASE_APP_ID ?? "1:559530175579:web:442a4da4eeab705c27a37e",
  measurementId:
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ?? "G-JPE8YR926D",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);

let analyticsInstance: Analytics | null | undefined;

export async function initializeFirebaseAnalytics(): Promise<Analytics | null> {
  if (analyticsInstance !== undefined) {
    return analyticsInstance;
  }

  if (typeof window === "undefined") {
    analyticsInstance = null;
    return analyticsInstance;
  }

  const analyticsSupported = await isSupported().catch(() => false);

  analyticsInstance = analyticsSupported ? getAnalytics(firebaseApp) : null;
  return analyticsInstance;
}

