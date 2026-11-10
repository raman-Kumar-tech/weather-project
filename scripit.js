

const element = document.querySelector('form');

element.addEventListener('submit',(event)=>{

    event.preventDefault();
    const element2 = document.getElementById('a');
    const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=6e64730843ed4a8788c92100261010&q=${element2.value}&aqi=yes`);

    const lastelement = document.getElementById('last');

    obj.then(data=>data.json())
    .then(data2=>lastelement.innerHTML= `${data2.current.temp_c}`);
})