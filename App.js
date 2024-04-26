import React, { useRef } from 'react';
import { Animated, View, Text, Button } from 'react-native';

const AnimatedTextExample = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.Text
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
          fontSize: 24,
        }}>
        Animated Text
      </Animated.Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Fade In" onPress={fadeIn} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default AnimatedTextExample;
