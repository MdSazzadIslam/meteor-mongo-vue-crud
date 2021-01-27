<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/add-subject" class="nav-link"
          >Add Subject</router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/add-department" class="nav-link"
          >Add Department</router-link
        >
      </li>

      <li class="nav-item">
        <router-link to="/add-student" class="nav-link"
          >Add Student</router-link
        >
      </li>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
};
</script>
