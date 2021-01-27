<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-sm-8">
          <div class="card-title">Department List</div>
        </div>
        <div class="col-sm-4">
          <div class="float-md-right">
            <router-link to="/add-department" class="nav-link">Add</router-link>
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
        <div class="col-md-12">
          <div class="table-responsive">
            <table class="table table-border table-striped" style="width: 100%">
              <thead class="thead-dark">
                <tr>
                  <th>Department</th>
                  <th>Subject</th>
                  <th style="width: 150px">Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="department in departments"
                  v-bind:key="department._id"
                >
                  <td>{{ department.departmentName }}</td>
                  <td>{{ department.subjectName }}</td>

                  <button
                    class="btn btn-danger btn-sm mt-2"
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
