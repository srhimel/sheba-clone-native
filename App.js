import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import Navigation from './src/navigation'
import store from './src/redux/store'

export default function App() {

  const [loaded] = useFonts({
    "Manrope-Bold": require('./assets/fonts/Manrope-Bold.ttf'),
    "Manrope-Regular": require('./assets/fonts/Manrope-Regular.ttf'),
    "Manrope-Medium": require('./assets/fonts/Manrope-Medium.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="dark" backgroundColor='#ccc' barStyle="dark-content" />
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
