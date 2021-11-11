import React, { useCallback, useState } from 'react';

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
    LifeStyle,
    CalendarModal
} from './styles'
import { ImageBackground } from 'react-native';
import { Calendar, DayProps, MarkedDateProps } from '~/components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';


export function Home(){
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);

  const handleChangeDate = useCallback((date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }
    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
    const firstDate = Object.keys(interval)[0];
    const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];
  }, [lastSelectedDate, setLastSelectedDate, markedDates, setMarkedDates]);

    return (
        <Container>
            <Header.Container>
              <Header.Content>
              <Avatar.Container>
                <Avatar.Content>
                <Avatar.Avatar source={MyAvatar} />
                </Avatar.Content>
                <Avatar.IconContainer>
                  <LinearGradient
                    // Button Linear Gradient
                    colors={['#4a54df', '#15d4d8']}
                    style={{ width: '100%', height: '100%', justifyContent:'center', alignItems: 'center' }}>
                  <Feather name='menu' color='white' />
                </LinearGradient>
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
              <CalendarModal.Container transparent>
                <CalendarModal.Content>
                  <Calendar onDayPress={handleChangeDate} markedDate={markedDates} />
                  <CalendarModal.Calendar>
                  <CalendarModal.Button.Container>
                    <LinearGradient
                    // Button Linear Gradient
                    colors={['#4a54df', '#15d4d8']}

                    style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <CalendarModal.Button.Label>
                      Apply
                    </CalendarModal.Button.Label>
                  </LinearGradient>
                  </CalendarModal.Button.Container>
                  </CalendarModal.Calendar>

                </CalendarModal.Content>
            </CalendarModal.Container>
            </Body>
        </Container>
    );
}
