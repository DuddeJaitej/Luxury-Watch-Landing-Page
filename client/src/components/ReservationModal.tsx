import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, Clock } from 'lucide-react';

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReservationModal({ open, onOpenChange }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    caseColor: '',
    strapMaterial: '',
    deliveryDate: '',
    specialRequests: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after 4 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        caseColor: '',
        strapMaterial: '',
        deliveryDate: '',
        specialRequests: '',
      });
      onOpenChange(false);
    }, 4000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl border-0 shadow-2xl p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <div className="bg-gradient-to-br from-background via-background to-muted/10">
            {/* Header with accent bar */}
            <div className="bg-gradient-to-r from-accent to-accent/80 px-8 py-8 text-accent-foreground">
              <DialogTitle style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl">
                Reserve Your Chronos
              </DialogTitle>
              <p className="text-accent-foreground/90 mt-2 text-sm">
                Secure your piece of precision engineering. Limited to 500 pieces worldwide.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 px-8 py-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-specs-label text-accent mb-4">YOUR INFORMATION</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-accent focus:ring-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border focus:border-accent focus:ring-accent"
                    />
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>

              {/* Watch Configuration */}
              <div className="border-t border-border pt-6">
                <h3 className="text-specs-label text-accent mb-4">WATCH CONFIGURATION</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="caseColor" className="text-sm font-medium">
                      Case Color *
                    </label>
                    <Select value={formData.caseColor} onValueChange={(value) => handleSelectChange('caseColor', value)}>
                      <SelectTrigger className="bg-background border-border focus:border-accent focus:ring-accent">
                        <SelectValue placeholder="Select case color" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rose-gold">Rose Gold</SelectItem>
                        <SelectItem value="white-gold">White Gold</SelectItem>
                        <SelectItem value="yellow-gold">Yellow Gold</SelectItem>
                        <SelectItem value="stainless-steel">Stainless Steel</SelectItem>
                        <SelectItem value="titanium">Titanium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="strapMaterial" className="text-sm font-medium">
                      Strap Material *
                    </label>
                    <Select value={formData.strapMaterial} onValueChange={(value) => handleSelectChange('strapMaterial', value)}>
                      <SelectTrigger className="bg-background border-border focus:border-accent focus:ring-accent">
                        <SelectValue placeholder="Select strap material" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="alligator">Alligator Leather</SelectItem>
                        <SelectItem value="crocodile">Crocodile Leather</SelectItem>
                        <SelectItem value="calf">Calf Leather</SelectItem>
                        <SelectItem value="rubber">Rubber</SelectItem>
                        <SelectItem value="metal">Metal Bracelet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div className="border-t border-border pt-6">
                <h3 className="text-specs-label text-accent mb-4">DELIVERY PREFERENCES</h3>
                <div className="space-y-2">
                  <label htmlFor="deliveryDate" className="text-sm font-medium">
                    Preferred Delivery Quarter *
                  </label>
                  <Select value={formData.deliveryDate} onValueChange={(value) => handleSelectChange('deliveryDate', value)}>
                    <SelectTrigger className="bg-background border-border focus:border-accent focus:ring-accent">
                      <SelectValue placeholder="Select delivery quarter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="q3-2026">Q3 2026 (6-8 weeks)</SelectItem>
                      <SelectItem value="q4-2026">Q4 2026 (12-16 weeks)</SelectItem>
                      <SelectItem value="q1-2027">Q1 2027 (16-20 weeks)</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="border-t border-border pt-6">
                <div className="space-y-2">
                  <label htmlFor="specialRequests" className="text-sm font-medium">
                    Special Requests or Questions
                  </label>
                  <Textarea
                    id="specialRequests"
                    name="specialRequests"
                    placeholder="Any specific requirements or questions?"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={3}
                    className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
                  />
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-muted/20 rounded-lg p-4 text-xs text-muted-foreground">
                <p>
                  By submitting this reservation, you agree to our terms and conditions. A Chronos representative will contact you within 24 hours to confirm your reservation and discuss payment options.
                </p>
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Processing...
                    </>
                  ) : (
                    'Reserve Now'
                  )}
                </Button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Message */
          <div className="bg-gradient-to-br from-accent/10 via-background to-background p-12 text-center min-h-[500px] flex flex-col items-center justify-center">
            {/* Animated Success Icon */}
            <div className="mb-8 animate-scale-in">
              <div className="relative w-24 h-24 mx-auto">
                <div className="absolute inset-0 bg-accent/20 rounded-full animate-pulse" />
                <div className="absolute inset-2 bg-accent/10 rounded-full" />
                <CheckCircle className="w-24 h-24 text-accent relative z-10" />
              </div>
            </div>

            {/* Success Message */}
            <div className="space-y-4 mb-8">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }} className="text-3xl text-foreground">
                Reservation Confirmed!
              </h3>
              <p className="text-muted-foreground max-w-md">
                Thank you for your interest in Chronos. Your reservation has been received.
              </p>
            </div>

            {/* Confirmation Details */}
            <div className="bg-muted/30 rounded-lg p-6 w-full mb-8 text-left space-y-3">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Next Steps</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    A Chronos representative will contact you within 24 hours to confirm your reservation and discuss payment options.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex gap-2 justify-center mb-6">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <div className="w-2 h-2 bg-accent/50 rounded-full" />
              <div className="w-2 h-2 bg-accent/30 rounded-full" />
            </div>

            {/* Auto-close hint */}
            <p className="text-xs text-muted-foreground">
              Closing in a moment...
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
