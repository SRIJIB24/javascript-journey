//day 18
//fetch api -- built in js function to make http request to server and get response
//fetch api return promise -- async js
//task 1

async function getData() {
  try {
    let url = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await url.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
