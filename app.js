//  1.-  MENU VARIABLES
const divMenu = document.querySelector("#menu")
const menuHamburger = document.querySelector("#menu-button");
const buttonDarkMode = document.querySelector("#darkButton");
const menuButtonsHamburgerSpan = document.querySelectorAll("#menu-button>span");
const links = document.querySelectorAll("#menu a");

//  2.-  OPEN MENU

menuHamburger.addEventListener('click', () => {
  divMenu.classList.toggle('hidden');

  menuButtonsHamburgerSpan.forEach(span => {
    span.classList.toggle('animatedX');
  })
})

//  3.-  CLOSE MENU
links.forEach((link) => {
  link.addEventListener(('click'), () => {
    divMenu.classList.toggle('hidden');

    menuButtonsHamburgerSpan.forEach(span => {
      span.classList.remove('animatedX');
    })
  })
})
buttonDarkMode.addEventListener(('click'), () => {
  divMenu.classList.toggle('hidden');

  menuButtonsHamburgerSpan.forEach(span => {
    span.classList.remove('animatedX');
  })
})

//  4.-  CLOSE MENU WHEN ON RESIZE
window.onresize = function () {
  let w = window.outerWidth;
  if (w > 768) {
    divMenu.classList.add('hidden');

    menuButtonsHamburgerSpan.forEach(span => {
      span.classList.remove('animatedX');
    })
  }
}

//  5.-  Dark Mode with Flowbite
buttonDarkMode.addEventListener(('click'), () => {
  // if set via local storage previously
  if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  }

})

/*  6.- VARIABLES OF JOBS SECTION*/

const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSection.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if (id) {
    articles.forEach((article) => {
      article.classList.add('hidden');
    });
    const element = document.getElementById(id);
    element.classList.remove('hidden');
  }
});

const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link1');

jobLinks.forEach((link) => {
  link.addEventListener('click', () => {
    firstLink.classList.remove(
      'border-sky-500',
      'bg-white',
      'dark:bg-slate-700'
    );
  });
});