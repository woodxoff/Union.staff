import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function UnionWLStaff() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const pages = {
    home: (
      <div className="w-full">
        {/* Hero */}
        <div className="relative h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-violet-900/30 to-black"></div>
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tighter">
              UNION <span className="text-violet-600">WL</span>
            </h1>
            <p className="text-2xl text-white mb-6 font-light">L'équipe de Union Roleplay</p>
            <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
              Votre espace dédié à la gestion, au suivi et au bon fonctionnement de notre communauté RP.
            </p>
            <p className="text-violet-400 font-semibold text-lg mb-8">Professionnalisme – Équité – Immersion</p>
            
            <button 
              onClick={() => navigateTo('staff')}
              className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-8 py-3 rounded transition-all text-lg"
            >
              Voir l'équipe
            </button>
          </div>
        </div>

        {/* Vision */}
        <div className="bg-black py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-violet-600 mb-12 text-center">Notre Vision 🌟</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Sur <span className="text-white font-bold">Union WL</span>, nous imaginons un espace où chaque joueur vit une véritable histoire, guidée par la créativité, le respect et l'immersion totale.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Notre ambition est de devenir la référence du RP francophone, un lieu où la qualité du jeu prime sur la quantité, et où chaque interaction compte.
                </p>
              </div>
              <div className="h-80 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-xl border border-violet-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <p className="text-gray-400">Image du Serveur</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { emoji: '🎭', title: 'Immersion', desc: 'Univers cohérent' },
                { emoji: '🤝', title: 'Respect', desc: 'Équitable et sain' },
                { emoji: '🚀', title: 'Innovation', desc: 'Mécaniques riches' },
                { emoji: '🇫🇷', title: 'Communauté', desc: 'Passionnés unis' }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 border border-violet-600/20 rounded-lg hover:border-violet-600/50 transition-all bg-slate-900/50">
                  <div className="text-4xl mb-3">{item.emoji}</div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Qui sommes nous */}
        <div className="bg-slate-950 py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="h-80 bg-gradient-to-br from-violet-600/20 to-purple-600/20 rounded-xl border border-violet-600/30 flex items-center justify-center order-last md:order-first">
                <div className="text-center">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-gray-400">Équipe Staff</p>
                </div>
              </div>
              <div>
                <h2 className="text-5xl font-black text-violet-600 mb-8">Qui sommes nous ?</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Le staff d'Union WL est avant tout une équipe de <span className="text-white font-bold">passionnés</span> dédiée à offrir une expérience de jeu immersive, équitable et agréable à chaque joueur.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Notre mission est de veiller au respect des règles, d'encadrer les scènes RP et de soutenir la communauté afin que chacun puisse vivre des histoires mémorables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    reglement: (
      <div className="bg-black min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-black text-violet-600 mb-2">RÈGLEMENT INTERNE STAFF</h1>
          <p className="text-gray-400 mb-4">Version 1.0 - Document à lire obligatoirement</p>
          <p className="text-red-500 font-bold mb-12">⚠️ Leak = Demote + Ban définitif</p>

          <div className="space-y-8">
            {/* Section 1 */}
            <div className="bg-slate-900/50 border border-violet-600/30 p-8 rounded-lg">
              <h2 className="text-3xl font-black text-violet-600 mb-6">1. LE RESPECT DU SERVEUR</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="text-violet-400 font-bold">1.1</span> Gardez votre sérieux et votre professionnalisme pour tous types de situations</p>
                <p><span className="text-violet-400 font-bold">1.2</span> Vous êtes staff pour faire respecter les règles, pas pour en abuser ou montrer vos permissions</p>
                <p><span className="text-violet-400 font-bold">1.3</span> Ne jamais communiquer in-game sur un report. Communication par message ou ticket Discord uniquement</p>
                <p><span className="text-violet-400 font-bold">1.4</span> Pour les sanctions, faites confiance à votre jugement. En cas de doute, consultez l'équipe</p>
                <p><span className="text-violet-400 font-bold">1.5</span> Représentez le lore et l'atmosphère du serveur</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-slate-900/50 border border-violet-600/30 p-8 rounded-lg">
              <h2 className="text-3xl font-black text-violet-600 mb-6">2. TERMES RP ESSENTIELS</h2>
              <div className="space-y-3 text-gray-300 text-sm">
                <p><span className="text-violet-400 font-bold">RP:</span> Role Play - Incarner un personnage à Los Santos</p>
                <p><span className="text-violet-400 font-bold">HRP:</span> Hors Role Play - Actions du joueur hors du personnage</p>
                <p><span className="text-violet-400 font-bold">METAGAMING:</span> Utiliser des infos obtenues hors RP - INTERDIT</p>
                <p><span className="text-violet-400 font-bold">FEAR RP:</span> Jouer la peur dans les situations dangereuses - OBLIGATOIRE</p>
                <p><span className="text-violet-400 font-bold">PAIN RP:</span> Simuler la douleur physique ou mentale - OBLIGATOIRE</p>
                <p><span className="text-violet-400 font-bold">MASS RP:</span> Considérer la population de la ville et les PNJ</p>
                <p><span className="text-violet-400 font-bold">FREE KILL:</span> Tuer sans raison valable - INTERDIT</p>
                <p><span className="text-violet-400 font-bold">CAR KILL:</span> Écraser quelqu'un avec un véhicule - STRICTEMENT INTERDIT</p>
                <p><span className="text-violet-400 font-bold">WIN RP:</span> Vouloir "gagner" à tout prix - CONDAMNABLE</p>
                <p><span className="text-violet-400 font-bold">LOSE RP:</span> Admettre sa défaite et perdre</p>
                <p><span className="text-violet-400 font-bold">JUDGE RP:</span> Juger le RP d'autrui - INTERDIT pour les joueurs</p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-slate-900/50 border border-violet-600/30 p-8 rounded-lg">
              <h2 className="text-3xl font-black text-violet-600 mb-6">3. CONFIDENTIALITÉ</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="text-violet-400 font-bold">3.1</span> Respecter la confidentialité des informations sensibles des joueurs et du staff</p>
                <p className="text-sm">Ne pas divulguer d'informations personnelles ou confidentielles sans autorisation</p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="bg-slate-900/50 border border-violet-600/30 p-8 rounded-lg">
              <h2 className="text-3xl font-black text-violet-600 mb-6">4. COMMUNICATION</h2>
              <div className="space-y-4 text-gray-300">
                <p><span className="text-violet-400 font-bold">4.1</span> La communication résout les problèmes et aide les joueurs en besoin</p>
                <p><span className="text-violet-400 font-bold">4.1.1</span> Ne JAMAIS communiquer in-game sur un report avec du langage familier - SANCTION SÉVÈRE / DEMOTE</p>
                <p><span className="text-violet-400 font-bold">4.1.2</span> Utilisez Discord (vocal ou ticket) pour éviter le metagaming</p>
                <p><span className="text-violet-400 font-bold">4.1.3</span> Zéro favoritisme envers vos amis - Règles identiques pour tout le monde</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    staff: (
      <div className="bg-black min-h-screen py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-black text-violet-600 mb-4">HIÉRARCHIE STAFF</h1>
          <p className="text-gray-400 mb-16">Structure organisationnelle d'Union WL</p>

          {/* DIRECTION */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-black text-violet-600 whitespace-nowrap">🔱 DIRECTION</h2>
              <div className="h-1 flex-1 bg-gradient-to-l from-violet-600 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <div
                className="group relative bg-gradient-to-r from-violet-900 to-black border-2 border-violet-700 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">🔱</div>
                    <div>
                      <h3 className="text-2xl font-black text-violet-100">Fondateur</h3>
                      <p className="text-violet-400 font-bold text-lg">xKyzo</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-violet-300">Discord: xKyzo#2847</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-fuchsia-600 to-transparent"></div>
              <h2 className="text-3xl font-black text-fuchsia-600 whitespace-nowrap">📊 LEADERSHIP</h2>
              <div className="h-1 flex-1 bg-gradient-to-l from-fuchsia-600 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <div
                className="group relative bg-gradient-to-r from-purple-800 to-slate-900 border-2 border-purple-600 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.1s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">📊</div>
                    <div>
                      <h3 className="text-2xl font-black text-purple-100">Responsable</h3>
                      <p className="text-purple-400 font-bold text-lg">SkyLine</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-purple-300">Discord: SkyLine#4921</p>
                  </div>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-r from-violet-700 to-slate-900 border-2 border-violet-600 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.15s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">⚙️</div>
                    <div>
                      <h3 className="text-2xl font-black text-violet-100">Gérant Staff</h3>
                      <p className="text-violet-400 font-bold text-lg">Vekthor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-violet-300">Discord: Vekthor#6734</p>
                  </div>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-r from-fuchsia-800 to-slate-900 border-2 border-fuchsia-600 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.2s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">💬</div>
                    <div>
                      <h3 className="text-2xl font-black text-fuchsia-100">Gérant Discord</h3>
                      <p className="text-fuchsia-400 font-bold text-lg">NorthSide_</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-fuchsia-300">Discord: NorthSide#1564</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ADMINISTRATION */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-violet-600 to-transparent"></div>
              <h2 className="text-3xl font-black text-violet-600 whitespace-nowrap">👑 ADMINISTRATION</h2>
              <div className="h-1 flex-1 bg-gradient-to-l from-violet-600 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <div
                className="group relative bg-gradient-to-r from-violet-600 to-slate-900 border-2 border-violet-500 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.25s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">👑</div>
                    <div>
                      <h3 className="text-2xl font-black text-violet-100">Administrateur</h3>
                      <p className="text-violet-400 font-bold text-lg">Titan</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-violet-300">Discord: Titan#3289</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MODÉRATION */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-cyan-600 to-transparent"></div>
              <h2 className="text-3xl font-black text-cyan-600 whitespace-nowrap">🛡️ MODÉRATION</h2>
              <div className="h-1 flex-1 bg-gradient-to-l from-cyan-600 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <div
                className="group relative bg-gradient-to-r from-cyan-600 to-slate-900 border-2 border-cyan-500 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.3s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">🛡️</div>
                    <div>
                      <h3 className="text-2xl font-black text-cyan-100">Modérateur</h3>
                      <p className="text-cyan-400 font-bold text-lg">Marcus</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-cyan-300">Discord: Marcus#7821</p>
                  </div>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-r from-blue-700 to-slate-900 border-2 border-blue-600 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.35s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">⚖️</div>
                    <div>
                      <h3 className="text-2xl font-black text-blue-100">Modérateur Test</h3>
                      <p className="text-blue-400 font-bold text-lg">Zephyr</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-300">Discord: Zephyr#2156</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SUPPORT */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-slate-500 to-transparent"></div>
              <h2 className="text-3xl font-black text-slate-400 whitespace-nowrap">🤝 SUPPORT</h2>
              <div className="h-1 flex-1 bg-gradient-to-l from-slate-500 to-transparent"></div>
            </div>

            <div className="space-y-4">
              <div
                className="group relative bg-gradient-to-r from-slate-500 to-slate-900 border-2 border-slate-400 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.4s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">🤝</div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-100">Helper</h3>
                      <p className="text-slate-300 font-bold text-lg">Crown</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-300">Discord: Crown#5493</p>
                  </div>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-r from-slate-600 to-slate-900 border-2 border-slate-500 p-6 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-600/50"
                style={{ animation: `slideDown 0.8s ease-out 0.45s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">👤</div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-200">Helper Test</h3>
                      <p className="text-slate-400 font-bold text-lg">Nova</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400">Discord: Nova#8764</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className="p-8 bg-gradient-to-r from-violet-900/20 to-purple-900/20 border border-violet-600/50 rounded-lg">
            <h3 className="text-xl font-black text-violet-400 mb-4">📌 STRUCTURE HIÉRARCHIQUE</h3>
            <p className="text-gray-300 mb-4">
              Notre équipe est organisée en 5 catégories pour assurer une gestion efficace et professionnelle du serveur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
              <div className="text-center p-3 bg-black/30 rounded">
                <p className="text-violet-400 font-bold">DIRECTION</p>
                <p className="text-gray-400">Leadership global</p>
              </div>
              <div className="text-center p-3 bg-black/30 rounded">
                <p className="text-fuchsia-400 font-bold">LEADERSHIP</p>
                <p className="text-gray-400">Gestion opérationnelle</p>
              </div>
              <div className="text-center p-3 bg-black/30 rounded">
                <p className="text-violet-400 font-bold">ADMIN</p>
                <p className="text-gray-400">Décisions importantes</p>
              </div>
              <div className="text-center p-3 bg-black/30 rounded">
                <p className="text-cyan-400 font-bold">MODÉRATION</p>
                <p className="text-gray-400">Respect des règles</p>
              </div>
              <div className="text-center p-3 bg-black/30 rounded">
                <p className="text-slate-400 font-bold">SUPPORT</p>
                <p className="text-gray-400">Assistance joueurs</p>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    )
  };

  return (
    <div className="w-full bg-black">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-black border-b border-violet-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="text-white font-black text-2xl">
                UNION <span className="text-violet-600">WL</span>
              </span>
            </button>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-2">
              {[
                { id: 'home', label: 'ACCUEIL' },
                { id: 'reglement', label: 'RÈGLEMENT STAFF' },
                { id: 'staff', label: 'ÉQUIPE' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-4 py-2 font-semibold transition-all text-sm ${
                    currentPage === item.id
                      ? 'bg-violet-600 text-white'
                      : 'text-gray-400 hover:text-violet-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-400 hover:text-violet-400"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-violet-600/30">
              {[
                { id: 'home', label: 'ACCUEIL' },
                { id: 'reglement', label: 'RÈGLEMENT' },
                { id: 'staff', label: 'ÉQUIPE' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`w-full px-4 py-3 text-left font-semibold transition-all ${
                    currentPage === item.id
                      ? 'bg-violet-600 text-white'
                      : 'text-gray-400 hover:text-violet-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* CONTENU */}
      <main>
        {pages[currentPage]}
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-violet-600/30 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© Union WL — Documentation staff</p>
          <p className="mt-2">Site Staff Officiel</p>
        </div>
      </footer>
    </div>
  );
}
