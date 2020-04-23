function suma (x,y){
   return x+y;
}

function resta (x,y){
   return x-y;
}

function main(){
	document.getElementById('suma_resultado1').innerHTML = suma(1,1);
    document.getElementById('suma_resultado2').innerHTML = suma(2,2);
	document.getElementById('suma_resultado3').innerHTML = suma(3,3);

	document.getElementById('resta_resultado').innerHTML = resta(2,1);

};

main();