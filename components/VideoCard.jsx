import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'
import { TouchableOpacity } from 'react-native'
import { ResizeMode, Video } from 'expo-av'

const VideoCard = ({ video: { title, thumbnail, video, creator: { username, avatar }} }) => {

    const [play, setPlay] = useState(false);

  return (
    <View className="flex-col px-4 mb-10">
        <View className="flex-row items-center">
            <View className="w-[46px] h-[46px] border border-secondary rounded-lg justify-center items-center p-0.5">
                <Image
                    source={{ uri: avatar}}
                    className="w-full h-full rounded-lg"
                    resizeMode='cover'
                />
            </View>

            <View className="flex-1 ml-2 justify-center">
                <Text className="text-white text-base font-psemibold">{title}</Text>
                <Text className="text-gray-100 text-sm">{username}</Text>
            </View>

            <View>
                <Image
                    source={icons.menu}
                    className="w-5 h-5"
                    resizeMode='contain'
                />
            </View>
        </View>

        { play ? (
            <Video
                source={{ uri: video}}
                className="w-full h-60 rounded-xl mt-3 bg-white/10"
                resizeMode={ResizeMode.CONTAIN}
                useNativeControls
                shouldPlay
                onPlaybackStatusUpdate={(status) => {
                    if (status.didJustFinish) {
                        setPlay(false);
                    }
                }}
            />
        ): (
            <TouchableOpacity
                className="w-full h-60 mt-3 relative justify-center items-center"
                onPress={() => setPlay(true)}
                activeOpacity={0.7}
            >
                <Image
                    source={{ uri: thumbnail }}
                    className="w-full h-full rounded-xl"
                    resizeMode='cover'
                />
                <Image
                    source={icons.play}
                    className="w-12 h-12 absolute"
                    resizeMode='contain'
                />
            </TouchableOpacity>
        )}
    </View>
  )
}

export default VideoCard