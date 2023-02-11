<template>
  <div>
    <h1>แผนการเรียน</h1>
    <h2>ลงทะเบียนอยู่</h2>
  </div>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="344">
          <v-card-title style="text-align: center; font-weight: bold; font-size: x-large">
            สถาปัตยกรรมคอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ232
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ภานุวัฒน์ เมฆะ
          </div>

          <v-card-actions>
            <v-btn
              color="orange"
              variant="text"
              href="https://reg.mju.ac.th/registrar/class_info_2.asp?backto=home&option=0&courseid=8892990&acadyear=2565&semester=2&avs927644539=35"
              target="_blank"
            >
              สำรวจ
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show1 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show1 = !show1"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (2-3-5) <br />
                <b>คำอธิบายรายวิชา :</b> แนะนำสถาปัตยกรรมคอมพิวเตอร์
                โครงสร้างและการทำงานของระบบคอมพิวเตอร์ หน่วยประมวลผลกลาง หน่วยความจำ
                ระบบของการนําเข้าและการแสดงผล ระบบตัวเลขฐาน
                การออกแบบหน่วยตรรกะและหน่วยควบคุม
                หลักการทำงานและออกแบบด้านวงจรดิจิตอลและวงจรอิเล็กทรอนิกส์
                การทำงานไมโครโพรเซสเซอร์เบื้องต้นสำหรับไอโอที วงจรรวม
                ชุดของคำสั่งเครื่องการวัดสมรรถนะของคอมพิวเตอร์
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            การพัฒนาโปรแกรมประยุกต์<br />บนเว็บ
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ313</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : อ.อรรถวิท ชังคมานนท์
          </div>

          <v-card-actions>
            <v-btn
              color="orange"
              variant="text"
              href="https://reg.mju.ac.th/registrar/class_info_2.asp?backto=home&option=0&courseid=8893593&acadyear=2565&semester=2&avs927650264=7"
              target="_blank"
            >
              สำรวจ
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show2 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show2 = !show2"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (2-3-5)<br />
                <b>คำอธิบายรายวิชา :</b> ความรู้เบื้องต้นทางเทคโนโลยี
                เทคนิคการพัฒนาเว็บไซต์แบบไดนามิก
                การออกแบบเว็บเพจที่ตอบสนองการแสดงผลให้เหมาะสมทั้งเบราว์เซอร์บนเว็บและอุปกรณ์เคลื่อนที่
                การเขียนโปรแกรมบนฝั่งลูกข่ายและฝั่งแม่ข่ายเพื่อปฏิสัมพันธ์กับระบบฐานข้อมูล
                การประยุกต์ใช้งานแอปพลิเคชันโปรแกรมมิ่งอินเตอร์เฟซ (เอพีไอ)
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            หลักสถิติ</v-card-title
          >
          <v-card-subtitle style="text-align: center; font-size: larger"
            >สต301</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : อ.ดร.เชิดชัย มีเอียด
          </div>

          <v-card-actions>
            <v-btn
              color="orange"
              variant="text"
              href="https://reg.mju.ac.th/registrar/class_info_2.asp?backto=home&option=0&courseid=63301&acadyear=2565&semester=2&avs927650264=38"
              target="_blank"
            >
              สำรวจ
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show3 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show3 = !show3"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (3-0-6)<br />
                <b>คำอธิบายรายวิชา :</b> ทบทวนแนวคิดเกี่ยวกับสถิติพรรณนาและความน่าจะเป็น
                การแจกแจงความน่าจะเป็น การแจกแจงทวินาม การแจกแจงปกติ
                การแจกแจงของกลุ่มตัวอย่าง
                การประมาณค่าและการทดสอบสมมติฐานเกี่ยวกับค่าพารามิเตอร์
                การวิเคราะห์ความแปรปรวน การวิเคราะห์การถดถอยและสหสัมพันธ์
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            ภาษาอังกฤษเชิงวิทยาศาสตร์<br />และเทคโนโลยี 2
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส ศท242</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : อ.นิลุบล จิตต์มั่น
          </div>

          <v-card-actions>
            <v-btn
              color="orange"
              variant="text"
              href="https://reg.mju.ac.th/registrar/class_info_2.asp?backto=home&option=0&courseid=8892870&acadyear=2565&semester=2&avs927652475=34"
              target="_blank"
            >
              สำรวจ
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show4 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show4 = !show4"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show4">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (2-2-5)<br />
                <b>คำอธิบายรายวิชา :</b>
                คำศัพท์และโครงสร้างทางไวยากรณ์ภาษาอังกฤษในบริบททางด้านวิทยาศาสตร์และเทคโนโลยี
                มุ่งเน้นการฝึกฝนทักษะภาษาอังกฤษและกลวิธีการเรียนภาษาอังกฤษ
                เพื่อใช้สื่อสารและการเรียนในระดับที่สูงขึ้นทางด้านวิทยาศาสตร์และเทคโนโลยี
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            การวิเคราะห์และออกแบบ<br />เชิงวัตถุ
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ343</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : ผศ.ก่องกาญจน์ ดุลยไชย
          </div>

          <v-card-actions>
            <v-btn
              color="orange"
              variant="text"
              href="https://reg.mju.ac.th/registrar/class_info_2.asp?backto=home&option=0&courseid=8893595&acadyear=2565&semester=2&avs927652475=61"
              target="_blank"
            >
              สำรวจ
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show5 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show5 = !show5"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show5">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (2-3-5)<br />
                <b>คำอธิบายรายวิชา :</b> วัฏจักรการพัฒนาระบบ
                บทบาทและคุณสมบัติของนักวิเคราะห์ระบบ ความต้องการของระบบ คุณสมบัติของระบบ
                พื้นฐานการวิเคราะห์และออกแบบระบบเชิงโครงสร้าง หลักการพื้นฐานเชิงวัตถุ
                การวิเคราะห์เชิงวัตถุ แบบจำลองวัตถุ การออกแบบเชิงวัตถุ
                การเชื่อมความสัมพันธ์ของวัตถุ การออกแบบส่วนติดต่อผู้ใช้
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            คณิตศาสตร์สำหรับวิทยาการ<br />คอมพิวเตอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส คพ252</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">
            ครูผู้สอน : อ.ดร.พยุงศักดิ์ เกษมสำราญ
          </div>

          <v-card-actions>
            <v-btn
              color="orange"
              variant="text"
              href="https://reg.mju.ac.th/registrar/class_info_2.asp?backto=home&option=0&courseid=8892692&acadyear=2565&semester=2&avs927652475=71"
              target="_blank"
            >
              สำรวจ
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show6 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show6 = !show6"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show6">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (3-0-6)<br />
                <b>คำอธิบายรายวิชา :</b> ความรู้เบื้องต้นเกี่ยวกับเมตริกซ์
                การดำเนินการของเมตริกซ์ การดำเนินการตามแถวและหลัก
                รูปแบบแอชชิลอนของเมตริกซ์ ระบบสมาการเชิงเส้น ดีเทอร์มิแนนท์
                ปริภูมิเวกเตอร์ การโปรแกรมเชิงเส้น
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div>
    <h2>เปิดให้ลงทะเบียนเพิ่ม</h2>
  </div>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="mx-auto" width="344">
          <v-card-title style="text-align: center; font-weight: bold; font-size: x-large">
            ฐานข้อมูลแบบไม่มีโครงสร้าง
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส 10301224
          </v-card-subtitle>
          <v-spacer></v-spacer>
          <div class="text--primary" style="text-align: center">ครูผู้สอน :</div>

          <v-card-actions>
            <v-btn color="orange" variant="text" href="" target="_blank"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show7 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show7 = !show7"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show7">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (2-3-5) <br />
                <b>คำอธิบายรายวิชา :</b>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            การพัฒนาระบบฝั่งเซิร์ฟเวอร์
          </v-card-title>
          <v-card-subtitle style="text-align: center; font-size: larger"
            >รหัส 10301232</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">ครูผู้สอน :</div>

          <v-card-actions>
            <v-btn color="orange" variant="text" href="" target="_blank"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show8 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show8 = !show8"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show8">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (2-3-5)<br />
                <b>คำอธิบายรายวิชา :</b>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="mx-auto" width="344"
          ><v-card-title
            style="text-align: center; font-weight: bold; font-size: x-large"
          >
            มนุษย์ สังคม เทคโนโลยีและสิ่งแวดล้อม</v-card-title
          >
          <v-card-subtitle style="text-align: center; font-size: larger"
            >10700105</v-card-subtitle
          >
          <div class="text--primary" style="text-align: center">ครูผู้สอน :</div>

          <v-card-actions>
            <v-btn color="orange" variant="text" href="" target="_blank"> สำรวจ </v-btn>

            <v-spacer></v-spacer>

            <v-btn
              :icon="show9 ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              @click="show9 = !show9"
            ></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show9">
              <v-divider></v-divider>

              <v-card-text>
                <b>หน่วยกิต :</b> 3 (3-0-6)<br />
                <b>คำอธิบายรายวิชา :</b>
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const show1 = ref(false);
const show2 = ref(false);
const show3 = ref(false);
const show4 = ref(false);
const show5 = ref(false);
const show6 = ref(false);
const show7 = ref(false);
const show8 = ref(false);
const show9 = ref(false);
</script>

<style scoped>
.containercard {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
}
</style>
