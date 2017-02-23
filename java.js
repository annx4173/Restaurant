klon.querySelector(".data_navn").innerHTML = person.data;

klon.querySelector(".data_rabatpris").innerHTML = produkt.pris * produkt.rabatsats / 100;

klon.querySelector(".data_billede").src = "/imgs/small/" + produkt.billede + "-sm.jpg";


$.getJSON("HJEMMESIDE LINKET", visProduktListe);
