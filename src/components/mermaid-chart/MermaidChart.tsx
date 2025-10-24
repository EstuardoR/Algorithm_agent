import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidChartProps {
  chart: string;
}

mermaid.initialize({ startOnLoad: false });

const MermaidChart: React.FC<MermaidChartProps> = ({ chart }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const renderChart = async () => {
      try {
        const uniqueId = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(uniqueId, chart);
        ref.current!.innerHTML = svg;
      } catch (err) {
        console.error(err);
      }
    };

    renderChart();
  }, [chart]);

  return <div ref={ref} className="mermaid" />;
};

export default MermaidChart;