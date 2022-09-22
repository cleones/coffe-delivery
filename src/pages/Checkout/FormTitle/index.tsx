import { FormTitleContainer, Subtitle, Title, TitlesWrapper } from './styles';
import { FC, SVGProps } from 'react';

interface FormTitleProps {
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
  variation: 'yellow-dark' | 'purple';
}

export function FormTitle({
  title,
  subtitle,
  variation,
  icon: Icon,
}: FormTitleProps) {
  return (
    <FormTitleContainer variation={variation}>
      <Icon />
      <TitlesWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitlesWrapper>
    </FormTitleContainer>
  );
}
