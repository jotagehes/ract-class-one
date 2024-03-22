
import * as S from './styles';


const SideBar = ({ houses, onSelectHouse }: {houses: string[]; onSelectHouse: () => void}) => {
  return (
    <S.SideBarContainer>
      <S.Title>Hogwarts Houses</S.Title>
      <S.HouseList>
        {houses.map((house, index) => (
          <S.HouseItem key={index} onClick={() => console.log(house)}>
            {house}
          </S.HouseItem>
        ))}
      </S.HouseList>
    </S.SideBarContainer>
  );
};

export default SideBar;
