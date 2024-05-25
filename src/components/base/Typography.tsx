import { cn } from "@/lib/utils";
import {
  ComponentPropsWithRef,
  ForwardRefRenderFunction,
  forwardRef,
} from "react";

type TypographyStyling =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "base"
  | "lead"
  | "large"
  | "small";

const stylingMap: Record<TypographyStyling, string> = {
  h1: "text-4xl lg:text-5xl tracking-tight",
  h2: "text-3xl tracking-tight",
  h3: "text-2xl tracking-tight",
  h4: "text-xl tracking-tight",
  base: "leading-7",
  lead: "text-xl",
  large: "text-lg",
  small: "text-sm",
};

type TypographyWeight = "light" | "normal" | "medium" | "bold";

const weightMap: Record<TypographyWeight, string> = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold",
};

type Props = {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  styling?: TypographyStyling;
  weight?: TypographyWeight;
  isMuted?: boolean;
  isUnderlined?: boolean;
  isUppercase?: boolean;
};

export type TypographyProps = ComponentPropsWithRef<"p"> & Props;

const TypographyComponent: ForwardRefRenderFunction<
  HTMLParagraphElement,
  TypographyProps
> = (props, ref) => {
  const {
    level: Level = "p",
    weight = "normal",
    styling = "base",
    isUppercase = false,
    isUnderlined,
    isMuted,
    className,
    children,
    ...rest
  } = props;

  return (
    <Level
      {...rest}
      ref={ref}
      className={cn(
        stylingMap[styling],
        weightMap[weight],
        isUnderlined && "underline",
        isMuted && "text-muted-foreground",
        isUppercase && "uppercase",
        className
      )}
    >
      {children}
    </Level>
  );
};

export const Typography = forwardRef(TypographyComponent);
