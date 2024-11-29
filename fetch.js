fetch("http://localhost:3000").then((reponse) =>
  reponse.text().then((data) => console.log(data))
);

async function makeRequest() {
  const reponse = await fetch("http://localhost:3000");
  const data = await reponse.text();

  console.log(data);
}

makeRequest();