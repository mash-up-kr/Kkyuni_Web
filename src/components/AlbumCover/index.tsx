import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

interface AlbumCoverProps {
  src: string;
  isSmall?: boolean;
}

const Wrapper = styled.img<{ isSmall?: boolean }>`
  width: ${({ isSmall }) => (isSmall ? '200px' : '220px')};
  height: ${({ isSmall }) => (isSmall ? '200px' : '220px')};
`;

const AlbumCover = ({ src, isSmall }: AlbumCoverProps): ReactElement => (
  <Wrapper src={src} isSmall={isSmall} />
);

export default AlbumCover;
