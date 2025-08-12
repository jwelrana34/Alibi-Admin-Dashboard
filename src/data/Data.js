import avatarThree from "../assets/images/image1.png";
import avatarFour from "../assets/images/image2.png";
import avatarTwo from "../assets/images/image3.png";
import avatarOne from "../assets/images/image4.png";
import avatarFive from "../assets/images/Ellipse 63 (1).png";
import avatarSix from "../assets/images/Ellipse 64.png";
import avatarSeven from "../assets/images/Ellipse 65.png";
import avatarEight from "../assets/images/Ellipse 66.png";
import avatarNine from "../assets/images/Ellipse 67.png";
import avatarFives from "../assets/images/avatarSix.png";
import avatarSixs from "../assets/images/avatarSeven.png";
import avatarSevens from "../assets/images/avatarEight.png";
import avatarEights from "../assets/images/avatarFive.png";
import avatarNines from "../assets/images/avatarNine.png";

export const alerts = [
  {
    name: "Mira Al-Sayfani",
    description: "Unauthorized login attempt.",
    avatar: avatarOne,
  },
  {
    name: "Salma Dahrani",
    description: "Location changed suddenly.",
    avatar: avatarTwo,
  },
  {
    name: "Yousef Barqani",
    description: "Device inactive.",
    avatar: avatarThree,
  },
  {
    name: "Noor Khandari",
    description: "Case escalated.",
    avatar: avatarFour,
  },
];

export const usermanagement = [
  {
    id: 1,
    name: "Mira Al-Sayfani",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "01 Aug 2025 - 14:32 PM",
    risk: 85,
    avatar: avatarOne,
    location: { lat: 31.9632, lng: 35.998 },
    type: "low",
  },
  {
    id: 2,
    name: "Salma Dahrani",
    violation: "Location Mismatch",
    region: "East Amman",
    date: "02 Aug 2025 - 12:32 PM",
    risk: 75,
    avatar: avatarTwo,
    location: { lat: 31.9655, lng: 35.928 },
    type: "high",
  },
  {
    id: 3,
    name: "Yousef Barqani",
    violation: "Multiple Drone Disconnect",
    region: "West Amman",
    date: "03 Aug 2025 - 10:00 AM",
    risk: 60,
    avatar: avatarThree,
    location: { lat: 31.9902, lng: 35.9 },
    type: "medium",
  },
  {
    id: 4,
    name: "Noor Khandari",
    violation: "Unauthorized Device",
    region: "East Amman",
    date: "04 Aug 2025 - 8:32 AM",
    risk: 85,
    avatar: avatarFour,
    location: { lat: 32.005, lng: 35.928 }, // far north-east
    type: "low",
  },
  {
    id: 5,
    name: "Lina Al-Mahrouqi",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "01 Aug 2025 - 14:32 PM",
    risk: 95,
    avatar: avatarFives,
    location: { lat: 31.9412, lng: 35.884 }, // far south-west
    type: "high",
  },
  {
    id: 6,
    name: "Khaled Nabeelzar",
    violation: "Unauthorized Login",
    region: "East Amman",
    date: "02 Aug 2025 - 12:32 PM",
    risk: 85,
    avatar: avatarSixs,
    location: { lat: 31.99, lng: 36 }, // farther east
    type: "medium",
  },
  {
    id: 7,
    name: "Dalia Farhouni",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "03 Aug 2025 - 10:00 AM",
    risk: 45,
    avatar: avatarSevens,
    location: { lat: 31.9298, lng: 35.9403 }, // mid-south
    type: "low",
  },
  {
    id: 8,
    name: "Tariq Al-Hazmari",
    violation: "Unauthorized Login",
    region: "East Amman",
    date: "04 Aug 2025 - 8:32 AM",
    risk: 85,
    avatar: avatarEights,
    location: { lat: 31.9815, lng: 35.9522 }, // mid-north
    type: "high",
  },
  {
    id: 9,
    name: "Faris Al-Qanoubi",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "01 Aug 2025 - 14:32 PM",
    risk: 30,
    avatar: avatarNines,
    location: { lat: 31.935, lng: 35.977 }, // southeast
    type: "medium",
  },
];

