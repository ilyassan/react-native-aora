import { View, Text, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import images from "../../constants/images"
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import EmptyState from '../../components/EmptyState'
import VideoCard from "../../components/VideoCard"
import { getAllPosts, getLatestPosts } from "../../lib/appwrite"
import useAppwrite from '../../lib/useAppwrite'

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latesetPosts } = useAppwrite(getLatestPosts);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async() => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts ?? []}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) => (
          <VideoCard video={item} />
        )}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">

            <View className="flex-row justify-between items-start">

              <View>
                <Text className="text-xs font-pmedium text-gray-100">Welcom Back</Text>
                <Text className="text-white text-2xl font-psemibold">Ilyass</Text>
              </View>

              <View>
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode='contain'
                />
              </View>
            </View>

            <View>
              <SearchInput/>
            </View>

            <View className="w-full pt-5 pb-8 flex-1">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
              </Text>

              <Trending posts={latesetPosts}/>
            </View>

          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            subTitle="Be the first one to upload a video"
            title="No Videos Found"
          />
        )}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      />

    <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  )
}

export default Home