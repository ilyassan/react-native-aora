import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = async() => {
    const {username, email, password} = form;

    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    setIsSubmiting(true);

    try {
      const result = await createUser(email, password, username)

      router.replace("/home")
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmiting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[80vh] justify-center px-4 py-6">

          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode='contain'
          />
          <Text className="text-2xl text-white font-psemibold mt-10">Sign up to Aora</Text>

          <FormField
            title="Username"
            placeholder="Enter your username"
            value={form.username}
            handleChangeText={(text) => setForm({
              ...form, username: text
            })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(text) => setForm({
              ...form, email: text
            })}
            otherStyles="mt-5"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(text) => setForm({
              ...form, password: text
            })}
            otherStyles="mt-5"
            secure
          />


        <CustomButton
          title="Sign Up"
          containerStyles="mt-8"
          isLoading={isSubmiting}
          handlePress={handleSubmit}
        />

        <View className="flex-row justify-center items-center gap-2 pt-5">
          <Text className="text-lg font-pregular text-gray-100 ">
            Already have account?
          </Text>
          <Link href="sign-in" className='text-lg font-psemibold text-secondary'>
            Sign In
          </Link>
        </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp