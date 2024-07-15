# Modules
HTML modules using the following structure
- template
- script

```html
<!-- template -->
<!-- template -->
<template>
<section class="bsb-hero-2 px-3">
<div class="container overflow-hidden">
<div class="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
<div id="footer" class="col-12 col-lg-6 order-1 order-lg-0">
  this is footer
</div>
</div>
</div>
</section>
</template>

<!-- script -->
<script>
  import getMessage from './libraries/mjs/test.mjs';
  let foot = document.getElementById("footer");
  foot.innerHTML = getMessage("this is footer")
  console.log('mjs loaded and execute from footer.html')
</script>

<!-- style -->
<style></style>
```