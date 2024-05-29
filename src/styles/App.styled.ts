import styled from "styled-components";

export const DictionaryElement = styled.main`
  padding-top: 58px;
  padding-bottom: 104px;

  @media (max-width: 768px) {
    padding-bottom: 98px;
  }

  @media (max-width: 425px) {
    padding-top: 24px;
    padding: 24px 0 65px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 737px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0px 40px;
  }

  @media (max-width: 425px) {
    max-width: 425px;
    padding: 0px 24px;
  }
`;
