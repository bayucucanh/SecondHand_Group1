import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataSellerOrder } from '../../../redux/actions';

function Diminati() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const sellerOrderData = useSelector((state) => state.sellerOrder.sellerOrder);

  useEffect(() => {
    dispatch(getDataSellerOrder(accessToken));
    console.log('Seller Order', sellerOrderData);
  }, []);

  return (
    <View>
      <Text>Diminati</Text>
    </View>
  );
}

export default Diminati;

const styles = StyleSheet.create({});
