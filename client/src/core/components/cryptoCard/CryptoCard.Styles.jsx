import styled from 'styled-components';

export const CryptoCardStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  border-radius: 32px;
  padding: 32px;

  .topContainer {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    img {
      width: 64px;
      margin-right: 16px;
      user-select: none;
    }
    p {
      font-size: 32px;
      user-select: none;
    }
    :last-child {
      margin: 0px;
      margin-left: auto;
    }
  }

  &:hover:not(.clicked) {
    cursor: pointer;
    background-color: black;
    color: white;
  }

  span {
    width: 24px;
    position: absolute;
    top: 16px;
    right: 24px;
    cursor: pointer;
    user-select: none;
  }
  .bottomContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: solid 1px black;
    padding-top: 32px;
    align-items: center;
    justify-content: center;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      label {
        margin-right: 16px;
      }
      :nth-child(2) {
        margin-right: 256px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .topContainer {
      img {
        width: 32px;
      }
      p {
        font-size: 24px;
      }
    }
    span {
      width: 18px;
    }
  }
  @media only screen and (max-width: 420px) {
    .topContainer {
      flex-direction: column;
      justify-content: center;
      img {
        margin-right: 0px;
      }
      :last-child {
        margin-left: 0px;
        margin-bottom: 32px;
      }
    }
  }
`;
