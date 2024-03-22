import styled from 'styled-components';


export const SideBarContainer = styled.aside`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const HouseList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const HouseItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;