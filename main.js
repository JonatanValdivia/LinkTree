'mode strict'


const links = {
    "nome": "NOME COMPLETO",
	"MeuNome": "Jonatan Vinicius Valdivia",
    "img": "./download.png",
	"img2": "./ImagemPessoal.jpg",
    "links": [
        {
            "titulo": "Github",
            "url": "https://github.com/JonatanValdivia/"
        },
        {
            "titulo": "E-mail",
            "url": "mailto:jonatan.viniciusvaldivia@outlook.com"
        },
        {
            "titulo": "Instagram",
            "url": "https://www.instagram.com/"
        },
        {
            "titulo": "Facebook",
            "url": "https://www.facebook.com/jonatan.valdivia.13/"
        }
    ]
}

const avatar = document.getElementById('avatar');
avatar.src = links.img;
avatar.addEventListener('mouseenter', trocarImagem);
avatar.addEventListener('mouseout', destrocarImagem);


const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;
titulo.addEventListener('click', mostrarNome);

const endereco = document.getElementsByTagName('a')[0]//.href = links.links[0].url;
endereco.textContent = links.links[0].titulo;
endereco.href = links.links[0].url;

const endereco1 = document.getElementsByTagName('a')[1]
endereco1.textContent = links.links[1].titulo;
endereco1.href = links.links[1].url;

const endereco2 = document.getElementsByTagName('a')[2]//.href = links.links[0].url;
endereco2.textContent = links.links[2].titulo;
endereco2.href = links.links[2].url;

const endereco3 = document.getElementsByTagName('a')[3]//.href = links.links[0].url;
endereco3.textContent = links.links[3].titulo;
endereco3.href = links.links[3].url;

 function trocarImagem(){
	 avatar.src = links.img2;
 }

 function destrocarImagem(){
	 avatar.src = links.img;
 }

 function mostrarNome(){
	 titulo.textContent = links.MeuNome;
 }

