"use client";

import { motion } from "framer-motion";

interface HexCellProps {
  cx: number;
  cy: number;
  radius: number;
  label: string;
  sublabel?: string;
  isCenter?: boolean;
  href?: string;
  fillColor?: string;
  textColor?: string;
  delay?: number;
  icon?: React.ReactNode;
}

function hexPoints(cx: number, cy: number, r: number): string {
  const angles = [90, 150, 210, 270, 330, 30]; // flat-top orientation
  return angles
    .map((a) => {
      const rad = (a * Math.PI) / 180;
      return `${cx + r * Math.cos(rad)},${cy - r * Math.sin(rad)}`;
    })
    .join(" ");
}

export default function HexCell({
  cx,
  cy,
  radius,
  label,
  sublabel,
  isCenter = false,
  href,
  fillColor = "#EFEFF6",
  textColor = "#1a1a1b",
  delay = 0,
  icon,
}: HexCellProps) {
  const points = hexPoints(cx, cy, radius);

  const content = (
    <motion.g
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3, ease: "easeOut" }}
      style={{ cursor: href ? "pointer" : "default", transformOrigin: `${cx}px ${cy}px` }}
      whileHover={href ? { scale: 1.08 } : undefined}
    >
      <polygon
        points={points}
        fill={fillColor}
        stroke="#D3D6DA"
        strokeWidth="2"
      />
      {icon && (
        <foreignObject
          x={cx - 12}
          y={cy - (sublabel ? 18 : 12)}
          width={24}
          height={24}
        >
          <div style={{ color: textColor, fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </div>
        </foreignObject>
      )}
      <text
        x={cx}
        y={cy + (icon ? 10 : sublabel ? -4 : 5)}
        textAnchor="middle"
        fill={textColor}
        fontSize={isCenter ? 13 : 11}
        fontWeight={isCenter ? "700" : "600"}
        fontFamily="'Libre Franklin', system-ui, sans-serif"
        letterSpacing="0.05em"
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={cx}
          y={cy + (icon ? 22 : 10)}
          textAnchor="middle"
          fill={textColor}
          fontSize={9}
          fontFamily="'Libre Franklin', system-ui, sans-serif"
          opacity={0.7}
        >
          {sublabel}
        </text>
      )}
    </motion.g>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
