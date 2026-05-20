import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Camera, Gift, Star, MailOpen, Lock, Unlock, Key, Sun, Coffee, Cloud, Gavel, Fingerprint, Scale } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBIyIXYNvVhJnSK58rB29K9n7SNnbaoqnc",
  authDomain: "proposal-apoorva-sarvagy.firebaseapp.com",
  databaseURL: "https://proposal-apoorva-sarvagy-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "proposal-apoorva-sarvagy",
  storageBucket: "proposal-apoorva-sarvagy.firebasestorage.app",
  messagingSenderId: "794226715688",
  appId: "1:794226715688:web:284222db7af709b2cd591d",
  measurementId: "G-BZ4R12MR9T"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const saveResponse = async (answer: string) => {
  try {
    const istDate = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    const requestRef = ref(db, 'Snap-Request');
    const newRequestRef = push(requestRef);
    await set(newRequestRef, {
      response: answer,
      timestamp: istDate
    });
  } catch (e) {
    console.error("Error saving to RTDB:", e);
  }
};


const Stickers = () => {
  const stickers = [
    { id: 1, emoji: '🎀', top: '15%', left: '8%', delay: 0 },
    { id: 2, emoji: '🧸', top: '25%', left: '85%', delay: 1 },
    { id: 3, emoji: '✨', top: '65%', left: '10%', delay: 2 },
    { id: 4, emoji: '🍓', top: '80%', left: '85%', delay: 0.5 },
    { id: 5, emoji: '💌', top: '10%', left: '50%', delay: 1.5 },
    { id: 6, emoji: '🌷', top: '85%', left: '40%', delay: 2.5 },
    { id: 7, emoji: '💖', top: '45%', left: '3%', delay: 1.2 },
    { id: 8, emoji: '🌸', top: '55%', left: '92%', delay: 0.8 },
    { id: 9, emoji: 'Mine 🥰', top: '75%', left: '15%', delay: 1.8 },
    { id: 10, emoji: 'Beautiful 🦋', top: '35%', left: '80%', delay: 0.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stickers.map((s) => (
        <motion.div
          key={s.id}
          className="absolute text-3xl sm:text-5xl lg:text-7xl opacity-80"
          style={{ top: s.top, left: s.left }}
          animate={{
            y: [0, -30, 0],
            rotate: [-15, 15, -15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: s.delay,
            ease: 'easeInOut',
          }}
        >
          {s.emoji}
        </motion.div>
      ))}
    </div>
  );
};

const CursorHearts = () => {
  useEffect(() => {
    let lastTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < 150) return; 
      lastTime = now;
      
      const emojis = ['💖', '💕', '✨', '🌸', '🥺', '🦋'];
      const text = emojis[Math.floor(Math.random() * emojis.length)];
      
      const heart = document.createElement('div');
      heart.innerText = text;
      heart.className = 'cursor-heart text-2xl';
      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.style.transform = `translate(-50%, -100px) rotate(${Math.random() * 60 - 30}deg) scale(1.5)`;
        heart.style.opacity = '0';
      }, 20);
      
      setTimeout(() => {
        heart.remove();
      }, 1000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return null;
};

const Reasons = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full"
        >
            <motion.div whileHover={{ y: -10 }} className="glass p-8 rounded-[32px] text-center space-y-4 shadow-lg border border-white/50 cursor-default">
                <div className="mx-auto w-14 h-14 bg-emerald-100 flex items-center justify-center rounded-full text-emerald-500 mb-6 shadow-inner">
                    <Star size={28} fill="currentColor" />
                </div>
                <h3 className="font-serif italic text-3xl text-emerald-800">Your Smile</h3>
                <p className="text-gray-600 font-sans text-lg">It literally has the power to turn my worst days into my absolute best.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="glass p-8 rounded-[32px] text-center space-y-4 shadow-lg border border-white/50 cursor-default">
                <div className="mx-auto w-14 h-14 bg-emerald-100 flex items-center justify-center rounded-full text-emerald-500 mb-6 shadow-inner">
                    <Heart size={28} fill="currentColor" />
                </div>
                <h3 className="font-serif italic text-3xl text-emerald-800">Your Eyes</h3>
                <p className="text-gray-600 font-sans text-lg">I could get lost in them forever; they hold a whole universe of love.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="glass p-8 rounded-[32px] text-center space-y-4 shadow-lg border border-white/50 cursor-default">
                <div className="mx-auto w-14 h-14 bg-teal-100 flex items-center justify-center rounded-full text-teal-500 mb-6 shadow-inner">
                    <Sparkles size={28} />
                </div>
                <h3 className="font-serif italic text-3xl text-teal-800">Your Vibe</h3>
                <p className="text-gray-600 font-sans text-lg">Being around you feels like home. A single picture of you gives me peace.</p>
            </motion.div>
        </motion.div>
    );
};

