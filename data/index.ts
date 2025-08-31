import { Calendar, Car, CreditCard, Heart, Home, MessageCircle, Scissors, Search, Shield, Star } from "lucide-react";


const features = [
  {
    icon: Search,
    title: "Smart Service Discovery",
    description: "Advanced search with location-based filtering and recent search history"
  },
  {
    icon: Shield,
    title: "Verified Providers",
    description: "Identity verification, certificates, and service history for trust and quality"
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Seamless appointment scheduling with upfront payment options"
  },
  {
    icon: MessageCircle,
    title: "Real-time Communication",
    description: "Built-in messaging system for direct provider-customer communication"
  },
  {
    icon: Star,
    title: "Review System",
    description: "Rate and review services to help others make informed decisions"
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Protected financial transactions with multiple payment options"
  }
];

const serviceCategories = [
  {
    icon: Scissors,
    title: "Beauty & Personal care",
    description: "Hair styling, nail care, makeup artistry",
    color: " text-black"
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Massage therapy, veterinary services",
    color: " text-black"
  },
  {
    icon: Home,
    title: "Home Services",
    description: "Electricians, plumbers, carpenters, painters",
    color: " text-black"
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Car mechanics and maintenance services",
    color: " text-black"
  }
];

const stats = [
  { number: "10K+", label: "Active Users" },
  { number: "5K+", label: "Service Providers" },
  { number: "50K+", label: "Services Completed" },
  { number: "4.8", label: "Average Rating" }
];

export { features, serviceCategories, stats };
