<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-sm-8">
              <div class="card-title">Add Department</div>
            </div>
            <div class="col-sm-4">
              <div class="float-md-right">
                <router-link to="/department-list" class="nav-link"
                  >List</router-link
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="submit-form">
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

              <button @click="saveDepartment" class="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
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
