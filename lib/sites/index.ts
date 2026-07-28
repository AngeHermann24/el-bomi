import type { SubsidiarySite } from '@/types';
import { energieSite } from './energie';
import { itSite } from './informatique-telecoms';
import { logisticsSite } from './transit-logistique';
import { medicalSite } from './medical';
import { agricultureSite } from './agriculture';

export const subsidiarySites: Record<string, SubsidiarySite> = {
  energie: energieSite,
  'informatique-telecoms': itSite,
  'transit-logistique': logisticsSite,
  medical: medicalSite,
  agriculture: agricultureSite,
};

export function getSubsidiarySite(slug: string): SubsidiarySite | undefined {
  return subsidiarySites[slug];
}

export { energieSite, itSite, logisticsSite, medicalSite, agricultureSite };
