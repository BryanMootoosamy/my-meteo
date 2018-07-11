import React from "react";
import {ActivityIndicator, ListView, Image} from "react-native";
import style from "../Style.js";
import Row from "./weather/Row.js"
import { fetchWeather } from "./fetch.js";
export default class List extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return (<Image source={require('./icons/home.png')} style={{width: 20, height: 20}}/>)
            }
        }
    }
    constructor (props){
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        setTimeout(() => {fetchWeather(this ,this.state.city)}, 1000)
    }
    render() {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={style.color} size="large" />
            )
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return(
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(rowData, j, k) => <Row data={rowData} index={k} />}
                />
            )
        }
    }
}