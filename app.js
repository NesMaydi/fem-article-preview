


const screenStateUpdate = () => {
    const priorStateComponent = document.getElementsByClassName('hide');
    const newState = document.getElementsByClassName("show");

    for (let i = 0; i < priorStateComponent.length; i++){
        priorStateComponent[i].classList.toggle("inactive");
    }
    for (let j = 0; j < newState.length; j++){
        newState[j].classList.toggle("active");
    }
  
    
}

const screenStateUpdateWide = () =>{
    const newState = document.getElementsByClassName("show");

    for (let i = 0; i < newState.length; i++){
        newState[i].classList.toggle("active");
    }


}

const btnShare = document.getElementsByClassName('share-logo');

for (let k = 0; k < btnShare.length; k++){

    btnShare[k].addEventListener("click", function(){
            if (screen.width < 1440){
                screenStateUpdate();
            } else {
                screenStateUpdateWide();
            };

            window.addEventListener('resize', () => {
                window.location.reload();
            })
})
}