export default function dateFormat(date, location, length) {
  const optionsUS = {
    locale: "en-US",
    options: {
      dateStyle: "long",
      timeZone: "UTC",
    },
  };
  const optionsGB = {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "long",
      timeZone: "UTC",
      year: "numeric",
    },
  };
  const locale = (location === "EMEA" || location === "APAC") ? optionsGB.locale : optionsUS.locale;
  let options = (location === "EMEA" || location === "APAC") ? optionsGB.options : optionsUS.options;

  let formattedDate;
  if (location === "EMEA" || location === "APAC") {
    // For EMEA and APAC, manually construct the date string to include commas
    const dateObj = new Date(date);
    const day = dateObj.toLocaleString(locale, { day: 'numeric', timeZone: 'UTC' });
    const month = dateObj.toLocaleString(locale, { month: 'long', timeZone: 'UTC' });
    const year = dateObj.toLocaleString(locale, { year: 'numeric', timeZone: 'UTC' });
    if (length) {
      const weekday = dateObj.toLocaleString(locale, { weekday: 'long', timeZone: 'UTC' });
      formattedDate = `${weekday}, ${day} ${month} ${year}`;
    } else {
      formattedDate = `${day}, ${month} ${year}`;
    }
  } else {
    // Use existing logic for AMER locations or when length is not specified
    if (length) {
      const longOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' };
      formattedDate = new Date(date).toLocaleDateString(locale, longOptions);
    } else {
      formattedDate = new Date(date).toLocaleDateString(locale, options);
    }
  }

  return formattedDate;
}