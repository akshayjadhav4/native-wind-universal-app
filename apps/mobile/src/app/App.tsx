/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text as NativeText,
  StatusBar,
} from 'react-native';

import { styled } from 'nativewind';

const Text = styled(NativeText);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text className="text-center font-bold text-blue-400 text-2xl">
            NativeWind Working
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
