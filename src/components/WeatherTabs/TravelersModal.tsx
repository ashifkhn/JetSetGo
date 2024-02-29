import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import {ItemSeparator, FlightToItem} from './FlightItem';
import {scale} from '../../utils/utils';
import StyleConfig from '../../utils/StyleConfig';
import {CalendarList, LocÅaleConfig} from 'react-native-calendars';
import { styles } from './style.modal';
import CloseButton from '../CloseButton';
styles

const TravelersModal = ({
  modalVisible,
  setModalVisible,
  travelerDetails,
  setTravelerDetails,
}) => {
  const [adults, setAdults] = useState(1); // Initial number of adults
  const [children, setChildren] = useState(0); // Initial number of children
  const [infants, setInfants] = useState(0); // Initial number of infants

  // Function to handle incrementing the number of adults
  const incrementAdults = () => {
    setAdults(adults + 1);
  };

  // Function to handle decrementing the number of adults (minimum 1 adult)
  const decrementAdults = () => {
    if (adults > 1) {
      setAdults(adults - 1);
    }
  };

  // Function to handle incrementing the number of children
  const incrementChildren = () => {
    setChildren(children + 1);
  };

  // Function to handle decrementing the number of children (minimum 0 children)
  const decrementChildren = () => {
    if (children > 0) {
      setChildren(children - 1);
    }
  };

  // Function to handle incrementing the number of infants
  const incrementInfants = () => {
    setInfants(infants + 1);
  };

  // Function to handle decrementing the number of infants (minimum 0 infants)
  const decrementInfants = () => {
    if (infants > 0) {
      setInfants(infants - 1);
    }
  };
  // const [selected, setSelected] = useState('');
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CloseButton closeHandler={() => setModalVisible(false)} />
          <Text style={styles.modalText}>Select Date</Text>

          {/* Display current counts and buttons to increment/decrement */}
          <View style={styles.countContainer}>
            <Text>Adults: {adults}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button2} onPress={decrementAdults}>
                <Text>-</Text>
              </Pressable>
              <Pressable style={styles.button2} onPress={incrementAdults}>
                <Text>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.countContainer}>
            <Text>Children: {children}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button2} onPress={decrementChildren}>
                <Text>-</Text>
              </Pressable>
              <Pressable style={styles.button2} onPress={incrementChildren}>
                <Text>+</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.countContainer}>
            <Text>Infants: {infants}</Text>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button2} onPress={decrementInfants}>
                <Text>-</Text>
              </Pressable>
              <Pressable style={styles.button2} onPress={incrementInfants}>
                <Text>+</Text>
              </Pressable>
            </View>
          </View>

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.textStyle}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default TravelersModal;

