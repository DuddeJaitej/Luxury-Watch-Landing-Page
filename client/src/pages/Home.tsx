import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { toast } from 'sonner';
import { Link } from 'wouter';
import { ContactModal } from '@/components/ContactModal';
import { ReservationModal } from '@/components/ReservationModal';

/**
 * Luxury Watch Landing Page
 * Design: Minimalist Precision
 * - Full-bleed hero with display typography
 * - CSS-rebuilt Magic UI effect (floating cards with parallax)
 * - Gallery with scroll animations
 * - Specs section with refined layout
 * - Strong CTA throughout
 */

interface ScrollPosition {
  y: number;
}

export default function Home() {
  const [scrollPos, setScrollPos] = useState<ScrollPosition>({ y: 0 });
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);

  const handleReserve = () => {
    setReservationModalOpen(true);
  };

  const handleContact = () => {
    setContactModalOpen(true);
  };

  const handleLearnMore = () => {
    const specsSection = document.getElementById('specs-section');
    specsSection?.scrollIntoView({ behavior: 'smooth' });
    toast.info('📖 Scrolling to specifications...', {
      duration: 2000,
    });
  };
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPos({ y: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Setup intersection observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src="../Assets/brand-logo.webp"
              alt="Chronos"
              className="h-8 w-8"
            />
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-lg tracking-tight">CHRONOS</span>
          </div>
          <Button
            onClick={handleReserve}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            Reserve Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Parallax background effect */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            transform: `translateY(${scrollPos.y * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
        </div>

        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Typography */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-specs-label text-accent">PRECISION ENGINEERED</p>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-6xl md:text-7xl lg:text-8xl leading-tight">
                  A Watch That <span className="text-accent">Outlives</span> Trends
                </h1>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                Where engineering meets art. A Swiss-made mechanical chronograph designed for those who understand that time is the ultimate luxury.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleReserve}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-95"
              >
                Reserve Your Piece
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-foreground hover:bg-foreground hover:text-background"
              >
                Learn More
              </Button>
              </div>

              <div className="flex gap-8 pt-8 border-t border-border">
                <div>
                  <p className="text-specs-label text-accent">MOVEMENT</p>
                  <p className="text-sm text-foreground mt-1">Swiss ETA 7750</p>
                </div>
                <div>
                  <p className="text-specs-label text-accent">WATER RESISTANCE</p>
                  <p className="text-sm text-foreground mt-1">300m / 1000ft</p>
                </div>
                <div>
                  <p className="text-specs-label text-accent">POWER RESERVE</p>
                  <p className="text-sm text-foreground mt-1">42 Hours</p>
                </div>
              </div>
            </div>

            {/* Right: Hero Image with Magic UI Effect */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              {/* Floating card effect background */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer glow */}
                <div className="absolute w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

                {/* Card with parallax */}
                <div
                  className="relative w-72 h-72 md:w-80 md:h-80 rounded-lg bg-white shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105"
                  style={{
                    transform: `perspective(1000px) rotateX(${(scrollPos.y - 300) * 0.05}deg) rotateY(${(scrollPos.y - 300) * 0.03}deg)`,
                  }}
                >
                  <img
                    src="../Assets/hero-watch.webp"
                    alt="Chronos Luxury Watch"
                    className="w-full h-full object-cover"
                  />

                  {/* Shine effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating accent dots */}
              <div className="absolute top-10 right-10 w-3 h-3 bg-accent rounded-full animate-pulse" />
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-accent/50 rounded-full animate-pulse delay-100" />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-accent" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Gallery Section */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container">
          <div className="space-y-4 mb-16">
            <p className="text-specs-label text-accent">GALLERY</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl leading-tight">Crafted to Perfection</h2>
          </div>

          {/* Gallery Grid with staggered animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'gallery-1',
                src: '../Assets/watch-detail-1.webp',
                alt: 'Dial Detail',
                title: 'Precision Dial',
              },
              {
                id: 'gallery-2',
                src: '../Assets/watch-detail-2.webp',
                alt: 'Case Detail',
                title: 'Rose Gold Case',
              },
              {
                id: 'gallery-3',
                src: '../Assets/watch-movement.webp',
                alt: 'Movement',
                title: 'Swiss Movement',
              },
            ].map((item, idx) => (
              <div
                key={item.id}
                id={item.id}
                data-animate
                className={`group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 ${
                  Array.from(visibleItems).includes(item.id) ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDelay: `${idx * 100}ms`,
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-6">
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Specifications Section */}
      <section id="specs-section" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="space-y-4 mb-16">
            <p className="text-specs-label text-accent">SPECIFICATIONS</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl leading-tight">Engineering Excellence</h2>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { label: 'CASE MATERIAL', value: 'Rose Gold 18K' },
              { label: 'CASE DIAMETER', value: '42mm' },
              { label: 'MOVEMENT', value: 'Swiss ETA 7750 Automatic' },
              { label: 'POWER RESERVE', value: '42 Hours' },
              { label: 'WATER RESISTANCE', value: '300m / 1000ft' },
              { label: 'CRYSTAL', value: 'Sapphire with AR Coating' },
              { label: 'STRAP', value: 'Alligator Leather' },
              { label: 'PRODUCTION', value: 'Limited to 500 pieces' },
            ].map((spec, idx) => (
              <div
                key={idx}
                id={`spec-${idx}`}
                data-animate
                className={`flex justify-between items-center pb-6 border-b border-border transition-all duration-500 ${
                  Array.from(visibleItems).includes(`spec-${idx}`) ? 'animate-fade-in-up' : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDelay: `${idx * 50}ms`,
                }}
              >
                <span className="text-specs-label text-muted-foreground">{spec.label}</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-lg text-foreground">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <div className="container text-center space-y-8">
          <div className="space-y-4">
            <p className="text-specs-label text-accent">EXCLUSIVE OFFER</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl leading-tight text-background">
              Join the Chronos Collective
            </h2>
            <p className="text-lg text-background/80 max-w-2xl mx-auto">
              Limited to 500 pieces worldwide. Each watch comes with a certificate of authenticity and lifetime warranty.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              onClick={handleReserve}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200 active:scale-95"
            >
              Reserve Now
            </Button>
            <Button
              onClick={handleContact}
              size="lg"
              variant="outline"
              className="border-background text-background hover:bg-background/20"
            >
              Contact Us
            </Button>
          </div>

          <p className="text-sm text-background/60 pt-8">
            Delivery in 6-8 weeks. Free worldwide shipping.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-specs-label text-accent mb-4">ABOUT</p>
              <p className="text-sm text-muted-foreground">
                Chronos crafts precision instruments for those who value timeless elegance.
              </p>
            </div>
            <div>
              <p className="text-specs-label text-accent mb-4">SUPPORT</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/warranty" className="hover:text-foreground transition-colors">Warranty</Link></li>
                <li><Link href="/service" className="hover:text-foreground transition-colors">Service</Link></li>
                <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-specs-label text-accent mb-4">LEGAL</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="/shipping" className="hover:text-foreground transition-colors">Shipping</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-specs-label text-accent mb-4">Address</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>BTM Layout, Bangaluru, Karnataka</li>
                <p className="text-specs-label text-accent mb-4">Mail</p>
                <li>legal@chronos.watch</li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-border mb-8" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Chronos. All rights reserved.</p>
            <p>Handcrafted with precision in India</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal open={contactModalOpen} onOpenChange={setContactModalOpen} />

      {/* Reservation Modal */}
      <ReservationModal open={reservationModalOpen} onOpenChange={setReservationModalOpen} />
    </div>
  );
}
