import { View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import { primaryPurple1, primaryPurple4 } from '../../constant/color';

function PhotoProfile({ image, setFieldValue }) {
  const [photo, setPhoto] = useState(null);
  const [photoForDB, setPhotoForDB] = useState(null);
  const [hasPhoto, setHasPhoto] = useState(false);
  const getImage = () => {
    launchImageLibrary(
      {
        quality: 0.9, maxWidth: 250, maxHeight: 250, includeBase64: true,
      },
      (response) => {
        if (response.didCancel || response.error) {
          // eslint-disable-next-line no-console
          console.log('Cancel Image Pick');
        } else {
          const source = response?.assets[0];
          setPhotoForDB(`data:${source.type};base64, ${source.base64}`);
          const Uri = { uri: source.uri };
          setPhoto(Uri);
          setHasPhoto(true);
          console.log(Uri);
          setFieldValue('image_url', photoForDB);
        }
      },
    );
  };
  return (
    <TouchableOpacity onPress={() => getImage()}>
      <View style={{ alignItems: 'center', marginVertical: 24 }}>
        <View
          style={{
            width: 112,
            height: 112,
            backgroundColor: primaryPurple1,
            borderRadius: 14,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {photo ? (
            <Image
              source={photo}
              style={{
                width: 112,
                height: 112,
              }}
            />
          ) : (
            <Icon name="camera" color={primaryPurple4} size={32} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default PhotoProfile;
