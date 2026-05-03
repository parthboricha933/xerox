"use client";

import { useState, useEffect, useRef } from "react";
import {
  Printer,
  Camera,
  ScanLine,
  BookOpen,
  Ticket,
  MessageSquare,
  Zap,
  BadgeIndianRupee,
  MapPin,
  Phone,
  Menu,
  X,
  ChevronUp,
  Clock,
  ShieldCheck,
  Users,
  Star,
  Globe,
  Car,
  Wallet,
  Type,
  Wrench,
  Award,
  ChevronDown,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/Ehd8xkgvqXcDmFzHyrHgfr?mode=ems_copy_c";

const serviceCategories = [
  {
    icon: Printer,
    title: "પ્રિન્ટિંગ અને ઝેરોક્સ",
    emoji: "🖨️",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-200",
    items: [
      "બ્લેક & વ્હાઈટ ઝેરોક્સ",
      "કલર ઝેરોક્સ",
      "A4 / A3 પ્રિન્ટ",
      "કલર પ્રિન્ટ",
      "ફોટો પ્રિન્ટ (પાસપોર્ટ સાઈઝ, વિઝા)",
      "ID કાર્ડ પ્રિન્ટ",
    ],
  },
  {
    icon: ScanLine,
    title: "સ્કેનિંગ અને ડોક્યુમેન્ટ સેવા",
    emoji: "📄",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-200",
    items: [
      "ડોક્યુમેન્ટ સ્કેનિંગ",
      "PDF બનાવવું / મર્જ / સ્પ્લિટ",
      "ફોટો સ્કેન",
      "ડોક્યુમેન્ટ એડિટિંગ",
    ],
  },
  {
    icon: BookOpen,
    title: "લેમિનેશન અને બાઈન્ડિંગ",
    emoji: "📚",
    color: "from-orange-600 to-red-500",
    borderColor: "border-red-200",
    items: [
      "લેમિનેશન",
      "સ્પાયરલ બાઈન્ડિંગ",
      "હાર્ડ / સોફ્ટ બાઈન્ડિંગ",
      "કટીંગ / સ્ટેપલિંગ",
    ],
  },
  {
    icon: Globe,
    title: "ઓનલાઈન અને સરકારની સેવાઓ",
    emoji: "🌐",
    color: "from-blue-600 to-indigo-500",
    borderColor: "border-indigo-200",
    items: [
      "આધાર કાર્ડ પ્રિન્ટ / અપડેટ",
      "પાન કાર્ડ અરજી",
      "મતદાર ID (Voter ID)",
      "પાસપોર્ટ એપ્લિકેશન",
      "રેશન કાર્ડ સેવા",
      "જન્મ / મૃત્યુ પ્રમાણપત્ર",
      "સ્કોલરશિપ ફોર્મ",
      "સરકારી યોજના ફોર્મ",
      "નોકરી / એક્ઝામ ફોર્મ",
      "કોલેજ / સ્કૂલ એડમિશન ફોર્મ",
      "ઓનલાઇન રજીસ્ટ્રેશન",
      "વેરાસાઈ (7/12 ઉતારા અને 8અ)",
      "નામ કમી (જમીન રેકોર્ડમાંથી નામ હટાવવું)",
      "નામ ચડાવવું (જમીન રેકોર્ડમાં નામ ઉમેરવું)",
    ],
  },
  {
    icon: Car,
    title: "RTO (વાહન સંબંધિત સેવાઓ)",
    emoji: "🚗",
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-200",
    items: [
      "ડ્રાઇવિંગ લાઈસન્સ (Learning / Permanent)",
      "વાહન રજીસ્ટ્રેશન",
      "RC બુક પ્રિન્ટ",
      "વાહન ટ્રાન્સફર (Ownership Transfer)",
      "વાહન ઇન્શ્યોરન્સ રિન્યુ",
      "PUC (Pollution Certificate) માહિતી",
      "વાહન ફાઇન (E-Challan) ચેક અને પેમેન્ટ",
    ],
  },
  {
    icon: Ticket,
    title: "ટિકિટ બુકિંગ",
    emoji: "🎫",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-cyan-200",
    items: ["રેલવે ટિકિટ", "બસ ટિકિટ", "ફ્લાઈટ ટિકિટ"],
  },
  {
    icon: Wallet,
    title: "બિલ પેમેન્ટ અને રિચાર્જ",
    emoji: "💸",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-green-200",
    items: [
      "લાઈટ બિલ પેમેન્ટ",
      "મોબાઈલ રિચાર્જ",
      "DTH રિચાર્જ",
      "FASTag રિચાર્જ",
      "ગેસ બિલ પેમેન્ટ",
      "મની ટ્રાન્સફર",
    ],
  },
  {
    icon: Type,
    title: "ટાઈપિંગ અને ઓફિસ વર્ક",
    emoji: "🧾",
    color: "from-purple-500 to-violet-500",
    borderColor: "border-purple-200",
    items: [
      "રિઝ્યૂમે બનાવવું",
      "પ્રોજેક્ટ ટાઈપિંગ",
      "લેટર / એપ્લિકેશન લખવું",
      "એફિડેવિટ ટાઈપિંગ",
    ],
  },
  {
    icon: Camera,
    title: "ફોટો અને ID સેવાઓ",
    emoji: "🪪",
    color: "from-pink-500 to-rose-500",
    borderColor: "border-pink-200",
    items: [
      "પાસપોર્ટ સાઈઝ ફોટો",
      "ઇન્સ્ટન્ટ ફોટો પ્રિન્ટ",
      "ID કાર્ડ ડિઝાઇન",
    ],
  },
  {
    icon: Wrench,
    title: "અન્ય સામાન્ય સેવાઓ",
    emoji: "🛠️",
    color: "from-teal-500 to-cyan-500",
    borderColor: "border-teal-200",
    items: [
      "વોટ્સએપ / ઇમેઇલમાંથી પ્રિન્ટ",
      "પેન ડ્રાઈવ સપોર્ટ",
      "રબર સ્ટેમ્પ બનાવવું",
      "વિઝિટિંગ કાર્ડ પ્રિન્ટ",
      "પેમ્ફલેટ / પોસ્ટર ડિઝાઇન",
      "ઓનલાઇન રિઝલ્ટ ચેક",
      "હોલ ટિકિટ પ્રિન્ટ",
      "તમામ કામ (ગમે તે પ્રકારનું કામ)",
    ],
  },
];

const specialFeatures = [
  {
    icon: Zap,
    title: "ઝડપી અને વિશ્વસનીય સેવા",
    desc: "અમે ઓછા સમયમાં ચોક્કસ અને વિશ્વસનીય સેવા પ્રદાન કરીએ છીએ",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: BadgeIndianRupee,
    title: "ઓછા દર",
    desc: "બજાર કરતાં ઓછા દરે ઉત્તમ ગુણવત્તાની સેવા",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Award,
    title: "ઉત્તમ ગુણવત્તા",
    desc: "દરેક સેવામાં શ્રેષ્ઠ ગુણવત્તાનું ધ્યાન રાખીએ છીએ",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: ShieldCheck,
    title: "એક જ જગ્યાએ તમામ સેવા",
    desc: "તમારા તમામ જરૂરિયાતો એક જ છત નીચે ઉપલબ્ધ",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
];

const heroQuickServices = [
  { icon: Printer, label: "પ્રિન્ટ / ઝેરોક્સ" },
  { icon: ScanLine, label: "સ્કેનિંગ / PDF" },
  { icon: Globe, label: "ઓનલાઈન સેવા" },
  { icon: Ticket, label: "ટિકિટ બુકિંગ" },
];

const navLinks = [
  { label: "હોમ", href: "#home" },
  { label: "સેવાઓ", href: "#services" },
  { label: "ખાસિયત", href: "#features" },
  { label: "અમારા વિશે", href: "#about" },
  { label: "સંપર્ક", href: "#contact" },
];

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const children = el.querySelectorAll(
      ".scroll-animate, .scroll-animate-up, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
    );
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const servicesRef = useScrollAnimation();
  const featuresRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setShowBackToTop(y > 400);
      setScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const toggleCategory = (index: number) =>
    setExpandedCategory(expandedCategory === index ? null : index);

  const heroTextOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a
              href="#home"
              className={`flex items-center gap-2 sm:gap-3 transition-colors duration-300 ${
                scrolled ? "text-orange-700" : "text-white"
              }`}
            >
              <img
                src="/madhav-logo.png"
                alt="માધવ ઓનલાઇન સેન્ટર"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white/50"
              />
              <div className="flex flex-col">
                <span
                  className={`text-base sm:text-lg font-bold leading-tight transition-colors duration-300 ${
                    scrolled ? "text-orange-700" : "text-white"
                  }`}
                >
                  માધવ
                </span>
                <span
                  className={`text-xs sm:text-sm font-medium leading-tight transition-colors duration-300 ${
                    scrolled ? "text-blue-700" : "text-blue-200"
                  }`}
                >
                  ઓનલાઇન સેન્ટર
                </span>
              </div>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-5 py-2 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "hover:bg-orange-50 text-gray-700"
                  : "hover:bg-white/10 text-white"
              }`}
              aria-label="મેનુ ટૉગલ"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 rounded-lg bg-green-500 text-white font-semibold text-center hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp પર સંપર્ક કરો
            </a>
          </div>
        </div>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      >
        {/* Animated background decorative orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px] animate-float"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-orange-400/5 rounded-full blur-[80px] animate-float"
            style={{ animationDelay: "0.8s" }}
          />
          <div
            className="absolute top-[20%] left-[20%] w-[200px] h-[200px] bg-blue-400/5 rounded-full blur-[60px] animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Subtle dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Hero Content */}
        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28 sm:py-36"
          style={{ opacity: heroTextOpacity }}
        >
          <div className="flex flex-col items-center text-center">
            {/* Floating Logo */}
            <div
              className={`transition-all duration-700 ${
                heroLoaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
            >
              <div className="animate-float mb-8 sm:mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-blue-400 rounded-full blur-xl opacity-40 scale-125" />
                  <img
                    src="/madhav-logo.png"
                    alt="માધવ ઓનલાઇન સેન્ટર"
                    className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full object-cover shadow-2xl border-4 border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* Continuously Floating Title */}
            <div
              className={`transition-all duration-700 delay-150 ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1 className="hero-float-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-none tracking-tight">
                <span className="gradient-text">માધવ</span>
                <br />
                <span className="gradient-text-blue">ઓનલાઇન સેન્ટર</span>
              </h1>
              <p className="hero-float-title mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-white/60 tracking-[0.3em] uppercase" style={{ animationDelay: "1s" }}>
                Madhav Online Center
              </p>
            </div>

            {/* Subtitle */}
            <div
              className={`mt-6 sm:mt-8 transition-all duration-700 delay-300 ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-bold">
                માં આપનું સ્વાગત છે
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-3 leading-relaxed max-w-2xl mx-auto">
                તમારા તમામ પ્રિન્ટિંગ, ઝેરોક્સ અને ઓનલાઈન સેવાઓ માટે એક
                વિશ્વસનીય સ્થળ — ઝડપી, સસ્તી અને ગુણવત્તાવાળી સેવા
              </p>
            </div>

            {/* Quick Service Tags */}
            <div
              className={`flex flex-wrap justify-center gap-3 mt-8 sm:mt-10 transition-all duration-700 delay-[400ms] ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {heroQuickServices.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-orange-400/30 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4 text-orange-400" />
                    {svc.label}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 sm:mt-12 transition-all duration-700 delay-[500ms] ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl text-base font-bold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-green-500/30 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp પર સંપર્ક કરો
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl text-base font-bold hover:bg-white/20 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                અમારી સેવાઓ જુઓ
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div
              className={`flex flex-wrap justify-center gap-8 sm:gap-14 mt-12 sm:mt-16 transition-all duration-700 delay-[650ms] ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-orange-400">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl sm:text-3xl font-bold">1000+</span>
                </div>
                <span className="text-sm text-gray-500 mt-1">
                  સંતુષ્ટ ગ્રાહકો
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-blue-400">
                  <Zap className="w-5 h-5" />
                  <span className="text-2xl sm:text-3xl font-bold">50+</span>
                </div>
                <span className="text-sm text-gray-500 mt-1">
                  સેવાઓ ઉપલબ્ધ
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-green-400">
                  <Star className="w-5 h-5" />
                  <span className="text-2xl sm:text-3xl font-bold">5+</span>
                </div>
                <span className="text-sm text-gray-500 mt-1">
                  વર્ષનો અનુભવ
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-bounce"
          style={{ opacity: heroTextOpacity }}
        >
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">
              નીચે સ્ક્રોલ કરો
            </span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section
        id="services"
        className="py-16 sm:py-24 bg-gradient-to-b from-white to-orange-50/50"
        ref={servicesRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-animate-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-4">
              <Printer className="w-4 h-4" />
              અમારી સેવાઓ
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              અમે શું સેવાઓ પ્રદાન કરીએ છીએ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              પ્રિન્ટિંગથી લઈને ઓનલાઈન સેવાઓ સુધી, અમે તમારા તમામ જરૂરિયાતો
              એક જ છત નીચે પૂરી કરીએ છીએ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {serviceCategories.map((category, index) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === index;
              const isLargeCategory = category.items.length > 5;

              return (
                <div
                  key={index}
                  className={`service-card scroll-animate-up bg-white rounded-2xl shadow-sm border ${category.borderColor} overflow-hidden group`}
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full flex items-center gap-4 p-5 sm:p-6 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                        <span className="mr-1.5">{category.emoji}</span>
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                        {category.items.length} સેવાઓ
                      </p>
                    </div>
                    <div
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ${
                      isExpanded || !isLargeCategory
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 opacity-0 md:max-h-[600px] md:opacity-100"
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <div className="grid grid-cols-1 gap-2">
                          {category.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-2.5 group/item"
                            >
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section
        id="features"
        className="py-16 sm:py-24 bg-white"
        ref={featuresRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-animate-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full text-yellow-700 text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              અમારી ખાસિયત
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              શા માટે અમને પસંદ કરો?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              અમારી સેવાની વિશેષતાઓ જે અમને અલગ બનાવે છે
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {specialFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="scroll-animate-scale relative overflow-hidden bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-100 group hover:shadow-lg transition-all duration-300 hover:border-orange-200"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/50 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div
                      className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section
        id="about"
        className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50"
        ref={aboutRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="scroll-animate-left relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-blue-200 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-orange-100">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/madhav-logo.png"
                    alt="માધવ ઓનલાઇન સેન્ટર"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-md"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      માધવ ઓનલાઇન સેન્ટર
                    </h3>
                    <p className="text-sm text-orange-600 font-medium">
                      ડુંગર, પોલીસ સ્ટેશન નજીક
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        સમયસર સેવા
                      </p>
                      <p className="text-xs text-gray-500">
                        અમે હંમેશા સમય પર કામ પૂરું કરીએ છીએ
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        વિશ્વસનીયતા
                      </p>
                      <p className="text-xs text-gray-500">
                        અમારી સેવાઓ પૂરેપૂરી વિશ્વસનીય અને સુરક્ષિત છે
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        ગ્રાહક સંતોષ
                      </p>
                      <p className="text-xs text-gray-500">
                        અમારા માટે ગ્રાહક સંતોષ સૌથી મહત્વનો છે
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-animate-right">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-semibold mb-6">
                <Star className="w-4 h-4" />
                અમારા વિશે
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                અમે છીએ{" "}
                <span className="text-orange-600">માધવ ઓનલાઇન સેન્ટર</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                માધવ ઓનલાઇન સેન્ટર ખાતે અમે તમામ પ્રકારની પ્રિન્ટિંગ,
                ઝેરોક્સ અને ઓનલાઈન સેવાઓ ઝડપી અને વિશ્વસનીય રીતે પ્રદાન
                કરીએ છીએ. અમારા માટે ગ્રાહક સંતોષ સૌથી મહત્વનો છે.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                અમે દરેક ગ્રાહકને વ્યક્તિગત ધ્યાન આપીએ છીએ અને તેમની
                જરૂરિયાત મુજબ શ્રેષ્ઠ સેવા પ્રદાન કરીએ છીએ. અમારો હેતુ
                ફક્ત સેવા નહીં, પરંતુ ગ્રાહક સાથે વિશ્વાસનો સંબંધ બનાવવાનો
                છે.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                હવે જ સંપર્ક કરો
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section
        id="contact"
        className="py-16 sm:py-24 bg-white"
        ref={contactRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 scroll-animate-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-semibold mb-4">
              <Phone className="w-4 h-4" />
              સંપર્ક કરો
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              અમારો સંપર્ક કરો
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              કોઈપણ પ્રશ્ન અથવા સેવા માટે અમારો સંપર્ક કરો, અમે હંમેશા
              તમારી મદદ માટે તૈયાર છીએ
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-5 scroll-animate-left">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-6 border border-orange-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    અમારું સરનામું
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    ડુંગર, પોલીસ સ્ટેશન નજીક, 365555
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-6 border border-green-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    સીધા WhatsApp પર સંદેશ મોકલો
                  </p>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-full text-sm font-bold hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    હવે જ WhatsApp પર સંપર્ક કરો
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 border border-blue-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">કાર્ય સમય</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    સોમવાર - શનિવાર: સવારે 9:00 - સાંજે 8:00
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    રવિવાર: સવારે 10:00 - સાંજે 6:00
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-animate-right rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80 sm:h-96 lg:h-full min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d69.95!3d22.15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDungar%2C%20Gujarat%20365555!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="માધવ ઓનલાઇન સેન્ટર - ડુંગર, ગુજરાત"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/madhav-logo.png"
                  alt="માધવ ઓનલાઇન સેન્ટર"
                  className="w-10 h-10 rounded-full object-cover border-2 border-orange-400"
                />
                <div>
                  <h3 className="text-lg font-bold">માધવ ઓનલાઇન સેન્ટર</h3>
                  <p className="text-xs text-gray-400">
                    Madhav Online Center
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                તમારા તમામ પ્રિન્ટિંગ, ઝેરોક્સ અને ઓનલાઈન સેવાઓ માટે
                એક વિશ્વસનીય સ્થળ
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">
                ઝડપી લિંક્સ
              </h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-orange-400 uppercase tracking-wider mb-4">
                સંપર્ક માહિતી
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-400">
                    ડુંગર, પોલીસ સ્ટેશન નજીક, 365555
                  </p>
                </div>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp પર સંપર્ક કરો
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-700/50 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              &copy; 2026 Madhav Online Center - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Floating Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:bg-green-600 transition-all duration-200 hover:scale-110 active:scale-95 whatsapp-pulse"
        aria-label="WhatsApp પર સંપર્ક કરો"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-110 active:scale-95 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="ઉપર જાઓ"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
