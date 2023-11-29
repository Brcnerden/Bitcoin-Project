import styled from "@emotion/styled";

const BodyFooter = styled.div`
  margin-bottom: 50px;
  border-bottom: 0.8px solid #dddddd;
  border-top: 0.8px solid #dddddd;
  padding-top: 30px;
`;

const Header = styled.div`
  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const StartBox = styled.div`
  @media only screen and (max-width: 500px) {
    display: block;
  }
`;

const Logo = styled.img`
  width: 102px;
  height: 52px;
  margin-right: 42px;
`;

const Texts = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  margin-left: 120px;

  > p {
    width: 100px;
    color: #666666;
  }
  > div {
    color: #666666;
    margin-bottom: 5px;
  }
  @media only screen and (max-width: 500px) {
    border-bottom: 0.8px solid #dddddd;
    margin-bottom: 20px;
    margin-left: 5px;
  }
`;

const MailInput = styled.input`
  border-radius: 10px;
  color: #aaaaaa;
  border: 1px solid #aaaaaa;
  padding: 10px;
`;

const ArrowButton = styled.button`
  background-color: #468ef9;
  border-radius: 12px;
  padding: 10px;
  margin-left: 5px;
  border: none;
`;

const LastSentence = styled.div`
  color: #666666;
  display: flex;
  justify-content: center;
`;

export {
  Logo,
  BodyFooter,
  Texts,
  MailInput,
  ArrowButton,
  LastSentence,
  Header,
  StartBox,
};
