import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-bottom: 2px solid grey;
`;

export const TopNotice = styled.div`
  background-color: #36427a;
  color: #f9efb3;
  padding: 20px 0;
  text-align: center;
`;

export const Logo = styled.a`
  display: inline-block;
  float: left;
  width: 100px;
  height: 100px;
  background: url(${process.env.PUBLIC_URL + "/images/logo.jpg"});
  background-size: contain;
  margin: 20px;
`;

export const NavWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
`;

export const MainNav = styled.div`
  position: absolute;
  left: 38%;
  top: 80px;
`;

export const NavItem = styled.a`
  text-transform: uppercase;
  color: #000000;
  font-size: 25px;
  display: inline-block;
  padding: 0 20px;
`;
export const UserNav = styled.div`
  float: right;
  margin: 25px;
`;
export const NavUserItem = styled.a`
  text-transform: uppercase;
  color: #000000;
  display: inline-block;
  padding: 0 20px;
`;
