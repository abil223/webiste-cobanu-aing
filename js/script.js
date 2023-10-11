// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger meni di klik

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
// const searchBox = document.querySelector('#search-box');

// document.querySelector('#search-button').onclick = (e) => {
//     searchForm.classList.toggle('active');
//     searchBox.focus();
//     e.preventDefault();
// }
// klik diluar sidebar untuk menghilangkan navbar

const hb = document.querySelector('#hamburger-menu');
// const sb = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
    if(!hb.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    };
    // if(!sb.contains(e.target) && !searchForm.contains(e.target)){
    //     searchForm.classList.remove('active');
    // };
});

// Modal Box 1
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const itemDetailButtons1 = document.querySelectorAll('.item-detail-button1');

const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButtons2 = document.querySelectorAll('.item-detail-button2');

const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailButtons3 = document.querySelectorAll('.item-detail-button3');

const itemDetailModal4 = document.querySelector('#item-detail-modal4');
const itemDetailButtons4 = document.querySelectorAll('.item-detail-button4');


itemDetailButtons1.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal1.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal1 .close-icon').onclick = (e) => {
  itemDetailModal1.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal1) {
    itemDetailModal1.style.display = 'none';
  }else if (e.target === itemDetailModal2) {
    itemDetailModal2.style.display = 'none';
  }else if (e.target === itemDetailModal3) {
    itemDetailModal3.style.display = 'none';
  }else if (e.target === itemDetailModal4) {
    itemDetailModal4.style.display = 'none';
  }
};

// Modal Box 2


itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal2 .close-icon').onclick = (e) => {
  itemDetailModal2.style.display = 'none';
  e.preventDefault();
};


// Modal Box 3


itemDetailButtons3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal3 .close-icon').onclick = (e) => {
  itemDetailModal3.style.display = 'none';
  e.preventDefault();
};


// Modal Box 4


itemDetailButtons4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal4 .close-icon').onclick = (e) => {
  itemDetailModal4.style.display = 'none';
  e.preventDefault();
};
