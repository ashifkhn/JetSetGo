import { Dimensions } from 'react-native';

const screenSize = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const screenScale = Dimensions.get('window').scale;
  const fontScale = Dimensions.get('window').fontScale;

  return {
    screenWidth,
    screenHeight,
    screenScale,
    fontScale,
  };
};

export const scale= screenSize().fontScale

export function getDate(param: number) {
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() +param);
  const options = { day: 'numeric', month: 'short' };
  return yesterday.toLocaleDateString(undefined, options);
}

 export function calCulateTimePercentage(){
    const { timeOfDay, currentHour } = getTimeOfDay();
    const neededTime=8*60
    const time=neededTime-currentHour*60
    const timePassedPercentage=time/neededTime*100
    return {time,timePassedPercentage,currentHour}
    }

export  function getTimeOfDay() {
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  if (currentHour >= 0 && currentHour < 8) {
    const timeRemaining = (8 - currentHour - currentMinutes / 60).toFixed(2);
    return {
      completed: [{ morning: true, evening: false, night: false }],
      timeOfDay: 'Morning',
      currentHour: parseFloat(timeRemaining),
    };
  } else if (currentHour >= 8 && currentHour < 16) {
    const timeRemaining = (16 - currentHour - currentMinutes / 60).toFixed(2);
    return {
      completed: [{ morning: false, evening: true, night: false }],
      timeOfDay: 'Afternoon',
      currentHour: parseFloat(timeRemaining),
    };
  } else {
    const timeRemaining = (24 - currentHour - currentMinutes / 60).toFixed(2);
    return {
      completed: [{ morning: false, evening: false, night: true }],
      timeOfDay: 'Night',
      currentHour: parseFloat(timeRemaining),
    };
  }
}

export default screenSize;