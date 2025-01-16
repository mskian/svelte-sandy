<script>

    import sanitizeHtml from 'sanitize-html';

    export let data;
    import BlogPost from '../../../lib/components/BlogPost.svelte';
    import { marked } from 'marked';

    let contentHtml = sanitizeHtml(marked.parse(data?.post?.content || ''));

</script>

<BlogPost title={data?.post?.metadata?.title} date={data?.post?.metadata?.date}>
    {@html contentHtml}
</BlogPost>
