import { useId } from "react";
import Svg, { Defs, ClipPath, Rect, G } from "react-native-svg";
import { StyleSheet } from "react-native";

interface Band {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

interface GlossyOverlayProps {
  width: number;
  height: number;
  borderRadius: number;
  bands: Band[];
  inset?: number;
}

export function GlossyOverlay({
  width,
  height,
  borderRadius,
  bands,
  inset = 4,
}: GlossyOverlayProps) {
  const clipId = `glossy${useId()}`;

  const innerRadius = Math.max(0, borderRadius - inset);

  return (
    <Svg
      width={width}
      height={height}
      style={StyleSheet.absoluteFill}
      pointerEvents="none"
    >
      <Defs>
        <ClipPath id={clipId}>
          <Rect
            x={inset}
            y={inset}
            width={width - inset * 2}
            height={height - inset * 2}
            rx={innerRadius}
            ry={innerRadius}
          />
        </ClipPath>
      </Defs>
      <G clipPath={`url(#${clipId})`}>
        {bands.map((band, i) => (
          <Rect
            key={i}
            x={band.x}
            y={band.y}
            width={band.width}
            height={band.height}
            fill="white"
            fillOpacity={0.4}
            transform={`rotate(${band.rotation} ${band.x} ${band.y})`}
          />
        ))}
      </G>
    </Svg>
  );
}
