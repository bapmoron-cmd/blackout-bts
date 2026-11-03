/* BLACKOUT FACTORY — Fiches de cours et preuves de lecture
   Les notions proviennent du guide sur les 25 premières diapositives.
   Activité documentaire fictive ; les valeurs d'exemple ne remplacent pas les normes applicables. */
(function(){
"use strict";
const LESSONS=[
[
 {title:"Surcharge, court-circuit et isolement",slides:"5, 6 et 11",lead:"Une surcharge est une surintensité prolongée dans un circuit qui reste électriquement sain. Un court-circuit correspond à une liaison accidentelle de faible impédance. Un défaut d’isolement peut créer un courant de fuite vers une masse.",steps:["Chercher d’abord si le courant a augmenté progressivement ou brutalement.","Identifier la nature probable du défaut à partir des relevés, sans déduire une cause certaine d’un seul indice.","Une surcharge prolongée peut échauffer le câble par effet Joule : les pertes augmentent comme I²."],formula:"Pertes par effet Joule = R × I²",example:"Dans le dossier M2, 16 A puis 22 A puis 28 A pendant plusieurs minutes évoquent une surcharge plutôt qu’un court-circuit franc.",tip:"Ne pas confondre surcharge et court-circuit : leurs modes de déclenchement sont différents."},
 {title:"Les trois courants : IB, In et Iz",slides:"9, 10 et 13",lead:"IB est le courant d’emploi demandé par le circuit. In est le calibre nominal de la protection (Ir lorsqu’il est réglable). Iz est le courant admissible du câble compte tenu de son environnement réel.",steps:["On calcule ou relève d’abord IB.","On choisit une protection In adaptée au besoin et au câble.","On vérifie la règle de surcharge de base, puis les contrôles complémentaires."],formula:"IB ≤ In (ou Ir) ≤ Iz",example:"IB = 18 A, In = 20 A et Iz = 24 A : 18 ≤ 20 ≤ 24. La première condition est respectée, pas encore la conformité globale.",tip:"In n’est pas l’intensité maximale du câble : cette grandeur est Iz."},
 {title:"Les fonctions thermique et magnétique",slides:"11 à 14",lead:"Sur un disjoncteur magnétothermique, la partie thermique traite surtout les surcharges prolongées ; la partie magnétique réagit rapidement à de fortes surintensités, notamment les courts-circuits.",steps:["Pour une surcharge, le déclenchement peut être temporisé.","Pour un court-circuit, on recherche une coupure rapide adaptée au défaut.","Une courbe de déclenchement doit être compatible avec la tenue du câble."],formula:"Surcharge : IB ≤ In ≤ Iz et I2 ≤ 1,45 × Iz",example:"Une machine peut subir un courant de démarrage temporaire supérieur à IB : ce n’est pas automatiquement un court-circuit.",tip:"Le dispositif se choisit sur la base de ses fonctions et de sa courbe, pas uniquement de son calibre."}
],
[
 {title:"Le courant de court-circuit",slides:"12 et 13",lead:"Un court-circuit est une liaison accidentelle de faible impédance entre deux points de potentiels différents. Sa valeur dépend de la source et de l’impédance de la boucle.",steps:["Un défaut de faible impédance peut engendrer une très grande intensité.","La source, le transformateur, les connexions et les câbles influencent Icc.","La tenue thermique de la canalisation et la rapidité de coupure doivent être vérifiées."],formula:"Icc dépend de l’impédance totale du circuit de défaut",example:"Un déclenchement très rapide et un courant de défaut élevé orientent le diagnostic vers un court-circuit.",tip:"La valeur d’Icc n’est pas le courant d’emploi normal."},
 {title:"Icc et pouvoir de coupure",slides:"12 à 14",lead:"Le pouvoir de coupure est l’aptitude assignée d’un dispositif à interrompre un courant de court-circuit, selon sa norme et ses conditions. Les notations Icu et Icn sont utilisées selon la famille d’appareils.",steps:["Relever le courant de court-circuit présumé au point d’installation.","Comparer Icc au pouvoir de coupure approprié du dispositif.","Une filiation n’est admise que si l’association est validée par les tableaux constructeur."],formula:"Vérifier : pouvoir de coupure adapté à Icc",example:"Icc présumé = 8 kA et Icu = 6 kA : l’appareil seul ne convient pas sans association dûment validée.",tip:"Il ne suffit pas que le calibre In soit correct : le pouvoir de coupure compte aussi."},
 {title:"Le défaut minimal en bout de ligne",slides:"12 à 14",lead:"Un câble long apporte une impédance supplémentaire. Le courant de défaut le plus faible, notamment en bout de ligne, doit être pris en compte pour s’assurer que le dispositif coupe dans le temps requis.",steps:["Examiner le courant maximal de court-circuit pour le pouvoir de coupure.","Examiner le courant minimal de défaut pour la rapidité d’ouverture.","Contrôler les conditions de coupure et les courbes du fabricant."],formula:"La valeur du courant de défaut dépend de l’impédance de la boucle",example:"Un défaut en bout de câble long peut produire un courant trop faible pour activer immédiatement le déclencheur magnétique.",tip:"Les courants de défaut maximal et minimal servent à deux vérifications différentes."}
],
[
 {title:"À quoi servent IB, In et Iz ?",slides:"9 et 10",lead:"IB décrit le besoin réel du récepteur, In le calibre assigné du dispositif de protection et Iz le courant que le câble peut transporter dans ses conditions de pose.",steps:["IB : déterminé à partir du récepteur.","In (ou Ir) : lu sur le dispositif de protection ou son réglage.","Iz : déduit du câble, de sa section et de sa pose, après correction."],formula:"IB ≤ In (ou Ir) ≤ Iz",example:"Un câble identique posé en goulotte et enterré ne possède pas nécessairement le même Iz.",tip:"Choisir un disjoncteur sans connaître Iz du câble est insuffisant."},
 {title:"Les vérifications contre la surcharge",slides:"11, 13 et 14",lead:"La règle IB ≤ In ≤ Iz est indispensable pour une protection classique contre les surcharges, mais ne constitue pas à elle seule un dimensionnement complet.",steps:["Comparer IB au calibre In (ou Ir).","Comparer le calibre à Iz corrigé.","Vérifier aussi I2 ≤ 1,45 × Iz, ainsi que les conditions de court-circuit et de chute de tension."],formula:"IB ≤ In ≤ Iz ; I2 ≤ 1,45 × Iz",example:"IB = 22 A, In = 25 A et Iz = 28 A : première condition satisfaite. IB = 20 A, In = 32 A et Iz = 27 A : condition refusée.",tip:"Si In > Iz, la protection peut autoriser un échauffement dommageable du conducteur."},
 {title:"Différentiel et protection des surintensités",slides:"5, 8 et 14",lead:"Un interrupteur différentiel surveille le courant résiduel : il contribue à la protection contre les chocs électriques suivant l’installation. Il ne protège pas à lui seul contre les surcharges et courts-circuits.",steps:["Distinguer risque de choc électrique et risque thermique du câble.","Associer les fonctions de protection appropriées.","Un disjoncteur différentiel peut réunir plusieurs fonctions dans un même appareil."],formula:"Différentiel 30 mA ≠ protection magnétothermique",example:"Installer uniquement un interrupteur différentiel ne dispense pas d’un dispositif adapté contre les surintensités.",tip:"Ne jamais confondre sensibilité différentielle exprimée en mA et calibre du circuit exprimé en A."}
],
[
 {title:"Protéger une dérivation",slides:"15 et 16",lead:"Une diminution de section peut réduire la capacité admissible d’un tronçon. En principe, le dispositif adapté se place à l’origine de la dérivation lorsque la protection amont ne protège pas correctement le nouveau câble.",steps:["Repérer le point exact du changement de section.","Déterminer Iz réel du tronçon réduit.","Prévoir la protection nécessaire selon la pose et le référentiel applicable ; toute dérogation demande des conditions précises."],formula:"Protection adaptée à la capacité du nouveau tronçon",example:"Sur un départ 50 mm² avec dérivation 10 mm², on ne suppose jamais que la protection amont couvre automatiquement le plus petit câble.",tip:"La seule longueur inférieure à 3 m ne constitue pas une dérogation universelle."},
 {title:"Reconnaître le mode de pose",slides:"18 à 20",lead:"La méthode de pose détermine comment la chaleur s’évacue : conduit, goulotte, chemin de câbles, fixation directe ou câble enterré. Ces configurations influencent le courant admissible tabulé.",steps:["Identifier le cheminement réel sur plan et photographie.","Identifier le type de câble et le nombre de conducteurs chargés.","Lire la méthode de référence et la colonne correspondante du tableau."],formula:"Iz réel dépend du mode de pose et des facteurs de correction",example:"Un câble entouré d’isolant thermique se refroidit généralement moins bien qu’un câble à l’air libre.",tip:"Deux câbles de même section peuvent avoir des Iz différents."},
 {title:"Fonction du conducteur de protection PE",slides:"7 et 8",lead:"Le conducteur de protection PE sert aux fonctions de sécurité électrique. En fonctionnement normal, il n’est pas destiné à transporter le courant d’emploi du récepteur.",steps:["Repérer les conducteurs actifs qui véhiculent le courant utile.","Repérer le PE et sa fonction de protection.","Ne pas confondre PE avec neutre ou conducteur de phase."],formula:"PE = conducteur de protection",example:"Le moteur fonctionne normalement avec ses conducteurs actifs ; le PE contribue à la protection en cas de défaut.",tip:"Le PE ne remplace pas un conducteur actif."}
],
[
 {title:"Température de fonctionnement du câble",slides:"21 et 22",lead:"La température maximale de service du conducteur dépend de l’isolant. Pour les familles usuelles, PVC : 70 °C ; PR/XLPE : 90 °C. Cela ne désigne pas la température ambiante de l’atelier.",steps:["Identifier l’isolant réel du câble.","Repérer la température ambiante ou du sol et la référence du tableau.","Appliquer le coefficient adapté à cette situation."],formula:"Iz corrigé = Iz tabulé × Ktemp",example:"Une ambiance plus chaude réduit souvent Iz car la chaleur du conducteur s’évacue moins bien.",tip:"Ne pas lire 70 °C comme la température de l’air du local."},
 {title:"Appliquer les facteurs de correction",slides:"22 et 23",lead:"Les valeurs tabulées sont établies dans des conditions de référence. La température et le groupement sont des contraintes supplémentaires, corrigées par des facteurs spécifiques.",steps:["Relever Iz tabulé dans la colonne de pose appropriée.","Lire les coefficients applicables, sans en inventer les valeurs.","Multiplier Iz tabulé par les coefficients pour obtenir Iz réel."],formula:"Iz réel = Iz tabulé × Ktemp × Kgroupement",example:"32 A × 0,87 = 27,84 A. Pour deux coefficients 0,91 et 0,80 : Kglobal = 0,728.",tip:"Les coefficients de correction se multiplient, ils ne s’additionnent pas."},
 {title:"Groupement et échauffement des câbles",slides:"23 à 25",lead:"Des circuits chargés rapprochés peuvent se réchauffer mutuellement. Selon leur disposition et leur espacement, la valeur admissible doit être corrigée par un facteur de groupement.",steps:["Identifier combien de circuits chargés sont réellement regroupés.","Lire le coefficient correspondant au mode de pose et à la disposition.","Appliquer ce coefficient avec les autres facteurs pertinents."],formula:"Iz réel = Iz tabulé × Ktemp × Kgroupement",example:"Iz tabulé = 40 A, Ktemp = 0,91, Kgroupement = 0,75 : Iz réel = 27,3 A. Une protection 32 A ne respecte pas In ≤ Iz.",tip:"Le nombre de câbles visibles n’est pas toujours égal au nombre de circuits chargés à retenir."}
],
[
 {title:"Calculer le courant d’emploi triphasé",slides:"9 et 10",lead:"Pour une charge triphasée équilibrée, si P est la puissance électrique active absorbée, le courant d’emploi dépend de la tension entre phases et du facteur de puissance. Ne pas ajouter un rendement si P est déjà absorbée.",steps:["Convertir la puissance en watts.","Vérifier que U est la tension composée entre phases.","Appliquer le cosφ et interpréter le courant de fonctionnement normal."],formula:"IB = P / (√3 × U × cosφ)",example:"P = 12 000 W, U = 400 V et cosφ = 0,85 donnent IB ≈ 20,38 A.",tip:"Si P est une puissance mécanique utile, il faut alors tenir compte du rendement η."},
 {title:"Déterminer Iz corrigé",slides:"18 et 21 à 25",lead:"Le courant admissible réel dépend d’Iz tabulé et des facteurs de correction liés aux conditions d’installation. C’est la valeur corrigée qu’il faut comparer à In.",steps:["Trouver la bonne méthode de pose et le courant tabulé.","Relever Ktemp et Kgroupement pour les conditions du cas.","Multiplier tous les facteurs retenus et contrôler le résultat."],formula:"Iz = Iz tabulé × Ktemp × Kgroupement",example:"32 A × 0,91 × 0,80 = 23,296 A, soit 23,30 A.",tip:"Ne jamais comparer In uniquement avec le courant tabulé sans appliquer les facteurs."},
 {title:"Refuser ou valider l’association",slides:"13 à 15 et 18",lead:"Une première étape consiste à comparer IB, In et Iz réel. Si In > Iz, le câble est insuffisamment protégé contre les surcharges dans les hypothèses retenues.",steps:["Comparer IB, In et Iz réel.","En cas d’échec, chercher une canalisation ou une pose avec une intensité admissible suffisante.","Vérifier encore I2, Icc, tenue au défaut, chute de tension et conditions de coupure."],formula:"Iz tabulé minimal = In / (Ktemp × Kgroupement)",example:"In = 25 A, Kglobal = 0,728 → Iz tabulé minimal ≈ 34,34 A. La section se choisira dans les tableaux correspondants.",tip:"La relation IB ≤ In ≤ Iz n’est pas une garantie de conformité complète."}
]
];
// Contrôles de compréhension : distincts de la question notée et sans attribution de points.
const PROOFS=[
[
 [0,"Une surcharge suppose-t-elle obligatoirement une liaison directe phase-neutre ?",["Oui, c’est sa définition","Non, le circuit peut rester électriquement sain","Oui, mais uniquement sur un moteur"],1,"Une surcharge peut apparaître dans un circuit sain soumis à un courant trop important."],
 [1,"Quelle grandeur caractérise la capacité réelle du câble dans sa pose ?",["Iz","In","IB"],0,"Iz caractérise la tenue du conducteur dans ses conditions réelles de pose."],
 [2,"Quelle affirmation décrit la protection thermique ?",["Elle mesure la résistance de terre","Elle participe à la coupure des surcharges prolongées","Elle corrige le facteur de puissance"],1,"La fonction thermique traite les surintensités prolongées selon la caractéristique du dispositif."],
 [1,"Peut-on conclure à la conformité totale grâce à la seule relation IB ≤ In ≤ Iz ?",["Oui","Non, il reste d’autres vérifications","Oui, si In vaut 20 A"],1,"Il faut notamment contrôler I2, le court-circuit et les conditions de coupure."]
],
[
 [0,"Quand l’impédance de la boucle de défaut diminue, que devient généralement Icc ?",["Il augmente","Il devient systématiquement nul","Il ne change jamais"],0,"Une faible impédance de défaut peut laisser circuler une très forte intensité."],
 [1,"Quelle donnée décrit l’aptitude d’un appareil à interrompre un court-circuit ?",["Le cosφ du moteur","Le pouvoir de coupure","La section du PE"],1,"Le pouvoir de coupure doit être compatible avec l’Icc présumé et la norme de l’appareil."],
 [1,"Peut-on se fier au seul calibre In pour choisir un disjoncteur ?",["Oui","Non, le pouvoir de coupure et la courbe comptent aussi","Uniquement si la machine est neuve"],1,"Le calibre ne suffit pas pour vérifier la protection contre les courts-circuits."],
 [2,"Pourquoi les défauts en bout de ligne peuvent-ils être problématiques ?",["Le courant de défaut peut ne pas suffire à provoquer une coupure assez rapide","Parce que le câble devient un générateur","Parce que les appareils ne consomment plus"],0,"L’impédance du câble peut diminuer le courant de défaut, d’où la nécessité de vérifier les temps de coupure."]
],
[
 [0,"À quelle grandeur rattache-t-on le besoin du récepteur ?",["Iz","IB","Icu"],1,"IB est le courant d’emploi de la charge."],
 [1,"Que faut-il vérifier en plus de IB ≤ In ≤ Iz ?",["Uniquement la couleur des câbles","I2 et les autres conditions techniques pertinentes","Seulement la température extérieure annuelle"],1,"I2, court-circuit, chute de tension et conditions de coupure restent à examiner."],
 [1,"Si In dépasse Iz réel, quelle est la première conséquence technique ?",["Le câble peut être mal protégé contre les surcharges","Le courant d’emploi augmente automatiquement","Le différentiel devient plus sensible"],0,"La protection pourrait laisser durer un courant supérieur à la capacité réelle du câble."],
 [2,"Quel appareil combine généralement la fonction différentielle et la protection des surintensités ?",["L’interrupteur différentiel seul","Le disjoncteur différentiel adapté","Une prise de courant ordinaire"],1,"Le disjoncteur différentiel réunit ces fonctions ; l’interrupteur différentiel seul n'assure pas les surintensités."]
],
[
 [0,"Quel élément doit être étudié lorsqu’une canalisation passe de 50 mm² à 10 mm² ?",["La capacité admissible de la dérivation","La peinture du câble","Le numéro de série du moteur uniquement"],0,"La diminution de section peut réduire Iz et nécessiter une protection adaptée à l’origine du tronçon."],
 [0,"La longueur inférieure à 3 mètres suffit-elle à autoriser automatiquement un déplacement de protection ?",["Oui sans condition","Non, d’autres conditions doivent être satisfaites","Oui si la gaine est bleue"],1,"Les dérogations sont encadrées : la longueur seule ne les rend pas automatiquement valables."],
 [1,"Quelle donnée faut-il connaître pour lire le bon tableau d’Iz ?",["Le mode de pose réel","La couleur des murs","La marque du tableau uniquement"],0,"Le mode de pose influence le refroidissement et la colonne du tableau à consulter."],
 [2,"En fonctionnement normal, le PE transporte-t-il le courant d’emploi ?",["Oui, en permanence","Non, il sert à la protection","Oui, s’il est vert et jaune"],1,"Le conducteur PE remplit une fonction de protection, pas une fonction de conducteur actif."]
],
[
 [0,"À quoi correspondent habituellement les 70 °C du câble PVC dans le cours ?",["À la limite de fonctionnement normal du conducteur/isolant","À la température du sol mesurée","À la température obligatoire du local"],0,"70 °C est une référence liée à la famille d’isolant, pas une température d’ambiance."],
 [1,"Quand Ktemp est inférieur à 1, que devient Iz après correction ?",["Il diminue","Il est multiplié par 100","Il devient égal à In"],0,"Un facteur inférieur à 1 réduit la valeur admissible tabulée."],
 [1,"Comment combine-t-on deux coefficients de correction applicables ?",["En les additionnant","En les multipliant","En choisissant toujours le plus grand"],1,"Le facteur global résulte du produit des facteurs applicables."],
 [2,"Pourquoi le groupement peut-il réduire Iz ?",["Parce que les câbles regroupés peuvent se réchauffer mutuellement","Parce qu’ils deviennent plus longs automatiquement","Parce que la tension baisse toujours de moitié"],0,"Le voisinage de circuits chargés peut diminuer le refroidissement, d'où la correction."]
],
[
 [0,"Si la puissance P est déjà la puissance électrique absorbée, faut-il ajouter le rendement au dénominateur ?",["Oui, toujours","Non, pas dans cette formule","Uniquement si cosφ vaut 1"],1,"On introduit η si P est mécanique utile, pas si elle est électrique absorbée."],
 [1,"Quelle intensité doit-on comparer au calibre In après correction de la pose ?",["Iz tabulé brut","Iz réel corrigé","La tension du tableau"],1,"La valeur admissible réelle corrigée doit être compatible avec le calibre."],
 [2,"Que faire lorsque In > Iz réel ?",["Accepter sans vérification","Revoir le couple câble/protection ou la pose","Supprimer le PE"],1,"La première condition de protection des surcharges est insuffisante."],
 [2,"Comment retrouver l’intensité tabulée minimale à partir du calibre et d’un facteur K ?",["In × K","In / K","In + K"],1,"Pour Iz tabulé × K ≥ In, il faut Iz tabulé ≥ In / K."]
]
];
let dialog=null, selection=-1, verified=false, wrongQuiz=false, quizAttempts=0, context={mission:0,topic:0,question:0,mandatory:false,rewind:false}, screen="read";
const escape=t=>String(t??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#39;"}[c]));
function getLesson(){return LESSONS[context.mission]?.[context.topic]||LESSONS[0][0];}
function getProof(){return PROOFS[context.mission]?.[context.question]||PROOFS[0][0];}
function header(){return '<div class="course-banner"><span>'+ (context.mandatory?'TRANSMISSION INTERCEPTÉE PAR L’OMBRE':'DOSSIER TECHNIQUE DE L’ENQUÊTE')+'</span><button type="button" class="course-exit" data-bf-course="exit" aria-label="Fermer la fiche">✕</button></div>';}
function image(){const id=context.mission*3+context.topic;const col=id%6, row=Math.floor(id/6);const posX=String(col*20)+'%',posY=String(row*50)+'%';return '<div class="course-image" style="--course-x:'+posX+';--course-y:'+posY+'"></div>';}
function readView(){
 const x=getLesson();
 return '<div class="course-page">'+header()+'<div class="course-inner"><div class="course-aside">'+image()+'<div class="course-source">EXTRAIT PÉDAGOGIQUE<br><b>PowerPoint — diapos '+escape(x.slides)+'</b></div><img src="./assets/'+(context.mandatory?'ombre':'maya')+'.'+(context.mandatory?'webp':'jpg')+'" class="course-avatar" alt="'+(context.mandatory?'Portrait du saboteur L’Ombre':'Portrait de Maya Volt')+'"><div class="course-character">'+(context.mandatory?'L’OMBRE : « Tu veux avancer ? Commence par lire la documentation, génie ! »':'MAYA VOLT : « Les documents contiennent la méthode pour résoudre la mission. »')+'</div></div><article class="course-main"><div class="course-kicker">'+(context.mandatory?'PROTOCOLE DE RATTRAPAGE OBLIGATOIRE':'ARCHIVE DE COURS CONSULTABLE')+'</div><h2>'+escape(x.title)+'</h2><p class="course-lead">'+escape(x.lead)+'</p><div class="course-formula"><div>REPÈRE TECHNIQUE</div><strong>'+escape(x.formula)+'</strong></div><h3>Méthode à retenir</h3><ol>'+x.steps.map(s=>'<li>'+escape(s)+'</li>').join('')+'</ol><div class="course-example"><b>EXEMPLE APPLIQUÉ</b><p>'+escape(x.example)+'</p></div><div class="course-tip"><b>À NE PAS CONFONDRE</b><p>'+escape(x.tip)+'</p></div><div class="course-footer"><span>Référence : support original, diapositives '+escape(x.slides)+'. Exemples pédagogiques, non dimensionnement définitif.</span><button class="btn '+(context.mandatory?'':'outline')+'" data-bf-course="'+(context.mandatory?'quiz':'exit')+'">'+(context.mandatory?'J’ai lu — vérifier ma compréhension →':'Retour à mes indices')+'</button></div></article></div></div>';
}
function quizView(){
 const p=getProof();
 return '<div class="course-page">'+header()+'<div class="course-inner"><div class="course-aside"><img class="course-large-avatar" src="./assets/ombre.webp" alt="L’Ombre, le saboteur"><p class="course-character">L’OMBRE : « Alors, tu as vraiment lu ? Une seule bonne réponse et je te laisse repartir. »</p><div class="course-source">MISSION '+(context.mission+1)+' · QUESTION '+(context.question+1)+'</div></div><article class="course-main"><div class="course-kicker">CONTRÔLE DE LECTURE · NON NOTÉ</div><h2>Prouve que tu as compris</h2><p class="course-lead">Ce contrôle porte sur le rappel de cours, pas sur ton score. Tu peux relire la fiche si nécessaire.</p><div class="course-check"><h3>'+escape(p[1])+'</h3><div class="course-options">'+p[2].map((text,i)=>'<button type="button" data-bf-course="select" data-i="'+i+'" class="course-option '+(selection===i?'selected':'')+'" '+(verified?'disabled':'')+'><b>'+String.fromCharCode(65+i)+'</b>'+escape(text)+'</button>').join('')+'</div>'+(wrongQuiz?'<div class="course-fail">Preuve insuffisante. Relis la fiche technique et tente une autre réponse.</div>':'')+(verified?'<div class="course-pass">Lecture validée. '+escape(p[4])+'</div>':'')+'</div><div class="course-footer"><button class="btn outline" data-bf-course="read">← Relire la fiche</button>'+(verified?'<button class="btn" data-bf-course="done">'+(context.rewind?'Retour imposé à la mission précédente →':'Revenir à la correction →')+'</button>':'<button class="btn" data-bf-course="verify" '+(selection<0?'disabled':'')+'>Valider ma compréhension</button>')+'</div></article></div></div>';
}
function render(){
 if(!dialog)return;
 dialog.innerHTML='<div class="course-shell" role="dialog" aria-modal="true" aria-labelledby="course-title">'+(screen==="read"?readView():quizView())+'</div>';
 const title=dialog.querySelector('.course-main h2');if(title)title.id='course-title';
 const first=dialog.querySelector('.course-exit');if(first)first.focus({preventScroll:true});
}
function openLesson(m,t,mandatory=false,q=0,rewind=false){
 if(dialog)return;
 context={mission:Math.max(0,Math.min(5,m)),topic:Math.max(0,Math.min(2,t)),question:Math.max(0,Math.min(3,q)),mandatory,rewind};
 selection=-1;verified=false;wrongQuiz=false;quizAttempts=0;screen="read";
 dialog=document.createElement('div');dialog.className='course-overlay';
 document.body.appendChild(dialog);document.body.classList.add('course-locked');
 render();
}
function openForError(m,q){
 if(dialog)return;
 const p=PROOFS[m]?.[q];if(!p)return;
 const status=window.BLACKOUT_GAME?.getStatus?.()||{};
 openLesson(m,p[0],true,q,!!status.pendingRewind);
}
function openFromEvidence(m,topic){openLesson(m,topic,false,0,false);}
function close(){
 if(!dialog)return;
 if(context.mandatory&&!verified){ // L'erreur reste à corriger avant de poursuivre.
   // Le jeu relancera cette page au clic sur « Défi suivant ».
 }
 dialog.remove();dialog=null;document.body.classList.remove('course-locked');
 const fb=document.querySelector('.feedback.bad');if(fb)fb.scrollIntoView({block:'nearest',behavior:'smooth'});
}
function complete(){
 if(context.mandatory&&verified)window.BLACKOUT_GAME?.markRemediationDone?.();
 close();
}
document.addEventListener('click',function(e){
 const b=e.target.closest('[data-bf-course]');
 if(!b)return;
 const act=b.dataset.bfCourse;
 if(act==='exit'){close();return;}
 if(act==='read'){screen='read';render();return;}
 if(act==='quiz'){screen='quiz';render();return;}
 if(act==='select'){if(!verified){selection=Number(b.dataset.i);wrongQuiz=false;render();}return;}
 if(act==='verify'){
  if(selection<0||verified)return;
  quizAttempts++;const p=getProof();
  if(selection===p[3]){verified=true;wrongQuiz=false;}
  else{wrongQuiz=true;selection=-1;}
  render();return;
 }
 if(act==='done'){if(verified)complete();}
});
document.addEventListener('click',function(e){
 const b=e.target.closest('[data-act="course"]');if(!b)return;
 e.preventDefault();
 const s=window.BLACKOUT_GAME?.getStatus?.()||{};
 openFromEvidence(s.mission||0,Number(b.dataset.index)||0);
});
document.addEventListener('keydown',function(e){
 if(!dialog)return;
 if(e.key==='Escape'){e.preventDefault();close();}
});
window.BLACKOUT_PEDAGOGY={openForError,openFromEvidence};
if(document.readyState==='loading'){
 document.addEventListener('DOMContentLoaded',function(){
   const st=window.BLACKOUT_GAME?.getStatus?.();
   if(st?.awaitingRemediation&&document.querySelector('.feedback.bad'))openForError(st.mission,st.question);
 },{once:true});
}else{
 setTimeout(function(){
   const st=window.BLACKOUT_GAME?.getStatus?.();
   if(st?.awaitingRemediation&&document.querySelector('.feedback.bad'))openForError(st.mission,st.question);
 },200);
}
})();