/**
 *
 * Greet the user according to the time of day.
 *
 */
export const greeting = (): string => {
  const time = new Date().getHours();
  if (time >= 0 && time < 12) {
    return "Morning";
  } else if (time >= 12 && time < 18) {
    return "Afternoon";
  } else {
    return "Evening";
  }
};
