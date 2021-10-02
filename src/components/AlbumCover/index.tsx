import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

export interface AlbumCoverProps {
  src: string;
  isSmall?: boolean;
}

const Wrapper = styled.img<{ isSmall?: boolean }>`
  width: ${({ isSmall }) => (isSmall ? '200px' : '220px')};
  height: ${({ isSmall }) => (isSmall ? '200px' : '220px')};
`;

const AlbumCover = ({
  src,
  isSmall,
  ...restProps
}: AlbumCoverProps &
  Omit<
    React.HTMLProps<HTMLImageElement>,
    'as' | 'crossOrigin'
  >): ReactElement => <Wrapper src={src} isSmall={isSmall} {...restProps} />;

export default AlbumCover;
