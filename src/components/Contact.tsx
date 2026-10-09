import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Loader2, AlertCircle } from 'lucide-react';

interface ContactProps {
  initialServiceOrProject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialServiceOrProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Full-Home Residential Interior',
    budget: '$300k – $750k',
    location: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [inquiryCode, setInquiryCode] = useState('');

  useEffect(() => {
    if (initialServiceOrProject) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? prev.message
          : `I am interested in inquiring about ${initialServiceOrProject}.`,
      }));
    }
  }, [initialServiceOrProject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, and Message).');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    // Simulate high-end concierge submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const code = `AH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setInquiryCode(code);
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Full-Home Residential Interior',
      budget: '$300k – $750k',
      location: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-[#F5F1EA]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Studio Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-[#B99A6B]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#77716A] font-medium">
                  INITIATE A CONVERSATION
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-[#2B2520] tracking-tight mb-6">
                Let’s create something <br />
                beautiful.
              </h2>
              <p className="text-base text-[#40372F] font-light leading-relaxed max-w-md mb-10">
                Whether you are contemplating a ground-up residence, an architectural renovation, or bespoke spatial joinery, our partners welcome your inquiry.
              </p>

              {/* Studio Contact Details */}
              <div className="space-y-6 pt-6 border-t border-[#D8CABB]">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#EDE6DB] border border-[#D8CABB]">
                    <Mail className="w-4 h-4 text-[#B99A6B]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#77716A] block">
                      General & Press Inquiries
                    </span>
                    <a
                      href="mailto:hello@aureliahouse.com"
                      className="font-serif text-lg text-[#2B2520] hover:text-[#B99A6B] transition-colors"
                    >
                      hello@aureliahouse.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#EDE6DB] border border-[#D8CABB]">
                    <Phone className="w-4 h-4 text-[#B99A6B]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#77716A] block">
                      Studio Direct
                    </span>
                    <a
                      href="tel:+18004923852"
                      className="font-serif text-lg text-[#2B2520] hover:text-[#B99A6B] transition-colors"
                    >
                      +1 (800) 492-3852
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-[#EDE6DB] border border-[#D8CABB]">
                    <MapPin className="w-4 h-4 text-[#B99A6B]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#77716A] block">
                      Studio Locations
                    </span>
                    <p className="font-serif text-lg text-[#2B2520]">
                      520 Broadway, SoHo, New York
                    </p>
                    <p className="text-xs text-[#77716A]">
                      By Appointment Only • Zurich Atelier by Arrangement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="hidden lg:block mt-12 p-5 bg-[#EDE6DB] border border-[#D8CABB]">
              <p className="text-xs text-[#40372F] leading-relaxed">
                <strong className="text-[#2B2520] font-medium">Privacy Assurance:</strong> All conversations and architectural inquiries remain strictly confidential.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7 bg-[#EDE6DB] p-8 sm:p-12 border border-[#D8CABB] shadow-[0_12px_40px_rgba(43,37,32,0.04)]">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 bg-[#F5F1EA] border border-[#B99A6B] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#B99A6B]" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B99A6B] font-semibold">
                    Inquiry Transmitted
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#2B2520]">
                    Thank You, {formData.name}
                  </h3>
                  <p className="text-sm text-[#40372F] max-w-md mx-auto leading-relaxed">
                    Our lead architectural partner will review your project parameters and respond within one business day to coordinate a preliminary consultation.
                  </p>
                </div>

                <div className="p-4 bg-[#F5F1EA] border border-[#D8CABB] inline-block text-left text-xs space-y-1">
                  <p className="text-[#77716A]">
                    Reference ID: <strong className="font-mono text-[#2B2520]">{inquiryCode}</strong>
                  </p>
                  <p className="text-[#77716A]">
                    Destination: <span className="text-[#2B2520]">{formData.email}</span>
                  </p>
                </div>

                <div>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] text-xs uppercase tracking-[0.16em] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="border-b border-[#D8CABB] pb-4 mb-6">
                  <h3 className="font-serif text-2xl text-[#2B2520]">
                    Project Commission Inquiry
                  </h3>
                  <p className="text-xs text-[#77716A] mt-1">
                    Please share a few preliminary details about your home or vision.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-4 bg-[#f8d7da] text-[#721c24] border border-[#f5c6cb] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider text-[#40372F] mb-2 font-medium"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Julian Montgomery"
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D8CABB] text-sm text-[#2B2520] placeholder-[#B8A99A] focus:outline-none focus:border-[#2B2520] transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs uppercase tracking-wider text-[#40372F] mb-2 font-medium"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="julian@example.com"
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D8CABB] text-sm text-[#2B2520] placeholder-[#B8A99A] focus:outline-none focus:border-[#2B2520] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wider text-[#40372F] mb-2 font-medium"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D8CABB] text-sm text-[#2B2520] placeholder-[#B8A99A] focus:outline-none focus:border-[#2B2520] transition-colors"
                    />
                  </div>

                  {/* Property Location */}
                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block text-xs uppercase tracking-wider text-[#40372F] mb-2 font-medium"
                    >
                      Property Location / City
                    </label>
                    <input
                      id="contact-location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. New York, Hamptons, Aspen..."
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D8CABB] text-sm text-[#2B2520] placeholder-[#B8A99A] focus:outline-none focus:border-[#2B2520] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Scope / Project Type */}
                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-xs uppercase tracking-wider text-[#40372F] mb-2 font-medium"
                    >
                      Project Scope
                    </label>
                    <select
                      id="contact-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520] transition-colors cursor-pointer"
                    >
                      <option value="Full-Home Residential Interior">Full-Home Residential Interior</option>
                      <option value="Interior Architecture & Space Planning">Interior Architecture & Space Planning</option>
                      <option value="Custom Spaces & Joinery">Custom Spaces & Joinery</option>
                      <option value="Material & Lighting Design">Material & Lighting Design</option>
                      <option value="Styling & Art Advisory">Styling & Art Advisory</option>
                      <option value="Initial Design Consultation">Initial Design Consultation</option>
                    </select>
                  </div>

                  {/* Approximate Budget */}
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-xs uppercase tracking-wider text-[#40372F] mb-2 font-medium"
                    >
                      Anticipated Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520] transition-colors cursor-pointer"
                    >
                      <option value="$150k – $300k">$150,000 – $300,000</option>
                      <option value="$300k – $750k">$300,000 – $750,000</option>
                      <option value="$750k – $1.5M">$750,000 – $1,500,000</option>
                      <option value="$1.5M+">$1,500,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-wider text-[#40372F] mb-2 font-medium"
                  >
                    Project Vision & Desired Timeline *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the property, your architectural aspirations, key dates, or questions..."
                    className="w-full px-4 py-3 bg-[#F5F1EA] border border-[#D8CABB] text-sm text-[#2B2520] placeholder-[#B8A99A] focus:outline-none focus:border-[#2B2520] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-75 shadow-md"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#B99A6B]" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
