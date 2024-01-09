var MenuItem = document.querySelectorAll('.ItemMenu')

function selectLink (){
    MenuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

MenuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-expandir')
var MenuSide = document.querySelector('.MenuLateral')

btnExp.addEventListener('click', function(){
    MenuSide.classList.toggle('expandir')
})
