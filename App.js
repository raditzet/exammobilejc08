import  { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'


import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer'

const store = configureStore()

// Register Screens

Navigation.registerComponent(
  "jc8reactnative.AuthScreen",
  () => AuthScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
)

Navigation.registerComponent(
  'jc8reactnative.PlaceDetailScreen',
  () => PlaceDetailScreen,
  store,
  Provider
)



Navigation.registerComponent(
  'jc8reactnative.SideDrawerScreen',
  () => SideDrawerScreen,
  store,
  Provider
)


// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: 'jc8reactnative.AuthScreen',
    title: 'Login'
  }
})