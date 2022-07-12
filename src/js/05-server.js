'use strict';

//lo de twitter y comparte


function shareCard () {
    data.github = data.github.slice(1);
    data.linkedin = data.linkedin.slice(16);
  

    fetch("https://awesome-profile-cards.herokuapp.com/card", {
    method: "POST",
    headers: {
        'content-type': 'application/json'
      },
    body: JSON.stringify(data),
    })
    .then( response => response.json())
    .then((serverResp)=> {if (serverResp.success){
        sectionUrl.innerHTML = serverResp.cardURL;
        sectionUrl.href = serverResp.cardURL;

    }else{
        messageCard.innerHTML = '';
        messageCard.innerHTML = 'Debe rellenar todos los campos';

    }
console.log(serverResp);
})
};





const handleClickBtn = (ev) => {
    ev.preventDefault();
    contentShareTwo.classList.remove('hidden')
    btnShare.classList.add('btn-share-grey');
    shareCard();
   };
   



   btnShare.addEventListener ('click',handleClickBtn);