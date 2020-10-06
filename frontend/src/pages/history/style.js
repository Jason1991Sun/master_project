import styled from "styled-components";

export const OrderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content: space-between;
`;

export const OrderInfo = styled.div`
  flex: 3 1 60rem;
`;
export const OrderSection = styled.div`
  border: 0.1rem #c0c0c0 solid;
  border-radius: 0.5rem;
  background-color: #fcfcfc;
  padding: 1rem;
  margin: 1rem;
`;

export const OrderHeading = styled.h1`
  color: #36427a;
  font-size: 40px;
  font-weight: bolder;
`;

export const CartHeading = styled.h2`
  color: #36427a;
  font-size: 20px;
  font-weight: bolder;
`;

export const CartSubHeading = styled.h2`
  color: #36427a;
  font-size: 20px;
  font-weight: bolder;
`;
export const CartListContainer = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const CartListContent = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 0.1rem #c0c0c0 solid;

  &:first-child {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const CartListContentImgWrapper = styled.div`
  flex: 1 1;
`;

export const CartListContentImg = styled.img`
  max-width: 10rem;
  max-height: 10rem;
`;

export const CartListContentDetails = styled.div`
  flex: 8 1;
  margin: 0 20px;
`;
export const UserName = styled.div`
  margin: 10px 0;
  font-size: 20px;
  text-transform: uppercase;
`;
export const UserPhone = styled.div`
  margin: 10px 0;
  font-size: 20px;
`;
export const UserAddress = styled.div`
  margin: 10px 0;
  font-size: 20px;
  text-transform: uppercase;
`;

export const Strong = styled.div`
  display: inline-block;
  font-weight: bold;
`;
export const CartListContentName = styled.div``;

export const CartListContentSelecterWrapper = styled.div`
  margin: 10px 0;
`;
export const CartListContentSelecter = styled.select`
 margin 0 10px;
`;
export const CartListContentPrice = styled.div`
  flex: 1 1;
  font-size: 20px;
  text-align: right;
`;

export const OrderActionWrapper = styled.ul`
  padding: 0;
  list-style-type: none;
`;
export const OrderActionContent = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  &:first-child {
    font-size: 20px;
    font-weight: bold;
  }

  &:last-child {
    font-size: 20px;
    font-weight: bold;
    color: #36427a;
  }
`;
