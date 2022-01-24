import React, { Component } from "react";

import { StyleSheet, ScrollView, ActivityIndicator, View } from "react-native";
import { ListItem } from "react-native-elements";
import * as firebase from "firebase";
import { Icon, Fab } from "native-base";
import { Ionicons } from "@expo/vector-icons";

class HomeScreen extends Component {
  constructor() {
    super();
    this.docs = firebase.firestore().collection("passwords");
    this.state = {
      isLoading: true,
      creds: [],
    };
  }

  componentDidMount() {
    this.unsubscribe = this.docs.onSnapshot(this.getCredsData);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getCredsData = (querySnapshot) => {
    const creds = [];
    querySnapshot.forEach((res) => {
      const data = res.data().password;
      creds.push({
        key: res.id,
        data,
      });
    });
    this.setState({
      creds,
      isLoading: false,
    });
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          {this.state.creds.map((res, i) => {
            return (
              <ListItem key={i} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{res.key}</ListItem.Title>
                  <ListItem.Subtitle>{res.data}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </ScrollView>
        <Fab
          placement="bottom-right"
          colorScheme="blue"
          size="lg"
          icon={<Icon as={Ionicons} name="add" />}
          renderInPortal={false}
          onPress={() => this.props.navigation.navigate("New")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    paddingBottom: 22,
  },
  loader: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default HomeScreen;
