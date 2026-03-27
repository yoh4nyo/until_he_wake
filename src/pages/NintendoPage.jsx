import { Link } from 'react-router-dom';
import { useState } from 'react';

import heroImg from '../../assets/images/SCENEBACKTRUC7.png';
import screen1 from '../../assets/images/SCENEBACKTRUC2.png';
import screen2 from '../../assets/images/SCENEBACKTRUC3.png';
import screen3 from '../../assets/images/SCENEBACKTRUC5.png';
import screen4 from '../../assets/images/SCENEBACKTRUC4.png';

const screenshots = [heroImg, screen1, screen2, screen3, screen4];

export default function NintendoPage() {
  const [mainImg, setMainImg] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-[#333]">
      {/* Top bar - Nintendo red */}
      <header className="bg-[#e60012]">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-3">
          <div className="flex items-center gap-5">
            <span className="text-lg font-bold tracking-wide text-white">Nintendo</span>
            <nav className="hidden gap-4 text-xs uppercase tracking-wider text-white/80 md:flex">
              <span className="cursor-pointer transition hover:text-white">Jeux</span>
              <span className="cursor-pointer transition hover:text-white">Nintendo Switch</span>
              <span className="cursor-pointer transition hover:text-white">Assistance</span>
            </nav>
          </div>
          <Link to="/precommande" className="rounded-full bg-white/20 px-3 py-1.5 text-xs text-white transition hover:bg-white/30">← Retour</Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1100px] px-5 pb-16 pt-8">
        {/* Breadcrumb */}
        <p className="mb-4 text-xs text-[#999]">
          Nintendo eShop &gt; Jeux Nintendo Switch &gt; <span className="text-[#e60012]">The Weight of Us</span>
        </p>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Left - Media */}
          <div>
            <div className="overflow-hidden rounded-2xl bg-black shadow-lg">
              <img src={screenshots[mainImg]} alt="Screenshot" className="aspect-video w-full object-cover" />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(i)}
                  className={`shrink-0 overflow-hidden rounded-lg transition ${i === mainImg ? 'ring-2 ring-[#e60012]' : 'opacity-50 hover:opacity-100'}`}
                >
                  <img src={s} alt="" className="h-[50px] w-[88px] object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div>
            <span className="inline-block rounded-full bg-[#e60012] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Nintendo Switch 2
            </span>
            <h1 className="mt-3 text-3xl font-bold text-[#1a1a1a]">The Weight of Us</h1>
            <p className="mt-1 text-sm text-[#999]">SWILD Studio</p>

            <div className="mt-3 flex items-center gap-2">
              <span className="rounded bg-[#333] px-2 py-0.5 text-[10px] font-bold text-white">PEGI 18</span>
              <span className="text-xs text-[#999]">Horreur, Survie, Coop</span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#666]">
              Une enfant malade et son protecteur traversent des environnements hostiles
              à la recherche d'un remède. Le Traqueur, né de sa maladie, ne les laissera pas faire.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5 shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#999]">Précommande</p>
                  <p className="text-2xl font-bold text-[#1a1a1a]">59,99€</p>
                </div>
                <div className="text-right text-xs text-[#999]">
                  <p>Date de sortie</p>
                  <p className="font-medium text-[#333]">31 oct. 2026</p>
                </div>
              </div>

              <button className="mt-4 w-full rounded-full bg-[#e60012] py-3 text-sm font-bold text-white transition hover:bg-[#cc0010]">
                Précommander sur le eShop
              </button>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className={`mt-2 w-full rounded-full border py-2.5 text-sm transition ${wishlisted ? 'border-[#e60012] bg-[#e60012]/5 text-[#e60012]' : 'border-[#ddd] text-[#999] hover:border-[#e60012] hover:text-[#e60012]'}`}
              >
                {wishlisted ? '✓ Dans votre liste de souhaits' : '♡ Ajouter à la liste de souhaits'}
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-bold text-[#1a1a1a]">1-2</p>
                <p className="text-[10px] text-[#999]">Joueurs</p>
              </div>
              <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-bold text-[#1a1a1a]">12 Go</p>
                <p className="text-[10px] text-[#999]">Espace requis</p>
              </div>
              <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-bold text-[#1a1a1a]">Oui</p>
                <p className="text-[10px] text-[#999]">Jeu en ligne</p>
              </div>
              <div className="rounded-xl bg-white p-3 text-center shadow-sm">
                <p className="text-lg font-bold text-[#1a1a1a]">FR</p>
                <p className="text-[10px] text-[#999]">Langues</p>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12 rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-[#1a1a1a]">À propos de ce jeu</h2>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#666]">
            <p>
              <strong className="text-[#333]">The Weight of Us</strong> est un jeu d'horreur psychologique où une enfant
              malade et son protecteur traversent des forêts maudites, des hôpitaux abandonnés et des souterrains
              oubliés. Chaque environnement cache une vérité plus terrifiante que le précédent.
            </p>
            <p>
              Le Traqueur, créature née de la maladie d'Emily, rampe sur les murs et les plafonds.
              Plus les deux survivants s'éloignent, plus il devient agressif.
              Il analyse votre comportement et se nourrit de votre peur.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-6 grid gap-3 md:grid-cols-4">
          {[
            { icon: '🧠', title: 'IA Évolutive' },
            { icon: '🎧', title: 'Audio 3D' },
            { icon: '🫁', title: 'Contrôle du Souffle' },
            { icon: '👥', title: 'Coop Asymétrique' }
          ].map(f => (
            <div key={f.title} className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <p className="text-2xl">{f.icon}</p>
              <p className="mt-1 text-xs font-medium text-[#333]">{f.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-[11px] text-[#999]">
          © 2026 SWILD Studio. Page fictive à but étudiant. Nintendo Switch est une marque déposée de Nintendo.
        </div>
      </div>
    </div>
  );
}
