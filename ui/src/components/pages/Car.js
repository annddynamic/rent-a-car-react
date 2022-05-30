import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Table,
  FormLabel
} from "react-bootstrap";

import { useParams} from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowCircleLeft } from "react-icons/fa";
import axios from "axios";
import pic from '../../images/babloki.jpg'
import {useNavigate} from 'react-router-dom';
import "./Car.css"

const Car = () => {
  let { id } = useParams();
  const cars = useSelector((state) => state.cars);
  const userId = useSelector((state) => state.user._id);
  const [car, setCar] = useState(cars.filter(car => car._id === id));
  const navigate = useNavigate();
  
  const [data, setData] = useState({ from: "", to: "", errorMessage: "", formHidden: true, totalPrice: 0 });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    if(input.id != "dateFrom"){
      var totalPrice = CalculateTotalPrice(input.value, data.from, car[0].price_for_24h)
      setData({ ...data, [input.name]: input.value, totalPrice: totalPrice });
    }
  };
  const token = useSelector((state)=>state.isLogged.token)

  const dispatch = useDispatch();

  const bookCar = async (e) => {
    e.preventDefault();
    var today = new Date(),
    date = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    var dateFromInput = new Date(data.from);
    var dateToInput = new Date(data.to);

    if(data.from == '' || data.to == ''){
      setData({...data, errorMessage: "Please fill both fields!" });
      return;
    }
    if(date.getTime() > dateFromInput.getTime()){
      setData({...data, errorMessage: "Booking date cannot be earlier than today's date!" });
      return;
    }
    if(date.getTime() < dateFromInput.getTime() || dateToInput.getTime() < dateFromInput.getTime()){
      setData({...data, errorMessage: "Termination date cannot be earlier than the starting date!" });
      return;
    }

    const url = `http://localhost:8080/api/cars/${id}`;
    axios
      .patch(url, {rented: true,start_day_booking: data.from, finish_day_booking: data.to, rentedBy: userId },{
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((res) => {
        console.log(res);
      });
  }

  //Validation message
  const ShowValidation = ({message}) =>
  <div>
      <p className="text-danger" style={{float:"left"}} >{message}</p> 
  </div>

  const navigateToCars = () => {
    navigate('/Cars');
  };

  const Capitalize = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const ToggleForm = () => {
    setData({ ...data, formHidden:!data.formHidden })
  }
  
  const DateDifference = (dateTo, dateFrom) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    return Math.floor((dateTo - dateFrom) / _MS_PER_DAY);
  }

  const CalculateTotalPrice = (dateTo, dateFrom, price24H) => {
    if(!(dateTo != null && dateFrom != null && price24H != null))
    {
      return 0;
    }
      let dateFromInput = new Date(dateFrom);
      let dateToInput = new Date(dateTo);
      if(DateDifference(dateToInput, dateFromInput) < 0){
        return 0;
      }
      return DateDifference(dateToInput, dateFromInput) * price24H;
  }

  return (
    <Container className="text-center">
      <Row>
      <Col className="col-md-6">
      <div>
        <img src={pic} style={{height:"45vh",width:"45vh", borderRadius:"50%", padding:"20 0 0 0"}} alt="" />
      </div>
      </Col>
      <Col>
      <Table className="thead-dark" id="carDetails">
      <tbody>
       <tr>
          <th>Model: </th>
          <td>{Capitalize(car[0].car_model) ?? "///"}</td>
        </tr>
        <tr>
          <th>Serie: </th>
          <td>{Capitalize(car[0].car_series) ?? "///"}</td>
        </tr>
        <tr>
          <th>Country: </th>
          <td>{Capitalize(car[0].country) ?? "///"}</td>
        </tr>
        <tr>
          <th>Type: </th>
          <td>{Capitalize(car[0].car_type) ?? "///"}</td>
        </tr>
        <tr>
          <th>Production Year: </th>
          <td>{car[0].prod_year ?? "///"}</td>
        </tr>
        <tr>
          <th>Price: </th>
          <td>{car[0].price_for_24h ?? "///" }	&euro;</td>
        </tr> 
        {!data.formHidden ? (<tr>
          <th>Total Price: </th>
          <td id="totalPrice" className="text-danger">{ data.totalPrice }	&euro;</td>
        </tr>) : ("") }
        {(car[0].rented) ? (<tr>
          <th>Total Price: </th>
          <td id="totalPrice" className="text-danger">{ CalculateTotalPrice(car[0].finish_day_booking, car[0].start_day_booking, car[0].price_for_24h) }	&euro;</td>
        </tr>) : ("") }
        <tr style={{display:"none"}}>
          <th>Ide: </th>
          <td>{id}</td>
        </tr>
      </tbody>
      </Table>
      </Col>
      </Row>
      <br></br>
      <br></br>
      <Button id="backBtn" className="btn btn-secondary col-md-3" onClick={navigateToCars}>
        <FaArrowCircleLeft /> Back 
      </Button>
      {!(car[0].rented || car[0].company === userId) ? (
        <Row >
        <Col></Col>
        <Button id="orderBtn" className="btn col-md-3" onClick={ToggleForm}>Reserve Now ?</Button>
        </Row> ) : ("")}
      {(!(car[0].rented || car[0].company === userId) && !data.formHidden) ? (
         <Form style={{ padding: "20px 0 20px 0" }} onSubmit={bookCar}>
         <Row>
         <h3 style={{textAlign:"left"}}>Pick a reservation date</h3>
           <Col>
             <FormLabel style={{float:"left"}}>From:</FormLabel>
             <Form.Group controlId="dateFrom">
               <Form.Control className="datepicker"
                 type="date"
                 name="from"
                 value={data.from}
                 onChange={handleChange}
               />
             </Form.Group>
           </Col>
           <Col>
             <FormLabel style={{float:"left"}}>To:</FormLabel>
             <Form.Group controlId="dateTo">
               <Form.Control
                 type="date"
                 name="to"
                 value={data.to}
                 onChange={handleChange}
               />
             </Form.Group>
           </Col>
         </Row>
         <Row><ShowValidation message={data.errorMessage} /></Row>
         <Row>
            <Col>
                <Button className="btn btn-success col-md-3" style={{float:"right"}} type="submit">
                  Book <span>&#10003;</span>
                </Button>
            </Col>
        </Row>
       </Form>
      ) : (
            ""
      )}
    </Container>
  );
};

export default Car;
