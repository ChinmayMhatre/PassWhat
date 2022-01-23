import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Icon, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import * as firebase from "firebase";

import "firebase/firestore";

const New = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (name != "" || password != "") {
      const db = firebase.firestore();

      await db.collection("passwords").doc(name).set({
        password: password,
      });

      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Input
        value={name}
        onChangeText={(text) => setName(text)}
        w={{
          base: "75%",
          md: "25%",
        }}
        mb="2"
        size="md"
        style={styles.input}
        placeholder="Name"
      />
      <Input
        value={password}
        onChangeText={(text) => setPassword(text)}
        w={{
          base: "75%",
          md: "25%",
        }}
        size="md"
        mb="4"
        style={styles.input}
        InputRightElement={
          <TouchableOpacity
            onPress={() => {
              show ? setShow(false) : setShow(true);
            }}
          >
            <Icon
              as={<MaterialIcons name="visibility-off" />}
              size={5}
              mr="2"
              color="muted.400"
            />
          </TouchableOpacity>
        }
        type={show ? "text" : "password"}
        placeholder="Password"
      />
      <Button onPress={handleSubmit} size="lg" variant="outline">
        SUBMIT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  input: {},
});

export default New;
