import { View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import { primaryPurple1, primaryPurple4 } from '../../constant/color';

function PhotoProfile({ image, setFieldValue }) {
  const [photo, setPhoto] = useState(image);
  const [hasPhoto, setHasPhoto] = useState(false);
  const getImage = () => {
    launchImageLibrary(
      {
        maxWidth: 112, maxHeight: 112,
      },
      (response) => {
        if (response.didCancel || response.error) {
          // eslint-disable-next-line no-console
          console.log('Cancel Image Pick');
        } else {
          const source = response?.assets[0];
          const Uri = { uri: source.uri };
          setPhoto(Uri);
          setHasPhoto(true);
          setFieldValue('image_url', source, true);
        }
      },
    );
  };
  return (
    <View style={{ alignItems: 'center', marginVertical: 24 }}>
      <TouchableOpacity
        onPress={() => getImage()}
      >
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
          {image.uri ? (
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
      </TouchableOpacity>

    </View>

  );
}

export default PhotoProfile;
