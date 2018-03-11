# vuetify-vuejs-firebaseUploader
A dead simple VueJS component to upload file in Firebase Storage

![Sample](./demo.png)

## Installation

npm install vuetify-vuejs-firebaseuploader --save


## Todo

- Distribute on npm
- Support drag and drop

## Usage

```vue
<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <firebaseUploader
        path="YOUR/FOLDER/"
        :storage="getStorage()"
        targetFileName="image.png"
        uploadFileLabel="Upload a file"
        deleteFileLabel="Delete the file"
        unsuportedMediaTypeLabel="Invalide file format"
        :limitToType="['image/png']"
        @onUpload="onUpload"
        @onDelete="onDelete"
        @onUploadError="onUploadError"
      />
    </v-layout>
  </v-container>
</template>

<script>
  import Vue from 'vue';
  import firebaseUploader from 'vuetify-vuejs-firebaseuploader';
  Vue.use(firebaseUploader);

  export default {
    name: 'event',
    getStorage: function(){
      return firebase.storage();
    },
    onUpload: function(path){
      console.log(path);
    },
    onDelete: function(path){
      console.log(path);
    },
    onDelete: function(path){
      console.log(path);
    }
  }
</script>
```
