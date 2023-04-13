/*const test = document.getElementById('test');
const majCounter = () => {
    const api = fetch('https://openlibrary.org/books/OL7353617M.json')
    .then(response => response.json())
    .then(data =>(test.innerText = data.value))
    .catch(error => alert("Erreur : " + error));
    console.log(api);
 };
majCounter();*/

/*const test = document.getElementById('test');
const majCounter = async () => {
    const data = await fetch('https://www.googleapis.com/books/v1/volumes/y4nZMQEACAAJ');
    console.log(data);
    const dataTransformed = await data.json();
    console.log(dataTransformed);
    test.innerText = dataTransformed.docs[1].author_alternative_name[0];
};
majCounter();*/


