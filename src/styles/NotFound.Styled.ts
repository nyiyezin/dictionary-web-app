import styled from "styled-components";

export const NotFoundElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 87px;
`;

export const NotFoundTitle = styled.h2` 
    font-size: var(--font-size-heading-small);
    line-height: var(--line-height-heading-smal);
    font-weight: var(--font-weight-bold);

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const NotFoundText = styled.p`
    font-size: var(--font-size-body-medium);
    line-height: var(--line-height-body-medium);
    font-weight: var(--font-weight-regular);
    color: var(--secondary)
`;
