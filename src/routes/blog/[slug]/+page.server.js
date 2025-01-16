import { error } from '@sveltejs/kit';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function load({ params }) {
    const { slug } = params;

    try {
        const filePath = path.resolve('src/content/posts', `${slug}.md`);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { content, data: metadata } = matter(fileContent);

        return {
            post: {
                metadata,
                content,
            },
        };
    } catch (err) {
        console.error(`Post not found: ${slug}`, err);
        throw error(404, 'Post not found');
    }
}
