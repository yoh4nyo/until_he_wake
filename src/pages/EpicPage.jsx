import { Link } from 'react-router-dom';
import { useState } from 'react';

import heroImg from '../../assets/images/SCENEBACKTRUC7.png';
import screen1 from '../../assets/images/SCENEBACKTRUC2.png';
import screen2 from '../../assets/images/SCENEBACKTRUC3.png';
import screen3 from '../../assets/images/SCENEBACKTRUC5.png';
import screen4 from '../../assets/images/SCENEBACKTRUC4.png';
import screen5 from '../../assets/images/SCENEBACKTRUC6.png';

const screenshots = [heroImg, screen1, screen2, screen3, screen4, screen5];

const features = [
  { icon: '🧠', title: 'IA Évolutive', desc: 'Le Traqueur, né de la maladie d\'Emily, apprend vos habitudes.' },
  { icon: '🎧', title: 'Audio Spatial 3D', desc: 'Sound design binaural à travers forêts et souterrains.' },
  { icon: '🫁', title: 'Contrôle du Souffle', desc: 'Votre micro influence le comportement du Traqueur.' },
  { icon: '👥', title: 'Coop Asymétrique', desc: 'Kijin protège, Emily se faufile. Ne vous séparez pas.' }
];

export default function EpicPage() {
  const [mainImg, setMainImg] = useState(0);
  const [owned, setOwned] = useState(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      {/* Top bar */}
      <header className="bg-[#1a1a1a] border-b border-[#2a2a2a]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-6">
            <span className="text-xl font-bold tracking-wide">EPIC GAMES</span>
            <nav className="hidden gap-5 text-xs uppercase tracking-wider text-[#999] md:flex">
              <span className="cursor-pointer transition hover:text-white">Boutique</span>
              <span className="cursor-pointer transition hover:text-white">Bibliothèque</span>
              <span className="cursor-pointer transition hover:text-white">Communauté</span>
            </nav>
          </div>
          <Link to="/precommande" className="text-xs text-[#0074e4] transition hover:text-white">← Retour</Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1200px] px-6 pb-16 pt-6">
        {/* Hero area */}
        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Gallery */}
          <div>
            <div className="overflow-hidden rounded-lg bg-black">
              <img src={screenshots[mainImg]} alt="Screenshot" className="aspect-video w-full object-cover" />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className={`shrink-0 overflow-hidden rounded-md transition ${i === mainImg ? 'ring-2 ring-[#0074e4]' : 'opacity-50 hover:opacity-100'}`}
                >
                  <img src={s} alt="" className="h-[52px] w-[92px] object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right info panel */}
          <div className="flex flex-col gap-4">
            <img src={heroImg} alt="Cover" className="w-full rounded-lg" />
            <div>
              <div className="flex items-center gap-2 text-xs text-[#999]">
                <span className="rounded bg-[#0074e4]/20 px-2 py-0.5 text-[#0074e4]">Horreur</span>
                <span className="rounded bg-[#0074e4]/20 px-2 py-0.5 text-[#0074e4]">Survie</span>
                <span className="rounded bg-[#0074e4]/20 px-2 py-0.5 text-[#0074e4]">Coop</span>
              </div>
              <h1 className="mt-3 text-3xl font-bold">The Weight of Us</h1>
              <p className="mt-1 text-xs text-[#999]">SWILD Studio</p>
              <p className="mt-3 text-sm leading-relaxed text-[#bbb]">
                Une enfant malade et son protecteur traversent des environnements hostiles
                à la recherche d'un remède. Le Traqueur, né de sa maladie, ne les laissera pas faire.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs text-[#999]">Évaluations :</span>
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(n => (
                    <span key={n} className={`text-sm ${n <= 4 ? 'text-[#0074e4]' : 'text-[#0074e4]/40'}`}>★</span>
                  ))}
                </div>
                <span className="text-xs text-[#999]">4.8</span>
              </div>

              <div className="mt-5 rounded-lg bg-[#1a1a1a] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">59,99€</p>
                    <p className="text-xs text-[#999]">Disponible le 31 octobre 2026</p>
                  </div>
                  <button
                    onClick={() => setOwned(true)}
                    className={`rounded-lg px-5 py-2.5 text-sm font-medium transition ${owned ? 'bg-[#2a2a2a] text-[#999]' : 'bg-[#0074e4] hover:bg-[#0062c2]'}`}
                  >
                    {owned ? '✓ Ajouté' : 'Acheter'}
                  </button>
                </div>
              </div>

              <button className="mt-3 w-full rounded-lg border border-[#2a2a2a] py-2.5 text-sm text-[#999] transition hover:border-[#0074e4] hover:text-white">
                ♡ Ajouter à la liste de souhaits
              </button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold">Caractéristiques</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {features.map(f => (
              <div key={f.title} className="flex gap-3 rounded-lg bg-[#1a1a1a] p-4">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <p className="text-sm font-medium">{f.title}</p>
                  <p className="text-xs text-[#999]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mt-10">
          <h2 className="mb-3 text-lg font-bold">À propos</h2>
          <div className="space-y-3 text-sm leading-relaxed text-[#bbb]">
            <p>
              <strong className="text-white">The Weight of Us</strong> est un jeu d'horreur psychologique en vue subjective.
              Guidez Kijin, adulte armé d'une lampe, et Emily, enfant malade armée de ciseaux, à travers des forêts
              maudites, des hôpitaux abandonnés et des souterrains oubliés. Le remède existe — mais le Traqueur aussi.
            </p>
            <p>
              Jouable en solo ou en coop asymétrique à deux joueurs. Le Traqueur est né de la maladie d'Emily :
              plus les deux survivants s'éloignent, plus il devient agressif. Il analyse vos habitudes
              et se nourrit de votre peur.
            </p>
          </div>
        </div>

        {/* Editions */}
        <div className="mt-10">
          <h2 className="mb-4 text-lg font-bold">Éditions disponibles</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { name: 'Standard', price: '59,99€', items: ['Jeu complet', 'Skin bonus'] },
              { name: 'Deluxe', price: '79,99€', highlight: true, items: ['Jeu complet', 'Accès 72h', 'Artbook + OST', 'Mission annexe'] },
              { name: 'Collector', price: '129,99€', items: ['Tout Deluxe', 'Steelbook', 'Figurine 20 cm'] }
            ].map(ed => (
              <div key={ed.name} className={`rounded-lg p-4 ${ed.highlight ? 'border border-[#0074e4] bg-[#0074e4]/10' : 'bg-[#1a1a1a]'}`}>
                <p className="text-xs text-[#999]">{ed.name}</p>
                <p className="mt-1 text-xl font-bold">{ed.price}</p>
                <ul className="mt-3 space-y-1 text-xs text-[#bbb]">
                  {ed.items.map(i => <li key={i}>• {i}</li>)}
                </ul>
                <button className={`mt-4 w-full rounded-lg py-2 text-xs font-medium transition ${ed.highlight ? 'bg-[#0074e4] hover:bg-[#0062c2]' : 'bg-[#2a2a2a] hover:bg-[#333]'}`}>
                  Acheter
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-[#2a2a2a] pt-4 text-center text-[11px] text-[#666]">
          © 2026 SWILD Studio. Page fictive à but étudiant. Epic Games est une marque déposée d'Epic Games, Inc.
        </div>
      </div>
    </div>
  );
}
