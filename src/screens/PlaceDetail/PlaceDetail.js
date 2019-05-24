import React, { Component } from 'react'
import {View, Image, Text, Button, StyleSheet, TextInput} from 'react-native'
import { connect } from 'react-redux'
import {Fire} from '../../firebase/index'
import {navigation} from 'react-native-navigation'

import { deletePlace, editPlace } from '../../store/actions/index'

class PlaceDetail extends Component {
    state = {
        edit: true,
        newPlaceName: ''
    }
    
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key)
        this.props.navigator.pop()
        Fire.database().ref(`places/${this.props.selectedPlace.key}`).remove()
    }

    editPlaceHandler = () => {
        this.setState(prevState => ({
            edit : !prevState.edit
        }))
    }

    saveEditPlaceHandler = () => {
        this.props.navigator.pop()
        Fire.database().ref(`places/${this.props.selectedPlace.key}`).set({
            name: this.state.newPlaceName,
            uid: this.props.uid
        })
    }

    render() {
        if(this.state.edit === true) {
            return(
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.placeImage}
                            source={this.props.selectedPlace.image}
                        />
                        <Text style={styles.placeName}>Nama : {this.props.selectedPlace.value}</Text>
                        <Text style={styles.placeName}>Usia : {this.props.selectedPlace.usia}</Text>
                        <Text style={styles.placeName}>Jabatan : {this.props.selectedPlace.jabatan}</Text>
                    </View>
                    <Button title='Edit' color='blue' onPress={this.editPlaceHandler}/>
                    <Button title='Delete' color='red' onPress={this.placeDeletedHandler}/>
                </View>
            )
        } else if (this.state.edit === false) {
            
            return (
                <View style={styles.container}>
                <View>
                    {/* <Image
                        style={styles.placeImage}
                        source={this.props.selectedPlace.image}
                    /> */}
                    
                    <TextInput 
                        placeholder={this.props.selectedPlace.value}
                        onChangeText={(value) => this.setState({newPlaceName: value})}
                    
                    />
                </View>
                <Button title='Save' color='blue' onPress={this.saveEditPlaceHandler}/>
                {/* <Button title='Delete' color='red' onPress={this.placeDeletedHandler}/> */}
            </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 22
    },
    placeImage: {
        width: '100%',
        height: 220
    },
    placeName : {
        fontWeight: 'bold',
        fontSize : 28,
        textAlign :'center'
    },
    button : {
        margin: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key)),
        
    }
}

const mapStateToProps = state => {
    return {
        uid: state.auth.user.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail)