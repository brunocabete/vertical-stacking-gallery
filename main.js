const eachSlide = img =>
  /*html*/`<div class="general-container" id="${img}">
<div class="general-container-inner">
  <div class="bg" style="background-image: url(./img/${img}.jpg);">
  </div>
  <div class="container-img">
    <img src="./img/${img}.jpg" alt="">
  </div>
  <div class="container-description">
  <div class="container-description-inner">
  <p><cite>Photo ${img}</cite> - John Doe </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias qui aliquid a amet voluptates repudiandae!</p>
  </div>
  </div>
</div>
</div>`

const eachSlideAlt = img =>  /*html*/`<div class="general-container split" id="${img}">
<div class="general-container-inner">
  <div class="bg" style="background-image: url(./img/${img}.jpg);">
  </div>
  <div class="container-text">
  <div class="container-text-inner">
  <p><cite>Photo ${img}</cite> - John Doe </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, illo illum soluta totam reiciendis hic amet dolorum et voluptates provident, iste ab rerum sequi unde. Corrupti est temporibus possimus dolorum, ad, ratione nihil ex nemo placeat tenetur id exercitationem ut voluptatem a ipsum dolore. Aliquam ducimus eveniet at molestias possimus.</p>
  </div>
  </div>
  <div class="container-img">
    <img class="to-the-side" src="./img/${img}.jpg" alt="">
  </div>
</div>
</div>`

const finalSlide = () =>  /*html*/`<div class="general-container final" id="">
<div class="general-container-inner ">
  <div class="bg" >
  </div>
  <div class="container-content-final">
   <h2>Final Slide</h2>
   <div class="row-of-credits">
   <ul>
   <span>Lorem Ipsum</span>
   <li>Lorena Ipsum</li>
   <li>Lorenzo Ipsum</li>
   <li>Loiane Ipsum</li>
   </ul>
   <ul>
   <span>Lorem Ipsum</span>
   <li>Lorena Ipsum</li>
   <li>Lorenzo Ipsum</li>
   <li>Loiane Ipsum</li>
   </ul>
   <ul>
   <span>Lorem Ipsum</span>
   <li>Lorena Ipsum</li>
   <li>Lorenzo Ipsum</li>
   <li>Loiane Ipsum</li>
   </ul>
   <ul>
   <span>Lorem Ipsum</span>
   <li>Lorena Ipsum</li>
   <li>Lorenzo Ipsum</li>
   <li>Loiane Ipsum</li>
   </ul>
   <ul>
   <span>Lorem Ipsum</span>
   <li>Lorena Ipsum</li>
   <li>Lorenzo Ipsum</li>
   <li>Loiane Ipsum</li>
   </ul>
   <ul>
   <span>Lorem Ipsum</span>
   <li>Lorena Ipsum</li>
   <li>Lorenzo Ipsum</li>
   <li>Loiane Ipsum</li>
   </ul>
   </div>
  </div>
</div>
</div>`

let element = ""
const slideCount = 10

for (let i = 1; i <= slideCount; i++) {
  if (i === 2) {
    element += eachSlideAlt(i)
  } else {
    element += eachSlide(i)
  }
}
element += finalSlide()

document.getElementById('outer-container').insertAdjacentHTML('afterbegin', element)


const todosOsSlides = document.querySelectorAll('.general-container')
const deadzone = parseInt(getComputedStyle(document.body).getPropertyValue('--deadzone').replace('px', ''))
const base = {}
const screensize = window.innerWidth >= 768 ? window.innerHeight : document.querySelector('.cover').offsetHeight


for (let i = 1; i <= slideCount; i++) {


  base[i] = (screensize + deadzone) * (i - 1) + (window.innerHeight)
}

document.addEventListener('scroll', () => {
  todosOsSlides.forEach(v => {

    const id = v.getAttribute('id')
    const offset = v.offsetTop
    const descriptionDeadzone = window.innerWidth >= 768 ? 300 : 175

    if (offset > base[id] + descriptionDeadzone) {
      try {

        v.querySelector('.container-description').classList.add('active')
      } catch {

      }
    } else {
      try {

        v.querySelector('.container-description').classList.remove('active')
      } catch {

      }
    }
  })
})
