import styled from "@emotion/styled";
const Boxes = styled.div`
  flex-wrap: nowrap;
  @media only screen and (max-width: 1200px) {
    display: inline;
  }
`;

const Box = styled.div`
  max-width: 850px;
  width: 100%;
`;
const Support = styled.p`
  color: #0c66ee;
  font-size: 18px;
  line-height: 27px;
  @media only screen and (max-width: 1200px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
  }
`;
const Title = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #000000;
`;

const Download = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
  }
`;

const Text = styled.div`
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  line-height: 29px;
`;
const Choose = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: #000000;
  > span {
    width: 40px;
    color: aquamarine;
  }
`;

const Button = styled.button`
  max-width: 180px;
  width: 100%;
  height: 60px;
  background: linear-gradient(0deg, #dddddd, #dddddd),
    linear-gradient(0deg, #fafafa, #fafafa);
  color: #666666;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border: 1px solid #dddddd;
`;

const ButtonLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0 40px 0;
`;

export {
  Support,
  Title,
  Choose,
  Text,
  Download,
  Box,
  Button,
  ButtonLine,
  Boxes,
};
