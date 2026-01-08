export default function robots() {
    const baseUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://azhka.in';

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
