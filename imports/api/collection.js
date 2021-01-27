import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";

export const Departments = new Mongo.Collection("departments");
export const Students = new Mongo.Collection("students");
export const Subjects = new Mongo.Collection("subjects");

if (Meteor.isClient) {
  Tracker.autorun(function () {
    Meteor.subscribe("subjects");
    Meteor.subscribe("students");
    Meteor.subscribe("departments");
  });
} else if (Meteor.isServer) {
  Meteor.publish("subjects", function () {
    return Subjects.find(
      {},
      {
        sort: { _id: -1 },
        limit: 100,
      }
    );
  });

  Meteor.publish("departments", function () {
    return Departments.find(
      {},
      {
        sort: { _id: -1 },
        limit: 100,
      }
    );
  });

  Meteor.publish("students", function () {
    return Students.find(
      {},
      {
        sort: { _id: -1 },
        limit: 100,
      }
    );
  });
}

/* if (Meteor.isClient) {
  Tracker.autorun(function () {
    Meteor.subscribe("departments");
  });
} else if (Meteor.isServer) {
  Meteor.publish("students", function () {
    return Students.find(
      {},
      {
        sort: { _id: -1 },
        limit: 100,
      }
    );
  });
} */

/* if (Meteor.isClient) {
  Tracker.autorun(function () {
    Meteor.subscribe("students");
  });
} else if (Meteor.isServer) {
  Meteor.publish("students", function () {
    return Students.find(
      {},
      {
        sort: { _id: -1 },
        limit: 100,
      }
    );
  });
} */

if (Meteor.isServer) {
  Meteor.publish("allSubjects", () => {
    return subjects.find({});
  });
  Meteor.publish("allStudents", () => {
    return Students.find({});
  });

  Meteor.publish("allDepartments", () => {
    return Departments.find({});
  });
}

Meteor.methods({
  getStudent() {
    return Students.find();
  },

  getStudentById(id) {
    return Students.findOne(id);
  },

  createStudent(student) {
    return Students.insert({
      studentName: student.studentName,
      departmentName: student.departmentName,
      createdAt: new Date(),
    });
  },

  deleteStudent(id) {
    return Students.remove({ _id: id });
  },

  getDepartment() {
    return Departments.find();
  },

  getDepartmentById(name) {
    return Departments.findOne(name);
  },

  createDepartment(department) {
    debugger;
    return Departments.insert(department);
  },

  deleteDepartment(id) {
    return Departments.remove({ _id: id });
  },
  getSubject() {
    return Subjects.find();
  },

  getSubjectById(name) {
    debugger;
    return Subjects.findOne(name);
  },

  createSubject(subject) {
    return Subjects.insert(subject);
  },

  deleteSubject(id) {
    debugger;
    return Subjects.remove({ _id: id });
  },
});
