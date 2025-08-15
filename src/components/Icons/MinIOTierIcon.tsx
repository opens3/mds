// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React, { SVGProps } from "react";

const MinIOTierIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 375 375" preserveAspectRatio="xMidYMid meet" version="1.2">
  <defs>
    <clipPath id="a7b2924607">
      <path d="M 42.734375 5.261719 L 337.484375 5.261719 L 337.484375 369.761719 L 42.734375 369.761719 Z"/>
    </clipPath>
  </defs>
  <g>
    <rect x="0" y="0" width="375" height="375" rx="20" ry="20" fill="#ffffff" stroke="none" />
    <rect x="0" y="0" width="375" height="375" rx="20" ry="20" fill="#157878" stroke="none" />
    <g clipPath="url(#a7b2924607)">
      <path stroke="none" fillRule="nonzero" fill="#ffffff" fillOpacity="1" d="M 190.109375 5.261719 C 230.792969 5.261719 267.628906 21.761719 294.296875 48.425781 C 320.960938 75.09375 337.457031 111.929688 337.457031 152.613281 C 337.457031 193.296875 320.960938 230.128906 294.296875 256.796875 C 281.980469 269.113281 267.496094 279.253906 251.46875 286.609375 L 251.46875 330.261719 L 225.34375 330.261719 L 225.34375 129.152344 L 251.46875 129.152344 L 251.46875 257.171875 C 260.378906 251.933594 268.558594 245.589844 275.824219 238.328125 C 297.761719 216.386719 311.335938 186.082031 311.335938 152.613281 C 311.335938 119.144531 297.761719 88.835938 275.824219 66.898438 C 253.886719 44.960938 223.578125 31.390625 190.109375 31.390625 C 156.640625 31.390625 126.332031 44.960938 104.394531 66.898438 C 82.457031 88.835938 68.886719 119.144531 68.886719 152.613281 C 68.886719 186.082031 82.457031 216.386719 104.394531 238.328125 C 111.660156 245.589844 119.839844 251.933594 128.75 257.171875 L 128.75 129.152344 L 154.875 129.152344 L 154.875 330.261719 L 128.75 330.261719 L 128.75 286.609375 C 112.722656 279.257812 98.238281 269.113281 85.925781 256.796875 C 59.257812 230.128906 42.761719 193.296875 42.761719 152.613281 C 42.761719 111.929688 59.257812 75.09375 85.925781 48.425781 C 112.589844 21.761719 149.429688 5.261719 190.109375 5.261719 Z M 177.046875 369.714844 L 177.046875 89.699219 L 203.171875 89.699219 L 203.171875 369.714844 Z"/>
    </g>
  </g>
</svg>
  );
};

export default MinIOTierIcon;
