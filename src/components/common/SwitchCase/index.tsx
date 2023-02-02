import { SwitchCaseProps } from "./types";

const SwitchCase = <Case extends string>({
  value,
  caseBy,
  defaultComponent = null,
}: SwitchCaseProps<Case>) => {
  if (value === null) {
    return defaultComponent;
  }

  return caseBy[value] ?? defaultComponent;
};

export default SwitchCase;
