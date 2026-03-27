import { Link } from 'react-router-dom';
import { useState } from 'react';

import heroImg from '../../assets/images/SCENEBACKTRUC7.png';
import screen1 from '../../assets/images/SCENEBACKTRUC2.png';
import screen2 from '../../assets/images/SCENEBACKTRUC3.png';
import screen3 from '../../assets/images/SCENEBACKTRUC5.png';
import screen4 from '../../assets/images/SCENEBACKTRUC4.png';
import screen5 from '../../assets/images/SCENEBACKTRUC6.png';

const screenshots = [heroImg, screen1, screen2, screen3, screen4, screen5];

export default function PlayStationPage() {
  const [mainImg, setMainImg] = useState(0);
  const [added, setAdded] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] font-sans text-white">
      {/* Top bar - PS blue */}
      <header className="bg-[#00439c]">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-3">
          <div className="flex items-center gap-5">
            <span className="text-base font-bold tracking-wider">PlayStation Store</span>
            <nav className="hidden gap-4 text-xs uppercase tracking-wider text-white/70 md:flex">
              <span className="cursor-pointer transition hover:text-white">Jeux</span>
              <span className="cursor-pointer transition hover:text-white">Abonnements</span>
              <span className="cursor-pointer transition hover:text-white">Offres</span>
            </nav>
          </div>
          <Link to="/precommande" className="text-xs text-white/70 transition hover:text-white">← Retour</Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-5 pb-16 pt-6">
        {/* Hero banner */}
        <div className="relative overflow-hidden rounded-2xl">
          <img src={heroImg} alt="Hero" className="aspect-[21/9] w-full object-cover brightness-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="inline-block rounded bg-[#00439c] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">PS5</span>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">The Weight of Us</h1>
            <p className="mt-1 text-sm text-white/70">SWILD Studio</p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Left */}
          <div>
            {/* Screenshots */}
            <div className="overflow-hidden rounded-xl bg-[#111]">
              <img src={screenshots[mainImg]} alt="Screenshot" className="aspect-video w-full object-cover" />
            </div>
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className={`shrink-0 overflow-hidden rounded-lg transition ${i === mainImg ? 'ring-2 ring-[#00439c]' : 'opacity-40 hover:opacity-100'}`}
                >
                  <img src={s} alt="" className="h-[50px] w-[88px] object-cover" />
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-lg font-bold">Description</h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/70">
                <p>
                  <strong className="text-white">The Weight of Us</strong> est un jeu d'horreur psychologique en vue subjective.
                  Une enfant malade et son protecteur traversent des forêts maudites, des hôpitaux abandonnés
                  et des souterrains oubliés à la recherche d'un remède.
                </p>
                <p>
                  Jouable en solo ou en coop asymétrique. Kijin, adulte armé d'une lampe, éclaire et protège.
                  Emily, enfant agile armée de ciseaux, se faufile mais ne doit jamais trop s'éloigner.
                </p>
                <p>
                  Le Traqueur est né de la maladie d'Emily. Plus les deux survivants s'éloignent,
                  plus il devient agressif. Contrôlez votre souffle, exploitez votre environnement et restez en vie.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {[
                { icon: '🎧', title: 'Audio Spatial 3D', desc: 'Son binaural à travers forêts et souterrains via PS5 Tempest Audio.' },
                { icon: '🫁', title: 'Contrôle du Souffle', desc: 'Le micro DualSense capture votre respiration. Le Traqueur écoute.' },
                { icon: '🧠', title: 'IA Évolutive', desc: 'Le Traqueur, né de la maladie d\'Emily, apprend et s\'adapte.' },
                { icon: '🎮', title: 'Retour Haptique', desc: 'Le DualSense transmet chaque vibration, chaque tension.' }
              ].map(f => (
                <div key={f.title} className="rounded-xl bg-[#111] p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{f.icon}</span>
                    <p className="text-sm font-medium">{f.title}</p>
                  </div>
                  <p className="mt-1 text-xs text-white/50">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Purchase panel */}
          <div>
            <div className="sticky top-6 space-y-4">
              {/* Price card */}
              <div className="rounded-2xl bg-[#111] p-5">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#00439c] px-2 py-0.5 text-[10px] font-bold uppercase">Précommande</span>
                  <span className="text-xs text-white/50">PS5</span>
                </div>
                <p className="mt-3 text-3xl font-bold">59,99€</p>
                <p className="mt-1 text-xs text-white/50">Disponible le 31 octobre 2026</p>

                <button
                  onClick={() => setAdded(true)}
                  className={`mt-4 w-full rounded-full py-3 text-sm font-bold transition ${added ? 'bg-[#1d6f30] text-white' : 'bg-[#00439c] hover:bg-[#0056cc]'}`}
                >
                  {added ? '✓ Ajouté au panier' : 'Ajouter au panier'}
                </button>

                <button className="mt-2 w-full rounded-full border border-white/20 py-2.5 text-sm text-white/70 transition hover:border-white/40 hover:text-white">
                  ♡ Liste de souhaits
                </button>
              </div>

              {/* Deluxe */}
              <div className="rounded-2xl border border-[#00439c]/40 bg-[#00439c]/10 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#00439c]">Édition Deluxe</p>
                <p className="mt-2 text-2xl font-bold">79,99€</p>
                <ul className="mt-3 space-y-1.5 text-xs text-white/60">
                  <li>✓ Jeu complet</li>
                  <li>✓ Accès anticipé 72h</li>
                  <li>✓ Artbook numérique + OST</li>
                  <li>✓ Mission annexe exclusive</li>
                  <li>✓ Thème PS5 exclusif</li>
                </ul>
                <button className="mt-4 w-full rounded-full bg-[#00439c] py-2.5 text-sm font-bold transition hover:bg-[#0056cc]">
                  Acheter Deluxe
                </button>
              </div>

              {/* Game details */}
              <div className="rounded-2xl bg-[#111] p-5">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-white/50">Détails</h3>
                <div className="space-y-2 text-xs">
                  {[
                    ['Plateforme', 'PS5'],
                    ['Genre', 'Horreur, Survie'],
                    ['Joueurs', '1-2 (Coop en ligne)'],
                    ['Développeur', 'SWILD Studio'],
                    ['Taille', '45 Go'],
                    ['Voix', 'Français, Anglais'],
                    ['Sous-titres', 'Français, Anglais, Espagnol']
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-white/40">{k}</span>
                      <span>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-4 text-center text-[11px] text-white/30">
          © 2026 SWILD Studio. Page fictive à but étudiant. PlayStation est une marque déposée de Sony Interactive Entertainment.
        </div>
      </div>
    </div>
  );
}
