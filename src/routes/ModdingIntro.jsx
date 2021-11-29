import Code from "../components/Code";

export default () => (
  <>
    <h2 class="text-3xl">An intro to Discord modding.</h2>
    <p class="text-lg">
      Aimed at both complete newbies, and those wanting a fresh start.
    </p>

    <h3 class="text-2xl mt-4">Why mod your Discord?</h3>
    <p>
      Before you get into modding, decide why you want to do it. For some, you
      just want your Discord app (from now on called the "client") to look how
      you want it. For others, you want crazy custom functionality powered by
      gargantuan JS spaghetti.
    </p>
    <p class="mt-2">
      For most, though, you probably just want a less boring looking client with
      some neat addons to make your experience nicer. Want to disable reply
      pings? Not send the "you are typing" prompt? Steal people's nitro emotes?
      Use unreleased features? Well client modding lets you do all this and much
      much more.
    </p>

    <h3 class="text-2xl mt-4">Why not mod your Discord?</h3>
    <ul>
      <li class="list-disc">
        "I want stereo voice chats" - great, but nobody else wants to hear you
        in stereo. Also we all know that what you really want is to be able to
        scream at people at +3dB and make everyone's ears bleed. Please find
        something better to do with your spare time.
      </li>
      <li class="list-disc">You never actually use Discord.</li>
      <li class="list-disc">
        Actually yeah that's it - now go and enjoy your newfound freedom.
      </li>
    </ul>

    <h3 class="text-2xl mt-4">Which mod to go for?</h3>
    <p>
      Picking a client mod can seem confusing or even difficult at first. Most
      beginners will be pulled towards BetterDiscord mostly because they've
      probably heard of it at some point - its well known. There's also
      Powercord which is a very different beast - overall more complex, which is
      both good and bad. Then there's GooseMod, a lightweight mod that can both
      load on your client and on web, and is nice and modern. This also has a
      built in store which is great for beginners.
    </p>
    <p class="mt-2">
      However, this guide will use none of these. I will be using Cumcord. This
      may sound like a stupid choice - not a mainstream mod and{" "}
      <span class="italic">such an immature name!</span>
      But it's actually really great. I will now put forth my reasons for
      picking this mod:
    </p>
    <ul class="mt-2">
      <li class="list-disc">
        <span class="font-bold">Ignore the name</span> - if you're arguing that
        the name is immature, I argue: "that's the joke" - its a great mod with
        a dumb name and that is the joke (which you missed).
      </li>
      <li class="list-disc">
        <span class="font-bold">Its light as hell, yet powerful</span> - it can
        run on the browser just like GooseMod, but it doesnt do anything over
        the top itself. There are no unnecessary visual frills like Vizality,
        and non-core functionality is not included in the core mod. No store,
        themes, etc on its own.
      </li>
      <li class="list-disc">
        <span class="font-bold">Buit for speed & modernity</span> - Cumcord is
        built to be as efficient as it possibly can be. Everything is built to
        run as fast as possible, and plugins are built using modern technologies
        like async/await, fetch, and ES modules.
      </li>
      <li class="list-disc">
        <span class="font-bold">Its ultra robust</span> - Cumcord and its
        plugins store data using{" "}
        <a href="https://github.com/Kyza/nests/" class="text-blue-400">
          Nests
        </a>
        , backed by indexedDB. This is much less volatile than a file system
        like PC or BD, and a little more robust than localStorage like GM too.
      </li>
    </ul>

    <h3 class="text-2xl mt-4">Getting installed</h3>
    <p>
      There are two main ways to load Cumcord. Already use a mod or want to use
      it in tandem with another mod? You can load it from other mods as a
      plugin.{" "}
      <a href="https://cumcord.com/#install" class="text-blue-400">
        Click here for more info.
      </a>
      Only want to use Cumcord? Great, there's an installer{" "}
      <a
        href="https://github.com/Cumcord/Impregnate/releases/latest"
        class="text-blue-400"
      >
        here.
      </a>
    </p>

    <h3 class="text-2xl mt-4">Getting set up</h3>
    <p>
      Now you have your Cumcord installed (if necessary restart your client),
      lets get you up and running. In the settings page you will have a plugins
      page with a box to paste <span class="italic">plugin import URLs.</span>
      There are multiple ways to find plugins to install:
    </p>
    <ul class="mt-2">
      <li class="list-disc">
        The first is just finding plugins yourself, and installing them. Enough
        said.
      </li>
      <li class="list-disc">
        The second is to get plugins from the{" "}
        <a href="https://discord.gg/FhHQQrVs7U" class="text-blue-400">
          Discord server
        </a>
        .
      </li>
      <li class="list-disc">
        Now for two more user friendly options: The third way is to get them
        online from{" "}
        <a href="https://dump.cumcord.com" class="text-blue-400">
          the online store: Cumdump
        </a>
        . Cumdump is an online store that will display plugins from the official
        repo and provide one-click installs to any running clients. Don't worry
        about security - Cumcord prompts you first!
      </li>
      <li class="list-disc">
        And for the ultimate easy plugin install experience: A plugin that gives
        you all the best of Cumdump right from the comfort of your client.
        Download the Cum Zone from cumdump, or paste the following import URL
        into the plugins page:
        <Code>
          https://cumcordplugins.github.io/Condom/yellowsink.github.io/cc-plugins/cum-zone
        </Code>
      </li>
    </ul>
    <p class="mt-2">
      Now simply start installing anything that looks interesting to you!
    </p>

    <h3 class="text-2xl mt-4">My picks for some quality plugins</h3>
    <p>
      Note I am arguably biased in this section as I do write Cumcord plugins.
      For the best experience mass-installing these if thats your thing, get
      comfy in Cumdump or (even better) the Cum Zone.
    </p>
    <ul class="mt-2">
      <li class="list-disc">
        link channels: if you want to copy and paste channel #mentions,
        including into other servers, here you go
      </li>
      <li class="list-disc">
        SilentTyping: stops others seeing when you're typing. Some people will
        love this, others won't care.
      </li>
      <li class="list-disc">
        DevMode: who doesn't want to try new Discord features early?
        (experiments)
      </li>
      <li class="list-disc">
        QuickCSS: a minimal but polished and functional plugin to just simply
        yourself some CSS.
      </li>
      <li class="list-disc">
        Create Emote: steal other users' emotes, and create them with ease too?
        nice.
      </li>
      <li class="list-disc">
        Channel Menu: not a fan of the quick switcher but still want to zip
        about quickly? You'll like this.
      </li>
      <li class="list-disc">
        Channel Typing Indicator: yes. Test in a (very) big server.
      </li>
      <li class="list-disc">
        Message Link Preview: when people post links to messages, you don't have
        to click them to see what they are!
      </li>
    </ul>

    <h3 class="text-2xl mt-4">But Cumcord no themes!!!</h3>
    <ol>
      <li class="list-decimal">
        Soon™:{" "}
        <a href="https://github.com/Cumcord/STD/pull/2" class="text-blue-400">
          spec
        </a>
        ,{" "}
        <a
          href="https://github.com/yellowsink/cc-plugins/tree/master/cumstain"
          class="text-blue-400"
        >
          plugin
        </a>
      </li>
      <li class="list-decimal">
        Why not go for the CC + GooseMod combo (cumbo?) in the meantime?
      </li>
    </ol>
  </>
);
