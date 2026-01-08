export default function sitemap() {
    const baseUrl = 'https://azhka.in';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Add additional routes here as the site grows
    ];
}
