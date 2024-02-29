import React, { useState } from 'react';
import { Modal, View, Text, Pressable, TextInput, FlatList, StyleSheet, Dimensions, Alert } from 'react-native';
import { ItemSeparator, FlightToItem } from './FlightItem';
import { scale } from '../../utils/utils';
import StyleConfig from '../../utils/StyleConfig';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import CloseButton from '../CloseButton';
import { styles } from './style.modal';
const DepartureModal = ({ modalVisible, setModalVisible, selectedDate, setSelectedDate}) => {

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
          {/* {selectedDate} */}
          <CalendarList
            onDayPress={day => {
              console.log('selected day', day);
              setSelectedDate(day);
              setModalVisible(false);
            }}
            pastScrollRange={0}
            futureScrollRange={12}
            showScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DepartureModal;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 20,
//   },

//   fromTo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 20,
//   },

//   inputFromTo: {
//     width: '45%',
//     borderBottomWidth: 1,
//     borderBottomColor: '#0373F3',
//     marginHorizontal: 10,
//     // backgroundColor:"blue"
//   },

//   header: {
//     marginTop: 50,
//     marginBottom: 30,
//   },
//   headerText: {
//     fontSize: 24,
//     color: '#0373F3',
//     textAlign: 'center',
//   },
//   primaryText: {
//     fontWeight: 'bold',
//   },
//   formContainer: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // backgroundColor:"red"
//   },
//   input: {
//     height: 40,
//     width: '80%',
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 20,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#0373F3',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },

//   centeredView: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // marginTop: 22,
//   },
//   modalView: {
//     backgroundColor: 'white',
//     borderRadius: 20,
//     height: Dimensions.get('screen').height,
//     width: Dimensions.get('screen').width,
//     marginTop: 40,
//     // alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   // button: {
//   //   borderRadius: 20,
//   //   padding: 10,
//   //   elevation: 2,
//   // },
//   buttonOpen: {
//     backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     backgroundColor: '#2196F3',
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   searchBar: {
//     marginBottom: scale(20),
//     marginHorizontal: 5,
//     borderBottomWidth: 0.5,
//     fontSize: scale(12),
//     color: StyleConfig.colors.darkGrey,
//   },
// });
