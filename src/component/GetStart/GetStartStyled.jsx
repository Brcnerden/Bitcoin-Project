import styled from "@emotion/styled";

const Banner = styled.div`
  max-width: 1300px;
  width: 100%;
  border-radius: 40px;
  margin-top: 50px;
  text-align: center;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.7) -9.25%,
    rgba(255, 255, 255, 0.6) -9.25%,
    rgba(244, 249, 255, 0.7) 108.74%
  );
  margin-bottom: 50px;
  @media only screen and (max-width: 500px) {
    max-width: 375px;
    width: 100%;
    height: 1183px;
  }
  @media only screen and (max-width: 1200px) {
  }
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
  @media only screen and (max-width: 500px) {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Text = styled.div`
  > div {
    font-size: 25px;
    font-weight: 500;
    line-height: 37px;
    color: #222222;

    > p {
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      color: #666666;
    }
  }
  > div {
    @media only screen and (max-width: 500px) {
      font-size: 20px;

      line-height: 30px;
    }
    > p {
      font-size: 12px;
      line-height: 21px;
    }
    @media only screen and (max-width: 1200px) {
      > p {
        margin-right: 50px;
      }
    }
  }
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 90px;

  > img {
    width: 197px;
    height: 12px;
    @media only screen and (max-width: 1200px) {
      display: none;
    }
  }
`;
export { Title, Arrow, Banner, Text };
