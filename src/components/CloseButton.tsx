import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from '../utils/utils';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleConfig from '../utils/StyleConfig';

interface CloseButtonProps {
  closeHandler: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({closeHandler}) => {
  return (
    <Pressable
      style={styles.container}
      onPress={closeHandler}>
      <Icon name={'close'} size={32} color={StyleConfig.colors.greyLabel} />
    </Pressable>
  );
};

export default CloseButton;


const styles = StyleSheet.create({
  container: {
    marginTop: scale(20),
    marginHorizontal: scale(5),
  },
});