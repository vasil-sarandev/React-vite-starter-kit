import { ContentLayout, Typography } from '@/components';
import { paths } from '@/config';
import { Link } from 'react-router';

const NotFoundPage = () => {
  return (
    <ContentLayout title="Not Found">
      <Typography variant="body1">The requested page doesn't exist...</Typography>
      <Link to={paths.home.getHref()}>Back to home</Link>
    </ContentLayout>
  );
};

export default NotFoundPage;
