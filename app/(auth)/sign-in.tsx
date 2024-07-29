import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "../../constants"

const SignIn = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.DzLogo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold font-psemibold mt-10" >Log In to DzPen Music</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
