const LAST_MODIFIED = new Date('2026-01-08');

export default function sitemap() {
    const baseUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://azhka.in';

    return [
        {
            url: baseUrl,
            lastModified: LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add additional routes here as the site grows
    ];
}
