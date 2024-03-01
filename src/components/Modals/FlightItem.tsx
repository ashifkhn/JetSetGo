import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {scale} from '../../utils/utils';
import {commonStyles} from '../../utils/CommonStyle';

interface FlightItemProps {
  item: {
    displayData: {
      source: {
        airport: {
          cityName: string;
          airportName: string;
          airportCode: string;
        };
      };
      destination: {
        airport: {
          cityName: string;
          airportName: string;
          airportCode: string;
        };
      };
    };
    fare: number;
    origin: string;
    destination: string;
    duration: string;
    price: number;
    airline: string;
  };
  sourceDetails: string;
  setSourceDetails: React.Dispatch<React.SetStateAction<string>>;
  destinationDetails: string;
  setDestinationDetails: React.Dispatch<React.SetStateAction<string>>;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemSeparator: React.FC = () => {
  return <View style={{height: 1, backgroundColor: 'lightgrey'}} />;
};

const FlightFromItem: React.FC<FlightItemProps> = ({
  item,
  setSourceDetails,
  setModalVisible,
}) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: scale(20),
        marginHorizontal: scale(10),
      }}
      onPress={() => {
        console.log(item.displayData.source);
        setSourceDetails(item.displayData.source.airport.cityName);
        setModalVisible(false);
      }}>
      <View style={{flex: 1}}>
        <Text>{item.displayData.source.airport.cityName}</Text>
        <Text>{item.displayData.source.airport.airportName}</Text>
      </View>
      <View style={{display: 'flex', alignItems: 'flex-end'}}>
        <Text>{item.displayData.source.airport.airportCode}</Text>
        <Text>₹{item.fare}</Text>
      </View>
    </Pressable>
  );
};

const FlightToItem: React.FC<FlightItemProps> = ({
  item,
  setDestinationDetails,
  setModalVisible,
}) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: scale(20),
        marginHorizontal: scale(10),
      }}
      onPress={() => {
        console.log(item.displayData.destination);
        setDestinationDetails(item.displayData.destination.airport.cityName);
        setModalVisible(false);
      }}>
      <View style={{flex: 1}}>
        <Text>{item.displayData.destination.airport.cityName}</Text>
        <Text>{item.displayData.destination.airport.airportName}</Text>
      </View>
      <View>
        <Text>{item.displayData.destination.airport.airportCode}</Text>
        <Text>₹{item.fare}</Text>
      </View>
    </Pressable>
  );
};

const FlightListCommon: React.FC<FlightItemProps> = ({
  item,
  setSourceDetails,
  setDestinationDetails,
  setModalVisible,
}) => {
  return (
    <Pressable
      style={{
        flexDirection: 'row',
        marginVertical: scale(20),
        marginHorizontal: scale(10),
      }}
      onPress={() => {
        console.log(item.destination);
        console.log(item.origin);
        setSourceDetails(item.origin);
        setDestinationDetails(item.destination);
        setModalVisible(false);
      }}>
      <View style={{flex: 1}}>
        <Text style={commonStyles.fontSmBold}>{item.origin} - </Text>
        <Text style={commonStyles.fontSmBold}>{item.destination}</Text>
        <Text>Duration: {item.duration}</Text>
      </View>
      <View style={{display: 'flex', alignItems: 'flex-end'}}>
        <Text>₹{item.price}</Text>
        <Text>{item.airline}</Text>
      </View>
    </Pressable>
  );
};

export {FlightFromItem, ItemSeparator, FlightToItem, FlightListCommon};
