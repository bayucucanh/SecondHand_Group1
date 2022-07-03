import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Loading, NotificationCard } from '../../../components';

function Terjual() {
  return (
    <View>
      <NotificationCard
        image="https://picsum.photos/48"
        name="Jam Tangan Casio"
        date="20 Apr, 14:04"
        price="Rp. 250.000"
        status="bid"
        isSeen={false}
      />
    </View>
  );
}

export default Terjual;

const styles = StyleSheet.create({});
