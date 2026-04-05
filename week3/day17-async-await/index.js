//day17
//Callback Hell -- pyramid of doom -- solution --> promises -- mordern js --> async/await
//task 1

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Received");
    }, 2000);
  });
}

async function getData() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
