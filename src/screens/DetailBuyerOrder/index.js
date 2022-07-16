import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';

function DetailBuyerOrder({ route }) {
  const { orderId } = route.params;

  useEffect(() => {
    console.log(orderId);
  }, []);

  return (
    <View>
      <Text>DetailBuyerOrder</Text>
    </View>
  );
}

export default DetailBuyerOrder;

const styles = StyleSheet.create({});
