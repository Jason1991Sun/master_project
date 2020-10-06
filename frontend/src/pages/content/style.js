import styled from "styled-components";

export const ContentWraper = styled.div`
  margin: 1rem;
`;
export const ContentHeaderWraper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const ContentHeader = styled.h1`
  color: #36427a;
  text-align: center;
  font-size: 45px;
  font-weight: bolder;
`;

export const CreateButton = styled.button`
  background-color: #36427a;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px 0;
`;

export const ItemListWraper = styled.div``;

export const ItemListTable = styled.table`
  width: 100%;
`;

export const ItemListTHead = styled.thead`
  font-weight: bolder;
  line-height: 30px;
`;

export const ItemListTBody = styled.tbody`
  line-height: 30px;
  tr:nth-child(odd) {
    background-color: #f0f0f0;
    margin: 10px 0;
  }
`;

export const ItemListTH = styled.th`
  text-align: left;
`;
