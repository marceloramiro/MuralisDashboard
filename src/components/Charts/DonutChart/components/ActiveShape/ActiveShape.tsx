import { theme } from "@/theme";
import { Sector, type PieLabelRenderProps } from "recharts";
import { SvgText } from "./style";

export interface ActiveShapeProps {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fill: string;
  payload: PieLabelRenderProps;
}

function ActiveShape({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
}: ActiveShapeProps) {
  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <SvgText
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill={theme.colors.dark_100}
      >
        {payload.value}%
      </SvgText>
    </g>
  );
}

export { ActiveShape };
