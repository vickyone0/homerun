import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useCart, CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

export default function QuantityButton({ product }) {
  const { cart, dispatch } = useCart();
  const { showMaxQuantitySnackbar } = useContext(CartContext);
  const quantity = cart[product.id] || 0;
  

  const increase = (val) => {
    const newQty = quantity + val;
    if (newQty > 20) {
      showMaxQuantitySnackbar();
      return;
    }
    dispatch({ type: 'UPDATE', id: product.id, qty: newQty });
  };

  const decrease = (val) => {
    const newQty = quantity - val;
    if (newQty <= 0) {
      dispatch({ type: 'REMOVE', id: product.id });
      return;
    }
    dispatch({ type: 'UPDATE', id: product.id, qty: newQty });
  };

  if (quantity === 0) {
    return (
      <AddButton onPress={() => dispatch({ type: 'ADD', id: product.id })}>
        <ButtonText>Add</ButtonText>
      </AddButton>
    );
  }

  return (
    <QuantityControlButton disabled={quantity > 20}>
      <ControlText onPress={() => decrease(5)}>{'<<'}</ControlText>
      <ControlText onPress={() => decrease(1)}>-</ControlText>
      <QtyText>{quantity}</QtyText>
      <TouchableOpacity onPress={() => increase(1)} activeOpacity={0.7}>
        <ControlText style={{ opacity: quantity >= 20 ? 0.4 : 1 }}>+</ControlText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => increase(5)} activeOpacity={0.7}>
        <ControlText style={{ opacity: quantity >= 20 ? 0.4 : 1 }}>{'>>'}</ControlText>
      </TouchableOpacity>
    </QuantityControlButton>
  );
}

const AddButton = styled.TouchableOpacity`
  border: 1px solid #328616;
  padding: 6px 16px;
  margin-top: 8px;
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  color: #328616;
  font-weight: bold;
  align-self: center;
`;

const QuantityControlButton = styled.View`
  border: 1px solid #328616;
  padding: 6px 16px;
  margin-top: 8px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #328616;
`;

const ControlText = styled.Text`
  color: white;
  font-weight: bold;
  padding: 0 6px;
`;

const QtyText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 0 8px;
  color: white;
`;