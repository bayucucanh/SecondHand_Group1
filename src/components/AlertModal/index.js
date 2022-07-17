import React, { useState } from 'react';
import {
  Alert, Modal, StyleSheet, Text, Pressable, View,
} from 'react-native';
import { t } from 'i18next';
import { COLORS, FONTS, SIZES } from '../../constant';

function AlertModal({
  setModalVisible, modalVisible, title, onPress,
}) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Pressable
              style={[styles.button, styles.buttonClose, { marginRight: 10 }]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>{t('cancelText')}</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={onPress}
            >
              <Text style={{ color: COLORS.white, textAlign: 'center', fontWeight: 'bold' }}>{t('logoutText')}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 90,
  },
  buttonOpen: {
    backgroundColor: COLORS.primaryPurple4,
  },
  buttonClose: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primaryPurple4,
  },
  textStyle: {
    color: COLORS.primaryPurple4,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    ...FONTS.bodyLargeMedium,
    color: COLORS.black,
    marginBottom: SIZES.radius2,
  },
});

export default AlertModal;
