import styled from "styled-components";

export const Meaning = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }
`;

export const PartOfSpeech = styled.div`
  font-size: var(--font-size-heading-medium);
  line-height: var(--line-height-heading-medium);
  font-weight: var(--font-weight-bold);

  display: flex;
  align-items: center;
  column-gap: 20px;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-body-medium);
    line-height: var(--line-height-body-medium);

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

export const DefinitionsWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 64px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const DefinitionsTitle = styled.p`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-regular);
  color: var(--secondary);

  &:not(:last-child) {
    margin-bottom: 25px;
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);

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
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  font-weight: var(--font-weight-regular);

  &:not(:last-child) {
    margin-bottom: 13px;
  }

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export const DefinitionExample = styled.p`
  font-size: var(--font-size-body-medium);
  line-height: var(--line-height-body-medium);
  font-weight: var(--font-weight-regular);

  color: var(--secondary);

  @media (max-width: 425px) {
    font-size: 15px;
    line-height: var(--line-height-body-mediums);
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
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-regular);
  color: var(--secondary);

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);
  }
`;

export const VariantWords = styled.div`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-bold);
  color: var(--accent);

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);
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
