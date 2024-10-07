import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setForm] = useState({
    username: "",
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
          <Text className="text-2xl text-white font-psemibold mt-10">Sign up to Aora</Text>

          <FormField
            title="Username"
            placeholder="Enter your username"
            value={form.username}
            handleChangeText={(e) => setForm({
              ...form, username: e
            })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form, email: e
            })}
            otherStyles="mt-5"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(e) => setForm({
              ...form, password: e
            })}
            otherStyles="mt-5"
            secure
          />


        <CustomButton
          title="Sign In"
          containerStyles="mt-8"
          isLoading={isSubmiting}
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