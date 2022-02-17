var torre1= 1;
var torre2= 2;
var torre3= 3;

let n=5;
let ins=[]

function hanoi(n,ori,des,aux){
	if (n==1){
		document.write("Mueva el disco" +n+" dedse la torre "+ori+" hasta la torre "+des+" <br>");
		ins.push(n);
		ins.push(ori);
		ins.push(des);
	}
	else{

	hanoi(n-1,ori,aux,des);
	ins.push(n);
	ins.push(ori);
	ins.push(des);
	document.write("Mueva el disco" +n+" dedse la torre "+ori+" hasta la torre "+des+" <br>");
	//await sleep(10);

	hanoi(n-1,aux,des,ori);

	}
}

hanoi(n,torre1,torre3,torre2);
document.write("Ins" +ins);
