const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});






const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}




const openModalButtons2 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons2 = document.querySelectorAll('[data-close-button]')
/*const overlay = document.getElementById('overlay')*/

openModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})

overlay.addEventListener('click', () => {
  const modals2 = document.querySelectorAll('.modal2.active')
  modals2.forEach(modal2 => {
    closeModal(modal2)
  })
})

closeModalButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = button.closest('.modal2')
    closeModal(modal2)
  })
})





const openModalButtons3 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons3 = document.querySelectorAll('[data-close-button]')
/*const overlay = document.getElementById('overlay')*/

openModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = document.querySelector(button.dataset.modalTarget)
    openModal(modal3)
  })
})

overlay.addEventListener('click', () => {
  const modals3 = document.querySelectorAll('.modal3.active')
  modals3.forEach(modal3 => {
    closeModal(modal3)
  })
})

closeModalButtons3.forEach(button => {
  button.addEventListener('click', () => {
    const modal3 = button.closest('.modal3')
    closeModal(modal3)
  })
})




const openModalButtons4 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons4 = document.querySelectorAll('[data-close-button]')

openModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = document.querySelector(button.dataset.modalTarget)
    openModal(modal4)
  })
})

overlay.addEventListener('click', () => {
  const modals4 = document.querySelectorAll('.modal4.active')
  modals4.forEach(modal4 => {
    closeModal(modal4)
  })
})

closeModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal4 = button.closest('.modal4')
    closeModal(modal4)
  })
})



const openModalButtons5 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons5 = document.querySelectorAll('[data-close-button]')

openModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal5 = document.querySelector(button.dataset.modalTarget)
    openModal(modal5)
  })
})

overlay.addEventListener('click', () => {
  const modals5 = document.querySelectorAll('.modal5.active')
  modals5.forEach(modal5 => {
    closeModal(modal5)
  })
})

closeModalButtons5.forEach(button => {
  button.addEventListener('click', () => {
    const modal5 = button.closest('.modal5')
    closeModal(modal5)
  })
})





const openModalButtons6 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons6 = document.querySelectorAll('[data-close-button]')

openModalButtons6.forEach(button => {
  button.addEventListener('click', () => {
    const modal6 = document.querySelector(button.dataset.modalTarget)
    openModal(modal6)
  })
})

overlay.addEventListener('click', () => {
  const modals6 = document.querySelectorAll('.modal6.active')
  modals6.forEach(modal6 => {
    closeModal(modal6)
  })
})

closeModalButtons6.forEach(button => {
  button.addEventListener('click', () => {
    const modal6 = button.closest('.modal6')
    closeModal(modal6)
  })
})





const openModalButtons7 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons7 = document.querySelectorAll('[data-close-button]')

openModalButtons4.forEach(button => {
  button.addEventListener('click', () => {
    const modal7 = document.querySelector(button.dataset.modalTarget)
    openModal(modal7)
  })
})

overlay.addEventListener('click', () => {
  const modals7 = document.querySelectorAll('.modal7.active')
  modals7.forEach(modal7 => {
    closeModal(modal7)
  })
})

closeModalButtons7.forEach(button => {
  button.addEventListener('click', () => {
    const modal7 = button.closest('.modal7')
    closeModal(modal7)
  })
})




const openModalButtons8 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons8 = document.querySelectorAll('[data-close-button]')

openModalButtons8.forEach(button => {
  button.addEventListener('click', () => {
    const modal8 = document.querySelector(button.dataset.modalTarget)
    openModal(modal8)
  })
})

overlay.addEventListener('click', () => {
  const modals8 = document.querySelectorAll('.modal8.active')
  modals8.forEach(modal8 => {
    closeModal(modal8)
  })
})

closeModalButtons8.forEach(button => {
  button.addEventListener('click', () => {
    const modal8 = button.closest('.modal8')
    closeModal(modal8)
  })
})





const openModalButtons9 = document.querySelectorAll('[data-modal-target]')
const closeModalButtons9 = document.querySelectorAll('[data-close-button]')

openModalButtons9.forEach(button => {
  button.addEventListener('click', () => {
    const modal9 = document.querySelector(button.dataset.modalTarget)
    openModal(modal9)
  })
})

overlay.addEventListener('click', () => {
  const modals9 = document.querySelectorAll('.modal9.active')
  modals9.forEach(modal9 => {
    closeModal(modal9)
  })
})

closeModalButtons9.forEach(button => {
  button.addEventListener('click', () => {
    const modal9 = button.closest('.modal9')
    closeModal(modal9)
  })
})