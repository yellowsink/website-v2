export default ({ banner, label, link, uname }) => (
  <a
    href={link}
    target={"_blank"}
    class="border border-gray-500 shadow-md p-4 w-70 h-30 <md:w-auto flex justify-between"
  >
    <img class="-m-4 mr-4 h-20 h-auto object-cover" src={banner} />
    <div class="text-right self-center">
      <h2 class="text-lg">{label}</h2>
      <p>{uname}</p>
    </div>
  </a>
);
