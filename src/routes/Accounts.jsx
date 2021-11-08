import AccountCard from "../components/AccountCard";
import osu from "../assets/accounticons/osu.png";
import reddit from "../assets/accounticons/reddit.png";
import discord from "../assets/accounticons/discord.png";
import twitter from "../assets/accounticons/twitter.png";
import youtube from "../assets/accounticons/youtube.png";
import github from "../assets/accounticons/github.svg";

const accounts = [
  {
    banner: osu,
    label: "osu!",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink",
  },
  {
    banner: discord,
    label: "Discord",
    uname: "Yellowsink#8156",
  },
  {
    banner: reddit,
    label: "Reddit",
    link: "https://reddit.com/u/yellosink",
    uname: "u/yellosink",
  },
  {
    banner: twitter,
    label: "Twitter",
    link: "https://twitter.com/CainAtkin",
    uname: "@CainAtkin",
  },
  {
    banner: youtube,
    label: "YouTube",
    link: "https://www.youtube.com/channel/UCQ_ZGydjNeSHNbdo_m6uUcQ",
    uname: "Cain Atkinson",
  },
  {
    banner: github,
    label: "Github",
    link: "https://github.com/yellowsink",
    uname: "Yellowsink",
  },
];

export default () => (
  <>
    <h2 class="text-3xl">Accounts</h2>
    <div class="flex flex-wrap <md:grid grid-cols-2 <sm:grid-cols-1 justify-evenly gap-6 my-4">
      {accounts.map((acc) => (
        <AccountCard
          banner={acc.banner}
          label={acc.label}
          link={acc.link}
          uname={acc.uname}
        />
      ))}
    </div>
  </>
);
