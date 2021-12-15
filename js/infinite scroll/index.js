const apiKey = 'NzSUPYbwn2elsThh_DKaDPleZZIOZD1irzQEdNUrdEc';
const count = 30;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

const imageContainer = document.getElementById('image-container');

let photoArray = [];

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}


function displayPhotos() {
    photoArray.forEach(item => {
        const photo = document.createElement('a');
        setAttributes(photo , {
            href: item.links.html,
            target: '_blank'
        })

        

        const img = document.createElement('img');

        setAttributes(img, {
            src:item.urls.regular,
            alt: item.alt_description,
            title: item.alt_description
        })

        photo.appendChild(img);
        imageContainer.appendChild(photo);
    });
}

async function getPhotos () {
    try {
        const response = await fetch(apiURL);
        photoArray = await response.json();
        displayPhotos();
        
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000){
       
        getPhotos();
        console.log('loaded more');
    }     
})
getPhotos();