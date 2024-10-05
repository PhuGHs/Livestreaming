import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import background from '../assets/images/background.png';


const WelcomeScreen = () => {
    return (
        <View className="bg-[#346DF5] h-full p-4 flex flex-col justify-between items-center">
            <View className="w-[90%] flex flex-col space-y-4">
                <View className="flex flex-col items-center justify-center space-y-4 mt-[10%]">
                    <Text className=" w-[70%] font-Chocolate_Demi text-2xl text-center text-white">Go Live, Anywhere, Anytime</Text>
                    <Text className="font-Chocolate_Regular text-base text-center text-white">Connect with your audience instantly. Share your moments, stream your passions, and grow your community in real-time.</Text>
                </View>
                <Image source={background} className="flex w-full h-[300px]" resizeMode="contain"/>
            </View>

            <View className="w-full flex flex-col justify-center items-center">
                <TouchableOpacity className="bg-white rounded-full py-3 w-full">
                    <Text className="text-[#346DF5] font-Chocolate_Medium text-xl text-center">Start a live</Text>
                </TouchableOpacity>
                <TouchableOpacity className="rounded-full py-3 w-full">
                    <Text className="text-white font-Chocolate_Medium text-xl text-center">Watch a live</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default WelcomeScreen;
