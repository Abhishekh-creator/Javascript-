let init = () => {
  let container = document.getElementsByClassName('jumbo-slider__container')[0],
  slides = document.getElementsByClassName('jumbo-slider__slide'),
  circles = document.getElementsByClassName('jumbo-slider__circle'),
  links = document.getElementsByClassName('jumbo-slider__link'),
  current = 1,
  time = 6000;

  //add animation class to slide
  slides[0].classList.add('jumbo-slider__slide--active');
  links[current-1].classList.add('jumbo-slider__link--active');
  circles[current-1].classList.add('jumbo-slider__circle--filled');


  //update elipsis and links
  let updateNav = (current) => {
    // console.log(`update current: ${current}`)
    for (let index = 0; index < slides.length; index++) {
      links[index].classList.remove('jumbo-slider__link--active');
      circles[index].classList.remove('jumbo-slider__circle--filled');
    }

    links[current-1].classList.add('jumbo-slider__link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled');
  }
  let startSliding = () => {

    setInterval(() => {
      // console.log(`current: ${current}`)

      //remove from active from first and add it to the second slide so It can become the first side with the class activated
      slides[1].classList.add('jumbo-slider__slide--active')
      slides[0].classList.remove('jumbo-slider__slide--active')
      // clone the first slide and place on the last space.
      container.appendChild(slides[0].cloneNode([true]));
      // then remove the first slide after it has been cloned
      container.removeChild(slides[0]);

      // console.log(`slides: ${slides.length}`)
      if(current < slides.length){
        current++
        updateNav(current)
      } else {
        current = 1
        updateNav(current)
      }


    }, time);
  }
  startSliding();
}

init();






// Step 1:
// 1. First I selected the conatiner which encompasses the all slides , left and right: nav bars ; also selected the all slides, elipsis circle and nav of car names all of them are array of length 3.

// 2. Then, added animation classes to the array lenght of index 0 to all the arrays . 

// 3. When page is loaded it adds animation to the link[0] then right nav[0] and elipsis circle[0]. 



// Step 2: updateNav()
// 3. After the update of current value the  for (let i = 0; i < slides.length; i++) is used to remove active classes from both links and circles. After removing active classes , the active classes are added again to the links and circles.


// Step 3:  startSliding();
// 1. I used setInterval() function which after 6 sec it will remove active class from slides[0] and add active class to slides[1].

// 2.  If else statement that if current number is less than slides.length , then add increment current and update in updatNav().








