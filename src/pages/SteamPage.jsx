import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaSteam, FaWindows, FaGamepad } from 'react-icons/fa6';

import heroImg from '../../assets/images/SCENEBACKTRUC7.png';
import screen1 from '../../assets/images/SCENEBACKTRUC2.png';
import screen2 from '../../assets/images/SCENEBACKTRUC3.png';
import screen3 from '../../assets/images/SCENEBACKTRUC5.png';
import screen4 from '../../assets/images/SCENEBACKTRUC4.png';
import screen5 from '../../assets/images/SCENEBACKTRUC6.png';

const screenshots = [
  { src: heroImg, alt: 'Forêt maudite' },
  { src: screen1, alt: 'Couloirs obscurs' },
  { src: screen2, alt: 'Atmosphère oppressante' },
  { src: screen3, alt: 'Exploration souterraine' },
  { src: screen4, alt: 'Hôpital abandonné' },
  { src: screen5, alt: 'Le Traqueur' }
];

const tags = [
  'Horreur', 'Survie', 'Coop', 'Atmosphérique',
  'Psychologique', 'Sombre', 'Première personne', 'IA Adaptative', 'Narratif'
];

const sysMin = [
  ['OS', 'Windows 10 64-bit'],
  ['Processeur', 'Intel Core i5-8400 / AMD Ryzen 5 2600'],
  ['Mémoire vive', '12 Go de RAM'],
  ['Graphiques', 'NVIDIA GTX 1060 6 Go / AMD RX 580'],
  ['DirectX', 'Version 12'],
  ['Espace disque', '55 Go']
];

const sysRec = [
  ['OS', 'Windows 11 64-bit'],
  ['Processeur', 'Intel Core i7-12700K / AMD Ryzen 7 5800X'],
  ['Mémoire vive', '16 Go de RAM'],
  ['Graphiques', 'NVIDIA RTX 3070 / AMD RX 6800 XT'],
  ['DirectX', 'Version 12'],
  ['Espace disque', '55 Go']
];

