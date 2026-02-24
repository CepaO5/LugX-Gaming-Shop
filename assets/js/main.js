console.log("main.js loaded:", window.location.pathname);
console.log("MAIN.JS VERSION = 123");



const GAMES = [
  {
    id: 1,
    name: "Assassin Creed",
    category: "Adventure",
    isoClass: "adv",
    oldPrice: 36,
    price: 24,
    img: "assets/images/trending-01.jpg",
    code: "AC-001",
    desc: "An open world game that combines parkour, stealth and epic battles. Explore historic cities and discover the secrets of ancient orders."
  },
  {
    id: 2,
    name: "Forza Horizon",
    category: "Racing",
    isoClass: "rac",
    oldPrice: 32,
    price: 22,
    img: "assets/images/trending-02.jpg",
    code: "FH-002",
    desc: "A realistic racing game with an open world, hundreds of cars and dynamic weather conditions. Enjoy adrenaline racing."
  },
  {
    id: 3,
    name: "Civilization",
    category: "Strategy",
    isoClass: "str",
    oldPrice: 45,
    price: 30,
    img: "assets/images/trending-03.jpg",
    code: "CIV-003",
    desc: "Build your own civilization from the Stone Age to the modern world. Plan a strategy, develop technologies and dominate the world."
  },
  {
    id: 4,
    name: "Tomb Raider",
    category: "Adventure",
    isoClass: "adv",
    oldPrice: 32,
    price: 22,
    img: "assets/images/trending-04.jpg",
    code: "TR-004",
    desc: "Follow Lara Croft through mysterious ruins and dangerous adventures. A combination of exploration, puzzles and action."
  },
  {
    id: 5,
    name: "Need For Speed",
    category: "Racing",
    isoClass: "rac",
    oldPrice: 38,
    price: 26,
    img: "assets/images/trending-03.jpg",
    code: "NFS-005",
    desc: "Street racing, car tuning and night chases. Test your driving skills in a dynamic urban environment."
  },
  {
    id: 6,
    name: "Age of Empires",
    category: "Strategy",
    isoClass: "str",
    oldPrice: 30,
    price: 20,
    img: "assets/images/trending-01.jpg",
    code: "AOE-006",
    desc: "A classic RTS strategy where you build an empire, manage resources and fight epic battles throughout history."
  },
  {
    id: 7,
    name: "Uncharted",
    category: "Adventure",
    isoClass: "adv",
    oldPrice: 28,
    price: 20,
    img: "assets/images/trending-02.jpg",
    code: "UNC-007",
    desc: "A cinematic adventure with an exciting story, spectacular locations and intense action."
  },
  {
    id: 8,
    name: "Gran Turismo",
    category: "Racing",
    isoClass: "rac",
    oldPrice: 26,
    price: 18,
    img: "assets/images/trending-04.jpg",
    code: "GT-008",
    desc: "Realistic driving simulation with detailed physics and a large selection of licensed cars."
  },
  {
  id: 9,
  name: "Warframe",
  category: "Shooter",
  isoClass: "sho",
  oldPrice: 30,
  price: 21,
  img: "assets/images/top-game-01.jpg",
  code: "WF-009",
  desc: "Cooperative action in a sci-fi world. Play as a Tenno, unlock Warframes and upgrade gear."
},
{
  id: 10,
  name: "PUBG: Battlegrounds",
  category: "Shooter",
  isoClass: "sho",
  oldPrice: 30,
  price: 14,
  img: "assets/images/top-game-02.jpg",
  code: "PUBG-010",
  desc: "Battle Royale: survive, find equipment and fight to the last player (solo/duo/squad)."
},
{
  id: 11,
  name: "Apex Legends",
  category: "Shooter",
  isoClass: "sho",
  oldPrice: 30,
  price: 9,
  img: "assets/images/top-game-03.jpg",
  code: "APEX-011",
  desc: "Fast Battle Royale with heroes and team play. Each character has special abilities."
},
{
  id: 12,
  name: "The Sims 4",
  category: "Simulation",
  isoClass: "sim",
  oldPrice: 40,
  price: 26,
  img: "assets/images/top-game-04.jpg",
  code: "SIMS-012",
  desc: "Life simulation: create characters, build houses and manage the everyday life of your Sims."
},
{
  id: 13,
  name: "Lost Ark",
  category: "MMO",
  isoClass: "mmo",
  oldPrice: 50,
  price: 42,
  img: "assets/images/top-game-05.jpg",
  code: "LA-013",
  desc: "An action MMO with a dungeon, raids and a huge world. Explore, develop your character and collect loot."
},
{
  id: 14,
  name: "Destiny 2",
  category: "Shooter",
  isoClass: "sho",
  oldPrice: 50,
  price: 37,
  img: "assets/images/top-game-06.jpg",
  code: "D2-014",
  desc: "Online FPS with PvE and PvP content. Missions, raids and seasonal events in the sci-fi universe."
},
{
  id: 15,
  name: "Brawlhalla",
  category: "Adventure",
  isoClass: "adv",
  oldPrice: 20,
  price: 12,
  img: "assets/images/categories-01.jpg",   
  code: "BRWL-015",
  desc: "A fast-paced fighting game with multiple characters and modes. Play solo or online and defeat your opponents in the arena."
},
{
  id: 16,
  name: "Tower of Fantasy",
  category: "MMO",
  isoClass: "mmo",
  oldPrice: 45,
  price: 29,
  img: "assets/images/categories-03.jpg",   
  code: "TOF-016",
  desc: "Open-world MMO with action combat, exploration and co-op content. Discover the world and improve your character."
},
{
  id: 17,
  name: "Super People",
  category: "Shooter",
  isoClass: "sho",
  oldPrice: 35,
  price: 22,
  img: "assets/images/categories-04.jpg",   
  code: "SP-017",
  desc: "Battle Royale shooter with classes and special abilities. Collect equipment, tactic and survive to the end."
}
];

