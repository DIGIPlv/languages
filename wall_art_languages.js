window.addEventListener("load", () => {
  // Add language buttons
  let navBar = document.getElementsByClassName("nav__wrap-links")[2];
  let links = document.createElement("div");
  links.setAttribute("class", "nav__wrap-link");
  links.classList.add("language");
  let navLinkLV = document.createElement("div");
  navLinkLV.setAttribute("class", "nav__item");
  let linkLV = document.createElement("a");
  linkLV.setAttribute("href", "/projekti/wall-art");
  linkLV.setAttribute("class", "navigation-item");
  linkLV.innerHTML = "LV";
  navLinkLV.append(linkLV);
  links.append(navLinkLV);
  let navLinkEN = document.createElement("div");
  navLinkEN.setAttribute("class", "nav__item");
  let linkEN = document.createElement("a");
  linkEN.setAttribute("href", "/projekti/wall-art?lang=EN");
  linkEN.setAttribute("class", "navigation-item");
  linkEN.innerHTML = "EN";
  linkEN.style.paddingRight = "0px";
  navLinkEN.append(linkEN);
  links.append(navLinkEN);
  navBar.append(links);
  // Get language
  let href = window.location.href;
  let url = new URL(href);
  let lang = url.searchParams.get("lang");
  if (lang == "EN" ){
    let heroTitle = document.getElementById("hero-title");
    let share = document.getElementById("share");
    share.innerHTML = "Share: ";
    let subheading = document.getElementById("subheading");
    subheading.innerHTML = `Bring wall paintings to life with "Wall Art Liepaja"`
    let projectDescription = document.getElementById("about-project");
    projectDescription.firstElementChild.remove();
    projectDescription.insertAdjacentHTML("afterbegin",`<div class="rich-txt-blog w-richtext"><p>We have created the "Wall Art Liepaja" app, with the help of which residents of Liepāja and guests of the city can bring 3 large-format wall paintings of Liepaja to life on their smartphones using augmented reality technology:</p><ul role="list"><li>"Pegasus";</li><li>"Crow";</li><li>"Quantum Seagull".</li></ul><p>The project "Liepāja Wall Paintings in Augmented Reality" has been created with Liepaja Culture Department support.</p><p>&zwj;</p><p>Project goals:</p><ul role="list"><li>To promote the development of a creative, intellectual and innovative environment in Liepāja municipality for the professional growth of representatives of creative industries.</li><li>To promote local patriotism of Liepaja residents.</li><li>Develop a body of knowledge that promotes digital literacy, enabling technology to be used as an effective tool for professional activities and content consumption.</li></ul></div>`);
    let appDownloadTitel = document.getElementById("app-heading");
    appDownloadTitel.innerHTML = "App is available here:";
    let iosBtn = document.getElementById("btn-ios");
    iosBtn.innerHTML = "Download iOS app";
    let androidBtn = document.getElementById("btn-android");
    androidBtn.innerHTML = "Download Android app";
    let instructionTitle = document.getElementById("instruction-heading");
    instructionTitle.innerHTML = "Instructions for use";
    let instructionWrap = document.getElementById("instruction-main");
    instructionWrap.firstElementChild.remove();
    instructionWrap.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p>In order to view the animated wall paintings, the "Wall Art Liepaja" app must be allowed to access the camera. The app may malfunction during the dark hours of the day. Please be careful around traffic!</p><p>&zwj;</p><p>To view animated murals:</p><ol start="" role="list"><li>Go to the location;</li><li>Open the app;</li><li>Move back far enough to fit the entire mural on your phone screen;</li><li>View animated murals using the app.</li></ol><p>&zwj;</p></div>`);
    let muralsTitle = document.getElementById("murals-heading");
    muralsTitle.innerHTML = "About murals";
    let pegasus = document.getElementById("first-object");
    pegasus.firstElementChild.remove();
    pegasus.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Pegasus</strong></p><p>The facade of the building at 21 Kuršu Street is decorated with a large-format mural "Pegasus", the author of which is the Liepaja artist Uldis Rubezis. The mythical, divine, winged horse – Pegasus – is chosen as the main image in the composition. A symbol of wisdom and glory from the Middle Ages to the Renaissance. In Greek mythology, Pegasus is a winged horse, which with its hoof has kicked a spring above the ground, just as water inspires poets.&ZeroWidthSpace;&ZeroWidthSpace;</p><p>&zwj;</p><p>"As a very rich iconographic symbol, this image has been able to preserve its meaning even today. In the background of the winged horse, there is an old engraving style composition with Neptune, a lion and other heraldic symbols – as a reference to Liepāja's respected history. However, the overall scene of the composition shows bands and squares with bright spectral others, which are specific to the aesthetics of the 21st century, so I tried to connect all these images in a modern context," admitted the artist Uldis Rubezis.&zwj;</p><p>&zwj;</p><p>The painting was created on the initiative of the municipality of Liepāja, continuing the tradition already started in previous years - to organize specific places of the city and the firewalls of buildings, painting them and creating a new added value.<br></p></div>`);
    let crow = document.getElementById("second-object");
    crow.firstElementChild.remove();
    crow.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Crow</strong></p><p>On the facade of Vecās ostmalas 55 is a large-format mural "Crow", authored by Liepaja artist Uldis Rubezis. </p><p>Thinking about a symbol that would fit philosophically and designably into the environment of the promenade, Rubezis decided to paint a black crow: "I decided that something big and noticeable would fit in this place , a symbolic painting, which in time could also become a meeting place - at the black crow. The multifaceted symbolic meaning of this bird appealed to me and encouraged me to choose it for the painting. The clever crow, gifted with enviable adaptability and cunning, was, according to Castañeda, the only animal in which would be worth reincarnating. I also think it's interesting that the black crow is geographically only found on this side."</p><p><br></p></div>`);
    let seagull = document.getElementById("third-object");
    seagull.firstElementChild.remove();
    seagull.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Quantum Seagull</strong></p><p>The facade of the building of Julianna yard, Kuginieku street 5 is decorated with a large-format mural "Quantum seagull", authored by Liepaja artist Uldis Rubezis.</p><p>&zwj;</p><p>Unlike many wall paintings in Liepaja, which were financed by the Liepāja municipality, "Quantum Seagull" was commissioned by the owners of Julianna yard. It was important for the author to create something that would make you think, and not just be a decorative element: "It seemed that we needed many things, more content, so that when spending a longer time in the yard, there would be something to look at, something to think about, something to talk about. Not just a colorful background, decorative wallpaper."</p><p>In "Quantum Seagull" you will find references to the seventies, quantum physics, conspiracy theories and David Bowie.</p></div>`);
    let linkParagraph = document.getElementById("link-paragraph");
    linkParagraph.firstElementChild.remove();
    linkParagraph.insertAdjacentHTML("afterbegin", `<p id="link-paragraph"><p id="link-paragraph">Go to the streets of Liepaja and discover other large-format works of art adorning the facades of Liepaja's buildings, both in the city center and in Karosta. Opens a list of all murals <a href="https://liepaja.travel/en/see-and-do/liepaja-street-art/" target="_blank" class="paragraph__link-inline">here.</a></p></p>`);
    let developerTitle = document.getElementById("developers-heading");
    developerTitle.innerHTML = "Project developed by";
    let agnese = document.getElementById("info-agnese");
    agnese.firstElementChild.remove();
    agnese.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Agnese Damberga</strong> – graphic artist, animator.</p><ul role="list"><li>Liepaja University student, computer design program;</li><li>Studied animation development in Ireland – Ballyfermot College of Further Education;</li><li>Specializes in Affinity Photo, Blender, Autodesk 3ds Max un Autodesk Maya.&nbsp;&nbsp;</li></ul></div>`);
    let kaspars = document.getElementById("info-kaspars");
    kaspars.firstElementChild.remove();
    kaspars.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Kaspars Lēvalds</strong> – multimedia artist.</p><p>Kaspars:</p><ul role="list"><li>Graduate of the University of Liepaja, in the program New Media Art;</li><li>Within and outside the studies, he has created and participated in the creation of various augmented reality (VR, AR) works;</li><li>Participated in Augmented and Virtual Reality Hackathon 2018 and RIGA IFF GOES VR (2019), where together with the teams they gained the first and second place in creating virtual reality experiences;</li><li>Creates a variety of digital visual works – design and architecture and other types, using Unity and Unreal Engine game drivers.</li></ul></div>`);
    let arturs = document.getElementById("info-arturs");
    arturs.firstElementChild.remove();
    arturs.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Arturs Vītiņš</strong> – programmer, augmented reality developer.</p><p>Arturs:</p><ul role="list"><li>For several years working as a civil engineer building design Ltd. AILE group;</li><li>Know several programming languages;</li><li>The project developed an application in the Unity environment for iOS and Android devices, as well as created augmented reality solutions.</li></ul></div>`);
    let liepaja = document.getElementById("txt-liepaja");
    liepaja.innerHTML = "The app is supported by the Liepaja Culture Department";
    let eula = document.getElementById("eula");
    eula.firstElementChild.remove();
    eula.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog txt_align_centred mt_80 w-richtext"><p><a href="/projekti/wall-art-liepaja-gala-lietotaja-licences-ligums">EULA</a></p><p><a href="/projekti/wall-art-liepaja-gala-lietotaja-licences-ligums">&zwj;</a><a href="https://www.digip.lv/projekti/wall-art-liepaja-gala-lietotaja-licences-ligums"><strong>&zwj;</strong></a>Use email address <a href="mailto:team@digip.lv">team@digip.lv</a>, to contact us in case of uncertainty, in matters related to marketing and when you need support.</p><p>&zwj;</p></div>`);
    let mapBtns = document.getElementsByClassName("btn__txt-arrow");
    for(let i = 0; i < mapBtns.length; i++){
      mapBtns[i].innerHTML = "Find in Google Maps";
    }
  }
});
