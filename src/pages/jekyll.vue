<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 ml-auto mr-auto">
            <h1>Adding data on microsites via Jekyll &amp; .getJSON</h1>
            <p>If your site uses Jekyll front-matter and you need to dynamically add data/content on another microsite (in this case, hrelang tags to improve SEO), one way to approach it would be to generate a JSON object (format shown below) based on the Jekyll front-matter on each page.</p>
            <p>Then, use .getJSON to request the data (within the same domain) and add the hreflang tags between the head tags.</p>
            <p>This <a href="https://learn.cloudcannon.com/jekyll-cheat-sheet/" target="_blank">cheat sheet</a> was an amazing resource!</p>
            <h2>Jekyll Loop &amp; JSON Output</h2>
            <script type="application/javascript" async src="//jsfiddle.net/ForTheWin808/586bn3sh/9/embed/html/dark/"></script>
            
            <h2>Request the Data (JavaScript)</h2>
            <script type="application/javascript" async src="//jsfiddle.net/ForTheWin808/586bn3sh/5/embed/js/dark/"></script>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jekyll',
  bodyClass: 'landing-page'
};
</script>
<style></style>
