import styled from "@emotion/styled";

const Tablo = styled.section`
  display: flex;
  width: 1200px;
  height: 330px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 10px 10px 2px rgba(156, 152, 152, 0.45);
  -webkit-box-shadow: 10px 10px 10px 2px rgba(156, 152, 152, 0.45);
  margin-top: -40px;
  background-color: white;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    display: block;
    margin-top: 0;
  }
`;

export { Tablo };
