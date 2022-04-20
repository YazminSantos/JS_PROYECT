/*let vacunas=[];
let InforPet=[];

let pet=prompt ("Ingrese 1 si tiene mascotas \nIngrese 2 si no tiene mascotas");

if (op==1) {
    var Raza=prompt("Ingrese el numero que corresponda con la raza de su mascota:\n1.Doberman 2.Chihuahua 3.Cruza");
    switch (Raza) {
        case '1':
            console.log("Sistema de vacunación Doberman: \n6ª Semana: Parvovirosis, tos de las perreras, desparasitación interna.\n8ª Semana: Moquillo, hepatitis, leptospirosis, desparasitación interna.\n10ª Semana: Parvovirosis, desparasitación interna.\n12ª Semana: Moquillo, hepatitis, leptospirosis, desparasitación interna.\n16ª Semana: Rabia, moquillo, hepatitis, desparasitación interna.\nRecordatorios anuales: Rabia, leptospirosis. Moquillo, hepatitis, parvovirosis.")
            console.log("Información de su mascota:")
            Pet();
            break;

        case '2':
            console.log("Sistema de vacunación Chihuahua: \n6ª Semana: Parvovirosis, tos de las perreras, desparasitación interna.\n8ª Semana: Moquillo, hepatitis, leptospirosis, desparasitación interna.\n10ª Semana: Parvovirosis, desparasitación interna.\n12ª Semana: Moquillo, hepatitis, leptospirosis, desparasitación interna.\n16ª Semana: Rabia, moquillo, hepatitis, desparasitación interna.\nRecordatorios anuales: Rabia, leptospirosis. Moquillo, hepatitis, parvovirosis.")
            console.log("Información de su mascota:")
            Pet();
            
            break;
    
        default:
            console.log('Error, no viene la opción');
            console.log("Información de su mascota:")
            Pet();

            break;
    }
    
} else {
    console.log('Error');
}

function Pet() {
        
        let namePet=prompt('Ingrese el nombre de su mascota');
        let numVac=prompt('Ingrese el numero de vacunas puestas a su mascota');
        let age=prompt('Ingrese la edad de su mascota');
        class InfoPet{
            constructor(namePet,numVac,age){
                this.namePet=namePet;
                this.numVac=numVac;
                this.age=age;
            }
        }
        
        
      
        
    do{
        let nameVac=prompt('Ingrese el nombre de la vacuna:');
        var contin=prompt('1.Otra vacuna\n2.Salir');

        function crearVac() {
            vacunas.push(nameVac);
        }
        crearVac();

    } while (contin==1);
    
    console.log(InforPet);
    console.log(vacunas);
}*/

/*INTRO****************************/

//menu desplegable
function ver(n) {
    document.getElementById("subseccion"+n).style.display="block"
}
function ocultar(n) {
    document.getElementById("subseccion"+n).style.display="none"
    
}



function seleccion(n){
    var op = n
    //const op = ("opc"+n)
   console.log( op)
    if (op== 1) {
        document.getElementById('inMa').value= "Sistema de vacunación Doberman: \n6ª Semana: Parvovirosis, tos de las perreras, desparasitación interna.\n8ª Semana: Moquillo, hepatitis, leptospirosis, desparasitación interna.\n10ª Semana: Parvovirosis, desparasitación interna.\n12ª Semana: Moquillo, hepatitis, leptospirosis, desparasitación interna.\n16ª Semana: Rabia, moquillo, hepatitis, desparasitación interna.\nRecordatorios anuales: Rabia, leptospirosis. Moquillo, hepatitis, parvovirosis.";
    } else if(op==2){
       
        document.getElementById('inMa').value= "Sistema de vacunación Chihuahua:";
    }
    else if(op==3){
        document.getElementById('inMa').value= "Sistema de vacunación Gran Danés";
    }
    else if(op==4){
        document.getElementById('inMa').value= "Sistema de vacunación cruza: "
    }
    else{
        document.getElementById('inMa').value= "Error ";
    }
    document.getElementById('inMa').value+= "";
}

//array infoPet

const storageElements = localStorage.getItem('inPet') ;
let inPet=[];
console.log(typeof storageElements)
if (storageElements){
    inPet = JSON.parse(storageElements);
}
render();

function save(){
 const namePP = document.getElementById('namePet');
    const namePe = namePP.value;
 const agepp = document.getElementById('age');
    const agePet = agepp.value;
 const razz = document.getElementById('raza');
    const raz = razz.value;
 const sizz = document.getElementById('size');
    const siz= sizz.value;
    class In {
        constructor(namePe, agePet, raz, siz) {
            this.Nombre = namePe;
            this.Edad = agePet;
            this.Raza = raz;
            this.Tamaño = siz;
        }
    }
    const Inf= new In(namePe,agePet,raz,siz);
    inPet.push(Inf);
    
    namePP.value ='';
    agepp.value ='';
    razz.value ='';
    sizz.value = '';
    render();
    localStorage.setItem('inPet', JSON.stringify(inPet))
    
    
}

function render(){
    const container= document.getElementById('resultado');
    container.innerHTML='';


    //var foo = inPet.map(function(bar))
    //{
     //   return ''<li>+bar.
   // }
    
    
    for (const elemen of inPet) {
        const item =document.createElement('li');
        const contenido= document.createTextNode("NOMBRE: "+ elemen.Nombre + "  EDAD: "+ elemen.Edad + "  RAZA: " +elemen.Raza + "  TAMAÑO: " + elemen.Tamaño);
        console.log(inPet)
        //item.textContent=element;
        container.appendChild(item);
        item.appendChild(contenido);
    }  
}

