import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaXbox, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

import heroImg from '../../assets/images/SCENEBACKTRUC7.png';
import screen1 from '../../assets/images/SCENEBACKTRUC2.png';
import screen2 from '../../assets/images/SCENEBACKTRUC3.png';
import screen3 from '../../assets/images/SCENEBACKTRUC5.png';
import screen4 from '../../assets/images/SCENEBACKTRUC4.png';
import screen5 from '../../assets/images/SCENEBACKTRUC6.png';

const screenshots = [
  { src: screen1, alt: 'Couloirs obscurs' },
  { src: screen2, alt: 'Atmosphère oppressante' },
  { src: screen3, alt: 'Exploration souterraine' },
  { src: screen4, alt: 'Hôpital abandonné' },
  { src: screen5, alt: 'Le Traqueur' },
];

const capabilities = [
  'Un joueur',
  'Multijoueur en ligne (2)',
  'Succès Xbox',
  'Sauvegarde cloud Xbox',
  'Xbox Series X|S optimisé',
  'Smart Delivery',
  'Dolby Atmos',
  'Ray Tracing',
];

export default function XboxPage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [bought, setBought] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] font-sans text-white">

      {/* ─── Microsoft-style top bar ─── */}
      <header className="border-b border-white/5 bg-[#242424]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2.5">
          <div className="flex items-center gap-6">
            {/* Microsoft logo text */}
            <span className="text-[13px] font-semibold tracking-tight text-white/90">Microsoft</span>
            <div className="hidden h-4 w-px bg-white/15 md:block" />
            <span className="hidden text-[13px] text-white/60 md:block">Xbox</span>
            <nav className="hidden items-center gap-5 text-[13px] text-white/50 md:flex">
              <span className="cursor-pointer transition hover:text-white">Game Pass</span>
              <span className="cursor-pointer transition hover:text-white">Jeux</span>
              <span className="cursor-pointer transition hover:text-white">Appareils</span>
              <span className="cursor-pointer transition hover:text-white">Communauté</span>
            </nav>
          </div>
          <Link to="/precommande" className="text-[13px] text-white/50 transition hover:text-white">← Retour</Link>
        </div>
      </header>

      {/* ─── Breadcrumb ─── */}
      <div className="border-b border-white/5 bg-[#1a1a1a]">
        <div className="mx-auto max-w-[1200px] px-6 py-2">
          <p className="text-[12px] text-white/30">
            Xbox <span className="mx-1">/</span> Jeux <span className="mx-1">/</span>
            <span className="text-white/60">The Weight of Us</span>
          </p>
        </div>
      </div>

      {/* ─── Main content ─── */}
      <main className="mx-auto max-w-[1200px] px-6 pb-16 pt-8">

        {/* ── Top section: Hero art + Purchase panel ── */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">

          {/* Left column */}
          <div>
            {/* Hero art */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={heroImg}
                alt="The Weight of Us"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Title block below hero */}
            <div className="mt-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded bg-[#107c10] px-2 py-[3px] text-[10px] font-bold uppercase tracking-wider">Précommande</span>
                <span className="rounded bg-white/10 px-2 py-[3px] text-[10px] font-bold uppercase tracking-wider">Xbox Series X|S</span>
                <span className="rounded border border-white/20 px-2 py-[3px] text-[10px] font-bold uppercase tracking-wider">Optimisé</span>
              </div>
              <h1 className="mt-3 text-[28px] font-bold leading-tight md:text-[32px]">The Weight of Us</h1>
              <p className="mt-1 text-sm text-white/50">SWILD Studio</p>

              {/* Star rating */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-[#ffc107]">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                </div>
                <span className="text-xs text-white/40">4.6 &middot; 2 847 évaluations</span>
              </div>

              {/* PEGI */}
              <div className="mt-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded bg-white text-[12px] font-black text-black">18</span>
                <span className="text-[11px] text-white/40">PEGI 18 — Violence, Peur</span>
              </div>
            </div>
          </div>

          {/* Right column — Purchase panel */}
          <div className="lg:sticky lg:top-6">
            <div className="rounded-xl bg-[#2d2d2d] p-5">
              <p className="text-2xl font-bold">59,99&thinsp;€</p>
              <p className="mt-1 text-xs text-white/40">Sortie estimée le 31 octobre 2026</p>

              <button
                onClick={() => setBought(true)}
                className={`mt-4 w-full rounded py-3 text-sm font-bold transition ${bought ? 'bg-[#107c10]/50' : 'bg-[#107c10] hover:bg-[#0e6b0e]'}`}
              >
                {bought ? '✓ Précommandé' : 'Précommander'}
              </button>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="mt-2 w-full rounded border border-white/20 py-2.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white"
              >
                {wishlisted ? '✓ Dans la liste de souhaits' : '+ Ajouter à la liste de souhaits'}
              </button>

              {/* Game Pass */}
              <div className="mt-4 flex items-center gap-3 rounded-lg bg-[#107c10]/10 px-4 py-3">
                <FaXbox className="shrink-0 text-xl text-[#107c10]" />
                <div>
                  <p className="text-[13px] font-semibold">Inclus avec le Game Pass</p>
                  <p className="text-[11px] text-white/40">Disponible dès la sortie pour les membres Ultimate</p>
                </div>
              </div>

              {/* Edition switcher */}
              <div className="mt-4 rounded-lg border border-[#107c10]/30 bg-[#107c10]/5 p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#107c10]">Édition Deluxe</p>
                <p className="mt-1 text-lg font-bold">79,99&thinsp;€</p>
                <ul className="mt-2 space-y-1 text-[11px] text-white/50">
                  <li>✓ Jeu complet</li>
                  <li>✓ Accès anticipé 72 h</li>
                  <li>✓ Artbook numérique + bande originale</li>
                  <li>✓ Mission annexe exclusive</li>
                  <li>✓ Smart Delivery inclus</li>
                </ul>
                <button className="mt-3 w-full rounded bg-[#107c10] py-2 text-xs font-bold transition hover:bg-[#0e6b0e]">
                  Précommander Deluxe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Screenshots carousel ── */}
        <section className="mt-10">
          <h2 className="text-lg font-bold">Images</h2>
          <div className="mt-3 overflow-hidden rounded-lg bg-black">
            <img
              src={screenshots[activeThumb].src}
              alt={screenshots[activeThumb].alt}
              className="aspect-video w-full object-cover transition-opacity duration-300"
            />
          </div>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveThumb(i)}
                className={`shrink-0 overflow-hidden rounded-md transition ${i === activeThumb ? 'ring-2 ring-[#107c10]' : 'opacity-40 hover:opacity-100'}`}
              >
                <img src={s.src} alt={s.alt} className="h-[52px] w-[92px] object-cover" />
              </button>
            ))}
          </div>
        </section>

        {/* ── Description ── */}
        <section className="mt-10 max-w-3xl">
          <h2 className="text-lg font-bold">Description</h2>
          <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-white/65">
            <p>
              <strong className="text-white">The Weight of Us</strong> est un jeu d'horreur psychologique en vue à la
              première personne. Une enfant malade et son protecteur traversent des forêts maudites, des hôpitaux
              abandonnés et des souterrains oubliés à la recherche d'un remède. Mais quelque chose ne veut pas
              qu'elle guérisse.
            </p>
            <p>
              Jouable en solo ou en <strong className="text-white">coopération asymétrique à deux joueurs</strong>&nbsp;:
              un joueur incarne Kijin, adulte armé d'une lampe qui éclaire et protège, l'autre Emily, enfant agile
              armée de ciseaux qui ne doit jamais trop s'éloigner. Chaque rôle offre
              une expérience radicalement différente.
            </p>
            <p>
              Le Traqueur est né de la maladie d'Emily. Plus les deux survivants s'éloignent l'un de l'autre,
              plus il devient agressif. Il analyse vos habitudes, mémorise vos cachettes et se nourrit de votre peur.
            </p>
          </div>
        </section>

        {/* ── Capabilities ── */}
        <section className="mt-10">
          <h2 className="text-lg font-bold">Fonctionnalités</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {capabilities.map(c => (
              <span key={c} className="rounded-full bg-[#2d2d2d] px-3.5 py-1.5 text-[12px] text-white/70">{c}</span>
            ))}
          </div>
        </section>

        {/* ── Highlights ── */}
        <section className="mt-10">
          <h2 className="text-lg font-bold">Points forts</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🎧', title: 'Audio Spatial', desc: 'Dolby Atmos natif pour un son directionnel immersif à travers forêts et souterrains.' },
              { icon: '🫁', title: 'Contrôle du Souffle', desc: 'Le micro du casque capte votre respiration. Le Traqueur écoute.' },
              { icon: '🧠', title: 'IA Évolutive', desc: 'Le Traqueur, né de la maladie d\'Emily, apprend et s\'enrage quand les survivants s\'éloignent.' },
              { icon: '⚡', title: 'Smart Delivery', desc: 'Achetez une fois, obtenez la meilleure version pour votre console.' },
            ].map(f => (
              <div key={f.title} className="rounded-lg bg-[#2d2d2d] p-4">
                <span className="text-2xl">{f.icon}</span>
                <p className="mt-2 text-[13px] font-semibold">{f.title}</p>
                <p className="mt-1 text-[12px] leading-relaxed text-white/45">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Additional info ── */}
        <section className="mt-10">
          <h2 className="text-lg font-bold">Informations supplémentaires</h2>
          <div className="mt-3 grid gap-x-10 gap-y-3 rounded-lg bg-[#2d2d2d] p-5 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Développeur', 'SWILD Studio'],
              ['Éditeur', 'SWILD Studio'],
              ['Date de sortie', '31 octobre 2026'],
              ['Genre', 'Horreur · Survie'],
              ['Joueurs', '1-2 (Coop en ligne)'],
              ['Taille approximative', '48 Go'],
              ['Langues (voix)', 'Français, Anglais'],
              ['Langues (sous-titres)', 'FR, EN, ES, DE, PT, IT'],
              ['Plateforme', 'Xbox Series X|S'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-[11px] uppercase tracking-wider text-white/30">{label}</p>
                <p className="mt-0.5 text-[13px] text-white/80">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Available on ── */}
        <section className="mt-10">
          <h2 className="text-lg font-bold">Disponible sur</h2>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex items-center gap-2 rounded-full bg-[#2d2d2d] px-4 py-2 text-[12px]">
              <FaXbox className="text-[#107c10]" /> Xbox Series X|S
            </span>
            <span className="flex items-center gap-2 rounded-full bg-[#2d2d2d] px-4 py-2 text-[12px]">
              <FaXbox className="text-[#107c10]" /> PC (Microsoft Store)
            </span>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="mt-14 border-t border-white/5 pt-6 text-center text-[11px] text-white/25">
          <p>
            © 2026 SWILD Studio. Tous droits réservés. Xbox, le logo Xbox et Microsoft Store sont des marques
            déposées de Microsoft Corporation. Ceci est une page fictive à but étudiant.
          </p>
        </footer>
      </main>
    </div>
  );
}
