import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  align-items: flex-start;
`;

export const CartHeading = styled.h1`
  color: #36427a;
  font-size: 40px;
  font-weight: bolder;
`;

export const CartSubHeading = styled.h2`
  color: #36427a;
  font-size: 40px;
  font-weight: bolder;
`;

export const CartList = styled.div`
  flex: 3 1 60rem;
`;

export const CartAction = styled.div`
  flex: 1 1 20rem;
  background-color: #f0f0f0;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const CartListContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  padding: 1rem;
`;

export const CartListContent = styled.li`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
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

export const CartActionButton = styled.button`
  background-color: #36427a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
  width: 100%;
`;

export const CartActionHeading = styled.h3`
  color: #36427a;
  font-size: 30px;
  font-weight: bolder;
`;
