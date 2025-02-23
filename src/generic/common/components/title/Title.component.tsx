import { Title } from '@/src/generic/common/components/title/Title.type';

export const TitleComponent = ({ className, children, tag: Tag = 'h2' }: Title) => {
  return <Tag className={className}>{children}</Tag>;
};
