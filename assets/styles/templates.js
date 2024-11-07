//
// TEMPLATES
//
  

  // Nav

    // Menu
    // const menu = document.createElement('div');
    // menu.setAttribute("id", "menu-btn");
    // menu.textContent = "menu"

    // const menuContainer = document.createElement('div');
    // menuContainer.setAttribute("id", "menu-container");


    function pageNav() {
      const nav = document.getElementById("nav");

      const menu = document.createElement('div');
      menu.className = "menu";
      const left = document.createElement('div');
      left.className = "left";
      const homeBtn = document.createElement('a');
      homeBtn.href = "/";
      homeBtn.textContent = "Home";
      left.appendChild(homeBtn);
      const right = document.createElement('div');
      right.className = "right";
      const learnBtn = document.createElement('a');
      learnBtn.href = "learn";
      learnBtn.textContent = "Learn";
      const contactBtn = document.createElement('a');
      contactBtn.href = "contact";
      contactBtn.textContent = "Contact";
      right.appendChild(learnBtn);
      right.appendChild(contactBtn);
      menu.appendChild(left);
      menu.appendChild(right);

      const logo = document.createElement('div');
      logo.classList.add('logo', 'center');
      const logoLink = document.createElement('a');
      logoLink.href = "/"
      const logoImg = document.createElement('img');
      logoImg.className = "center";
      logoImg.src = 'assets/images/skynine_logo_small.png';
      logoLink.appendChild(logoImg);
      logo.appendChild(logoLink);

      nav.appendChild(menu);
      nav.appendChild(logo);

      const navClassName = nav.className;
      [homeBtn, learnBtn, contactBtn].forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if (btnText === navClassName) {
            btn.style.color = 'red';
            btn.style.textDecoration = 'underline';
        }
      });
    };

    pageNav();


  // Toggle menu display
    // const btn = document.getElementById("menu-btn");
    // const line = document.getElementById("menu-line");

    // btn.addEventListener("click", function() {
    //   menuContainer.classList.toggle("show");
    //   if (menuContainer.classList.contains("show")) {
    //     line.style.display = "block";
    //   } else {
    //     line.style.display = "none";
    //   }
    // });



  // Footer
    function footerTemplate() {

      const socials = document.createElement('div');
      socials.className = "socials";
      const ig = document.createElement('a');
      ig.href = "instagram.com/skyninesocialclub";
      ig.target = "_blank";
      const igIcon = document.createElement('i');
      igIcon.classList.add('fa', 'fa-brands', 'fa-instagram');
      ig.appendChild(igIcon);
      const email = document.createElement('a');
      email.href = "mailto:hello@skyninesocial.club";
      email.target = "_blank";
      const emailIcon = document.createElement('i');
      emailIcon.classList.add('fa', 'fa-regular', 'fa-envelope');
      email.appendChild(emailIcon);
      socials.appendChild(ig);
      socials.appendChild(email);

      const text = document.createElement('div');
      text.className = "footer-text";
      const copy = document.createElement('p');
      copy.textContent = '© 2024 SkyNine Social Club';
      const designer = document.createElement('p');
      designer.textContent = 'Website designed and developed by ';
      const designerLink = document.createElement('a');
      designerLink.href = 'https://antoinettechow.com/';
      designerLink.target = '_blank';
      designerLink.textContent = 'Antoinette Chow';
      designer.appendChild(designerLink);
      text.appendChild(copy);
      text.appendChild(designer);

      const footerContainer = document.getElementById("footer");

      footerContainer.appendChild(socials);
      footerContainer.appendChild(text);
    }

    footerTemplate();