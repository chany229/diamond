// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.



import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import Vue from 'vue/dist/vue.js';
import TurbolinksAdapter from 'vue-turbolinks';

import SessionForm from '../sessions/form';
import AdminMain from '../admin/admin';
import Flash from '../flash';
import '../axios_config';

Rails.start()
Turbolinks.start()
ActiveStorage.start()


Vue.use(TurbolinksAdapter);

document.addEventListener('turbolinks:load', () => {
  Flash.show();

  let apps = [
    { elem: '#admin-main', object: AdminMain },
    { elem: '#session-form', object: SessionForm }
  ];

  let props = window.jsProps || {};
  apps.forEach((app) => {
    if($(app.elem).length) {
      if(app.object.render) {
        new Vue({ el: app.elem, render: h => h(app.object, { props }) });
      }
      else {
        new Vue(app.object).$mount(app.elem);
      }
    }
  });
});
