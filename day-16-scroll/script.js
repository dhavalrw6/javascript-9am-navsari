const topBtn = document.getElementById('topBtn');

const handleScroll = ()=>{
    console.log(scrollY);

    if(window.scrollY >= 1000){
        topBtn.style.opacity = '1';
    }else{
        topBtn.style.opacity = '0';
    }
}

const handleTopButton = ()=>{
    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
}

window.onscroll = handleScroll;