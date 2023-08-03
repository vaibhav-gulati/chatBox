<template>
  <div class="app-container">
    <div class="app">
      <ConversationArea :messages="conversation" :currentUser="currentUser" />
      <ComposeSection v-model="messageText" @submit="sendReply" />
    </div>
  </div>
</template>

<script>
import ConversationArea from "./components/ConversationArea.vue";
import ComposeSection from "./components/ComposeSection.vue";
import MessageEntry from "./components/MessageEntry.vue"; 

import { mapActions } from 'vuex';

export default {
  components: {
    ConversationArea,
    ComposeSection,
    MessageEntry,
  },
  data() {
    return {
      messageText: "",
    };
  },
  computed: {
    conversation() {
      return this.$store.state.conversation;
    },
    currentUser() {
      return this.$store.state.currentUser;
    },
  },
  methods: {
    ...mapActions(['fetchConversation', 'fetchCurrentUser', 'sendReply']),
  },
  created() {
    this.fetchConversation();
    this.fetchCurrentUser();
  },
};
</script>

<style>
.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.app {
  width: 500px;
  max-width: 100%;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.app-header {
  padding: 16px;
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
}

.conversation-area {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.compose-section {
  padding: 16px;
  display: flex;
  align-items: center;
  border-top: 1px solid #f0f0f0;
}

.message-input {
  flex: 1;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 18px;
  padding: 0 12px;
  font-size: 14px;
}

.send-button {
  width: 60px;
  height: 36px;
  margin-left: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}

.message-entry {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}

.message-bubble {
  border-radius: 8px;
  padding: 8px;
  word-wrap: break-word;
  max-width: 60%;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.5;
}

.sent .message-bubble {
  background-color: #007bff;
  color: #fff;
  align-self: flex-end;
}

.received .message-bubble {
  background-color: #f0f0f0;
  color: #333;
}

.thumbnail {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
}

.thumbnail svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
}
</style>
