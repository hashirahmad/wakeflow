<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="batchNo"
        :counter="10"
        :rules="batchNoRules"
        label="Batch No"
        required
      ></v-text-field>

      <v-checkbox
        v-model="reps"
        label="Reps"
      ></v-checkbox>

      <v-select
        v-model="selectedGlassType"
        :items="glassTypes"
        :rules="[v => !!v || 'Glass type is required']"
        label="Glass Type"
        required
      ></v-select>

      <v-slider
        v-model="quantity"
        label="Quantity"
      >
      </v-slider>

      <v-text-field
        v-model="stampDetails"
        :counter="20"
        :rules="stampDetailsRules"
        label="Stamp Details"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="submitInput"
      >
        Submit
      </v-btn>

      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>

      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
import MockService from './MockService'
export default {
  name: "FormInput",
  props: ['label', 'hint'],
  data: () => ({
      valid: true,
      batchNo: '',
      quantity: '',
      stampDetails: '',
      batchNoRules: [
        v => !!v || 'Batch No is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      stampDetailsRules: [
        v => !!v || 'Stamp details is required',
        v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      selectedGlassType: null,
      glassTypes: [
        'Glass Item 1',
        'Glass Item 2',
        'Glass Item 3',
        'Glass Item 4',
      ],
      reps: false,
  }),
  methods: {
    submitInput() {
      const data = {
        batchNo: this.batchNo,
        reps: this.reps === true,
        glassType: this.selectedGlassType,
        quantity: this.quantity,
        stampDetails: this.stampDetails
      }
      // eslint-disable-next-line no-console
      console.log(data)
      MockService.post(data)
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
};
</script>
