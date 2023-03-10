import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Nav from "../components/Nav";
import { getAuth } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const user = auth.currentUser;
  const signOut = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("SignUp");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View className="h-full justify-center items-center">
      <Text className="text-xl">Hello {user.email}</Text>
      <TouchableOpacity
        className="bg-gray-600 p-2 m-2 rounded-md"
        onPress={signOut}
      >
        <Text className="text-gray-300">Sign Out</Text>
      </TouchableOpacity>
      <Nav />
    </View>
  );
};

export default ProfileScreen;
