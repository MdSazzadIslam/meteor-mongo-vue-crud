<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-sm-8">
          <div class="card-title">Student List</div>
        </div>
        <div class="col-sm-4">
          <div class="float-md-right">
            <router-link to="/add-student" class="nav-link">Add</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="list row">
        <div class="col-md-12">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Enter id for searching"
              v-model="id"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="getStudentById"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-border table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Subject</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="student in students" v-bind:key="student._id">
                  <td>{{ student.studentName }}</td>
                  <td>{{ student.departmentName }}</td>
                  <td>{{ student.subjectName }}</td>
                  <button
                    class="btn btn-sm btn-danger mt-2"
                    @click="deleteStudent(student._id, student.studentName)"
                  >
                    Delete
                  </button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";
import { Students } from "../../imports/api/collection";

export default {
  name: "student-list",
  data() {
    return {
      studentList: [],
      id: "",
    };
  },

  methods: {
    getStudentById() {
      Meteor.call("getStudentById", this.id, (error, result) => {
        if (error) {
          console.log("Something went wrong!!!", error);
        } else {
          this.students = result.data;
        }
      });
    },

    deleteStudent(id, name) {
      debugger;
      const bool = confirm(`Are you sure that you want to remove ${name} ?`);
      if (!bool) {
        return;
      }

      Meteor.call("deleteStudent", id, (error, result) => {
        if (error) {
          console.log("Something went wrong!!!", error);
        } else {
          console.log(result);
        }
      });
    },
  },
  meteor: {
    students() {
      console.log(Students.find({}).fetch());
      return Students.find({}).fetch();
    },
  },
};
</script>
