// interfaz con P5.js para ue se vea bonito

// state

//for (var i=0;i<n;i++){
  //ellipse((30+n*10)/2,10+i*20,30+i*10,20);
  //anillo((30+n*10)/2,10+i*20,30+i*10,20);
  //anillo(r,g,b,30+i*10);
//}

class Anillo {
  constructor(diametro) {
    this.r =random(0, 250);
    this.g = random(0, 250);
    this.b = random(0, 250);
    this.diameter = diametro;
    this.x = 0;
    this.y = 0;
  }

  move(pila) {
    this.x = 0;
    this.y = 0;
  }

  display() {
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, this.diameter,20);
  }
}

class Torre {
  constructor(num) {
    this.anillos=[];
    this.x = (30+n*10)/2+(num*n*50)-100;
    this.y = 10+2*20;
    this.indice = num;
  }
  pon(anillo){
    //anillo.x=(30+n*10)/2+15;
    anillo.x=this.x/2+5;
    anillo.y=this.y-(this.anillos.length*10-40);
    this.anillos.push(anillo);
  }
  cambia(pilaDestino){
    //anillo.x=(30+n*10)/2+15;
    pilaDestino.pon(this.anillos[this.anillos.length-1]);
    this.anillos.pop;
    this.anillos.length=this.anillos.length-1
    
  }
  display() {

    fill(255);
    rect(this.x/2, 10, 10, this.y*2);
    rect(this.x/2-35, this.y*2, 30+(n)*10, 10);
    for(var i=0;i<this.anillos.length;i++){
      this.anillos[i].display();
    }

  }
}

let pila1= new Torre(1);
let pila2= new Torre(2);
let pila3= new Torre(3);

//hanoi(n,pila1,pila3,pila2);
function setup() {
  createCanvas(400,400);
  background(25);
  frameRate(1);

  for (var i=0;i<n;i++){
    //ellipse((30+n*10)/2,10+i*20,30+i*10,20);
    //anillo((30+n*10)/2,10+i*20,30+i*10,20);

    pila1.pon(new Anillo(30+(n-i)*10));
  }
}

function draw() {
  background(0);
  pila1.display();
  pila2.display();
  pila3.display();
  pila1.cambia(pila2);

}
