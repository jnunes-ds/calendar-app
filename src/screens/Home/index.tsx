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
    Content,
    LifeStyle,
    CalendarModal,
    OpenCalendarButton,
} from './styles'
import { ImageBackground } from 'react-native';
import { Calendar, DayProps, MarkedDateProps } from '~/components/Calendar';
import { generateInterval } from '../../components/Calendar/generateInterval';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, AntDesign } from '@expo/vector-icons';


export function Home(){
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const [modalVisible, setModalVisible] = useState<boolean>(true)

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
              <Content>

                  <OpenCalendarButton.Container onPress={() => setModalVisible(true) } >
                    <OpenCalendarButton.Icon name='calendar' size={100} />
                  </OpenCalendarButton.Container>
                  <CalendarModal.Container
                    transparent
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                    animationType='slide'
                  >
                    <CalendarModal.Content>
                      <CalendarModal.Calendar>
                      <CalendarModal.CloseButton.Container onPress={() => setModalVisible(false)} >
                        <CalendarModal.CloseButton.Content>
                        <AntDesign name='close' size={24} color="black" />
                        <CalendarModal.CloseButton.Text>Calendar</CalendarModal.CloseButton.Text>
                        </CalendarModal.CloseButton.Content>
                      </CalendarModal.CloseButton.Container>
                      <Calendar onDayPress={handleChangeDate} markedDate={markedDates} />
                      <CalendarModal.Button.SupraConainer>
                      <CalendarModal.Button.Container onPress={() => setModalVisible(false)} >
                        <LinearGradient
                        // Button Linear Gradient
                        colors={['#4a54df', '#15d4d8']}
                        start={{x: 0.0, y: 0.25}}
                        end={{x: 0.5, y: 1.0}}

                        style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <CalendarModal.Button.Label>
                          Apply
                        </CalendarModal.Button.Label>
                      </LinearGradient>
                      </CalendarModal.Button.Container >
                      </CalendarModal.Button.SupraConainer>
                      </CalendarModal.Calendar>

                    </CalendarModal.Content>
                </CalendarModal.Container>
              </Content>
            </Body>
        </Container>
    );
}
