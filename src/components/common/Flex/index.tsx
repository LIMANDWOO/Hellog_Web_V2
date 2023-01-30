import { FlexContainer } from "./style";
import { FlexProps } from "./types";

const Flex = ({
  children,
  gap,
  justify,
  align,
  direction,
  wrap,
  customStyle,
}: FlexProps) => {
  return (
    <FlexContainer
      gap={gap}
      justify={justify}
      align={align}
      direction={direction}
      wrap={wrap}
      style={{ ...customStyle }}
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;
