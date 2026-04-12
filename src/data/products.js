export const BRANDS = {
  "Leroy Merlin": { color: "#009245", logo: "LM" },
  "Brico Dépôt":  { color: "#E3001B", logo: "BD" },
  "Castorama":    { color: "#0066A4", logo: "CA" },
  "Point P":      { color: "#F47920", logo: "PP" },
}

export const CATEGORIES = [
  "Tous", "Gros œuvre", "Isolation", "Carrelage", "Menuiserie",
  "Plomberie", "Électricité", "Revêtement", "Toiture", "Outillage",
  "Peinture", "Chauffage", "Ventilation", "Aménagement extérieur"
]

export const PRODUCTS = [
  // GROS OEUVRE
  { id:1,  name:"Parpaing 20x20x50 cm",          cat:"Gros œuvre",   img:"🧱", unit:"unité", prices:{"Leroy Merlin":1.89,"Brico Dépôt":1.65,"Castorama":1.79,"Point P":1.55}, popular:true },
  { id:2,  name:"Parpaing creux 15x20x50 cm",     cat:"Gros œuvre",   img:"🧱", unit:"unité", prices:{"Leroy Merlin":1.45,"Brico Dépôt":1.30,"Castorama":1.39,"Point P":1.22}, popular:false },
  { id:3,  name:"Ciment CEM II 35kg",             cat:"Gros œuvre",   img:"🏗️", unit:"sac",   prices:{"Leroy Merlin":9.80,"Brico Dépôt":8.90,"Point P":8.20}, popular:false },
  { id:4,  name:"Béton prêt à l'emploi 35kg",     cat:"Gros œuvre",   img:"🏗️", unit:"sac",   prices:{"Leroy Merlin":7.90,"Brico Dépôt":6.90,"Castorama":7.20,"Point P":6.50}, popular:false },
  { id:5,  name:"Plaque BA13 2.5m standard",      cat:"Gros œuvre",   img:"📋", unit:"plaque",prices:{"Leroy Merlin":7.50,"Brico Dépôt":6.80,"Castorama":7.20,"Point P":6.40}, popular:true },
  { id:6,  name:"Plaque BA13 hydro 2.5m",         cat:"Gros œuvre",   img:"📋", unit:"plaque",prices:{"Leroy Merlin":9.90,"Brico Dépôt":8.90,"Castorama":9.50,"Point P":8.50}, popular:false },
  { id:7,  name:"Mortier colle C1 25kg",          cat:"Gros œuvre",   img:"🪣", unit:"sac",   prices:{"Leroy Merlin":14.90,"Brico Dépôt":12.50,"Point P":11.80}, popular:false },
  { id:8,  name:"Rail 48mm 3m",                   cat:"Gros œuvre",   img:"📏", unit:"barre", prices:{"Leroy Merlin":3.90,"Brico Dépôt":3.40,"Castorama":3.70,"Point P":3.20}, popular:false },
  { id:9,  name:"Montant 48mm 2.6m",              cat:"Gros œuvre",   img:"📏", unit:"barre", prices:{"Leroy Merlin":2.90,"Brico Dépôt":2.50,"Castorama":2.70,"Point P":2.35}, popular:false },
  { id:10, name:"Chevron 63x75 3m sapin",         cat:"Gros œuvre",   img:"🪵", unit:"pièce", prices:{"Leroy Merlin":8.50,"Brico Dépôt":7.40,"Castorama":7.90}, popular:false },

  // ISOLATION
  { id:11, name:"Laine de verre 100mm R=3.15",    cat:"Isolation",    img:"🌡️", unit:"m²",    prices:{"Leroy Merlin":12.90,"Brico Dépôt":11.50,"Castorama":13.20,"Point P":10.80}, popular:true },
  { id:12, name:"Laine de verre 200mm R=6.20",    cat:"Isolation",    img:"🌡️", unit:"m²",    prices:{"Leroy Merlin":22.90,"Brico Dépôt":19.80,"Castorama":21.50,"Point P":18.90}, popular:false },
  { id:13, name:"Laine de roche 100mm R=2.65",    cat:"Isolation",    img:"🌡️", unit:"m²",    prices:{"Leroy Merlin":14.90,"Brico Dépôt":12.90,"Point P":11.80}, popular:false },
  { id:14, name:"Isolation phonique 45mm",         cat:"Isolation",    img:"🎵", unit:"m²",    prices:{"Leroy Merlin":8.90,"Castorama":7.80,"Brico Dépôt":7.20,"Point P":6.90}, popular:false },
  { id:15, name:"Panneau polystyrène PSE 100mm",  cat:"Isolation",    img:"⬜", unit:"m²",    prices:{"Leroy Merlin":18.90,"Brico Dépôt":16.50,"Castorama":17.90,"Point P":15.80}, popular:false },
  { id:16, name:"Frein vapeur 1.5m 50m²",         cat:"Isolation",    img:"🧻", unit:"rouleau",prices:{"Leroy Merlin":89.00,"Brico Dépôt":75.00,"Point P":68.00}, popular:false },

  // CARRELAGE
  { id:17, name:"Carrelage sol 60x60 beige",      cat:"Carrelage",    img:"⬜", unit:"m²",    prices:{"Leroy Merlin":22.90,"Castorama":19.50,"Brico Dépôt":18.90}, popular:true },
  { id:18, name:"Carrelage sol 30x60 gris",       cat:"Carrelage",    img:"⬜", unit:"m²",    prices:{"Leroy Merlin":18.90,"Castorama":16.50,"Brico Dépôt":15.90,"Point P":14.50}, popular:false },
  { id:19, name:"Carrelage mur métro blanc 7.5x15",cat:"Carrelage",   img:"⬜", unit:"m²",    prices:{"Leroy Merlin":12.90,"Castorama":10.90,"Brico Dépôt":9.90}, popular:true },
  { id:20, name:"Colle carrelage C2 25kg",        cat:"Carrelage",    img:"🪣", unit:"sac",   prices:{"Leroy Merlin":19.90,"Brico Dépôt":16.50,"Point P":15.80}, popular:false },
  { id:21, name:"Joint carrelage 5kg gris clair", cat:"Carrelage",    img:"🪣", unit:"seau",  prices:{"Leroy Merlin":14.90,"Castorama":12.50,"Brico Dépôt":11.90}, popular:false },
  { id:22, name:"Carrelage terrasse 60x60 anthracite",cat:"Carrelage",img:"⬜", unit:"m²",    prices:{"Leroy Merlin":32.90,"Castorama":28.50,"Brico Dépôt":26.90}, popular:false },

  // MENUISERIE
  { id:23, name:"Porte intérieure 204x73 chêne",  cat:"Menuiserie",   img:"🚪", unit:"unité", prices:{"Leroy Merlin":189.00,"Castorama":165.00,"Brico Dépôt":158.00}, popular:true },
  { id:24, name:"Porte intérieure 204x83 blanc",  cat:"Menuiserie",   img:"🚪", unit:"unité", prices:{"Leroy Merlin":159.00,"Castorama":139.00,"Brico Dépôt":132.00}, popular:false },
  { id:25, name:"Fenêtre PVC 120x120 double vitrage",cat:"Menuiserie",img:"🪟", unit:"unité", prices:{"Leroy Merlin":320.00,"Castorama":289.00,"Brico Dépôt":275.00,"Point P":260.00}, popular:true },
  { id:26, name:"Fenêtre PVC 60x120 double vitrage",cat:"Menuiserie", img:"🪟", unit:"unité", prices:{"Leroy Merlin":249.00,"Castorama":219.00,"Brico Dépôt":209.00}, popular:false },
  { id:27, name:"Plinthe MDF 70mm 2.4m chêne",   cat:"Menuiserie",   img:"📐", unit:"barre", prices:{"Leroy Merlin":4.90,"Castorama":4.20,"Brico Dépôt":3.90}, popular:false },
  { id:28, name:"Baguette d'angle alu 2.5m",      cat:"Menuiserie",   img:"📐", unit:"barre", prices:{"Leroy Merlin":3.90,"Castorama":3.40,"Brico Dépôt":3.20,"Point P":2.90}, popular:false },

  // PLOMBERIE
  { id:29, name:"Siphon de sol inox Ø50",         cat:"Plomberie",    img:"🔩", unit:"unité", prices:{"Leroy Merlin":18.90,"Castorama":15.50,"Brico Dépôt":14.20}, popular:false },
  { id:30, name:"Robinet mitigeur cuisine inox",   cat:"Plomberie",    img:"🚿", unit:"unité", prices:{"Leroy Merlin":89.00,"Castorama":72.00,"Brico Dépôt":68.00}, popular:false },
  { id:31, name:"Robinet mitigeur salle de bain",  cat:"Plomberie",    img:"🚿", unit:"unité", prices:{"Leroy Merlin":79.00,"Castorama":65.00,"Brico Dépôt":59.00}, popular:false },
  { id:32, name:"Tube PER Ø16 25m",               cat:"Plomberie",    img:"🔧", unit:"rouleau",prices:{"Leroy Merlin":28.90,"Castorama":24.50,"Point P":22.90}, popular:false },
  { id:33, name:"Bonde de douche Ø90",            cat:"Plomberie",    img:"🔩", unit:"unité", prices:{"Leroy Merlin":24.90,"Castorama":19.90,"Brico Dépôt":17.90}, popular:false },
  { id:34, name:"Chauffe-eau électrique 100L",     cat:"Plomberie",    img:"♨️", unit:"unité", prices:{"Leroy Merlin":349.00,"Castorama":299.00,"Brico Dépôt":289.00}, popular:true },

  // ELECTRICITE
  { id:35, name:"Câble électrique 2.5mm² 25m",    cat:"Électricité",  img:"⚡", unit:"rouleau",prices:{"Leroy Merlin":34.90,"Castorama":29.50,"Brico Dépôt":27.80,"Point P":26.50}, popular:false },
  { id:36, name:"Câble électrique 1.5mm² 50m",    cat:"Électricité",  img:"⚡", unit:"rouleau",prices:{"Leroy Merlin":38.90,"Castorama":33.50,"Brico Dépôt":31.50,"Point P":29.90}, popular:false },
  { id:37, name:"Disjoncteur 20A différentiel",    cat:"Électricité",  img:"🔌", unit:"unité", prices:{"Leroy Merlin":24.90,"Castorama":21.50,"Brico Dépôt":19.80,"Point P":18.50}, popular:false },
  { id:38, name:"Prise de courant 2P+T blanc",     cat:"Électricité",  img:"🔌", unit:"unité", prices:{"Leroy Merlin":3.90,"Castorama":3.20,"Brico Dépôt":2.90}, popular:false },
  { id:39, name:"Interrupteur va-et-vient blanc",  cat:"Électricité",  img:"🔌", unit:"unité", prices:{"Leroy Merlin":4.50,"Castorama":3.80,"Brico Dépôt":3.50}, popular:false },
  { id:40, name:"Tableau électrique 13 modules",   cat:"Électricité",  img:"⚡", unit:"unité", prices:{"Leroy Merlin":89.00,"Castorama":75.00,"Brico Dépôt":69.00,"Point P":64.00}, popular:false },

  // REVETEMENT
  { id:41, name:"Parquet flottant chêne 8mm",     cat:"Revêtement",   img:"🪵", unit:"m²",    prices:{"Leroy Merlin":28.90,"Castorama":24.50,"Brico Dépôt":22.90}, popular:true },
  { id:42, name:"Lame PVC clipsable chêne gris",  cat:"Revêtement",   img:"🪵", unit:"m²",    prices:{"Leroy Merlin":19.90,"Castorama":16.90,"Brico Dépôt":15.50}, popular:true },
  { id:43, name:"Moquette velours gris 4m",       cat:"Revêtement",   img:"🟫", unit:"m²",    prices:{"Leroy Merlin":12.90,"Castorama":10.90,"Brico Dépôt":9.90}, popular:false },
  { id:44, name:"Sous-couche parquet 3mm 10m²",   cat:"Revêtement",   img:"📄", unit:"rouleau",prices:{"Leroy Merlin":19.90,"Castorama":16.50,"Brico Dépôt":14.90}, popular:false },

  // TOITURE
  { id:45, name:"Tuile béton rouge 39x24cm",       cat:"Toiture",      img:"🏠", unit:"unité", prices:{"Leroy Merlin":2.45,"Point P":2.10,"Brico Dépôt":2.30}, popular:false },
  { id:46, name:"Ardoise naturelle 32x22cm",       cat:"Toiture",      img:"🏠", unit:"unité", prices:{"Leroy Merlin":3.90,"Point P":3.40}, popular:false },
  { id:47, name:"Gouttière PVC demi-ronde 4m",    cat:"Toiture",      img:"🌧️", unit:"barre", prices:{"Leroy Merlin":18.90,"Castorama":15.90,"Brico Dépôt":14.50}, popular:false },
  { id:48, name:"Membrane d'étanchéité EPDM 6m²", cat:"Toiture",      img:"📄", unit:"rouleau",prices:{"Leroy Merlin":89.00,"Point P":74.00}, popular:false },

  // OUTILLAGE
  { id:49, name:"Perceuse-visseuse 18V Makita",   cat:"Outillage",    img:"🔧", unit:"unité", prices:{"Leroy Merlin":189.00,"Castorama":179.00,"Brico Dépôt":169.00}, popular:true },
  { id:50, name:"Meuleuse d'angle 115mm Bosch",   cat:"Outillage",    img:"🔧", unit:"unité", prices:{"Leroy Merlin":89.00,"Castorama":79.00,"Brico Dépôt":74.00}, popular:false },
  { id:51, name:"Niveau laser rotatif",            cat:"Outillage",    img:"📏", unit:"unité", prices:{"Leroy Merlin":149.00,"Castorama":129.00,"Brico Dépôt":119.00}, popular:false },
  { id:52, name:"Marteau-perforateur SDS+ 800W",  cat:"Outillage",    img:"🔨", unit:"unité", prices:{"Leroy Merlin":129.00,"Castorama":109.00,"Brico Dépôt":99.00}, popular:false },

  // PEINTURE
  { id:53, name:"Peinture mur blanc mat 10L",     cat:"Peinture",     img:"🪣", unit:"seau",  prices:{"Leroy Merlin":39.90,"Castorama":34.90,"Brico Dépôt":32.90}, popular:true },
  { id:54, name:"Peinture façade blanche 10L",    cat:"Peinture",     img:"🪣", unit:"seau",  prices:{"Leroy Merlin":59.90,"Castorama":52.90,"Brico Dépôt":49.90,"Point P":46.50}, popular:false },
  { id:55, name:"Enduit de rebouchage 1.5kg",     cat:"Peinture",     img:"🪣", unit:"pot",   prices:{"Leroy Merlin":8.90,"Castorama":7.50,"Brico Dépôt":6.90}, popular:false },
  { id:56, name:"Rouleau peinture laine 23cm",    cat:"Peinture",     img:"🖌️", unit:"unité", prices:{"Leroy Merlin":4.90,"Castorama":3.90,"Brico Dépôt":3.50}, popular:false },

  // CHAUFFAGE
  { id:57, name:"Radiateur électrique 1500W",     cat:"Chauffage",    img:"♨️", unit:"unité", prices:{"Leroy Merlin":149.00,"Castorama":129.00,"Brico Dépôt":119.00}, popular:false },
  { id:58, name:"Thermostat programmable",        cat:"Chauffage",    img:"🌡️", unit:"unité", prices:{"Leroy Merlin":59.00,"Castorama":49.00,"Brico Dépôt":44.00}, popular:false },
  { id:59, name:"Pompe à chaleur air/air 3.5kW",  cat:"Chauffage",    img:"❄️", unit:"unité", prices:{"Leroy Merlin":899.00,"Castorama":799.00}, popular:true },

  // VENTILATION
  { id:60, name:"VMC simple flux hygro 90m³/h",  cat:"Ventilation",  img:"💨", unit:"unité", prices:{"Leroy Merlin":129.00,"Castorama":109.00,"Brico Dépôt":99.00,"Point P":92.00}, popular:false },
  { id:61, name:"Bouche d'extraction VMC Ø125",  cat:"Ventilation",  img:"💨", unit:"unité", prices:{"Leroy Merlin":19.90,"Castorama":16.50,"Brico Dépôt":14.90}, popular:false },

  // AMENAGEMENT EXTERIEUR
  { id:62, name:"Pavé béton 20x10x6cm gris",     cat:"Aménagement extérieur",img:"⬜",unit:"m²",prices:{"Leroy Merlin":12.90,"Castorama":10.90,"Brico Dépôt":9.90,"Point P":9.20}, popular:false },
  { id:63, name:"Bordure béton droite 100cm",     cat:"Aménagement extérieur",img:"📏",unit:"pièce",prices:{"Leroy Merlin":3.90,"Castorama":3.40,"Brico Dépôt":3.20,"Point P":2.90}, popular:false },
  { id:64, name:"Gravier roulé blanc 40kg",       cat:"Aménagement extérieur",img:"⚪",unit:"sac", prices:{"Leroy Merlin":8.90,"Castorama":7.50,"Brico Dépôt":6.90}, popular:false },
]
