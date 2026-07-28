//
// TEMPLATES
//
  

  // Nav

    function pageNav() {
      const nav = document.getElementById("nav");

      const menu = document.createElement('div');
      menu.className = "menu";
      const rulesBtn = document.createElement('a');
      rulesBtn.href = "rules";
      rulesBtn.textContent = "Rules";
      const contactBtn = document.createElement('a');
      contactBtn.href = "contact";
      contactBtn.textContent = "Contact";
      // menu.appendChild(rulesBtn);
      // menu.appendChild(contactBtn);

      const logo = document.createElement('div');
      logo.classList.add('logo', 'center');
      const logoLink = document.createElement('a');
      logoLink.href = "/"
      const picture = document.createElement('picture');
      const source = document.createElement('source');
      source.media = "(max-width: 768px)";
      source.srcset = "assets/images/logo-mobile.png";
      const logoImg = document.createElement('img');
      logoImg.className = "center";
      logoImg.src = 'assets/images/logo-nav.png';
      picture.appendChild(source);
      picture.appendChild(logoImg);
      logoLink.appendChild(picture);
      logo.appendChild(logoLink);

      nav.appendChild(menu);
      nav.appendChild(logo);

      const navClassName = nav.className;
      [rulesBtn, contactBtn].forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if (btnText === navClassName) {
            btn.style.color = 'red';
            btn.style.textDecoration = 'underline';
        }
      });
    };

    pageNav();



  // Footer
    function footerTemplate() {

      const footerLogo = document.createElement('img');
      footerLogo.src = 'assets/images/skynine_logo_hori.png';

      const socials = document.createElement('div');
      socials.className = "socials";
      const ig = document.createElement('a');
      ig.href = "https://www.instagram.com/skyninesocialclub/";
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
      copy.textContent = '© 2026 SkyNine Social Club';
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

      footerContainer.appendChild(footerLogo);
      footerContainer.appendChild(socials);
      footerContainer.appendChild(text);
    }

    footerTemplate();