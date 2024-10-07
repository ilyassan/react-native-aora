import { Redirect, router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/GlobalProvider";


export default function App() {

  const { isLoggedIn, isLoading } = useGlobalContext();

  if( isLoggedIn && ! isLoading) return <Redirect href="/home"/>;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className="w-full min-h-[85vh] px-4 justify-center items-center">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="w-[380px] h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl font-bold text-white text-center">Discover Endless Possibilities With {" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="absolute w-[136px] h-[15px] -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets inovation: embark on a journey of limitless exploration with Aora</Text>

          <CustomButton
            title="Continue with email"
            containerStyles="w-full mt-7"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}