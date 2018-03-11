import FirebaseUploader from './component/FirebaseUploader';

export default {
    install(Vue) {
        Vue.component('firebaseUploader', FirebaseUploader);
    },
};

export { FirebaseUploader };