import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageProps } from 'react-native';

interface AvatarProps {
  Container: React.FC;
  Content: React.FC;
  Avatar: React.FC<ImageProps>;
  IconContainer: React.FC;
  Icon: React.FC;
}

interface LogoProps {
  Container: React.FC;
  Logo: React.FC;
}

interface ChatProps {
  Container: React.FC;
  Icon: React.FC<ImageProps>;
  IconNotification: React.FC;
}

interface HeaderProps {
  Container: React.FC;
  Content: React.FC;
}

interface LifeStyleProps {
  Title: React.FC;
  Message: React.FC;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Title = styled.Text``;

export const Header: HeaderProps = {} as HeaderProps;

Header.Container = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;

`;

Header.Content = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  background-color: white;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-horizontal: 20px;
`;

// Avatar
export const Avatar: AvatarProps = {} as AvatarProps;

Avatar.Container = styled.View`
  flex: 1;
`;

Avatar.Content = styled.View`
 width: 50px;
  height: 50px;
  border-radius: 38px;
  overflow: hidden;
`;

Avatar.Avatar = styled.Image<ImageProps>`
  width: 50px;
  height: 50px;
`;

Avatar.IconContainer = styled.View`
  position: absolute;
  top: 35%;
  left: 35%;
  width: 20px;
  height: 20px;
  border-radius: 12.5px;
  background-color: red;
`;

Avatar.Icon = styled.Image``;

//Logo
export const Logo: LogoProps = {} as LogoProps;

Logo.Container = styled.View`
  flex: 2;
`;

Logo.Logo = styled.Image``;

// Chat
export const Chat: ChatProps = {} as ChatProps;

Chat.Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

Chat.Icon = styled.Image<ImageProps>`
  width: 40px;
  height: 40px;
`;

Chat.IconNotification = styled.View``;

export const Body = styled.View`
  flex: 10;
  width: 100%;
`;

export const LifeStyle: LifeStyleProps = {} as LifeStyleProps;

LifeStyle.Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  margin-left: 20px;
`;

LifeStyle.Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  margin-top: 8px;
  margin-left: 20px;
  line-height: 20px;
`;
