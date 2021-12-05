export default () => (
  <>
    <h2>The state of digital music production on Linux</h2>

    <h3>The setup</h3>
    <table>
      <tbody>
        <tr>
          <td>Distro</td>
          <td>EndeavourOS rolling</td>
        </tr>
        <tr>
          <td>Linux Kernel</td>
          <td>linux-zen 5.15.6-zen2-1-zen</td>
        </tr>
        <tr>
          <td>ALSA versions</td>
          <td>
            alsa-card-profiles 1:0.3.40-1
            <br />
            alsa-firmware 1.2.4-2
            <br />
            alsa-lib 1.2.5.1-3
            <br />
            alsa-plugins 1:1.2.5-2
            <br />
            alsa-topology-conf 1.2.5.1-1
            <br />
            alsa-ucm-conf 1.2.5.1-1
            <br />
            alsa-utils 1.2.5.1-1
            <br />
            lib32-alsa-lib 1.2.5.1-1
            <br />
            lib32-alsa-plugins 1.2.5-1
          </td>
        </tr>
        <tr>
          <td>Pipewire versions</td>
          <td>
            gst-plugin-pipewire 1:0.3.40-1
            <br />
            pipewire 1:0.3.40-1
            <br />
            pipewire-alsa 1:0.3.40-1
            <br />
            pipewire-jack 1:0.3.40-1
            <br />
            pipewire-pulse 1:0.3.40-1
            <br />
            wireplumber 0.4.5-2
          </td>
        </tr>
        <tr>
          <td>Wine versions</td>
          <td>
            wine-gecko 2.47.2-2
            <br />
            wine-mono 7.0.0-1
            <br />
            wine-staging 6.22-1
          </td>
        </tr>
      </tbody>
    </table>

    <h3>Setting up audio apps - The natives</h3>
    <p>
      There are two native Linux audio applications I decided to try. The first
      of these was LMMS, which is honestly too unusable for me, but otherwise
      fine.
    </p>
    <p>
      The second of these was REAPER. This integrated perfectly fine with
      Pipewire through ALSA, JACK, and PulseAudio. REAPER works beautifully, is
      nice and fast, and pretty light. It also happens to be pretty much the
      most powerful DAW available -{" "}
      <a href="https://www.youtube.com/watch?v=H-Gs-o39C5o">
        have you ever seen a REAPER power-user???
      </a>
    </p>
    <p>
      REAPER had one drawback for me though - aside from me personally not
      finding it as "musical" as some others like FL or Reason - it failed to
      find any of my VST plugins.
    </p>
    <p>
      Had I got some Linux VSTs, this would work absolutely fine - indeed REAPER
      has the widest plugin format support of any other software I tested,
      however <i>Windows</i> VSTs under Wine did not display (reasonably).
    </p>
    <p>
      Also to note is that LMMS theoretically can load Windows VSTs - the
      VeSTige plugin should be able to load a Windows VST given the path to the
      dll, however it didn't work for me, and last time I'd tried it, the UI had
      been very very buggy anyway.
    </p>

    <h3>Setting up audio apps - The Windows DAWs</h3>
    <p>
      Every DAW I tried installed and launched out of the box on Wine, which was
      a nice surprise. In addition I encountered no issues with audio playback
      quality - No xruns whatsoever. In addition, both Reason and FL were
      capable of loading and using VSTs fine.
    </p>
    <p>
      iZotope RX 8 installed, however insta-crashes on launch. This also causes
      the RX VSTs to fail to load in other hosts.
    </p>

    <h3>REAPER on Wine</h3>
    <p>
      REAPER runs fine under Wine, and only has one minor graphical issue (the
      scrollbars cant decide if they should look REAPER-ey or Windows-ey, and
      settle on glitching between the two).
    </p>
    <p>
      Audio playback works, and performance is good. VST plugins, however
      crashed it. Hence I did not test further. Anyway, if you're using REAPER,
      you should probably just use the Linux build and wrestle with a bridge
      such as LinVST.
    </p>

    <h3>Reason 12</h3>
    <p>
      I have long had a soft spot for Reason, since I started using it a few
      years back (on Reason 10 Lite). So I was excited to find that the latest
      version installs fine on Wine and loads up too.
    </p>
    <p>
      There are a few issues, though: first, you cannot click the menu bar. This
      can be worked around, though, by pressing alt once, then down once. You
      can now use the arrows to navigate the menu, and the mouse mostly works
      too.
    </p>
    <p>
      More annoyingly, lots of text in the UI is white on a white background.
      The best you can do to partially fix this is enable either the Blue or
      Dark theme.
    </p>
    <p>
      I encountered no issues with VST support, however (presumably due to the
      DRM encrypting project files (maybe? - dont quote me on this!)), not only
      could I not save projects, I could not save presets either.
    </p>
    <p>
      Importing MIDI worked, but each track took a very long time to import,
      before showing an error box that an assertion failed (that could
      thankfully be safely ignored).
    </p>
    <p>
      The HD makeover new in version 12 still looks just as stunning under
      Linux, though with some details like the spinning fan on the back of the
      Redrum lagging performance a little.
    </p>
    <p>
      I wondered if I could get around the issues with the Reason DAW and still
      make use of its rack in other DAWs, but the VST3 Reason Rack Plugin
      crashes instantly.
    </p>

    <h3>FL Studio 20</h3>
    <p>
      FL Studio is a frightfully popular DAW with a nice UI, an unconventional
      pattern-based workflow, a nice light engine, and quite the dedicated
      community. Oh, and it can drive Razer Chroma devices too so your keyboard
      can vibe out to your tunes.
    </p>
    <p>
      FL Studio works pretty much perfectly, if a little heavier. When you boot
      it up for the first time, you are dropped straight into the demo project
      (created with only built in plugins) and it works great. The mixer is
      responsive, animations are oh so fluid, and the playlist snaps
      satisfyingly along at 60fps as the playhead advances.
    </p>
    <p>
      There is only one single issue that stops the FL experience being
      literally identical to on Windows - the main window's handling of mouse
      events. While FL can be resized fully under Windows, on Linux, it doesn't
      seem to grasp the idea that it can be smaller than your entire screen.
    </p>
    <p>
      UPDATE: I went back into FL to do some testing while writing this, and it
      turns out that FL just thinks its maximised. Hit the titlebar button to
      make it windowed and it works literally flawlessly - identical to on
      Windows. You may wish to use a WM not a DE to make it automatically nice
      and big despite being windowed.
    </p>
    <p class="line-through">
      If you use a DE (GNOME, KDE, XFCE, Cinnamon, etc), like most Linux users
      will, you will have a very hard time. If you use a Window Manager such as
      BSPWM, i3, awesomewm, etc you might have a somewhat easier time.
    </p>
    <p class="line-through">
      To get FL studio usable on a WM, give it a workspace entirely to itself,
      and then get ready to hit your fullscreen hotkey A LOT. This is because
      doing loads of stuff (most annoyingly naming things) open separate
      windows. These arent separate windows like non-detached plugins, the
      mixer, etc., these are separate windows as far as your WM is concerned.
      While for me they didn't try to tile and floated correctly, this did kick
      FL out of fullscreen.
    </p>
    <p class="line-through">
      Alternatively, get ready to disable gaps, disable window titlebars and
      borders, and kill your statusbar so that FL is fullscreen even when not
      actually fullscreen.
    </p>

    <h3>Ableton Live</h3>
    <p>
      I didn't try Live. According to Wine appdb it works fine, if much heavier
      like FL and minor glitches. So yeah.
    </p>

    <h3>Conclusion</h3>
    <p>
      In conclusion, audio production on Linux is painfully close to being
      really really great, but for that to happen I think we need one of the
      following three to happen:
    </p>
    <ul>
      <li>
        (Most likely) Some effort from the team at Cockos: working windows VST
        bridging in REAPER would make using it a very viable choice, and running
        natively on Linux means it will outperform DAWs on any other OS 90% of
        the time, plus it can take full advantage of Pipewire (likely indirectly
        via JACK), for fun routing and low latency.
      </li>
      <li>
        (Pretty unlikely) Some effort from the Wine team: somehow make FL and
        Ableton use the full extent of your CPU - reduce DSP overhead somehow
      </li>
      <li>
        (Comically unlikely) A huge effort from the KVM/QEMU devs and Linux
        Kernel contributors, and possibly Microsoft: make Windows KVMs have
        usable performance. Yeah that's not happening.
      </li>
    </ul>
  </>
);
