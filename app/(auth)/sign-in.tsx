import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "../../constants"
import FormField from "../../components/FormField";

import CustomButton from "../../components/CustomButton";

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {

  }
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={images.DzLogo} resizeMode="contain" className="w-[115px] h-[35px]" />
          <Text className="text-2xl text-white text-semibold font-psemibold mt-10" >Log In to DzPen Music</Text>
        
          <FormField 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e}) }
          otherStyles="mt-7"
          keyboardType="email-address"
          placeholder
          />
          <FormField 
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e}) }
          otherStyles="mt-7"
          placeholder
          />

          <CustomButton
            title="Sign in"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
            textStyles
           />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
