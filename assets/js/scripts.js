const BASE_URL = 'https://random.dog/woof.json';
const dogBtn = document.getElementById('change-dog');

const getDog = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
    
        return json.url;
    }
    catch(e) {
        console.log(e.message);
    }
};

const loadImg = async() =>{
    const catImg = document.getElementById('dog');
    catImg.src = await getDog();
}

dogBtn.addEventListener('click', loadImg);
loadImg();
