import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class PlaceInput extends Component{

    placeNameChangedHandler = (val) => {
        this.setState({usia: val})
    }

    render(){
        return(
            <DefaultInput
                placeholder='Usia'
                value = {this.props.usia}
                onChangeText = {this.props.onChangeText}
            />
        )
    }
}

export default PlaceInput;