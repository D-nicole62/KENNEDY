<template>
    <form @submit.prevent="submitClaim">
      <input v-model="claim.fullName" placeholder="Full Name" required />
      <input v-model="claim.policyNumber" placeholder="Policy Number" required />
      <textarea v-model="claim.description" placeholder="Describe your claim" required></textarea>
      <button type="submit">Submit Claim</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        claim: {
          fullName: '',
          policyNumber: '',
          description: ''
        }
      };
    },
    methods: {
      submitClaim() {
        console.log('Claim submitted:', this.claim);
        // Send to backend using fetch/axios here
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 12px;
  }
  </style>
  