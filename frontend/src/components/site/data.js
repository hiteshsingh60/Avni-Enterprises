export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -60, duration: 1.6 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const CONTACT = {
  phones: ["+91 99997 24721", "+91 98687 50801"],
  phoneLinks: ["+919999724721", "+919868750801"],
  email: "Hitesh.singh@avni.org.in",
  website: "avni.org.in",
  city: "Delhi, India",
};

export const SERVICES = [
  {
    key: "housekeeping",
    no: "01",
    title: "Housekeeping",
    items: ["Daily cleaning of office premises", "Restroom cleaning & sanitation", "Deep cleaning & floor polishing", "Waste collection & disposal", "Glass & façade cleaning"],
    img: "/images/lobby.jpg",
    span: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    key: "pantry",
    no: "02",
    title: "Pantry Management",
    items: ["Deployment of pantry staff", "Tea & coffee service", "Pantry hygiene", "Inventory management", "Pantry consumables"],
    img: "/images/pantry.jpg",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    key: "stationery",
    no: "03",
    title: "Office Stationery",
    items: ["Copier paper & registers", "Pens, markers & supplies", "Files & folders", "Cartridges & toners"],
    span: "",
  },
  {
    key: "consumables",
    no: "04",
    title: "Housekeeping Consumables",
    items: ["Cleaning chemicals", "Tissue papers & napkins", "Garbage bags", "Hand wash & sanitizers"],
    span: "",
  },
  {
    key: "manpower",
    no: "05",
    title: "Skilled Manpower",
    items: ["Housekeeping staff", "Pantry boys", "Office assistants", "Supervisors"],
    img: "/images/conference.jpg",
    span: "md:col-span-2 lg:col-span-2",
  },
  {
    key: "post-construction",
    no: "06",
    title: "Post-Construction Cleaning",
    items: ["Handover-ready new builds", "Debris & dust removal", "Floors, glass & fixtures"],
    span: "",
  },
  {
    key: "guest-house",
    no: "07",
    title: "Guest House Management",
    items: ["Upkeep & hospitality", "Staffing & supplies", "One accountable team"],
    span: "",
  },
];

export const CLIENTS = [
  { name: "Sobha Limited", note: "North Region", sector: "Real Estate" },
  { name: "Larsen & Toubro Limited", note: "North Region", sector: "Infrastructure" },
  { name: "Ashoka University", note: "Campus", sector: "Education" },
];
