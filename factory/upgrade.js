/* BLACKOUT FACTORY — interface V2 : 18 visuels + L'Ombre
   Module sans dépendance. Les exercices et le barème d'origine restent inchangés. */
(function(){
"use strict";
const $=(s,root=document)=>root.querySelector(s);
const $$=(s,root=document)=>Array.from(root.querySelectorAll(s));
const taunts=[
 [
 "Une surcharge qui grimpe pendant des minutes… et tu l'as ratée ? Même mon grille-pain avait compris le scénario !",
 "28 A, 20 A, 24 A… Tu veux une calculatrice ou tu préfères directement commander l'extincteur ?",
 "Thermique ou magnétique ? Tu as choisi la technique du pifomètre industriel. Magnifique !",
 "IB, In, Iz… Trois petites lettres, et te voilà au rayon barbecue des câbles."
 ],
 [
 "Un défaut brutal et violent… Ton diagnostic a déclenché plus vite que le disjoncteur !",
 "8 kA contre 6 kA ? Le pouvoir de coupure est en PLS. Merci pour ce grand moment d'électrotechnique.",
 "Magnétique, thermique… À ce rythme, même le disjoncteur demande une formation de rattrapage !",
 "Le bout de ligne te salue : dommage, tu as oublié de vérifier que la protection y fonctionne."
 ],
 [
 "IB, In, Iz : elles étaient pourtant toutes invitées à la fête. Tu as lu le carton d'invitation ?",
 "22, 25, 28… Trois nombres bien rangés ! Et toi, tu as réussi à faire sauter leur ordre.",
 "32 A dans un câble qui n'en supporte que 27 ? Tu inventes le chauffage par canalisation !",
 "Le différentiel ne fait pas tout, champion ! À la prochaine, tu lui demanderas aussi de préparer le café."
 ],
 [
 "Une dérivation qui rétrécit et pas de protection à l'origine ? Mes câbles te remercient pour le sauna.",
 "« C'est moins de 3 mètres, donc tout va bien »… Voilà une belle légende urbaine de chantier !",
 "Même câble, même section, mais pas la même pose ! Les lois de la thermique ne prennent pas de congés.",
 "Faire passer le courant normal dans le PE ? Tu veux que le conducteur de protection dépose plainte ?"
 ],
 [
 "Tu as oublié qu'il fait chaud ? Parfait, l'atelier se transforme tranquillement en four à pizzas.",
 "32 fois 0,87… Tu viens de réaliser le premier calcul à résistance variable de ton imagination !",
 "Les coefficients se multiplient, ils ne font pas une réunion de famille pour s'additionner !",
 "40 × 0,91 × 0,75… Le câble chauffe déjà rien qu'en regardant ta réponse."
 ],
 [
 "Dernière mission et tu me sors ce calcul ? Je vais encadrer ta copie dans mon repaire !",
 "La correction de température et le groupement viennent de t'envoyer une lettre de réclamation.",
 "In = 25 A et Iz = 23,30 A… On peut dire que tu joues avec le feu. Littéralement.",
 "Le courant tabulé minimal ? Tu allais valider ça les yeux fermés ? Mon sabotage devient trop facile !"
 ]
];
const fallback = "Raté ! J'adore quand tu confonds les indices : ça me laisse tout le temps de semer le chaos dans l'usine.";
let modal=null;
function upgradeEvidence(){
 const missionNumber=Number($('.missionHeader .num')?.textContent||'0');
 if(missionNumber<1||missionNumber>6)return;
 $$('.evidenceGrid .evidence').forEach((card,i)=>{
   const icon=$('.ico',card);
   if(!icon || icon.classList.contains('evidenceIconUpgraded'))return;
   const id=(missionNumber-1)*3+i;
   if(id<0||id>=18)return;
   const col=id%6, row=Math.floor(id/6);
   icon.textContent='';
   icon.classList.add('evidenceIconUpgraded');
   icon.setAttribute('aria-hidden','true');
   icon.style.setProperty('--sprite-x',(col*20)+'%');
   icon.style.setProperty('--sprite-y',(row*50)+'%');
   card.classList.add('evidenceUpgraded');
   card.setAttribute('aria-label',($('.evidence b',card)?.textContent||'Pièce du dossier')+' — ouvrir l’indice');
 });
}
function currentIndex(){
 const mission=Math.max(0,Math.min(5,Number($('.missionHeader .num')?.textContent||'1')-1));
 const t=$('.qhead span')?.textContent||'';
 const match=t.match(/D.FI\s+(\d+)/i);
 const question=Math.max(0,Math.min(3,Number(match?.[1]||'1')-1));
 return {mission,question};
}
function closeTaunt(){
 if(!modal)return;
 modal.remove();
 modal=null;
 document.body.classList.remove('taunt-open');
 // Donner accès au corrigé original après la réplique.
 const feedback=$('.feedback.bad');
 if(feedback)feedback.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function showTaunt(){
 if(modal||!$('.feedback.bad'))return;
 const {mission,question}=currentIndex();
 const line=taunts[mission]?.[question]||fallback;
 modal=document.createElement('div');
 modal.className='taunt-overlay';
 modal.innerHTML='<section class="taunt-panel" role="dialog" aria-modal="true" aria-labelledby="taunt-title" aria-describedby="taunt-dialogue">'
  +'<div class="taunt-photo"><span class="taunt-photo-label">DOSSIER CONFIDENTIEL · L’OMBRE</span></div>'
  +'<div class="taunt-content"><div class="taunt-alert">⚠ TRANSMISSION INTERCEPTÉE</div>'
  +'<h2 id="taunt-title">MAUVAISE RÉPONSE !</h2>'
  +'<p class="taunt-speaker">L’OMBRE <span>· Saboteur présumé</span></p>'
  +'<div id="taunt-dialogue" class="taunt-speech"><span class="taunt-quote">«</span>'+escapeHtml(line)+'<span class="taunt-quote">»</span></div>'
  +'<p class="taunt-remind">Ton erreur ne restera pas secrète… mais le corrigé technique t’attend juste derrière.</p>'
  +'<button type="button" class="taunt-close btn">⚡ Je reprends l’enquête</button>'
  +'</div></section>';
 document.body.appendChild(modal);
 document.body.classList.add('taunt-open');
 const close=$('.taunt-close',modal);
 close.addEventListener('click',closeTaunt);
 close.focus();
}
function escapeHtml(text){return String(text).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
function init(){
 upgradeEvidence();
 const app=document.getElementById('app');
 if(!app)return;
 const observer=new MutationObserver(()=>upgradeEvidence());
 observer.observe(app,{subtree:true,childList:true});
 // Le code du jeu valide et calcule la note avant cet écouteur : on intervient uniquement après une mauvaise réponse.
 document.addEventListener('click',event=>{
   if(event.target.closest('[data-act="validate"]')){
     requestAnimationFrame(()=>{
       if($('.feedback.bad'))showTaunt();
     });
   }
 });
 document.addEventListener('keydown',event=>{
   if(modal && event.key==='Escape'){event.preventDefault();closeTaunt();}
   if(modal && event.key==='Tab'){
     // Une seule commande dans la fenêtre : conserver le focus dedans.
     event.preventDefault();
     $('.taunt-close',modal)?.focus();
   }
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
else init();
})();