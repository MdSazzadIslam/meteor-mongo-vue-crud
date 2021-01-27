<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter department name for searching"
          v-model="subjectName"
          name="departmentName"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="getDepartmentById"
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

      <h4>Department List</h4>

      <table class="styled-table">
        <tr>
          <th>Department</th>
          <th>Subject</th>
          <th>delete</th>
        </tr>
        <tr v-for="department in departments" v-bind:key="department._id">
          <td>{{ department.departmentName }}</td>
          <td>{{ department.subjectName }}</td>

          <button
            class="badge badge-warning"
            @click="
              deleteDepartment(
                department._id,
                department.subjectName,
                department.departmentName
              )
            "
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
import { Departments } from "../../imports/api/collection";

export default {
  name: "subject-list",

  data() {
    return {
      departmentList: [],
      _id: "",
    };
  },

  methods: {
    getDepartmentById() {
      Meteor.call("getSubjectById", this.departmentName, (error, result) => {
        if (error) {
          console.log("Something went wrong!!!", error);
        } else {
          this.subjects = result.data;
        }
      });
    },

    deleteDepartment(id, sName, dName) {
      const bool = confirm(
        `Are you sure that you want to remove this subject ${sName} from this ${dName} ?`
      );
      if (!bool) {
        return;
      }

      Meteor.call("deleteDepartment", id, (error, result) => {
        if (error) {
          console.log("Something went wrong!!!", error);
        } else {
          console.log(result);
        }
      });
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
