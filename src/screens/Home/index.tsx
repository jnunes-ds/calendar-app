import React from 'react';

import {
    Container,
    Header,
    Avatar,
    Logo,
    Chat,
    Body,
    Title
} from './styles'


export function Home(){

    return (
        <Container>
            <Header>
              <Avatar.Container>
                <Avatar.Avatar />
                <Avatar.Icon />
              </Avatar.Container>
              <Logo.Container>
                <Logo.Logo />
              </Logo.Container>
              <Chat.Container>
                <Chat.Icon />
                <Chat.IconNotification />
              </Chat.Container>
            </Header>
            <Body>
            <Title> Hello World! </Title>
            </Body>
        </Container>
    );
}
