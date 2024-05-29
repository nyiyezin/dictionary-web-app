import { useState, useRef, useEffect } from "react";
import { ChevronDown, Moon } from "lucide-react";
import {
  HeaderElement,
  ThemeToggle,
  TogglesWrapper,
  ThemeToggleWrapper,
  FontToggle,
  FontTogglePopUp,
  FontTogglePopUpContainer,
  FontTogglePopUpItem,
  TogglesDivider,
} from "../styles/components";
import { AnimatePresence } from "framer-motion";
import { fontsFamily } from "../libs/constants";

export function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const fontToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.setAttribute("data-theme", "light");
    document.body.setAttribute("data-font", "Mono");
  });

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        fontToggleRef.current &&
        !e.composedPath().includes(fontToggleRef.current)
      ) {
        setIsVisible(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <HeaderElement>
      <img src="/assets/logo.svg" />
      <TogglesWrapper>
        <FontToggle
          ref={fontToggleRef}
          onClick={() => setIsVisible(isVisible === false ? true : false)}>
          <ChevronDown
            stroke="#A445ED"
            stroke-width="1.5"
          />
          <AnimatePresence>
            {isVisible && (
              <FontTogglePopUp
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{
                  duration: 0.15,
                }}>
                <FontTogglePopUpContainer>
                  {fontsFamily.map((item) => (
                    <FontTogglePopUpItem
                      key={item.text}
                      font={item.font}>
                      {item.text}
                    </FontTogglePopUpItem>
                  ))}
                </FontTogglePopUpContainer>
              </FontTogglePopUp>
            )}
          </AnimatePresence>
        </FontToggle>
        <TogglesDivider />
        <ThemeToggleWrapper toggle={false}>
          <ThemeToggle toggle={false} />
        </ThemeToggleWrapper>
        <Moon stroke="currentColor" />
      </TogglesWrapper>
    </HeaderElement>
  );
}