const BaniyaVault = () => {
    const [code, setCode] = useState('');
    const [unlocked, setUnlocked] = useState(false);
    const [shake, setShake] = useState(false);

    const handleUnlock = () => {
        if (code === '78' || code === "7'8" || code.toLowerCase() === "seven eight") {
            setUnlocked(true);
            confetti({
                particleCount: 80,
                spread: 100,
                origin: { y: 0.6 },
                colors: ['#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093']
            });
        } else {
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[32px] w-full text-center space-y-6 relative z-10 shadow-lg border border-white/50"
        >
            <h3 className="font-serif italic text-4xl text-teal-800">The Secret Vault</h3>
            
            {unlocked ? (
                 <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="space-y-6 py-4">
                     <Unlock className="mx-auto text-teal-500" size={56} />
                     <p className="font-hand text-5xl text-emerald-600 font-bold -rotate-2">Access Granted!</p>
                     <p className="text-xl sm:text-2xl font-sans text-gray-700 p-6 bg-white/50 rounded-3xl leading-relaxed border border-teal-100 shadow-sm">
                         You officially live rent-free in this Baniya's heart forever. No eviction possible. My most prized possession. ❤️🏦
                     </p>
                 </motion.div>
            ) : (
                 <div className="space-y-6 py-4">
                      <motion.div animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}} transition={{ duration: 0.4 }}>
                         <Lock className={`mx-auto ${shake ? 'text-red-400' : 'text-teal-300'}`} size={64} />
                      </motion.div>
                      <p className="text-gray-600 text-xl font-medium">Enter our absolute oldest inside joke to unlock:</p>
                      <div className="flex gap-3 justify-center items-center">
                          <input 
                              type="text" 
                              maxLength={11}
                              className={`w-40 sm:w-48 text-center text-3xl font-bold bg-white/70 border-2 ${shake ? 'border-red-400 outline-red-400' : 'border-teal-200 outline-teal-400'} rounded-2xl p-4 transition-colors`}
                              value={code}
                              onChange={e => setCode(e.target.value)}
                              placeholder="***"
                              onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                          />
                          <button onClick={handleUnlock} className="bg-teal-400 text-white p-4 rounded-2xl shadow-lg hover:bg-teal-500 hover:shadow-xl transition-all transform hover:-translate-y-1">
                              <Key size={32} />
                          </button>
                      </div>
                      <div className="h-4">
                         {shake && <p className="text-red-400 text-sm font-medium">Wait, you forgot?! Think numbers... 😤</p>}
                      </div>
                 </div>
            )}
        </motion.div>
    );
};

const NEEDS_DATA = [
    { name: 'Want to see your face everyday', value: 45, color: '#ff9a9e' },
    { name: 'Need you', value: 25, color: '#fbc2eb' },
    { name: 'Miss you constantly', value: 15, color: '#fecfef' },
    { name: 'Want to hug you immediately', value: 15, color: '#a1c4fd' },
];

