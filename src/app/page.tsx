"use client";

import { useState, useEffect, useRef } from "react";
import {
  Printer,
  Copy,
  Camera,
  ScanLine,
  BookOpen,
  CreditCard,
  FileText,
  Ticket,
  FileCode,
  Layout,
  MessageSquare,
  Usb,
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
} from "lucide-react";

const WHATSAPP_LINK =
  "https://chat.whatsapp.com/Ehd8xkgvqXcDmFzHyrHgfr?mode=ems_copy_c";

const services = [
  {
    icon: Copy,
    title: "બ્લેક & વ્હાઈટ / કલર ઝેરોક્સ",
    desc: "ઉચ્ચ ગુણવત્તાવાળા બ્લેક એન્ડ વ્હાઈટ અને કલર ઝેરોક્સ સેવા",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Printer,
    title: "પ્રિન્ટઆઉટ (PDF, Word, Photo)",
    desc: "PDF, Word અને ફોટો ફાઈલોની ઝડપી પ્રિન્ટિંગ",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Camera,
    title: "ફોટો પ્રિન્ટ (પાસપોર્ટ સાઈઝ)",
    desc: "પાસપોર્ટ સાઈઝના ફોટો પ્રિન્ટ સેવા",
    color: "from-orange-400 to-orange-500",
  },
  {
    icon: ScanLine,
    title: "સ્કેનિંગ અને PDF સેવા",
    desc: "દસ્તાવેજોનું સ્કેનિંગ અને PDF માં રૂપાંતર",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: BookOpen,
    title: "લેમિનેશન અને બાઈન્ડિંગ",
    desc: "દસ્તાવેજોની લેમિનેશન અને બાઈન્ડિંગ સેવા",
    color: "from-orange-600 to-red-500",
  },
  {
    icon: CreditCard,
    title: "આધાર / પાન કાર્ડ સેવા",
    desc: "આધાર કાર્ડ અને પાન કાર્ડ સંબંધિત સેવાઓ",
    color: "from-blue-600 to-indigo-500",
  },
  {
    icon: FileText,
    title: "ઓનલાઈન ફોર્મ ભરવું",
    desc: "તમામ પ્રકારના ઓનલાઈન ફોર્મ ભરવાની સેવા",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Ticket,
    title: "ઇ-ટિકિટ (રેલવે / બસ / ફ્લાઈટ)",
    desc: "રેલવે, બસ અને ફ્લાઈટની ઇ-ટિકિટ બુકિંગ",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileCode,
    title: "રિઝ્યૂમે અને પ્રોજેક્ટ પ્રિન્ટ",
    desc: "રિઝ્યૂમે અને પ્રોજેક્ટ રિપોર્ટની પ્રિન્ટિંગ",
    color: "from-orange-400 to-red-400",
  },
  {
    icon: Layout,
    title: "વિઝિટિંગ કાર્ડ / પોસ્ટર પ્રિન્ટ",
    desc: "વિઝિટિંગ કાર્ડ અને પોસ્ટર ડિઝાઈન અને પ્રિન્ટ",
    color: "from-blue-400 to-violet-500",
  },
];

const facilities = [
  {
    icon: MessageSquare,
    title: "વોટ્સએપ / ઇમેઇલમાંથી પ્રિન્ટ",
    desc: "સીધા વોટ્સએપ અથવા ઇમેઇલ પરથી ફાઈલ મોકલીને પ્રિન્ટ કરાવો",
  },
  {
    icon: Usb,
    title: "પેન ડ્રાઈવ સપોર્ટ",
    desc: "તમારી પેન ડ્રાઈવમાંથી સીધું પ્રિન્ટ કરાવો",
  },
  {
    icon: Zap,
    title: "ઝડપી સેવા",
    desc: "ઓછા સમયમાં ઝડપી અને ચોક્કસ સેવા",
  },
  {
    icon: BadgeIndianRupee,
    title: "ઓછા દર",
    desc: "બજાર કરતાં ઓછા દરે ઉત્તમ સેવા",
  },
];

const navLinks = [
  { label: "હોમ", href: "#home" },
  { label: "સેવાઓ", href: "#services" },
  { label: "સુવિધાઓ", href: "#facilities" },
  { label: "અમારા વિશે", href: "#about" },
  { label: "સંપર્ક", href: "#contact" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 sm:gap-3">
              <img
                src="/madhav-logo.png"
                alt="માધવ ઓનલાઇન સેન્ટર"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-orange-700 leading-tight">
                  માધવ
                </span>
                <span className="text-xs sm:text-sm text-blue-700 font-medium leading-tight">
                  ઓનલાઇન સેન્ટર
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-200"
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-orange-50 transition-colors"
              aria-label="મેનુ ટૉગલ"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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

      {/* Hero Section */}
      <section
        id="home"
        className="relative pt-20 sm:pt-24 pb-16 sm:pb-24 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-50 rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8 py-8 sm:py-16">
            {/* Logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-orange-200 rounded-full blur-xl opacity-40 scale-110" />
              <img
                src="/madhav-logo.png"
                alt="માધવ ઓનલાઇન સેન્ટર"
                className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>

            {/* Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                <span className="text-orange-600">માધવ</span>{" "}
                <span className="text-blue-600">ઓનલાઇન સેન્ટર</span>
              </h1>
              <p className="text-lg sm:text-xl text-orange-500 font-semibold">
                માં આપનું સ્વાગત છે
              </p>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                તમારા તમામ પ્રિન્ટિંગ, ઝેરોક્સ અને ઓનલાઈન સેવાઓ માટે એક
                વિશ્વસનીય સ્થળ
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-green-500 text-white rounded-full text-base font-bold hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp પર સંપર્ક કરો
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-orange-500 text-white rounded-full text-base font-bold hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                અમારી સેવાઓ જુઓ
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-6 sm:mt-8">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-orange-600">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl sm:text-3xl font-bold">1000+</span>
                </div>
                <span className="text-sm text-gray-500 mt-1">
                  સંતુષ્ટ ગ્રાહકો
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-blue-600">
                  <Zap className="w-5 h-5" />
                  <span className="text-2xl sm:text-3xl font-bold">10+</span>
                </div>
                <span className="text-sm text-gray-500 mt-1">
                  સેવાઓ ઉપલબ્ધ
                </span>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-green-600">
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
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 sm:py-24 bg-gradient-to-b from-white to-orange-50/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`service-card bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:border-orange-200 cursor-default group ${
                    visibleSections.has("services")
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              અન્ય સુવિધાઓ
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              અમારી વિશેષ સુવિધાઓ
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
              અમે તમને શ્રેષ્ઠ સેવા આપવા માટે સતત પ્રયત્નશીલ છીએ
            </p>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 sm:p-8 border border-blue-100/50 group hover:shadow-lg transition-all duration-300 ${
                    visibleSections.has("facilities")
                      ? "animate-fade-in-up"
                      : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100/40 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {facility.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 sm:py-24 bg-gradient-to-br from-orange-50 via-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Image / Visual */}
            <div className="relative">
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

            {/* Text Content */}
            <div>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
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
            {/* Contact Info Cards */}
            <div className="space-y-5">
              {/* Address Card */}
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

              {/* WhatsApp Card */}
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

              {/* Working Hours Card */}
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

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-80 sm:h-96 lg:h-full min-h-[320px]">
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

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Brand */}
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

            {/* Quick Links */}
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

            {/* Contact Info */}
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

          {/* Bottom Bar */}
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
