'use client';

import { Shield, Clock, Award, Users, Target, Eye, Heart, MapPin, Phone, Mail, Calendar, Maximize2, Building2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Clock,
  Award,
  Users,
  Target,
  Eye,
  Heart,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Maximize2,
  Building2,
};

interface IconRendererProps {
  name: string;
  className?: string;
}

export default function IconRenderer({ name, className }: IconRendererProps) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
