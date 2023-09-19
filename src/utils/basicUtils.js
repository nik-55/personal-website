export function dateTimeFormatter(dateTimeString) {
  const dateFormater = new Intl.DateTimeFormat('en-In', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return dateFormater.format(new Date(dateTimeString));
}
