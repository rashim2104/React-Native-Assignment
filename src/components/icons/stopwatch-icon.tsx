import Svg, { Path, ClipPath, Defs, G, Rect } from "react-native-svg";

import { palette } from "@/theme";

interface StopwatchIconProps {
  size?: number;
  color?: string;
}

export function StopwatchIcon({
  size = 20,
  color = palette.grey60,
}: StopwatchIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Defs>
        <ClipPath id="stopwatch_clip">
          <Rect width={20} height={20} fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#stopwatch_clip)">
        <Path
          d="M20.5 4.5L18.364 6.63604M18.364 6.63604C16.7353 5.00736 14.4853 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13C21 10.5147 19.9926 8.26472 18.364 6.63604ZM12 10V14M14 1H10"
          stroke={color}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
