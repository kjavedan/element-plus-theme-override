const COMPONENTS_BASE = "/components";

export const paths = {
  home: import.meta.env.BASE_URL,
  components: {
    root: COMPONENTS_BASE,
    button: `${COMPONENTS_BASE}/button`,
    border: `${COMPONENTS_BASE}/border`,
    shadow: `${COMPONENTS_BASE}/shadow`,
    layoutContainer: `${COMPONENTS_BASE}/layoutContainer`,
    link: `${COMPONENTS_BASE}/link`,
    text: `${COMPONENTS_BASE}/text`,
    layout: `${COMPONENTS_BASE}/layout`,
    scrollbar: `${COMPONENTS_BASE}/scrollbar`,
    space: `${COMPONENTS_BASE}/space`,
    typography: `${COMPONENTS_BASE}/typography`,
  },
};
