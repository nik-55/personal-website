/**
 * @file contains the basic utilities functions
 */

/**
 * Convert the date string to a readable format
 *
 * @param {string} dateTimeString - ISO date time string
 * @returns {string} - formatted date string
 */
export function dateTimeFormatter(dateTimeString) {
  try {
    const dateFormater = new Intl.DateTimeFormat('en-In', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return dateFormater.format(new Date(dateTimeString));
  } catch (err) {
    return 'Invalid Date';
  }
}
