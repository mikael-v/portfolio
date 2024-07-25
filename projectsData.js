import Gamerly from "./src/assets/demos/Gamerly.mp4";
import gamerlyChat from "./src/assets/images/gamerly/gamerlyChat.png";
import gamerlyLogin from "./src/assets/images/gamerly/gamerlyLogin.png";
import gamerlyFriends from "./src/assets/images/gamerly/gamerlyFriends.png";
import gamerlyCover from "./src/assets/images/gamerly/gamerlyCover.jpg";

const projects = [
  {
    title: "Gamerly",
    id: 1,
    description: `Gamerly is a social media app for gamers. Users can register for an account and upon logging in are displayed a selection of popular games from a database. After selecting 1-3 options they are directed to a homescreen page where they will be shown recommended games based on their selection, as well as current popular games and games by genre. Users can also navigate between this homepage, a friends tab and their profile tab. One their friends tab they're able to friend other users and remove friends, chat to friends using real-time chat and view their personal 'Wishlist' and 'My Games' libraries. Selecting game cards allows them to add and remove games to each library.`,
    imgs: [gamerlyCover, gamerlyLogin, gamerlyFriends, gamerlyChat],
    demo: Gamerly,
    stack: [
      "TypeScript",
      "React Native",
      "JavaScript",
      "Firebase",
      "Express.js",
      "Node.js",
      "Python",
      "Python Flask",
    ],
  },
];

export default projects;
