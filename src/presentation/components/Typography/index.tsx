import {TextComponent} from './styles';
import {colors} from '@/presentation/colors';

export type TTypographyTypes =
  | 'Title'
  | 'H1'
  | 'H2Bold'
  | 'H2Regular'
  | 'H3'
  | 'Body'
  | 'Small'
  | 'captions'
  | 'Normal'
  | 'Large';

type TProps = {
  value: string | number | undefined;
  color?: string;
  align?: string;
  type?: TTypographyTypes;
  children?: JSX.Element;
};
export const Typography = ({
  children,
  value,
  align,
  type = 'Normal',
  color = colors.c1.black,
}: TProps) => {
  return (
    <TextComponent color={color} type={type} align={align}>
      {value || children}
    </TextComponent>
  );
};
