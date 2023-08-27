export const weekdays = {
  0: { en: "monday", de: "Montag" },
  1: { en: "tuesday", de: "Dienstag" },
  2: { en: "wednesday", de: "Mittwoch" },
  3: { en: "thursday", de: "Donnerstag" },
  4: { en: "friday", de: "Freitag" },
  5: { en: "saturday", de: "Samstag" },
  6: { en: "sunday", de: "Sonntag" },
};

export const currentWeekday = () => {
  return (new Date().getDay() + 6) % 7;
};
