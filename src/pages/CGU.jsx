const pageStyle = {
  maxWidth: 800, margin: '0 auto', padding: '60px 24px 80px',
}
const h1Style = { fontSize: 28, fontWeight: 600, color: '#F5F3FF', marginBottom: 8 }
const h2Style = { fontSize: 16, fontWeight: 500, color: '#F5F3FF', margin: '32px 0 8px' }
const pStyle = { fontSize: 14, color: '#A89FC0', lineHeight: 1.8, marginBottom: 12 }
const dateStyle = { fontSize: 12, color: '#6B6585', marginBottom: 40 }

export function CGU() {
  return (
    <div style={pageStyle}>
      <h1 style={h1Style}>Conditions Générales d'Utilisation</h1>
      <p style={dateStyle}>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

      <h2 style={h2Style}>1. Objet</h2>
      <p style={pStyle}>
        MoonBTP.fr est un service de comparaison de prix de matériaux BTP et de mise en relation avec des artisans du bâtiment.
        Les présentes CGU définissent les conditions d'accès et d'utilisation du site moonbtp.fr (ci-après « le Service »).
      </p>

      <h2 style={h2Style}>2. Acceptation des CGU</h2>
      <p style={pStyle}>
        L'accès au Service implique l'acceptation pleine et entière des présentes CGU. Si vous n'acceptez pas ces conditions,
        vous devez cesser d'utiliser le Service.
      </p>

      <h2 style={h2Style}>3. Liens d'affiliation</h2>
      <p style={pStyle}>
        MoonBTP.fr participe à des programmes d'affiliation avec les enseignes référencées (Leroy Merlin, Brico Dépôt,
        Castorama, Point P). Nous pouvons percevoir une commission sur les achats effectués via nos liens.
        Cette rémunération n'influence pas le classement des prix, qui reste basé uniquement sur le prix le plus bas.
      </p>

      <h2 style={h2Style}>4. Exactitude des prix</h2>
      <p style={pStyle}>
        Les prix affichés sont fournis à titre indicatif et peuvent ne pas refléter le prix exact pratiqué par les enseignes.
        MoonBTP.fr ne garantit pas l'exactitude, la complétude ou la mise à jour en temps réel de ces informations.
        Nous vous invitons à vérifier le prix définitif directement sur le site de l'enseigne avant tout achat.
      </p>

      <h2 style={h2Style}>5. Artisans</h2>
      <p style={pStyle}>
        MoonBTP.fr est une plateforme de mise en relation. Les artisans référencés sont des professionnels indépendants.
        MoonBTP.fr n'est pas responsable des prestations effectuées par les artisans. Nous vous recommandons de vérifier
        l'assurance décennale de l'artisan avant tout début de travaux.
      </p>

      <h2 style={h2Style}>6. Propriété intellectuelle</h2>
      <p style={pStyle}>
        L'ensemble des contenus du site (textes, graphismes, logo, code) est la propriété exclusive de MoonBTP SAS.
        Toute reproduction sans autorisation est interdite.
      </p>

      <h2 style={h2Style}>7. Données personnelles</h2>
      <p style={pStyle}>
        MoonBTP.fr collecte uniquement les données nécessaires au fonctionnement du Service. Aucune donnée n'est vendue
        à des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en contactant
        contact@moonbtp.fr.
      </p>

      <h2 style={h2Style}>8. Contact</h2>
      <p style={pStyle}>Pour toute question : contact@moonbtp.fr</p>
    </div>
  )
}

export function MentionsLegales() {
  return (
    <div style={pageStyle}>
      <h1 style={h1Style}>Mentions Légales</h1>
      <p style={dateStyle}>Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique</p>

      <h2 style={h2Style}>Éditeur du site</h2>
      <p style={pStyle}>
        <strong style={{ color: '#F5F3FF' }}>MoonBTP</strong><br />
        Représentant légal : Mounir Boudjenah<br />
        Email : contact@moonbtp.fr<br />
        Site : moonbtp.fr
      </p>

      <h2 style={h2Style}>Hébergement</h2>
      <p style={pStyle}>
        <strong style={{ color: '#F5F3FF' }}>Netlify, Inc.</strong><br />
        512 2nd Street, Suite 200<br />
        San Francisco, CA 94107, USA<br />
        netlify.com
      </p>

      <h2 style={h2Style}>Directeur de la publication</h2>
      <p style={pStyle}>Mounir Boudjenah</p>

      <h2 style={h2Style}>Propriété intellectuelle</h2>
      <p style={pStyle}>
        L'ensemble des éléments composant le site MoonBTP.fr (textes, graphiques, logiciels, photographies, images,
        sons, plans, noms, logos, marques, créations et œuvres protégeables diverses) sont la propriété exclusive
        de MoonBTP. Toute reproduction, distribution, modification ou utilisation est interdite sans autorisation écrite préalable.
      </p>

      <h2 style={h2Style}>Données personnelles & cookies</h2>
      <p style={pStyle}>
        MoonBTP.fr utilise Plausible Analytics, un outil de mesure d'audience respectueux de la vie privée, sans cookies
        de traçage. Aucune donnée personnelle n'est transmise à des tiers à des fins publicitaires.
        Conformément au RGPD, vous pouvez exercer vos droits en contactant contact@moonbtp.fr.
      </p>

      <h2 style={h2Style}>Liens hypertextes</h2>
      <p style={pStyle}>
        MoonBTP.fr contient des liens vers des sites tiers (enseignes BTP). Ces liens sont fournis à titre indicatif.
        MoonBTP.fr n'est pas responsable du contenu des sites externes.
      </p>
    </div>
  )
}

export default CGU
