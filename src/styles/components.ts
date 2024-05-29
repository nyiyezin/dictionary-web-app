import { motion } from "framer-motion";
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

export const HeaderElement = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 52px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const TogglesWrapper = styled.div`
  display: flex;
  column-gap: 26px;
  align-items: center;

  @media (max-width: 425px) {
    column-gap: 16px;
  }
`;

export const TogglesDivider = styled.div`
    width: 1px;
    height: 32px;
    background-color: var(--color-line);
`

export const FontToggle = styled.button`
  font-weight: var(--fw-bold);
  font-size: var(--fs-bm);
  line-height: var(--lh-bm);

  display: flex;
  align-items: center;
  column-gap: 19px;

  position: relative;

  @media (max-width: 425px) {
    column-gap: 17px;

    font-size: var(--fs-bs);
    line-height: var(--lh-bm);
  }
`;

export const FontTogglePopUp = styled(motion.div)`
  min-width: 183px;
  background-color: var(--colors-bg);
  box-shadow: var(--shadow);
  border-radius: 16px;
  overflow: hidden;

  text-align: left;

  position: absolute;
  top: 40px;
  right: 0;
  z-index: 10;
`;

export const FontTogglePopUpContainer = styled.ul`
  padding: 24px;
`;

export const FontTogglePopUpItem = styled.li<{ font: string }>`
  font-size: var(--fs-bm);
  line-height: var(--lh-bm);

  font-family: var(${(props) => props.font});

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:hover {
    color: var(--accent);
    transition: color 0.15s ease 0s;
  }
`;

export const ThemeToggleWrapper = styled.div<{ toggle: boolean }>`
  color: ${(props) => (props.toggle ? "var(--accent)" : "var(--secondary)")};
  display: flex;
  column-gap: 20px;
  align-items: center;

  transition: color 0.15s ease 0s;

  @media (max-width: 425px) {
    column-gap: 12px;
  }
`;

export const ThemeToggle = styled.div<{ toggle: boolean }>`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${(props) =>
    props.toggle ? "var(--accent)" : "var(--secondary)"};

  position: relative;
  cursor: pointer;

  transition: background-color 0.15s ease 0s;

  &:hover {
    background-color: var(--accent);
    transition: background-color 0.15s ease 0s;
  }

  &::before {
    content: "";
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #ffffff;

    position: absolute;
    top: 50%;
    left: ${(props) => (props.toggle ? "23px" : "3px")};
    transform: translateY(-50%);

    transition: left 0.15s ease 0s;
  }
`;
