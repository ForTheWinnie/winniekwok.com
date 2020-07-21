<template>
  <div>
    <div class="page-header clear-filter" filter-color="gray">
      <parallax
        class="page-header-image"
        style="background-image:url('img/bridge_1900x1267.jpg')"
      >
      </parallax>
      <div class="container">
        <div class="content-center brand">
          <h1>Hi, I'm Winnie.</h1>
          <h2>Software Engineering Manager</h2>
          <h3>CSS3, LESS/SASS, HTML, JS/JQuery, Node.js, Vue.js, PHP, SQL/MySQL, WordPress</h3>
          <a class="nav-link" href="pdf/KwokWinnie_Resume.pdf" target="_blank"><button class="btn btn-primary btn-round" type="button"><strong>Check out my resume</strong> &nbsp;<i class="fa fa-star"></i></button></a>
        </div>
      </div>
    </div>
    
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-10">
            <img src="img/me_225x225.jpg" width="150px" alt="Winnie Kwok" /><br><br>
            <p>I have been developing in HTML/CSS since 1998 and started back-end development in 2006. I enjoy developing responsive front-end applications built on top of back-end stacks. I have a diverse background that includes UX, SEO, A/B Testing, and architecture. I prefer working in deadline-driven environments where I can manage a variety of projects. I am also a stickler for documentation and have been called the "Queen of Documentation".</p>
            <p>This website is developed in Vue.js &amp; Bootstrap 4.</p>
          </div>
        </div>
      </div>
    </div>
    
    <portfolio></portfolio>
    <!-- <download-section></download-section> -->
      
    
    
    
    
  </div>
</template>
<script>
import { Parallax } from '@/components';
import portfolio from './components/portfolio';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    Parallax,
    portfolio
  }
};
</script>
<style></style>
