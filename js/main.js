const D={dog:[["Шпиц 2–5 кг","комплекс со стрижкой","2 400 ₽"],["Шпиц до 5 кг","гигиена","1 800 ₽"],["Японский шпиц","комплекс","3 000 ₽"],["Ши-тцу","комплекс","2 900 ₽"],["Хаски","комплекс","4 200 ₽"],["Корги","экспресс-линька","2 300 ₽"]],
cat:[["Груминг кошек","стоимость уточняйте у администратора","по запросу"]],
extra:[["Гигиенические процедуры, кинолог, детский сад","стоимость уточняйте у администратора","по запросу"]]};
let t="dog";const L=document.getElementById("list"),Q=document.getElementById("q");
function draw(){const s=Q.value.trim().toLowerCase();L.innerHTML=D[t].filter(r=>!s||(r[0]+r[1]).toLowerCase().includes(s)).map(r=>`<div class="row"><div><h3>${r[0]}</h3><small>${r[1]}</small></div><b>${r[2]}</b></div>`).join("")||'<p class="note">Ничего не найдено — спросите у администратора.</p>'}
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("on"));b.classList.add("on");t=b.dataset.t;draw()});
Q.oninput=draw;draw();
const lb=document.getElementById("lb");const lbImg=lb.querySelector("img");document.querySelectorAll(".gal .ph").forEach(p=>p.onclick=()=>{lbImg.src=p.dataset.full||getComputedStyle(p).backgroundImage.slice(5,-2);lb.classList.add("on")});lb.onclick=()=>{lb.classList.remove("on");lbImg.removeAttribute("src")};
addEventListener("keydown",e=>e.key==="Escape"&&lb.classList.remove("on"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv-in").forEach(e=>io.observe(e));


// Interactive Yandex Map: Friendly Pet, Lenin Avenue 44G, Nizhny Novgorod.
(function initFriendlyPetMap(){
  const mapNode = document.getElementById('yandex-map');
  if (!mapNode) return;
  if (typeof ymaps === 'undefined') {
    mapNode.innerHTML = '<div class="map-fallback">Не удалось загрузить карту. <a href="https://yandex.ru/maps/org/friendly_pet_hot_dog/76002869674/" target="_blank" rel="noopener">Откройте расположение в Яндекс Картах</a>.</div>';
    return;
  }
  ymaps.ready(function(){
    const coords = [56.280937, 43.928246];
    const map = new ymaps.Map('yandex-map', {
      center: coords,
      zoom: 17,
      controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
    }, { suppressMapOpenBlock: true });
    map.behaviors.enable(['drag', 'scrollZoom', 'dblClickZoom']);
    const placemark = new ymaps.Placemark(coords, {
      balloonContentHeader: '<strong>Friendly Pet</strong>',
      balloonContentBody: 'Груминг-салон для собак и кошек<br>Нижний Новгород, проспект Ленина, 44Г<br><small>Вход слева от 3-го подъезда. Вывеска «Груминг-салон».</small>',
      hintContent: 'Friendly Pet — груминг-салон'
    }, { preset: 'islands#pinkDotIcon' });
    map.geoObjects.add(placemark);
    placemark.balloon.open();
  });
})();
