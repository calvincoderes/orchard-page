import React, { ReactNode } from "react";
import { spacing } from "@/styles/theme";

interface FlexContainerProps {
  children: ReactNode;
  layoutVariant?: "main-layout" | " none";
  direction?: "row" | "column";
  styles?: object;
  id?: string;
}

const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  layoutVariant = "none",
  direction = "column",
  styles = {},
  id = "",
}) => {
  const flexDirection = direction === "column" ? "flex-col" : "flex-row";
  const layoutMargins = `mx-5 sm:mx-10 lg:mx-auto`
  const layoutWidth = `w-8/12 lg:w-9/12 sm:w-11/12`
  const layoutPaddings = `py-12 sm:py-12 md:py-44 lg:py-44`
  const defaultLayout =
    layoutVariant === "main-layout"
      ? `${layoutMargins} ${layoutWidth} ${layoutPaddings}`
      : `mx-auto`;

  const appliedStyles = {
    ...styles,
  };

  return (
    // <div id={id} className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div id={id} className={`container ${defaultLayout}`}>
      <div
        id={id}
        className={`flex flex-wrap justify-center ${flexDirection}`}
        style={appliedStyles}
      >
        {children}
      </div>
    </div>
  );
};

export default FlexContainer;
