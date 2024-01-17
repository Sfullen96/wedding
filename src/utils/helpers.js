export const getHeaderHeight = (isMobile) => (isMobile ? "56px" : "64px");

export const accommodation = [
  {
    name: "Stanneylands",
    website: "https://www.stanneylands.co.uk/",
    phone: "01625 525225",
    distance: "1-2 minutes",
    description:
      "Recently renovated, beautiful 4* boutique hotel just around the corner, offering a stylish country-house experience. The restaurant serving fantastic seasonal dishes from light lunches to delicious three course feasts.",
    rates: [
      { label: "Standard", price: "120" },
      { label: "Deluxe", price: "145" },
    ],
    additionalInfo: [
      "Includes breakfast",
      "Please contact hotel directly to book rooms",
      "Guests can only book rooms up to 28 days prior to the date of arrival, so if they try to book after this time then the rate will not be available.",
      "Mention the Gough-Fullen wedding to get the Styal Lodge rates",
    ],
  },
];
