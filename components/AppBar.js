import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

const Wrapper = styled(SafeAreaView)`
  background-color: white;
  padding: 10px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  elevation: 4;
`;
const Left = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-left: 20px;
`;

const Right = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const CartIconWrapper = styled.View`
  position: relative;
`;

const Badge = styled.View`
  position: absolute;
  top: -6px;
  right: -10px;
  background-color: red;
  border-radius: 10px;
  padding: 2px 6px;
  min-width: 18px;
  align-items: center;
  justify-content: center;
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;


export default function AppBar() {

  const { cart } = useCart(); 
  const totalQuantity = Object.values(cart).reduce((sum, qty) => sum + qty, 0); 
  return (
    <Wrapper>
      <Left>
        <Ionicons name="arrow-back" size={24} />
        <Title>Cement</Title>
      </Left>
      <Right>
        <Ionicons name="search-outline" size={22} />
        <CartIconWrapper>
    <Ionicons name="cart-outline" size={22} />
    {totalQuantity > 0 && (
      <Badge>
        <BadgeText numberOfLines={1}>{totalQuantity}</BadgeText>
      </Badge>
    )}
  </CartIconWrapper>
      </Right>
    </Wrapper>
  );
}