export default function SteamPage() {
  const [mainImg, setMainImg] = useState(0);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  return (
    <div className="min-h-screen bg-[#1b2838] text-[#c6d4df] font-sans text-sm">
      {/* Top bar */}
      <header className="bg-[#171a21] border-b border-[#0a0a0a]">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <FaSteam className="text-2xl text-white" />
            <span className="text-base font-bold tracking-wide text-white">STORE</span>
            <nav className="hidden gap-4 text-xs uppercase tracking-wider text-[#b8b6b4] md:flex">
              <span className="cursor-pointer transition hover:text-white">Boutique</span>
              <span className="cursor-pointer transition hover:text-white">Communauté</span>
              <span className="cursor-pointer transition hover:text-white">À propos</span>
            </nav>
          </div>
          <Link to="/precommande" className="text-xs text-[#67c1f5] transition hover:text-white">← Retour</Link>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1100px] px-4 py-2 text-xs text-[#556772]">
        Toutes les catégories &gt; Jeux &gt; Horreur &gt; <span className="text-[#67c1f5]">The Weight of Us</span>
      </div>

      {/* Main container */}
      <div className="mx-auto max-w-[1100px] px-4 pb-12">
        {/* Title */}
        <h1 className="mb-4 text-2xl font-bold text-white md:text-3xl">The Weight of Us</h1>

        {/* Hero + Sidebar */}
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          {/* Left - screenshots */}
          <div>
            <div className="overflow-hidden rounded bg-black">
              <img
                src={screenshots[mainImg].src}
                alt={screenshots[mainImg].alt}
                className="aspect-video w-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="mt-2 flex gap-1.5 overflow-x-auto pb-1">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className={`flex-shrink-0 overflow-hidden rounded border-2 transition ${i === mainImg ? 'border-[#67c1f5]' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={s.src} alt={s.alt} className="h-[58px] w-[110px] object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Game info sidebar */}
          <div className="flex flex-col gap-3 rounded bg-[#0a141d] p-4">
            <img src={heroImg} alt="Header capsule" className="w-full rounded" />
            <p className="text-[13px] leading-relaxed text-[#acb2b8]">
              Guidez un adulte et une enfant malade à travers des environnements hostiles. Le remède existe,
              mais le Traqueur, né de la maladie d'Emily, ne vous laissera pas l'atteindre.
            </p>

            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-[#556772]">ÉVALUATIONS :</span>
                <span className="text-[#66c0f4]">Extrêmement positives (2 847)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#556772]">DATE DE SORTIE :</span>
                <span>31 octobre 2026</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#556772]">DÉVELOPPEUR :</span>
                <span className="text-[#67c1f5]">SWILD Studio</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#556772]">ÉDITEUR :</span>
                <span className="text-[#67c1f5]">SWILD Studio</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {tags.map((t) => (
                <span key={t} className="rounded bg-[#67c1f5]/20 px-2 py-0.5 text-[11px] text-[#67c1f5]">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Buy area */}
        <div className="mt-6 rounded bg-gradient-to-r from-[#0a141d] to-[#162029] p-4 md:p-6">
          <p className="mb-1 text-xs uppercase tracking-wide text-[#56707f]">Précommandez The Weight of Us</p>

          {/* Standard */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded bg-[#0a0f14] p-4">
            <div>
              <p className="text-sm text-white">The Weight of Us</p>
              <p className="mt-0.5 text-xs text-[#56707f]">Disponible le : 31 octobre 2026</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white">59,99€</span>
              <button
                onClick={() => setAddedToCart(true)}
                className={`rounded px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${addedToCart ? 'bg-[#5c7e10] text-white' : 'bg-[#5c7e10] text-white hover:bg-[#6d9610]'}`}
              >
                {addedToCart ? '✓ Ajouté au panier' : 'Ajouter au panier'}
              </button>
            </div>
          </div>

          {/* Deluxe */}
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded border border-[#67c1f5]/20 bg-[#0a0f14] p-4">
            <div>
              <p className="text-sm text-white">The Weight of Us — Édition Deluxe</p>
              <p className="mt-0.5 text-xs text-[#56707f]">Inclut : Accès 72h, Artbook, OST, Mission annexe</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white">79,99€</span>
              <button className="rounded bg-[#5c7e10] px-4 py-2 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#6d9610]">
                Ajouter au panier
              </button>
            </div>
          </div>

          {/* Wishlist */}
          <button
            onClick={() => setAddedToWishlist(!addedToWishlist)}
            className="mt-4 text-xs text-[#67c1f5] underline transition hover:text-white"
          >
            {addedToWishlist ? '✓ Dans votre liste de souhaits' : '♡ Ajouter à votre liste de souhaits'}
          </button>
        </div>

        {/* Description */}
        <div className="mt-8">
          <h2 className="mb-3 border-b border-[#0a141d] pb-2 text-lg font-bold text-white">À PROPOS DE CE JEU</h2>
          <div className="space-y-4 text-[13px] leading-relaxed text-[#acb2b8]">
            <p>
              <strong className="text-white">The Weight of Us</strong> est un jeu d'horreur psychologique en vue subjective.
              Une enfant malade et son protecteur traversent des forêts maudites, des hôpitaux abandonnés et des souterrains
              oubliés à la recherche d'un remède. Mais quelque chose ne veut pas qu'elle guérisse.
            </p>
            <p>
              Jouable en solo ou en <strong className="text-white">coop asymétrique à deux joueurs</strong>, le jeu place un joueur dans le rôle
              de Kijin, adulte armé d'une lampe, protecteur et éclaireur, et l'autre dans celui d'Emily, enfant agile armée de ciseaux,
              qui ne doit jamais trop s'éloigner de Kijin. Chaque rôle offre une expérience radicalement différente.
            </p>
            <p>
              Le Traqueur est né de la maladie d'Emily. Plus les deux survivants s'éloignent l'un de l'autre,
              plus il devient agressif. Il analyse vos habitudes, mémorise vos cachettes et se nourrit de votre peur.
            </p>

            {/* Feature highlights */}
            <div className="grid gap-3 pt-2 md:grid-cols-2">
              {[
                ['🎧 Audio Spatial 3D', 'Un sound design binaural qui exploite chaque direction pour brouiller vos repères dans les forêts, hôpitaux et souterrains.'],
                ['🫁 Contrôle du Souffle', 'Votre micro capte votre respiration. Faites du bruit et le Traqueur vous trouvera.'],
                ['🧠 IA Évolutive', 'Le Traqueur, né de la maladie d\'Emily, apprend vos habitudes et s\'enrage quand les survivants s\'éloignent.'],
                ['👥 Coop Asymétrique', 'Kijin éclaire et protège avec sa lampe. Emily se faufile avec ses ciseaux. Ne vous séparez pas.']
              ].map(([title, desc]) => (
                <div key={title} className="rounded border border-[#1b2838] bg-[#0a141d] p-3">
                  <p className="text-sm font-medium text-white">{title}</p>
                  <p className="mt-1 text-xs text-[#8f98a0]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-8">
          <h2 className="mb-3 border-b border-[#0a141d] pb-2 text-lg font-bold text-white">CONFIGURATION REQUISE</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded bg-[#0a141d] p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#67c1f5]">Minimum</p>
              {sysMin.map(([label, val]) => (
                <div key={label} className="flex gap-2 py-1 text-xs">
                  <span className="w-28 shrink-0 text-[#556772]">{label} :</span>
                  <span>{val}</span>
                </div>
              ))}
            </div>
            <div className="rounded bg-[#0a141d] p-4">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#67c1f5]">Recommandée</p>
              {sysRec.map(([label, val]) => (
                <div key={label} className="flex gap-2 py-1 text-xs">
                  <span className="w-28 shrink-0 text-[#556772]">{label} :</span>
                  <span>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="mt-6 flex items-center gap-4 text-[#556772]">
          <FaWindows className="text-lg" />
          <FaGamepad className="text-lg" />
          <span className="text-xs">Prise en charge complète de la manette</span>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-[#0a141d] pt-4 text-center text-[11px] text-[#556772]">
          © 2026 SWILD Studio. Tous droits réservés. Propulsé par Steam. Ceci est une page fictive à but étudiant.
        </div>
      </div>
    </div>
  );
}
