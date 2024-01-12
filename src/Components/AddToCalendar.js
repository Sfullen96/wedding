import React from "react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import { Box, useTheme } from "@mui/material";

const AddToCalendar = () => {
  const theme = useTheme();

  return (
    <Box pt={2}>
      <AddToCalendarButton
        name="Sam and Leanne's wedding"
        startDate="2024-08-21"
        startTime="12:00"
        endDate="2024-08-22"
        endTime="00:30"
        options={["Google", "Microsoft365", "Apple"]}
        timeZone="Europe/London"
        location="Styal Lodge, Station Road, Styal, Wilmslow SK9 4JN"
        size="3"
        trigger="hover"
        styleDark={`--btn-background: ${theme.palette.secondary.main};--btn-text: #fff;--font:"Monsterrat"; --btn-border: #a8a8a8;`}
        styleLight={`--btn-background: ${theme.palette.secondary.main};--btn-text: #fff;--font:"Monsterrat"; --btn-border: #a8a8a8;`}
      />
    </Box>
  );
};

export default AddToCalendar;
