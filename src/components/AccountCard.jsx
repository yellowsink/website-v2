export default ({ banner, label, link, uname }) => (
  <a
    href={link}
    target={"_blank"}
    class="border border-gray-500 shadow-md p-4 w-70 <md:w-auto"
  >
    <img class="-m-4 mb-4 h-20 w-auto object-cover" src={banner} />
    <h2 class="text-lg float-left">{label}</h2>
    <p class="float-right">{uname}</p>
  </a>
);
