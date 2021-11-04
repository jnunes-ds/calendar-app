import React from 'react';

import MyAvatar from '~/assets/user.jpg';
import ChatIcon from '~/assets/chat_icon.png';
import HeaderBackground from '~/assets/ilustration_lifestyle.png';

import {
    Container,
    Header,
    Avatar,
    Logo,
    Chat,
    Body,
    Title,
    LifeStyle
} from './styles'
import { ImageBackground } from 'react-native';


export function Home(){

    return (
        <Container>
            <Header.Container>
              <Header.Content>
              <Avatar.Container>
                <Avatar.Content>
                <Avatar.Avatar source={MyAvatar} />
                </Avatar.Content>
                <Avatar.IconContainer>
                <Avatar.Icon />
                </Avatar.IconContainer>
              </Avatar.Container>
              <Logo.Container>
                <Logo.Logo />
              </Logo.Container>
              <Chat.Container>
                <Chat.Icon source={ChatIcon} />
                <Chat.IconNotification />
              </Chat.Container>
              </Header.Content>
            </Header.Container>
            <Body>
              <ImageBackground source={HeaderBackground} style={{ width: '100%', height: 180 }} >
                <LifeStyle.Title>Lifestyle</LifeStyle.Title>
                <LifeStyle.Message>
                  Get a holistic view of your {'\n'}
                  activities to enhance your {'\n'}
                  wellbeing and benefit from {'\n'}
                  even more accurate {'\n'}
                  recommendations
                </LifeStyle.Message>
              </ImageBackground>
            <Title> Hello World! </Title>
            </Body>
        </Container>
    );
}
