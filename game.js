const N = 40;
const BAD = [5, 11, 17, 23, 29, 35];
const GOOD = [8, 14, 20, 26, 32, 38];

const QS = [
  { k: "mc", tag: "Sos Batsheba", p: 100,
    q: "Luego de la muerte de David, Adoniá se acerca para pedirte que hables con Shlomo. ¿Qué te pide?",
    o: ["Que le pidas a Shlomo que le permita estar con Abishag la sunamita", "Que le pidas a Shlomo que lo nombre jefe del ejército en lugar de Yoav", "Que le pidas a Shlomo que lo deje mudarse a Hebrón con su familia", "Que le pidas a Shlomo que le devuelva las tierras de David"],
    e: "Abishag había cuidado a David, y pedirla por esposa equivalía a reclamar el trono. Shlomo lo entendió así." },
  { k: "order", tag: "Ayudá a Shlomo", p: 140,
    q: "Ordená los pasos para ayudar a Shlomo a convertirse en rey.",
    s: ["Montar la mula del rey", "Llevar a Shlomo a Guijón", "Ungirlo", "Tocar el shofar y gritar: ¡Viva el rey Shlomo!"],
    e: "David ordenó que Shlomo montara su mula, y en Guijón Tzadok y Natán lo ungieron. Después sonó el shofar y el pueblo proclamó al nuevo rey." },
  { k: "mc", tag: "Sos Benaia", p: 100,
    q: "Tu rey Shlomo te pidió que vayas a matar a alguien porque desobedeció una promesa. ¿A quién tenés que buscar?",
    o: ["Shimi", "Yoav", "Evyatar", "Barzilai"],
    e: "Shimi había prometido no salir de Jerusalén. Cuando fue a Gat a buscar a sus esclavos, rompió su palabra." },
  { k: "mc", tag: "Un juicio difícil", p: 140,
    q: "Se acercan dos mujeres acusándose entre sí de haberle robado su bebé. ¿Qué hacés?",
    o: ["Decir que vas a partir al bebé en dos y darle una mitad a cada una", "Dárselo a la que traiga más testigos", "Encerrar a las dos hasta que una confiese", "Echar una suerte para decidir quién se lo queda"],
    e: "La verdadera madre prefirió entregar al bebé antes que verlo partido. Así Shlomo descubrió la verdad y todo el pueblo respetó su sabiduría." },
  { k: "wish", tag: "Un sueño en Gibeón", q: "Dios te ofrece un deseo: ¿qué pedís?",
    o: [{ t: "Riqueza", m: "Dios te lo concede.", r: 50 },
        { t: "Administrar justicia sabiamente", m: "Dios se alegra y te concede también larga vida, riqueza y gloria.", r: 100 },
        { t: "Larga vida para gobernar a tu pueblo", m: "Tenés un reinado muy largo, pero el pueblo está descontento.", r: -50 }] },
  { k: "mc", tag: "Historia del trono", p: 70,
    q: "¿Quién quiso tomar el trono indebidamente?",
    o: ["Adoniá", "Avshalom", "Yoav", "Natán"],
    e: "Adoniá se proclamó rey cuando David estaba viejo, aunque David ya había prometido el trono a Shlomo." },
  { k: "mc", tag: "El banquete de Adoniá", p: 100,
    q: "¿Quiénes apoyaron a Adoniá en su intento de ser rey?",
    o: ["Yoav y el sacerdote Evyatar", "Natán y Tzadok", "Benaia y Shimi", "Batsheba y Natán"],
    e: "Yoav, jefe del ejército, y Evyatar, el sacerdote, lo apoyaron. Natán, Tzadok y Benaia no fueron invitados." },
  { k: "mc", tag: "La unción", p: 70,
    q: "¿En qué lugar fue ungido Shlomo como rey?",
    o: ["Guijón", "Ein Rogel", "Guilgal", "Hebrón"],
    e: "Shlomo fue ungido en Guijón, mientras Adoniá festejaba en Ein Rogel sin saber lo que pasaba." },
  { k: "mc", tag: "La unción", p: 100,
    q: "¿Quiénes ungieron a Shlomo?",
    o: ["Tzadok el sacerdote y Natán el profeta", "Evyatar el sacerdote y Yoav", "Natán el profeta y Benaia", "Tzadok y Shimi"],
    e: "Tzadok y Natán, ambos fieles a David, ungieron a Shlomo por orden del rey." },
  { k: "mc", tag: "Últimas palabras de David", p: 100,
    q: "Antes de morir, ¿qué le recomendó David a Shlomo como lo más importante?",
    o: ["Cumplir los mandamientos de Dios y seguir sus caminos", "Conquistar a los pueblos vecinos", "Perdonar a Yoav y a Shimi para mantener la paz", "Casarse con la hija de un rey poderoso"],
    e: "David le pidió ser fuerte y cumplir la Torá de Dios, para que le fuera bien en todo lo que hiciera." },
  { k: "mc", tag: "Sos Yoav", p: 140,
    q: "Adoniá fue ejecutado y sabés que tu turno se acerca. ¿Dónde buscás refugio?",
    o: ["En los cuernos del altar", "En el palacio de Shlomo", "En las puertas de Jerusalén", "En la casa de Natán"],
    e: "Yoav se aferró al altar, pero Benaia cumplió la orden de Shlomo y lo mató allí mismo." },
  { k: "mc", tag: "El sacerdote Evyatar", p: 100,
    q: "Evyatar había apoyado a Adoniá. ¿Qué hizo Shlomo con él?",
    o: ["Lo desterró a sus tierras en Anatot", "Lo nombró sumo sacerdote junto a Tzadok", "Lo mandó de embajador a Egipto", "Lo encerró en el palacio"],
    e: "Shlomo no lo mató por haber cargado el Arca junto a David, pero lo expulsó de su cargo y lo envió a Anatot." },
  { k: "mc", tag: "El sueño de Shlomo", p: 70,
    q: "¿En qué lugar ofreció Shlomo mil ofrendas y Dios se le apareció en un sueño?",
    o: ["Gibeón", "Hebrón", "Beit El", "Guilgal"],
    e: "En Gibeón estaba el gran altar. Allí Dios le dijo a Shlomo: pedime lo que quieras." },
  { k: "mc", tag: "Alianzas del rey", p: 70,
    q: "¿Con qué rey se emparentó Shlomo al casarse con su hija?",
    o: ["Faraón, rey de Egipto", "Hiram, rey de Tzor", "El rey de Moab", "El rey de Edom"],
    e: "Shlomo se casó con la hija de Faraón y la llevó a vivir a la Ciudad de David." },
  { k: "mc", tag: "Los últimos días de David", p: 70,
    q: "Cuando David era anciano y sentía mucho frío, ¿quién lo cuidaba?",
    o: ["Abishag la sunamita", "Batsheba", "Mijal", "Avigail"],
    e: "Abishag era una joven de Shunem elegida para cuidar al rey, aunque David no la tomó como esposa." }
];

