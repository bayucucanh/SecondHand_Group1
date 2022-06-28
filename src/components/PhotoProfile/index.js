import { View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';
import { COLORS, SIZES } from '../../constant';

function PhotoProfile({
  image, setFieldValue, disabled = false, style, icon, colorIcon, styleImage,
}) {
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
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => getImage()}
        disabled={disabled}
      >
        <View
          style={{
            width: 112,
            height: 112,
            backgroundColor: COLORS.primaryPurple1,
            borderRadius: SIZES.radius2,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            ...style,
          }}
        >
          {image ? (
            <Image
              source={photo}
              style={{
                width: 112,
                height: 112,
                ...styleImage,
              }}
            />
          ) : (
            <Icon name={icon} color={colorIcon} size={32} />
          )}
        </View>
      </TouchableOpacity>

    </View>

  );
}

export default PhotoProfile;
