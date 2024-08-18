import Gamerly from "./src/assets/demos/Gamerly.mp4";
import gamerlyChat from "./src/assets/images/gamerly/gamerlyChat.png";
import gamerlyLogin from "./src/assets/images/gamerly/gamerlyLogin.png";
import gamerlyFriends from "./src/assets/images/gamerly/gamerlyFriends.png";
import gamerlyCover from "./src/assets/images/gamerly/gamerlyCover.jpg";
import mobileFilters from "./src/assets/images/spellFinder/mobileFilters.png";
import mobile from "./src/assets/images/spellFinder/mobile.png";
import desktop from "./src/assets/images/spellFinder/desktop.png";
import desktopFilters from "./src/assets/images/spellFinder/desktopFilters.png";
import spellFinderCover from "./src/assets/images/spellFinder/spellFinderCover.png";
import spellFinderDemo from "./src/assets/demos/SpellfinderDemo.mp4";

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
    repo: "https://github.com/melissa-linsc/SocialGamerApp",
  },
  {
    title: "5E Spell Finder",
    id: 2,
    description: `5E Spell Finder uses the 5E open source API and fetches its data to allow users to find spells from Dungeons and Dragons 5th Edition. They can filter spells by spell school, spells available to certain classes and spells of certain levels. They can also order the spells list to view them in order of categories such as level or spell school`,
    imgs: [spellFinderCover, mobile, mobileFilters, desktop, desktopFilters],
    demo: spellFinderDemo,
    stack: ["JavaScript", "React", "CSS"],
    link: "https://spell-finder.netlify.app/",
    repo: "https://github.com/mikael-v/spell-finder",
  },
];

export default projects;
