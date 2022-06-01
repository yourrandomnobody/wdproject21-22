const fokusiranje = (x, focus = true) => {
    let element = document.querySelector(`#${x}Req`);
    if (focus) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  };
  
  let title = document.title;
  let regex = /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
  let nameErr = document.querySelector("#nameErr");
  let surnameErr = document.querySelector("#surnameErr");
  let emailErr = document.querySelector("#emailErr");
  let messageErr = document.querySelector("#messageErr");
  
  const form = document.querySelector("#contactForm");
  let name = form["name"];
  let surname = form["surname"];
  let email = form["email"];
  let message = form["message"];
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let err = 0;
    nameErr.innerHTML = "";
    surnameErr.innerHTML = "";
    emailErr.innerHTML = "";
    messageErr.innerHTML = "";
    name.style.background = "white";
    surname.style.background = "white";
    email.style.background = "white";
    message.style.background = "white";
  
    if (name.value.length < 3 || name.value.length > 15 || name.value[0] !== name.value[0].toUpperCase()) {
      let p = document.createElement("p");
      p.innerHTML = title == "Contact" ? "Invalid data" : "Netacno uneti podaci";
      nameErr.append(p);
      name.style.background = "rgba(233, 71, 71, 0.8)";
      err++;
    }
  
    if (surname.value.length < 4 || surname.value.length > 20 || surname.value[0] !== surname.value[0].toUpperCase()) {
      let p = document.createElement("p");
      p.innerHTML = title == "Contact" ? "Invalid data" : "Netacno uneti podaci";
      surnameErr.append(p);
      surname.style.background = "rgba(233, 71, 71, 0.8)";
      err++;
    }
  
    if (regex.test(email.value) == false) {
      let p = document.createElement("p");
      p.innerHTML = title == "Contact" ? "Invalid data" : "Netacno uneti podaci";
      emailErr.append(p);
      email.style.background = "rgba(233, 71, 71, 0.8)";
      err++;
    }
  
    if (message.value.length < 30 || message.value.length > 1000) {
      let p = document.createElement("p");
      p.innerHTML = title == "Contact" ? "Invalid data" : "Netacno uneti podaci";
      messageErr.append(p);
      message.style.background = "rgba(233, 71, 71, 0.8)";
      err++;
    }
  
    if (err == 0) {
      window.location.href = title == "Contact" ? "success.html" : "uspesno.html";
    }
  });
  
  $("textarea").keyup(function () {
    let characterCount = $(this).val().length,
      current = $("#current"),
      maximum = $("#maximum"),
      theCount = $("#the-count");
  
    current.text(characterCount);
  
    if (characterCount < 30 || characterCount > 1000) {
      maximum.css("color", "#8f0001");
      current.css("color", "#8f0001");
      theCount.css("font-weight", "bold");
    } else {
      maximum.css("color", "#666");
      theCount.css("font-weight", "normal");
    }
  });
  