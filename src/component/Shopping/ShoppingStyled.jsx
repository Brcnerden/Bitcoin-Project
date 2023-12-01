import styled from "@emotion/styled";

const Card = styled.div`
  margin-bottom: 210px;
`;

const Title = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 45px;
  font-weight: 600;
  line-height: 52px;
  color: #222222;
  margin-top: 100px;
  text-align: center;
  margin-bottom: 25px;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 45px;
  color: #666666;
`;

const PriceButton = styled.button`
  max-width: 336px;
  width: 100%;
  height: 80px;
  border-radius: 22px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid;
  background-color: #ffffff;
  border: 1px solid #3984f4;
  align-items: center;
  margin-bottom: 25px;
`;
const Line = styled.span`
  border-right: 1px solid #3984f4;
  padding: 9px;
  color: #3984f4;
`;

const Price = styled.span`
  color: black;
`;

const Rate = styled.button`
  max-width: 199px;
  width: 100%;
  background-color: #ffffff;
  align-items: center;
  margin-left: 20px;
  border: 1px solid #3984f4;
  border-radius: 22px;
  padding: 15px;
  margin-bottom: 25px;
`;

const BuyingButton = styled.button`
  max-width: 557px;
  width: 100%;
  height: 64px;
  background: linear-gradient(136.91deg, #468ef9 -12.5%, #0c66ee 107.5%);
  color: white;
  border-radius: 40px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  border: none;
`;

export { Title, Text, PriceButton, Line, Price, Rate, BuyingButton, Card };
