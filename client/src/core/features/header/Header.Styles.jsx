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
  @media only screen and (max-width: 600px) {
    gap: 16px;
    h1 {
      font-size: 48px;
    }
    img {
      height: 80px;
      transform: translateY(8px);
    }
  }
  @media only screen and (max-width: 420px) {
    gap: 8px;
    h1 {
      font-size: 38px;
    }
    img {
      height: 64px;
      transform: translateY(8px);
    }
  }
`;
