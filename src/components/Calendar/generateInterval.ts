import { eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.';
import { getPlatformDate } from '../../utils/getPlatformDate';
import theme from '~/styles/theme';

interface GetCurrentColorProps {
  rgbNumbers1: [number, number, number];
  rgbNumbers2: [number, number, number];
  lenght: number;
  index: number;
}

export function generateInterval(start: DayProps, end: DayProps) {
  let interval: MarkedDateProps = {};

  const allDays = eachDayOfInterval({
    start: new Date(start.timestamp),
    end: new Date(end.timestamp),
  });

  const hexToRGB = (color: string | any) => {
    color = color.replace('#', '');
    let red = color.substr(0, 2),
      green = color.substr(2, 2),
      blue = color.substr(4, 2);

    red = parseInt(red, 16);
    green = parseInt(green, 16);
    blue = parseInt(blue, 16);

    return [red, green, blue];
  }

  const getCurrentColor = ({ rgbNumbers1, rgbNumbers2, lenght, index }: GetCurrentColorProps) => {
    let number1 = rgbNumbers1[0] >= rgbNumbers2[0]
      ? rgbNumbers1[0] - rgbNumbers2[0]
      : rgbNumbers2[0] - rgbNumbers1[0];
    let number2 = rgbNumbers1[1] >= rgbNumbers2[1]
      ? rgbNumbers1[1] - rgbNumbers2[1]
      : rgbNumbers2[1] - rgbNumbers1[1];
    let number3 = rgbNumbers1[2] >= rgbNumbers2[2]
      ? rgbNumbers1[2] - rgbNumbers2[2]
      : rgbNumbers2[2] - rgbNumbers1[2];
    number1 = (number1 / lenght) * index;
    number2 = (number2 / lenght) * index;
    number3 = (number3 / lenght) * index;

    number1 = parseInt(number1 + rgbNumbers1[0]);
    number2 = parseInt(number2 + rgbNumbers1[1]);
    number3 = parseInt(number3 + rgbNumbers1[2]);

    const currentColor = [number1, number2, number3];
    return { currentColor };
  }


  allDays.forEach((item, index) => {
    const date = format(getPlatformDate(item), 'yyyy-MM-dd');

    const newCollor = {
      rgbNumbers1: hexToRGB(theme.colors.calendarInitialGradient),
      rgbNumbers2: hexToRGB(theme.colors.calendarFinalGradient),
      lenght: allDays.length,
      index
    } as GetCurrentColorProps;

    const { currentColor } = getCurrentColor(newCollor);
    console.log(currentColor)

    interval = {
      ...interval,
      [date]: {
        color:
        start.dateString === date
        ? theme.colors.calendarInitialGradient
        : end.dateString === date
        ? theme.colors.calendarFinalGradient
        : `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`,

        textColor:
        start.dateString === date || end.dateString === date
        ? theme.colors.backgroundPrimary
        : theme.colors.backgroundPrimary,
      },
    };
  });

  return interval;
}
