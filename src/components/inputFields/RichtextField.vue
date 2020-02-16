<template>
  <div class="richtext-field">
<!--    <h2>正文内容</h2>-->
<!--    <v-divider class="tw-mb-2 tw-w-6 tw-border-2 tw-border-gray-500" />-->
    <quill-editor ref="editor"
                  v-model="innerValue" :options="editorOptions" />
    <vue-core-image-upload
      class="tw-mt-4"
      :disabled="loading"
      :crop="false"
      @imageuploading="loading = true"
      @imageuploaded="imageUploaded"
      :max-file-size="5242880"
      inputOfFile="file"
      :credentials="false"
      :headers="{Authorization: `Bearer ${$auth.token}`}"
      :url="$config.imageUploadUrl">
      <v-btn icon :loading="loading" class="tw-h-20 tw-w-20 tw-border tw-border-dashed tw-rounded">
        <v-icon>mdi-image-auto-adjust</v-icon>
      </v-btn>
    </vue-core-image-upload>
  </div>
</template>

<script>
import baseMixins from '@components/inputFields/baseMixins'
import '@style/quill.scss'
import VueCoreImageUpload from 'vue-core-image-upload'
import { quillEditor } from 'vue-quill-editor'

export default {
  name: 'RichtextField',
  mixins: [baseMixins],
  components: {
    VueCoreImageUpload,
    quillEditor
  },
  data () {
    return {
      loading: false,
      editorOptions: {
        placeholder: '输入帖子内容...',
        modules: {
          toolbar: []
        }
      }
    }
  },
  methods: {
    imageUploaded (res) {
      this.loading = false
      if (res.code === 0) {
        this.innerValue = this.innerValue + '<p><img src="' + res.data.url + '?imageView2/2/w/480" /></p>'
        this.$toast.success('上传成功，正在加载！')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
