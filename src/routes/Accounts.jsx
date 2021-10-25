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
    banner: "https://s1.qwant.com/thumbr/0x380/b/f/73c49dc9f849a3bf5891e2c9045c2ab6bfc431c68a9be604ff9ed3fc02fb72/wp4504965.png?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp4504965.png&q=0&b=1&p=0&a=0",
    label: "727",
    link: "https://osu.ppy.sh/u/yellowsink",
    uname: "Yellowsink"
  },
]

export default () => (
  <>
    <h2 class="text-xl">Accounts</h2>
    <div class="text-4xl mt-6">Under construction 🏗</div>
    <div class="flex flex-wrap <md:flex-col justify-evenly gap-6 my-4">
      {accounts.map(acc => (
        <AccountCard banner={acc.banner} label={acc.label} link={acc.link} uname={acc.uname} />
      ))}
    </div>
  </>
);
