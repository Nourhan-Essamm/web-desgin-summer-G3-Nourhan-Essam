let changeImg = () => {
    let img =
    document.querySelector('img')
    console.log(img.src)
    if (img.src.includes("images/bg2.jpg"))
    img.src ="images/bg.jpg"
    else 
        img.src = "images/bg2.jpg"
    
}