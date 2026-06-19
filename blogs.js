// ── BLOGS.JS — Single source of truth for all blog posts
// Managed by admin.html — do not edit content manually unless you know what you're doing.

var BLOG_POSTS = [
  {
    slug: "get-started",
    title: "Get Started",
    date: "23 March 2026",
    categories: ["happiness","life"],
    excerpt: "The message I want to share with you today is \u201cGET STARTED\u201d.",
    thumb: "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/start2.jpg/:/rs=w:200",
    hero: "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/start2.jpg/:/rs=w:1280",
    content: "<p>The message I want to share with you today is <strong>\u201cGET STARTED\u201d</strong>.</p>\n<p>You don\u2019t need to have a perfect plan.<br>You don\u2019t need to know all the answers.</p>\n<p>You just need momentum. You just need to <strong>start</strong>.</p>\n<p>Most people stay stuck planning, overthinking, collecting information and waiting for the \u201cright time\u201d and trust me there is no better \u201cright time\u201d than NOW. You can read hundreds of articles, watch endless videos, and make the best plans\u2026But the simple truth is:</p>\n<p>The book you want to write won\u2019t write itself.<br>The weight you want to lose won\u2019t lose itself. Nothing moves until you do and nothing changes until you take the first step.</p>\n<p>Clarity doesn\u2019t come before action. It comes <strong>because of it</strong>.</p>\n<p>Start messy. Start unsure.<br>But, start anyway and make the rest of your life to be the best of your life.</p>"
  },
  {
    slug: "the-two-seeds",
    title: "The Two Seeds",
    date: "23 March 2026",
    categories: ["life"],
    excerpt: "Two seeds lay side by side in the soil.",
    thumb: "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/Two%20Seeds.webp/:/rs=w:200",
    hero: "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/Two%20Seeds.webp/:/rs=w:1280",
    content: "<p>Two seeds lay side by side in the soil.</p>\n<p>The first seed said,<br>\u201cI will grow. I will push my roots deep into the earth and reach for the sun.\u201d</p>\n<p>The second seed said,<br>\u201cWhat if the soil is hard? What if the sun burns me?\u201d</p>\n<p>So it waited.</p>\n<p>Spring arrived.<br>The first seed became a flower. The second seed was eaten by a bird.</p>\n<p>Fear doesn\u2019t just delay dreams. It destroys them.</p>\n<p>We often believe we\u2019re being \u201csafe\u201d when we wait.<br>But life doesn\u2019t reward hesitation. The difference between a life that blossoms and one that disappears quietly is often just one decision: To grow despite the fear.</p>\n<p>There\u2019s a quote I\u2019ve fallen in love with \u201cThe magic you\u2019re looking for is in the work you are avoiding.\u201d</p>\n<p>So, face your fears and make the rest of your life to be the best of your life.</p>"
  }
];

// ── Helpers ──

function getPostBySlug(slug) {
  return BLOG_POSTS.find(function(p) { return p.slug === slug; }) || null;
}

function getCategoryLabel(cats) {
  return cats.map(function(c) {
    return c.charAt(0).toUpperCase() + c.slice(1);
  }).join(', ');
}

function renderBlogCards(container, posts) {
  container.innerHTML = posts.map(function(post) {
    return '<a href="blog-post.html?slug=' + post.slug + '" class="blog-card" data-categories="' + post.categories.join(' ') + '">'
      + '<div class="blog-card-img" style="background-image:url(\'' + post.thumb + '\');"></div>'
      + '<div class="blog-card-body">'
      +   '<div class="blog-meta"><span>' + post.date + '</span><span class="pipe">|</span><span>' + getCategoryLabel(post.categories) + '</span></div>'
      +   '<h4>' + post.title + '</h4>'
      +   '<p>' + post.excerpt + '</p>'
      +   '<span class="cont-reading">Continue Reading</span>'
      + '</div>'
      + '</a>';
  }).join('');
}

function renderBlogRows(container, posts) {
  var html = '';
  posts.forEach(function(post, i) {
    if (i > 0) html += '<hr class="blog-post-divider">';
    html += '<a href="blog-post.html?slug=' + post.slug + '" class="blog-post" data-cats="' + post.categories.join(' ') + '">'
      + '<div class="blog-post-row">'
      +   '<div class="blog-thumb" style="background-image:url(\'' + post.thumb + '\');"></div>'
      +   '<div class="blog-post-text">'
      +     '<div class="blog-post-meta"><span>' + post.date + '</span><span class="pipe">|</span><span>' + getCategoryLabel(post.categories) + '</span></div>'
      +     '<h4>' + post.title + '</h4>'
      +     '<p>' + post.excerpt + '</p>'
      +     '<span class="cont-reading">Continue Reading</span>'
      +   '</div>'
      + '</div>'
      + '</a>';
  });
  container.innerHTML = html;
}

function renderRecentPosts(container, currentSlug) {
  var recent = BLOG_POSTS.filter(function(p) { return p.slug !== currentSlug; }).slice(0, 5);
  container.innerHTML = recent.map(function(post) {
    return '<a href="blog-post.html?slug=' + post.slug + '" class="recent-post">'
      + '<div class="recent-post-thumb" style="background-image:url(\'' + post.thumb + '\');"></div>'
      + '<div class="recent-post-info"><p class="recent-post-title">' + post.title + '</p><p class="recent-post-date">' + post.date + '</p></div>'
      + '</a>';
  }).join('');
}
