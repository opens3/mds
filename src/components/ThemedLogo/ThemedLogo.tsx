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
        <defs>
          <clipPath id="a1c7b7714d">
            <path d="M 12.03125 11.199219 L 79.976562 11.199219 L 79.976562 94.828125 L 12.03125 94.828125 Z M 12.03125 11.199219 " clipRule="nonzero"/>
          </clipPath>
        </defs>
        <g clipPath="url(#a1c7b7714d)">
          <path fill="#069990" d="M 45.910156 11.199219 C 55.261719 11.199219 63.730469 14.992188 69.863281 21.121094 C 75.992188 27.253906 79.785156 35.722656 79.785156 45.074219 C 79.785156 54.425781 75.992188 62.890625 69.863281 69.023438 C 67.03125 71.855469 63.699219 74.183594 60.015625 75.875 L 60.015625 85.910156 L 54.011719 85.910156 L 54.011719 39.679688 L 60.015625 39.679688 L 60.015625 69.109375 C 62.066406 67.90625 63.945312 66.445312 65.613281 64.777344 C 70.65625 59.734375 73.777344 52.765625 73.777344 45.074219 C 73.777344 37.378906 70.65625 30.410156 65.613281 25.367188 C 60.570312 20.324219 53.605469 17.207031 45.910156 17.207031 C 38.21875 17.207031 31.25 20.324219 26.207031 25.367188 C 21.164062 30.410156 18.042969 37.378906 18.042969 45.074219 C 18.042969 52.765625 21.164062 59.734375 26.207031 64.777344 C 27.875 66.445312 29.757812 67.90625 31.804688 69.109375 L 31.804688 39.679688 L 37.8125 39.679688 L 37.8125 85.910156 L 31.804688 85.910156 L 31.804688 75.875 C 28.121094 74.1875 24.792969 71.855469 21.960938 69.023438 C 15.832031 62.894531 12.039062 54.425781 12.039062 45.074219 C 12.039062 35.722656 15.832031 27.253906 21.960938 21.121094 C 28.089844 14.992188 36.558594 11.199219 45.910156 11.199219 Z M 42.90625 94.980469 L 42.90625 30.609375 L 48.914062 30.609375 L 48.914062 94.980469 Z M 42.90625 94.980469 " fillOpacity="1" fillRule="nonzero"/>
        </g>
        <g fill="#069990" fillOpacity="1">
          <g transform="translate(102.311631, 69.267177)">
            <g>
              <path d="M 3.988281 0 L 11.96875 0 L 11.96875 -12.234375 L 18.03125 -12.234375 C 27.023438 -12.234375 34.097656 -15.105469 34.097656 -24.734375 C 34.097656 -34.363281 27.023438 -37.238281 18.03125 -37.238281 L 3.988281 -37.238281 Z M 11.96875 -19.257812 L 11.96875 -30.214844 L 18.40625 -30.214844 C 22.449219 -30.214844 25.90625 -29.097656 25.90625 -24.734375 C 25.90625 -20.375 22.449219 -19.257812 18.40625 -19.257812 Z M 11.96875 -19.257812 "/>
            </g>
          </g>
        </g>
        <g fill="#069990" fillOpacity="1">
          <g transform="translate(145.451177, 69.267177)">
            <g>
              <path d="M 3.988281 0 L 30.535156 0 L 30.535156 -7.023438 L 11.96875 -7.023438 L 11.96875 -15.265625 L 28.617188 -15.265625 L 28.617188 -22.289062 L 11.96875 -22.289062 L 11.96875 -30.214844 L 30.214844 -30.214844 L 30.214844 -37.238281 L 3.988281 -37.238281 Z M 3.988281 0 "/>
            </g>
          </g>
        </g>
        <g fill="#069990" fillOpacity="1">
          <g transform="translate(186.037479, 69.267177)">
            <g>
              <path d="M 16.332031 0.746094 C 24.152344 0.746094 30.851562 -1.863281 30.851562 -10.214844 C 30.851562 -23.457031 10.53125 -21.066406 10.53125 -27.5 C 10.53125 -29.789062 12.5 -30.90625 16.597656 -30.960938 C 20.746094 -31.011719 24.894531 -29.84375 28.035156 -27.609375 L 28.035156 -35.109375 C 24.894531 -36.917969 20.375 -37.980469 15.957031 -37.980469 C 8.617188 -37.980469 2.339844 -34.578125 2.339844 -27.394531 C 2.339844 -14.203125 22.660156 -16.808594 22.660156 -9.839844 C 22.660156 -7.179688 20.054688 -6.277344 15.746094 -6.277344 C 11.488281 -6.277344 6.808594 -7.394531 2.554688 -10.214844 L 2.554688 -2.605469 C 6.382812 -0.480469 11.171875 0.746094 16.332031 0.746094 Z M 16.332031 0.746094 "/>
            </g>
          </g>
        </g>
        <g fill="#069990" fillOpacity="1">
          <g transform="translate(226.145044, 69.267177)">
            <g>
              <path d="M 3.988281 0 L 30.269531 0 L 30.269531 -7.234375 L 11.96875 -7.234375 L 11.96875 -37.238281 L 3.988281 -37.238281 Z M 3.988281 0 "/>
            </g>
          </g>
        </g>
        <g fill="#069990" fillOpacity="1">
          <g transform="translate(264.816406, 69.267177)">
            <g>
              <path d="M 24.042969 -37.238281 L 15.320312 -37.238281 L 0.160156 0 L 8.457031 0 L 11.171875 -6.914062 L 28.191406 -6.914062 L 30.90625 0 L 39.203125 0 Z M 13.671875 -13.617188 L 18.832031 -26.863281 C 19.148438 -27.609375 19.363281 -28.351562 19.683594 -29.628906 C 20 -28.351562 20.214844 -27.609375 20.480469 -26.863281 L 25.691406 -13.617188 Z M 13.671875 -13.617188 "/>
            </g>
          </g>
        </g>
        <g fill="#069990" fillOpacity="1">
          <g transform="translate(311.892205, 69.267177)">
            <g>
              <path d="M 22.023438 0.746094 C 25.960938 0.746094 29.683594 -0.105469 32.875 -1.648438 L 32.875 -9.46875 C 30.585938 -7.5 27.074219 -6.382812 23.246094 -6.382812 C 16.808594 -6.382812 10.105469 -10 10.105469 -18.191406 C 10.160156 -27.128906 16.757812 -30.851562 23.246094 -30.851562 C 26.703125 -30.851562 30.160156 -29.84375 32.609375 -27.925781 L 32.609375 -35.585938 C 29.363281 -37.183594 25.640625 -37.980469 21.917969 -37.980469 C 11.96875 -37.980469 1.96875 -31.808594 1.914062 -18.191406 C 1.914062 -5.214844 12.074219 0.746094 22.023438 0.746094 Z M 22.023438 0.746094 "/>
            </g>
          </g>
        </g>
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
  `, "0 0 65 65", false)
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
