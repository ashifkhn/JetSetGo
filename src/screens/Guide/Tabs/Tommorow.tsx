import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import screenSize from '../../../utils/utils';
import { styles } from './Today';
import WeatherContainer from '../../../components/WeatherTabs/WeatherContainer';
import { InComplete,Complete } from '../../../components/WeatherTabs/TimeIndicator';
import TimeView from '../../../components/WeatherTabs/TimeView';


export const Tomorrow = () => {
  return (
        <View style={styles.container}> 
        <TimeView/>
        <View style={styles.barContainer}>
            <View>
                <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                    <View style={styles.circle}/>
                    <InComplete />
                    <View style={styles.circle}/>
                    <InComplete/>
                    <View style={styles.circle}/>
                    <InComplete/>
                    <View style={styles.circle}/>
                </View>
            </View>
        </View>  
            <WeatherContainer/>
        </View>    
  )
}

export default Tomorrow


