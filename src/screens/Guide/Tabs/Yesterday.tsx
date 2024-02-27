import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import screenSize from '../../../utils/utils';
import { styles } from './Today';
import WeatherContainer from '../../../components/WeatherTabs/WeatherContainer';
import TimeView from '../../../components/WeatherTabs/TimeView';
import { Complete } from '../../../components/WeatherTabs/TimeIndicator';



export const Yesterday = () => {

  return (
        <View style={styles.container}> 
        <TimeView/>
        <View style={styles.barContainer}>
            <View>
                <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                    <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                    <Complete/>
                    <Image source={require("./../../../../assets/Itinenery/filled.png")}style={styles.filledImage}/>
                    <Complete />
                    <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                    <Complete/>
                    <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                </View>
            </View>
        </View>  
                <WeatherContainer/>
        </View>     
  )
}

export default Yesterday


