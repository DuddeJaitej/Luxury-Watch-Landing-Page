import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, CheckCircle, Clock, Shield } from 'lucide-react';

export default function Warranty() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-accent-foreground text-sm">C</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-lg tracking-tight">CHRONOS</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src="../Assets/warranty-hero.webp"
          alt="Warranty"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl text-foreground mb-4">
              Lifetime Warranty
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Every Chronos watch is backed by our comprehensive lifetime warranty, ensuring your investment is protected.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* Left Column */}
            <div className="space-y-8">
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-4">What's Covered</h2>
                <p className="text-muted-foreground mb-6">
                  Your Chronos watch is protected against defects in materials and workmanship for the lifetime of the original owner.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Shield, title: 'Manufacturing Defects', desc: 'All mechanical and structural defects' },
                  { icon: CheckCircle, title: 'Movement Failure', desc: 'Automatic movement and complications' },
                  { icon: Clock, title: 'Timekeeping Accuracy', desc: 'Precision within COSC standards' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <item.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-muted/30 rounded-lg p-8 space-y-6">
              <div>
                <h3 className="text-specs-label text-accent mb-2">WHAT'S NOT COVERED</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Normal wear and tear (crystal scratches, case polishing)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Water damage from improper use or seal failure</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Damage from accidents, drops, or impacts</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Unauthorized repairs or modifications</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Cosmetic damage that doesn't affect functionality</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold mb-2">Service & Maintenance</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We recommend professional servicing every 5 years to maintain optimal performance.
                </p>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Schedule Service
                </Button>
              </div>
            </div>
          </div>

          {/* Terms Section */}
          <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-lg p-8 md:p-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-6">Warranty Terms</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Registration Required:</strong> Warranty coverage begins upon purchase. Register your watch within 30 days to activate extended coverage.
              </p>
              <p>
                <strong className="text-foreground">Original Owner Only:</strong> Warranty is non-transferable and applies only to the original purchaser.
              </p>
              <p>
                <strong className="text-foreground">Service Coverage:</strong> Warranty covers parts and labor for covered defects. Shipping costs are covered for warranty claims.
              </p>
              <p>
                <strong className="text-foreground">Proof of Purchase:</strong> Original receipt or certificate of authenticity required for warranty claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-4">Questions About Your Warranty?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact our customer service team for detailed warranty information or to register your watch.
          </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200">
                Contact Support
              </Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
