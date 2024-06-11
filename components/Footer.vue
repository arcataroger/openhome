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
                <IconLogoWide />
              </div>
            </div>
            <h2>Your Own AI <br />Smart Speaker</h2>
            <div class="cta-group">
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
    margin-top: 2.5rem;
    display: grid;
    gap: 3.125rem;
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    max-width: 684px;
    .cta-btn {
      justify-self: stretch;
      + .cta-btn {
        margin-left: 0;
      }
    }
  }
  .col.lt {
    padding-right: 40px;
    .txt-grp {
      max-width: 730px;
    }
  }
  .size-box {
    height: 9.375rem;
  }
  .logo-main {
    padding-top: 2.8125rem;
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
  opacity: 0.4;
  p {
    font-size: 13px;
  }
  .credit {
    width: 23.5%;
  }
}
</style>
