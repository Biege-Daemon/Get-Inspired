// BLOGS.JS — managed by admin.html, do not edit manually

var BLOG_POSTS = [
  {
    "slug": "get-started",
    "title": "Get Started",
    "date": "23 March 2026",
    "categories": [
      "happiness",
      "life"
    ],
    "excerpt": "The message I want to share with you today is “GET STARTED”.",
    "thumb": "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/start2.jpg/:/rs=w:200",
    "hero": "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/start2.jpg/:/rs=w:1280",
    "content": "<p>The message I want to share with you today is <strong>“GET STARTED”</strong>.</p>\n<p>You don’t need to have a perfect plan.<br>You don’t need to know all the answers.</p>\n<p>You just need momentum. You just need to <strong>start</strong>.</p>\n<p>Most people stay stuck planning, overthinking, collecting information and waiting for the “right time” and trust me there is no better “right time” than NOW. You can read hundreds of articles, watch endless videos, and make the best plans…But the simple truth is:</p>\n<p>The book you want to write won’t write itself.<br>The weight you want to lose won’t lose itself. Nothing moves until you do and nothing changes until you take the first step.</p>\n<p>Clarity doesn’t come before action. It comes <strong>because of it</strong>.</p>\n<p>Start messy. Start unsure.<br>But, start anyway and make the rest of your life to be the best of your life.</p>"
  },
  {
    "slug": "the-two-seeds",
    "title": "The Two Seeds",
    "date": "23 March 2026",
    "categories": [
      "life"
    ],
    "excerpt": "Two seeds lay side by side in the soil.",
    "thumb": "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/Two%20Seeds.webp/:/rs=w:200",
    "hero": "https://img1.wsimg.com/isteam/ip/eee12f83-05b7-4457-b0a0-54f680d994c4/Two%20Seeds.webp/:/rs=w:1280",
    "content": "<p>Two seeds lay side by side in the soil.</p>\n<p>The first seed said,<br>“I will grow. I will push my roots deep into the earth and reach for the sun.”</p>\n<p>The second seed said,<br>“What if the soil is hard? What if the sun burns me?”</p>\n<p>So it waited.</p>\n<p>Spring arrived.<br>The first seed became a flower. The second seed was eaten by a bird.</p>\n<p>Fear doesn’t just delay dreams. It destroys them.</p>\n<p>We often believe we’re being “safe” when we wait.<br>But life doesn’t reward hesitation. The difference between a life that blossoms and one that disappears quietly is often just one decision: To grow despite the fear.</p>\n<p>There’s a quote I’ve fallen in love with “The magic you’re looking for is in the work you are avoiding.”</p>\n<p>So, face your fears and make the rest of your life to be the best of your life.</p>"
  }
];

function getPostBySlug(slug){
  return BLOG_POSTS.find(function(p){return p.slug===slug;})||null;
}
function getCategoryLabel(cats){
  return cats.map(function(c){return c.charAt(0).toUpperCase()+c.slice(1);}).join(', ');
}
function renderBlogCards(container,posts){
  container.innerHTML=posts.map(function(post){
    return '<a href="blog-post.html?slug='+post.slug+'" class="blog-card" data-categories="'+post.categories.join(' ')+'">'
      +'<div class="blog-card-img" style="background-image:url(\''+post.thumb+'\');"></div>'
      +'<div class="blog-card-body">'
      +'<div class="blog-meta"><span>'+post.date+'</span><span class="pipe">|</span><span>'+getCategoryLabel(post.categories)+'</span></div>'
      +'<h4>'+post.title+'</h4>'
      +'<p>'+post.excerpt+'</p>'
      +'<span class="cont-reading">Continue Reading</span>'
      +'</div></a>';
  }).join('');
}
function renderBlogRows(container,posts){
  var html='';
  posts.forEach(function(post,i){
    if(i>0)html+='<hr class="blog-post-divider">';
    html+='<a href="blog-post.html?slug='+post.slug+'" class="blog-post" data-cats="'+post.categories.join(' ')+'">'
      +'<div class="blog-post-row">'
      +'<div class="blog-thumb" style="background-image:url(\''+post.thumb+'\');"></div>'
      +'<div class="blog-post-text">'
      +'<div class="blog-post-meta"><span>'+post.date+'</span><span class="pipe">|</span><span>'+getCategoryLabel(post.categories)+'</span></div>'
      +'<h4>'+post.title+'</h4>'
      +'<p>'+post.excerpt+'</p>'
      +'<span class="cont-reading">Continue Reading</span>'
      +'</div></div></a>';
  });
  container.innerHTML=html;
}
function renderRecentPosts(container,currentSlug){
  var recent=BLOG_POSTS.filter(function(p){return p.slug!==currentSlug;}).slice(0,5);
  container.innerHTML=recent.map(function(post){
    return '<a href="blog-post.html?slug='+post.slug+'" class="recent-post">'
      +'<div class="recent-post-thumb" style="background-image:url(\''+post.thumb+'\');"></div>'
      +'<div class="recent-post-info"><p class="recent-post-title">'+post.title+'</p><p class="recent-post-date">'+post.date+'</p></div>'
      +'</a>';
  }).join('');
}
