<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-sm-8">
              <div class="card-title">Add Student</div>
            </div>
            <div class="col-sm-4">
              <div class="float-md-right">
                <router-link to="/student-list" class="nav-link"
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
                <label for="studentName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="studentName"
                  required
                  v-model="student.studentName"
                  name="student.studentName"
                />
              </div>

              <div class="form-group">
                <label for="departmentName">Department</label>
                <select class="form-control" v-model="student.departmentName">
                  <option
                    v-for="department in departments"
                    v-bind:key="department._id"
                  >
                    {{ department.departmentName }}
                  </option>
                </select>
              </div>

              <button @click="saveStudent" class="btn btn-success">
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
import { Departments } from "../../imports/api/collection";

export default {
  data() {
    return {
      student: {
        studentName: "",
        departmentName: "",
        loaded: false,
      },
      submitted: false,
    };
  },

  methods: {
    saveStudent() {
      Meteor.call("createStudent", this.student, function (error, result) {
        if (error) {
          console.log(error);
        } else {
          alert("Submitted successfully!");
          console.log(result);
        }
      });
      this.submitted = false;
      this.student = {};
    },
  },
  meteor: {
    departments() {
      console.log(Departments.find({}).fetch());
      return Departments.find({}).fetch();
    },
  },
};
</script>
