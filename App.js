import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import MealsNavigator from './navigation/MealsNavigator';

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={err => consolelog(err)}
    />;
  }

  return <MealsNavigator />;
}
