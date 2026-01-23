const body = document.querySelector('body')
const colorPalette = document.querySelector('.color-palette')
const colorBtns = document.querySelectorAll('.color')

colorBtns.forEach(color => {
    color.addEventListener('click', function(e) {
        const bgColor = getComputedStyle(e.target, null).getPropertyValue('--bg-color')
        body.style.backgroundColor = bgColor
    })
})

const addColorBtn = document.querySelector('.add-color')

addColorBtn.addEventListener('click', function(e) {
    const colorInput = document.getElementById('input-color')
    const test = document.querySelector('.test')

    const color = colorInput.value

    test.style.backgroundColor = ""
    test.style.backgroundColor = colorInput.value
    console.log(test.style.backgroundColor)

    if(test.style.backgroundColor === "") {
        return
    }
    
    const newColor = document.createElement('div')
    newColor.setAttribute("class", "color")
    newColor.style.setProperty("background-color", "var(--bg-color)")
    newColor.style.setProperty("--bg-color", color)

    colorPalette.appendChild(newColor)
})