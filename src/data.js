import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 3, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "http://www.twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "http://www.facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "http://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const serviceContent = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "Saving Money",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "Endless Hiking",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "Amazing Comfort",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tourContent = [
  {
    id: 1,
    imgSrc: tour1,
    date: "august 26th, 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    time: "6 days",
    price: "from $2100",
    title: "Tibet Adventure",
  },
  {
    id: 2,
    imgSrc: tour2,
    date: "october 1th, 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    time: "11 days",
    price: "from $1400",
    title: "best of java",
  },
  {
    id: 3,
    imgSrc: tour3,
    date: "september 15th, 2020",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "hong kong",
    time: "8 days",
    price: "from $5000",
    title: "explore hong kong",
  },
  {
    id: 4,
    imgSrc: tour4,
    date: "december 5th, 2019",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "kenya highlights",
    time: "20 days",
    price: "from $3300",
    title: "kenya highlights",
  },
];
