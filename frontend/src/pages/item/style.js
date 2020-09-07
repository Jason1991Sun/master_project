import styled from "styled-components";

export const NavWrapper = styled.div`
  margin: 20px 0;
`;

export const ItemDetailsWrapper = styled.div``;

export const ItemImgWrapper = styled.div`
  display: inline-grid;
  width: 70%;
`;

export const ItemDetails = styled.div`
  display: inline-grid;
  width: 30%;
`;

export const DescrHeading = styled.h2`
  margin: 20px 0;
  color: #36427a;
  font-weight: bolder;
  font-size: 20px;
`;

export const ItemDescription = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items; center;
`;

export const Items = styled.li`
  list-style: none;
  flex: 0 1 16rem;
  margin: 1rem;
`;
export const ItemImg = styled.img``;
export const BigItemImg = styled.img``;
export const ItemName = styled.h1`
  font-size: 30px;
  color: #36427a;
  font-weight: bolder;
  margin: 10px 0;
`;

export const ItemPrice = styled.h3`
  font-size: 20px;
  color: #36427a;
  font-weight: bolder;
  margin: 5px 0;
`;

export const QuantityWrapper = styled.div``;
export const Cart = styled.div``;
export const SmallImg = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

export const ItemImg1 = styled.img`
  grid-area: 1 / 1 / 2 / 2;
  width: 75px;
  height: 75px;
`;
export const ItemImg2 = styled.img`
  grid-area: 2 / 1 / 3 / 2;
  width: 75px;
  height: 75px;
`;

export const ItemImg3 = styled.img`
  grid-area: 3 / 1 / 4 / 2;
  width: 75px;
  height: 75px;
`;

export const ItemImg4 = styled.img`
  grid-area: 4 / 1 / 5 / 2;
  width: 75px;
  height: 75px;
`;

export const ItemImg5 = styled.img`
  grid-area: 5 / 1 / 6 / 2;
  width: 75px;
  height: 75px;
`;

export const ItemImg6 = styled.img`
  grid-area: 2 / 3 / 5 / 5;
  width: 500px;
  height: 500px;
`;
