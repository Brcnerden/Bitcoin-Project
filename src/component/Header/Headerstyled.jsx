import styled from "@emotion/styled";

const Singdiv = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #468ef9;
  margin: 0 0 18px 0;
  @media only screen and (max-width: 500px) {
    text-align: center;
  }
`;

const Headers = styled.body`
  font-family: "Poppins", sans-serif;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.9),
    rgba(70, 142, 249, 0.3)
  );
`;

const Text = styled.h1`
  font-weight: 700;
  margin: 0 53px 30px 0;
  @media only screen and (max-width: 500px) {
    text-align: center;
    margin-right: 27px;
    margin-left: 27px;
  }
`;

const Download = styled.button`
  height: 52px;
  margin-top: 5px;
  @media only screen and (max-width: 500px) {
    width: 310px;
    height: 58px;
    margin-left: 55px;
    margin-bottom: 70px;
  }
`;

const Colors = styled.span`
  background: linear-gradient(
    169.4deg,
    #3984f4 -6.01%,
    #0cd3ff 36.87%,
    #2f7cf0 78.04%,
    #0e65e8 103.77%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Information = styled.p`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const WorldImage = styled.div`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Buttons = styled.div`
  @media only screen and (max-width: 1400px) {
    margin-bottom: 40px;
  }
  @media only screen and (max-width: 500px) {
    display: block;
    > button {
      width: 310px;
      height: 58px;
      margin-left: 55px;
    }
  }
`;

export {
  Singdiv,
  Headers,
  Colors,
  Text,
  Download,
  WorldImage,
  Information,
  Buttons,
};
