import { motion } from "framer-motion";
import styled from "styled-components";
import { SearchIcon as Icon } from "lucide-react";

export const SearchElement = styled.div`
  &:not(:last-child) {
    margin-bottom: 45px;
  }

  @media (max-width: 425px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const SearchForm = styled.form`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Input = styled.input.attrs(() => ({
  placeholder: "Search for any word…",
}))<{ alert: boolean }>`
  width: 100%;
  background: var(--colors-bg-input);
  border-radius: 16px;
  padding: 20px 64px 20px 24px;
  outline: 1px solid ${(props) => (props.alert ? "var(--alert)" : "none")};

  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);
  font-weight: var(--font-weight-bold);

  &::placeholder {
    opacity: 0.25;
  }

  &:focus {
    outline: 1px solid
      ${(props) => (props.alert ? "var(--alert)" : "var(--accent)")};
  }

  @media (max-width: 425px) {
    font-size: var(--font-size-body-mediums);
    line-height: var(--line-height-body-mediums);

    padding: 15px 64px 15px 24px;
  }
`;

export const SearchIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
`;

export const AlertMessage = styled(motion.div)`
  font-size: var(--font-size-heading-small);
  line-height: var(--line-height-heading-small);

  color: var(--alert);
`;
