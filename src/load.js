if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW Registered!")
        console.log(registration);
    }).catch(error => {
        console.log("Sw Registration Failed")
        console.log(error)
    })
}

const loaderrWrapper = document.querySelector('.loader-wrapper');
    const site = document.querySelector('.home-container')
    
    function init() {
        setTimeout(() => {
        loaderrWrapper.style.opacity = 0;
        loaderrWrapper.style.display = 'none';

        site.style.display = 'block';
        setTimeout(() => site.style.opacity = 1, 50);

    
        }, 2000);
    }
    
    init();