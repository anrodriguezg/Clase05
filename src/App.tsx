import React from 'react';
import { StatusBar, View, Appearance, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { CountScreen } from './Components';
import { appStyles } from './App.style';

type AppProps = {};

let count: number = 0;


const handleNumber = (value: number) => {
    count = value;
    console.log("número = " + count);
};

const handleOnPress = (value: number) => {
    console.log("Estas sumando: "  + count  + " + " + value);
    count += value;
    console.log("Total sumando = " + count);
};

const handleOnPressResta = (value: number) => {
    console.log("Estas restando: "  + count  + " - " + value);
    count -= value;
    console.log("Total restando = " + count);
};


export class App extends React.Component<AppProps> {

  private suma: string = "+";
  private resta: string = "-";

  private num0: string = "0";
  private num1: string = "1";
  private num2: string = "2";
  private num3: string = "3";
  private num4: string = "4";
  private num5: string = "5";
  private num6: string = "6";
  private num7: string = "7";
  private num8: string = "8";
  private num9: string = "9";

  render() {
    return (
        <View style={appStyles.safeArea}>
          <Text style={appStyles.textTitle} >Calculadora</Text>

          <View style={appStyles.container}>

             <CountScreen
              label={this.num0}
              OnPress={() => handleNumber(0)}
            />

            <CountScreen
              label={this.num1}
              OnPress={() => handleNumber(1)}
            />

             <CountScreen
              label={this.num2}
              OnPress={() => handleNumber(2)}
            />

            <CountScreen
              label={this.num3}
              OnPress={() => handleNumber(3)}
            />

             <CountScreen
              label={this.num4}
              OnPress={() => handleNumber(4)}
            />

            <CountScreen
              label={this.num5}
              OnPress={() => handleNumber(5)}
            />

             <CountScreen
              label={this.num6}
              OnPress={() => handleNumber(6)}
            />

            <CountScreen
              label={this.num7}
              OnPress={() => handleNumber(7)}
            />

            <CountScreen
              label={this.num8}
              OnPress={() => handleNumber(8)}
            />

            <CountScreen
              label={this.num9}
              OnPress={() => handleNumber(9)}
            />

            <CountScreen
              label={this.suma}
              OnPress={() => handleOnPress(0)}
            />

            <CountScreen
              label={this.resta}
              OnPress={() => handleOnPressResta(0)}
            />

          </View>
        </View>
    );
  }
}