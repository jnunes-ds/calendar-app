import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageProps, ModalProps, TextProps, TouchableOpacityProps, TouchableWithoutFeedbackProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

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

interface CalendarButtonProps {
  SupraConainer: React.FC;
  Container: React.FC<TouchableOpacityProps>;
  Label: React.FC<TextProps>;
}

interface CalendarModalProps {
  Container: React.FC<ModalProps>;
  Content: React.FC;
  Calendar: React.FC;
  Button: CalendarButtonProps;
  CloseButton: CloseButtonProps;
}

interface CloseButtonProps {
  Container: React.FC<TouchableWithoutFeedbackProps>;
  Content: React.FC;
  Text: React.FC;
};

type IconType = React.ComponentProps<typeof AntDesign>;

interface OpenCalendarButtonProps {
  Container: React.FC<TouchableWithoutFeedbackProps>;
  Icon: React.FC<IconType>;
};

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
  overflow: hidden;
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

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

export const CalendarModal: CalendarModalProps = {} as CalendarModalProps;

CalendarModal.Container = styled.Modal<ModalProps>`
`;

CalendarModal.Content = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 70%;

`;

CalendarModal.Calendar = styled.View`
  padding-top: 20px;
  padding-horizontal: 0;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

CalendarModal.Button = {} as CalendarButtonProps;

CalendarModal.Button.SupraConainer = styled.View`
  align-items: center;
`;

CalendarModal.Button.Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 55px;
  border-radius: 30px;
  overflow: hidden;
`;

CalendarModal.Button.Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  font-weight: 700;
`;

CalendarModal.CloseButton = {} as CloseButtonProps;

CalendarModal.CloseButton.Container = styled.TouchableWithoutFeedback<TouchableWithoutFeedbackProps>``;

CalendarModal.CloseButton.Content = styled.View`
  flex-direction: row;
`;

CalendarModal.CloseButton.Text = styled.Text``;

export const OpenCalendarButton: OpenCalendarButtonProps = {} as OpenCalendarButtonProps;

OpenCalendarButton.Container = styled.TouchableWithoutFeedback``;

OpenCalendarButton.Icon = styled(AntDesign)<IconType>``;
