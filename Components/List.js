import React from "react";
import {Text} from "react-native";
export default class List extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo / ${navigation.state.params.city}`

        }
    }
    constructor (props){
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
    }
    render() {
        return(
            <Text>Résultat</Text>
        )
    }
}