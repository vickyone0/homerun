import React, { useState ,useContext} from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import AppBar from '../components/AppBar';
import ProductCard from '../components/ProductCard';
import { Snackbar } from 'react-native-paper';
import { CartContext } from '../context/CartContext';

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const data = [
  {
    id: '1',
    name: 'Maha PPC Cement, 50 Kg Bag',
    price: 370,
    image: 'https://www.cementexchange.in/media/catalog/product/cache/49d0b6f0ca58df8c26cb194b285c3edb/m/a/maha-ppc-cement.jpg',
  },
  {
    id: '2',
    name: 'Priya PPC Cement, 50 Kg Bag',
    price: 370,
    image: 'https://home-run.co/cdn/shop/files/Priya_OPC_53_Grade_Cement_50_Kg_Bag_new.webp?v=1740487089&width=1445',
  },
  {
    id: '3',
    name: 'Ultratech PPC Cement, 50 Kg Bag',
    price: 420,
    image: 'https://www.infinitysquare.in/cdn/shop/products/Ultratech.png?v=1641719781',
  },
  {
    id: '4',
    name: 'Birla White Cement',
    price: 40,
    image: 'https://hanumanbuilders.com/wp-content/uploads/2024/05/Birla-25-KG-50-KG-White-Cement-2-1.jpg.webp',
  },
  {
    id: '5',
    name: 'Ramco Supergrade PPC Cement, 50 kg Bag',
    price: 405,
    image: 'https://tiimg.tistatic.com/fp/1/008/353/grade-43-limestone-acid-proof-ramco-cement-198.jpg',
  },
  {
    id: '6',
    name: 'Birla Super OPC 53 Grade Cement, 50 Kg Bag',
    price: 465,
    image: 'https://home-run.co/cdn/shop/files/Birla_Super_OPC_53_Grade_Cement_50_Kg_Bag.webp?v=1740486830&width=1445',
  }
];

export default function ProductListingPage() {
  const { snackbarVisible, setSnackbarVisible } = useContext(CartContext);
  return (
    <Container>
      <AppBar />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
     <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
        style={{
          position: 'absolute',
          bottom: 20,
          left: 16,
          right: 16,
          borderRadius: 8,
          backgroundColor: 'red',
        }}
      >
        Maximum 20 allowed per order. Please place another order if required.
      </Snackbar>
    </Container>
  );
}
