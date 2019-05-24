import React, {Component} from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'

class PlaceInput extends Component{

    placeNameChangedHandler = (val) => {
        this.setState({jabatan: val})
    }

    render(){
        return(
            <DefaultInput
                placeholder='Jabatan'
                value = {this.props.jabatan}
                onChangeText = {this.props.onChangeText}
            />
        )
    }
}

export default PlaceInput;