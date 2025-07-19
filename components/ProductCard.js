import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QuantityButton from './QuantityButton';



const Card = styled.View`
  background-color: white;
  border-radius: 12px;
  padding: 10px;
  margin: 8px;
  width: 45%;
  align-items: left;
`;

const ProductImage = styled.Image`
  width: 100%;
  height: 160px;
  resize-mode: contain;
  border: 1px solid #d3d3d3;
  border-radius: 12px;
`;

const Name = styled.Text`
  font-size: 14px;
  font-weight: 900;
  margin-top: 8px;
`;

const Price = styled.Text`
  font-size: 14px;
  margin-top: 8px;
`;




export default function ProductCard({ product }) {
  
  return (
     <Card>
      <ProductImage source={{ uri: product.image }} />
      <Name>{product.name}</Name>
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'left' }}>
      <Price>₹{product.price}</Price>
      </View>
      <QuantityButton product={product} />
    </Card>
  );
}
