<template>
  <div class="list row">
    <div class="col-md-8">
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
    <div class="col-md-6">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/add-department" class="nav-link">Add</router-link>
        </li>
      </div>

      <h4>Student List</h4>
      <table class="styled-table">
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Subject</th>
        </tr>
        <tr v-for="student in students" v-bind:key="student._id">
          <td>{{ student.studentName }}</td>
          <td>{{ student.departmentName }}</td>
          <td>{{ student.subjectName }}</td>
          <button
            class="badge badge-warning"
            @click="deleteStudent(student._id, student.studentName)"
          >
            Delete
          </button>
        </tr>
      </table>
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
