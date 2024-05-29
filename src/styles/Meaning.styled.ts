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
  font-size: var(--fs-hl);
  line-height: var(--lh-hl);
  font-weight: var(--fw-bold);

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (max-width: 425px) {
    font-size: var(--fs-hml);
    line-height: var(--lh-hml);
  }
`;

export const PhoneticWord = styled.div`
  font-size: var(--fs-hm);
  line-height: var(--lh-hm);
  font-weight: var(--fw-regular);
  color: var(--accent);

  @media (max-width: 425px) {
    font-size: var(--fs-bm);
    line-height: var(--lh-bm);
  }
`;

export const PlayButton = styled.button`
  width: 75px;
  height: 75px;

  transition: all 0.15s ease 0s;

  &:active {
    transform: scale(0.95);
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
  font-size: var(--fs-bs);
  line-height: var(--lh-bs);
  font-weight: var(--fw-regular);
  color: var(--secondary);
`;

export const SourceUrlsUl = styled.ul`
  font-size: var(--fs-bs);
  line-height: var(--lh-bs);
  font-weight: var(--fw-regular);
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
