// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import React, { FC, SVGProps } from "react";
import styled from "styled-components";
import get from "lodash/get";

const Logo = styled.svg((props) => ({
  fill: get(props, `theme.logoColor`, "#C51C3F"),
}));

const CustomLogo = styled.svg(() => ({
  // No fill override - let SVG use its own colors
}));

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
export const createLogoVariant = (
  svgContent: string,
  viewBox: string,
  useThemeColor: boolean = false
) => {
  // Convert the SVG content string to JSX
  const processedContent = (
    <g dangerouslySetInnerHTML={{ __html: svgContent }} />
  );

  return {
    viewBox,
    useThemeColor,
    content: processedContent
  };
};

// Logo variants
const logoVariants = {
  minio: {
    viewBox: "0 0 162.612 24.465",
    useThemeColor: true,
    content: (
      <path d="M52.751.414h9.108v23.63h-9.108zM41.711.74l-18.488 9.92a.919.919 0 0 1-.856 0L3.879.74A2.808 2.808 0 0 0 2.558.414h-.023A2.4 2.4 0 0 0 0 2.641v21.376h9.1V13.842a.918.918 0 0 1 1.385-.682l10.361 5.568a3.634 3.634 0 0 0 3.336.028l10.933-5.634a.917.917 0 0 1 1.371.69v10.205h9.1V2.641A2.4 2.4 0 0 0 43.055.414h-.023a2.808 2.808 0 0 0-1.321.326zm65.564-.326h-9.237v10.755a.913.913 0 0 1-1.338.706L72.762.675a2.824 2.824 0 0 0-1.191-.261h-.016a2.4 2.4 0 0 0-2.535 2.227v21.377h9.163V13.275a.914.914 0 0 1 1.337-.707l24.032 11.2a2.813 2.813 0 0 0 1.188.26 2.4 2.4 0 0 0 2.535-2.227zm7.161 23.63V.414h4.191v23.63zm28.856.421c-11.274 0-19.272-4.7-19.272-12.232C124.02 4.741 132.066 0 143.292 0s19.32 4.7 19.32 12.233-7.902 12.232-19.32 12.232zm0-21.333c-8.383 0-14.84 3.217-14.84 9.1 0 5.926 6.457 9.1 14.84 9.1s14.887-3.174 14.887-9.1c0-5.883-6.504-9.1-14.887-9.1z" />
    )
  },
  custom: {
    viewBox: "0 0 375 112.5",
    useThemeColor: false,
    content: (
      <>
        <defs><clipPath id="a"><path d="M12.031 18.043H88V94H12.031Zm0 0"/></clipPath></defs><path fill="#069990" d="M124.646 75.601q-5.127-.001-9-1.625-3.861-1.622-6.422-4.469a19 19 0 0 1-3.843-6.453 22.6 22.6 0 0 1-1.266-7.531 22.6 22.6 0 0 1 1.266-7.531 18.8 18.8 0 0 1 3.843-6.453q2.56-2.841 6.422-4.47 3.873-1.64 9-1.64 5.139 0 9 1.64 3.855 1.629 6.422 4.47a18.7 18.7 0 0 1 3.828 6.453 22.4 22.4 0 0 1 1.281 7.531 22.4 22.4 0 0 1-1.28 7.531 18.9 18.9 0 0 1-3.829 6.453q-2.565 2.847-6.422 4.47-3.861 1.623-9 1.624m0-7.656q3.969 0 6.64-1.688c1.79-1.125 3.134-2.632 4.032-4.53q1.36-2.842 1.36-6.204 0-3.422-1.36-6.234-1.347-2.812-4.031-4.5-2.673-1.688-6.64-1.688-3.974 0-6.657 1.688-2.672 1.688-4.031 4.5c-.899 1.875-1.344 3.953-1.344 6.234 0 2.242.445 4.309 1.344 6.203a10.7 10.7 0 0 0 4.031 4.531q2.684 1.688 6.656 1.688M159.239 74.836V36.21h14.563c3.132 0 5.953.386 8.453 1.156q3.748 1.158 5.984 3.969 2.233 2.814 2.234 7.843-.001 4.97-2.234 7.813c-1.492 1.887-3.484 3.219-5.984 4q-3.752 1.158-8.453 1.156h-6.282v12.688Zm8.281-19.985h6.672q2.091 0 3.86-.469 1.764-.467 2.843-1.703 1.078-1.249 1.078-3.5 0-2.262-1.078-3.5-1.079-1.249-2.843-1.718-1.769-.47-3.86-.47h-6.672ZM203.986 74.836V36.21h27.203v7.28h-18.922v8.22h17.266v7.28h-17.266v8.563h19.25v7.282ZM246.085 74.836V36.21h7.828l17.89 25.156a74 74 0 0 1-.093-2.563 222 222 0 0 1-.016-2.781V36.211h8.282v38.625h-7.844l-17.875-25.172c.07.812.11 1.683.11 2.609v22.563ZM309.036 75.601c-2.688 0-5.246-.305-7.672-.906q-3.645-.904-6.61-2.563v-7.89q3.295 2.203 6.829 3.14 3.544.938 6.843.938c2.25 0 4.008-.274 5.282-.828q1.906-.826 1.906-2.86c0-1.03-.383-1.894-1.14-2.593q-1.126-1.06-3.032-1.797a81 81 0 0 0-4.14-1.485 64 64 0 0 1-4.47-1.687 20.7 20.7 0 0 1-4.14-2.313 10.6 10.6 0 0 1-3.047-3.406q-1.125-2.015-1.125-4.937 0-3.748 1.938-6.172 1.933-2.437 5.156-3.625 3.233-1.187 7.047-1.188 3.422.001 6.75.782 3.34.767 5.765 2.203v7.78q-2.424-1.762-5.515-2.64a21.7 21.7 0 0 0-6.344-.843q-6.298.066-6.297 3.593 0 1.44 1.125 2.407 1.137.956 3.047 1.671 1.904.72 4.14 1.47 2.232.75 4.47 1.687a21 21 0 0 1 4.14 2.312 10.3 10.3 0 0 1 3.031 3.422q1.138 2.05 1.14 4.969c0 2.906-.694 5.18-2.077 6.812q-2.062 2.457-5.485 3.5c-2.28.696-4.789 1.047-7.515 1.047M349.372 75.601q-3.579 0-6.671-.61-3.096-.59-6.344-1.921v-7.734q3.248 1.782 6.203 2.421a27 27 0 0 0 6.156.563q3.2-.045 5.485-1.156 2.296-1.109 2.296-3.75 0-2.437-1.859-3.375-1.844-.938-4.656-.938h-6.188l.063-7.172 5.187.063q2.75.048 4.344-.969c1.07-.676 1.61-1.66 1.61-2.953q0-2.045-1.735-3.14-1.734-1.11-5.156-1.11-2.55 0-5.438.797c-1.93.531-3.812 1.387-5.656 2.562v-7.718q2.531-1.374 5.672-2.141a27.3 27.3 0 0 1 6.578-.781q3.92 0 6.984 1.156 3.06 1.16 4.829 3.484 1.764 2.313 1.765 5.735c0 1.906-.508 3.57-1.515 4.984q-1.518 2.126-4.172 3.063 1.935.562 3.593 1.78c1.102.805 1.985 1.852 2.641 3.141.664 1.282 1 2.844 1 4.688q0 3.926-2.156 6.375-2.157 2.455-5.578 3.562-3.424 1.092-7.282 1.094m0 0"/><path fill="#c91e1e" fill-rule="evenodd" d="M71.39 34.57H45.997l5.418-5.418h25.399v10.825ZM48.439 53.29H28.555V34.57l5.422-5.418H23.152v25.395l4.145 4.144H71.39v18.715l-5.418 5.422h10.824V57.43l-4.145-4.14ZM23.152 80.116v-8.129l5.418 5.418H53.97l-5.422 5.422H23.152Zm0 0"/><g clip-path="url(#a)"><path fill="#069990" fill-rule="evenodd" d="m47.492 28.191 2.54-2.539h7.542l-5.687-5.683-1.907-1.926-1.921 1.926L32.07 35.957v7.656Zm4.965 55.614 3.102-3.106 12.32-12.32v7.656L49.965 93.95l-7.61-7.61h7.547Zm-11.344-15.11 6.473-6.476H39.93l-.266.27-6.742 6.741-8.133-8.128-2.629-2.633-2.535-2.535v-7.547l-5.687 5.687-1.907 1.922 1.922 1.906 15.988 15.993h5.957l.852-.852Zm17.739-25.394 4.363-4.367.851-.848h5.957l17.91 17.91-1.921 1.906-5.688 5.688v-7.547l-2.535-2.535-2.078-2.063-8.684-8.683-6.742 6.746-.265.265h-7.66Zm0 0"/></g>
      </>
    )
  },

  // Example of how to add a new logo using the utility function:
  // mycompany: createLogoVariant(`
  //   <path fill="#FF5733" d="M10,10 L50,10 L50,50 L10,50 Z"/>
  //   <circle fill="#33FF57" cx="30" cy="30" r="15"/>
  // `, "0 0 60 60", false)

  // Demo logo to show how easy it is:
  demo: createLogoVariant(`
    <rect fill="#4285F4" x="5" y="15" width="25" height="20" rx="3"/>
    <rect fill="#EA4335" x="35" y="15" width="25" height="20" rx="3"/>
    <rect fill="#FBBC04" x="5" y="40" width="25" height="20" rx="3"/>
    <rect fill="#34A853" x="35" y="40" width="25" height="20" rx="3"/>
    <text fill="#202124" x="32.5" y="10" text-anchor="middle" font-family="Arial" font-size="8" font-weight="bold">DEMO</text>
  `, "0 0 65 65", true)
};

export interface ThemedLogoProps {
  width?: string | number;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  variant?: keyof typeof logoVariants;
}

const ThemedLogo: FC<ThemedLogoProps> = ({ width, onClick, variant = "custom" }) => {
  const selectedLogo = logoVariants[variant];
  const LogoComponent = selectedLogo.useThemeColor ? Logo : CustomLogo;
  
  return (
    <LogoComponent 
      viewBox={selectedLogo.viewBox} 
      width={width} 
      onClick={onClick}
    >
      {selectedLogo.content}
    </LogoComponent>
  );
};

export default ThemedLogo;
