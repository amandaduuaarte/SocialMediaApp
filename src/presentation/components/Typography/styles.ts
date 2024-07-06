import {styled} from 'styled-components/native';
import {TTypographyTypes} from '.';

type TTextComponent = {
    type: TTypographyTypes;
    color: string;
    align?: string;
};

const fontFamily: Record<TTypographyTypes, string> = {
    Title: 'Poppins-Bold',
    H2Bold: 'Poppins-Bold',
    Body: 'Poppins-Regular',
    H2Regular: 'Poppins-Regular',
    H3: 'Poppins-Regular',
    Small: 'Poppins-Regular',
    captions: 'Poppins-Regular',
    H1: 'Poppins-Bold',
    Normal: 'Poppins-Regular',
    Large: 'Poppins-Regular'
};

const fontSize: Record<TTypographyTypes, number> = {
    Title: 39,
    H2Bold: 31,
    Body: 24,
    H2Regular: 24,
    H3: 20,
    Small: 16,
    captions: 14,
    H1: 12,
    Normal: 24,
    Large: 64
};

export const TextComponent = styled.Text<TTextComponent>`
  font-family: ${({ type }) => fontFamily[type]};
  color: ${({ color }) => color};
  font-size: ${({ type }) => fontSize[type]}px;
  align-self:${({align}) => align ? align : 'flex-start'} ;
`;
