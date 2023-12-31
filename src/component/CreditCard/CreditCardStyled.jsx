import styled from "@emotion/styled";
const Card = styled.div`
  margin-top: 175px;
  margin-left: 50px;
  @media only screen and (max-width: 500px) {
    margin-left: 0;
  }
`;

const Text = styled.div`
  font-family: "Poppins", sans-serif;

  > p {
    font-size: 15px;
    line-height: 22.5px;
    color: #666666;
    @media only screen and (max-width: 500px) {
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 20px;
    }
  }
`;

const CardPicture = styled.img`
  max-width: 510px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 36px;
  line-height: 52px;
  align-items: center;
  font-weight: 600;
  margin-bottom: 25px;
  > span {
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
  }
  @media only screen and (max-width: 500px) {
    max-width: 263px;
    width: 100%;
    font-size: 24px;
    line-height: 36px;
    margin-top: 33px;
  }
`;

const Button = styled.button`
  max-width: 240px;
  width: 100%;
  height: 72px;
  border: 2px solid #3984f4;
  color: #3984f4;
  background-color: #ffffff;
  border-radius: 40px;
  margin-top: 30px;
  @media only screen and (max-width: 500px) {
    margin-left: 70px;
  }
`;

export { Title, Text, Button, CardPicture, Card };
