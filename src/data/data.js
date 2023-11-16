import weatherApp from "../Assets/weatherApp.png";
import fitClub from "../Assets/fit-club.png";
import passwordGenerator from "../Assets/PasswordGenerator.png";
import skyTrust from "../Assets/SkyTrust.png";

const data = [
  {
    id: 1,
    Name: "SkyTrust Canada",
    description:
      "SkyTrust is a leading Digital Transformation Company  having a variety of services like digital marketing, ai solutions, development services, ERP Services and many more. SkyTrust have got its presence in 5 different countries including India, USA, Canada, UAE and Australia. ",
    technologies: ["NextJs", "NodeJs"],
    image: skyTrust,
    link: "https://skytrust.ca",
  },
  {
    id: 2,
    Name: "Fit CLub 🏋️",
    description:
      "Fit Club is a fitness-oriented website that aims to provide high-quality fitness training and nutrition guidance to clients, to help users to get their dream shape and  achieve their fitness goals ",
    technologies: ["React", "CSS"],
    image: fitClub,
    code: "https://github.com/eruditmishra/Fit-Club",
    link: "https://udit-fit-club.vercel.app/",
  },
  {
    id: 3,
    Name: "Weather ⛅",
    description:
      "A weather application that provides real-time weather updates and forecasts for various locations around the world.The real-time updates and 5-day forecasts ensure that users are always prepared for whatever weather conditions may come their way. ",
    technologies: ["JavaScript", "CSS"],
    image: weatherApp,
    code: "https://github.com/eruditmishra/Weather-App",
    link: "https://udit-weather.vercel.app/",
  },
  {
    id: 4,
    Name: "Password Generator 🔑",
    description:
      "A password generator that creates strong, secure passwords for users. The password generator provides a quick and easy way to generate secure passwords that are difficult to crack, helping users protect their online accounts and personal information.",
    technologies: ["JavaScript", "CSS"],
    image: passwordGenerator,
    code: "https://github.com/eruditmishra/Password-Generator",
    link: "https://udit-password-generator.vercel.app/",
  },
];

export default data;
