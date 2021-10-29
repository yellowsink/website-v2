export default ({ banner, label, link, uname }) => (
  <a
    href={link}
    target={"_blank"}
    class="border border-gray-500 shadow-md p-8 w-80 h-40 <md:w-auto flex justify-between bg-light-300 dark:(bg-dark-500 border-gray-400) transition-colors font-mono"
  >
    <img class="-m-2 mr-4 h-20 h-auto object-cover" src={banner} />
    <div class="text-right self-center">
      <h2 class="text-2xl">{label}</h2>
      <p>{uname}</p>
    </div>
  </a>
);
