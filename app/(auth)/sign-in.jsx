import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] px-4 py-6">

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
            value={form.email}
            handleChangeText={(e) => setForm({
              ...form, password: e
            })}
            otherStyles="mt-7"
            secure
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn