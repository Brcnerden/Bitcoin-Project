import styled from "@emotion/styled";

const Chart = styled.th`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Text = styled.tbody`
  font-family: "Poppins", sans-serif;

  @media only screen and (max-width: 500px) {
    width: 79px;
    height: 21px;
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    > td {
      padding-bottom: 22px;
    }
  }
`;

const Picture = styled.img`
  width: 115px;
  height: 40px;
`;

const Icon = styled.td`
  > svg {
    width: 25px;
    padding: 0 !important;
  }
`;

const PictureRow = styled.td`
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export { Picture, PictureRow, Chart, Text, Icon };
