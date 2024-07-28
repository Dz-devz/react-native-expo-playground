import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-start items-center h-full px-4">
          <Image
            source={images.DzLogo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.pen}
            className="max-w-[80px] w-full h-[100px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover the art of a song and a story of the artist{" "}
              <Text className="text-slate-200 font-pbold  underline">
                DzPen
              </Text>
            </Text>
            <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
              Where a Developer and An Artist AKA DevArtisan Discover it's
              passion creating beautiful Art thru Music and Web
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
