import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  margin-bottom: 10px;

  img {
    width: 25%;
  }
`;

export const ItemDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 10px;

  .name {
    font-size: 17px;
    padding-bottom: 10px;
  }
`;