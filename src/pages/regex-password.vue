<template>
  <div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12 ml-auto mr-auto">
            <h1>Client-side Password Validation w/ Regex &amp; .validator.addMethod</h1>
            <p>I've been using jQuery.validate for over 10 years and its .validator.addMethod comes in handy when you want to add more advanced functionality involving RegEx. The documentation can be a bit sparse, so I wanted to show my approach used for client-side password comparison validation. I've also added a console.log so you can easily verify the characters entered in the input field.</p>
            
            <script type="application/javascript" async src="//jsfiddle.net/ForTheWin808/031q9t4z/31/embed/"></script>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'regex',
  bodyClass: 'landing-page'
};
</script>
<style></style>
