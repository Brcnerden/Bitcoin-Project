import styled from "@emotion/styled";

const Tablo = styled.section`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 330px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 10px 10px 10px 2px rgba(156, 152, 152, 0.45);
  -webkit-box-shadow: 10px 10px 10px 2px rgba(156, 152, 152, 0.45);
  margin-top: -40px;
  background-color: white;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    display: block;
    box-shadow: none;
    width: 354px;
    height: 1034px;
    border-radius: 40px;
  }
`;

export { Tablo };
