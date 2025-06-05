import { Helmet as ReactHelmet } from 'react-helmet';

export const DEFAULT_PAGE_TITLE = 'Cloud Admin';

interface IProps {
  title: string;
  description?: string;
  addPrefix?: boolean;
}

const createPageSeoTitle = ({ addPrefix, title }: { addPrefix: boolean; title: string }) => {
  return `${addPrefix ? 'Cloud Admin | ' : ''}${title}`;
};

export const Helmet = ({ title, description = '', addPrefix = true }: IProps) => {
  return (
    <ReactHelmet title={createPageSeoTitle({ addPrefix, title })} defaultTitle={DEFAULT_PAGE_TITLE}>
      <meta name="description" content={description} />
    </ReactHelmet>
  );
};
