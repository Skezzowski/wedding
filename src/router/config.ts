const routes = [
  {
    path: ["/", "/information"],
    exact: true,
    component: "Information",
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
