import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 2px solid grey;
`;
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
`;
export const Logo = styled.a`
  width: 100px;
  height: 100px;
  background: url(${process.env.PUBLIC_URL + "/images/logo.jpg"});
  background-size: contain;
  margin: 20px;
`;
export const FooterNavWrapper = styled.div`
  width: 50%;
  height: 50%;
`;

export const NavItem = styled.a`
  text-transform: uppercase;
  display: block;
  padding: 3px 0;
  text-align: center;
`;
export const SocialWrapper = styled.div`
  width: 50%;
  height: 50%;
`;

export const SocialItem = styled.a`
  text-transform: uppercase;
  display: block;

  padding: 3px 0;
  text-align: center;
`;

export const SocialPicWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
`;
export const SocialPic = styled.img`
  width: 35px;
  height: 35px;
  margin: 5px;
`;
export const CopyRightWrapper = styled.div`
  background-color: #36427a;
  color: #ffffff;
  padding: 20px 0;
  text-align: center;
`;
