import React from "react";
import { View, Text, Button } from "react-native";

export default class VehiclesScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>List of Vehicles</Text>
          <Button
            title="Add Vehicle"
            onPress={() => this.props.navigation.navigate('AddVehicle')}
          />
        </View>
      );
    }
  }