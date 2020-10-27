import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  elevation: 2;
  padding: 15px 10px;
  border-radius: 15px;
  background-color: #FFF;
  margin: 5px;
`;

export const Title = styled.Text`
    font-size: 12px;
`;

export const SubTitle = styled.Text`
    font-size: 10px;
    color: gray;
`;
