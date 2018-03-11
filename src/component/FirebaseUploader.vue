<template>
  <v-flex xs12 sm3>
    <v-card>
      <v-card-media v-if="this.defaultImage !== false" :src="this.defaultImage" height="200px" />
      <v-alert outline color="error" icon="warning" :value="hasError">{{this.unsuportedMediaTypeLabel}}</v-alert>
      <v-card-actions>
        <input type="file" ref="loader" @change="onChangeLoader" hidden>
        <v-btn flat v-if="!this.hasFile" :loading="loading" block @click="() => {this.$refs.loader.click()}">{{this.uploadFileLabel}}</v-btn>
        <v-btn flat v-else :loading="loading" block @click="() => {this.deleteFile()}">{{this.deleteFileLabel}}</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "FirebaseUploader",
    data: () => {
      return {
        hasError: false,
        loading: false,
        defaultImage: false,
        hasFile: false,
      }
    },
    created: function() {
      this.getMetaData()()
    },
    props: {
      /**
       * Labels
       */
      uploadFileLabel: {
        type: String,
        default: "Upload a file"
      },
      deleteFileLabel: {
        type: String,
        default: "Remove this file"
      },
      unsuportedMediaTypeLabel: {
        type: String,
        default: "Unsuported Media Type. Please use a correct file format"
      },

      /**
       * Firebase save path
       */
      path: {
        type: String,
        required: true,
      },
      /**
       * Firebase storage access
       */
      storage: {
        type: Object,
        required: true,
      },
      /**
       * Output filename
       */
      targetFileName: {
        type: String,
        required: true,
      },
      /**
       * Output filename
       */
      limitToType: {
        type: Array,
        default: () => {return []},
      }
    },
    methods:{
      targetPath: function(){
        return this.path + '/' + this.targetFileName
      },
      getFileRef: function(){
        return this.storage.ref().child(this.targetPath());
      },
      /**
       * Reset the file upload to allow multiple files upload (chain)
       */
      resetUpload: function(){
        let control = this.$refs.loader;
        control.replaceWith(control.val('').clone(true));
      },
      /**
       * Triggered on file selection.
       */
      onChangeLoader: function() {
        if(event.target.files[0]) {
          this.uploadFile(event.target.files[0]);
        }
      },
      getMetaData: function() {
        this.loading = true;
        this.getFileRef().getMetadata().then(m => {
          this.hasFile = true;
          this.loading = false;
          if(m.type === 'file' && m.contentType.indexOf('image/') !== -1){
            this.defaultImage = m.downloadURLs[0];
          }
        }).catch(() => {
          this.loading = false;
          this.defaultImage = false;
        });
      },
      /**
       * Upload a new file in firebase
       * @param file
       * @returns {boolean}
       */
      uploadFile: function (file) {
        if (this.limitToType.length >= 1 && this.limitToType.indexOf(file.type) === -1) {
          // File type not authorized
          this.hasError = true;
          return false;
        }else{
          this.hasError = false;
        }

        this.loading = true;

        /**
         * Upload file to firebase
         */
        this.getFileRef().put(file).then(() => {
          this.getMetaData();
          this.loading = false;
          this.$emit('onUpload', this.targetPath());
        }).catch(() => {
          this.$emit('onUploadError', this.targetPath());
          this.loading = false;
        });
      },
      /**
       * Remove file in Firebase Storage
       */
      deleteFile: function () {
        this.loading = true;
        this.getFileRef().delete().then(() => {
          this.loading = false;
          this.defaultImage = false;
          this.hasFile = false;
          this.resetUpload();
          this.$emit('onDelete', this.targetPath());
        }).catch(() => {
          this.loading = false;
        });
      }
    }
  }
</script>