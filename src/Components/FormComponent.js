import { useState,useEffect } from 'react'
import "./FormComponent.css";
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props)=>{

    const [title,setTitle] = useState('') //ใช้เก็บค่าข้อมูล ชื่อรายการ
    const [amount,setAmount] = useState(0) //ใช้เก็บค่าข้อมูล จำนวนเงิน
    const [formValid,setFormValid] = useState(false) //ใช้กำหนดให้ปุ่มบันทึกข้อมูลไม่สามารถใช้งานได้ถ้าไม่ได้ใส่ชื่อรายการ,จำนวนเงิน

    const inputTitle = (event)=>{
        setTitle(event.target.value);
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value);
    }
    const saveItem = (event)=>{
        event.preventDefault();
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkdata = title.trim().length > 0 && amount!==0
        if(checkdata){
            setFormValid(true)
        }
    },[title,amount])
    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <lable>ชื่อรายการ</lable>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <lable>จำนวนเงิน</lable>
                    <input type="number" placeholder="(+ รายรับ , - รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" className="btn" disabled={!formValid}>บันทึกข้อมูล</button>
                </div>
            </form>
        </div>
    )
    
}
    export default FormComponent