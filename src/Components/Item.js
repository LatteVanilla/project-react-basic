import PropTypes from 'prop-types'; //ใช้ตรวจสอบประเภทของข้อมูล
import './Item.css';

//เป็นตัวจัดการข้อมูลรายรับ - รายจ่ายที่เกิดขึ้นภายในตัว Transaction
//เรียกใช้งาน Class item 
//สร้างตัวแปรให้ใช้งานโดย props
//ใช้ prop เพื่อเรียกข้อมูลมาแสดง
const Item = (props)=>{
    const {title, amount} = props;
    const status = amount<0 ? "expense":"income" //status ใช้แยกสถานะรายรับ (สีฟ้าอ่อน) รายจ่าย (สีแดง)
    const symbol = amount<0 ? "-":"+" //symbol ใช้แยกค่ารายรับ (มีเครื่องหมาย + ) รายจ่าย (มีเครื่องหมาย -)
    const formatNumber=(num)=>{
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
    );
}
    Item.prototype={
        title:PropTypes.string.isRequired, //กำหนด title ให้เป็น string 
        amount:PropTypes.number.isRequired //กำหนด amount ให้เป็น number //isRequired เป็นคำสั่งห้ามให้มีค่าว่าง
    }

    export default Item;