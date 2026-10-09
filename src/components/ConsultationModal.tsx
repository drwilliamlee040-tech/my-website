import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetScope?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetScope,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    mode: 'In-Studio (SoHo, NY)',
    timeline: 'Within 1–3 Months',
    scope: presetScope || 'Full-Home Residential',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  useEffect(() => {
    if (presetScope) {
      setFormData((prev) => ({ ...prev, scope: presetScope }));
    }
  }, [presetScope]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      setBookingRef(`CONS-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B2520]/80 backdrop-blur-md"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto bg-[#F5F1EA] border border-[#D8CABB] shadow-2xl p-6 sm:p-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#EDE6DB] text-[#2B2520] hover:bg-[#2B2520] hover:text-[#F5F1EA] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B99A6B] cursor-pointer"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#EDE6DB] border border-[#B99A6B] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#B99A6B]" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A6B] font-semibold">
                Consultation Reserved
              </span>
              <h2 className="font-serif text-3xl text-[#2B2520]">
                We Look Forward to Meeting You
              </h2>
              <p className="text-sm text-[#40372F] max-w-sm mx-auto leading-relaxed">
                A calendar invitation and studio preparation dossier have been dispatched to <strong>{formData.email}</strong>.
              </p>
            </div>

            <div className="p-4 bg-[#EDE6DB] border border-[#D8CABB] text-left text-xs space-y-1 inline-block">
              <p className="text-[#77716A]">
                Reference: <strong className="font-mono text-[#2B2520]">{bookingRef}</strong>
              </p>
              <p className="text-[#77716A]">
                Format: <span className="text-[#2B2520]">{formData.mode}</span>
              </p>
            </div>

            <div>
              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] text-xs uppercase tracking-[0.2em] font-medium transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#B99A6B] font-semibold block mb-1">
                Aurelia House Private Atelier
              </span>
              <h2 id="consultation-title" className="font-serif text-3xl sm:text-4xl text-[#2B2520]">
                Schedule a Consultation
              </h2>
              <p className="text-xs text-[#77716A] mt-2 leading-relaxed">
                Our initial 45-minute consultation explores your architectural brief, site parameters, and material desires.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#40372F] mb-1 font-medium">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Julian Montgomery"
                  className="w-full px-4 py-2.5 bg-[#EDE6DB] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#40372F] mb-1 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@example.com"
                    className="w-full px-4 py-2.5 bg-[#EDE6DB] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#40372F] mb-1 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-2.5 bg-[#EDE6DB] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#40372F] mb-1 font-medium">
                    Consultation Format
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#EDE6DB] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520]"
                  >
                    <option value="In-Studio (SoHo, NY)">In-Studio (SoHo, NY)</option>
                    <option value="On-Site Property Walkthrough">On-Site Property Walkthrough</option>
                    <option value="Virtual Private Atelier">Virtual Private Atelier</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#40372F] mb-1 font-medium">
                    Anticipated Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#EDE6DB] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520]"
                  >
                    <option value="Immediate (This Month)">Immediate (This Month)</option>
                    <option value="Within 1–3 Months">Within 1–3 Months</option>
                    <option value="3–6 Months">3–6 Months</option>
                    <option value="Planning / In Construction">Planning / In Construction</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#40372F] mb-1 font-medium">
                  Primary Architectural Focus
                </label>
                <input
                  type="text"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#EDE6DB] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#40372F] mb-1 font-medium">
                  Brief Project Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Property location, square footage, architect involved, or particular desires..."
                  className="w-full px-4 py-2.5 bg-[#EDE6DB] border border-[#D8CABB] text-sm text-[#2B2520] focus:outline-none focus:border-[#2B2520] resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[#2B2520] text-[#F5F1EA] hover:bg-[#40372F] text-xs uppercase tracking-[0.2em] font-medium transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#B99A6B]" />
                  <span>Securing Calendar Window...</span>
                </>
              ) : (
                <>
                  <span>Confirm Consultation Request</span>
                  <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
