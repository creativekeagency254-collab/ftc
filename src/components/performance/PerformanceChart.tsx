import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';

interface ChartProps {
  type: 'bar' | 'line' | 'pie' | 'area';
  data: Array<{ name: string; value: number }>;
  title: string;
  description?: string;
  colors?: string[];
}

const PerformanceChart: React.FC<ChartProps> = ({
  type,
  data,
  title,
  description,
  colors = ['#2f855a', '#276749', '#4a5568', '#1a202c'],
}) => {
  const axisStyle = { fontSize: 12, fill: '#475569' };
  const numericValues = data.map((item) => item.value);
  const averageValue = numericValues.length ? numericValues.reduce((sum, current) => sum + current, 0) / numericValues.length : 0;
  const peakPoint = data.length ? data.reduce((peak, current) => (current.value > peak.value ? current : peak), data[0]) : null;

  const tooltipStyles = {
    contentStyle: {
      borderRadius: '10px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 8px 24px rgba(15, 23, 42, 0.08)',
      fontSize: '12px',
      backgroundColor: '#ffffff',
    },
    cursor: { fill: 'rgba(148, 163, 184, 0.12)' },
    formatter: (value: number | string) => [Number(value).toLocaleString(), 'Value'],
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={axisStyle} />
              <YAxis tick={axisStyle} />
              <Tooltip {...tooltipStyles} />
              <Bar
                dataKey="value"
                fill={colors[0]}
                radius={[10, 10, 0, 0]}
                animationDuration={1400}
                animationEasing="ease-out"
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={axisStyle} />
              <YAxis tick={axisStyle} />
              <Tooltip {...tooltipStyles} />
              <Line
                type="monotone"
                dataKey="value"
                stroke={colors[0]}
                strokeWidth={3}
                dot={{ r: 3, fill: colors[0] }}
                animationDuration={1500}
                animationEasing="ease-out"
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={98}
                innerRadius={50}
                dataKey="value"
                label
                animationDuration={1500}
                animationEasing="ease-out"
              >
                {data.map((_, index) => (
                  <Cell key={index} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip {...tooltipStyles} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'area':
        return (
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={axisStyle} />
              <YAxis tick={axisStyle} />
              <Tooltip {...tooltipStyles} />
              <Area
                type="monotone"
                dataKey="value"
                stroke={colors[0]}
                fill={colors[0]}
                fillOpacity={0.2}
                strokeWidth={2.5}
                animationDuration={1500}
                animationEasing="ease-out"
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
            </AreaChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <article className="performance-chart-card rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h3 className="mb-1 text-lg font-bold text-slate-800">{title}</h3>
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.13em] text-slate-500">
          {type}
        </span>
      </div>
      {renderChart()}
      <div className="mt-3 grid grid-cols-1 gap-2 text-xs text-slate-600 sm:grid-cols-3">
        <p className="rounded-md bg-slate-50 px-2.5 py-1.5">
          <span className="font-semibold text-slate-700">Data Points:</span> {data.length}
        </p>
        <p className="rounded-md bg-slate-50 px-2.5 py-1.5">
          <span className="font-semibold text-slate-700">Average:</span> {Math.round(averageValue).toLocaleString()}
        </p>
        <p className="rounded-md bg-slate-50 px-2.5 py-1.5">
          <span className="font-semibold text-slate-700">Peak:</span> {peakPoint ? `${peakPoint.name} (${peakPoint.value.toLocaleString()})` : 'N/A'}
        </p>
      </div>
    </article>
  );
};

export default PerformanceChart;
