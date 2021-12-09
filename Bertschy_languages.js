// Language changer
window.onload = function() {
  let navBar = document.getElementsByClassName("nav__wrap-links")[2];
  let links = document.createElement("div");
  links.setAttribute("class", "nav__wrap-link");
  links.classList.add("language");
  let navLinkLV = document.createElement("div");
  navLinkLV.setAttribute("class", "nav__item");
  let linkLV = document.createElement("a");
  linkLV.setAttribute("href", "/projekti/3d-berci-ekas");
  linkLV.setAttribute("class", "navigation-item");
  linkLV.innerHTML = "LV";
  navLinkLV.append(linkLV);
  links.append(navLinkLV);
  let navLinkEN = document.createElement("div");
  navLinkEN.setAttribute("class", "nav__item");
  let linkEN = document.createElement("a");
  linkEN.setAttribute("href", "/projekti/3d-berci-ekas?lang=EN");
  linkEN.setAttribute("class", "navigation-item");
  linkEN.innerHTML = "EN";
  linkEN.style.paddingRight = "0px";
  navLinkEN.append(linkEN);
  links.append(navLinkEN);
  navBar.append(links);
  // Get language
  let href = window.location.href;
  let url = new URL(href);
  let lang = url.searchParams.get('lang');
  if (lang == 'EN' ) {
    document.getElementById('hero-title').innerHTML = '3D Bertschy augmented reality buildings in Liepaja';
    document.getElementById('share').innerHTML = 'Share:';
    document.getElementById('subheading').innerHTML = `Get to know the history of Liepaja with "3D Berči ēkas Liepājā"`;
    let about = document.getElementById('about-project');
    about.firstElementChild.remove();
    about.insertAdjacentHTML("afterbegin",`<div class="rich-txt-blog w-richtext"><p>We have created the application "3D Berči ēkas Liepājā", with the help of which the residents of Liepāja and guests of the city will have the opportunity to view 3 historical Liepāja buildings designed by architect Paul Max Bertschy using augmented reality technology:</p><ul role="list"><li>Multifunctional hotel "Kūrmaja";</li><li>Exchange House;</li><li>Cinema.</li></ul><p>The project "Liepaja historic architectural reconstruction augmentētajā reality" has been created with Liepaja Culture Department support.</p><p>Project goals:</p><ul role="list"><li>To promote the development of a creative, intellectual and innovative environment in Liepāja municipality for the professional growth of representatives of creative industries.</li><li>To promote local patriotism of Liepaja residents.</li><li>Develop a body of knowledge that promotes digital literacy, enabling technology to be used as an effective tool for professional activities and content consumption.</li><li>To promote the professional development of the representatives of the architecture industry and the possibilities of using augmented reality in professional activities.</li></ul></div>`);
    document.getElementById('app-heading').innerHTML = 'The app will be available here:';
    document.getElementById('btn-ios').innerHTML = 'Download iOS app';
    document.getElementById('btn-android').innerHTML = 'Download Android app';
    document.getElementById('building-heading').innerHTML = 'About buildings';
    let firstBuilding = document.getElementById('building-first');
    firstBuilding.firstElementChild.remove();
    firstBuilding.insertAdjacentHTML("afterbegin",`<div class="rich-txt-blog w-richtext"><p><strong>Multifunctional hotel "Kūrmaja"</strong></p><p>“Kūrmāja” was built from 1871 to 1875. The resort was very modern at the time - a hotel with a concert hall, a dance hall, a theater hall, a restaurant and an outdoor stage, where you could enjoy the summer with symphonic music. Despite the wide range of services, in the early 1930s cultural life moved closer to the city center and “Kūrmāja” lost its great importance in the cultural life of Liepaja, visitors began to prefer theater and opera. The city board had a plan to build a new, more modern building closer to the sea. During this time, only sports competitions took place in “Kūrmāja” (for example, in boxing), but in the winter months “Kūrmāja” was left empty until the second Easter of 1937, when “Kūrmāja” burned down. The causes of the fire were enigmatic, the fire started in the winter garden. It is believed that at that time, some wanderers lived there at night.<br></p></div>`);
    let secondBuilding = document.getElementById('building-second');
    secondBuilding.firstElementChild.remove();
    secondBuilding.insertAdjacentHTML("afterbegin",`<div class="rich-txt-blog w-richtext"><p><strong>Exchange House</strong></p><p>The Liepaja Exchange building was built from 1885 to 1887, it was one of the most luxurious buildings among the Italian Neo-Renaissance buildings of Paul Max Bertschy. When creating the Liepaja Exchange building project, Bertschy was inspired by the Dresden Exchange building, but many believe that the Liepaja Exchange building, which was smaller in size and with a lower degree of luxury, was more balanced and expressive. After its construction, the Liepaja Exchange Association, which was founded in 1881, housed the Exchange building. The Exchange building is considered to be one of the most respectable buildings in terms of both public and economic significance. Already in 1890, clients were served by 40 agencies, 20 commission offices, 4 brokerage and notary offices, 9 export expeditions. On June 27, 1941, this building was demolished.<br></p></div>`);
    let thirdBuilding = document.getElementById('building-third');
    thirdBuilding.firstElementChild.remove();
    thirdBuilding.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Cinema</strong></p><p>The residents of Liepaja have long enjoyed enjoying the art of cinema, and that is why Liepaja has historically had several cinemas, many of which were located on Graudu Street. Of course, in the app "3D Berči buildings in Liepāja" you can see the cinema designed by Paul Max Bertschy, which was located in the house at 41 Graudu Street at that time. The house was built from 1910 to 1911. This cinema was given the name "Odeon", but some sources show that during the independence of Latvia it was renamed "Tip-top". During the war, the cinema was destroyed.</p></div>`);
    document.getElementById('instruction-heading').innerHTML =  'Instructions for use';
    let instructionMain = document.getElementById('instruction-main');
    instructionMain.firstElementChild.remove();
    instructionMain.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p>To view 3D buildings, you must allow app to access location and camera. When you are close enough, you will be able to place the buildings in augmented reality. On different devices, buildings can be located in different places, depending on the performance of the smartphone, weather, environment, GPS signal. During the dark hours of the day or near buildings that obscure the signal, the app may malfunction.</p><p>The buildings can be viewed in 2 ways - by placing small building models on any plane or in 3 locations Liepaja (historical locations of buildings).</p><ul role="list"><li>Approaching their location in the city.</li><li>In any indoor. Open the app, select that you want to see 3D buildings premises. You will be able to place the buildings in the place you want and see them.</li></ul></div>`);
    document.getElementById('developers-heading').innerHTML = 'Project developed by';
    let developerJanis = document.getElementById('info-janis');
    developerJanis.firstElementChild.remove();
    developerJanis.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Jānis Jaunsleinis</strong> – 3D architecture developer:</p><ul role="list"><li>Participated in the creation of a 3D model for the construction section for the reconstruction of Riga Technical University;&nbsp;</li><li>Created visualizations of buildings energy efficiency improvement projects;</li><li>He has researched many sources of pre-war photography and history of the city of Liepaja, therefore with the help of augmented reality and 3D modelling he can revive the lost architecture give people the opportunity to see the features of historical buildings.&nbsp;&nbsp;</li></ul></div>`);
    document.getElementById('how-city-heading').innerHTML = 'How to see buildings in an urban environment?';
    let howCity = document.getElementById('how-city-paragraph');
    howCity.firstElementChild.remove();
    howCity.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p>To view any building in the urban environment, it is necessary to be located near the historical location of the building, closer than 30m. When you are closer than 30m, the button "Ievietot ēku" will appear on the button of the available building. All buildings use red controls, which must be used to place the buildings in their old location."</p></div>`);
    document.getElementById('how-building-1-heading').innerHTML = 'How to view Multifunctional hotel "Kūrmaja"?';
    document.getElementById('step-1-1').innerHTML = 'Step 1';
    document.getElementById('step-1-2').innerHTML = 'Step 2';
    document.getElementById('step-1-3').innerHTML = 'Step 3';
    document.getElementById('txt-1-1').innerHTML = 'Go to the circle at the end of Kūrmājas Avenue in Liepāja';
    document.getElementById('txt-1-2').innerHTML = 'Stand here with a view towards the monument';
    document.getElementById('txt-1-3').innerHTML = 'Position the phone so that the red controls correspond to the flower bed and press the "Ievietot" button';
    document.getElementById('how-building-2-heading').innerHTML = 'How to view Exchange House?';
    document.getElementById('step-2-1').innerHTML = 'Step 1';
    document.getElementById('step-2-2').innerHTML = 'Step 2';
    document.getElementById('step-2-3').innerHTML = 'Step 3';
    document.getElementById('txt-2-1').innerHTML = 'Go to Kārļa Zāles Squere 7, Liepāja (near the gas station "Neste")';
    document.getElementById('txt-2-2').innerHTML = 'Stand here with a view towards shopping center "Ostmala"';
    document.getElementById('txt-2-3').innerHTML = 'Position the phone so that the red controls correspond to the lawn in front of the shopping center "Ostmala" and press the "Ievietot" button';
    document.getElementById('how-building-3-heading').innerHTML = 'How to view Cinema?';
    document.getElementById('step-3-1').innerHTML = 'Step 1';
    document.getElementById('step-3-2').innerHTML = 'Step 2';
    document.getElementById('step-3-3').innerHTML = 'Step 3';
    document.getElementById('txt-3-1').innerHTML = 'Go to the address Graudu Street 46, Liepaja';
    document.getElementById('txt-3-2').innerHTML = 'Stand at point 1 with a view across the street to the building at 43a Graudu Street';
    document.getElementById('txt-3-3').innerHTML = 'Position the phone so that the red controls correspond to the right corner of the building at 43a Graudu Street and press the "Ievietot" button';
    document.getElementById('how-plane-heading').innerHTML = 'How to view buildings on a plane?'
    let howPlane = document.getElementById('how-plane-paragraph');
    howPlane.firstElementChild.remove();
    howPlane.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p>You can also view all buildings in a small size by placing them on a plane/floor/ground. It is best to place the buildings in spacious rooms or outdoors.</p><ol start="" role="list"><li>Open the app "3D Berči ēkas Liepājā";</li><li>Find a free plane;</li><li>Wait at least 6 seconds for the phone to detect the plane. When the phone recognizes the plane, place the buildings on it (the larger the blue circle of the indicator, the larger the building will be on the plane). It is possible to get around the building and view it from all sides.</li></ol></div>`);
    let developerKaspars = document.getElementById('info-kaspars');
    developerKaspars.firstElementChild.remove();
    developerKaspars.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Kaspars Lēvalds</strong> – multimedia artist.</p><p>Kaspars:</p><ul role="list"><li>Graduate of the University of Liepaja, in the program New Media Art;</li><li>Within and outside the studies, he has created and participated in the creation of various augmented reality (VR, AR) works;</li><li>Participated in Augmented and Virtual Reality Hackathon 2018 and RIGA IFF GOES VR (2019), where together with the teams they gained the first and second place in creating virtual reality experiences;</li><li>Creates a variety of digital visual works – design and architecture and other types, using Unity and Unreal Engine game drivers.</li></ul></div>`);
    let developerArturs = document.getElementById('info-arturs');
    developerArturs.firstElementChild.remove();
    developerArturs.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog w-richtext"><p><strong>Arturs Vītiņš</strong> – programmer, augmented reality developer.</p><p>Arturs ir:</p><ul role="list"><li>For several years working as a civil engineer building design Ltd. AILE group;</li><li>Know several programming languages;</li><li>The project developed an application in the Unity environment for iOS and Android devices, as well as created augmented reality solutions.</li></ul></div>`);
    let eula = document.getElementById('eula');
    eula.firstElementChild.remove();
    eula.insertAdjacentHTML("afterbegin", `<div class="rich-txt-blog txt_align_centred mt_80 w-richtext"><p><a href="/projekti/3d-berci-ekas-liepaja-gala-lietotaja-licences-ligums">EULA</a></p><p><a href="/projekti/liepaja-ar-gala-lietotaja-licences-ligums">&zwj;</a><a href="https://www.digip.lv/projekti/liepaja-ar-gala-lietotaja-licences-ligums"><strong>&zwj;</strong></a>Use email address <a href="mailto:team@digip.lv">team@digip.lv</a>, to contact us in case of uncertainty, in matters related to marketing and when you need support.</p><p>&zwj;</p></div>`);
    document.getElementById('txt-liepaja').innerHTML = 'The app is supported by the Liepaja Culture Department';
    document.getElementById('txt-museum').innerHTML = 'The application was created in cooperation with the Liepaja Museum';
  }
}
