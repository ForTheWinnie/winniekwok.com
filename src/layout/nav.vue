<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
      </el-popover>
    </template>
     <template slot="navbar-menu">
      <li class="nav-item">
        <a
          class="nav-link"
          href="pdf/KwokWinnie_Resume.pdf" target="_blank"
        >
          
          <p><strong>Resume</strong></p>
        </a>
      </li>
      
     
     <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Connect with me on LinkedIn"
          data-placement="bottom"
          href="https://www.linkedin.com/in/winniekwok"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
          <p class="d-lg-none d-xl-none">LinkedIn</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow me on Twitter"
          data-placement="bottom"
          href="https://www.twitter.com/ForTheWin808"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Fork me on GitHub"
          data-placement="bottom"
          href="https://github.com/ForTheWinnie/"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">GitHub</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Email me"
          data-placement="bottom"
          href="mailto:win.kwok@gmail.com"
        >
          <i class="fa fa-envelope"></i> 
          <p class="d-lg-none d-xl-none">&nbsp;&nbsp;Email</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
