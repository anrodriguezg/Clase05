import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import { CountScreen } from './Components';
import React from 'react';

import { appStyles } from './App.style';

type AppProps = {
   attribute: string;
}

class App extends React.Component<AppProps> {

  private count: number = 0;
  private label: string = "Hola";
  
handleOnPress = () => {
  console.log("On click");
  this.count++;
  console.log(this.count)
}; 


  render(){
     const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaProvider style={appStyles.safeArea}>
        <View style={appStyles.container}>
            <CountScreen label={this.label} OnPress={this.handleOnPress}></CountScreen>

        </View>
      </SafeAreaProvider>

    </SafeAreaProvider>
  );
  }

}

export default App;
