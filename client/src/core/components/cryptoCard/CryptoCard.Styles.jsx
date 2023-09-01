import styled from 'styled-components';

export const CryptoCardStyles = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border: solid 1px black;
  border-radius: 32px;
  padding: 32px;
  img {
    width: 64px;
    margin-right: 16px;
  }
  p {
    font-size: 32px;
  }
  :last-child {
    margin: 0px;
    margin-left: auto;
  }
  &:hover {
    cursor: pointer;
  }
`;
