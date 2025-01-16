let entriesData = [];

if (import.meta.env.SSR) {
    const fs = await import('fs/promises');
    const path = await import('path');

    const contentDir = path.resolve('src/content/posts');

    try {
        const files = await fs.readdir(contentDir);
        entriesData = files
            .filter((file) => file.endsWith('.md')) 
            .map((file) => ({ slug: file.replace('.md', '') }));
    } catch (err) {
        console.error('Error reading content directory:', err);
    }
}

export const prerender = true;

export async function entries() {
    return entriesData;
}
