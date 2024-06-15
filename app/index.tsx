import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

// Images
import { images } from '../constants';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} className='bg-primary h-full'>
        <ScrollView contentContainerStyle={{ height: '100%' }}>
          <View className='w-full justify-center items-center h-full px-4'>
            <Image 
              source={images.logo} 
              className='w-[130px] h-[84px] mt-[-60px]'
              resizeMode='contain'
            />
            <Image 
              source={images.cards} 
              className='max-w-[380px] w-full h-[300px]'
              resizeMode='contain'
            />   

            <View className='relative mt-5'>
                <Text className='text-3xl text-white font-bold text-center'>
                    Discover Endless Possibilities with {''}
                    <Text className='text-secondary-200'>Aura</Text>
                </Text>
                <Image
                    source={images.path}
                    className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
                    resizeMode='contain'/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default App;
