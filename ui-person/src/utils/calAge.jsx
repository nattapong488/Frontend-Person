import { intervalToDuration, parseISO,isBefore,isAfter, set } from 'date-fns';

export default function CalAge(newBday) {
  if (!newBday) {
    return { years: 0, months: 0, days: 0 };
  }
  try {
    const birthDate = parseISO(newBday);
    const today = new Date();
    if (isNaN(birthDate)) {
        return { years: 0, months: 0, days: 0 };
    }
    const duration = intervalToDuration({ start: birthDate, end: today });
    return {
      years: duration.years || 0,
      months: duration.months || 0,
      days: duration.days || 0,
    };
  } catch (error) {
    // Handle invalid date string if necessary
    console.error("Invalid date:", error);
    return { years: 0, months: 0, days: 0 };
  }
}
