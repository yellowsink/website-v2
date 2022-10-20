// for people testing the chrome origin trial for this, adds ~~snazzy~~ page transitions

function applyTransitions() {
  if (!document.createDocumentTransition) return;

  for (const link of document.getElementsByTagName("a")) {
    if (link.getAttribute("href")?.startsWith("/"))
      link.addEventListener("click", (e) => {
        e.preventDefault();

        fetch(link.href).then((r) => {
          document.createDocumentTransition().start(async () => {
            const newHtml = new DOMParser()
              .parseFromString(await r.text(), "text/html")
              .getElementsByTagName("html")[0];

            history.replaceState(null, "", link.href);
            document.getElementsByTagName("html")[0].innerHTML =
              newHtml.innerHTML;

            applyTransitions();
          });
        });
      });
  }
}

const cb = () => {
  applyTransitions();
  removeEventListener("DOMContentLoaded", cb);
};
addEventListener("DOMContentLoaded", cb);
