import React, { Component } from "react";
import { Text, View, StyleSheet, SafeAreaView} from "react-native";

export default class CreatePost extends Component {
render(){
    return(
        <View style={{flex: 1, backgroundColor: "white"}}>
            <SafeAreaView style={styles.droidSafeArea}>
                <Text style={styles.text}>
                    Create Post
                </Text>
            </SafeAreaView>
        </View>
    )
}
}
const styles = StyleSheet.create({
	droidSafeArea: {
		marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
	},
    text: {
    color: "white",
    fontSize: RFValue(28),
    }
})