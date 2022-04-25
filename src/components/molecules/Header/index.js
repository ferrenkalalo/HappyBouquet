import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Gap from '../../atoms/Gap';
import {Profile} from '../../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const Header = () => {
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState('');

  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxWidth: 100,
      maxHeight: 100,
      includeBase64: true,
    });
    if (result.didCancel) {
      setHasPhoto(false);
      showMessage({
        message: 'Upload foto profil dibatalkan',
        type: 'default',
        backgroundColor: '#D9435E',
        color: 'white',
      });
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
      console.log(result);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <View style={styles.border}>
          <TouchableOpacity onPress={getPhoto} activeOpacity={0.7}>
            {/* {!hasPhoto && (
              <View style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>Add Photo</Text>
              </View>
            )}
            {hasPhoto !== 0 && (
              <Image source={{uri: photo}} style={styles.avatar} />
            )} */}
            {!hasPhoto && (
              <View style={styles.addPhoto}>
                <Text style={styles.addPhotoText}>Add Photo</Text>
              </View>
            )}
            {hasPhoto !== 0 && (
              <View>
                <Image source={{uri: photo}} style={styles.avatar} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>
      {/* <Profile width="100" height="100" />
      <Gap width={50} height={50} /> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 24,
    paddingHorizontal: 24,
  },
  addPhoto: {
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 90,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90,
  },
  addPhotoText: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    maxWidth: 40,
    textAlign: 'center',
  },
  border: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
