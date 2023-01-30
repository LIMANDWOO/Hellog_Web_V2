import React from "react";

export interface DialogProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  width?: number;
  customStyle?: React.CSSProperties;
}

export interface DialogTitleProps {
  children: React.ReactNode;
}

export interface DialogContentsProps {
  children: React.ReactNode;
}

export interface DialogButtonsProps {
  children: React.ReactNode;
}
