<template>
  <h1>Hello World</h1>
  <fa-icon icon="user-secret" />
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret);

export default {
  name: "HelloWorld",
};
</script>
