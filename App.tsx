import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native'
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { SignIn } from './src/screens/SignIn';
import theme from './src/theme';
import { Loading } from './src/components/Loading';

export function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  // enquanto a fonte não for carregada
  if (!fontsLoaded) {
    return (
      <Loading />
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <SignIn />
    </ThemeProvider>
  );
}


