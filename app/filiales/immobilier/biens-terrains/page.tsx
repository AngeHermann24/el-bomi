import ImmobilierBiensClient from '@/components/immobilier/ImmobilierBiensClient';

export const metadata = {
  title: 'Biens & Terrains | EL-BOMI Immobilier & Patrimoine',
  description: 'Découvrez nos biens immobiliers et terrains disponibles à la vente et à la location.',
};

export default function BiensTerrainsPage() {
  return <ImmobilierBiensClient />;
}
