(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{14:function(e,t,s){},15:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(8),o=s.n(l),n=(s(14),s(15),s(4)),i=s(5),d=s(2),r=s(7),m=s(6),u=s(0),j=function(e){Object(r.a)(s,e);var t=Object(m.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).toggleButton=e.toggleButton.bind(Object(d.a)(e)),e.removeAnimation=e.removeAnimation.bind(Object(d.a)(e)),e}return Object(i.a)(s,[{key:"toggleButton",value:function(){document.getElementsByClassName("code-logo")[0].classList.contains("animate-code-logo")?(document.getElementsByClassName("code-logo")[0].classList.add("hide-code-logo"),document.getElementsByClassName("code-logo")[0].classList.remove("animate-code-logo")):(document.getElementsByClassName("code-logo")[0].classList.add("animate-code-logo"),document.getElementsByClassName("code-logo")[0].classList.remove("hide-code-logo")),document.getElementsByClassName("dev-logo")[0].classList.contains("animate-dev-logo")?(document.getElementsByClassName("dev-logo")[0].classList.add("hide-dev-logo"),document.getElementsByClassName("dev-logo")[0].classList.remove("animate-dev-logo")):(document.getElementsByClassName("dev-logo")[0].classList.add("animate-dev-logo"),document.getElementsByClassName("dev-logo")[0].classList.remove("hide-dev-logo"))}},{key:"removeAnimation",value:function(){document.getElementsByClassName("code-logo")[0].classList.add("hide-code-logo"),document.getElementsByClassName("code-logo")[0].classList.remove("animate-code-logo"),document.getElementsByClassName("dev-logo")[0].classList.add("hide-dev-logo"),document.getElementsByClassName("dev-logo")[0].classList.remove("animate-dev-logo")}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"code-logo",children:Object(u.jsx)("i",{className:"fas fa-code fa-2x btn",onClick:this.removeAnimation,"data-bs-toggle":"modal","data-bs-target":"#infoModal"})}),Object(u.jsx)("div",{className:"dev-logo",children:Object(u.jsx)("a",{href:"https://vickygupta-5a6e.hostman.site/",target:"_blank",children:Object(u.jsx)("i",{className:"fas fa-user-circle fa-2x btn",onClick:this.removeAnimation})})}),Object(u.jsx)("i",{className:"fas fa-info-circle fa-2x",type:"button",onClick:this.toggleButton}),Object(u.jsx)("div",{className:"modal fade",id:"infoModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(u.jsx)("div",{className:"modal-dialog modal-dialog-centered",children:Object(u.jsxs)("div",{className:"modal-content",children:[Object(u.jsxs)("div",{className:"modal-header",children:[Object(u.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Project Info"}),Object(u.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(u.jsx)("div",{className:"modal-body",children:Object(u.jsx)("table",{className:"table table-hover table-bordered",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Name"}),Object(u.jsx)("th",{colspan:"2",children:"ToDo App"})]}),Object(u.jsx)("tr",{children:Object(u.jsx)("td",{rowspan:"5",className:"align-middle",children:"Technology / Sources"})}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"React JS"}),Object(u.jsx)("th",{children:"React-Toastify"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"HTML5"}),Object(u.jsx)("th",{children:"CSS3"})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Bootstrap"}),Object(u.jsx)("th",{children:"JavaScript"})]}),Object(u.jsx)("tr",{className:"text-center",children:Object(u.jsx)("th",{colspan:"2",children:"Font Awesome"})})]})})})]})})})]})}}]),s}(a.Component),b=function(e){Object(r.a)(s,e);var t=Object(m.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={darkmode:!1},e.enableDarkMode=e.enableDarkMode.bind(Object(d.a)(e)),e}return Object(i.a)(s,[{key:"enableDarkMode",value:function(){this.setState((function(e){return{darkmode:!e.darkmode}}),(function(){document.getElementById("htmlTag").classList.toggle("darkMode"),document.getElementsByClassName("mode")[0].classList.add("animate-mode"),setTimeout((function(){document.getElementsByClassName("mode")[0].classList.remove("animate-mode")}),500)}))}},{key:"render",value:function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("i",{type:"button",className:this.state.darkmode?"fas fa-sun fa-2x mode":"fas fa-moon fa-2x mode",onClick:this.enableDarkMode})})}}]),s}(a.Component),h=s(3);s(17),s(18);function g(e){var t,s=localStorage.getItem("todoTasks");if(null!=s)return t=JSON.parse(s),Object(u.jsx)(u.Fragment,{children:t.map((function(t,s){return Object(u.jsxs)("div",{className:"row tasksRow",children:[Object(u.jsx)("div",{className:"col-1",children:s+1}),Object(u.jsx)("div",{className:t.complete_status?"col-8 taskDone":"col-8",children:t.task_name}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:t.complete_status?"fas fa-undo":"fas fa-check",onClick:function(){t.complete_status?e.markAsIncomplete(s):e.markAsComplete(s)},type:"button"})}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:t.complete_status?"":e.editing&&s===e.editTaskID?"far fa-window-close":"fas fa-edit",type:"button",onClick:function(){return e.editing&&s===e.editTaskID?e.cancelEditing():e.editTask(s)}})}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:"fas fa-trash-alt",type:"button",onClick:function(){return e.deleteTask(s)}})})]},s)}))})}function k(e){var t,s=localStorage.getItem("todoTasks");if(null!=s){t=JSON.parse(s);var a=0;return t.map((function(e){!0===e.complete_status&&a++})),a>0?Object(u.jsx)(u.Fragment,{children:t.map((function(t,s){return!0===t.complete_status?Object(u.jsxs)("div",{className:"row tasksRow",children:[Object(u.jsx)("div",{className:"col-1",children:s+1}),Object(u.jsx)("div",{className:"col-8",children:t.task_name}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:"fas fa-undo",onClick:function(){e.markAsIncomplete(s)},type:"button"})}),Object(u.jsx)("div",{className:"col-1"}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:"fas fa-trash-alt",type:"button",onClick:function(){return e.deleteTask(s)}})})]},s):Object(u.jsx)(u.Fragment,{})}))}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h5",{children:"No Complete Tasks"})})}}function p(e){var t,s=localStorage.getItem("todoTasks");if(null!=s){t=JSON.parse(s);var a=0;return t.map((function(e){!1===e.complete_status&&a++})),a>0?Object(u.jsx)(u.Fragment,{children:t.map((function(t,s){return!1===t.complete_status?Object(u.jsxs)("div",{className:"row tasksRow",children:[Object(u.jsx)("div",{className:"col-1",children:s+1}),Object(u.jsx)("div",{className:"col-8",children:t.task_name}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:"fas fa-check",onClick:function(){e.markAsComplete(s)},type:"button"})}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:t.complete_status?"":e.editing&&s===e.editTaskID?"far fa-window-close":"fas fa-edit",type:"button",onClick:function(){return e.editing&&s===e.editTaskID?e.cancelEditing():e.editTask(s)}})}),Object(u.jsx)("div",{className:"col-1",children:Object(u.jsx)("i",{className:"fas fa-trash-alt",type:"button",onClick:function(){return e.deleteTask(s)}})})]},s):Object(u.jsx)(u.Fragment,{})}))}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("h5",{children:"No Incomplete Tasks"})})}}h.a.configure();var O=function(e){Object(r.a)(s,e);var t=Object(m.a)(s);function s(){var e;return Object(n.a)(this,s),(e=t.call(this)).state={inputTask:"",editing:!1,editTaskID:"",ddmode:"all"},e.addTask=e.addTask.bind(Object(d.a)(e)),e.updateInputTask=e.updateInputTask.bind(Object(d.a)(e)),e.deleteAllTasks=e.deleteAllTasks.bind(Object(d.a)(e)),e.markAsComplete=e.markAsComplete.bind(Object(d.a)(e)),e.editTask=e.editTask.bind(Object(d.a)(e)),e.markAsIncomplete=e.markAsIncomplete.bind(Object(d.a)(e)),e.updateTask=e.updateTask.bind(Object(d.a)(e)),e.cancelEditing=e.cancelEditing.bind(Object(d.a)(e)),e.deleteTask=e.deleteTask.bind(Object(d.a)(e)),e.selectValue=e.selectValue.bind(Object(d.a)(e)),e}return Object(i.a)(s,[{key:"addTask",value:function(){if(0===this.state.inputTask.length||0==this.state.inputTask.trim())h.a.error("Task cannot be empty",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});else{var e,t=localStorage.getItem("todoTasks");(e=null==t?[]:JSON.parse(t)).push({task_name:this.state.inputTask,complete_status:!1}),document.getElementsByClassName("inputTask")[0].focus(),localStorage.setItem("todoTasks",JSON.stringify(e)),this.setState({inputTask:""},(function(){h.a.success("Task added successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}}},{key:"updateInputTask",value:function(e){e.target.value.length>50?h.a.warn("Input length exceeded",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):this.setState({inputTask:e.target.value})}},{key:"deleteAllTasks",value:function(){null!=localStorage.getItem("todoTasks")&&(localStorage.removeItem("todoTasks"),this.setState(this.state),document.getElementsByClassName("inputTask")[0].focus())}},{key:"markAsComplete",value:function(e){var t,s=this,a=localStorage.getItem("todoTasks");null!==a&&(t=JSON.parse(a)).forEach((function(a,c){c===e&&(a.complete_status=!0,localStorage.setItem("todoTasks",JSON.stringify(t)),s.setState(s.state))}))}},{key:"markAsIncomplete",value:function(e){var t,s=this,a=localStorage.getItem("todoTasks");null!==a&&(t=JSON.parse(a)).forEach((function(a,c){if(c===e)return a.complete_status=!1,localStorage.setItem("todoTasks",JSON.stringify(t)),void s.setState(s.state)}))}},{key:"cancelEditing",value:function(){this.setState({inputTask:"",editing:!1,editTaskID:""}),document.getElementsByClassName("inputTask")[0].focus()}},{key:"editTask",value:function(e){var t=this,s=localStorage.getItem("todoTasks");null!==s&&JSON.parse(s).forEach((function(s,a){if(a===e)return t.setState({inputTask:s.task_name,editing:!0,editTaskID:e}),void document.getElementsByClassName("inputTask")[0].focus()}))}},{key:"updateTask",value:function(){var e=this;if(0===this.state.inputTask.length||0==this.state.inputTask.trim())h.a.error("Task cannot be empty",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),document.getElementsByClassName("inputTask")[0].focus();else{var t,s=localStorage.getItem("todoTasks");null!==s&&(t=JSON.parse(s)).forEach((function(s,a){if(a===e.state.editTaskID)return s.task_name=e.state.inputTask,localStorage.setItem("todoTasks",JSON.stringify(t)),e.setState({inputTask:"",editing:!1,editTaskID:""},(function(){h.a.success("Task updated successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})),void document.getElementsByClassName("inputTask")[0].focus()}))}}},{key:"deleteTask",value:function(e){var t=localStorage.getItem("todoTasks"),s=JSON.parse(t);s.length>1?(s.splice(e,1),localStorage.setItem("todoTasks",JSON.stringify(s))):localStorage.removeItem("todoTasks"),h.a.success("Task deleted successfully",{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),this.setState(this.state)}},{key:"selectValue",value:function(e){this.setState({ddmode:e.target.value})}},{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"ToDo App"}),Object(u.jsxs)("div",{className:"inputWrapper",children:[Object(u.jsx)("input",{className:"inputTask",placeholder:"Enter your task.",onChange:this.updateInputTask,value:this.state.inputTask,autoFocus:!0}),Object(u.jsx)("i",{type:"button",className:this.state.editing?"fas fa-save":"fas fa-plus-circle",onClick:this.state.editing?this.updateTask:this.addTask})]}),Object(u.jsx)("div",{className:"tasksList",children:null===localStorage.getItem("todoTasks")?Object(u.jsxs)("h5",{children:["No tasks yet. Time to chill! ",Object(u.jsx)("i",{className:"far fa-smile-beam"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"row text-center",children:[Object(u.jsxs)("div",{className:"col-6",children:[Object(u.jsx)("label",{children:"Filter by\xa0\xa0"}),Object(u.jsxs)("select",{onChange:this.selectValue,children:[Object(u.jsx)("option",{value:"all",children:"All"}),Object(u.jsx)("option",{value:"complete",children:"Complete"}),Object(u.jsx)("option",{value:"incomplete",children:"Incomplete"})]})]}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("i",{className:"fas fa-dumpster",type:"button",onClick:this.deleteAllTasks,children:"\xa0Delete All"})})]}),Object(u.jsx)("br",{}),"complete"===this.state.ddmode?Object(u.jsx)(k,{markAsIncomplete:this.markAsIncomplete,editTask:this.editTask,cancelEditing:this.cancelEditing,editTaskID:this.state.editTaskID,deleteTask:this.deleteTask}):"incomplete"===this.state.ddmode?Object(u.jsx)(p,{markAsIncomplete:this.markAsIncomplete,markAsComplete:this.markAsComplete,editTask:this.editTask,editing:this.state.editing,cancelEditing:this.cancelEditing,editTaskID:this.state.editTaskID,deleteTask:this.deleteTask}):Object(u.jsx)(g,{markAsIncomplete:this.markAsIncomplete,markAsComplete:this.markAsComplete,editTask:this.editTask,editing:this.state.editing,cancelEditing:this.cancelEditing,editTaskID:this.state.editTaskID,deleteTask:this.deleteTask})]})})]})}}]),s}(a.Component);var f=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(b,{}),Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)(O,{})}),Object(u.jsx)(j,{})]})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,o=t.getTTFB;s(e),a(e),c(e),l(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),v()}},[[19,1,2]]]);
//# sourceMappingURL=main.f1b84cea.chunk.js.map