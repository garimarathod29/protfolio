import React, { useState } from 'react';
import { X, ExternalLink, RotateCcw, Monitor, Smartphone, Check, ShoppingBag, Calendar, Search, Sparkles, Send, ArrowRight, Heart } from 'lucide-react';

const LiveDemoModal = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'mobile'
  const [activeTab, setActiveTab] = useState('home');
  
  // Interactive state for demos
  // Atiko interactive state
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResponse, setAiResponse] = useState(null);
  
  // Jhatpat interactive state
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Global Axis interactive state
  const [jobSearch, setJobSearch] = useState('');
  const [appliedJob, setAppliedJob] = useState(null);

  // Imagify interactive state
  const [imagePrompt, setImagePrompt] = useState('Futuristic clean city with solar gardens 4k');
  const [generating, setGenerating] = useState(false);
  const [generatedImg, setGeneratedImg] = useState('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80');

  // Prescripto interactive state
  const [prescriptoBooked, setPrescriptoBooked] = useState(null);

  // E-Commerce interactive state
  const [ecomCart, setEcomCart] = useState([]);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!project) return null;

  // Add to Jhatpat cart
  const addToJhatpat = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const handleGenerateAI = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGeneratedImg(
        imagePrompt.toLowerCase().includes('car') 
          ? 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
          : 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
      );
    }, 1200);
  };

  const handleAskAIHealth = (e) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    setAiResponse('Based on your description, this could be related to seasonal fatigue or hydration levels. We recommend consulting Dr. Sameer Verma for a formal clinical checkup.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-5xl h-[92vh] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Browser Chrome Bar */}
        <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 cursor-pointer" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-amber-400"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
          </div>

          {/* Browser URL Input Simulation */}
          <div className="flex-1 max-w-md mx-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-300 text-xs font-mono text-indigo-700 shadow-xs">
              <span className="text-slate-400">https://</span>
              <span className="text-slate-800 font-semibold">{project.id}.app</span>
              <span className="ml-auto text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                SSL SECURE
              </span>
            </div>
          </div>

          {/* Responsive Device Mode & Close */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs shadow-xs">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`p-1.5 rounded ${deviceMode === 'desktop' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                title="Desktop View"
              >
                <Monitor size={15} />
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`p-1.5 rounded ${deviceMode === 'mobile' ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-slate-500 hover:text-slate-800'}`}
                title="Mobile View"
              >
                <Smartphone size={15} />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200 transition-colors ml-1"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Viewport Area */}
        <div className="flex-1 bg-slate-50 overflow-y-auto flex justify-center p-3 sm:p-6">
          <div className={`w-full transition-all duration-300 ${deviceMode === 'mobile' ? 'max-w-sm border-4 border-slate-300 rounded-3xl shadow-xl overflow-hidden bg-white p-4' : 'max-w-4xl bg-white p-6 rounded-2xl border border-slate-200 shadow-xs'}`}>
            
            {/* 1. ATIKO HEALTHCARE INTERACTIVE APP */}
            {project.id === 'atiko' && (
              <div className="space-y-5">
                {/* Navbar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                      A+
                    </div>
                    <span className="font-bold text-base text-slate-900">Atiko Healthcare</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-full text-slate-700">
                      Role: Patient / Caretaker
                    </span>
                  </div>
                </div>

                {/* Hero Banner - Solid, No Gradient */}
                <div className="p-5 bg-indigo-50 border border-indigo-200 rounded-2xl">
                  <h3 className="text-lg font-bold text-indigo-900">AI Health & Doctor Consultation Ecosystem</h3>
                  <p className="text-xs text-indigo-700 mt-1">Book slots with certified specialists or consult our multi-role AI healthcare assistant.</p>
                </div>

                {/* AI Assistant Box */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600">
                    <Sparkles size={14} />
                    <span>AI Symptom Checker & Assistant</span>
                  </div>
                  <form onSubmit={handleAskAIHealth} className="flex gap-2">
                    <input
                      type="text"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      placeholder="Describe your health symptoms (e.g. slight headache and fatigue)..."
                      className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 shadow-xs"
                    />
                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700 transition-colors shadow-xs">
                      Consult AI
                    </button>
                  </form>
                  {aiResponse && (
                    <div className="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-xs text-indigo-800">
                      {aiResponse}
                    </div>
                  )}
                </div>

                {/* Doctor Slot Booking Cards */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">Available Doctors (Click to Book Slot)</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      { name: 'Dr. Sameer Verma', spec: 'Cardiologist', fee: '₹700', exp: '12 Yrs Exp' },
                      { name: 'Dr. Ananya Sharma', spec: 'Neurology Specialist', fee: '₹900', exp: '10 Yrs Exp' },
                      { name: 'Dr. Richard James', spec: 'General Physician', fee: '₹500', exp: '8 Yrs Exp' },
                      { name: 'Dr. Neha Kapoor', spec: 'Pediatrician', fee: '₹600', exp: '9 Yrs Exp' },
                    ].map((doc, i) => (
                      <div
                        key={i}
                        onClick={() => setSelectedDoctor(doc.name)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          selectedDoctor === doc.name
                            ? 'bg-indigo-50 border-indigo-400 shadow-xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-bold text-sm text-slate-900">{doc.name}</h5>
                            <p className="text-xs text-indigo-600">{doc.spec}</p>
                            <p className="text-[11px] text-slate-500 mt-1">{doc.exp} • Fee: {doc.fee}</p>
                          </div>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Available</span>
                        </div>
                        {selectedDoctor === doc.name && (
                          <div className="mt-3 pt-3 border-t border-slate-200">
                            <p className="text-[10px] text-slate-600 mb-2">Select Appointment Slot:</p>
                            <div className="flex gap-2">
                              {['10:00 AM', '11:30 AM', '04:00 PM'].map((slot) => (
                                <button
                                  key={slot}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setBookedSlot(`${doc.name} at ${slot}`);
                                  }}
                                  className="px-2.5 py-1 bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-bold rounded-lg shadow-xs"
                                >
                                  {slot}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {bookedSlot && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                    <span>✅ Appointment Confirmed with {bookedSlot}</span>
                    <button onClick={() => setBookedSlot(null)} className="text-xs text-slate-500 hover:text-slate-800 font-bold">Clear</button>
                  </div>
                )}
              </div>
            )}

            {/* 2. JHATPAT QUICK COMMERCE INTERACTIVE APP */}
            {project.id === 'jhatpat' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-black text-white text-sm">
                      ⚡
                    </div>
                    <div>
                      <span className="font-bold text-base text-slate-900">Jhatpat Delivery</span>
                      <p className="text-[10px] text-amber-600 font-mono font-bold">10 MINS DELIVERY</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-full font-bold flex items-center gap-1.5">
                      <ShoppingBag size={14} /> Cart ({cart.length})
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-amber-900 text-sm">Lightning Fast Neighborhood Store</h3>
                    <p className="text-xs text-amber-700">Live inventory synchronized with local shops.</p>
                  </div>
                  <span className="text-xl">🛵</span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Organic Milk 1L', price: 64, emoji: '🥛' },
                    { name: 'Fresh Multigrain Bread', price: 45, emoji: '🍞' },
                    { name: 'Farm Eggs (6 pcs)', price: 55, emoji: '🥚' },
                    { name: 'Fresh Bananas (1 Dozen)', price: 60, emoji: '🍌' },
                    { name: 'Crispy Potato Wafers', price: 30, emoji: '🥔' },
                    { name: 'Cold Brew Coffee', price: 95, emoji: '☕' }
                  ].map((item, i) => (
                    <div key={i} className="p-3 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between space-y-2 shadow-xs">
                      <div className="text-2xl">{item.emoji}</div>
                      <div>
                        <h5 className="font-bold text-xs text-slate-900 line-clamp-1">{item.name}</h5>
                        <p className="text-amber-600 font-bold text-xs">₹{item.price}</p>
                      </div>
                      <button
                        onClick={() => addToJhatpat(item)}
                        className="w-full py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1 shadow-xs"
                      >
                        Add to Cart +
                      </button>
                    </div>
                  ))}
                </div>

                {/* Cart summary */}
                {cart.length > 0 && (
                  <div className="p-4 bg-slate-50 border border-amber-300 rounded-2xl flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-900">{cart.length} items in cart</p>
                      <p className="text-xs text-amber-600 font-mono font-bold">Total: ₹{cart.reduce((acc, curr) => acc + curr.price, 0)}</p>
                    </div>
                    <button
                      onClick={() => {
                        setOrderPlaced(true);
                        setCart([]);
                      }}
                      className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs"
                    >
                      Checkout (Razorpay)
                    </button>
                  </div>
                )}

                {orderPlaced && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                    <span>🎉 Order Placed! Rider reaching your location in 9 mins.</span>
                    <button onClick={() => setOrderPlaced(false)} className="text-xs text-slate-500 hover:text-slate-800 font-bold">Dismiss</button>
                  </div>
                )}
              </div>
            )}

            {/* 3. GLOBAL AXIS JOBS INTERACTIVE APP */}
            {project.id === 'global-axis' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm">
                      GA
                    </div>
                    <span className="font-bold text-base text-slate-900">Global Axis Internationals</span>
                  </div>
                  <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-700">
                    Recruitment ATS
                  </span>
                </div>

                <div className="flex gap-2">
                  <div className="flex-1 relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={jobSearch}
                      onChange={(e) => setJobSearch(e.target.value)}
                      placeholder="Search roles e.g. React, Node, Full Stack..."
                      className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-xs"
                    />
                  </div>
                </div>

                {/* Job Cards */}
                <div className="space-y-3">
                  {[
                    { title: 'Full Stack MERN Developer', company: 'TechNova Global', loc: 'Indore, MP', sal: '₹8 - 14 LPA', tags: ['React', 'Node.js', 'MongoDB'] },
                    { title: 'Backend Node.js Engineer', company: 'CloudWave Systems', loc: 'Remote', sal: '₹10 - 16 LPA', tags: ['Node.js', 'Express', 'Redis'] },
                    { title: 'React Frontend Specialist', company: 'Apex Innovations', loc: 'Bangalore / Hybrid', sal: '₹12 - 18 LPA', tags: ['React', 'Redux', 'Tailwind'] },
                  ].map((job, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-blue-400 transition-colors shadow-xs">
                      <div>
                        <h5 className="font-bold text-sm text-slate-900">{job.title}</h5>
                        <p className="text-xs text-blue-600">{job.company} • {job.loc}</p>
                        <p className="text-xs text-slate-500 mt-1 font-mono">{job.sal}</p>
                        <div className="flex gap-1.5 mt-2">
                          {job.tags.map((t, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-slate-100 rounded text-[10px] text-slate-700">{t}</span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => setAppliedJob(job.title)}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl self-start sm:self-center shadow-xs"
                      >
                        Apply Now
                      </button>
                    </div>
                  ))}
                </div>

                {appliedJob && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                    <span>✅ Application dispatched for "{appliedJob}". Recruiter notified!</span>
                    <button onClick={() => setAppliedJob(null)} className="text-xs text-slate-500 hover:text-slate-800 font-bold">Close</button>
                  </div>
                )}
              </div>
            )}

            {/* 4. PRESCRIPTO DOCTOR APPOINTMENT APP */}
            {project.id === 'prescripto' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🏥</span>
                    <span className="font-bold text-base text-slate-900">Prescripto Clinic Hub</span>
                  </div>
                  <span className="text-xs text-teal-600 font-mono font-bold">Patient Portal</span>
                </div>

                <div className="p-4 bg-teal-50 border border-teal-200 rounded-2xl flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-teal-900">Book an Appointment in 3 Simple Steps</h4>
                    <p className="text-xs text-teal-700">Select Doctor • Choose Slot • Instant Confirmation</p>
                  </div>
                  <Calendar size={24} className="text-teal-600" />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Dr. Richard James', fee: '₹500', spec: 'General Physician' },
                    { name: 'Dr. Emily Larson', fee: '₹750', spec: 'Gynecologist' },
                  ].map((doc, i) => (
                    <div key={i} className="p-4 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-xs">
                      <h5 className="font-bold text-sm text-slate-900">{doc.name}</h5>
                      <p className="text-xs text-teal-600">{doc.spec} • Fee: {doc.fee}</p>
                      <div className="flex gap-2 pt-2">
                        {['10:00 AM', '02:30 PM'].map((s) => (
                          <button
                            key={s}
                            onClick={() => setPrescriptoBooked(`Appointment confirmed with ${doc.name} for ${s}!`)}
                            className="px-3 py-1.5 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-bold shadow-xs"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {prescriptoBooked && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                    <span>✅ {prescriptoBooked}</span>
                    <button onClick={() => setPrescriptoBooked(null)} className="text-xs text-slate-500 hover:text-slate-800 font-bold">Dismiss</button>
                  </div>
                )}
              </div>
            )}

            {/* 5. IMAGIFY AI GENERATOR APP */}
            {project.id === 'imagify' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🎨</span>
                    <span className="font-bold text-base text-slate-900">Imagify Studio</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-purple-50 text-purple-700 border border-purple-200 text-xs rounded-full font-mono font-bold">
                    5 Credits Left
                  </span>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">Enter Image Generation Prompt:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={imagePrompt}
                      onChange={(e) => setImagePrompt(e.target.value)}
                      className="flex-1 bg-white border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-purple-600 shadow-xs"
                    />
                    <button
                      onClick={handleGenerateAI}
                      disabled={generating}
                      className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      {generating ? 'Synthesizing...' : 'Generate ⚡'}
                    </button>
                  </div>
                </div>

                {/* Generated Image Result */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 relative h-64 bg-slate-100 flex items-center justify-center">
                  {generating ? (
                    <div className="flex flex-col items-center gap-2 text-xs text-purple-700 font-mono">
                      <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                      <span>Neural Diffusion Synthesis in Progress...</span>
                    </div>
                  ) : (
                    <img src={generatedImg} alt="AI Generated" className="w-full h-full object-cover" />
                  )}
                </div>
              </div>
            )}

            {/* 6. E-COMMERCE PLATFORM */}
            {project.id === 'ecommerce' && (
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🛒</span>
                    <span className="font-bold text-base text-slate-900">ShopSphere Store</span>
                  </div>
                  <span className="text-xs text-emerald-700 font-mono font-bold">Redux Cart: {ecomCart.length} items</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Smart Fitness Band', price: '₹1,899', emoji: '⌚' },
                    { name: 'Wireless Bluetooth Earbuds', price: '₹2,499', emoji: '🎧' },
                    { name: 'Minimalist Mechanical Keyboard', price: '₹3,299', emoji: '⌨️' },
                  ].map((prod, i) => (
                    <div key={i} className="p-3 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between space-y-2 shadow-xs">
                      <div className="text-2xl">{prod.emoji}</div>
                      <div>
                        <h5 className="font-bold text-xs text-slate-900">{prod.name}</h5>
                        <p className="text-emerald-600 font-bold text-xs">{prod.price}</p>
                      </div>
                      <button
                        onClick={() => setEcomCart((prev) => [...prev, prod.name])}
                        className="w-full py-1 bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs rounded-lg transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>

                {ecomCart.length > 0 && (
                  <div className="p-3 bg-slate-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
                    <span className="text-slate-700 font-medium">{ecomCart.length} items added to cart</span>
                    <button
                      onClick={() => setCheckoutComplete(true)}
                      className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg shadow-xs"
                    >
                      Instant Buy
                    </button>
                  </div>
                )}

                {checkoutComplete && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800">
                    🎉 Payment Authorized! Order #SHP-9081 processed successfully.
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemoModal;
