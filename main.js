onload =() =>{
  const load = document.getElementById('load')


  setTimeout(() =>{
    load.style.display ='none'
  },1000)
}







const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click',() => {
            navMenu.classList.remove('show-menu')
        })
      }


      const navLink = document.querySelectorAll('.nav_link')

      function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')

        
      }
      navMenu.forEach(n => n.addEventListener('click',linkAction))



   




     



      

      







