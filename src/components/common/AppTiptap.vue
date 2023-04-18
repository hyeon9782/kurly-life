<template>
  <div>
    <!-- <EditorMenuBar :editor="editor" v-slot="{ commands, isActive }">
      <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
        Bold
      </button>
    </EditorMenuBar> -->
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'

export default {
  components: {
    EditorContent,
    // EditorMenuBar
  },

  data() {
    return {
      editor: null,
    }
  },

  mounted() {
    this.editor = new Editor({
      content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
      ],
    })
  },

  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>