โปรแกรมบัญชีรายรับ - รายจ่าย
สามารถคำนวนรายรับ - รายจ่ายได้จากข้อมูลที่กรอกเข้าไป
แสดงรายละเอียด รายรับ รายจ่าย ยอดคงเหลือ หน่วยเป็น ฿ (บาท)
แยกรายละเอียดรายรับ - รายจ่าย จากสี (รายรับสีฟ้าอ่อน รายจ่ายสีแดง)

การกรอกข้อมูล
กรอกชื่อรายการและจำนวนเงิน
จำนวนเงินถ้าเป็นรายรับให้พิมพ์ตัวเลขใส่ปกติ ถ้าเป็นรายจ่ายให้พิมพ์เครื่องหมาย - นำหน้าตัวเลข
กดบันทึกข้อมูล

รายละเอียดของแต่ละไฟล์ในโปรแกรม
- App.js
ไฟล์นี้เป็นไฟล์หลักของโปรแกรมที่ใช้ควบคุมส่วนต่างๆของโปรแกรม
App.js ดึงข้อมูลจากส่วนอื่นๆดังนี้
Transaction,FormComponent,DataContext,ReportComponent
การทำงานของหน้านี้หลักๆคือเป็นส่วนหน้าตาหลักของโปรแกรม (หน้าแรกของโปรแกรม)
ใช้กำหนดสูตรการคำนวนของโปรแกรม

- FormComponent
