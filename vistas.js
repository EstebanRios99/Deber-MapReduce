// vista 1: Muestra verdadero si la tracción de los 
//automoviles es delantera o falsa si no lo es.
function (doc) {
  if(doc.Tracción){
    emit(doc.Tracción=="Delantera",doc.Modelo);
    }
}
//vista 2: Muesta todos los modelos de autos y devuleve verdadero si su 
// respectivo cilindraje es mayor que 1600.
function (doc) {
  if (doc.Cilindraje){
    emit(doc.Cilindraje>1600, doc.Modelo);
  }
}
//vista 3: Busca todos los autos que sean de maarca "Renault"
//y devuelven su modelo y los colores disponibles.
function (doc) {
   if (doc.Marca =="Renault"){
     emit(doc.Modelo,doc.Color)
   }
}
// vista 4: Busca todos los autos cuyo cilindraje sea > 2000
//y devuelve su modelo y su respectivo cilindraje
function (doc) {
  if(doc.Cilindraje > 2000){
    emit(doc.Modelo,doc.Cilindraje);
  }
}
// vista 5: Esta vista busca todos los modelos de auto cuya marca sean chevrolet
// y si dentro de los colores disponibles existe el color azul
// y devuelve el modelo y el precio respectivo. 
function (doc) {
  if(doc.Color){
    for(var i in doc.Color){
      if (doc.Marca =="Chevrolet"&&doc.Color[i]=="Azul"){
        emit(doc.Modelo,doc.Precio);
      }
    }
  }
}
//vista 6: Esta vista nos muestra la marca y el modelo de vehículo respectivo
// y usa el reduce "_count" para conocer la cantidad de autos que existe por 
//marca.
function (doc) {
  if (doc.Marca){
     emit(doc.Marca, doc.Modelo); 
  } 
}
// vista 7: Esta vista nos muestra la marca del vehículo y el precio que existe
// y utiliza el reduce "_sum" para mostrar el total que suman los precios
// por cada marca.
function (doc) {
  if(doc.Marca){
    emit(doc.Marca, doc.Precio);
  }
}
//vista 8: Esta vista nos muestra el modelo de autos 
//cuyo precio esta entre 20000 y 30000 dólares
function (doc) {
  if (doc.Precio < 30000 && doc.Precio >= 20000){
    emit(doc.Modelo,doc.Precio);
  }
}
//vista 9: Esta vista busca todos los autos que sean de color azul
//y nos muestra el modelo y su precio respectivo.
function (doc) {
 if(doc.Color){
   for(var i in doc.Color){
     if (doc.Color[i]=="Azul"){
       emit(doc.Modelo,doc.Precio)
     }
   }
 }
}
//vista 10: Esta vista nos muestra el modelo de auto y todos sus colores respectivos
// y utiliza el reduce "_count" para mostrar la cantidad de vehículos por color.
function (doc) {
  if (doc.Color){
    for(var i in doc.Color){
      emit(doc.Color[i], doc.Modelo);
    }
  }
}

