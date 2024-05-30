import styled from "styled-components";

export const MeaningElement = styled.div``;

export const PhoneticWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const WordWrapper = styled.div``;

export const NormalWord = styled.h1`
  font-size: var(--font-size-heading-large);
  line-height: var(--line-height-heading-large);
  font-weight: var(--font-weight-heading-medium);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-heading-mobile);
    line-height: var(--line-height-heading-mobile);
  }
`;

export const PhoneticWord = styled.div`
  font-size: var(--font-size-heading-medium);
  line-height: var(--line-height-heading-medium);
  font-weight: var(--font-weight-regular);
  color: var(--accent);

  @media (max-width: 425px) {
    font-size: var(--font-size-body-medium);
    line-height: var(--line-height-body-medium);
  }
`;

export const PlayButton = styled.button`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 1px solid var(--color-text);
  transition: all 0.15s ease 0s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    background-color: whitesmoke;
    opacity: 0.5;
  }

  @media (max-width: 425px) {
    width: 48px;
    height: 48px;
  }
`;

export const Source = styled.div`
  border-top: 1px solid var(--color-line);
  padding: 20px 0px 20px;

  @media (max-width: 425px) {
    padding: 24px 0px 20px;
  }
`;

export const SourceWrapper = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: 8px;
  flex-wrap: wrap;
`;

export const SourceTitle = styled.div`
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body-small);
  font-weight: var(--font-weight-regular);
  color: var(--secondary);
`;

export const SourceUrlsUl = styled.ul`
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body-small);
  font-weight: var(--font-weight-regular);
`;

export const SourceUrlsLi = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Url = styled.a`
  color: var(--color-text);
`;
