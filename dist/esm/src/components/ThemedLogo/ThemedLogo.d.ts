import React, { FC } from "react";
/**
 * Utility function to create a logo variant from raw SVG content
 * Just paste your SVG content and this will format it properly!
 *
 * @param svgContent - The raw SVG content (everything inside <svg>...</svg>)
 * @param viewBox - The viewBox attribute from your SVG (e.g., "0 0 375 112.5")
 * @param useThemeColor - Whether to use theme colors (false = preserve original colors)
 * @returns A logo variant object ready to use
 *
 * Example usage:
 * const myLogo = createLogoVariant(`
 *   <path fill="#FF0000" d="M10,10 L20,20..."/>
 *   <circle fill="#00FF00" cx="50" cy="50" r="25"/>
 * `, "0 0 100 50", false);
 */
export declare const createLogoVariant: (svgContent: string, viewBox: string, useThemeColor?: boolean) => {
    viewBox: string;
    useThemeColor: boolean;
    content: import("react/jsx-runtime").JSX.Element;
};
declare const logoVariants: {
    minio: {
        viewBox: string;
        useThemeColor: boolean;
        content: import("react/jsx-runtime").JSX.Element;
    };
    custom: {
        viewBox: string;
        useThemeColor: boolean;
        content: import("react/jsx-runtime").JSX.Element;
    };
    demo: {
        viewBox: string;
        useThemeColor: boolean;
        content: import("react/jsx-runtime").JSX.Element;
    };
};
export interface ThemedLogoProps {
    width?: string | number;
    onClick?: React.MouseEventHandler<SVGSVGElement>;
    variant?: keyof typeof logoVariants;
}
declare const ThemedLogo: FC<ThemedLogoProps>;
export default ThemedLogo;