const NeedsChart = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 sm:p-10 rounded-[32px] w-full space-y-8 relative z-10 shadow-lg border border-white/50"
        >
            <h3 className="font-serif italic text-4xl text-teal-800 text-center">A Scientific Breakdown of Me</h3>
            <div className="h-72 sm:h-80 w-full relative">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={NEEDS_DATA}
                            cx="50%"
                            cy="50%"
                            innerRadius={"50%"}
                            outerRadius={"80%"}
                            paddingAngle={6}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            {NEEDS_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <RechartsTooltip 
                             contentStyle={{ borderRadius: '20px', border: 'none', background: 'rgba(255,255,255,0.95)', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', padding: '12px 16px' }}
                             itemStyle={{ color: '#4b5563', fontFamily: 'Inter', fontWeight: 600 }}
                             formatter={(value: number) => [`${value}%`, '']}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <Heart className="text-emerald-400 animate-pulse w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
                {NEEDS_DATA.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full shadow-sm border border-white">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm font-semibold text-gray-700">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const AdmirationSection = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 sm:p-12 rounded-[40px] w-full text-center space-y-10 relative z-10 shadow-xl border border-white/60"
        >
             <div className="space-y-6">
                 <h2 className="font-serif italic text-4xl sm:text-5xl text-teal-800">For the Girl Who Owns My Future</h2>
                 <p className="font-sans text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                     I may be a little dumb sometimes, but I know one thing for absolute certainty: I love you with every fiber of my being. I cannot imagine a single version of my future without you by my side.
                 </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-8">
                 <div className="bg-white/60 p-8 rounded-3xl space-y-4 border border-emerald-100 shadow-sm relative hover:shadow-md transition-shadow">
                     <span className="absolute -top-6 -left-2 text-5xl opacity-80">✨</span>
                     <p className="font-hand text-3xl md:text-4xl text-emerald-700 leading-relaxed font-bold">
                         "A hundred lifetimes wouldn't be enough to admire your grace. <br/>
                         Your laughter is the melody my soul has always craved, <br/>
                         And your eyes hold the promise of a thousand beautifully perfectly mundane tomorrows."
                     </p>
                 </div>
                 
                 <div className="bg-white/60 p-8 sm:p-10 rounded-3xl space-y-6 border border-emerald-100 shadow-sm relative flex flex-col justify-center text-center sm:text-left hover:shadow-md transition-shadow">
                     <Heart className="absolute -top-4 -right-2 text-emerald-400 rotate-12 opacity-70" size={48} fill="#a7f3d0" />
                     <h3 className="font-serif italic text-2xl text-emerald-800">My Only Muse</h3>
                     <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed">
                         Every time I look at you, I realize how unbelievably lucky I am. Your beauty isn't just in your breathtaking smile, but in your heart, your energy, and the way you make the world feel entirely alright. You are the ultimate protagonist of my life, Apoorva.
                     </p>
                     <div className="flex justify-center sm:justify-start gap-2 pt-2">
                        <Sparkles className="text-emerald-400" size={24} />
                        <Sparkles className="text-emerald-400" size={24} />
                     </div>
                 </div>
             </div>
        </motion.div>
    );
};

const ComfortCorner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 sm:p-10 rounded-[40px] w-full text-center relative shadow-sm border border-white/40 bg-gradient-to-br from-amber-50/40 to-orange-50/40"
        >
            <div className="flex justify-center gap-4 mb-4 text-amber-500">
                <Sun size={32} />
                <Cloud size={32} />
                <Coffee size={32} />
            </div>
            <h3 className="font-serif italic text-3xl text-amber-900 mb-4">Your Safe Space</h3>
            <p className="font-sans text-xl text-gray-700 leading-relaxed font-medium">
                I want you to always feel safe and completely comfortable with me. <br/>
                Whether you're all dressed up to conquer the world, or in oversized PJs with messy hair feeling exhausted—you are beautiful and you are enough.
                You never have to be 'perfect' for me. I love you exactly as you are, through every single phase.
            </p>
        </motion.div>
    );
};

