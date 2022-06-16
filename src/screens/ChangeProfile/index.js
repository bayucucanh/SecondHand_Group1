import {
  View, Text, TextInput, ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import SelectDropdown from 'react-native-select-dropdown';
import { RectButton } from 'react-native-gesture-handler';
import {
  neutral1, neutral2, neutral3, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';

function ChangeProfile() {
  const countries = [
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
    'Brazil',
    'England',
    'Dubai',
    'France',
    'Germany',
    'Saudi Arabia',
    'Argentina',
    'India',
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{
        flex: 1, backgroundColor: neutral1, paddingTop: 24, marginBottom: 32,
      }}
      >
        <View style={{
          height: 52,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Icon name="arrow-left" color={primaryPurple4} size={24} style={{ position: 'absolute', left: 16 }} />
          <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5 }}>Lengkapi info akun</Text>
        </View>
        <View style={{ alignItems: 'center', marginVertical: 24 }}>
          <View style={{
            width: 112,
            height: 112,
            backgroundColor: primaryPurple1,
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          >
            <Icon name="camera" color={primaryPurple4} size={32} />
          </View>
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral5 }}>Nama*</Text>
          <View style={{
            borderRadius: 16,
            borderWidth: 2,
            borderColor: neutral2,
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}
          >
            <TextInput style={{ fontFamily: 'Poppins-Regular', fontSize: 14, textAlignVertical: 'bottom' }} placeholder="Nama" />
          </View>
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral5, marginTop: 16,
          }}
          >
            Kota*
          </Text>
          <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText="Pilih kota"
            buttonTextAfterSelection={(selectedItem) => selectedItem}
            rowTextForSelection={(item) => item}
            buttonStyle={{
              borderRadius: 16,
              borderWidth: 2,
              borderColor: neutral2,
              backgroundColor: neutral1,
              justifyContent: 'center',
              paddingHorizontal: 16,
              width: '100%',
            }}
            buttonTextStyle={{
              fontFamily: 'Poppins-Regular', fontSize: 14, textAlign: 'left',
            }}
            renderDropdownIcon={(isOpened) => <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} color="#444" size={18} />}
            dropdownIconPosition="right"
            dropdownStyle={{ backgroundColor: neutral1 }}
            rowStyle={{ backgroundColor: neutral1, borderBottomColor: neutral3 }}
            rowTextStyle={{
              fontFamily: 'Poppins-Regular', fontSize: 14, textAlign: 'left',
            }}
            search
            searchInputStyle={{
              backgroundColor: neutral1,
              borderRadius: 16,
              borderBottomWidth: 1,
              borderBottomColor: neutral3,
            }}
            searchPlaceHolder="Cari kota"
            searchPlaceHolderColor={neutral3}
            renderSearchInputLeftIcon={() => <Icon name="search" color={neutral3} size={18} />}
          />
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral5, marginTop: 16,
          }}
          >
            Alamat*
          </Text>
          <View style={{
            borderRadius: 16,
            borderWidth: 2,
            borderColor: neutral2,
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}
          >
            <TextInput
              multiline
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                textAlignVertical: 'top',
                height: 80,
              }}
              placeholder="Contoh: Jalan Ikan Hiu 33"
            />
          </View>
          <Text style={{
            fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral5, marginTop: 16,
          }}
          >
            No Handphone*
          </Text>
          <View style={{
            borderRadius: 16,
            borderWidth: 2,
            borderColor: neutral2,
            justifyContent: 'center',
            paddingHorizontal: 16,
          }}
          >
            <TextInput
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
                textAlignVertical: 'bottom',
              }}
              placeholder="contoh: +628123456789"
            />
          </View>
          <RectButton style={{
            height: 48,
            width: '100%',
            alignItems: 'center',
            alignContent: 'center',
            paddingVertical: 12,
            backgroundColor: primaryPurple4,
            borderRadius: 12,
            marginTop: 24,
          }}
          >
            <Text style={{
              fontFamily: 'Poppins-Medium', fontSize: 16, color: neutral1, marginLeft: 8, textAlignVertical: 'center',
            }}
            >
              Simpan
            </Text>
          </RectButton>
        </View>
      </View>
    </ScrollView>
  );
}

export default ChangeProfile;
