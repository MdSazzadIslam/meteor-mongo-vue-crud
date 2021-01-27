import { Students, Subjects, Departments } from "../api/collection";
import SimpleSchema from "simpl-schema";

const SubjectSchema = new SimpleSchema({
  subjectName: { type: String, max: 500, label: "subjectName" },
  createdAt: { type: Date, label: "CreateDate" },
});

const DepartmentSchema = new SimpleSchema({
  departmentName: { type: String, max: 500, label: "departmentName" },
  subjects: { type: Array },
  "subjects.$": SubjectSchema,
  createdAt: { type: Date, label: "CreateDate" },
});

const StudentSchema = new SimpleSchema({
  studentName: { type: String, max: 500, label: "StudentName", required: true },
  departmentName: {
    type: String,
    max: 150,
    label: "DepartmentName",
    required: true,
  },
  createdAt: { type: Date, label: "CreateDate" },
});

Students.attachSchema(StudentSchema);
Subjects.attachSchema(SubjectSchema);
Departments.attachSchema(DepartmentSchema);
