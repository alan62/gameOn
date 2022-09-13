function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  // DOM Elements
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modalCross = document.querySelector(".close");
  const formData = document.querySelectorAll(".formData");
  const successModal = document.querySelector("#success-modal");
  const form = document.querySelector('form[name="reserve"]')
  
  // FORM Elements
  
  const firstElt = document.querySelector("#first");
  const lastElt = document.querySelector("#last");
  const emailElt = document.querySelector("#email");
  const birthdateElt = document.querySelector("#birthdate");
  const qtyElt = document.querySelector("#quantity");
  const cityElt = document.querySelectorAll('.checkbox-input[name="location"]');
  const conditionsElt = document.querySelector("#checkbox1");
  
  
  //Form Error 
  
  const firstError = document.querySelector(".firstError");
  const lastError = document.querySelector(".lastError");
  const emailError = document.querySelector(".emailError");
  const birthError = document.querySelector(".birthError");
  const qtyError = document.querySelector(".qtyError");
  const cityError = document.querySelector(".cityError");
  const conditionsError = document.querySelector(".conditionsError");
  
  // REGEX
  
  const numbersValue = /^[0-9]{1,2}$/;
  
  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  
  // close modal event
  
  modalCross.addEventListener ("click", closeModal);
  
  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
    successModal.style.display = 'none';
  }
  
  // close modal form 
  function closeModal() {
    modalbg.style.display = "none";
    successModal.style.display = 'none';
  }
  document.querySelector("#btn-closed").addEventListener("click", closeModal);
  
  // functions 
  
  
  // ------------ send form 
  
  form.addEventListener('submit', function (e) {
      e.preventDefault();
      validate();
  });
  
  
  // ------------------- validation form by input -----------
  
  function checkFirstName(firstElt) {
    if (firstElt.value.toString().trim().length < 2) {
        firstError.style.display = "inline";
        firstError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
        firstError.style.color = 'red';
        firstError.style.fontSize = '0.8rem';
        firstError.style.marginTop = '10px';
        firstElt.style.border = 'solid red 2px';
        return false;
    } else {
        firstError.style.display = 'none';
        firstElt.style.border = 'none';
        return true; 
    };
  }
  
  function checkLastName(lastElt) {
    if (lastElt.value.toString().trim().length < 2) {
        lastError.style.display = 'inline';
        lastError.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Nom.";
        lastError.style.color = 'red';
        lastError.style.fontSize = '0.8rem';
        lastError.style.marginTop = '10px';
        lastElt.style.border = 'solid red 2px';
        return false;
    } else {
        lastError.style.display = 'none';
        lastElt.style.border = 'none';
        return true;
    }
  }
  
  function checkEmail(emailElt) {
    if (!/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(emailElt.value)) {
        emailError.style.display = "inline"
        emailError.innerText = "Veuillez entrer une adresse mail valide.";
        emailError.style.color = 'red';
        emailError.style.fontSize = '0.8rem';
        emailError.style.marginTop = '10px';
        emailElt.style.border = 'solid red 2px';
        return false;
    } else {
        emailError.style.display = 'none';
        emailElt.style.border = 'none';
        return true;
    }
  }
  
  function checkBirthdate(birthdateElt) {
    if (!birthdateElt.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
        birthError.style.display = "inline";
        birthError.innerText = "Vous devez entrer votre date de naissance.";
        birthError.style.color = 'red';
        birthError.style.fontSize = '0.8rem';
        birthError.style.marginTop = '10px';
        birthdateElt.style.border = 'solid red 2px';
        return false;
    } else {
        birthError.style.display = 'none';
        birthdateElt.style.border = 'none';
        return true;
    };
  }
  
  function checkQty(qtyElt) {
    if (!qtyElt.value.match(numbersValue)) {
        qtyError.style.display = "inline";
        qtyError.innerText = "Veuillez indiquer un nombre de participation à nos tournois."
        qtyError.style.color = 'red';
        qtyError.style.fontSize = '0.8rem';
        qtyError.style.marginTop = '10px';
        qtyElt.style.border = 'solid red 2px';
      return false;
    } else {
        qtyError.style.display = 'none';
        qtyElt.style.border = 'none';
        return true;
    };
  }
  
  function checkCity(cityElt) {
    let cityEltChecked = 0;
    cityElt.forEach(i => {
      if (i.checked) {
        cityEltChecked++;
      }
    })
    
    if (cityEltChecked === 0) {
          cityError.style.display = "inline";
          cityError.innerText = "Vous devez choisir une option.";
          cityError.style.color = 'red';
          cityError.style.fontSize = '0.8rem';
          cityError.style.marginTop = '10px';
          return false;
      } else {
          cityError.style.display = 'none';
          return true;
      };
  }
  
  function checkConditions(conditionsElt) {
    if (conditionsElt.checked == false) {
        conditionsError.style.display = "inline";
        conditionsError.innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
        conditionsError.style.color = 'red';
        conditionsError.style.fontSize = '0.8rem';
        conditionsError.style.marginTop = '10px';
        return false;
    } else {
        conditionsError.style.display = 'none';
        return true;
    }; 
  }
  
  // -------------------- Validation du formulaire ----------------------
  
  function validate() {
  // ne pas oublier de déclarer une variable
    let isFormValid = [];
  
    isFormValid.push(checkFirstName(firstElt));
    isFormValid.push(checkLastName(lastElt));
    isFormValid.push(checkEmail(emailElt));
    isFormValid.push(checkBirthdate(birthdateElt));
    isFormValid.push(checkQty(qtyElt));
    isFormValid.push(checkCity(cityElt));
    isFormValid.push(checkConditions(conditionsElt));
  
    //on vérifie que tous les éléments sont valides dans le tableau isFormValid
    if (!isFormValid.includes(false)) {
        form.style.display = 'none';
        successModal.style.display = 'flex';
        console.log(firstElt.value, lastElt.value, emailElt.value, birthdateElt.value, qtyElt.value);
        form.reset();
    }
  }