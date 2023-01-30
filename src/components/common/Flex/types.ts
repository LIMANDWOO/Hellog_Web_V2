import React from "react";

export type FlexJustifyType = "center" | "start" | "end" | "between" | "around";
export type FlexAlignType = "start" | "end" | "center" | "baseline";
export type FlexDirectionType = "row" | "column";
export type FlexWrapType = "nowrap" | "wrap";

export const FlexJustify = {
  center: "center",
  start: "start",
  end: "end",
  between: "space-between",
  around: "space-around",
};

export const FlexAlign = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  baseline: "baseline",
};

export const FlexDirection = {
  row: "row",
  column: "column",
};

export const FlexWrap = {
  nowrap: "nowrap",
  wrap: "wrap",
};

export interface FlexProps {
  children: React.ReactNode;
  gap?: number;
  justify?: FlexJustifyType;
  align?: FlexAlignType;
  direction?: FlexDirectionType;
  wrap?: FlexWrapType;
  customStyle?: React.CSSProperties;
}
