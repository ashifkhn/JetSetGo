import React, { useEffect, useState } from 'react';
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
  Animated
} from 'react-native';
import { ItemSeparator, FlightFromItem, FlightListCommon } from './FlightItem';
import { styles } from './style.modal';
import { commonStyles } from '../../utils/CommonStyle';
import CloseButton from '../CloseButton';
import FlightList from './FlightList';

interface FlightFromProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  flightData: FlightData[];
  sourceDetails: string;
  setSourceDetails: string;
  sortByFare: boolean;
  destinationDetails: string;
  setDestinationDetails: string;
}

const FlightFrom: React.FC<FlightFromProps> = ({ modalVisible, setModalVisible, flightData, sourceDetails, setSourceDetails, sortByFare, destinationDetails, setDestinationDetails }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedAscending, setSortedAscending] = useState(false);
  const [sortByAirlineAscending, setSortByAirlineAscending] = useState(false);
  const [viewSortPopUp, setViewSortPopUp] = useState(false);
  const [animation] = useState(new Animated.Value(0));
  const [sortedFlights, setSortedFlights] = useState([]);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    setSortedFlights(sortFlights());
  }, [flightData, sortedAscending, sortByAirlineAscending]);

  const filteredFlightData = flightData.filter(item => {
    const originCityName = item.origin.toLowerCase();
    const destinationCityName = item.destination.toLowerCase();
    const airline = item.airline.toLowerCase();
    return (
      originCityName.includes(searchQuery.toLowerCase()) ||
      destinationCityName.includes(searchQuery.toLowerCase()) ||
      airline.includes(searchQuery.toLowerCase())
    );
  });

  const sortFlights = () =>  {
    let sorted = filteredFlightData.slice();

    if (sortedAscending) {
      sorted.sort((a, b) => a.price - b.price);
    } else {
      sorted.sort((a, b) => b.price - a.price);
    }

    // if (sortByAirlineAscending) {
    //   sorted.sort((a, b) => a.airline.localeCompare(b.airline));
    // } else {
    //   sorted.sort((a, b) => b.airline.localeCompare(a.airline));
    // }

    return sorted;
  };

  const sortFlightsHighToLow = () => {
    setSortedAscending(false);
    setViewSortPopUp(false);
    setSortedFlights(sortFlights());
  };

  const sortFlightsLowToHigh = () => {
    setSortedAscending(true);
    setViewSortPopUp(false);
    setSortedFlights(sortFlights());
  };

  const viewSortOptions = () => {
    setViewSortPopUp(!viewSortPopUp);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <CloseButton closeHandler={() => setModalVisible(false)} />
          <Text style={styles.modalText}>Select Departure</Text>
          <TextInput
            style={styles.searchBar}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            maxLength={200}
            placeholder="Search City/Airport/Flight"
          />

          <Text style={commonStyles.fontMedBold}>Popular Cities</Text>
          <FlightList />
          <View>
            <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', flexDirection: 'row' }}>
              <Pressable onPress={viewSortOptions}>
                <Text style={commonStyles.fontSmBold}>Sort </Text>
              </Pressable>
              {viewSortPopUp ? (
                <View style={styles.sortPopUp}>
                  <Pressable
                    onPress={sortFlightsHighToLow}
                    style={styles.sortButton}>
                    <Text>High to low</Text>
                  </Pressable>
                  <Pressable
                    onPress={sortFlightsLowToHigh}
                    style={styles.sortButton}>
                    <Text>Low to high</Text>
                  </Pressable>
                </View>
              ) : (
                <View />
              )}
            </View>
            <FlatList
              data={sortedFlights}
              renderItem={({ item }) => (
                <FlightListCommon
                  item={item}
                  sourceDetails={sourceDetails}
                  setSourceDetails={setSourceDetails}
                  setModalVisible={setModalVisible}
                  destinationDetails={destinationDetails}
                  setDestinationDetails={setDestinationDetails}
                />
              )}
              keyExtractor={item => item.id.toString()}
              ItemSeparatorComponent={ItemSeparator}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FlightFrom;
