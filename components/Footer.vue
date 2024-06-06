<script setup></script>

<template>
  <footer class="main section-wrapper bgtexture gridlines dk">
    <Gridlines bot="true" />

    <div class="footer-contents grid two-col" style="min-height: 400px">
      <div class="col pad lt">
        <div class="logo-main"><IconLogo /></div>
        <h2 class="mt-65">Your Own AI <br />Smart Speaker</h2>
        <div class="cta-group grid two-col gap mt-65">
          <CtaBtn href="#" arrow="true">developers</CtaBtn>
          <CtaBtn href="#" arrow="true">investors</CtaBtn>
        </div>
      </div>
      <div class="col pad rt">
        <div class="txt-grp mx-600">
          <p>
            With OpenHome, create organic voice AI experiences with instant
            response times, emotional recognition, conversation paths, and
            opinions of their own. With OpenHome, create organic voice AI
            experiences with instant response times, emotional recognition,
            conversation paths, and opinions of their own.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-contents {
  grid-template-columns: 74% 26%;
}
</style>
