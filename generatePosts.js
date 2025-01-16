import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDir = './src/content/posts';
const outputFile = './src/content/posts.json';

function generatePostsJSON() {
    const files = fs.readdirSync(postsDir);
    const posts = files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            const filePath = path.join(postsDir, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);

            if (!data.title || !data.date || !data.description) {
                throw new Error(
                    `Missing required front matter in ${file}. Ensure title, date, and description are present.`
                );
            }

            return {
                slug: file.replace('.md', ''),
                title: data.title,
                date: data.date,
                description: data.description,
            };
        });

    fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
    console.log(`✅ posts.json generated with ${posts.length} posts!`);
}

try {
    generatePostsJSON();
} catch (error) {
    console.error('❌ Error generating posts.json:', error.message);
}
