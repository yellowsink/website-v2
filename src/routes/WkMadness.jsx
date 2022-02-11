import Code from "../components/Code";

export default () => (
  <>
    <h2>Webkit CSS transition madness</h2>
    <p>
      Webkit & Blink have some level of actual insanity connected to their
      implementation of CSS transitions, and it annoys me a lot, since it
      adversely affects this site.
    </p>

    <h3>Why is the fade timed weirdly on the sidebar?</h3>
    <p>A: Webkit, so probably because you're on a Chromium browser.</p>

    <h3>Can you fix it?</h3>
    <p>
      Theoretically it should be fixable, but seeing how the page is styled and
      how the DOM is structured, I actually have <i>NO</i> clue because there
      are no inherited transitions here.
    </p>
    <p>
      It doesn't happen on the links cause they have the transitions applied
      separately, but thats a super ugly solution to have to do for every
      element in the sidebar.
    </p>

    <h3>A practical example</h3>
    <p>
      Note: if you are on Firefox, this will look just fine to you. This is a
      Webkit issue, though i think its a related but not identical issue to the
      one on the sidebar.
    </p>

    <a id="test-1">
      <span>Content</span>
    </a>
    <style>
      {`
#test-1, #test-1 span, #test-2 { transition: 0.5s; }

#test-1, #test-2 {
padding: 0.5em 0.75em;
border: 1px solid red;
color: #000;
display: inline-block;
}

#test-1:hover, #test-2:hover {
color: #f00;
background-color: #0f0;
}`}
    </style>

    <p>
      Notice that the text turns red <i>after</i> the bg turns green. WHYYYYY?
    </p>
    <p>Google or Apple pls fix.</p>
    <p>By the way, heres what that should behave like:</p>

    <a id="test-2">
      <span>Content</span>
    </a>

    <h3>A possible fix?</h3>
    <p>
      Browser devs: stop making transitions wait for other transitions higher
      up, it makes things break and there is 0 reason to do it. Just run all the
      transitions at once, it's much more intuitive for devs and users.
    </p>

    <h3>Why not make it work then?</h3>
    <p>
      This is Webkit's fault, and I refuse to spare effort to fix an issue with
      Webkit on my end just because its used in most browsers. You behave in a
      sensible way, then I'll fix a minor bug specific to your browser engine.
    </p>
  </>
);
