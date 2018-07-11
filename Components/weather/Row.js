import React from "react";
import {View, Text, StyleSheet} from "react-native";
import moment from "moment";
import styleGlobal from "../../Style.js";
import "moment/locale/fr";
moment.locale('fr');
export default class Row extends React.Component{
    day(){
        let day = moment(this.props.data.dt * 1000).format('ddd');
        return(
            <Text style={[style.white, style.bold]}>{day.toUpperCase()}</Text>
        );
    }
    date(){
        let day = moment(this.props.data.dt * 1000).format('DD/MM');
        return(
            <Text style={style.white}>{day}</Text>
        );
    }
    render(){
        return(
            <View style={style.view}>
                <Text>{this.day()} {this.date()}</Text>
                <Text style={style.temp}>{this.props.data.temp.day}°C</Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    white: {
        color: "#FFF"
    }, 
    bold: {
        fontWeight: "bold"
    },
    view: {
        backgroundColor: styleGlobal.color,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#202340",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    temp: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 22
    }
}) 