import TransitSuiviClient from '@/components/transit/TransitSuiviClient';

export const metadata = {
  title: 'Suivi de cargaison | EL-BOMI Transit, Logistics & Transport',
  description: 'Suivez votre cargaison en temps réel — numéro de tracking, statut et alertes automatiques.',
};

export default function TransitSuiviPage() {
  return <TransitSuiviClient />;
}
