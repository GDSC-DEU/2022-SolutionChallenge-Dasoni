import * as React from "react";

import search from "assets/icons/Search.png";

import { IconButtonWrapper } from "./styles";

export interface IconButtonProps {
  iconType: "Search" | "Hamburger" | "ShowMore" | "Warning";
  color: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function IconButton({
  iconType = "Search",
  color = "#000",
  onClick,
}: IconButtonProps) {
  let icon;
  const defaultIconProps = { fontSize: 24, color: color };

  switch (iconType) {
    case "Search":
      icon = <img src="" style={defaultIconProps} />;
      break;

    case "Hamburger":
      icon = <img src="" style={defaultIconProps} />;
      break;

    case "ShowMore":
      icon = <img src="" style={defaultIconProps} />;
      break;

    case "Warning":
      icon = <img src="" style={defaultIconProps} />;
  }

  return <IconButtonWrapper onClick={onClick}>{icon}</IconButtonWrapper>;
}

export default IconButton;