const homeSearchForm = document.getElementById("search");
if (homeSearchForm) {
  homeSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("searchText").value.trim();
    window.location.href = `shop.html?q=${encodeURIComponent(q)}`;
  });
}

function attachImageFallback(root = document) {
  root.querySelectorAll("img").forEach(img => {
    if (img.dataset.fallbackAttached) return;
    img.dataset.fallbackAttached = "1";

    img.addEventListener("error", () => {
      img.src = "assets/images/trending-01.jpg"; 
    });
  });
}


let forma = document.getElementById("contact-form");

if (forma) {

    forma.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let surname = document.getElementById("surname").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        // regex
        let nameRegex = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // kreiramo element za poruku
        let poruka = document.createElement("p");
        poruka.style.marginTop = "15px";

        // brišemo stare poruke ako postoje
        let staraPoruka = forma.querySelector("p");
        if (staraPoruka) {
            staraPoruka.remove();
        }

        if (!nameRegex.test(name)) {
            poruka.textContent = "First name must start with a capital letter and contain at least 3 characters.";
            poruka.style.color = "red";
            forma.appendChild(poruka);
            return;
        }

        if (!nameRegex.test(surname)) {
            poruka.textContent = "Last name must start with a capital letter and contain at least 3 characters.";
            poruka.style.color = "red";
            forma.appendChild(poruka);
            return;
        }

        if (!emailRegex.test(email)) {
            poruka.textContent = "Email address is not valid.";
            poruka.style.color = "red";
            forma.appendChild(poruka);
            return;
        }

        if (subject.length < 3) {
           poruka.textContent = "Subject must contain at least 3 characters.";
           poruka.style.color = "red";
           forma.appendChild(poruka);
           return;
        }

        if (message.length < 10) {
            poruka.textContent = "Message must contain at least 10 characters.";
            poruka.style.color = "red";
            forma.appendChild(poruka);
            return;
        }

        poruka.textContent = "Your message has been successfully sent!";
        poruka.style.color = "green";
        forma.appendChild(poruka);

    });

}

// SHOP PAGE (shop.html) - dinamičko ispisivanje igara


const shopContainer = document.getElementById("shopGames");

