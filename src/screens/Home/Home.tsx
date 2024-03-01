import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
  Modal,
  Pressable,
  Alert,
  Dimensions,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {scale} from '../../utils/utils';
import StyleConfig from '../../utils/StyleConfig';
import FlightFrom from '../../components/Modals/CustomModal';
import DepartureModal from '../../components/Modals/DepartureDateModal';
import TravelersModal from '../../components/Modals/TravelersModal';
import LinearGradient from 'react-native-linear-gradient';
import {commonStyles} from '../../utils/CommonStyle';

const flightData1 = [
  {
    id: '88jnjn1',
    fare: 3840,
    displayData: {
      source: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Bombay',
          terminal: '3',
          airportCode: 'BOM',
          airportName: 'Bombay Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1dkandnidna',
    fare: 3850,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1djanjdna',
    fare: 3860,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: 'djad1djna',
    fare: 3870,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1dmsnd',
    fare: 3880,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1dajndja',
    fare: 38401,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: 'jdn11jdn1',
    fare: 999999,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1wnj',
    fare: 38140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1www',
    fare: 384000,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1wjnwjw',
    fare: 380140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
  {
    id: '1w1w1w1w1',
    fare: 381140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },

  {
    id: '1wllll',
    fare: 38140,
    displayData: {
      source: {
        airport: {
          cityCode: 'DEL',
          cityName: 'Delhi',
          terminal: '3',
          airportCode: 'DEL',
          airportName: 'Indira Gandhi Airport',
          countryCode: 'IN',
          countryName: 'India',
        },
        depTime: '2023-03-31T06:20',
      },
      airlines: [
        {
          airlineCode: 'AB',
          airlineName: 'JetSpice',
          flightNumber: '1234',
        },
      ],
      stopInfo: 'Non stop',
      destination: {
        airport: {
          cityCode: 'BOM',
          cityName: 'Mumbai',
          terminal: '2',
          airportCode: 'BOM',
          airportName: 'Mumbai',
          countryCode: 'IN',
          countryName: 'India',
        },
        arrTime: '2023-03-31T08:40',
      },
      totalDuration: '2h 20m',
    },
  },
];

const flightData2 = [
  {
    id: 1,
    gate: 'A2',
    price: 5000,
    origin: 'Delhi',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T11:00:00',
    destination: 'Mumbai',
    flightNumber: '6E101',
    departureTime: '2024-03-15T08:00:00',
    seatsAvailable: 120,
  },
  {
    id: 2,
    gate: 'B3',
    price: 6000,
    origin: 'Delhi',
    airline: 'Air India',
    aircraft: 'Boeing 787',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T12:30:00',
    destination: 'Bangalore',
    flightNumber: 'AI202',
    departureTime: '2024-03-15T09:00:00',
    seatsAvailable: 100,
  },
  {
    id: 3,
    gate: 'C1',
    price: 5500,
    origin: 'Mumbai',
    airline: 'SpiceJet',
    aircraft: 'Boeing 737',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T13:30:00',
    destination: 'Delhi',
    flightNumber: 'SG303',
    departureTime: '2024-03-15T10:00:00',
    seatsAvailable: 90,
  },
  {
    id: 4,
    gate: 'D2',
    price: 4500,
    origin: 'Mumbai',
    airline: 'Vistara',
    aircraft: 'Airbus A320',
    duration: '2 hours 30 minutes',
    arrivalTime: '2024-03-15T13:30:00',
    destination: 'Bangalore',
    flightNumber: 'UK404',
    departureTime: '2024-03-15T11:00:00',
    seatsAvailable: 110,
  },
  {
    id: 5,
    gate: 'A4',
    price: 6500,
    origin: 'Bangalore',
    airline: 'GoAir',
    aircraft: 'Airbus A320',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T15:30:00',
    destination: 'Delhi',
    flightNumber: 'G805',
    departureTime: '2024-03-15T12:00:00',
    seatsAvailable: 80,
  },
  {
    id: 6,
    gate: 'B2',
    price: 4000,
    origin: 'Bangalore',
    airline: 'AirAsia',
    aircraft: 'Airbus A320',
    duration: '1 hour 30 minutes',
    arrivalTime: '2024-03-15T14:30:00',
    destination: 'Mumbai',
    flightNumber: 'I505',
    departureTime: '2024-03-15T13:00:00',
    seatsAvailable: 100,
  },
  {
    id: 7,
    gate: 'C3',
    price: 5500,
    origin: 'Delhi',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T12:30:00',
    destination: 'Chennai',
    flightNumber: '6E107',
    departureTime: '2024-03-15T09:30:00',
    seatsAvailable: 120,
  },
  {
    id: 8,
    gate: 'D4',
    price: 4800,
    origin: 'Mumbai',
    airline: 'Air India',
    aircraft: 'Boeing 737',
    duration: '3 hours',
    arrivalTime: '2024-03-15T14:30:00',
    destination: 'Chennai',
    flightNumber: 'AI208',
    departureTime: '2024-03-15T11:30:00',
    seatsAvailable: 90,
  },
  {
    id: 9,
    gate: 'A6',
    price: 6000,
    origin: 'Bangalore',
    airline: 'SpiceJet',
    aircraft: 'Boeing 737',
    duration: '3 hours',
    arrivalTime: '2024-03-15T16:30:00',
    destination: 'Kolkata',
    flightNumber: 'SG309',
    departureTime: '2024-03-15T13:30:00',
    seatsAvailable: 100,
  },
  {
    id: 10,
    gate: 'B7',
    price: 7000,
    origin: 'Delhi',
    airline: 'Vistara',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T17:00:00',
    destination: 'Kolkata',
    flightNumber: 'UK410',
    departureTime: '2024-03-15T14:00:00',
    seatsAvailable: 120,
  },
  {
    id: 11,
    gate: 'C8',
    price: 6200,
    origin: 'Mumbai',
    airline: 'GoAir',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T18:00:00',
    destination: 'Kolkata',
    flightNumber: 'G811',
    departureTime: '2024-03-15T15:00:00',
    seatsAvailable: 80,
  },
  {
    id: 12,
    gate: 'D1',
    price: 5400,
    origin: 'Chennai',
    airline: 'AirAsia',
    aircraft: 'Airbus A320',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T13:30:00',
    destination: 'Delhi',
    flightNumber: 'I513',
    departureTime: '2024-03-15T10:00:00',
    seatsAvailable: 100,
  },
  {
    id: 13,
    gate: 'A3',
    price: 5300,
    origin: 'Chennai',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T15:00:00',
    destination: 'Mumbai',
    flightNumber: '6E113',
    departureTime: '2024-03-15T12:00:00',
    seatsAvailable: 110,
  },
  {
    id: 14,
    gate: 'B5',
    price: 5500,
    origin: 'Chennai',
    airline: 'Air India',
    aircraft: 'Boeing 787',
    duration: '3 hours',
    arrivalTime: '2024-03-15T16:30:00',
    destination: 'Bangalore',
    flightNumber: 'AI216',
    departureTime: '2024-03-15T13:30:00',
    seatsAvailable: 90,
  },
  {
    id: 15,
    gate: 'C4',
    price: 5900,
    origin: 'Kolkata',
    airline: 'SpiceJet',
    aircraft: 'Boeing 737',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T14:30:00',
    destination: 'Delhi',
    flightNumber: 'SG319',
    departureTime: '2024-03-15T11:00:00',
    seatsAvailable: 100,
  },
  {
    id: 16,
    gate: 'D6',
    price: 6100,
    origin: 'Kolkata',
    airline: 'Vistara',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T15:30:00',
    destination: 'Mumbai',
    flightNumber: 'UK424',
    departureTime: '2024-03-15T12:30:00',
    seatsAvailable: 120,
  },
  {
    id: 17,
    gate: 'A7',
    price: 6800,
    origin: 'Kolkata',
    airline: 'GoAir',
    aircraft: 'Airbus A320',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T17:30:00',
    destination: 'Bangalore',
    flightNumber: 'G827',
    departureTime: '2024-03-15T14:00:00',
    seatsAvailable: 80,
  },
  {
    id: 18,
    gate: 'B8',
    price: 5200,
    origin: 'Delhi',
    airline: 'AirAsia',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T18:30:00',
    destination: 'Chennai',
    flightNumber: 'I529',
    departureTime: '2024-03-15T15:30:00',
    seatsAvailable: 90,
  },
  {
    id: 19,
    gate: 'C9',
    price: 5400,
    origin: 'Mumbai',
    airline: 'IndiGo',
    aircraft: 'Airbus A320',
    duration: '3 hours',
    arrivalTime: '2024-03-15T19:00:00',
    destination: 'Chennai',
    flightNumber: '6E139',
    departureTime: '2024-03-15T16:00:00',
    seatsAvailable: 100,
  },
  {
    id: 20,
    gate: 'D10',
    price: 6200,
    origin: 'Bangalore',
    airline: 'Air India',
    aircraft: 'Boeing 787',
    duration: '3 hours 30 minutes',
    arrivalTime: '2024-03-15T20:30:00',
    destination: 'Kolkata',
    flightNumber: 'AI230',
    departureTime: '2024-03-15T17:00:00',
    seatsAvailable: 110,
  },
];

interface FlightData {
  id: number;
  origin: string;
  destination: string;
  airline: string;
  price: number;
}

interface TravelerDetails {
  adults: number;
  children: number;
  infants: number;
}

const Home = () => {
  const [modalVisibleFrom, setModalVisibleFrom] = useState<boolean>(false);
  const [modalVisibleTo, setModalVisibleTo] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [flightData, setFlightData] = useState<FlightData[]>([]);
  const [sourceDetails, setSourceDetails] = useState<string>('');
  const [destinationDetails, setDestinationDetails] = useState<string>('');
  const [modalDeparture, setModalDeparture] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>({});
  const [modalTraveler, setModalTraveler] = useState<boolean>(false);
  const [travelerDetails, setTravelerDetails] = useState<TravelerDetails>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const [selectedClass, setSelectedClass] = useState<string>('Economy');
  const [loader, setLoader] = useState<boolean>(true);

  const swapCities = () => {
    let temp = sourceDetails;
    setSourceDetails(destinationDetails);
    setDestinationDetails(temp);
  };

  const fetchFlightData = async () => {
    console.log('call');
    try {
      console.log('call1');
      // const response = await axios.get(
      //   'https://api.npoint.io/378e02e8e732bb1ac55b',
      // );
      // console.log('Flight data:',response);
      // setFlightData(response.data);
      setFlightData(flightData2);
      setLoader(false);
    } catch (error) {
      console.error('Error fetching flight data:', error);
      // Handle error as needed
    }
  };

  const handleSearchFlights = () => {
    console.log('Searching flights...');
  };

  const renderTravelerDetails = () => {
    let details = travelerDetails?.adults + ' Adults ';

    if (travelerDetails?.children > 0) {
      details += ', ' + travelerDetails.children + ' Children';
    }

    if (travelerDetails?.infants > 0) {
      details += ', ' + travelerDetails.infants + ' Infants';
    }

    return details;
  };

  useEffect(() => {
    fetchFlightData();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8d0b93', '#7524ac', '#7524ac']}
        style={styles.gradient}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0704, 0.9638, 1.5433]}>
        <Text></Text>
      </LinearGradient>
      <View style={styles.formContainer}>
        <View>
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputFromTo}
              onPress={() => setModalVisibleFrom(true)}>
              <Text>Search Flight</Text>
              <TextInput
                placeholder="Select"
                value={
                  sourceDetails && sourceDetails + ' - ' + destinationDetails
                }
                editable={false}
                style={styles.textInput}
              />
            </Pressable>
          </View>
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputDeparture}
              onPress={() => setModalDeparture(true)}>
              <Text>Departure Date</Text>
              <TextInput
                placeholder="Select Date"
                value={selectedDate?.dateString}
                editable={false}
                style={styles.textInput}
              />
            </Pressable>
          </View>
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputDeparture}
              onPress={() => setModalTraveler(true)}>
              <Text>Travelers & Cabin Class</Text>
              <TextInput
                placeholder="Select"
                value={renderTravelerDetails() + ' • ' + selectedClass}
                editable={false}
                style={styles.textInputTravelers}
              />
            </Pressable>
          </View>
          <View style={styles.nonStopFlights}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text>Show Non-stop flights only</Text>
          </View>

          <FlightFrom
            modalVisible={modalVisibleFrom}
            setModalVisible={setModalVisibleFrom}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            flightData={flightData}
            setSourceDetails={setSourceDetails}
            sourceDetails={sourceDetails}
            destinationDetails={destinationDetails}
            setDestinationDetails={setDestinationDetails}
          />

          {/* <FlightTo
            modalVisible={modalVisibleTo}
            setModalVisible={setModalVisibleTo}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            flightData={flightData1}
            setDestinationDetails={setDestinationDetails}
            destinationDetails={destinationDetails}
          /> */}

          <DepartureModal
            modalVisible={modalDeparture}
            setModalVisible={setModalDeparture}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setModalVisible={setModalDeparture}
          />

          <TravelersModal
            modalVisible={modalTraveler}
            setModalVisible={setModalTraveler}
            travelerDetails={travelerDetails}
            setTravelerDetails={setTravelerDetails}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
          />
          <TouchableOpacity
            style={commonStyles.button}
            onPress={handleSearchFlights}>
            <Text style={commonStyles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  gradient: {
    flex: 1,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: '60%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  fromTo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  inputFromTo: {
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: StyleConfig.colors.primary,
    marginHorizontal: 10,
  },
  inputDeparture: {
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: StyleConfig.colors.primary,
    marginHorizontal: 10,
  },

  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  primaryText: {
    fontWeight: 'bold',
  },
  formContainer: {
    // flex: 1,
    // borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#808080',
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: scale(80),
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  textInput: {
    color: StyleConfig.colors.darkGrey,
    fontSize: scale(16),
    // fontWeight: 'bold',
  },
  textInputTravelers: {
    color: StyleConfig.colors.darkGrey,
    fontSize: scale(12),
    // fontWeight: 'bold',
  },
  nonStopFlights: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: scale(20),
    // marginVertical:scale(10)
  },
});

export default Home;
