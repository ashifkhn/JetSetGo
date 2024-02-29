import React, {useState, useEffect, useCallback, useMemo, useRef} from 'react';
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
  ScrollView
} from 'react-native';
import axios from 'axios';
import {scale} from '../../utils/utils';
import StyleConfig from '../../utils/StyleConfig';
import FlightFrom from '../../components/WeatherTabs/CustomModal';
import FlightTo from '../../components/WeatherTabs/FlightTo';
import DepartureModal from '../../components/WeatherTabs/DepartureDateModal';
import TravelersModal from '../../components/WeatherTabs/TravelersModal';
import LinearGradient from 'react-native-linear-gradient';
// import { ScrollView } from 'react-native-gesture-handler';


// CustomModal

const Home = () => {
  const [modalVisibleFrom, setModalVisibleFrom] = useState(false);
  const [modalVisibleTo, setModalVisibleTo] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [flightData, setFlightData] = useState([]);
  const [sourceDetails, setSourceDetails] = useState({})
  const [destinationDetails, setDestinationDetails] = useState({})
  const [modalDeparture, setModalDeparture] = useState(false)
  const [selectedDate, setSelectedDate]=useState({})
  const [modalTraveler, setModalTraveler] = useState(false)
  const [travelerDetails,setTravelerDetails] = useState({
    adults: 1,
    children: 0,
    infants: 0
  })

  const fetchFlightData = async () => {
    try {
      const response = await axios.get(
        'https://api.npoint.io/4829d4ab0e96bfab50e7',
      );
      console.log('Flight data:', JSON.stringify(response.data.data.result));
      setFlightData(response.data.data.result);
    } catch (error) {
      console.error('Error fetching flight data:', error);
      // Handle error as needed
    }
  };

  const handleSearchFlights = () => {
    // Implement flight search logic here
    console.log('Searching flights...');
  };

  useEffect(() => {
    fetchFlightData();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#8d0b93', '#7524ac']}
        style={{
          flex: 1,
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: '60%',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
        start={{x: 1, y: 0}}
        end={{x: 1, y: 1}}
        locations={[0.0704, 0.9638, 1.5433]}>
        <Text></Text>
      </LinearGradient>

      <View style={styles.formContainer}>
        <View>
          {/* <Text></Text> */}
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputFromTo}
              onPress={() => setModalVisibleFrom(true)}>
              <Text>FROM</Text>
              <TextInput
                placeholder="Select City"
                value={sourceDetails?.airport?.cityName}
                editable={false}
              />
            </Pressable>
            <Pressable
              style={styles.inputFromTo}
              onPress={() => setModalVisibleTo(true)}>
              <Text>TO</Text>
              <TextInput
                placeholder="Select City"
                value={destinationDetails?.airport?.cityName}
                onChangeText={text => setToLocation(text)}
                editable={false}
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

              />
            </Pressable>
          </View>
          <View style={styles.fromTo}>
            <Pressable
              style={styles.inputDeparture}
              onPress={() => setModalTraveler(true)}>
              <Text>Travelers & Cabin Class</Text>
              <TextInput
                placeholder="Select "
                value={selectedDate?.dateString}
                editable={false}
              />
            </Pressable>
          </View>
          <FlightFrom
            modalVisible={modalVisibleFrom}
            setModalVisible={setModalVisibleFrom}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            flightData={flightData}
            setSourceDetails={setSourceDetails}
            sourceDetails={sourceDetails}
          />

          <FlightTo
            modalVisible={modalVisibleTo}
            setModalVisible={setModalVisibleTo}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            flightData={flightData}
            setDestinationDetails={setDestinationDetails}
            destinationDetails={destinationDetails}
          />

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
            selectedDate={travelerDetails}
            setSelectedDate={setTravelerDetails}
            setModalVisible={setModalTraveler}
          />
          <TouchableOpacity style={styles.button} onPress={handleSearchFlights}>
            <Text style={styles.buttonText}>Search Flights</Text>
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

  fromTo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },

  inputFromTo: {
    width: '45%',
    borderBottomWidth: 1,
    borderBottomColor: '#881098',
    marginHorizontal: 10,
  },
  inputDeparture: {
    width: '95%',
    borderBottomWidth: 1,
    borderBottomColor: '#881098',
    marginHorizontal: 10,

  },

  header: {
    marginTop: 50,
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    color: '#0373F3',
    textAlign: 'center',
  },
  primaryText: {
    fontWeight: 'bold',
  },
  formContainer: {
    // flex: 1,
    // borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#808080',
    padding: 20,
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
  button: {
    backgroundColor: '#881098',
    paddingVertical: 10,
    // paddingHorizontal: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    textAlign: 'center',
    marginVertical: scale(10),
  },
  buttonText: {
    color: 'white',
    fontSize: scale(14),
    textAlign: 'center',
    fontWeight:"bold"

  },
});

export default Home;
