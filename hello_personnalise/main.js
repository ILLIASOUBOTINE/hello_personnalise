let btn_click = document.querySelector(".btn_click");



btn_click.addEventListener('click', demandNom)


function demandNom() {
  let nom = prompt("Entrez votre nom");
  if (nom.length !== 0 && nom.trim() != "") {
    let conf = confirm(`Votre nom est: ${nom}`);
    if (conf) {
      alert(`Hello ${nom}`);
    } else {
      demandNom();
    }
  } else {
    alert("le champ ne doit pas être vide");
    demandNom();
  }

}

// let nom;

// while (!nom) {
//   nom = prompt("Entrez votre nom");
//   if (nom.length !== 0) {
//     let conf = confirm(`Votre nom est: ${nom}`);
//     if (conf) {
//       alert(`Hello ${nom}`);
//     } else {
//       nom = false;
//     }
//   } else {
//     alert("le champ ne doit pas être vide");
//     nom = false;
//   }
// }
