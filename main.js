function carregaPerfil() {
    let xhr = new XMLHttpRequest();


    xhr.onload = function () {

        let data = JSON.parse(this.responseText);
 
        let perfilImg = `<img src="${data.avatar_url}" class="img_perfil">`

        let perfilStg = `<div>
                            <h1 class="perfilName"><a href="${data.html_url}" target="_blank">${data.name}<br>(${data.login})<\a></h1>
                            <p class="perfilDescription">
                                 <b>Objetivos:</b> O objetivo desse site é compartilhar um pouco sobre minha vida
                                pessoal, academica e religiosa com um intuito de ajudar outras pessoas e de
                                compartilhar projetos e experiencias que eu tive ao longo da minha vida.<br><br><b>Bio</b>: ${data.bio}
                                <br><br><b><a href="${data.followers_url}" target="_blank">Follower no GitHub<\a>:</b> ${data.followers}
                            </p>
                        </div>
                        <div class="redes-sociais">

                            <h1>Redes Sociais</h1>
                            <a class="facebook" href="https://www.facebook.com/andre.moriya.5" target="_blank"><i
                                    class="fab fa-facebook-square fa-3x"></i></a>
                            <a class="twitter" href="https://twitter.com/andre_moriya" target="_blank"><i
                                     class="fab fa-twitter fa-3x"></i></a>
                            <a class="instagram" href="https://www.instagram.com/andre_moriya/" target="_blank"><i
                                    class="fab fa-instagram fa-3x"></i></a>
                            <a class="github" href="${data.html_url}" target="_blank"><i
                            class= "fab fa-github fa-3x"></i>

                        </div>`;

        document.getElementById('imgPerfil').innerHTML = perfilImg;
        document.getElementById('perfilTxt').innerHTML = perfilStg;

    }

    xhr.onerror = function () {
        alert(`Erro na requisição \nCódigo: ${this.status} - ${this.statusText}`)
    }


    xhr.open('GET', 'https://api.github.com/users/andresathler');
    xhr.send();
}

function carregaFollowers() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {

        let followersData 

        let followers = JSON.parse(this.responseText);

        let followersCount = followers.length

        followersData =`<div class="col-md-3 col-sm-8 card" style="min-width: 10rem;">
                            <img class="card-img-top" src="${followers[0].avatar_url}" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text"><a href="${followers[0].html_url}" target="_blank">${followers[0].login}</a></p>
                            </div>
                        </div>`

        for(let i = 1; i < followersCount || i < 4; i++){

            followersData+=`<div class="col-md-3 col-sm-8 card" style="min-width: 10rem;">
                                <img class="card-img-top" src="${followers[i].avatar_url}" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text"><a href="${followers[i].html_url}" target="_blank">${followers[i].login}</a></p>
                                </div>
                            </div>`            

            document.getElementById('followersCard').innerHTML = followersData;

        }                

    }

    xhr.onerror = function () {
        alert(`Erro na requisição \nCódigo: ${this.status} - ${this.statusText}`)
    }

    xhr.open('GET', 'https://api.github.com/users/andresathler/followers');
    xhr.send();
}

function searchUser () {
    let xhr = new XMLHttpRequest();

    xhr.onkeyup = function () {

                       

    }

    xhr.onerror = function () {
        alert(`Erro na requisição \nCódigo: ${this.status} - ${this.statusText}`)
    }

    xhr.open('GET', 'https://api.github.com/users/');
    xhr.send();
}

var form = document.getElementById("myForm")

form.addEventListener('submit', function(e){

    e.preventDefault()

    var search = getElementById("search").value

    var originalName = search.split(' ').join('')

    fetch("https://api.github.com/users/" + originalName)
})

