const hamburgerDiv = document.getElementById('hamburger')
const navLinksMenu = document.getElementById('nav-links-menu')
const navLinks = document.querySelectorAll('#product-nav, #company-nav, #connect-nav')
const navDropDown = document.querySelectorAll('.dropdown')


hamburgerDiv.addEventListener('click', () => {
    if(navLinksMenu.classList.contains('hidden-menu')){
        navLinksMenu.classList.toggle('hidden-menu')
    } else if (!navLinksMenu.classList.contains('hidden-menu')){
        console.log('Doesn\'t contains')
        navLinksMenu.classList.toggle('hidden-menu')
        for( let link of navLinks){
            link.children[1].classList.add('hidden')
        }
    }

}
)

for (let link of navLinks){
    link.addEventListener('click', ()=> {
        for (let link2 of navLinks){
            link2.children[1].classList.add('hidden')

            if(!link2.children[1].classList.contains('hidden')){
                link2.children[1].classList.add('hidden')
            }  

            else {
                link.children[1].classList.remove('hidden')
                
            }
        }
        
    })
}

