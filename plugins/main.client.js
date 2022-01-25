// Register here all client plugin

// Js Media queries
import tvaMq from './tvaMq.js';
import Vue from 'vue';

Vue.use(tvaMq, {
  mobile: 320,
  tablet: 720,
  desktop: Infinity,
  large: Infinity,
});
