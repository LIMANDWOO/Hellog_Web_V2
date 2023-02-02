import React from "react";

import { useServerInsertedHTML } from "next/navigation";
import useStyledComponentsRegistry from "@/libs/styled-components/hook/useStyledComponentsRegistry";

interface Props {
  children: React.ReactNode;
}

const StyledComponentsProvider = ({ children }: Props) => {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => <>{styledComponentsFlushEffect()}</>);

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
};

export default StyledComponentsProvider;
