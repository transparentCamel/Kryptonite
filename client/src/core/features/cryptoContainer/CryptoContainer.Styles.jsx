import styled from 'styled-components';

export const CryptoContainerStyles = styled.section`
  padding: 0px 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 0px;
  gap: 32px;
  .select {
    width: 256px;
  }
  .cryptoCardContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .loadingContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
  }
  @media only screen and (max-width: 1366px) {
    padding: 0px 8%;
  }
  @media only screen and (max-width: 600px) {
  }
`;
