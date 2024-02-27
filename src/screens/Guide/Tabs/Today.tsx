import { View, Text,StyleSheet, Image ,ActivityIndicator} from 'react-native'
import React,{useEffect,useState} from 'react'
import screenSize, { getTimeOfDay,calCulateTimePercentage } from '../../../utils/utils';
import WeatherContainer from '../../../components/WeatherTabs/WeatherContainer';
import { Complete,PartiallyComplete,InComplete } from '../../../components/WeatherTabs/TimeIndicator';
import TimeView from '../../../components/WeatherTabs/TimeView';



export const scale= screenSize().fontScale

const Today = () => {
  const [loading, setLoading] = useState(true);
  const [completedData, setCompletedData] = useState([]);
  useEffect(() => {
    const { completed } = getTimeOfDay();
    setCompletedData(completed);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0373F3" />
      </View>
    );
  }
  return (
        <View style={styles.container}> 
          <TimeView/>
        <View style={styles.barContainer}>
            {
                completedData.map((data,index)=>{
                    return(
                        <View key={index}>
                            {
                                data?.morning ?
                                <View> 
                                    <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                                    <Image source={require("./../../../../assets/Itinenery/filled.png")}/>
                                    <PartiallyComplete/>
                                    <View style={styles.circle}/>
                                    <InComplete />
                                     <View style={styles.circle}/>
                                    <InComplete/>
                                     <View style={styles.circle}/>
                                    </View>

                                </View>:
                                <View>
                                    {data.evening?
                                <View>
                                    <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                                    <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                                    <Complete/>
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")}style={styles.filledImage}/>
                                    <PartiallyComplete />
                                     <View style={styles.circle}/>
                                    <InComplete/>
                                     <View style={styles.circle}/>
                                    </View>
                                </View>  :
                                <View>
                                <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}> 
                                    <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                                    <Complete/>
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")}style={styles.filledImage}/>
                                    <Complete />
                                     <Image source={require("./../../../../assets/Itinenery/filled.png")} style={styles.filledImage}/>
                                    <PartiallyComplete/>
                                        <View style={styles.circle}/>
                                    </View>
                                </View>  
                                }
                                </View>
                            }   
                        </View>
                    )
                })
            }
        </View>  
        <WeatherContainer/>
        </View>     
  )
}

export default Today


export const styles = StyleSheet.create({
   container:{
    height:screenSize().screenHeight,
    margin:screenSize().screenScale*10,
    marginTop:screenSize().screenScale*20,
    display:"flex",
    flexDirection:"row",
    flex:1
   }, 
   timeView:{
    marginRight:4,
    marginTop:scale*11
   },
   barContainer:{
     marginTop:scale*11
   },

  itineraryContainer: {
    display:"flex",
    flexDirection:"row"
  },
  verticalLine:{
    width:5,
    backgroundColor:"white"
  },
    weatherContainerStart:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    height:scale*122,
  },
  weatherContainer:{
    width:"80%"
  },
  weather:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    height:scale*120,
    width:"100%"
  },
  subTextLight:{
    color:"#B1B1B1",
    fontSize:16,
    fontWeight:"400",
    minWidth:"50%"
  },

  itineraryImage:{
    height:50,
    width:50,
  },
  textAndImage:{
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around"
  },
  circle:{
    width:22,
    height:22,
    borderWidth:2,
    borderColor:"#C4C4C4",
    borderRadius:50
  },
  completedTime:{
    backgroundColor:"#0373F3",
    width:3,
  },
  incompleteTime:{
    backgroundColor:"#C4C4C4",
    width:3,
  },
  titleText:{
    fontWeight:"600",
    fontSize:16,
    color:'#000000'
  },
  subText:{
    color:"#B1B1B1",
    fontWeight:"600",
    fontSize:16,
  },
  weatherIcon:{
    height:50,width:50,
    backgroundColor:"white",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50
  },
  time:{
    fontWeight:"400",
    fontSize:16,
    height:scale*122,
    color:"#000000",
  },
  filledImage:{
    height:scale*22,
    width:scale*22,
    // marginBottom:1
  },
    loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});