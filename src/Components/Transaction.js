import Item from "./Item"; //นำตัว Component Item มาทำงาน
import "./Transaction.css" //เรียกใช้ Transaction.css

//ให้ Transacion ใช้ Component Item
const Transaction = (props)=>{
  const {items} = props
    return (
        
      //เรียกใช้งาน class item-list
      <div>
          <ul className="item-list">
          {items.map((element)=>{ //ดึงข้อมูลผ่าน element จาก data
          //ใช้ Spread Operator ในการลดรูปการเขียนคำสั่งที่มีชื่อเหมือนกัน
           return <Item {...element} key={element.id} /> //เรียกใช้ข้อมูล key
          })}
      </ul>
      </div>
    );
  }
    export default Transaction;