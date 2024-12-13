import React from "react";
import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
export default function Home() {
  const { user } = useAuthStore();

  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
}
