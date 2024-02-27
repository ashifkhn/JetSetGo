import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tomorrow } from './Tabs/Tommorow';
import Today from './Tabs/Today';
import { Yesterday } from './Tabs/Yesterday';
import { getDate } from '../../utils/utils';

const Tab = createMaterialTopTabNavigator();

function CustomHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Itinerary Form</Text>
    </View>
  );
}

function GuideTabsWithHeader() {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader />
      <Tab.Navigator
            initialRouteName="Today" 
            screenOptions={{
            tabBarActiveTintColor: "black",
             tabBarStyle:{
  
            },
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: "bold"
            },
            tabBarItemStyle: {
              paddingBottom: 20
            }, 
            tabBarIndicatorStyle: { 
            height:3,
            // width:80,
            // marginLeft:40,
            },
             
        }}
      >
        <Tab.Screen
          name="Yesterday"
          component={Yesterday}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabText,{color: focused ? 'black' : 'gray'} ]}>
                Yesterday{'\n'} <Text style={styles.tabTextSmall}>{getDate(-1)}</Text>
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Today"
          component={Today}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabText,{color: focused ? 'black' : 'gray'} ]}>
                Today{'\n'} <Text style={styles.tabTextSmall}>{getDate(0)}</Text>
              </Text>
            ),
          }}
        />
        <Tab.Screen
          name="Tomorrow"
          component={Tomorrow}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text style={[styles.tabText,{color: focused ? 'black' : 'gray'} ]}>
                Tomorrow{'\n'} <Text style={styles.tabTextSmall}>{getDate(1)}</Text>
              </Text>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default GuideTabsWithHeader;


const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
     paddingTop: 10,
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    padding: 16,
    color: "black",
  },
  tabNavigator: {
    flex: 1,
  },
  tabText:{
     fontSize: 16, 
     fontWeight: 'bold', 
     textAlign: 'center', 
     
  },
  tabTextSmall:{
    fontSize: 12, 
    fontWeight: '300', 
    textAlign: 'center', 
    color: "#000000" 
  }
});