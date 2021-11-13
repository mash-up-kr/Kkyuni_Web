import React, { FC, useCallback, useEffect } from 'react';
import styled from '@emotion/styled';

declare const Kakao: any;

interface KakaoButtonProps {
  url: string;
  title: string;
  description: string;
}

const KakaoButton: FC<KakaoButtonProps> = ({ url, title, description }: KakaoButtonProps) => {
  useEffect(() => {
    if (!Kakao.isInitialized()) {
      Kakao.init('5fb43f5a2ce5219ff1ded0325d9d91e7');
    }
  }, []);

  const onClick = useCallback(() => {
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: { title },
        description: { description },
        imageUrl:
          'https://k.kakaocdn.net/14/dn/btrjLxLjDDM/rIU0DYblVkzQRKl7SaiKN1/o.jpg',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    });
  }, []);

  return (
    <PointerImage
      src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
      onClick={onClick}
    />
  );
};

export default KakaoButton;

const PointerImage = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
