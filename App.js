import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Index from './src/Index';

export default function App() {
  return (
    <PaperProvider>
      <Index />
    </PaperProvider>
  );
}

AppRegistry.registerComponent('main', () => Main);