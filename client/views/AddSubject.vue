<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-sm-8">
              <div class="card-title">Add Subject</div>
            </div>
            <div class="col-sm-4">
              <div class="float-md-right">
                <router-link to="/subject-list" class="nav-link"
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
                <label for="subjectName">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="subjectName"
                  v-model="subject.subjectName"
                  name="subject.subjectName"
                  required
                />
              </div>

              <button @click="saveSubject" class="btn btn-success">
                Submit
              </button>
            </div>

            <div v-else>
              <h4>You submitted successfully!</h4>
              <button class="btn btn-success" @click="newSubject">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Meteor } from "meteor/meteor";

export default {
  name: "add-subject",

  data() {
    return {
      subject: {
        subjectName: "",
      },
      submitted: false,
    };
  },

  methods: {
    saveSubject() {
      Meteor.call("createSubject", this.subject, function (error, result) {
        if (error) {
          alert(error);
          console.log(error);
        } else {
          alert("Submited Successfully");
          console.log(result);
        }
      });
      this.subject = "";
    },
  },

  newStudent() {
    this.submitted = false;
    this.subject = {};
  },
};
</script>
