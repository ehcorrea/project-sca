import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export function Dot({ isFocused }: { isFocused: boolean }) {
  const width = useSharedValue(8);
  const progress = useSharedValue(0);

  useEffect(() => {
    width.value = withSpring(isFocused ? 16 : 8, {
      damping: 10,
      stiffness: 100,
    });
    progress.value = withSpring(isFocused ? 1 : 0, {
      damping: 10,
      stiffness: 100,
    });
  }, [isFocused, progress, width]);

  const viewStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#E3E1E8', '#8A19D6']
    );

    return {
      width: width.value,
      backgroundColor,
    };
  });

  return <Animated.View style={[styles.view, viewStyle]} testID="view-icon" />;
}

const styles = StyleSheet.create({
  view: {
    height: 8,
    borderRadius: 90,
  },
});
