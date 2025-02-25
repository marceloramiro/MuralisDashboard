import {
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  Legend,
} from "recharts";
import { theme } from "@/theme";
import { LegendText } from "./styles";
import { useMemo } from "react";

const BAR_COLORS = [theme.colors.light_orange_50, theme.colors.dark_blue_70];

interface BarChartsProps {
  data: {
    date: string;
    [key: string]: number | string;
  }[];
}

function AreaCharts({ data }: BarChartsProps) {
  const courseName = useMemo(() => {
    if (!data[0]) return;
    return Object?.keys(data[0])?.filter((key) => key !== "date");
  }, [data]);

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

        {courseName?.map((course, index) => (
          <Area
            key={course}
            type="monotone"
            dataKey={course}
            stackId="1"
            fillOpacity={1}
            stroke={BAR_COLORS[index % BAR_COLORS.length]}
            fill={BAR_COLORS[index % BAR_COLORS.length]}
          />
        ))}
        <Legend
          iconType="circle"
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
