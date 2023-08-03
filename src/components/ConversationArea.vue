<template>
    <div class="conversation-area" ref="conversationArea">
      <MessageEntry
        v-for="message in messages"
        :key="message.id"
        :text="message.message"
        :from="message.from"
        :currentUser="currentUser"
      />
    </div>
  </template>
  
  <script>
  import MessageEntry from "./MessageEntry.vue";
  
  export default {
    components: {
      MessageEntry,
    },
    props: {
      messages: {
        type: Array,
      },
      currentUser: {
        type: Object,
      },
    },
    mounted() {
      this.scrollToBottom();
    },
    updated() {
      this.scrollToBottom();
    },
    beforeUnmount() {
      this.$refs.conversationArea.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      scrollToBottom() {
        const conversationArea = this.$refs.conversationArea;
        conversationArea.scrollTop = conversationArea.scrollHeight;
        conversationArea.addEventListener('scroll', this.handleScroll);
      },
      handleScroll() {
        const conversationArea = this.$refs.conversationArea;
        const atBottom = conversationArea.scrollHeight - conversationArea.clientHeight <= conversationArea.scrollTop + 1;
  
        if (atBottom) {
          conversationArea.removeEventListener('scroll', this.handleScroll);
        }
      },
    },
  };
  </script>
  
  <style>
  .conversation-area {
    width: 100%;
    height: 80%; 
    overflow-y: auto;
  }

  .received .thumbnail {
    margin-right: 12px;
    margin-left: 0; 
  }
  
  .sent .thumbnail {
    margin-left: 12px;
    margin-right: 0; 
  }
  
  </style>
  