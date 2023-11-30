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
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  line-height: 54px;
`;

const Text = styled.div`
  > div {
    font-size: 25px;
    font-weight: 500;
    line-height: 37px;
    color: #222222;
    > p {
      font-size: 17px;
      font-weight: 400;
      line-height: 25px;
      color: #666666;
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
  }
`;
export { Title, Arrow, Banner, Text };
