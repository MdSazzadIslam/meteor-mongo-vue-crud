<template>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-sm-8">
          <div class="card-title">Subject List</div>
        </div>
        <div class="col-sm-4">
          <div class="float-md-right">
            <router-link to="/add-subject" class="nav-link">Add</router-link>
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
              placeholder="Enter subject name for searching"
              v-model="subjectName"
              name="subjectName"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="getSubjectById"
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
                  <th>Subject</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody></tbody>

              <tr v-for="subject in subjects" v-bind:key="subject._id">
                <td>{{ subject.subjectName }}</td>
                <td>
                  <button
                    class="btn btn-sm btn-danger"
                    @click="deleteSubject(subject._id, subject.subjectName)"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </table>
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
  name: "subject-list",

  data() {
    return {
      subjectList: [],
      _id: "",
    };
  },

  methods: {
    getSubjectById() {
      Meteor.call("getSubjectById", this.subjectName, (error, result) => {
        if (error) {
          console.log("Something went wrong!!!", error);
        } else {
          this.subjects = result.data;
        }
      });
    },

    deleteSubject(id, name) {
      const bool = confirm(`Are you sure that you want to remove ${name} ?`);
      if (!bool) {
        return;
      }

      Meteor.call("deleteSubject", id, (error, result) => {
        if (error) {
          console.log("Something went wrong!!!", error);
        } else {
          console.log(result);
        }
      });
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
