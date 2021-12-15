const resultsNav = document.getElementById('resultsNav')
const favNav = document.getElementById('favNav')
const imagesContainer = document.querySelector('.images-container')
const saveConfirm = document.querySelector('.save-confirm')
const loader = document.querySelector('.loader')



const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];
let favourites = {};

function saveFavourite(itemUrl) {
    resultsArray.forEach((item)=>{
        if (item.includes(itemUrl)) {
            favourites[itemUrl] = item;
            console.log(favourites);
        }
    })
}

function updateDOM() {
    resultsArray.forEach((result)=> {
        
        const card = document.createElement('div');
        card.classList.add('card');
        

        const link = document.createElement('a');
        link.href = result.hdurl;
        link.title = 'View full image';
        link.target  = '_blank';

        const image = document.createElement('img');
        image.src = result.url;
        image.alt = 'NASA image';
        image.classList.add('card-img');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = result.title;

        const saveText = document.createElement('h5');
        saveText.classList.add('clickable');
        saveText.textContent = 'Add to favourites';
        saveText.setAttribute('onclick', `saveFavourite('${result.url}')`);

        const cardText = document.createElement('p');
        cardText.textContent = result.explanation;

         const footer = document.createElement('small');
         footer.classList.add('date-info');
         
         const date = document.createElement('strong');
         date.textContent = result.date;

         const copyright = document.createElement('span');
         copyright.textContent = `${result.copyright}`;

         footer.append(date, copyright);
         cardBody.append(cardTitle, cardText, saveText, footer);
         link.appendChild(image);
         card.append(link,cardBody);
	    imagesContainer.appendChild(card);
         

    })
}

async function getNasa() {
    try {
        const response = await fetch(apiUrl);
        resultsArray = await response.json();
        
        updateDOM()
    } catch (error) {
        console.log(error);
    }
}

getNasa();





