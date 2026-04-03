import Svg, { Path } from "react-native-svg";

import { palette } from "@/theme";

interface StarIconProps {
  size?: number;
  color?: string;
}

export function StarIcon({ size = 10, color = palette.grey50 }: StarIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 10" fill="none">
      <Path
        d="M4.99996 0.416748C4.99996 0.416748 5.75948 2.38906 6.68523 3.31481C7.61098 4.24056 9.58329 5.00008 9.58329 5.00008C9.58329 5.00008 7.61098 5.7596 6.68523 6.68535C5.75948 7.61111 4.99996 9.58342 4.99996 9.58342C4.99996 9.58342 4.24044 7.61111 3.31469 6.68535C2.38894 5.7596 0.416626 5.00008 0.416626 5.00008C0.416626 5.00008 2.38894 4.24056 3.31469 3.31481C4.24044 2.38906 4.99996 0.416748 4.99996 0.416748Z"
        fill={color}
      />
    </Svg>
  );
}
