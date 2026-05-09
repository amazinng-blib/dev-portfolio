import { Mail, MapPin, Phone } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nwankwoernest2020@gmail.com',
    href: 'mailto:nwankwoernest2020@gmail.com',
  },

  {
    icon: Phone,
    label: 'Phone',
    value: '+234 706 184 7132',
    href: 'tel:+234 706 184 7132',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lagos, Nigeria',
    href: '#',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
      </div>
    </section>
  );
};
