import {
  addMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInYears
} from 'date-fns';

export class TimeConverter {
  static transform(value: Date): string {
    const now = new Date();

    const diffSeconds = differenceInSeconds(now, value);
    if (diffSeconds < 60) {
      return diffSeconds + 's';
    }

    const diffMinutes = differenceInMinutes(now, value);
    if (diffMinutes < 60) {
      const minPart = diffMinutes + 'm';

      const sec = diffSeconds - diffMinutes * 60;
      const secPart = sec > 0 ? ' ' + sec + 's' : '';

      return minPart + secPart;
    }

    const diffHours = differenceInHours(now, value);
    if (diffHours < 24) {
      const hourPart = diffHours + 'h';

      const min = diffMinutes - diffHours * 60;
      const minPart = min > 0 ? ' ' + min + 'm' : '';

      const sec = diffSeconds - diffMinutes * 60;
      const secPart = sec > 0 ? ' ' + sec + 's' : '';

      return hourPart + minPart + secPart;
    }

    const diffDays = differenceInDays(now, value);
    const diffMonths = differenceInMonths(now, value);
    if (diffMonths < 1) {
      const daysPart = diffDays + 'd';

      const hours = diffHours - diffDays * 24;
      const hourPart = hours > 0 ? ' ' + hours + 'h' : '';

      return daysPart + hourPart;
    }

    if (diffMonths < 12) {
      const monsPart = diffMonths + 'm';

      const newDate = addMonths(value, diffMonths);
      const days = differenceInDays(now, newDate);
      const daysPart = days > 0 ? ' ' + days + 'd' : '';

      return monsPart + daysPart;
    }

    const diffYears = differenceInYears(now, value);
    if (diffYears > 0) {
      const yearPart = diffYears + 'y';

      const months = diffMonths - diffYears * 12;
      const monsPart = months > 0 ? ' ' + months + 'm' : '';

      const newDate = addMonths(value, diffMonths);
      const days = differenceInDays(now, newDate);
      const daysPart = days > 0 ? ' ' + days + 'd' : '';
      return yearPart + monsPart + daysPart;
    }
  }
}
