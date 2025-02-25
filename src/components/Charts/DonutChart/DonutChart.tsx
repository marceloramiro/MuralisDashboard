import { useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { theme } from "@/theme";
import {
  ActiveShape,
  ActiveShapeProps,
} from "./components/ActiveShape/ActiveShape";
import { LegendText } from "./styles";

const COLORS = [theme.colors.light_orange_50, theme.colors.dark_blue_70];

interface DonutChartProps {
  data: {
    course: string;
    value: number;
  }[];
}

const DonutChart = ({ data }: DonutChartProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: unknown, index: number) => {
    setActiveIndex(index);
  };

  return (
    <ResponsiveContainer
      width={"100%"}
      height={"100%"}
      maxHeight={300}
      minHeight={250}
    >
      <PieChart>
        <Pie
          activeIndex={activeIndex}
          dataKey={"value"}
          nameKey={"course"}
          data={data}
          innerRadius={50}
          outerRadius={80}
          activeShape={(props: unknown) => (
            <ActiveShape {...(props as ActiveShapeProps)} />
          )}
          onMouseEnter={onPieEnter}
        >
          {data?.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          verticalAlign="bottom"
          align="center"
          wrapperStyle={{ transform: "translateY(10px)" }}
          formatter={(value) => <LegendText>{value}</LegendText>}
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export { DonutChart };
