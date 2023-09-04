import styled from 'styled-components';

export const HeaderStyles = styled.header`
  display: flex;
  width: 100%;
  height: 256px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding-top: 64px;
  h1 {
    font-size: 64px;
  }
  img {
    height: 128px;
    transform: translateY(8px);
  }
`;
