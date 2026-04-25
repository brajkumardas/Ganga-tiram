/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Waves, 
  MapPin, 
  Sparkles, 
  Palette, 
  Music, 
  Leaf, 
  Heart, 
  ChevronRight, 
  ChevronDown, 
  Search,
  Globe,
  HandHelping,
  Info
} from 'lucide-react';
import { gangaPlaces, contribFACE, GangaPlace } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState('journey');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<GangaPlace | null>(null);

  const filteredPlaces = gangaPlaces.filter(place => 
    place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    place.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D241E] font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#E8DCC4] px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Waves className="text-[#3A7CA5] w-8 h-8" />
            <span className="text-2xl font-serif font-bold tracking-tight text-[#2D241E]">Mother Ganga</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-[#5A4B3F]">
            <button onClick={() => setActiveTab('journey')} className={`${activeTab === 'journey' ? 'text-[#3A7CA5] border-b-2 border-[#3A7CA5]' : ''} hover:text-[#3A7CA5] transition-colors`}>Journey</button>
            <button onClick={() => setActiveTab('heritage')} className={`${activeTab === 'heritage' ? 'text-[#3A7CA5] border-b-2 border-[#3A7CA5]' : ''} hover:text-[#3A7CA5] transition-colors`}>Heritage</button>
            <button onClick={() => setActiveTab('action')} className={`${activeTab === 'action' ? 'text-[#3A7CA5] border-b-2 border-[#3A7CA5]' : ''} hover:text-[#3A7CA5] transition-colors`}>Contribute</button>
          </div>
          <button className="bg-[#3A7CA5] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-[#2F668A] transition-colors shadow-lg">
            Donate
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/ganga_river_hero_1777100817848.png" 
            alt="Ganga River" 
            className="w-full h-full object-cover brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FDFCF8]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-serif text-white mb-6 font-bold"
          >
            The Eternal Grace
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-[#E8DCC4] max-w-2xl mx-auto mb-10 leading-relaxed italic"
          >
            "A journey of 2,525 kilometers, a legacy of 5,000 years, and the heartbeat of a billion souls."
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-[#D4A373] text-white px-8 py-4 rounded-full font-bold hover:bg-[#B1895D] transition-all flex items-center gap-2 shadow-xl">
              Start the Journey <ChevronRight size={20} />
            </button>
            <button className="bg-white/20 backdrop-blur-md border border-white/40 text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all">
              Clean Ganga Mission
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        
        {/* FACE Framework Introduction */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[#3A7CA5] font-black text-sm uppercase tracking-[0.3em] mb-4">Preservation Framework</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#2D241E] mb-6">The FACE of Ganga</h3>
            <p className="text-[#5A4B3F] max-w-2xl mx-auto">To preserve Mother Ganga, we focus on four pillars that define her essence and ensure her future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contribFACE.map((item) => (
              <motion.div 
                key={item.letter}
                whileHover={{ y: -10 }}
                className="group relative bg-white h-[450px] rounded-[2rem] overflow-hidden border border-[#E8DCC4] shadow-sm hover:shadow-2xl transition-all"
              >
                {/* Background Image with Overlay */}
                <img 
                  src={(item as any).image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:via-black/60 transition-colors"></div>
                
                <div className="absolute -right-4 -top-4 text-[12rem] font-black text-white/10 select-none">
                  {item.letter}
                </div>

                <div className="absolute bottom-0 p-8 text-white">
                  <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/30">
                    {item.icon === 'Sparkles' && <Sparkles className="text-[#D4A373]" />}
                    {item.icon === 'Palette' && <Palette className="text-[#3A7CA5]" />}
                    {item.icon === 'Music' && <Music className="text-[#D4A373]" />}
                    {item.icon === 'Leaf' && <Leaf className="text-[#3A7CA5]" />}
                  </div>
                  <h4 className="text-2xl font-serif font-bold mb-3">{item.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 transform">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-[#D4A373] font-black text-sm uppercase tracking-[0.3em] mb-4">The Sacred Trail</h2>
              <h3 className="text-4xl font-serif font-bold text-[#2D241E]">75 Places of Heritage</h3>
              <p className="text-[#5A4B3F] mt-2">From the glaciers of Gomukh to the endless sea at Gangasagar.</p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A8988A]" size={18} />
              <input 
                type="text" 
                placeholder="Search places or states..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-full border border-[#E8DCC4] bg-white focus:outline-none focus:ring-2 focus:ring-[#3A7CA5] transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredPlaces.map((place) => (
                <motion.div 
                  key={place.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedPlace(place)}
                  className="bg-white rounded-2xl border border-[#E8DCC4] overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[#3A7CA5] font-bold text-xs uppercase tracking-widest">{place.state}</span>
                      <MapPin size={16} className="text-[#D4A373]" />
                    </div>
                    <h5 className="text-xl font-bold mb-2 group-hover:text-[#3A7CA5] transition-colors">{place.name}</h5>
                    <p className="text-[#5A4B3F] text-sm line-clamp-2 mb-4 leading-relaxed">{place.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {place.features.slice(0, 2).map((f, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-[#F4EDDE] rounded-full text-[#5A4B3F] font-semibold">{f}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Heritage & Culture Highlight */}
        <div className="bg-[#2D241E] rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
          <div className="lg:w-1/2 relative min-h-[400px]">
            <img 
              src="/src/assets/images/ganga_culture_heritage_1777100835789.png" 
              alt="Heritage Culture" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center text-white">
            <h2 className="text-[#D4A373] font-bold text-sm uppercase tracking-[0.3em] mb-6">Experience the Legacy</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">A Civilization Born of the Holy Waters</h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-[#3A7CA5]/20 p-4 rounded-2xl shrink-0">
                  <Palette className="text-[#3A7CA5]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Art & Craftsmanship</h4>
                  <p className="text-gray-400 leading-relaxed">From the intricate Silk of Banaras to the vibrant Madhubani of Bihar, Ganga's banks have nurtured artistic brilliance for millennia.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#D4A373]/20 p-4 rounded-2xl shrink-0">
                  <Music className="text-[#D4A373]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Music & Philosophy</h4>
                  <p className="text-gray-400 leading-relaxed">The rhythmic sound of temple bells and the soulful kirtans create a spiritual melody that resonates across the river's path.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#3A7CA5]/20 p-4 rounded-2xl shrink-0">
                  <Waves className="text-[#3A7CA5]" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Sustainable Living</h4>
                  <p className="text-gray-400 leading-relaxed">Honoring the river means protecting the life she sustains, from the Gangetic dolphins to the local farming communities.</p>
                </div>
              </div>
            </div>
            <button className="mt-12 bg-white text-[#2D241E] px-10 py-4 rounded-full font-bold hover:bg-[#D4A373] hover:text-white transition-all w-fit">
              Explore Cuisines & Art
            </button>
          </div>
        </div>

        {/* Action / Contribution Section */}
        <div id="action" className="mt-32 text-center bg-[#F4EDDE] p-12 md:p-24 rounded-[3rem] border border-[#E8DCC4]">
          <h2 className="text-[#3A7CA5] font-black text-sm uppercase tracking-[0.3em] mb-6">Make a Difference</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-bold text-[#2D241E] mb-8">Contribute to the Legacy</h3>
          <p className="text-[#5A4B3F] max-w-2xl mx-auto mb-16 text-lg">
            Mother Ganga has given us everything. It's time we reciprocate. Become a volunteer, donate to the cleaning mission, or simply spread the knowledge of her rich heritage.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-[#E8DCC4]">
              <HandHelping className="mx-auto text-[#D4A373] mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-4">Volunteer</h4>
              <p className="text-[#5A4B3F] mb-8 text-sm">Join our ground-level cleaning drives and cultural preservation workshops.</p>
              <button className="text-[#3A7CA5] font-black text-xs uppercase tracking-widest hover:underline">Apply Now</button>
            </div>
            <div className="bg-[#3A7CA5] p-10 rounded-3xl shadow-lg text-white transform scale-105">
              <Heart className="mx-auto text-white mb-6 animate-pulse" size={48} fill="white" />
              <h4 className="text-2xl font-bold mb-4">Donate</h4>
              <p className="text-white/80 mb-8 text-sm">Your contributions fund advanced water purification and artisan support programs.</p>
              <button className="bg-white text-[#3A7CA5] px-8 py-3 rounded-full font-bold hover:bg-[#F4EDDE] transition-all">Support Now</button>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-[#E8DCC4]">
              <Globe className="mx-auto text-[#3A7CA5] mb-6" size={48} />
              <h4 className="text-2xl font-bold mb-4">Awareness</h4>
              <p className="text-[#5A4B3F] mb-8 text-sm">Share the stories of the 75 places and become a digital guardian of Ganga.</p>
              <button className="text-[#3A7CA5] font-black text-xs uppercase tracking-widest hover:underline">Share Stories</button>
            </div>
          </div>
        </div>
      </main>

      {/* Place Detail Modal */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setSelectedPlace(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-[#3A7CA5]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D241E] to-transparent"></div>
                <button 
                  onClick={() => setSelectedPlace(null)}
                  className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-md"
                >
                  <ChevronDown />
                </button>
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="bg-[#D4A373] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter mb-4 inline-block">{selectedPlace.state}</span>
                  <h2 className="text-4xl font-serif font-bold">{selectedPlace.name}</h2>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-[#3A7CA5] font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Info size={14} /> Description
                    </h3>
                    <p className="text-[#5A4B3F] leading-relaxed mb-8">{selectedPlace.description}</p>
                    
                    <h3 className="text-[#3A7CA5] font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <MapPin size={14} /> Highlights
                    </h3>
                    <ul className="grid grid-cols-2 gap-4">
                      {selectedPlace.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-[#5A4B3F]">
                          <div className="w-1.5 h-1.5 bg-[#D4A373] rounded-full"></div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-[#FDFCF8] p-6 rounded-2xl border border-[#E8DCC4]">
                      <h4 className="font-bold flex items-center gap-2 mb-3">
                        <Waves className="text-[#3A7CA5]" size={18} /> Heritage
                      </h4>
                      <p className="text-sm text-[#5A4B3F]">{selectedPlace.heritage}</p>
                    </div>
                    <div className="bg-[#FDFCF8] p-6 rounded-2xl border border-[#E8DCC4]">
                      <h4 className="font-bold flex items-center gap-2 mb-3">
                        <Palette className="text-[#3A7CA5]" size={18} /> Art & Craft
                      </h4>
                      <p className="text-sm text-[#5A4B3F]">{selectedPlace.art}</p>
                    </div>
                    <div className="bg-[#FDFCF8] p-6 rounded-2xl border border-[#E8DCC4]">
                      <h4 className="font-bold flex items-center gap-2 mb-3">
                        <Music className="text-[#3A7CA5]" size={18} /> Cuisine
                      </h4>
                      <p className="text-sm text-[#5A4B3F]">{selectedPlace.cuisine}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 pt-8 border-t border-[#E8DCC4] flex justify-between items-center">
                  <p className="text-xs text-[#A8988A] italic">Part of the 75 Heritage Places initiative.</p>
                  <button className="bg-[#3A7CA5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2F668A] transition-all">Plan Visit</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-[#2D241E] text-white py-20 px-6 mt-20">
        <div className="max-w-7xl mx-auto border-t border-white/10 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Waves className="text-[#3A7CA5] w-8 h-8" />
                <span className="text-3xl font-serif font-bold tracking-tight">Mother Ganga</span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Dedicated to the preservation, purification, and promotion of the holy river and the civilizational richness she has nurtured for millennia.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-[#D4A373]">Ganga Network</h5>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">75 Places Trail</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Namami Gange</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clean Ganga Fund</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Culture Map</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-[#D4A373]">Connect</h5>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Volunteer Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Artisan Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 uppercase tracking-widest font-bold">
            <p>© 2026 Mother Ganga Heritage Preservation. All Rights Reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

