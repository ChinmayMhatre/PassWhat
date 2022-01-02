import React from "react";
import { View, Text,StyleSheet } from "react-native";
import {  Icon, Fab } from "native-base";
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
    return (
            <View style={styles.container}>
                <Text>Home</Text>
            
            <Fab
                placement="bottom-right"
                colorScheme="blue"
                size="lg"
                icon={<Icon as={Ionicons} name="add" />}
                renderInPortal = {false}
                onPress={() => navigation.navigate('New')}
            />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },  
});


export default HomeScreen;
