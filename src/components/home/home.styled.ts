import styled from 'styled-components';

import { media } from '../../theme/media';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  height: 600px;
`;

export const Template = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Ray = styled.img`
  height: 500px;

  ${media.lessThan('md')`
    display: none;
  `}
`;