const BAD_EV = [
  { t: "Adoniá te robó 100 ofrendas.", d: -100 },
  { t: "Natán se retrasó y no pudo avisarle a Batsheba y a Shlomo que Adoniá quiere tomar el trono. Perdés ofrendas por la demora.", d: -80 },
  { t: "Adoniá se proclamó rey y no te invitó a su banquete.", d: -500 },
  { t: "Yoav te cierra el paso con sus soldados y tenés que pagarle para seguir.", d: -70 },
  { t: "Evyatar se une a Adoniá y te quita apoyos en el palacio.", d: -60 },
  { t: "Shimi te maldice en el camino y perdés tiempo y ofrendas.", d: -40 }
];
const GOOD_EV = [
  { t: "Tzadok el sacerdote te bendice en nombre de Shlomo.", d: 80 },
  { t: "Benaia te escolta con la guardia real y llegás sano y salvo.", d: 70 },
  { t: "Natán te avisa a tiempo de la jugada de Adoniá.", d: 100 },
  { t: "El pueblo celebra el reinado de Shlomo y reparte ofrendas.", d: 120 },
  { t: "Shlomo te honra con un lugar en su mesa.", d: 60 },
  { t: "Un mensajero llega de Guijón con muy buenas noticias.", d: 90 }
];

const $ = id => document.getElementById(id);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const makeDeck = list => { let d = []; return () => { if (!d.length) d = shuffle(list.slice()); return d.pop(); }; };
const nextQ = makeDeck(QS), nextBad = makeDeck(BAD_EV), nextGood = makeDeck(GOOD_EV);

let pos = 0, score = 0, busy = false;
let pts = [], pawn;

const NS = "http://www.w3.org/2000/svg";
const el = (n, a, p) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); if (p) p.appendChild(e); return e; };

