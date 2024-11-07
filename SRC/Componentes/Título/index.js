import React from "react";
import { View, Text } from "react-native";
import Styles from "./style";

export default function Title(){
    return(
        <View  style={Styles.BoxTitle}>
            <Text style={Styles.textTitle}>Trabalho DDM G2</Text>
        </View>
    );
}