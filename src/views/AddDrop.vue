<template>
  <div>
    <h1>Add Drop</h1>
    <v-sheet width="300" class="mx-auto">
      <v-form ref="form">
        <v-text-field
          v-model="names"
          :rules="nameRules"
          label="ชื่อ-สกุล"
          required
        ></v-text-field>

        <v-text-field
          v-model="ID"
          :counter="10"
          :rules="IDRules"
          label="รหัสนักศึกษา"
          required
        ></v-text-field>

        <v-col>
          <v-checkbox
            v-model="AddEnabled"
            color="green"
            value="add"
            label="เพิ่ม"
            :rules="validateCheckbox"
          />
          <v-checkbox
            v-model="DropEnabled"
            color="green"
            value="drop"
            label="ถอน"
            :rules="validateCheckbox"
          />
        </v-col>

        <v-select
          v-model="selectAdd"
          :items="SubjectAdd"
          :disabled="!AddEnabled"
          label="วิชาที่ต้องการเพิ่ม"
          density="SubjectAdd"
        ></v-select>

        <v-select
          v-model="selectDrop"
          :items="SubjectDrop"
          :disabled="!DropEnabled"
          label="วิชาที่ต้องการถอน"
          density="SubjectDrop"
        ></v-select>

        <v-radio-group
          label="ยืนยันหรือไม่ ?"
          :rules="[(v) => !!v || 'ต้องยืนยันก่อนตกลง']"
        >
          <v-radio label="ยืนยัน" color="green" value="1" required> </v-radio>
        </v-radio-group>

        <div class="d-flex flex-column">
          <v-btn color="success" class="mt-4" block @click="validate">
            ตรวจสอบความถูกต้อง
          </v-btn>

          <v-btn color="error" class="mt-4" block @click="reset"> รีเซ็ตแบบฟอร์ม </v-btn>

          <v-btn color="warning" class="mt-4" block @click="resetValidation">
            รีเซ็ตการตรวจสอบ
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    names: "",
    nameRules: [(v) => !!v || "จำเป็นต้องระบุ"],
    ID: "",
    IDRules: [
      (v) => !!v || "จำเป็นต้องระบุ",
      (v) => (v && v.length == 10) || "รหัสนักศึกษาต้องมี 10 หลักเท่านั้น",
    ],

    AddOrDrop: [
      { id: 1, name: "เพิ่ม" },
      { id: 2, name: "ถอน" },
    ],
    AddEnabled: false,
    DropEnabled: false,

    selectAdd: null,
    SubjectAdd: [
      "ฐานข้อมูลแบบไม่มีโครงสร้าง",
      "การพัฒนาระบบฝั่งเซิร์ฟเวอร์",
      "มนุษย์ สังคม เทคโนโลยีและสิ่งแวดล้อม",
      null,
    ],

    selectDrop: null,
    SubjectDrop: [
      "สถาปัตยกรรมคอมพิวเตอร์",
      "การพัฒนาโปรแกรมประยุกต์บนเว็บ",
      "หลักสถิติ",
      "ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 2",
      "การวิเคราะห์และออกแบบเชิงวัตถุ",
      "คณิตศาสตร์สำหรับวิทยาการคอมพิวเตอร์",
      null,
    ],
    checkbox: false,
  }),

  computed: {
    validateCheckbox() {
      return [
        this.AddEnabled.length > 0 ||
          this.DropEnabled.length > 0 ||
          "ต้องเลือกอย่างน้อย 1 อย่าง",
      ];
    },
  },

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) alert("แบบฟอร์มถูกต้อง");
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
