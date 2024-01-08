import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About",
    newTab: false,
    path: "/#About",
  },

  {
    id: 2.3,
    title: "Team",
    newTab: false,
    path: "/team",
  },
  {
    id: 2.8,
    title: "Atoms Group",
    newTab: false,
    path: "https://www.atomsgroup.net/",
  },
  {
    id: 3,
    title: "Companies",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Engineer's Scoops",
        newTab: false,
        path: "/EngineersScoops",
      },
      {
        id: 34,
        title: "MJ Saloon and Spa",
        newTab: false,
        path: "Mj",
      },
    
    
      {
        id: 36,
        title: "",
        newTab: false,
        path: "/error",
      },
    
    ],
  },
 
];

export default menuData;
