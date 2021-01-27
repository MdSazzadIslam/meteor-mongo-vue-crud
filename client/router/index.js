import Vue from "vue";
import VueRouter from "vue-router";

import AddStudent from "../views/AddStudent.vue";

import StudentList from "../views/StudentList.vue";
import UpdateStudent from "../views/UpdateStudent.vue";

import AddSubject from "../views/AddSubject";
import SubjectList from "../views/SubjectList";

import AddDepartment from "../views/AddDepartment";
import DepartmentList from "../views/DepartmentList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/student-list",
    name: "student-list",
    component: StudentList,
  },

  {
    path: "/add-student",
    name: "add-student",
    component: AddStudent,
  },

  {
    path: "/update-student",
    name: "update-student",
    component: UpdateStudent,
  },

  {
    path: "/add-subject",
    name: "add-subject",
    component: AddSubject,
  },
  {
    path: "/subject-list",
    name: "subject-list",
    component: SubjectList,
  },

  {
    path: "/add-department",
    name: "add-department",
    component: AddDepartment,
  },

  {
    path: "/department-list",
    name: "department-list",
    component: DepartmentList,
  },
];
const router = new VueRouter({
  routes,
});
export default router;
