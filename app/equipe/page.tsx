import PageHeader from '@/components/PageHeader';
import TeamMemberCard from '@/components/TeamMemberCard';
import { team } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre Équipe | EL-BOMI BTP',
  description: 'Découvrez l\'équipe dirigeante d\'EL-BOMI BTP. Des professionnels passionnés au service de vos projets de construction.',
};

export default function EquipePage() {
  return (
    <>
      <PageHeader
        label="Notre force"
        title="L'Équipe Dirigeante"
        image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=90"
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6">
              Des experts passionnés à votre service
            </h2>
            <p className="text-white/60 leading-relaxed">
              Notre équipe réunit des ingénieurs, architectes et conducteurs de travaux expérimentés. Ensemble, nous portons chaque projet avec rigueur, innovation et engagement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <TeamMemberCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
