
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    flex: 1;
  }

  & p {
    margin: 0;
    padding: 5px;
  }
`;

export const LemaContainer = styled.div`
  text-align: right;
  font-style: italic;
  font-size: 0.9em;
`;

export const HogwartsLogo = styled.img`
  max-width: 50px;
  height: auto;
  margin-right: 10px;
`;


