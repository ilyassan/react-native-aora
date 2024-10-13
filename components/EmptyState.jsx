import { View, Text, Image } from 'react-native'
import CustomButton from './CustomButton'
import { images } from '../constants'
import { router } from 'expo-router'

const EmptyState = ({ subTitle, title}) => {
  return (
    <View className="justify-center items-center px-4" >
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode='contain'
      />

        <Text className="text-xs font-pmedium text-gray-100">{subTitle}</Text>
        <Text className="text-white text-2xl font-psemibold mt-2">{title}</Text>

        <CustomButton
            title="Create video"
            handlePress={() => router.push("/create")}
            containerStyles="w-full my-5"
        />
    </View>
  )
}

export default EmptyState