<script setup>
import { useWindowSize } from '@vueuse/core';
const { width, height } = useWindowSize();
</script>

<template>
  <footer
    class="main section-wrapper bgtexture gridlines np-bot dk"
    :class="width <= 900 && 'stack'"
  >
    <Gridlines bot="true" pad="pad" />
    <div class="content-wrapper" :class="width > 900 && 'p-max'">
      <div class="footer-row grid two-col logo">
        <div class="col lt" :class="width > 900 && 'pt-65'">
          <div class="logo-main wide">
            <IconLogoWide />
          </div>
        </div>
        <div class="col rt" v-if="width > 900"></div>
      </div>

      <div class="footer-row grid two-col">
        <div class="col lt">
          <Headline>Your Own AI <br />Smart Speaker</Headline>
        </div>

        <div class="col social rt" v-if="width > 900">
          <SocialLinks />
        </div>
        <div class="col social rt" v-else>
          <div class="cta-group">
            <CtaBtn href="#" arrow="true">developers</CtaBtn>
            <CtaBtn href="#" arrow="true">investors</CtaBtn>
          </div>
        </div>
      </div>

      <div class="cta footer-row grid two-col">
        <div class="col lt pb-65" v-if="width > 900">
          <div class="cta-group">
            <CtaBtn href="#" arrow="true">developers</CtaBtn>
            <CtaBtn href="#" arrow="true">investors</CtaBtn>
          </div>
        </div>
        <div class="col social lt" v-else>
          <SocialLinks />
        </div>

        <div class="col social rt">
          <ul>
            <li><CtaBtn href="#" arrow="true">Contact</CtaBtn></li>
          </ul>
        </div>
      </div>

      <div class="legal footer-row grid two-col">
        <div class="col lt">
          <p>
            All rights reserved to OpenHome.
            <span class="cr">Copyright © 2024.</span>
          </p>
        </div>
        <div class="col credit rt">
          <span class="txt">Design: </span
          ><a href="https://griflan.com" target="_blank">Griflan</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-row {
  grid-template-columns: 76.5% 23.5%;
  .logo-main {
    top: 0;
    margin-bottom: 45px;
  }
  .cta-group {
    /* margin-top: 2.5rem; */
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
    padding-right: var(--side-marginM);
    .txt-grp {
      max-width: 730px;
    }
  }
  ul {
    list-style: none;
  }
  &.cta {
    .col {
      padding-top: 40px;
    }
    .col.social a {
      width: 100%;
      max-width: 225px;
    }
  }
}
.col.social,
.col.credit {
  padding-left: 50px;
  align-content: start;
  ul,
  p {
    width: 100%;
    max-width: 260px;
    margin: auto;
  }
}
.legal {
  height: var(--grid-margin);
  align-items: center;
  .col + .col {
    border: none;
  }
  p,
  .txt,
  a {
    font-size: 13px;
    opacity: 0.4;
  }
  a:hover {
    opacity: 1;
  }
}
@media (max-width: 1400px) {
  .footer-row {
    grid-template-columns: 1fr 250px;
  }
}
@media (max-width: 1200px) {
  .legal {
    height: var(--grid-marginM);
  }
  .col.social,
  .col.credit {
    padding-left: var(--side-marginM);
  }
  .footer-row {
    .cta-group {
      gap: 20px;
    }
  }
}
@media (max-width: 900px) {
  .footer-row {
    padding: 25px 65px;
    .col + .col {
      border: none;
      margin-top: 25px;
    }
    .col.lt {
      padding-right: 0;
    }
    .col.social,
    .col.credit {
      padding-left: 0;
    }
    &.logo {
      padding-top: 35px;
      padding-bottom: 0;
    }
    .logo-main {
      width: 172px;
      margin-bottom: 5px;
    }
    ul {
      max-width: none !important;
    }
    &.cta {
      border-top: 1px solid var(--dkgray);
      .col {
        padding-top: 0px;
      }
    }
  }
  .legal {
    height: auto;
    padding: 20px 65px;
    border-top: 1px solid var(--dkgray);
    p {
      max-width: none !important;
    }
    .cr {
      display: block;
    }
  }
}
@media (max-width: 768px) {
  .footer-row {
    padding: 15px 33px;
  }
}
@media (max-width: 550px) {
  .footer-row {
    .cta-group {
      grid-template-columns: auto;
      gap: 15px;
    }
    &.cta {
      .col.social a {
        max-width: none;
      }
    }
  }
  .legal {
    .col + .col {
      margin-top: 20px;
    }
  }
}
</style>
<style>
@media (max-width: 900px) {
  footer.main .gridline.bot {
    display: none;
  }
}
</style>
