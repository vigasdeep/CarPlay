import React from "react";
import { View, Text, Button } from "react-native";
import { TextField } from 'react-native-material-textfield';

export default class AddVehicle extends React.Component {
    state = {
        RegNo: '',
    };
    render() {
        let { RegNo } = this.state;
        return (
            <View style={{ padding: 40 }}>
            <Text style={{fontSize: 24}}>Add Vehicle Details</Text>

                <TextField
                    label='Registration number'
                    value={RegNo}
                    editable={true}
                    onChangeText={(phone) => this.setState({ phone })}
                />
                <TextField
                    label='Date of Purchase'
                    editable={true}
                />
                <TextField
                    label='Name Of Vehicle'
                    editable={true}
                />
                <TextField
                    label='Current Meter Reading'
                    editable={true}
                />
                <TextField
                    label='Engine Type'
                    editable={true}
                />
                <TextField
                    label='Measurement Unit'
                    editable={true}
                />
                <Button
                    title="Save"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}