<template>
  <v-flex :class="this.responsiveGrid">
    <v-card>
      <template v-if="this.hasFile">
        <v-card-media v-if="this.defaultImage !== false" :contain="this.previewMediaContain" :src="this.defaultImage" height="200px" />
        <v-card-text v-else class="text-sm-center overflow-hidden">{{this.filename}}</v-card-text>
      </template>
      <v-alert outline color="error" icon="warning" :value="hasError">{{this.unsuportedMediaTypeLabel}}</v-alert>
      <v-card-actions v-if="!this.hasFile">
        <input type="file" ref="loader" @change="onChangeLoader" v-bind:accept="acceptedFileFormat" hidden>
        <v-btn flat :loading="loading" block @click="() => this.$refs.loader.click()">{{this.uploadFileLabel}}</v-btn>
      </v-card-actions>
      <v-card-actions v-else>
        <v-flex sm6>
          <v-btn flat block target="_blank" :href="this.fileLink">
            <v-icon dark>file_download</v-icon>
          </v-btn>
        </v-flex>
        <v-flex sm6>
          <v-btn flat block :loading="loading" @click="() => this.deleteFile()" :title="this.deleteFileLabel">
            <v-icon dark>delete</v-icon>
          </v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: "FirebaseUploader",
    data: function() {
      return {
        hasError: false,
        loading: false,
        defaultImage: false,
        hasFile: false,
        filename: "",
        fileLink: ""
      }
    },
    computed: {
      acceptedFileFormat: function() {
        return this.limitToType.join(',');
      }
    },
    created: function() {
      this.getMetaData()
    },
    watch: {
      path: function(){
        this.getMetaData()
      },
      storage: function(){
        this.getMetaData()
      }
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
        default: function() {
          return []
        },
      },
      /**
       * Force the ratio of the image preview
       */
      previewMediaContain:{
        type: Boolean,
        default: false
      },
      /**
       * Reponsive Grid properties
       */
      responsiveGrid:{
        type: String,
        default: "xs12 sm3"
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
      getMetaData: function () {
        this.loading = true;
        this.getFileRef().getMetadata().then(async (m) => {
          this.filename = m.name;
          this.fileLink = await this.getFileRef().getDownloadURL();
          this.hasFile = true;
          this.loading = false;
          if (m.type === 'file' && m.contentType.indexOf('image/') !== -1) {
            this.defaultImage = await this.getFileRef().getDownloadURL();
          }
        }).catch((err) => {
          console.log("Error", err);
          this.loading = false;
          this.defaultImage = false;
          this.hasFile = false;
          this.filename = "";
          this.fileLink = "";
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
          this.$emit('onFileUpload', this.targetPath());
        }).catch(() => {
          this.$emit('onFileUploadError', this.targetPath());
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
          this.filename = "";
          this.fileLink = "";
          this.$emit('onFileDelete', this.targetPath());
          this.resetUpload();
        }).catch(() => {
          this.loading = false;
        });
      }
    }
  }
</script>