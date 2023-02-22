const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/arrival"],
    exact: true,
    component: "Arrival",
  },
  {
    path: ["/accommodation"],
    exact: true,
    component: "Accommodation",
  },
  {
    path: ["/program"],
    exact: true,
    component: "Program",
  },
  {
    path: ["/rsvp"],
    exact: true,
    component: "Rsvp",
  },
];

export default routes;
