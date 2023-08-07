window.onload = () =>{
    let input = document.querySelector('#input')
    input.oninput = function (){
        let value = this.value.trim()

        let list = document.querySelectorAll('.events_images .event_img')

        if(value != ''){
            list.forEach(function(elem) {
                if(elem.innerText.search(value) == -1){
                    elem.classList.add('hide')
                }


            })
        }else{
            list.forEach(elem =>{
                elem.classList.remove('hide')
            })  
        }
    }
}


// показать еще


const btn = document.querySelector('#buttonh');
const cards = Array.from(document.querySelectorAll('.card'));
const hidebtn = document.querySelector('#btn-hidden')



function openCatalog() {
    hidebtn.classList.add('hidden')
    btn.addEventListener('click', () => {
        cards.forEach(item => item.classList.remove('hidden'));
        btn.classList.add('hidden');
        hidebtn.classList.remove('hidden')

        
    })
}

function hideCatalog(){
    hidebtn.addEventListener('click', () => {
        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if(index<=2){
                item.classList.remove('hidden')
            }
            hidebtn.classList.add('hidden')
            btn.classList.add('hidden');
        }

        

        )
        btn.classList.remove('hidden')
    })
}
hideCatalog()

 

function response1() {
    if (window.innerWidth > 989) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 8) {
                item.classList.remove('hidden')
            } else if (index > 8) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response1()


function response2() {
    if (window.innerWidth <= 989 && window.innerWidth > 659) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 5) {
                item.classList.remove('hidden')
            } else if (index > 5) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response2()


function response3() {
    if (window.innerWidth <= 659) {

        cards.forEach((item, index) => {
            item.classList.add('hidden')
            if (index <= 2) {
                item.classList.remove('hidden')
            } else if (index > 2) {
                btn.classList.remove('hidden');
            }
            openCatalog()
        })
    }
}
response3()



