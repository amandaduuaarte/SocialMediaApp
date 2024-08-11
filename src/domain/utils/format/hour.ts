export const hourFormatted = ({hour}: {hour: number}) => {
  if (hour == 0) return;

  if (hour < 60) return false;

  const formatted = hour / 60;
  return formatted;
};
