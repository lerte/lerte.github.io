<template>
  <div class="container">
    <div class="content has-text-centered">
      <p>&copy; Copyright {{currentYear}} Lerte All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: ()=> ({
      isActive: false,
      currentYear: new Date().getFullYear()
    })
  }
</script>
