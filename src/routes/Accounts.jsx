import AccountCard from "../components/AccountCard";

const accounts = [
  {
    banner: "",
    label: "727",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink"
  }, {
    banner: "",
    label: "727",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink"
  }, {
    banner: "",
    label: "727",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink"
  }, {
    banner: "",
    label: "727",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink"
  }, {
    banner: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Osu%21Logo_%282015%29.svg/1024px-Osu%21Logo_%282015%29.svg.png",
    label: "727",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink"
  },
]

export default () => (
  <>
    <h2 class="text-xl">Accounts</h2>
    <div class="text-4xl mt-6">Under construction 🏗</div>
    <div class="flex flex-wrap <md:grid grid-cols-2 <sm:grid-cols-1 justify-evenly gap-6 my-4">
      {accounts.map(acc => (
        <AccountCard banner={acc.banner} label={acc.label} link={acc.link} uname={acc.uname} />
      ))}
    </div>
  </>
);
