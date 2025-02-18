import { CircularProgress } from '@/components';
import { useApp100vh } from '@/lib/shared';

import './index.scss';

export const SuspenseLoader = () => {
  const height = useApp100vh();
  return (
    <div className="suspense-loader" style={{ height }}>
      <CircularProgress />
    </div>
  );
};
