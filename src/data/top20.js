const TOP20_PRODUCTS = [
  {
    id:1,
    name:"Parpaing 20x20x50 cm",
    keywords:["parpaing","bloc","beton","20x20","agglo","agglomere","creux","macon","maÃ§on"],
    cat:"Gros Å“uvre", img:"ðŸ§±", unit:"unitÃ©", searchVolume:"90 500/mois",
    prices:{
      "Leroy Merlin":{price:1.89,url:"https://www.leroymerlin.fr/recherche=parpaing+20x20x50"},
      "Brico DÃ©pÃ´t":{price:1.65,url:"https://www.bricodepot.fr/search?q=parpaing+20x20x50"},
      "Castorama":{price:1.79,url:"https://www.castorama.fr/search?q=parpaing+20x20x50"},
      "Point P":{price:1.55,url:"https://www.pointp.fr/recherche?q=parpaing+20x20x50"}
    },
    popular:true,
    tip:"PrivilÃ©giez Point P pour les grandes quantitÃ©s â€” remise pro dÃ¨s 500 unitÃ©s"
  },
  {
    id:2,
    name:"Plaque BA13 2.50m",
    keywords:["ba13","ba 13","plaque","platre","plÃ¢tre","cloison","doublage","gypse","placo","staff"],
    cat:"Gros Å“uvre", img:"ðŸ“‹", unit:"plaque", searchVolume:"74 000/mois",
    prices:{
      "Leroy Merlin":{price:7.50,url:"https://www.leroymerlin.fr/recherche=plaque+platre+ba13"},
      "Brico DÃ©pÃ´t":{price:6.80,url:"https://www.bricodepot.fr/search?q=plaque+platre+ba13"},
      "Castorama":{price:7.20,url:"https://www.castorama.fr/search?q=plaque+platre+ba13"},
      "Point P":{price:6.40,url:"https://www.pointp.fr/recherche?q=ba13+2.50"}
    },
    popular:true,
    tip:"BA13 standard pour cloisons sÃ¨ches. BA18 pour murs porteurs."
  },
  {
    id:3,
    name:"Laine de verre 100mm R=3.15",
    keywords:["laine","verre","isolation","isolant","thermique","100mm","r3","rouleau","combles","toiture"],
    cat:"Isolation", img:"ðŸŒ¡ï¸", unit:"mÂ²", searchVolume:"60 500/mois",
    prices:{
      "Leroy Merlin":{price:12.90,url:"https://www.leroymerlin.fr/recherche=laine+de+verre+100mm"},
      "Brico DÃ©pÃ´t":{price:11.50,url:"https://www.bricodepot.fr/search?q=laine+de+verre+100mm"},
      "Castorama":{price:13.20,url:"https://www.castorama.fr/search?q=laine+verre+100mm"},
      "Point P":{price:10.80,url:"https://www.pointp.fr/recherche?q=laine+verre+100mm"}
    },
    popular:true,
    tip:"Ã‰ligible CEE â€” jusqu'Ã  30% de remise via les aides Ã  la rÃ©novation"
  },
  {
    id:4,
    name:"Carrelage sol 60x60 grÃ¨s cÃ©rame",
    keywords:["carrelage","sol","60x60","gres","cerame","cÃ©rame","dalle","faience","fÐ°Ã¯ence","rectifie","rectifiÃ©","interieur","exterieur"],
    cat:"Carrelage", img:"â¬œ", unit:"mÂ²", searchVolume:"49 500/mois",
    prices:{
      "Leroy Merlin":{price:22.90,url:"https://www.leroymerlin.fr/recherche=carrelage+sol+60x60"},
      "Brico DÃ©pÃ´t":{price:18.90,url:"https://www.bricodepot.fr/search?q=carrelage+sol+60x60"},
      "Castorama":{price:19.50,url:"https://www.castorama.fr/search?q=carrelage+60x60"}
    },
    popular:true,
    tip:"PrÃ©voir 10% de chutes. Format 60x60 = tendance 2024, plus rapide Ã  poser"
  },
  {
    id:5,
    name:"Parquet flottant chÃªne 14mm",
    keywords:["parquet","flottant","chene","chÃªne","bois","plancher","14mm","contrecolle","contrecollÃ©","stratifie","stratifiÃ©","clipse"],
    cat:"RevÃªtement", img:"ðŸªµ", unit:"mÂ²", searchVolume:"40 500/mois",
    prices:{
      "Leroy Merlin":{price:45.90,url:"https://www.leroymerlin.fr/recherche=parquet+flottant+chene"},
      "Castorama":{price:38.50,url:"https://www.castorama.fr/search?q=parquet+flottant+chene"},
      "Brico DÃ©pÃ´t":{price:35.90,url:"https://www.bricodepot.fr/search?q=parquet+flottant+chene"}
    },
    popular:true,
    tip:"ChÃªne contrecollÃ© 14mm = meilleur rapport qualitÃ©/prix. Ã‰vitez le 8mm en zone humide"
  },
  {
    id:6,
    name:"FenÃªtre PVC 120x120 double vitrage",
    keywords:["fenetre","fenÃªtre","pvc","120x120","double","vitrage","vitree","vitrÃ©e","menuiserie","oscillo","battant","chassis","chÃ¢ssis"],
    cat:"Menuiserie", img:"ðŸªŸ", unit:"unitÃ©", searchVolume:"33 100/mois",
    prices:{
      "Leroy Merlin":{price:320.00,url:"https://www.leroymerlin.fr/recherche=fenetre+pvc+120x120"},
      "Castorama":{price:289.00,url:"https://www.castorama.fr/search?q=fenetre+pvc+120x120"},
      "Brico DÃ©pÃ´t":{price:275.00,url:"https://www.bricodepot.fr/search?q=fenetre+pvc+120x120"},
      "Point P":{price:260.00,url:"https://www.pointp.fr/recherche?q=fenetre+pvc+120x120"}
    },
    popular:true,
    tip:"Ã‰ligible MaPrimeRÃ©nov'. Triple vitrage recommandÃ© si zone froide"
  },
  {
    id:7,
    name:"Ciment CEM II 35kg",
    keywords:["ciment","cem","cem2","cem ii","mortier","35kg","sac","beton","bÃ©ton","liant","hydraulique","prise"],
    cat:"Gros Å“uvre", img:"ðŸ—ï¸", unit:"sac", searchVolume:"27 100/mois",
    prices:{
      "Leroy Merlin":{price:9.80,url:"https://www.leroymerlin.fr/recherche=ciment+35kg"},
      "Brico DÃ©pÃ´t":{price:8.90,url:"https://www.bricodepot.fr/search?q=ciment+35kg"},
      "Point P":{price:8.20,url:"https://www.pointp.fr/recherche?q=ciment+CEM+II+35kg"}
    },
    popular:false,
    tip:"CEM II pour maÃ§onnerie courante. CEM I pour bÃ©ton structurel."
  },
  {
    id:8,
    name:"Lame PVC clipsable chÃªne gris",
    keywords:["lame","pvc","clipsable","vinyle","vinyl","sol","souple","stratifie","stratifiÃ©","gris","chene","chÃªne","click","waterproof","salle de bain"],
    cat:"RevÃªtement", img:"ðŸªµ", unit:"mÂ²", searchVolume:"22 200/mois",
    prices:{
      "Leroy Merlin":{price:19.90,url:"https://www.leroymerlin.fr/recherche=lame+pvc+clipsable"},
      "Castorama":{price:16.90,url:"https://www.castorama.fr/search?q=lame+pvc+clipsable"},
      "Brico DÃ©pÃ´t":{price:15.50,url:"https://www.bricodepot.fr/search?q=lame+pvc+clipsable"}
    },
    popular:true,
    tip:"IdÃ©ale sur plancher chauffant. RÃ©sistante Ã  l'eau â€” parfait salle de bain"
  },
  {
    id:9,
    name:"CÃ¢ble Ã©lectrique 2.5mmÂ² 100m",
    keywords:["cable","cÃ¢ble","electrique","Ã©lectrique","2.5","2.5mm","fil","nf","prise","circuit","rouleau","100m","cuivre"],
    cat:"Ã‰lectricitÃ©", img:"âš¡", unit:"rouleau", searchVolume:"18 100/mois",
    prices:{
      "Leroy Merlin":{price:89.00,url:"https://www.leroymerlin.fr/recherche=cable+electrique+2.5mm2+100m"},
      "Castorama":{price:75.00,url:"https://www.castorama.fr/search?q=cable+electrique+2.5mm2+100m"},
      "Brico DÃ©pÃ´t":{price:69.00,url:"https://www.bricodepot.fr/search?q=cable+electrique+2.5mm2+100m"},
      "Point P":{price:64.00,url:"https://www.pointp.fr/recherche?q=cable+2.5mm2+100m"}
    },
    popular:false,
    tip:"2.5mmÂ² = circuits prises. 1.5mmÂ² = Ã©clairage. Toujours cÃ¢ble NF pour conformitÃ©"
  },
  {
    id:10,
    name:"Colle carrelage C2 25kg",
    keywords:["colle","mortier","carrelage","c2","c1","25kg","sac","joint","faience","fÐ°Ã¯ence","pose","flexible","sol","mur"],
    cat:"Carrelage", img:"ðŸª£", unit:"sac", searchVolume:"14 800/mois",
    prices:{
      "Leroy Merlin":{price:19.90,url:"https://www.leroymerlin.fr/recherche=colle+carrelage+c2+25kg"},
      "Brico DÃ©pÃ´t":{price:16.50,url:"https://www.bricodepot.fr/search?q=mortier+colle+carrelage+c2+25kg"},
      "Point P":{price:15.80,url:"https://www.pointp.fr/recherche?q=colle+carrelage+c2+25kg"}
    },
    popular:false,
    tip:"C2 obligatoire pour grands formats (+60x60). C1 suffit pour petits formats"
  },
  {
    id:11,
    name:"Chauffe-eau Ã©lectrique 200L",
    keywords:["chauffe","eau","electrique","Ã©lectrique","200l","200","litres","ballon","cumulus","thermoplongeur","chauffe-eau","300l","150l"],
    cat:"Plomberie", img:"â™¨ï¸", unit:"unitÃ©", searchVolume:"12 100/mois",
    prices:{
      "Leroy Merlin":{price:449.00,url:"https://www.leroymerlin.fr/recherche=chauffe+eau+200l"},
      "Castorama":{price:389.00,url:"https://www.castorama.fr/search?q=chauffe+eau+200l"},
      "Brico DÃ©pÃ´t":{price:369.00,url:"https://www.bricodepot.fr/search?q=chauffe+eau+200l"}
    },
    popular:true,
    tip:"200L = 3-4 personnes. Classe B minimum. Ã‰ligible prime Ã©nergie si remplacement"
  },
  {
    id:12,
    name:"Porte intÃ©rieure 204x83 chÃªne",
    keywords:["porte","interieure","intÃ©rieure","204x83","204x73","chene","chÃªne","bloc","huisserie","bois","prehangee","prÃ©hangÃ©e","peinte","blanche"],
    cat:"Menuiserie", img:"ðŸšª", unit:"unitÃ©", searchVolume:"9 900/mois",
    prices:{
      "Leroy Merlin":{price:189.00,url:"https://www.leroymerlin.fr/recherche=porte+interieure+204x83"},
      "Castorama":{price:165.00,url:"https://www.castorama.fr/search?q=porte+interieure+204x83"},
      "Brico DÃ©pÃ´t":{price:158.00,url:"https://www.bricodepot.fr/search?q=porte+interieure+204x83"}
    },
    popular:true,
    tip:"PrÃ©peinte = Ã©conomie 2h de travail. VÃ©rifier sens d'ouverture avant commande"
  },
  {
    id:13,
    name:"Perceuse-visseuse 18V sans fil",
    keywords:["perceuse","visseuse","18v","sans fil","makita","bosch","dewalt","milwaukee","batterie","mandrin","perÃ§age","vissage","outillage"],
    cat:"Outillage", img:"ðŸ”§", unit:"unitÃ©", searchVolume:"8 100/mois",
    prices:{
      "Leroy Merlin":{price:189.00,url:"https://www.leroymerlin.fr/recherche=perceuse+visseuse+18v"},
      "Castorama":{price:179.00,url:"https://www.castorama.fr/search?q=perceuse+visseuse+18v"},
      "Brico DÃ©pÃ´t":{price:169.00,url:"https://www.bricodepot.fr/search?q=perceuse+visseuse+18v"}
    },
    popular:true,
    tip:"18V minimum pour usage pro. PrÃ©fÃ©rez les marques avec Ã©cosystÃ¨me batterie"
  },
  {
    id:14,
    name:"Panneau polystyrÃ¨ne 100mm",
    keywords:["polystyrene","polystyrÃ¨ne","pse","eps","isolation","100mm","panneau","plaque","ite","facade","faÃ§ade","thermique","exterieur"],
    cat:"Isolation", img:"â¬œ", unit:"mÂ²", searchVolume:"6 600/mois",
    prices:{
      "Leroy Merlin":{price:18.90,url:"https://www.leroymerlin.fr/recherche=polystyrene+expanse+100mm"},
      "Brico DÃ©pÃ´t":{price:16.50,url:"https://www.bricodepot.fr/search?q=polystyrene+expanse+100mm"},
      "Castorama":{price:17.90,url:"https://www.castorama.fr/search?q=polystyrene+100mm"},
      "Point P":{price:15.80,url:"https://www.pointp.fr/recherche?q=polystyrene+expanse+100mm"}
    },
    popular:false,
    tip:"ITE (isolation par l'extÃ©rieur) = meilleur rendement thermique. Ã‰ligible MaPrimeRÃ©nov'"
  },
  {
    id:15,
    name:"Robinet mitigeur lavabo",
    keywords:["robinet","mitigeur","lavabo","salle","bain","chrome","chromÃ©","inox","vasque","eau","sanitaire","plomberie"],
    cat:"Plomberie", img:"ðŸš¿", unit:"unitÃ©", searchVolume:"5 400/mois",
    prices:{
      "Leroy Merlin":{price:79.00,url:"https://www.leroymerlin.fr/recherche=robinet+mitigeur+lavabo"},
      "Castorama":{price:65.00,url:"https://www.castorama.fr/search?q=robinet+mitigeur+lavabo"},
      "Brico DÃ©pÃ´t":{price:59.00,url:"https://www.bricodepot.fr/search?q=robinet+mitigeur+lavabo"}
    },
    popular:false,
    tip:"DÃ©bit rÃ©gulateur 5L/min = Ã©conomie eau. Garantie 5 ans minimum recommandÃ©e"
  },
  {
    id:16,
    name:"Peinture mur blanc mat 10L",
    keywords:["peinture","mur","blanc","mat","10l","interieure","intÃ©rieure","acrylique","lessivable","satin","glycero","glycÃ©ro","pot","seau"],
    cat:"Peinture", img:"ðŸª£", unit:"seau", searchVolume:"4 400/mois",
    prices:{
      "Leroy Merlin":{price:39.90,url:"https://www.leroymerlin.fr/recherche=peinture+mur+blanc+mat+10l"},
      "Castorama":{price:34.90,url:"https://www.castorama.fr/search?q=peinture+mur+blanc+mat+10l"},
      "Brico DÃ©pÃ´t":{price:32.90,url:"https://www.bricodepot.fr/search?q=peinture+mur+blanc+mat+10l"}
    },
    popular:true,
    tip:"10L = 60-80mÂ² en 2 couches. GlycÃ©ro pour humiditÃ©, acrylique pour le reste"
  },
  {
    id:17,
    name:"VMC simple flux hygro B",
    keywords:["vmc","ventilation","hygro","simple flux","extraction","aeration","aÃ©ration","salle de bain","cuisine","bouche","gaine"],
    cat:"Ventilation", img:"ðŸ’¨", unit:"unitÃ©", searchVolume:"3 600/mois",
    prices:{
      "Leroy Merlin":{price:129.00,url:"https://www.leroymerlin.fr/recherche=vmc+simple+flux+hygro"},
      "Castorama":{price:109.00,url:"https://www.castorama.fr/search?q=vmc+simple+flux+hygro"},
      "Brico DÃ©pÃ´t":{price:99.00,url:"https://www.bricodepot.fr/search?q=vmc+simple+flux+hygro"},
      "Point P":{price:92.00,url:"https://www.pointp.fr/recherche?q=vmc+simple+flux+hygro"}
    },
    popular:false,
    tip:"Hygro B obligatoire dans les logements BBC. Ã‰ligible aide CEE"
  },
  {
    id:18,
    name:"Radiateur Ã©lectrique inertie 1500W",
    keywords:["radiateur","electrique","Ã©lectrique","inertie","1500w","1500","chauffage","panneau","rayonnant","seche","sÃ¨che","fonte","fluide"],
    cat:"Chauffage", img:"â™¨ï¸", unit:"unitÃ©", searchVolume:"3 100/mois",
    prices:{
      "Leroy Merlin":{price:299.00,url:"https://www.leroymerlin.fr/recherche=radiateur+inertie+1500w"},
      "Castorama":{price:259.00,url:"https://www.castorama.fr/search?q=radiateur+inertie+1500w"},
      "Brico DÃ©pÃ´t":{price:239.00,url:"https://www.bricodepot.fr/search?q=radiateur+inertie+1500w"}
    },
    popular:false,
    tip:"Inertie sÃ¨che = chaleur douce et Ã©conomique. PrÃ©voir 100W/mÂ² de surface"
  },
  {
    id:19,
    name:"Tuile bÃ©ton rouge 39x24cm",
    keywords:["tuile","beton","bÃ©ton","rouge","toiture","toit","couverture","39x24","h10","faitage","faÃ®tage","ardoise","couvreur"],
    cat:"Toiture", img:"ðŸ ", unit:"unitÃ©", searchVolume:"2 900/mois",
    prices:{
      "Leroy Merlin":{price:2.45,url:"https://www.leroymerlin.fr/recherche=tuile+beton+rouge"},
      "Brico DÃ©pÃ´t":{price:2.30,url:"https://www.bricodepot.fr/search?q=tuile+beton+rouge"},
      "Point P":{price:2.10,url:"https://www.pointp.fr/recherche?q=tuile+beton+H10"}
    },
    popular:false,
    tip:"PrÃ©voir 14 tuiles/mÂ². Toujours commander 10% de surplus pour casse"
  },
  {
    id:20,
    name:"Pompe Ã  chaleur air/air 3.5kW",
    keywords:["pompe","chaleur","pac","air","air/air","climatisation","clim","monosplit","3.5kw","3500w","chauffage","reversible","rÃ©versible","inverter"],
    cat:"Chauffage", img:"â„ï¸", unit:"unitÃ©", searchVolume:"2 400/mois",
    prices:{
      "Leroy Merlin":{price:899.00,url:"https://www.leroymerlin.fr/recherche=pompe+chaleur+monosplit+3.5kw"},
      "Castorama":{price:799.00,url:"https://www.castorama.fr/search?q=pompe+chaleur+monosplit+3.5kw"}
    },
    popular:true,
    tip:"Ã‰ligible MaPrimeRÃ©nov' jusqu'Ã  4000â‚¬. COP 4 minimum pour rentabilitÃ©"
  },
]

export default TOP20_PRODUCTS
