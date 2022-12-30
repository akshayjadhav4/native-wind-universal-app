import { Text as NativeText, View } from "react-native";

import { styled } from "nativewind";

const Text = styled(NativeText);

export function Index() {
  
  return (
    <View>
      <Text className="text-center text-blue-400 text-2xl">
        NativeWind Working
      </Text>
    </View>
  );
}

export default Index;