function buildBoard() {
  const svg = $("svg");
  const defs = el("defs", {}, svg);
  const g = el("linearGradient", { id: "cop", x1: "0", y1: "0", x2: "0", y2: "1" }, defs);
  el("stop", { offset: "0", "stop-color": "#e0a458" }, g);
  el("stop", { offset: "1", "stop-color": "#8a4b1c" }, g);
  const path = el("path", { d: "M90 400 C 130 130, 500 20, 745 170", fill: "none" }, svg);
  const L = path.getTotalLength();
  const rad = t => 46 - 33 * Math.pow(t, 0.9);
  const body = el("g", {}, svg);
  for (let i = 0; i <= 160; i++) { const t = i / 160, p = path.getPointAtLength(L * t); el("circle", { cx: p.x, cy: p.y, r: rad(t) + 4, fill: "#5a2e10" }, body); }
  for (let i = 0; i <= 160; i++) { const t = i / 160, p = path.getPointAtLength(L * t); el("circle", { cx: p.x, cy: p.y, r: rad(t), fill: "url(#cop)" }, body); }
  for (let i = 0; i < N; i++) {
    const t = 0.03 + 0.94 * i / (N - 1), p = path.getPointAtLength(L * t);
    pts.push(p);
    const bad = BAD.includes(i), good = GOOD.includes(i);
    const color = i === 0 || i === N - 1 ? "#e6b84b" : bad ? "#d9534f" : good ? "#4caf7a" : "#6f8fd8";
    el("circle", { cx: p.x, cy: p.y, r: 9, fill: color, stroke: "#0d1630", "stroke-width": 2 }, svg);
    const tx = el("text", { x: p.x, y: p.y + 4, "text-anchor": "middle", "font-size": 11, "font-weight": 700, fill: "#0d1630" }, svg);
    tx.textContent = i === 0 ? "▶" : i === N - 1 ? "★" : bad ? "!" : good ? "+" : "?";
  }
  pawn = el("g", { id: "pawn" }, svg);
  el("circle", { r: 12, fill: "#fff7dc", stroke: "#0d1630", "stroke-width": 3 }, pawn);
  el("circle", { r: 5, fill: "#b8702c" }, pawn);
  place(0);
}

function place(i) { pawn.style.transform = `translate(${pts[i].x}px,${pts[i].y}px)`; }

function addScore(d) {
  score = Math.max(0, score + d);
  $("score").textContent = score;
  $("bar").style.width = Math.min(100, score / 10) + "%";
}

function openCard(html) { $("card").innerHTML = html; $("modal").classList.remove("hidden"); }
function closeCard() { $("modal").classList.add("hidden"); }

function feedback(ok, q) {
  const msg = ok ? `¡Correcto! Ganás ${q.p} ofrendas.` : "Incorrecto. No ganás ofrendas.";
  if (ok) addScore(q.p);
  return `<div class="fb ${ok ? "good" : "bad"}"><strong>${msg}</strong><br>${q.e}</div><button class="go" id="next">Continuar</button>`;
}

function wireNext() { $("next").onclick = () => { closeCard(); busy = false; }; }

function askMC(q) {
  const opts = shuffle(q.o.map((t, i) => ({ t, ok: i === 0 })));
  openCard(`<span class="tag">${q.tag}</span><h2>${q.q}</h2><div id="opts">${opts.map((o, i) => `<button class="opt" data-i="${i}">${o.t}</button>`).join("")}</div><div id="fb"></div>`);
  document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    const sel = opts[b.dataset.i];
    document.querySelectorAll(".opt").forEach((x, i) => { x.disabled = true; if (opts[i].ok) x.classList.add("ok"); });
    if (!sel.ok) b.classList.add("no");
    $("fb").innerHTML = feedback(sel.ok, q);
    wireNext();
  });
}

function askOrder(q) {
  const items = shuffle(q.s.slice());
  let seq = [];
  const draw = () => {
    openCard(`<span class="tag">${q.tag}</span><h2>${q.q}</h2><p class="hint">Tocá los pasos en el orden correcto. Tocá de nuevo para sacarlo.</p><div>${items.map((t, i) => `<button class="opt${seq.includes(t) ? " picked" : ""}" data-i="${i}">${seq.includes(t) ? seq.indexOf(t) + 1 + ". " : ""}${t}</button>`).join("")}</div><button class="go" id="chk" ${seq.length < items.length ? "disabled" : ""}>Confirmar orden</button>`);
    document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
      const t = items[b.dataset.i];
      seq = seq.includes(t) ? seq.filter(x => x !== t) : seq.concat(t);
      draw();
    });
    $("chk").onclick = () => {
      const ok = seq.every((t, i) => t === q.s[i]);
      const order = q.s.map((t, i) => `${i + 1}. ${t}`).join("<br>");
      openCard(`<span class="tag">${q.tag}</span><h2>${q.q}</h2><div id="fb">${feedback(ok, { p: q.p, e: q.e + "<br><br><strong>Orden correcto:</strong><br>" + order })}</div>`);
      wireNext();
    };
  };
  draw();
}

