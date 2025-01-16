<script>
    export let posts = [];
</script>

{#each posts as post}
<div class="box">
        <div class="content">
            <h2><a class="post-title" href={`/blog/${post.slug}`}>{post.title}</a></h2>
            <p class="date"><small>📅 {post.date}</small></p>
            <p class="description">{post.description}</p>
        </div>
</div>
{/each}

<style>
.content {
       font-family: "Geist Mono", serif;
}
.date {
    color: rgb(54, 10, 32);
}
.post-title {
    color: rgb(114, 12, 114);
}
.description {
    color: #db295e;
}
</style>