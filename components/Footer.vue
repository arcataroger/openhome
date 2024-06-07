<script setup></script>

<template>
  <footer class="main section-wrapper bgtexture gridlines np-bot dk">
    <Gridlines bot="true" pad="pad" />
    <div class="content-wrapper p-max">
      <div class="footer-contents grid two-col">
        <div class="col lt pb-65">
          <div class="txt-grp">
            <div class="size-box">
              <div class="logo-main wide">
                <img src="~/assets/img/logo-wide.svg" alt="open home" />
              </div>
            </div>
            <h2>Your Own AI <br />Smart Speaker</h2>
            <div class="cta-group mt-65">
              <CtaBtn href="#" arrow="true">developers</CtaBtn>
              <CtaBtn href="#" arrow="true">investors</CtaBtn>
            </div>
          </div>
        </div>
        <div class="col social a-rt rt">
          <div class="size-box"></div>
          <SocialLinks />
        </div>
      </div>
      <div class="legal flex-jst">
        <p>All rights reserved to OpenHome. Copyright © 2024.</p>
        <div class="col credit a-rt">
          <p>Design: <a href="#" target="_blank">Griflan</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-contents {
  grid-template-columns: 76.5% 23.5%;
  .cta-group {
    gap: 50px;
    justify-content: start;
    .cta-btn {
      width: 100%;
      max-width: 312px;
      + .cta-btn {
        margin-left: 50px;
      }
    }
  }
  .col.lt .txt-grp {
    max-width: 730px;
  }
  .size-box {
    height: 150px;
  }
  .logo-main {
    padding-top: 45px;
  }
}
.col.social,
.col.credit {
  padding: 0 40px;
  align-content: start;
  ul,
  p {
    width: 100%;
    max-width: 230px;
  }
}
.legal {
  height: var(--grid-margin);
  font-size: 13px;
  opacity: 0.4;
  .credit {
    width: 23.5%;
  }
}
</style>
