import { Text, TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
        className={`bg-secondary p-4 rounded-xl ${containerStyles} ${isLoading && "opacity-50"}`}
        onPress={handlePress}
        activeOpacity={0.7}
        disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg text-center ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton