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

interface BarChartsProps {
  data: {
    date: string;
    course_a: number;
    course_b: number;
  }[];
}

function BarCharts({ data }: BarChartsProps) {
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
          <Bar
            dataKey="course_a"
            name={"Curso A"}
            fill={theme.colors.light_orange_50}
            activeBar={<Rectangle fill={theme.colors.light_orange_100} />}
          />
          <Bar
            dataKey="course_b"
            name={"Curso B"}
            fill={theme.colors.dark_blue_70}
            activeBar={<Rectangle fill={theme.colors.dark_blue_100} />}
          />
        </BarChart>
      </ResponsiveContainer>
    </MainContainer>
  );
}

export { BarCharts };
