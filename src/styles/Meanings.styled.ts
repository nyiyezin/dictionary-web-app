import styled from "styled-components";

export const PartOfSpeech = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const PartOfSpeechTitle = styled.p`
  font-size: var(--fs-hm);
  line-height: var(--lh-hm);
  font-weight: var(--fw-bold);

  display: flex;
  align-items: center;
  column-gap: 20px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);

    column-gap: 16px;

    &:not(:last-child) {
      margin-bottom: 31px;
    }
  }
`;

export const HorizontalLine = styled.div`
  flex: 1 1 50%;
  height: 1px;
  background-color: var(--color-line);
`;

export const MeaningWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const MeaningTitle = styled.p`
  font-size: var(--fs-hs);
  line-height: var(--lh-hs);
  font-weight: var(--fw-regular);
  color: var(--secondary);

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (max-width: 425px) {
    font-size: var(--fs-bms);
    line-height: var(--lh-bms);

    &:not(:last-child) {
      margin-bottom: 17px;
    }
  }
`;

export const Definitions = styled.ul``;

export const DefinitionWrapper = styled.li`
  position: relative;
  padding-left: 47px;

  @media (max-width: 425px) {
    padding-left: 25px;
  }

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: var(--accent);

    position: absolute;
    left: 22px;
    top: 10px;

    @media (max-width: 425px) {
      left: 0px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

export const DefinitionItem = styled.p`
  font-size: var(--fs-bm);
  line-height: var(--lh-bm);
  font-weight: var(--fw-regular);

  &:not(:last-child) {
    margin-bottom: 13px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export const DefinitionExample = styled.p`
  font-size: var(--fs-bm);
  line-height: var(--lh-bm);
  font-weight: var(--fw-regular);

  color: var(--secondary);

  @media (max-width: 425px) {
    font-size: 15px;
    line-height: var(--lh-bms);
  }
`;

export const VariantWrapper = styled.div`
  display: flex;
  column-gap: 22px;

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (max-width: 425px) {
    column-gap: 24px;
  }
`;

export const VariantTitle = styled.div`
  font-size: var(--fs-hs);
  line-height: var(--lh-hs);
  font-weight: var(--fw-regular);
  color: var(--secondary);

  @media (max-width: 425px) {
    font-size: var(--fs-bms);
    line-height: var(--lh-bms);
  }
`;

export const VariantWords = styled.div`
  font-size: var(--fs-hs);
  line-height: var(--lh-hs);
  font-weight: var(--fw-bold);
  color: var(--accent);

  @media (max-width: 425px) {
    font-size: var(--fs-bms);
    line-height: var(--lh-bms);
  }
`;

export const VariantLink = styled.p`
  display: inline-block;
  cursor: pointer;
  position: relative;

  margin-right: 6px;

  &:hover {
    &::before {
      content: "";
      width: 95%;
      height: 1px;
      background: var(--accent);

      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
`;