export const modalData = [
  {
    id: 1,
    name: "Mira Al-Sayfani",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "01 Aug 2025 - 14:32 PM",
    risk: 85,
    avatar: avatarOne,
  },
  {
    id: 2,
    name: "Salma Dahrani",
    violation: "Location Mismatch",
    region: "East Amman",
    date: "02 Aug 2025 - 12:32 PM",
    risk: 75,
    avatar: avatarTwo,
  },
  {
    id: 3,
    name: "Yousef Barqani",
    violation: "Multiple Drone Disconnect",
    region: "West Amman",
    date: "03 Aug 2025 - 10:00 AM",
    risk: 60,
    avatar: avatarThree,
  },
  {
    id: 4,
    name: "Noor Khandari",
    violation: "Unauthorized Device",
    region: "East Amman",
    date: "04 Aug 2025 - 8:32 AM",
    risk: 85,
    avatar: avatarFour,
  },
  {
    id: 5,
    name: "Lina Al-Mahrouqi",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "01 Aug 2025 - 14:32 PM",
    risk: 95,
    avatar: avatarFives,
  },
  {
    id: 6,
    name: "Khaled Nabeelzar",
    violation: "Unauthorized Login",
    region: "East Amman",
    date: "02 Aug 2025 - 12:32 PM",
    risk: 85,
    avatar: avatarSixs,
  },
  {
    id: 7,
    name: "Dalia Farhouni",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "03 Aug 2025 - 10:00 AM",
    risk: 45,
    avatar: avatarSevens,
  },
  {
    id: 8,
    name: "Tariq Al-Hazmari",
    violation: "Unauthorized Login",
    region: "East Amman",
    date: "04 Aug 2025 - 8:32 AM",
    risk: 85,
    avatar: avatarEights,
  },
  {
    id: 9,
    name: "Faris Al-Qanoubi",
    violation: "Unauthorized Login",
    region: "West Amman",
    date: "01 Aug 2025 - 14:32 PM",
    risk: 30,
    avatar: avatarNines,
  },
];

export const liveMonitoringData = [
  {
    name: "Mira Al-Sayfani",
    idNumber: "EMP-1",
    date: "01 Aug 2025 - 14:32 PM",
    location: "Amman, Amman Governorate, Jordan",
    status: "On-Time",
    avatar: avatarOne,
  },
  {
    name: "Salma Dahrani",
    idNumber: "EMP-2",
    date: "02 Aug 2025 - 12:32 PM",
    location: "Al Balad (Downtown Amman), Amman Governorate, Jordan",
    status: "Late",
    avatar: avatarTwo,
  },
  {
    name: "Yousef Barqani",
    idNumber: "EMP-3",
    date: "03 Aug 2025 - 10:00 AM",
    location: "Abdali district, Amman Governorate, Jordan",
    status: "Failed",
    avatar: avatarThree,
  },
  {
    name: "Noor Khandari",
    idNumber: "EMP-4",
    date: "04 Aug 2025 - 8:32 AM",
    location:
      "12 King Faisal Street, Downtown Amman, Amman Governorate, Jordan",
    status: "On-Time",
    avatar: avatarFour,
  },
  {
    name: "Lina Al-Mahrouqi",
    idNumber: "EMP-5",
    date: "01 Aug 2025 - 14:32 PM",
    location: "Jabal Amman, Amman Governorate, Jordan",
    status: "Late",
    avatar: avatarFive,
  },
  {
    name: "Khaled Nabeelzar",
    idNumber: "EMP-6",
    date: "02 Aug 2025 - 12:32 PM",
    location: "Amman Citadel, Downtown Amman, Amman Governorate, Jordan",
    status: "Failed",
    avatar: avatarSix,
  },
  {
    name: "Dalia Farhouni",
    idNumber: "EMP-7",
    date: "03 Aug 2025 - 10:00 AM",
    location: "Downtown Amman, Amman Governorate, Jordan",
    status: "On-Time",
    avatar: avatarSeven,
  },
];

export const users = [
  {
    name: "Mira Al-Sayfani",
    time: "Apr 2, 2025, 10:35 am",
    location: "Location: United States",
    score: "Match Score: 85%",
    image: avatarOne,
    showButtons: true,
  },
  {
    name: "Salma Dahrani",
    time: "Apr 2, 2025, 10:35 am",
    location: "Location: United States",
    score: "Match Score: 85%",
    image: avatarTwo,
  },
  {
    name: "Yousef Barqani",
    time: "Apr 2, 2025, 10:35 am",
    location: "Location: United States",
    score: "Match Score: 85%",
    image: avatarThree,
  },
  {
    name: "Noor Khandari",
    time: "Apr 2, 2025, 10:35 am",
    location: "Location: United States",
    score: "Match Score: 85%",
    image: avatarFour,
  },
  {
    name: "Lina Al-Mahrouqi",
    time: "Apr 2, 2025, 10:35 am",
    location: "Location: United States",
    score: "Match Score: 85%",
    image: avatarFives,
  },
  {
    name: "Khaled Nabeelzar",
    time: "Apr 2, 2025, 10:35 am",
    location: "Location: United States",
    score: "Match Score: 85%",
    image: avatarSixs,
  },
];
