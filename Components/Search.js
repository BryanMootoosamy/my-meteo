import React from "react";
import {TextInput, Image, Button, View} from "react-native";
import styles from "../Style.js";
import { StackNavigator } from "react-navigation";
import List from "./List.js";
class Search extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            city: "Ransart"
        }
    }
    setCity (city) {
        this.setState({
            city: city
        })
    }
    submit() {
        this.props.navigation.navigate("Result", {city: this.state.city})
    }
    static navigationOptions = {
        title: "Rechercher une ville",
        tabBarIcon: () => {
            return (<Image source={require('./icons/home.png')} style={{width: 20, height: 20}}/>)
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20}}
                    underlineColorAndroid="transparent"
                    value={this.state.city}
                    onChangeText={ (text) => this.setCity(text)}
                />
                <Button color={styles.color} onPress={() => this.submit()} title="Rechercher une ville" />
            </View>
        )
    }
}
const navigationOptions = {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
}
export default StackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    },
}, )