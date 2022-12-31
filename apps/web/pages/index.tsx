import { Text } from '@universal-app/components';
import { styled } from 'nativewind';
import { Pressable as RNPressable, View } from 'react-native';
export const Pressable = styled(RNPressable);

export function Index() {
  return (
    <View>
      <Text className="text-center mt-5 text-blue-600">
        Text using NativeWind
      </Text>

      <Pressable className="bg-blue-400 py-3 rounded-full hover:bg-blue-600 my-5">
        <Text className="dark:text-white text-black text-center text-base font-bold">
          Button
        </Text>
      </Pressable>
    </View>
  );
}

export default Index;
