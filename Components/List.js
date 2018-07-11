import React from "react";
import {Text, ActivityIndicator, ListView} from "react-native";
import style from "../Style.js";
import Row from "./weather/Row.js"
import { fetchWeather } from "./fetch.js";
export default class List extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / `

        }
    }
    constructor (props){
        super(props);
        this.state = {
            city: 'Ransart',//this.props.navigation.state.params.city,
            report: null
        }
        fetchWeather(this ,this.state.city)
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
                    renderRow={(rowData) => <Row data={rowData} />}
                />
            )
        }
    }
}