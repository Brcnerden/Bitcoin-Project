import styled from "@emotion/styled";

const Banner = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) -9.25%,
    rgba(255, 255, 255, 0.6) -9.25%,
    rgba(244, 249, 255, 0.7) 108.74%
  );
  width: 1200px;
  height: 289px;
  border-radius: 40px;
  border: 1px solid gray;
  text-align: center;
  padding-top: 50px;
  margin-top: 221px;
  @media only screen and (max-width: 500px) {
    max-width: 378px;
    height: 532px;
    margin-left: 18px;
  }
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 42px;
  font-weight: 500;
  margin-top: -20px;
  margin-bottom: 10px;
  @media only screen and (max-width: 500px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 20px;
`;

const Brand = styled.div`
  @media only screen and (max-width: 500px) {
    > img {
      display: block;
      width: 173px;
      height: 85px;
      margin-left: 90px;
    }
  }
`;

export { Banner, Title, Text, Brand };
