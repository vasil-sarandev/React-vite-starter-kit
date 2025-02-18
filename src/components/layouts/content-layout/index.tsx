import { Helmet, Typography } from '@/components';

interface IProps {
  children: React.ReactNode;
  title: string;
  showTitle?: boolean;
  showBreadcrumbs?: boolean;
}

export const ContentLayout = ({
  children,
  title,
  showTitle = true,
  showBreadcrumbs = true,
}: IProps) => {
  return (
    <>
      <Helmet title={title} />
      <div className="content-layout">
        <div className="content-layout__header">
          {/* TODO: add breadcrumbs here at some point. */}
          {showBreadcrumbs && <div className="content-layout__breadcrumbs"></div>}
          {showTitle && (
            <div className="content-layout__title">
              <Typography variant="h5">{title}</Typography>
            </div>
          )}
        </div>
        {children}
      </div>
    </>
  );
};
