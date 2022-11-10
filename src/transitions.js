// for people testing the chrome origin trial for this, adds ~~snazzy~~ page transitions

function applyTransitions() {
  if (!document.createDocumentTransition) return;

  for (const link of document.getElementsByTagName("a")) {
    if (link.getAttribute("href")?.startsWith("/"))
      link.addEventListener("click", (e) => {
        e.preventDefault();

        fetch(link.href).then((r) => {
          document.createDocumentTransition().start(async () => {
            const newDom = new DOMParser().parseFromString(
              await r.text(),
              "text/html"
            );

            history.replaceState(null, "", link.href);

            document.getElementById("content").innerHTML =
              newDom.getElementById("content").innerHTML;
            
            document.querySelector("#sidebar ul").innerHTML =
              newDom.querySelector("#sidebar ul").innerHTML;

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
