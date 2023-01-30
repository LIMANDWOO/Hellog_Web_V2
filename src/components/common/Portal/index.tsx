import { isServer } from "@/utils/env";
import ReactDOM from "react-dom";
import { PortalProps } from "./types";

export const Portal = ({ children, selector }: PortalProps) => {
  if (!children) {
    throw new Error("children are required");
  }

  const selectedDOM = !isServer() && document.querySelector(selector);

  console.log(selectedDOM);

  return !!selectedDOM ? ReactDOM.createPortal(children, selectedDOM) : null;
};
