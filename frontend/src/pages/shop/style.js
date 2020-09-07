import styled from "styled-components";

export const CatListWrapper = styled.div`
  display: inline-grid;
  width: 20%;
`;

export const ItemsWrapper = styled.div`
  display: inline-grid;
  width: 80%;
`;

export const CatTitle = styled.h2`
  color: #36427a;
  font-size: 25px;
  margin: 30px 0 50px 50px;
  font-weight: bolder;
`;

export const ItemTitle = styled.h1`
  color: #36427a;
  font-size: 45px;
  margin: 30px 0 50px 50px;
  font-weight: bolder;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items; center;
`;

export const Item = styled.li`
  list-style: none;
  flex: 0 1 16rem;
  margin: 1rem;
`;
export const ItemImg = styled.img`
  width: 200px;
`;
export const ItemName = styled.div`
  margin: 10px 0;
`;

export const ItemPrice = styled.div``;

export const CatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items; center;
`;

export const Cat = styled.li`
  list-style: none;
  flex: 0 1 16rem;
`;
export const CatName = styled.div`
  margin: 10px 0;
  color: #36427a;
`;
