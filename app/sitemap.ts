import { MetadataRoute } from 'next';
import { subsidiaries } from '@/lib/group';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://elbomigroup.com';
  const lastModified = new Date();

  const subsidiaryUrls = subsidiaries.map((sub) => ({
    url: `${baseUrl}/filiales/${sub.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const constructionUrls = [
    'expertises',
    'realisations',
    'methodologie',
    'contact',
  ].map((segment) => ({
    url: `${baseUrl}/filiales/construction/${segment}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const energieUrls = [
    'solutions',
    'impact',
    'projets',
    'contact',
  ].map((segment) => ({
    url: `${baseUrl}/filiales/energie/${segment}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const itUrls = [
    'solutions',
    'cybersecurite',
    'projets',
    'contact',
  ].map((segment) => ({
    url: `${baseUrl}/filiales/informatique-telecoms/${segment}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const transitUrls = [
    'services',
    'reseau',
    'suivi',
    'contact',
  ].map((segment) => ({
    url: `${baseUrl}/filiales/transit-logistique/${segment}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const medicalUrls = [
    'activites',
    'centres',
    'qualite',
    'contact',
  ].map((segment) => ({
    url: `${baseUrl}/filiales/medical/${segment}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const otherSubsidiaries = ['agriculture'];
  const otherSubsidiaryUrls = otherSubsidiaries.flatMap((slug) =>
    ['activites', 'realisations', 'contact'].map((segment) => ({
      url: `${baseUrl}/filiales/${slug}/${segment}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  );

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/actualites`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/carrieres`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...subsidiaryUrls,
    ...constructionUrls,
    ...energieUrls,
    ...itUrls,
    ...transitUrls,
    ...medicalUrls,
    ...otherSubsidiaryUrls,
  ];
}
