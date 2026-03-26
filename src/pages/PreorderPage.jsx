import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const editions = [
  {
    name: 'Standard',
    price: '59,99 EUR',
    cta: 'Choisir Standard',
    items: ['Jeu de base', 'Bonus cosmétique exclusif', 'Fond d’écran digital'],
    tone: 'border-white/15 bg-white/5'
  },
  {
    name: 'Deluxe',
    price: '79,99 EUR',
    cta: 'Prendre Deluxe',
    items: ['Tout le contenu Standard', 'Accès anticipé 72h', 'Artbook + OST', 'Mission annexe exclusive'],
    tone: 'border-blood bg-blood/10'
  },
  {
    name: 'Collector',
    price: '129,99 EUR',
    cta: 'Réserver Collector',
    items: ['Tout le contenu Deluxe', 'Steelbook numéroté', 'Figurine 20 cm', 'Carte de Blackthorn Asylum'],
    tone: 'border-amber-300/30 bg-amber-100/5'
  }
];

const bonuses = [
  ['Skin exclusif', 'Set Rust Requiem unique.'],
  ['Pack audio', 'Sons rétro et ambiance binaurale.'],
  ['Thème profil', 'Bannière et avatar fondateurs.'],
  ['Accès prioritaire', 'File prioritaire + notif de lancement.']
];

const faqs = [
  ['Puis-je annuler ma précommande ?', 'Oui, annulation possible jusqu’à la veille du lancement.'],
  ['Le bonus est-il disponible sur toutes les plateformes ?', 'Oui, Steam, PlayStation 5 et Xbox Series.'],
  ['Quand serai-je débité ?', 'Selon la plateforme, au moment de l’achat ou avant la sortie.']
];

export default function PreorderPage() {
  const [time, setTime] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [lastSecond, setLastSecond] = useState('00');

  useEffect(() => {
    const target = new Date('2026-10-31T00:00:00');
    const tick = () => {
      const diff = target - new Date();
      if (diff <= 0) {
        setTime({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      const next = {
        days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
      };
      setLastSecond((prev) => (prev !== next.seconds ? next.seconds : prev));
      setTime(next);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="noise min-h-screen bg-[radial-gradient(circle_at_top_left,#120909_0%,#070607_55%,#050505_100%)] px-4 py-8 text-zinc-200 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link to="/" className="font-serif text-2xl tracking-[0.15em] text-white">UNTIL HE WAKES</Link>
          <Link to="/" className="border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.15em] text-zinc-300 transition hover:border-white/40 hover:text-white">Retour au site</Link>
        </div>

        <section className="mb-20 grid gap-6 lg:grid-cols-[2fr,1fr] lg:items-stretch">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-blood">Précommande ouverte</p>
            <h1 className="mt-3 font-serif text-4xl text-white md:text-5xl">Réserve ta descente dans l'horreur</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">Choisis ton édition, débloque les bonus exclusifs de lancement et sois prêt pour l’ouverture des portes.</p>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-blood">Lancement mondial : 31 Octobre 2026</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {Object.entries(time).map(([key, value]) => (
                <div key={key} className="count-box-rework">
                  <div className={`count-value-rework ${key === 'seconds' && lastSecond === value ? 'count-flip' : ''}`}>{value}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.12em] text-zinc-500">{key}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#editions" className="bg-blood px-6 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-bloodDark">Précommander maintenant</a>
              <a href="#editions" className="border border-blood/40 bg-blood/5 px-6 py-3 text-xs uppercase tracking-[0.18em] text-zinc-300 transition hover:border-blood hover:text-white">Voir les éditions</a>
            </div>
          </div>

          <aside className="rounded-xl border border-blood/40 bg-blood/10 p-6 card-glow">
            <p className="text-xs uppercase tracking-[0.18em] text-blood">Edition Deluxe</p>
            <div className="mt-2 font-serif text-4xl text-white">79,99 EUR</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>- Skin exclusif Nurse of Ash</li>
              <li>- Artbook numérique + OST</li>
              <li>- Accès anticipé 72h</li>
            </ul>
            <p className="mt-4 text-[10px] uppercase tracking-[0.12em] text-zinc-500">Paiement sécurisé • Steam, PS5, Xbox</p>
            <a href="#editions" className="mt-6 block w-full bg-blood px-4 py-3 text-center text-xs uppercase tracking-[0.18em] text-white transition hover:bg-bloodDark">Réserver Deluxe</a>
          </aside>
        </section>

        <section id="editions" className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-blood">Éditions</p>
          <h2 className="mt-3 font-serif text-4xl text-white">Choisis ton niveau de terreur</h2>
          <p className="mt-3 text-sm text-zinc-400">Toutes les éditions incluent le jeu complet et les bonus de précommande.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {editions.map((edition) => (
              <article key={edition.name} className={`edition-card-rework rounded-xl border p-5 ${edition.tone}`}>
                <h3 className="font-serif text-3xl text-white">{edition.name}</h3>
                <div className="mt-3 font-serif text-4xl text-white">{edition.price}</div>
                <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                  {edition.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-blood px-4 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-bloodDark">{edition.cta}</button>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-blood">Bonus précommande</p>
          <h2 className="mt-3 font-serif text-4xl text-white">Ce que tu reçois en réservant maintenant</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {bonuses.map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-blood/40 hover:bg-blood/5">
                <h3 className="font-serif text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-blood">FAQ précommande</p>
          <h2 className="mt-3 font-serif text-4xl text-white">Questions fréquentes</h2>
          <div className="mt-8 grid gap-3">
            {faqs.map(([question, answer]) => (
              <div key={question} className="rounded-lg border border-white/10 bg-white/5 p-5">
                <h3 className="font-serif text-2xl text-white">{question}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-10 pt-2 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-blood">Précommande</p>
          <h2 className="mt-3 font-serif text-4xl text-white md:text-5xl">Prends ta place avant l'ouverture des portes</h2>
          <p className="mt-4 text-sm text-zinc-400">Les bonus disparaissent à la sortie.</p>
          <a href="#editions" className="mt-8 inline-block bg-blood px-8 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-bloodDark">Je précommande maintenant</a>
        </section>
      </div>
    </div>
  );
}
