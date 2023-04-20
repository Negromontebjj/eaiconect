import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
import AuthProvider from './src/contexts/auth';


export default function App() {
  //const auth = true;

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

