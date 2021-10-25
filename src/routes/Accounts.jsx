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
    banner: "",
    label: "727",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink"
  },
]

export default () => (
  <>
    <h2 class="text-xl">Accounts</h2>
    <div class="text-4xl mt-6">Under construction 🏗</div>
    <div class="grid grid-cols-3">
      {accounts.map(acc => (
        <AccountCard banner={acc.banner} label={acc.label} link={acc.link} uname={acc.uname} />
      ))}
    </div>
  </>
);