const HeartThiefRecord = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 sm:p-10 rounded-[40px] w-full relative shadow-md border-2 border-teal-200/60 bg-white/50"
        >
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 transform rotate-12 opacity-30">
                <Gavel size={80} className="text-teal-800" />
            </div>
            
            <h3 className="font-serif italic text-4xl sm:text-5xl text-teal-900 mb-8 border-b-2 border-teal-200 pb-6 text-center sm:text-left flex items-center justify-center sm:justify-start gap-4 flex-wrap">
                <Fingerprint className="text-teal-500" size={40} />
                Official Charge Sheet
            </h3>
            
            <div className="space-y-6 text-left">
                <div className="bg-teal-50/70 p-6 rounded-3xl border border-teal-100 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-teal-200 text-teal-700 p-3 rounded-2xl shrink-0 mt-1 flex items-center justify-center w-14 h-14">
                        <span className="font-bold font-serif text-xl">01</span>
                    </div>
                    <div>
                        <h4 className="font-sans text-xl font-bold text-teal-900 mb-2">Grand Theft (First-Degree)</h4>
                        <p className="text-gray-700 font-medium text-lg leading-relaxed">Relentlessly and unapologetically stealing my heart with your absolutely gorgeous personality and killer looks. No intention of returning it.</p>
                    </div>
                </div>

                <div className="bg-teal-50/70 p-6 rounded-3xl border border-teal-100 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-teal-200 text-teal-700 p-3 rounded-2xl shrink-0 mt-1 flex items-center justify-center w-14 h-14">
                        <span className="font-bold font-serif text-xl">02</span>
                    </div>
                    <div>
                        <h4 className="font-sans text-xl font-bold text-teal-900 mb-2">Unlicensed Enchantment</h4>
                        <p className="text-gray-700 font-medium text-lg leading-relaxed">Utilizing those deep, captivating <span className="text-amber-700 font-bold">brown eyes</span> and that beautiful, perfectly unruly <span className="text-yellow-800 font-bold">wavy hair</span> to leave me completely mesmerized and defenseless.</p>
                    </div>
                </div>

                <div className="bg-teal-50/70 p-6 rounded-3xl border border-teal-100 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition-shadow">
                    <div className="bg-teal-200 text-teal-700 p-3 rounded-2xl shrink-0 mt-1 flex items-center justify-center w-14 h-14">
                        <span className="font-bold font-serif text-xl">03</span>
                    </div>
                    <div>
                        <h4 className="font-sans text-xl font-bold text-teal-900 mb-2">Excessive Cuteness & Feline Mimicry</h4>
                        <p className="text-gray-700 font-medium text-lg leading-relaxed">Possessing the absolute cutest appearance in the entire world, accompanied by an illegally adorable <span className="text-emerald-600 font-bold">cat-like face</span> that makes me weak in the knees every single time.</p>
                    </div>
                </div>
                
                <div className="mt-8 text-center bg-teal-900 text-teal-50 p-6 rounded-3xl font-serif text-2xl italic shadow-inner">
                    <Scale size={32} className="inline-block mr-3 mb-1 opacity-80" />
                    Verdict: Guilty on all counts. Sentenced to a lifetime of my hugs and endless adoration.
                </div>
            </div>
        </motion.div>
    );
};

const ExclusiveBondSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 sm:p-10 rounded-[40px] w-full text-center relative shadow-sm border border-red-200/50 bg-gradient-to-br from-red-50/40 to-teal-50/40"
        >
            <div className="text-5xl mb-4 opacity-80 flex justify-center gap-4">
                <span>💢</span>
                <span className="text-red-500 font-bold bg-white/50 rounded-full w-12 h-12 flex items-center justify-center">X</span>
                <span>😤</span>
            </div>
            <h3 className="font-serif italic text-3xl text-red-900 mb-4">A Tiny Reminder...</h3>
            <p className="font-sans text-xl text-gray-800 leading-relaxed font-medium">
                Please don't feel comfortable around H, thank you. 
                <br/><br/>
                H just wants you for the feel of having an extremely pretty girlfriend around and to brag to his friends. And sure, maybe he's mature because he's experienced, but... please, you are mine, stay minee 🤗 and I am yours! What is wrong in this huh? Any problem with this?? 
            </p>
        </motion.div>
    );
};

