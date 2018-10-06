<template>
  <container>
    <container>
      <!--Navbar-->
      <navbar dark position="top" color="primary" scrolling>
        <!-- Navbar brand -->
        <!-- <mdb-navbar-brand href="https://mdbootstrap.com/">
          <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="">
        </mdb-navbar-brand> -->
        <mdb-navbar-brand href="#">
          SmartOne
        </mdb-navbar-brand>
        <navbar-collapse>
          <navbar-nav right>
            <navbar-item href="#" waves-fixed>Home</navbar-item>
            <navbar-item href="#" waves-fixed>Faq</navbar-item>
            <navbar-item href="#" waves-fixed>About</navbar-item>
            <!-- Dropdown -->
            <dropdown tag="li" class="nav-item">
              <dropdown-toggle slot="toggle" tag="a" navLink color="primary" waves-fixed>Language</dropdown-toggle>
              <dropdown-menu>
                <dropdown-item>English</dropdown-item>
                <dropdown-item>日本語</dropdown-item>
                <dropdown-item>中国語</dropdown-item>
              </dropdown-menu>
            </dropdown>
          </navbar-nav>
          <!-- Search form -->
          <form>
            <mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed/>
          </form>
        </navbar-collapse>
      </navbar>
      <!--/.Navbar-->
    </container>
  </container>
</template>

<script>
// import { Navbar, NavbarItem, NavbarNav, NavbarCollapse, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, mdbInput, mdbNavbarBrand, Fa, Row } from 'mdbvue';
import Navbar from './common/Navbar'
import NavbarItem from './common/NavbarItem'
import NavbarNav from './common/NavbarNav'
import NavbarCollapse from './common/NavbarCollapse'
import Container from './common/Container'
import Dropdown from './common/Dropdown'
import DropdownItem from './common/DropdownItem'
import DropdownMenu from './common/DropdownMenu'
import DropdownToggle from './common/DropdownToggle'
import mdbInput from './common/Input'
import mdbNavbarBrand from './common/NavbarBrand'
import Fa from './common/Fa'
import Row from './common/Row'

export default {
  name: 'NavbarPage',
  components: {
    Navbar,
    NavbarItem,
    NavbarNav,
    NavbarCollapse,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    mdbInput,
    mdbNavbarBrand,
    Fa,
    Row
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
