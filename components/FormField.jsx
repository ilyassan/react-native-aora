import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants';
import { useState } from 'react';

const FormField = ({title, value, placeholder, handleChangeText, secure = false, otherStyles}) => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 text-base">{title}</Text>
      <View className="h-16 bg-black-100 p-4 rounded-2xl border border-transparent focus:border-secondary items-center justify-between flex-row">
        <TextInput
            selectionColor={"#FF9C01"}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            value={value}
            onChange={handleChangeText}
            className="flex-1 text-white"
            secureTextEntry={secure && !showPassword}
        />
        { secure && 
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                    source={showPassword ? icons.eyeHide : icons.eye}
                    className="h-10 w-10"
                    resizeMode='contain'
                />
            </TouchableOpacity>
        }
      </View>
    </View>
  )
}

export default FormField