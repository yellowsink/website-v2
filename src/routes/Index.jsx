export default () => (
  /* <> allows us to return more than one component without wrapping in a div. neat! */
  <>
    <div class="flex">
      <img
        src="https://gravatar.com/avatar/07c71710cff6bc1bd3ef089a2530cc82?s=500"
        class="h-30 w-30 bg-[#6DB4D5]"
      />
      <h2 class="text-3xl m-6 my-auto">About me</h2>
    </div>
    <div class="text-xl italic mt-6">
      When dumb project ideas and free time collide.
    </div>

    <p>
      My most comfortable programming language is C# - I know it like the back
      of my hand! F# is the coolest lang I know, but most people think it's
      horrific. I sometimes write in Golang because it's strangely fun. I have
      recently been using JS a lot to make Discord plugins, as well as this site
      and some webdev for a client mod.
    </p>
  </>
);
