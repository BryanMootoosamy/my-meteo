import React from "react";
import styles from "../Style.js";
import {View, Text, StyleSheet, Image, Button} from "react-native";

export default class About extends React.Component{
    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('../icons/user.png')} style={{width: 20, height: 20}}/>
        }
    }
    search() {
        this.props.navigation.navigate('Search');
    }
    render(){
        return(
            <View style={style.view}>
                <Text style={style.title}>
                    A propos de l'application
                </Text>
                <Text>Lorem Ipsum wesh</Text>
                <Button color={styles.color} onPress={() => this.search()} title="Rechercher"/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    container: {
        margin: 20
    },
    view: {
        margin: 20
    }
})