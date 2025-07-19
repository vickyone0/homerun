import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ProductListingPage from './screens/ProductListingPage';
import { CartProvider } from './context/CartContext';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <CartProvider>
    <SafeAreaProvider>
      <PaperProvider>
      <ProductListingPage />
      </PaperProvider> 
    </SafeAreaProvider>
    </CartProvider>
  );
}
