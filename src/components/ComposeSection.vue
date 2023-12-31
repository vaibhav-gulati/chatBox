<template>
    <div class="compose-section" :style="{ height: composeHeight }">
      <div class="textarea-container">
        <textarea
          v-model="messageText"
          @input="adjustTextareaHeight"
          :rows="calculateTextareaRows"
          ref="textarea"
          placeholder="Type your reply..."
        ></textarea>
      </div>
      <button @click="submitMessage">
        <div class="cursor-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-send"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </div>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      value: {
        type: String,
      },
    },
    methods: {
      submitMessage() {
        if (this.messageText.trim() !== "") {
          this.$emit("submit", this.messageText);
          this.messageText = "";
          this.composeHeight = "auto"; 
        }
      },
      adjustTextareaHeight() {
        this.$nextTick(() => {
          const textarea = this.$refs.textarea;
          textarea.style.height = "auto"; 
          const scrollHeight = textarea.scrollHeight;
          const maxScrollHeight = 3 * parseInt(getComputedStyle(textarea).lineHeight, 10);
          textarea.style.height = `${Math.min(scrollHeight, maxScrollHeight)}px`;
          this.composeHeight = `${this.$refs.container.clientHeight}px`; 
        });
      },
    },
    computed: {
      calculateTextareaRows() {
        if (this.messageText) {
          const lineBreaks = this.messageText.match(/\n/g) || [];
          return Math.min(Math.max(lineBreaks.length + 1, 1), 3);
        }
        return 1;
      },
    },
    data() {
      return {
        messageText: this.value,
        composeHeight: "auto", 
      };
    },
  };
  </script>
  
  <style>
  
  .compose-section {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    transition: height 0.3s; 
  }
  
  .textarea-container {
    display: flex;
    align-items: center;
    flex: 1;
    border-right: 1px solid #ccc;
    padding-right: 8px;
    margin-right: 8px;
  }
  
  textarea {
    flex: 1;
    resize: none;
    font-size: 14px;
    padding: 6px;
    border: none;
    outline: none;
  }
  
  .cursor-icon {
    display: flex;
    align-items: center;
    margin-left: 8px;
    cursor: pointer;
  }
  
  .button-icon {
    display: flex;
    align-items: center;
  }
  
  button {
    width: 60px;
    height: 36px;
    border-radius: 8px;
    background-color: hsl(120, 1%, 77%);
    color: #fff;
    border: none;
    cursor: pointer;
  }
  </style>
  