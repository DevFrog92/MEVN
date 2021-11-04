document.addEventListener('DOMContentLoaded', function () {
  console.log("here")
  let lazyImages = [...document.querySelectorAll('img.lazy')]
  console.log(lazyImages)
  let active = false
  const lazyLoad = function () {
    if (active === false) {
      console.log('lazyLoad')
      active = true
      setTimeout(() => {
        lazyImages = lazyImages.map((lazyImage) => {
          if (lazyImage.getBoundingClientRect().top <= window.innerHeight && window.getComputedStyle(lazyImage).display !== "none") {
            lazyImage.src = lazyImage.dataset.src
            lazyImage.classList.remove('lazy')

            return null
          }else return lazyImage
        }).filter(image => image)

        if (!lazyImages.length) {
          document.removeEventListener('scroll',lazyLoad)
        }else active = false
      },200)
    }
  }
  document.addEventListener('scroll', lazyLoad)
  window.addEventListener('keypress',(e) => console.log(e.key))
})
