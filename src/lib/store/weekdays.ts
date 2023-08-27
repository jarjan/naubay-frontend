export const weekdays = {
  0: { en: "monday", de: "montag" },
  1: { en: "tuesday", de: "dienstag" },
  2: { en: "wednesday", de: "mittwoch" },
  3: { en: "thursday", de: "donnerstag" },
  4: { en: "friday", de: "freitag" },
  5: { en: "saturday", de: "samstag" },
  6: { en: "sunday", de: "sonntag" },
};

export const currentWeekday = () => {
  return (new Date().getDay() + 6) % 7;
};
