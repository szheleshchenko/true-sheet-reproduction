import { TrueSheet } from '@lodev09/react-native-true-sheet';
import React, { ReactElement, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function Index(): ReactElement {
  const sheetRef = useRef<TrueSheet>(null);
  const [value, setValue] = useState<Date>(new Date());

  return (
    <View style={styles.container}>
      <Pressable onPress={() => sheetRef.current?.present()}>
        <Text>Open sheet</Text>
      </Pressable>
      <TrueSheet grabber={true} ref={sheetRef} sizes={['auto']}>
        <View style={styles.sheet}>
          <DatePicker onDateChange={setValue} mode='time' date={value} minimumDate={new Date()} theme='dark' />
        </View>
      </TrueSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'LightPink',
    opacity: 0.2
  },
  sheet: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'grey'
  }
});
