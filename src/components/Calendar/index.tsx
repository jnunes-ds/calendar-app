import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
  Calendar as CustomCalendar,
  LocaleConfig,
} from 'react-native-calendars';
import { ptBr } from './localeConfig';
import { DateObject } from '~/@types/datetypes';

LocaleConfig.locales['pt-br'] = ptBr;
LocaleConfig.defaultLocale = 'pt-br';

interface MarkedDateProps {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disabledTouchEvent?: boolean;
  };
}

interface DayProps {
  dateString: string;
  day: string;
  month: number;
  year: number;
  timestamp: number;
}

interface CalendarProps {
  markedDate: MarkedDateProps;
  onDayPress(date: DayProps): void;
}

function Calendar({ markedDate, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <CustomCalendar
      renderArrow={direction => (
        <Feather
          name={`chevron-${direction}`}
          size={24}
          color={theme.colors.text}
        />
      )}
      headerStyle={{
        backgroundColor: theme.colors.backgroundPrimary,
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.calendarFinalGradient,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: theme.fonts.text,
        textDayHeaderFontFamily: theme.fonts.title,
        textDayHeaderFontSize: 10,
        textMonthFontSize: 20,
        textMonthFontFamily: theme.fonts.text,
        monthTextColor: theme.colors.text,
        arrowStyle: {
          marginHorizontal: -15,
        },
      }}
      firstDay={1}
      minDate={new Date()}
      markingType="period"
      markedDates={markedDate}
      onDayPress={onDayPress}
    />
  );
}

export { Calendar, MarkedDateProps, DayProps };
