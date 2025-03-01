declare module "@lordicon/react" {
  import React from "react";

  export interface LordIconProps {
    src: string;
    trigger?: "hover" | "loop" | "click" | "morph" | "morph-two-way";
    colors?: {
      primary?: string;
      secondary?: string;
    };
    size?: number;
    onComplete?: () => void;
  }

  export const LordIcon: React.FC<LordIconProps>;
}
