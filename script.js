document.addEventListener("DOMContentLoaded", function () {
  
    // console.log(data);
    var numCase = 0;
    
    // ================================================= Création des sections ( analogies ) =================================================
   

    // selection de l'élément "analogies" pour y mettre du code
    var container = document.getElementById("analogies");
  
    // Parcours de toute la base de donnée
   for (var i = 0; i < data.length; i++) {
      // Insertion de toute les valeurs 
      container.innerHTML +=
        '<section  id="' +
        data[i].id +
        '"><img src=" ' +
        data[i].imgFond +
      ' " alt="imgfond" class="imgFond"><div class="centerGradient" ><div class="centreCercle"><div class="bordureAna"></div><div class="cercleAna" style = background-image:url(' +
        data[i].illustration + 
        ')></div></div><div class="centreCarre"><div class="bordure"></div><div class="carre"><div class="legendAnalogies"><h2>Si j’étais ' +
        data[i].analogies +
        ", </h2><h2 class='leftTexte'>je serais " +
        data[i].valeurAnalogies +
        "</h2></div><p>" +
        data[i].text +
        "</p></div></div></div></section>";
    }
      
  
    //  ================================================= NAVBAR =================================================
  
    navbar = document.getElementById("navbar");
    var rootElement = document.documentElement;
  
    //création de la fonction
    var functionscroll = function () {
  
      //déclaration de y, hauteur de la page à laquelle apparaîtra la div
      var y = rootElement.scrollHeight - rootElement.clientHeight;
  
      //la div apparaît 
      if (rootElement.scrollTop / y >= 0.0) {
        navbar.className = "bar show"
      } else {
        navbar.className = "bar hide"
      }
  
      //la div disparaît lorsque "y" est supérieur à 9 sections 
      if (rootElement.scrollTop / y >= 1) {
        navbar.className = "bar hide"
      }
    };
  
    window.addEventListener("scroll", functionscroll);
  
  });
   
   //  =============================================== MENTION LEGALE ============================================
   
   // Pop-up du mention légale

   var mentionlegalelink = document.getElementById('mentionlegalelink');
   var mentionlegalecontent = document.getElementById('mentionlegalecontent');
 // clique pour faire apparaître et disparaître les mentions légales
     mentionlegalelink.addEventListener('click', function (event){
     event.preventDefault();
     mentionlegalecontent.classList.toggle('hidden');
 }); 
   
  //  ================================================= FORMULAIRE ================================================= 
  var valueAna = 0;
  var selectAna = document.querySelector("#analogie");
  selectAna.addEventListener("keyup", function (e) {
    valueAna = document.querySelector("#analogie").value;
    
  });

  document.querySelector('#newAnalogies').innerHTML +=
  '<section><div class="centerGradient"><div class="centreCercle"><div class="bordureAna"></div><div class="cercleAna" style = background-image:url(' +
  document.querySelector("#photo").value +
  ')></div></div><div class="centreCarre"><div class="bordure"></div><div class="carre ><div class="legendAnalogies"><h2>Si j’étais ' +
  document.querySelector("#analogie").value +
  ", </h2><h2 class='leftTexte'>je serais " +
  document.querySelector("#valeurAnalogie").value +
  "</h2></div><p></section>";

  // Lien entre JS et JSON

    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=melissa.cumur&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("textarea#explicationform").value).then(function (response) {
      response.json().then(function (data) {
        console.log("Réponse reçue : ")
          console.log(data);
      });
    });
 