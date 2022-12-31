/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { Text } from '@universal-app/components';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text className="text-center text-blue-600">
            Text using NativeWind
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