export default function App() {
  const [agreed, setAgreed] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noHoverCount, setNoHoverCount] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/song.mp3');
    audioRef.current = audio;
    audio.loop = false; 

    const handleTimeUpdate = () => {
      // Loop between 0:33 (33s) and 4:32 (272s)
      if (audio.currentTime >= 272) {
        audio.currentTime = 33;
        audio.play().catch(console.error);
      }
    };
    audio.addEventListener('timeupdate', handleTimeUpdate);

    const initAudio = () => {
      if (audioContextRef.current) return;
      
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        const source = ctx.createMediaElementSource(audio);
        const lowpass = ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.value = 800; // Muffled, far away, cinematic effect

        const gainNode = ctx.createGain();
        gainNode.gain.value = 0.4; // Faded volume

        source.connect(lowpass);
        lowpass.connect(gainNode);
        gainNode.connect(ctx.destination);

        // Start at 0:33 if not played yet, otherwise let it play
        if (audio.currentTime === 0) {
            audio.currentTime = 33;
        }
        audio.play().catch(e => console.log('Autoplay blocked:', e));

        document.removeEventListener('click', initAudio);
        document.removeEventListener('touchstart', initAudio);
      } catch (e) {
        console.error("Audio Context Error", e);
      }
    };

    document.addEventListener('click', initAudio);
    document.addEventListener('touchstart', initAudio);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      document.removeEventListener('click', initAudio);
      document.removeEventListener('touchstart', initAudio);
      audio.pause();
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(console.error);
      }
    };
  }, []);

  const handleNoHover = () => {
    if (noHoverCount >= 7) {
      return; 
    }
    setNoHoverCount(prev => prev + 1);
    // move randomly within a boundary so it dodges the cursor
    const maxRange = Math.min(window.innerWidth / 3, 200);
    const x = (Math.random() - 0.5) * maxRange * 2;
    const y = (Math.random() - 0.5) * maxRange * 2;
    setNoPosition({ x, y });
  };

  const handleNoClick = () => {
    if (noHoverCount >= 7) {
      saveResponse("No (Why do you hate me?😭😭)");
      setRejected(true);
    } else {
      handleNoHover();
    }
  };

  const getNoText = () => {
    if (noHoverCount === 0) return "No, I'm feeling shy";
    if (noHoverCount === 1) return "Are you sure? 🥺";
    if (noHoverCount === 2) return "But I miss you! 😭";
    if (noHoverCount === 3) return "Pleaseee cutie? 💖";
    if (noHoverCount === 4) return "Don't do this to me! 💔";
    if (noHoverCount === 5) return "I won't give up! 😤";
    if (noHoverCount === 6) return "Stop moving it... 🥺";
    return "Why do you hate me?😭😭";
  };

  const handleAgree = () => {
    saveResponse("Yes");
    setAgreed(true);
    // Trigger celebration confetti
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ['#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093', '#fbc2eb', '#a1c4fd']
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ['#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093', '#fbc2eb', '#a1c4fd']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  if (agreed) {
    return (
      <>
        <div className="mesh-bg"></div>
        <Stickers />
        <div className="min-h-screen flex items-center justify-center p-4 relative z-10 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10 p-8 sm:p-12 glass rounded-[48px] shadow-2xl relative z-10 justify-center"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-emerald-300/40 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-emerald-300/40 rounded-full blur-3xl"></div>
            
            <div className="flex-1 text-center md:text-left space-y-6 relative z-10">
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-6xl md:text-8xl font-hand text-emerald-600 mb-4 -rotate-2 transform font-bold drop-shadow-sm leading-tight"
              >
                Yay! It's <br className="hidden md:block" /> Official! 💕
              </motion.h1>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-800 font-sans leading-relaxed tracking-wide font-medium"
              >
                Thank you, my gorgeous <span className="font-serif italic text-emerald-500 font-bold">Apoorva</span>. <br /><br />
                I can't wait to see your beautiful face light up my phone every single day. The streak starts now! 📸✨
              </motion.p>
            </div>

            <motion.div 
               initial={{ opacity: 0, rotate: -10, y: 50 }}
               animate={{ opacity: 1, rotate: 3, y: 0 }}
               transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
               className="w-72 h-80 bg-white p-4 pb-16 rounded-sm shadow-2xl relative z-10 flex flex-col transform hover:rotate-0 transition-transform duration-300"
            >
                <img 
                   src="/photo.png" 
                   alt="Perfect Photo" 
                   className="w-full flex-1 object-cover bg-gray-100"
                />
                <p className="absolute bottom-4 left-0 w-full text-center font-hand text-3xl text-gray-700">My beautiful 🥰</p>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-red-200/50 backdrop-blur-sm -rotate-2 shadow-sm rounded-sm"></div>
            </motion.div>
          </motion.div>
        </div>
      </>
    );
  }

  if (rejected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10 overflow-hidden bg-gray-900" style={{ filter: "grayscale(100%)" }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, type: 'spring' }}
           className="max-w-2xl text-center space-y-8 p-12 rounded-[48px] border border-gray-600 shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-gray-800/80 backdrop-blur-3xl"
        >
          <motion.div
             animate={{ scale: [1, 1.05, 1] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="text-gray-500 mx-auto w-32 h-32 flex items-center justify-center"
          >
             <Heart size={100} fill="currentColor" strokeWidth={0} className="filter drop-shadow-xl opacity-40" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-300 italic">
            You broke my heart... 💔
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-sans tracking-wide leading-relaxed">
            Without your daily smile, all color has drained from the world. <br/><br/>
            Why do you hate me so much? 😭😭
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <div className="mesh-bg"></div>
      <Stickers />
      <CursorHearts />
      <div className="min-h-screen flex flex-col items-center justify-between p-4 sm:p-8 relative z-10 overflow-x-hidden">
        
        {/* Header from theme */}
        <header className="w-full max-w-6xl flex justify-between items-center mb-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass px-6 py-3 rounded-full hidden sm:flex items-center gap-3"
          >
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm">Live Admiration Feed</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-right flex-1 sm:flex-none"
          >
            <h2 className="font-hand text-4xl sm:text-5xl text-emerald-600 font-bold -rotate-2 transform inline-block drop-shadow-sm">For Apoorva</h2>
            <p className="text-emerald-400 text-xs sm:text-sm font-semibold uppercase tracking-widest mt-1">My Universe, My Heart ✨</p>
          </motion.div>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
          className="max-w-4xl w-full text-center space-y-12 sm:space-y-16 p-8 sm:p-16 glass rounded-[48px] relative z-10 border border-white/60 shadow-[0_20px_60px_-15px_rgba(255,182,193,0.3)]"
        >
          {/* Header */}
          <div className="space-y-8 relative z-10 pt-4 px-2">
            <h1 className="text-4xl md:text-6xl font-serif text-gray-800 tracking-tight leading-loose">
              To my dearest <br/> 
              <span className="font-hand text-6xl md:text-[7rem] text-emerald-500 transform inline-block -rotate-3 mt-6 drop-shadow-sm font-bold">Apoorva,</span>
            </h1>
          </div>

          {/* Appreciation block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="space-y-10 text-2xl sm:text-3xl text-gray-700 leading-relaxed font-sans font-light px-2 sm:px-8 relative z-10"
          >
            <Reasons />

            <div className="flex flex-col-reverse md:flex-row items-center gap-12 justify-center mt-12 pt-8 border-t border-white/40">
              <div className="flex-1 text-center md:text-left space-y-6">
                <p>
                  Every single day with you is a gift. I am completely in awe of your 
                  <span className="font-hand text-5xl sm:text-[4rem] text-emerald-500 mx-2 font-bold align-middle inline-block transform -rotate-2">beauty,</span>
                  your irresistible 
                  <span className="font-hand text-5xl sm:text-[4rem] text-emerald-500 mx-2 font-bold align-middle inline-block transform rotate-2">cuteness,</span>
                  and that boundless 
                  <span className="font-hand text-5xl sm:text-[4rem] text-teal-500 mx-2 font-bold align-middle inline-block transform -rotate-1">charm</span> 
                   that lights up everything around you.
                </p>
                <p className="pt-4 text-xl sm:text-2xl font-medium text-gray-600">
                  I adore you completely, more than any array of words could ever express. But sometimes words aren't enough—I need to actually see the absolute love of my life!
                </p>
              </div>
              <motion.img 
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 1.2, duration: 0.8, type: 'spring' }}
                 src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVyZDg4ZGZ1cm9zY3VuZzhmd3AxOGNsZG40eTZiaWEwcWp6YWpncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/d37mEpcaGP3pudPoho/giphy.gif" 
                 alt="Shy Cat" 
                 className="w-48 h-48 sm:w-64 sm:h-64 rounded-[40px] shadow-lg object-cover bg-white/70 p-3 transform rotate-3 hover:-rotate-3 transition-transform duration-300 flex-shrink-0"
               />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 pt-8 w-full block">
                <NeedsChart />
                <BaniyaVault />
            </div>

            <div className="mt-8 w-full">
                <AdmirationSection />
            </div>
            
            <div className="mt-8 w-full">
                <ComfortCorner />
            </div>

            <div className="mt-8 w-full">
                <HeartThiefRecord />
            </div>

            <div className="mt-8 w-full">
                <ExclusiveBondSection />
            </div>
          </motion.div>

          {/* The Ask */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="glass bg-white/40 p-8 sm:p-12 rounded-[40px] relative z-10 mt-12 mx-auto max-w-3xl border border-white/70 shadow-inner"
          >
            <div className="space-y-8 mb-12">
              <img 
                 src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYnVyZDg4ZGZ1cm9zY3VuZzhmd3AxOGNsZG40eTZiaWEwcWp6YWpncSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XYEEvoX0Ub69ZgN9ai/giphy.gif" 
                 alt="Cute Begging Character" 
                 className="w-36 h-36 sm:w-48 sm:h-48 mx-auto -mt-20 rounded-[40px] object-cover shadow-lg bg-white/80 p-2 transform -rotate-2 hover:rotate-3 transition-transform duration-300"
              />
              <p className="font-serif text-3xl md:text-5xl text-gray-900 italic font-medium leading-snug">
                So, I have a very important question to ask... <br/>
                <span className="text-xl md:text-3xl font-sans not-italic font-normal text-gray-700 mt-6 block">
                   Will you promise to bless my day, every day, by sending me a picture of your lovely face? 🥺
                   <br/>
                   <span className="text-sm md:text-lg text-emerald-400 mt-4 block italic font-medium opacity-80">(Even on days you feel like a mess, because those are honestly my favorite. No pressure to be perfect, ever.)</span>
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-2 min-h-[80px]">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAgree}
                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-bold rounded-[30px] shadow-xl shadow-emerald-300 hover:shadow-2xl transition-all flex items-center justify-center gap-3 text-2xl z-20 w-full sm:w-auto overflow-hidden relative group"
              >
                <span className="relative z-10 flex items-center gap-3">Yes, of course! <Heart fill="currentColor" size={28} className="animate-pulse"/></span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </motion.button>

              <motion.button
                onMouseEnter={handleNoHover}
                onClick={handleNoClick}
                animate={{
                  x: noPosition.x,
                  y: noPosition.y,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="px-10 py-5 glass text-gray-600 hover:text-emerald-600 font-bold rounded-[30px] hover:bg-white/80 transition-colors flex items-center justify-center text-xl z-10 w-full sm:w-auto border-2 border-transparent hover:border-emerald-200 min-w-[220px]"
              >
                <AnimatePresence mode="wait">
                   <motion.span
                     key={noHoverCount}
                     initial={{ opacity: 0, y: -10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 10 }}
                     transition={{ duration: 0.2 }}
                   >
                     {getNoText()}
                   </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="w-full max-w-6xl glass py-6 px-8 md:px-12 rounded-[32px] flex flex-col sm:flex-row justify-between items-center mt-16 relative z-10 gap-6 sm:gap-0 shadow-lg mb-4">
          <div className="flex gap-8 sm:gap-16 text-center sm:text-left">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] sm:text-xs text-emerald-500 font-bold uppercase tracking-widest">Adoration Streak</span>
              <span className="font-hand text-2xl sm:text-3xl text-gray-800 font-bold">Infinity & Counting</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] sm:text-xs text-emerald-500 font-bold uppercase tracking-widest">Favorite Feature</span>
              <span className="font-hand text-2xl sm:text-3xl text-gray-800 font-bold">Everything</span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-emerald-500">
            <Heart size={32} className="fill-emerald-500 animate-pulse" />
            <span className="font-hand text-3xl sm:text-4xl font-bold">Always Yours</span>
          </div>
        </footer>
      </div>
    </>
  );
}
