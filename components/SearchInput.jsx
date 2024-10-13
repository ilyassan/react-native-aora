import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { icons } from '../constants';

const SearchInput = ({value, handleChangeText}) => {

  return (
      <View className="w-full space-x-4 h-16 bg-black-100 p-4 rounded-2xl border border-transparent focus:border-secondary items-center justify-between flex-row">
        <TextInput
            selectionColor={"#FF9C01"}
            placeholder="Search for a video topic"
            placeholderTextColor="#7b7b8b"
            value={value}
            onChangeText={handleChangeText}
            className="text-base font-pregular flex-1 text-white"
        />
        <TouchableOpacity>
            <Image
                source={icons.search}
                className="h-5 w-5"
                resizeMode='contain'
            />
        </TouchableOpacity>
      </View>
  )
}

export default SearchInput