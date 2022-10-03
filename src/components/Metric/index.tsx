import { FaPlus } from 'react-icons/fa'
import { MetricContainer, MetricData, MetricLabel } from './MetricElements';

interface MetricProps {
  data: number | string;
  label: string
}

const Metric = ({ data, label }: MetricProps) => {
  return (
    <MetricContainer>
      <MetricData>
        {data}
        <FaPlus size={20} color="#2387c0" fontWeight="bold" />
      </MetricData>
      <MetricLabel>
        {label}
      </MetricLabel>
    </MetricContainer>
  )
}

export default Metric