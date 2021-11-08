export default ({ banner, label, link, uname }) => (
  <a
    href={link}
    target={"_blank"}
    class="border border-gray-500 shadow-md p-8 w-auto h-40 md:w-80 <md:flex-col flex justify-between bg-light-300 dark:(bg-dark-500 border-gray-400) transition-colors font-mono"
  >
    <img
      class="-mt-4 h-20 mx-auto md:(-ml-2 mr-4 h-auto object-cover)"
      src={banner}
    />
    <div class="text-center md:text-right self-center">
      <h2 class="text-2xl">{label}</h2>
      <p>{uname}</p>
    </div>
  </a>
);
