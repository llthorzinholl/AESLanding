import { 
  ShieldAlert, 
  ScanSearch, 
  Trash2, 
  HardHat, 
  Microscope,
  FileCheck,
  Award,
  Zap,
  Clock
} from 'lucide-react';
import { ServiceItem, ProcessStep, Testimonial, FAQItem, GalleryItem } from './types';

// Import local gallery images so Vite bundles/copies them into the build
import before1 from './assets/before1.png';
import before2 from './assets/before2.png';
import before3 from './assets/before3.png';
import before4 from './assets/before4.png';
import after1 from './assets/after1.png';
import after2 from './assets/after2.png';
import after3 from './assets/after3.png';
import after4 from './assets/after4.png';

export const NAV_LINKS = [
  { name: 'The Risk', href: '#problem' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#gallery' },
  { name: 'FAQ', href: '#faq' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Site Risk Assessment',
    description: 'Identification of ACM (Asbestos Containing Materials) to assist independent hygienists in creating the asbestos register.',
    icon: ScanSearch
  },
  {
    id: 2,
    title: 'Licensed Removal (Class B)',
    description: 'Safe removal of non-friable asbestos (bonded) including fibro sheeting, eaves, and fencing under SafeWork regulations.',
    icon: Trash2
  },
  {
    id: 3,
    title: 'Safe Encapsulation',
    description: 'Application of high-grade sealants to bond fibers and manage asbestos in situ when removal is not immediately viable.',
    icon: ShieldAlert
  },
  {
    id: 4,
    title: 'EPA Compliant Disposal',
    description: 'Transport via EPA-licensed vehicles with WasteLocate tracking to authorized waste management facilities.',
    icon: FileCheck
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 1,
    title: 'Consultation & Scope',
    description: 'We assess the site conditions and review your existing Hazardous Materials Register.'
  },
  {
    id: 2,
    title: 'Site Isolation',
    description: 'Establishment of regulated exclusion zones and signage per Australian Standards (AS 2601).'
  },
  {
    id: 3,
    title: 'Surgical Removal',
    description: 'Wet-method extraction and immediate double-wrapping of hazardous waste.'
  },
  {
    id: 4,
    title: 'Decontamination',
    description: 'Full site decontamination ready for inspection by your Independent Licensed Asbestos Assessor (LAA).'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "James Mitchell",
    role: "Strata Manager",
    company: "Horizon Properties",
    content: "Absolute handled our apartment block's roof replacement seamlessly. Their professionalism and attention to safety were top-notch.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah O'Connor",
    role: "Heritage Architect",
    content: "We needed a delicate touch for a Victorian-era renovation. Their team respected the structure while removing the danger.",
    rating: 5
  },
  {
    id: 3,
    name: "Robert Hughes",
    role: "Operations Director",
    company: "TechMix Industries",
    content: "Full compliance with SafeWork NSW. The documentation provided for the EPA tracking was flawless. Highly recommended.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you issue the Clearance Certificate?",
    answer: "No. By law, to prevent conflict of interest, the Clearance Certificate must be issued by an independent Licensed Asbestos Assessor (LAA). We prepare the site to pass this inspection 100% of the time."
  },
  {
    question: "Do you perform Air Monitoring?",
    answer: "No. Air monitoring should be conducted by an independent third-party hygienist to ensure unbiased results. We can recommend reputable partners if required."
  },
  {
    question: "Is 'Fibro' always dangerous?",
    answer: "Fibro installed before 1990 is highly likely to contain asbestos. It is generally safe if sealed and undisturbed, but any breakage or renovation releases dangerous fibers."
  },
  {
    question: "How do you dispose of the waste?",
    answer: "All waste is double-wrapped in 200µm heavy-duty plastic, labeled as 'Asbestos Waste', and tracked via the EPA system to a licensed landfill."
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    beforeUrl: before1,
    afterUrl: after1,
    label: "Full Burnt House Demolition"
  },
  {
    id: 2,
    beforeUrl: before2,
    afterUrl: after2,
    label: "Roof Sheets Removal"
  },
  {
    id: 3,
    beforeUrl: before3,
    afterUrl: after3,
    label: "Ceiling Panels Removal"
  },
  {
    id: 4,
    beforeUrl: before4,
    afterUrl: after4,
    label: "Full Bathroom Strip Out"
  }
];

export const DIFFERENTIALS = [
  { title: "HEPA Filtration", icon: Microscope, desc: "Industrial grade vacuuming for dust control." },
  { title: "Fully Licensed", icon: Award, desc: "Compliant with WHS Regulations 2017." },
  { title: "Emergency Response", icon: Zap, desc: "24/7 Make-safe services for storm damage." },
  { title: "EPA Tracking", icon: Clock, desc: "Full transparency on waste disposal chain." },
];