// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  userGuide: [
    "intro",
    {
      type: "category",
      label: "Getting Started",
      items: ["system-access", "account-management"],
    },
    {
      type: "category",
      label: "Software Environment",
      items: ["modules", "compiling"],
    },
    {
      type: "category",
      label: "Running Jobs",
      items: ["job-charging", "running-jobs", "gpu-nodes"],
    },
    {
      type: "category",
      label: "Data & Storage",
      items: ["data-movement", "storage"],
    },
    {
      type: "category",
      label: "Advanced Resources",
      items: ["expanse-ai", "composable-systems", "software"],
    },
    "citations",
  ],
};

export default sidebars;
