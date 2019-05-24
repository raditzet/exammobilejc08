import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux'

import { addPlace, createData } from '../../store/actions/index'
import {Fire} from '../../firebase/index'

import imageBackground from '../../assets/react-native-wide.png'
import imageBackgroundWorld from '../../assets/world-map.jpg'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import MainText from '../../components/UI/MainText/MainText'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import UsiaInput from '../../components/UsiaInput/UsiaInput'
import JabatanInput from '../../components/JabatanInput/JabatanInput'

class SharePlaceScreen extends Component {
    state = {
        placeName : '',
        usia : '',
        jabatan : ''
    }

    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    onNavigatorEvent = event => {
        if (event.type === 'NavBarButtonPress'){
            if (event.id === 'sideDrawerToggle'){
                this.props.navigator.toggleDrawer({
                    side: 'left'
                })
            }
        }
    }

    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        })
    }

    usiaChangedHandler = (val) => {
        this.setState({
            usia: val
        })
    }

    jabatanChangedHandler = (val) => {
        this.setState({
            jabatan: val
        })
    }
    // showData = items => {
    //     var arrData = []
    //     var rawData = items.val()

    //     Object.keys(rawData).forEach(id => {
    //         arrData.push({
    //             key: id,
    //             value: rawData[id].name,
    //             image: {
    //                 uri: "https://freerangestock.com/sample/78746/halloween-cat-icon-means-trick-or-treat-and-autumn.jpg"
    //             }
    //         })
    //     })

    // }

    placeAddedHandler = () => {
        var places = Fire.database().ref('places')
        
        if(this.state.placeName.trim() !== ''){
            // input data ke firebase
            
            places.push({
                name: this.state.placeName,
                usia: this.state.usia,
                jabatan: this.state.jabatan,
                uid: this.props.user,

                
            }).then(res => {
                // ambil semua data di firebase, lempar ke redux
                places.once('value', this.props.onCreateData, (err)=>{console.log(err)})
            })
        }
    }

    render () {
        console.log(this.props.user);
        return (
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Input Data Karyawan</HeadingText>
                    </MainText>
                    <PlaceInput
                        placeName = {this.state.placeName}
                        onChangeText = {this.placeNameChangedHandler}
                    />
                    <UsiaInput
                        placeName = {this.state.usia}
                        onChangeText = {this.usiaChangedHandler}
                    />
                    <JabatanInput
                        placeName = {this.state.jabatan}
                        onChangeText = {this.jabatanChangedHandler}
                    />
                    <Button title='Input' onPress={this.placeAddedHandler}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    placeholder: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee',
        width: '80%',
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: placeName => dispatch(addPlace(placeName)),
        onCreateData: items => dispatch(createData(items))
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SharePlaceScreen)