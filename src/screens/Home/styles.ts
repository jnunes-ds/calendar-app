import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

interface AvatarProps {
  Container: React.FC;
  Avatar: React.FC;
  Icon: React.FC;
}

interface LogoProps {
  Container: React.FC;
  Logo: React.FC;
}

interface ChatProps {
  Container: React.FC;
  Icon: React.FC;
  IconNotification: React.FC;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Title = styled.Text``;

export const Header = styled.View`
  background-color: grey;
  width: 100%;
  flex: 2;
  flex-direction: row;
`;

// Avatar
export const Avatar: AvatarProps = {} as AvatarProps;

Avatar.Container = styled.View``;

Avatar.Avatar = styled.Image``;

Avatar.Icon = styled.Image``;

//Logo
export const Logo: LogoProps = {} as LogoProps;

Logo.Container = styled.View``;

Logo.Logo = styled.Image``;

// Chat
export const Chat: ChatProps = {} as ChatProps;

Chat.Container = styled.View``;

Chat.Icon = styled.Image``;

Chat.IconNotification = styled.View``;

export const Body = styled.View`
  flex: 10;
  width: 100%;
`;
