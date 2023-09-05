import styled from 'styled-components';

export const ButtonStyles = styled.button`
  background-color: ${(props) => (props.isSelected ? 'white' : 'black')};
  color: ${(props) => (props.isSelected ? 'black' : 'white')};
  border: 2px solid ${(props) => (props.isSelected ? '#419547' : 'black')};
  padding: 8px;
  flex: 1;
  max-width: 256px;
  border-radius: 16px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #419547;
    border: 2px solid #419547;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 96px;
    font-size: 12px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 8px;
  }
`;
