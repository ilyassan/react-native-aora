import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmiting, setIsSubmiting] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[80vh] justify-center px-4 py-6">

          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode='contain'
          />
          <Text className="text-2xl text-white font-psemibold mt-10">Log in to Aora</Text>

          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form, email: e
            })}
            otherStyles="mt-7"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form, password: e
            })}
            otherStyles="mt-7"
            secure
          />


        <CustomButton
          title="Sign In"
          containerStyles="mt-8"
          isLoading={isSubmiting}
        />

        <View className="flex-row justify-center items-center gap-2 pt-5">
          <Text className="text-lg font-pregular text-gray-100 ">
            Don't have account?
          </Text>
          <Link href="sign-up" className='text-lg font-psemibold text-secondary'>
            Sign Up
          </Link>
        </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn