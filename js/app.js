//variables de estudiantes
var estudiantes = [
    {
        "codigo": "001",
    	"nombre": "Miguel Mendoza",
        "nota": 17
    },{
    	"codigo": "002",
    	"nombre": "Doris Condeña",
        "nota": 12
    },{
    	"codigo": "003",
    	"nombre": "Valentino Mendoza",
        "nota": 20
    },{
    	"codigo": "004",
    	"nombre": "Carlos Romero",
        "nota": 13
    },{
    	"codigo": "005",
    	"nombre": "Jhonny Aponte",
        "nota": 11
    },{
    	"codigo": "006",
    	"nombre": "Revelino Sullca",
        "nota": 16
    },{
    	"codigo": "007",
    	"nombre": "Nancy Puchocc",
        "nota": 19
    },{
    	"codigo": "008",
    	"nombre": "César Ayuque",
        "nota": 18
    },{
    	"codigo": "009",
    	"nombre": "Fidela Rodriguez",
        "nota": 17
    },{
    	"codigo": "010",
    	"nombre": "Rómulo Cayllahua",
        "nota": 15
    }
    ];

    //Funciones del JavaScript
    function calcular() {
    	var calculo = this.estudiantes;
    	return calculo;
    }

    function mostrarEstudiantes () {
    	var fila = "";
    	var calculo = calcular();
    	for (var i=0; i<calculo.length; i++) {
    		fila += '<tr><td id="Código">'+calculo[i].codigo+'</td><td id="Nombre">'+calculo[i].nombre+'</td><td id="Nota">'+calculo[i].nota+'</td></tr>';
    	}
        document.getElementById("Estudiantes").innerHTML = fila;
    }

    function calcularPromedio () {
    	var estudianteNotaPromedio = "";
    	var nota = 0;
    	var contador = 1;
    	var calculo = calcular();
    	for (var i=0; i<calculo.length; i++) {
    		nota += calculo[i].nota;
    		contador += 1;
    	}
    	estudianteNotaPromedio = "La <b>nota promedio</b> de los Estudiantes es: <b>"+((nota/contador).toFixed(2))+"</b>";
        document.getElementById("NotaPromedio").innerHTML = estudianteNotaPromedio;
    }

    function calcularNotaMayor () {
    	var estudianteNotaMayor = "";
    	var notaMayor = 0;
    	var calculo = calcular();
    	for (var i=0; i<calculo.length; i++) {
			if (calculo[i].nota > notaMayor) {
				estudianteNotaMayor = "El Estudiante "+calculo[i].nombre+" tiene la <b>mayor nota ("+calculo[i].nota+")</b>";
				notaMayor = calculo[i].nota;
			}
    	}
        document.getElementById("NotaMayor").innerHTML = estudianteNotaMayor;
    }

    function calcularNotaMenor () {
    	var estudianteNotaMenor = "";
    	var notaMenor = 20;
    	var calculo = calcular();
    	for (var i=0; i<calculo.length; i++) {
			if (calculo[i].nota < notaMenor) {
				estudianteNotaMenor = "El Estudiante "+calculo[i].nombre+" tiene la <b>menor nota ("+calculo[i].nota+")</b>";
				notaMenor = calculo[i].nota;
			}
    	}
        document.getElementById("NotaMenor").innerHTML = estudianteNotaMenor;
    }