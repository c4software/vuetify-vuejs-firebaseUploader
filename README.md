# vuetify-vuejs-firebaseUploader
A dead simple component to upload file in Firebase Storage

## Usage

```
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
  import firebaseUploader from '@/components/FirebaseUploader'

  export default {
    name: 'event',
    components: {firebaseUploader},
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