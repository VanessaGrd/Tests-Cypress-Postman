const chrono = {
  minutes: 0,
  secondes: 0,
  tenthOfSecondes: 0,
  init() {
    const body = document.body;
    console.log(body);
    const minutes = document.createElement("div");
    const secondes = document.createElement("div");
    const tenthOfSecondes = document.createElement("div");
    body.style.display = "flex";
        body.style.justifyContent = "start";
        minutes.style.backgroundColor = "green";
        minutes.style.borderBox="solid 1px black";
        minutes.style.width="8rem";
        minutes.style.heigth="8rem";
        minutes.style.color="white";
        secondes.style.backgroundColor="blue";
        secondes.style.borderBox="solid 1px black";
        secondes.style.width="8rem";
        secondes.style.heigth="8rem";
        tenthOfSecondes.style.backgroundColor="red";
        tenthOfSecondes.style.borderBox="solid 1px black";
        tenthOfSecondes.style.width="8rem";
        tenthOfSecondes.style.heigth="8rem";
        minutes.style.textAlign="center";
        secondes.style.textAlign="center";
        tenthOfSecondes.style.textAlign="center";
    minutes.textContent = this.minutes;
    secondes.textContent = this.secondes;
    tenthOfSecondes.textContent = this.tenthOfSecondes;
  },

  display(){
    
    body.appendChild(minutes);
    body.appendChild(secondes);
    body.appendChild(tenthOfSecondes);
  }
};

chrono.init()
