SupaModal = {};

SupaModal.init = ({ url }) => {
  console.log("Initialize the Supamodal...");
  if (
    document.querySelectorAll(".product-tutorial-guide-ttwffnta").length > 0
  ) {
    document
      .querySelectorAll(".product-tutorial-guide-ttwffnta")
      .forEach((dom) => dom.remove());
  }
  document.querySelector(
    "body"
  ).innerHTML += `<div class="product-tutorial-guide-ttwffnta animate-ttwffnta">
      <div class="pp-icon-ttwffnta">
        <svg
          width="32"
          height="81"
          viewBox="0 0 32 64"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          data-bearing="w"
          style="transition: 240ms ease-in-out; transform: rotate(180deg)"
        >
          <path
            fill="none"
            stroke="#000"
            stroke-width="3"
            stroke-linecap="round"
            d="M10,7 L20.4,30 C20.4,31 20.4,33 20,33 L11,57.4"
            style="transition: 240ms ease-in-out"
          ></path>
        </svg>
      </div>
      <div class="supa_modal_ttwffnta">
        <iframe
          src="${url}"
          loading="lazy"
          title="Inapp supademo custome survey basic"
          allow="clipboard-write"
          frameborder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowfullscreen
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        ></iframe>
      </div>
    </div>`;

  const style = document.createElement("style");
  style.innerText = `.product-tutorial-guide-ttwffnta { position: fixed; top: 20%; right: -465px; padding: 48px; padding-right: 0px; padding-left: 0; display: flex; align-items: center; transition: 1s ease-in-out; } .animate-ttwffnta { animation: bounce_ttwffnta 2s infinite; -webkit-animation: bounce_ttwffnta 2s infinite; -moz-animation: bounce_ttwffnta 2s infinite; -o-animation: bounce_ttwffnta 2s infinite; } .supa_modal_ttwffnta { position: relative; box-sizing: content-box; width: 500px; margin-left: -36px; aspect-ratio: 1.7733990147783252; } .pp-icon-ttwffnta { background: rgba(221, 221, 221, 0.412); border-radius: 10px 0 0 10px; padding-left: 2px; padding-right: 2px; transition: 0.5s ease-in-out; overflow: hidden; } .product-tutorial-guide-ttwffnta:hover { right: 0px; } .product-tutorial-guide-ttwffnta:hover .pp-icon-ttwffnta { transform: scale(0) !important; } .svg_animate_ttwffnta { animation: roll_ttwffnta 1.4s infinite; } @keyframes roll_ttwffnta { 0% { -webkit-transform: translateX(0); } 50% { -webkit-transform: translateX(3px); } 100% { -webkit-transform: translateX(0px); } } @-webkit-keyframes bounce_ttwffnta { 0%, 20%, 50%, 80%, 100% { -webkit-transform: translateY(0); } 40% { -webkit-transform: translateY(-30px); } 60% { -webkit-transform: translateY(-15px); } } @-moz-keyframes bounce_ttwffnta { 0%, 20%, 50%, 80%, 100% { -moz-transform: translateY(0); } 40% { -moz-transform: translateY(-30px); } 60% { -moz-transform: translateY(-15px); } } @-o-keyframes bounce_ttwffnta { 0%, 20%, 50%, 80%, 100% { -o-transform: translateY(0); } 40% { -o-transform: translateY(-30px); } 60% { -o-transform: translateY(-15px); } } @keyframes bounce_ttwffnta { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-30px); } 60% { transform: translateY(-15px); } }`;
  document.querySelector("head").append(style);
  setTimeout(() => {
    document
      .querySelector(".animate-ttwffnta")
      .classList.remove("animate-ttwffnta");
    document
      .querySelector(".pp-icon-ttwffnta")
      .classList.add("svg_animate_ttwffnta");
  }, 4000);
};

function updateTtwffnta({ width, right, animationSpeed }) {
  if (width) {
    document.querySelector(".supa_modal_ttwffnta").style.width = width;
  }
  if (right) {
    document.querySelector(".supa_modal_ttwffnta").style.right = right;
  }
  if(animationSpeed){
    document.querySelector(".product-tutorial-guide-ttwffnta").style = `transition-delay: ${animationSpeed}s`
  }
}

SupaModal.update = (params) => {
  const { url } = params;
  if (url) {
    const selector = document.querySelector(
      ".product-tutorial-guide-ttwffnta iframe"
    );
    if (selector) {
      selector.src = url;
    }
  }
  updateTtwffnta(params);
};
