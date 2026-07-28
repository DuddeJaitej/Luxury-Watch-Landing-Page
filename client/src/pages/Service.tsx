import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowLeft, Wrench, Zap, Shield } from 'lucide-react';

export default function Service() {
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
          src="../Assets/service-hero.webp"
          alt="Service"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl text-foreground mb-4">
              Expert Service & Maintenance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Keep your Chronos watch in perfect condition with our professional maintenance services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          {/* Service Types */}
          <div className="mb-20">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Wrench,
                  title: 'Full Service',
                  desc: 'Complete overhaul including movement cleaning, lubrication, and adjustment. Recommended every 5 years.',
                  price: '$450',
                },
                {
                  icon: Zap,
                  title: 'Battery Replacement',
                  desc: 'Quick service for quartz movements. Includes water resistance testing and gasket replacement.',
                  price: '$85',
                },
                {
                  icon: Shield,
                  title: 'Repair & Restoration',
                  desc: 'Expert repair of damaged components, crystal replacement, and case polishing.',
                  price: 'Custom Quote',
                },
              ].map((service, i) => (
                <div key={i} className="bg-muted/30 rounded-lg p-8 space-y-4">
                  <service.icon className="w-8 h-8 text-accent" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                  <p className="text-accent font-semibold pt-4">{service.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Process */}
          <div className="mb-20">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-12">Our Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Inspection',
                  desc: 'Detailed examination of your watch to identify any issues or wear.',
                },
                {
                  step: '2',
                  title: 'Diagnosis',
                  desc: 'We provide a detailed report and quote for any necessary repairs.',
                },
                {
                  step: '3',
                  title: 'Service',
                  desc: 'Expert technicians perform the service using genuine parts and precision tools.',
                },
                {
                  step: '4',
                  title: 'Testing',
                  desc: 'Rigorous quality checks ensure your watch meets our standards.',
                },
                {
                  step: '5',
                  title: 'Return',
                  desc: 'Your watch is carefully packaged and shipped back with full documentation.',
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">
                      {item.step}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Turnaround Times */}
          <div className="bg-gradient-to-br from-accent/5 to-transparent rounded-lg p-8 md:p-12 mb-12">
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-6">Turnaround Times</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Standard Service</h3>
                <p className="text-muted-foreground">2-3 weeks from receipt</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Express Service</h3>
                <p className="text-muted-foreground">5-7 business days (additional fee applies)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Battery Replacement</h3>
                <p className="text-muted-foreground">3-5 business days</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Repairs</h3>
                <p className="text-muted-foreground">Varies based on complexity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container text-center">
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl mb-4">Ready to Service Your Watch?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us to schedule a service or request a quote for your Chronos watch.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Schedule Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
