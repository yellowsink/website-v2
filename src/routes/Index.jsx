export default () => (
  /* <> allows us to return more than one component without wrapping in a div. neat! */
  <>
    <div class="flex mb-10">
      <img
        src="https://gravatar.com/avatar/07c71710cff6bc1bd3ef089a2530cc82?s=500"
        class="h-30 w-30 bg-[#6DB4D5] @sm:(h-20 w-20)"
      />
      <div class="ml-6 my-auto">
        <h2 class="text-3xl mb-2">About me</h2>
        <div class="text-xl italic">
          When awful ideas and free time collide.
        </div>
      </div>
    </div>

    <p class="mt-2">
      Hi, I'm Cain Atkinson, known online as Yellowsink. I make dumb little
      programs, and occasionally some cool stuff too.
    </p>

    <h3 class="font-bold mt-2">Programming</h3>
    <p>
      My most comfortable programming language is C# (At this point I know .NET
      like the back of my hand). F# is really cool, but most people think it's
      horrific. I sometimes use Go because why not? I have recently been using
      JS a lot to make Discord plugins, as well as this site, and a little
      webdev for a client mod.
    </p>

    <img
      src="https://github-readme-stats.vercel.app/api?username=yellowsink&theme=gruvbox"
      class="m-4 w-100 rounded shadow-lg"
    />

    <h3 class="font-bold mt-2">Rhythm Gaming</h3>
    <p>
      I mostly play osu!, though I've been giving taiko a go recently. tau is
      fun.
    </p>
  </>
);