if (shopContainer) {
  const shopMsg = document.getElementById("shopMsg");

 
  const games = GAMES ;
  const paginationEl = document.getElementById("shopPagination");
  const pageSize = 4;
  let currentPage = 1;
  let currentFilter = "*"; 


  const urlParams = new URLSearchParams(window.location.search);
  const q = (urlParams.get("q") || "").toLowerCase();          
  const filterParam = urlParams.get("filter");                
  const saleParam = urlParams.get("sale");                     

 
  if (filterParam) {
    currentFilter = "." + filterParam;
  }

  
let shopGrid = null;

function refreshIsotope() {
  if (!(window.jQuery && jQuery().isotope)) return;

  const $box = jQuery(".trending-box");

  
  if (!shopGrid) {
    shopGrid = $box.isotope({
      itemSelector: ".trending-items"
    });

    
    jQuery(".trending-filter a").off("click");
    jQuery(".trending-filter a").on("click", function (e) {
      e.preventDefault();

      jQuery(".trending-filter a").removeClass("is_active");
      jQuery(this).addClass("is_active");

      const filterValue = jQuery(this).attr("data-filter");
      currentFilter = filterValue;
      currentPage = 1;
      renderShop();

      
      setTimeout(() => {
        shopGrid.isotope("layout");
        $box.css("height", "auto"); 
      }, 250);
    });
  }


  shopGrid.isotope("reloadItems");
  shopGrid.isotope("layout");

  
  setTimeout(() => {
    $box.css("height", "auto");
  }, 250);
}

  // Render (dinamičko ispisivanje)
  function renderGames(list) {
    shopContainer.innerHTML = "";

    list.forEach((g) => {
      const col = document.createElement("div");

      
      col.className = `col-lg-3 col-md-6 align-self-center mb-30 trending-items ${g.isoClass}`;

      col.innerHTML = `
        <div class="item">
          <div class="thumb">
            <a href="product-details.html?id=${g.id}">
                <img src="${g.img}" alt="${g.name}">
            </a>
            <span class="price"><em>$${g.oldPrice}</em>$${g.price}</span>
          </div>
          <div class="down-content">
            <span class="category">${g.category}</span>
           <h4>${g.name}</h4>
            <a href="#" class="add-to-cart" data-id="${g.id}">
              <i class="fa fa-shopping-bag"></i>
            </a>
          </div>
        </div>
      `;

      shopContainer.appendChild(col);
    });

    
    if (shopMsg) {
      shopMsg.textContent = `Učitano igara: ${list.length}`;
      shopMsg.style.color = "green";
    }

    
    const images = shopContainer.querySelectorAll("img");
    let loaded = 0;

    if (images.length === 0) {
      refreshIsotope();
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loaded++;
        if (loaded === images.length) refreshIsotope();
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === images.length) refreshIsotope();
        });

        img.addEventListener("error", () => {
          loaded++;
          if (loaded === images.length) refreshIsotope();
        });
      }
    });
    attachImageFallback(shopContainer);
    attachImageFallback(document);
  }

  function getFilteredGames() {
  let list = [...games];

 
  if (currentFilter !== "*") {
    const cls = currentFilter.replace(".", "");
    list = list.filter(g => g.isoClass === cls);
  }

 
  if (q) {
    list = list.filter(g =>
      g.name.toLowerCase().includes(q) ||
      g.category.toLowerCase().includes(q)
    );
  }

 
  if (saleParam === "1") {
    list = list.filter(g => Number(g.oldPrice) > Number(g.price));
  }

  return list;
}



function getTotalPages(listLength) {
  return Math.max(1, Math.ceil(listLength / pageSize));
}

function renderPagination(totalPages) {
  if (!paginationEl) return;

  paginationEl.innerHTML = "";


  const prev = document.createElement("li");
  prev.innerHTML = `<a href="#!">&lt;</a>`;
  prev.classList.toggle("disabled", currentPage === 1);
  prev.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderShop();
    }
  });
  paginationEl.appendChild(prev);

  
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#!";
    a.textContent = i;

    if (i === currentPage) a.classList.add("is_active");

    a.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderShop();
    });

    li.appendChild(a);
    paginationEl.appendChild(li);
  }


  const next = document.createElement("li");
  next.innerHTML = `<a href="#!">&gt;</a>`;
  next.classList.toggle("disabled", currentPage === totalPages);
  next.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderShop();
    }
  });
  paginationEl.appendChild(next);
}
function preloadImages(list) {
  return Promise.all(
    list.map(g => new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = g.img;
    }))
  );
}