function askWish(q) {
  openCard(`<span class="tag">${q.tag}</span><h2>${q.q}</h2>${q.o.map((o, i) => `<button class="opt" data-i="${i}">${o.t}</button>`).join("")}<div id="fb"></div>`);
  document.querySelectorAll(".opt").forEach(b => b.onclick = () => {
    const o = q.o[b.dataset.i];
    document.querySelectorAll(".opt").forEach(x => x.disabled = true);
    b.classList.add(o.r > 0 ? "ok" : "no");
    addScore(o.r);
    $("fb").innerHTML = `<div class="fb ${o.r > 0 ? "good" : "bad"}"><strong>${o.r > 0 ? "Ganás" : "Perdés"} ${Math.abs(o.r)} ofrendas.</strong><br>${o.m}</div><button class="go" id="next">Continuar</button>`;
    wireNext();
  });
}

function showEvent(ev, good) {
  addScore(ev.d);
  openCard(`<span class="tag">${good ? "Bendición" : "Peligro"}</span><h2>${ev.t}</h2><div class="fb ${good ? "good" : "bad"}"><strong>${ev.d > 0 ? "Ganás" : "Perdés"} ${Math.abs(ev.d)} ofrendas.</strong></div><button class="go" id="next">Continuar</button>`);
  wireNext();
}

function finish() {
  let msg;
  if (score >= 1000) msg = "Llegaste a las mil ofrendas. Dios te concede un deseo.";
  else if (score >= 700) msg = "Un reinado admirable. Estuviste muy cerca de las mil ofrendas.";
  else if (score >= 400) msg = "Un buen camino. Aún te falta sabiduría para alcanzar las mil ofrendas.";
  else msg = "Llegaste al final, pero con pocas ofrendas. Probá de nuevo.";
  openCard(`<span class="tag">Fin del recorrido</span><h2>Terminaste el shofar</h2><p class="big">${score} ofrendas</p><p>${msg}</p><button class="go" id="again">Jugar de nuevo</button>`);
  $("again").onclick = () => location.reload();
}

async function land() {
  if (pos === N - 1) return finish();
  if (BAD.includes(pos)) return showEvent(nextBad(), false);
  if (GOOD.includes(pos)) return showEvent(nextGood(), true);
  const q = nextQ();
  if (q.k === "order") askOrder(q); else if (q.k === "wish") askWish(q); else askMC(q);
}

async function roll() {
  if (busy) return;
  busy = true;
  $("roll").disabled = true;
  const faces = "⚀⚁⚂⚃⚄⚅";
  $("die").classList.add("roll");
  for (let i = 0; i < 9; i++) { $("die").textContent = faces[Math.floor(Math.random() * 6)]; await sleep(80); }
  $("die").classList.remove("roll");
  const n = 1 + Math.floor(Math.random() * 6);
  $("die").textContent = faces[n - 1];
  $("status").textContent = `Salió ${n}. Avanzás ${n} casillero${n > 1 ? "s" : ""}.`;
  const steps = Math.min(n, N - 1 - pos);
  for (let i = 0; i < steps; i++) { pos++; place(pos); await sleep(260); }
  await sleep(250);
  $("roll").disabled = false;
  await land();
}

const RULES = `<h2>Cómo se juega</h2>
<p>Sos parte de la historia de Melajim Alef, perakim 1 a 3, y recorrés un tablero con forma de shofar para juntar ofrendas.</p>
<ul>
<li>Tirá el dado y avanzá esa cantidad de casilleros.</li>
<li>Los casilleros azules sacan una carta de pregunta: de opción múltiple, de ordenar pasos o de decidir qué hacer.</li>
<li>Si respondés bien, ganás ofrendas. Si fallás, no sumás, pero leés la explicación.</li>
<li>Los casilleros verdes dan bendiciones y los rojos traen peligros, como Adoniá o un retraso de Natán, que te hacen perder ofrendas.</li>
<li>Al llegar a la estrella final, termina el juego. Si juntaste 1000 ofrendas, Dios te concede un deseo. Conseguirlas es muy difícil.</li>
</ul>`;

function openInfo(first) {
  $("infoCard").innerHTML = RULES + `<button class="go" id="closeInfo">${first ? "¡A jugar!" : "Volver al juego"}</button>`;
  $("info").classList.remove("hidden");
  $("closeInfo").onclick = () => $("info").classList.add("hidden");
}

buildBoard();
$("roll").onclick = roll;
$("rulesBtn").onclick = () => openInfo(false);
openInfo(true);