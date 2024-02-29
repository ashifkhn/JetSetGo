import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import StyleConfig from './StyleConfig';
import { scale } from './utils';


export const commonStyles = StyleSheet.create({
    fontMedBold:{
        fontSize:scale(16),
        fontWeight:"bold",
        color:StyleConfig.colors.black,
        marginLeft:scale(10)

    }
});