async function renderShop() {
  const filtered = getFilteredGames();
  const totalPages = getTotalPages(filtered.length);

  if (currentPage > totalPages) currentPage = 1;

  const start = (currentPage - 1) * pageSize;
  const pageItems = filtered.slice(start, start + pageSize);

  
  shopContainer.innerHTML = `<p style="padding:15px;">Loading games...</p>`;

  
  await preloadImages(pageItems);

  
  renderGames(pageItems);
  renderPagination(totalPages);
  attachImageFallback(shopContainer);

  
  const shopSection = document.querySelector(".section.trending");
  if (shopSection) {
    shopSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (shopMsg) {
    shopMsg.textContent = `Showing ${pageItems.length} of ${filtered.length} games (Page ${currentPage} of ${totalPages})`;
    shopMsg.style.color = "green";
  }

  
  if (shopGrid) {
    shopGrid.isotope({ filter: "*" });
  }
}


// FILTER BUTTONS (Shop UI)

const filterLinks = document.querySelectorAll(".trending-filter a");

filterLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();


    filterLinks.forEach(l => l.classList.remove("is_active"));
    link.classList.add("is_active");

    
    currentFilter = link.getAttribute("data-filter");
    currentPage = 1;

    renderShop();
  });
});


if (filterParam) {
  filterLinks.forEach(l => l.classList.remove("is_active"));

  const active = document.querySelector(
    `.trending-filter a[data-filter=".${filterParam}"]`
  );

  if (active) active.classList.add("is_active");
}

  
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".add-to-cart");
    if (!btn) return;

    e.preventDefault();

    const id = Number(btn.dataset.id);
    const game = games.find((x) => x.id === id);

    if (shopMsg && game) {
      shopMsg.textContent = `Dodato u korpu: ${game.name} ($${game.price})`;
      shopMsg.style.color = "blue";
    }
  });


const btnRow = document.createElement("div");
btnRow.className = "row";
btnRow.style.marginTop = "30px";

const btnCol = document.createElement("div");
btnCol.className = "col-lg-12";
btnCol.style.textAlign = "center";

const discountBtn = document.createElement("a");
discountBtn.href = "#!";
discountBtn.textContent = "Exclusive Deals";
discountBtn.className = "main-button"; 

btnCol.appendChild(discountBtn);
btnRow.appendChild(btnCol);


shopMsg.parentElement.insertBefore(btnRow, shopMsg.nextSibling);

discountBtn.addEventListener("click", (e) => {
  e.preventDefault();


  currentFilter = ".adv";
  currentPage = 1;


  const links = document.querySelectorAll(".trending-filter a");
  links.forEach(a => a.classList.remove("is_active"));

  const advLink = document.querySelector('.trending-filter a[data-filter=".adv"]');
  if (advLink) advLink.classList.add("is_active");


  renderShop();


  if (shopMsg) {
    shopMsg.textContent = "Special offer: 20% off Adventure Games today!";
    shopMsg.style.color = "red";
  }
});


  renderShop();

  
}
console.log("END OF main.js reached");



// PRODUCT DETAILS (?id=)

(() => {

  const pdTitle = document.getElementById("pdTitle");
  if (!pdTitle) return;   

  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const game = GAMES.find(g => g.id === id) || GAMES[0];

  const pdHeadingTitle = document.getElementById("pdHeadingTitle");
  const pdBreadcrumb = document.getElementById("pdBreadcrumb");
  const pdImg = document.getElementById("pdImg");
  const pdOldPrice = document.getElementById("pdOldPrice");
  const pdPrice = document.getElementById("pdPrice");
  const pdDesc = document.getElementById("pdDesc");
  const pdGameId = document.getElementById("pdGameId");
  const pdGenre = document.getElementById("pdGenre");

  if (pdHeadingTitle) pdHeadingTitle.textContent = game.name;
  if (pdBreadcrumb) pdBreadcrumb.textContent = game.name;

  pdTitle.textContent = game.name;

  if (pdImg) { pdImg.src = game.img; pdImg.alt = game.name; }
  if (pdOldPrice) pdOldPrice.textContent = `$${game.oldPrice}`;
  if (pdPrice) pdPrice.textContent = `$${game.price}`;
  if (pdDesc) pdDesc.textContent = game.desc || "Opis nije dostupan.";
  if (pdGameId) pdGameId.textContent = game.code || `GAME-${game.id}`;
  if (pdGenre) pdGenre.textContent = game.category;

})();