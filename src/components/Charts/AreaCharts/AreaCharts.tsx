import {
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { theme } from "@/theme";
import { LegendText } from "./styles";

interface BarChartsProps {
  data: {
    date: string;
    course_a: number;
    course_b: number;
  }[];
}

function AreaCharts({ data }: BarChartsProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip />
        <Area
          type="monotone"
          dataKey="course_a"
          stackId="1"
          fillOpacity={1}
          stroke={theme.colors.light_orange_100}
          fill={theme.colors.light_orange_50}
        />
        <Area
          type="monotone"
          dataKey="course_b"
          stackId="1"
          fillOpacity={1}
          stroke={theme.colors.dark_blue_100}
          fill={theme.colors.dark_blue_70}
        />
        <Legend
          verticalAlign="top"
          align="left"
          wrapperStyle={{ paddingLeft: "20px" }}
          formatter={(value) => <LegendText>{value}</LegendText>}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export { AreaCharts };
