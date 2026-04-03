import Svg, { Path } from "react-native-svg";

import { palette } from "@/theme";

interface PlayIconProps {
  size?: number;
  color?: string;
}

export function PlayIcon({ size = 20, color = palette.orange30 }: PlayIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.24364 2.69403C7.6521 1.72142 6.85633 1.23512 6.20071 1.29247C5.62912 1.34247 5.10653 1.63556 4.76581 2.09721C4.375 2.62674 4.375 3.55934 4.375 5.42454V14.5751C4.375 16.4403 4.375 17.3729 4.76581 17.9024C5.10653 18.3641 5.62912 18.6572 6.20071 18.7072C6.85633 18.7645 7.6521 18.2782 9.24364 17.3056L16.7305 12.7303C18.2078 11.8275 18.9464 11.3761 19.1982 10.795C19.4181 10.2877 19.4181 9.71197 19.1982 9.20463C18.9464 8.62351 18.2078 8.17212 16.7305 7.26932L9.24364 2.69403Z"
        fill={color}
      />
    </Svg>
  );
}
