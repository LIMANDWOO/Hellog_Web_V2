import React, { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import { useServerInsertedHTML } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

const StyledComponentsProvider = ({ children }: Props) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== undefined) return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children as React.ReactElement}
    </StyleSheetManager>
  );
};

export default StyledComponentsProvider;
