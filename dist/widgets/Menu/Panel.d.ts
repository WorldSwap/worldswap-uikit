import React from "react";
import { PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps {
    logoUrl: string;
    showMenu: boolean;
    isMobile: boolean;
}
declare const Panel: React.FC<Props>;
export default Panel;
