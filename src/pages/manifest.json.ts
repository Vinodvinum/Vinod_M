import { absoluteUrl } from '../utils/seo';

export function GET() {
  const body = JSON.stringify(
    {
      name: 'Vinod M',
      short_name: 'Vinod M',
      description: 'Personal brand site for Vinod M, also known as Vinu, from Mysuru, Karnataka.',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      background_color: '#020617',
      theme_color: '#0f172a',
      lang: 'en-IN',
      icons: [
        {
          src: absoluteUrl('/images/profile.jpg'),
          sizes: '512x512',
          type: 'image/jpeg',
          purpose: 'any maskable',
        },
      ],
    },
    null,
    2,
  );

  return new Response(body, {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
    },
  });
}