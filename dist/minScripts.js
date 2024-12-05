let pokemonRepository = (function () {
  let e = [];
  function t(t) {
    "object" == typeof t && "name" in t && "detailsURL" in t
      ? e.push(t)
      : console.log("Pokemon is not correct");
  }
  function n() {
    return e;
  }
  function o(e) {
    i(e).then(function () {
      var t, n, o;
      let i, r, a;
      (t = e.name),
        (n = "Height: " + e.height),
        (o = e.imageURL),
        (i = document.querySelector("#pokemonModalLabel")),
        document.querySelector(".modal-body"),
        (r = document.querySelector("#pokemonHeight")),
        (a = document.querySelector("#pokemonImage")),
        (i.innerText = t),
        (r.innerText = n),
        a.setAttribute("src", o),
        $("#pokemonModal").modal("show");
    });
  }
  function i(e) {
    return fetch(e.detailsURL)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageURL = t.sprites.front_default),
          (e.height = t.height),
          (e.types = t.types);
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  return {
    add: t,
    getAll: n,
    addListItem: function e(t) {
      let n = document.querySelector(".pokemon-list"),
        i = document.createElement("li"),
        r = document.createElement("button");
      i.classList.add("list-group-item"),
        (r.innerText = t.name),
        r.classList.add("btn", "btn-primary"),
        r.addEventListener("click", function () {
          o(t);
        }),
        i.appendChild(r),
        n.appendChild(i),
        r.addEventListener("click", function (e) {
          pokemonRepository.showDetails(t);
        });
    },
    loadList: function e() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            t({ name: e.name, detailsURL: e.url });
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: i,
    showDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e);
  });
});
