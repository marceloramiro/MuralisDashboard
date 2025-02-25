import { format, parseISO } from "date-fns";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { theme } from "@/theme";
import { LegendText, MainContainer, Title } from "./styles";
import { useMemo } from "react";

const BAR_COLORS = [theme.colors.light_orange_50, theme.colors.dark_blue_70];

const ACTIVE_BAR_COLORS = [
  theme.colors.light_orange_100,
  theme.colors.dark_blue_100,
];

interface BarChartsProps {
  data: {
    date: string;
    [key: string]: number | string;
  }[];
}

function BarCharts({ data }: BarChartsProps) {
  const courseName = useMemo(() => {
    if (!data[0]) return;
    return Object?.keys(data[0])?.filter((key) => key !== "date");
  }, [data]);

  return (
    <MainContainer>
      <Title>Inscritos</Title>
      <ResponsiveContainer width="100%" height="100%" minHeight={200}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(value) => format(parseISO(value), "MMM")}
          />
          <YAxis />
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            wrapperStyle={{ paddingLeft: "20px" }}
            formatter={(value) => <LegendText>{value}</LegendText>}
          />
          {courseName?.map((course, index) => (
            <Bar
              key={course}
              dataKey={course}
              name={course}
              fill={BAR_COLORS[index % BAR_COLORS.length]}
              activeBar={
                <Rectangle
                  fill={ACTIVE_BAR_COLORS[index % ACTIVE_BAR_COLORS.length]}
                />
              }
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </MainContainer>
  );
}

export { BarCharts };
