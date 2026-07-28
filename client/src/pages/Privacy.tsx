import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
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
          src="../Assets/privacy-hero.webp"
          alt="Privacy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-4xl md:text-5xl text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We take your privacy seriously. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <div className="space-y-12">
            {/* Last Updated */}
            <div className="text-sm text-muted-foreground">
              Last updated: July 2026
            </div>

            {/* Introduction */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Chronos ("we", "us", "our", or "Company") operates the chronos.watch website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
              </p>
              <p className="text-muted-foreground">
                We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Information Collection and Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Data</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li>• Email address</li>
                    <li>• First name and last name</li>
                    <li>• Phone number</li>
                    <li>• Address, State, Province, ZIP/Postal code, City</li>
                    <li>• Cookies and Usage Data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Usage Data</h3>
                  <p className="text-muted-foreground text-sm">
                    We may also collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of Data */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Use of Data</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Chronos uses the collected data for various purposes:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>• To provide and maintain the Service</li>
                <li>• To notify you about changes to our Service</li>
                <li>• To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>• To provide customer care and support</li>
                <li>• To gather analysis or valuable information so that we can improve the Service</li>
                <li>• To monitor the usage of the Service</li>
                <li>• To detect, prevent and address technical issues</li>
              </ul>
            </div>

            {/* Security */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Security of Data</h2>
              <p className="text-muted-foreground text-sm">
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Cookies</h2>
              <p className="text-muted-foreground text-sm mb-4">
                We use cookies and similar tracking technologies to track activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
            </div>

            {/* Third Party Links */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground text-sm">
                Our Service may contain links to third-party web sites that are not operated by us. This Privacy Policy applies only to information collected through our Service. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services. We encourage you to review the privacy policies of any third-party service before providing your personal information or using the service.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground text-sm">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-2xl mb-4">Contact Us</h2>
              <p className="text-muted-foreground text-sm mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-2 text-sm">
                <p><strong>Email:</strong> privacy@chronos.watch</p>
                <p><strong>Address:</strong> Chronos Headquarters, Zurich, Switzerland</p>
                <p><strong>Phone:</strong> +41 44 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
