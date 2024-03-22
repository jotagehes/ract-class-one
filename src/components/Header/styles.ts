import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;

  & h1 {
    margin: 0;
    font-size: 1.5em;
  }

  & nav {
    margin-top: 10px;

    & ul {
      list-style: none;
      padding: 0;
      display: flex;

      & li {
        margin-right: 20px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;
