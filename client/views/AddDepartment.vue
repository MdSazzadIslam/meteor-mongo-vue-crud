<template>
  <div class="submit-form">
    <h4>Add Department</h4>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/department-list" class="nav-link">List</router-link>
      </li>
    </div>

    <div v-if="!submitted">
      <div class="form-group">
        <label for="departmentName">Name</label>
        <input
          type="text"
          class="form-control"
          id="departmentName"
          v-model="department.departmentName"
          name="subject.departmentName"
        />
      </div>

      <div class="form-group">
        <label for="departmentName">Subject</label>
        <select class="form-control" v-model="department.subjectName">
          <option v-for="subject in subjects" v-bind:key="subject._id">
            {{ subject.subjectName }}
          </option>
        </select>
      </div>

      <button @click="saveDepartment" class="btn btn-success">Submit</button>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { Subjects } from "../../imports/api/collection";

export default {
  name: "add-department",

  data() {
    return {
      department: {
        departmentName: "",
        subjectName: [],
        loaded: false,
      },
      submitted: false,
    };
  },

  methods: {
    saveDepartment() {
      debugger;
      Meteor.call(
        "createDepartment",
        this.department,

        function (error, result) {
          if (error) {
            console.log(error);
          } else {
            alert("Submitted successfully!");
            console.log(result);
          }
        }
      );
      this.submitted = false;
      this.department = {};
    },
  },

  meteor: {
    subjects() {
      console.log(Subjects.find({}).fetch());
      return Subjects.find({}).fetch();
    },
  },
};
</script>
