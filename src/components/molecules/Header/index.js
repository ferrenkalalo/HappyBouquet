import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Gap from '../../atoms/Gap';
import {Profile} from '../../../assets';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const Header = () => {
  // const [photo, setPhoto] = useState('');
  // const [hasPhoto, setHasPhoto] = useState('');

  // const getPhoto = async () => {
  //   const result = await launchImageLibrary({
  //     maxWidth: 100,
  //     maxHeight: 100,
  //     includeBase64: true,
  //   });
  //   if (result.didCancel) {
  //     setHasPhoto(false);
  //     showMessage({
  //       message: 'Upload foto profil dibatalkan',
  //       type: 'default',
  //       backgroundColor: '#D9435E',
  //       color: 'white',
  //     });
  //   } else {
  //     setPhoto(result.assets[0].uri);
  //     setHasPhoto(true);
  //     console.log(result);
  //   }
  // };
  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const getPhoto = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      includeBase64: true,
    });
    if (result.didCancel) {
      setHasPhoto(false);
      showMessage({
        message: 'CANCELED!',
        type: 'default',
        backgroundColor: '#FFC7C7',
        color: 'black',
      });
    } else {
      setPhoto(result.assets[0].uri);
      setHasPhoto(true);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getPhoto}>
        {!hasPhoto && <Profile width="100" height="100" />}
        {hasPhoto && <Image source={{uri: photo}} style={styles.avatar} />}
      </TouchableOpacity>
      {/* tambah disini itu yang da taru di wa 1:55PM */}
      <Gap width={50} height={50} />
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
    height: 100,
    width: 100,
    borderRadius: 100,
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
    width: 120,
    height: 120,
    borderRadius: 120,
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
