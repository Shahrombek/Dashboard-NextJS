import { Box, Paper } from "@mui/material";
import Layout from "../Layout";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("en-US");
const localizer = momentLocalizer(moment);

var defaultMessages = {
  date: "Date",
  time: "Time",
  event: "Event",
  allDay: "AllDay",
  week: "Week",
  work_week: "Workweek",
  day: "Day",
  month: "Month",
  previous: "Previous",
  next: "Next",
  yesterday: "Yesterday",
  tomorrow: "Tomorrow",
  today: "Today",
  agenda: "Agenda",
  noEventsInRange: "No EventsInRange",
  showMore: function showMore(total) {
    return "+" + total + " mais";
  },
};

const myEventsList = [
  {
    title: "Test",
    start: new Date(2020, 5, 17, 13, 0, 0, 0),
    end: new Date(2020, 5, 17, 13, 30, 0, 0),
    desc: "Event Test",
  },
];

function Prepare() {
  return (
    <Box sx={{ padding: "30px" }}>
      <Paper sx={{fontFamily: 'Montserrat !important', p:'30px'}}>
      <Calendar
        messages={defaultMessages}
        formats={{
          agendaDateFormat: "DD/MM ddd",
          weekdayFormat: "dddd",
        }}
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, fontFamily: "Monserrat" }}
      />
      </Paper>
    </Box>
  );
}

const calendar = () => {
  return (
    <Layout title={"Calendar"}>
      <Prepare />
    </Layout>
  );
};

export default calendar;
