import TransitReseauClient from '@/components/transit/TransitReseauClient';

export const metadata = {
  title: 'Réseau & Couverture | EL-BOMI Transit, Logistics & Transport',
  description: '25+ pays desservis, 5 corridors routiers — carte interactive du réseau logistique EL-BOMI.',
};

export default function TransitReseauPage() {
  return <TransitReseauClient />;
}
