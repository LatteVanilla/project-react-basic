import Transaction from "./Components/Transaction";
import FormComponent from "./Components/FormComponent";
import "./App.css";
import {useState,useEffect} from "react";
import DataContext from "./Data/DataContext";
import ReportComponent from "./Components/ReportComponent";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


//Component รูปแบบ Function
//ชื่อโปรแกรม ตั้งค่าสี ตำแหน่ง ขนาด
//ประกาศใช้ Class container
//เรียกใช้ Transaction
function App() {
  const design = { color:"#7B68EE",textAlign:"center",fontSize:"1.5rem" }

  const initdata = [
    {id:1,title:"เงินเดือน",amount:15000},
    {id:2,title:"ค่าหอ",amount:-6000},
  ]

  const [items,setItems] = useState(initdata)
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const onAddNewItem = (newItem)=>{
      setItems((prevItem)=>{
        return [newItem,...prevItem]
      })
    }
    useEffect(()=>{
        const amounts = items.map(items=>items.amount)
        const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
        const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1
        setReportIncome(income.toFixed(2))
        setReportExpense(expense.toFixed(2))
    },[items,reportIncome,reportExpense])
  return (
    <DataContext.Provider value={{income : reportIncome,expense: reportExpense}}>
      <div className="container">
        <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1> 
        <Router>
        <div>
          <ul className="horizontal-menu">
            <li>
              <Link to = "/">ข้อมูลบัญชี</Link>
            </li>
            <li>
            <Link to = "/insert">บันทึกข้อมูล</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<ReportComponent/>}></Route>
            <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/><Transaction items={items}/></>}></Route>     
          </Routes>
        </div>
        </Router>
      </div>
      </DataContext.Provider>
  );
}
 
export default App;
