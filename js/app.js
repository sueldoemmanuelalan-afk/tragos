
const telefono = "+542210000000";

const data = {
 cocteles: [
  "Mojito","Wiscola","Gin tonic","Fernet con coca", "Daiquiri Frutilla","Daiquiri Durazno", "Gancia"
 ],
 cervezas: [
  "Lager","IPA","Stout","Amber Ale","Honey"
 ],
 sinAlcohol: [
  "Agua","Agua con gas","Coca Cola","Sprite","Jugo Naranja","Jugo Manzana", 
 ],
 espumante: [
  "Sidra","Champagne"
 ]
};

function crearCards(lista, contenedor){
 lista.forEach(item=>{
  contenedor.innerHTML += `
  <div class="col-6 col-md-4 mb-3">
   <div class="card p-2 text-center text-white" data-item="${item}">
    <img src="img/${item.toLowerCase().replace(/ /g,'')}.png" class="img-fluid rounded mb-2">
    <h6>${item}</h6>
    <input type="number" min="0" value="0" class="form-control">
   </div>
  </div>`;
 });
}

crearCards(data.cocteles, document.getElementById("cocteles"));
crearCards(data.cervezas, document.getElementById("cervezas"));
crearCards(data.sinAlcohol, document.getElementById("sinAlcohol"));
crearCards(data.espumante, document.getElementById("espumante"));

function enviarPedido(){
 const nombre=document.getElementById("nombre").value||"Sin nombre";
 let pedido=[];
 document.querySelectorAll(".card").forEach(c=>{
  const qty=c.querySelector("input").value;
  if(qty>0) pedido.push(`${c.dataset.item} x${qty}`);
 });
 if(pedido.length==0){
  alert("No seleccionaste bebidas");
  return;
 }
 const msg=`🍹 Pedido Bar\nNombre: ${nombre}\n\n${pedido.join("\n")}`;
 window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(msg)}`,"_blank");
}
