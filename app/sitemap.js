const LAST_MODIFIED = new Date('2024-01-08'); // Stable build date

export default function sitemap() {
    const baseUrl = 'https://azhka.in';

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
