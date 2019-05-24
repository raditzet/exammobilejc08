import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { Fire } from '../../firebase/index'
import {createData} from '../../store/actions/places'

import PlaceList from '../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {
    constructor(props) {
        super(props)
        this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }

    componentWillUpdate() {
        var places = Fire.database().ref('places')

        places.once('value', (items) => {this.props.createData(items, this.props.user.uid)}, (err) => {console.log(err);})
    }

    componentDidMount() {
        var places = Fire.database().ref('places')

        places.once('value', (items) => {this.props.createData(items, this.props.user.uid)}, (err) => {console.log(err);})
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

    itemSelectedHandler = (key) => {
        // selPlace = {value, key, image}
        const selPlace = this.props.places.find(place => {
            return place.key == key
        })
        this.props.navigator.push({
            screen: 'jc8reactnative.PlaceDetailScreen',
            title: selPlace.value,
            passProps: {
                selectedPlace: selPlace
            }
        })
    }

    render () {
        return (
            <View>
                <PlaceList 
                    places ={this.props.places}
                    onItemSelected={this.itemSelectedHandler}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places, 
        user: state.auth.user
    }
}



export default connect(mapStateToProps, {createData})(FindPlaceScreen);