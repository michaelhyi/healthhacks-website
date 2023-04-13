import moment from "moment";

const deadline = "#7BCDBA"
const meal = "#9799CA"
const general = "#B47AEA"

export const events = [
  {
    time: moment("2023-04-14 17:00:00"),
    title: "Participant Welcome",
    duration: 60,
    color: general,
    location: "Huang health{hacks} HQ",
  },
  {
    time: moment("2023-04-14 18:00:00"),
    title: "Dinner",
    duration: 60,
    color: meal,
    location: "Huang health{hacks} HQ",
  },
  {
    time: moment("2023-04-14 19:00:00"),
    title: "Opening Ceremony",
    duration: 60,
    color: general,
    location: "Hewlett 200",
  },
  {
    time: moment("2023-04-14 20:00:00"),
    title: "Biodesign Needs Workshop",
    duration: 30,
    color: general,
    location: "",
  },
  {
    time: moment("2023-04-14 20:30:00"),
    title: "Team Formation Session",
    duration: 60,
    color: general,
    location: "AL: Hewlett 200, PP: Huang health{hacks} HQ, MH: Huang Forbes Cafe",
  },
  {
    time: moment("2023-04-14 22:00:00"),
    title: "Venue Closes",
    duration: 30,
    color: deadline,
    location: "",
  },
  {
    time: moment("2023-04-15 08:00:00"),
    title: "Venue Opens",
    duration: 30,
    color: deadline,
    location: "",
  },
  {
    time: moment("2023-04-15 11:00:00"),
    title: "Brunch",
    duration: 60,
    color: meal,
    location: "Huang health{hacks} HQ",
  },
  {
    time: moment("2023-04-15 12:00:00"),
    title: "Team Registration Deadline",
    duration: 60,
    color: deadline,
    location: "",
  },
  {
    time: moment("2023-04-15 18:00:00"),
    title: "Dinner",
    duration: 60,
    color: meal,
    location: "Huang health{hacks} HQ",
  },
  {
    time: moment("2023-04-15 19:00:00"),
    title: "Office Hours & Practice Pitching",
    duration: 120,
    color: general,
    location: "Huang Infosys, Stanford Biodesign, Exai Bio Room",
  },
  {
    time: moment("2023-04-15 22:00:00"),
    title: "Venue Closes",
    duration: 30,
    color: deadline,
    location: "",
  },
  {
    time: moment("2023-04-16 08:00:00"),
    title: "Venue Opens",
    duration: 30,
    color: deadline,
    location: "",
  },
  {
    time: moment("2023-04-16 08:30:00"),
    title: "Office Hours & Practice Pitching",
    duration: 120,
    color: general,
    location: "Huang Infosys, Stanford Biodesign, Exai Bio Room",
  },
  {
    time: moment("2023-04-16 11:00:00"),
    title: "Final Project Submission Deadline",
    duration: 30,
    color: deadline,
    location: "",
  },
  {
    time: moment("2023-04-16 11:30:00"),
    title: "Brunch",
    duration: 30,
    color: meal,
    location: "",
  },
  {
    time: moment("2023-04-16 12:00:00"),
    title: "Project Judging",
    duration: 120,
    color: general,
    location: "AL: Hewlett 200, PP: Hewlett 201, MH: Shriram 104",
  },
  {
    time: moment("2023-04-16 15:00:00"),
    title: "Awards Ceremony",
    duration: 60,
    color: general,
    location: "Hewlett 200",
  },
];
