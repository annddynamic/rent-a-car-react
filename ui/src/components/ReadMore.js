import React, { useState } from "react";
import "./ReadMore.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="text h6 card-body">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide" style={{ cursor:"pointer", borderRadius:"10px", color:"gray"}}>
        {isReadMore ? " Read more" : " Show less"}
      </span>
    </div>
  );
};
  
const Content = () => {
  return (
    <div>
    <div className="card" style={{width:"80%", marginLeft:"10%"}}>
        <h4 className="card-header">Will Enterprise pick me up?</h4>
        <ReadMore>
          Yes, our free pick-up service is available at non-airport locations 
          and during normal business hours. To schedule your pick up time or 
          make additional arrangements, please call your local rental office directly. 
          Once picked up and back at the office, a friendly rental representative will 
          complete your paper work and have you on the road in no time.
        </ReadMore>
    </div>
    <div className="card" style={{width:"80%", marginLeft:"10%"}}>
        <h4 className="card-header">Will Enterprise pick me up?</h4>
        <ReadMore>
          Yes, our free pick-up service is available at non-airport locations 
          and during normal business hours. To schedule your pick up time or 
          make additional arrangements, please call your local rental office directly. 
          Once picked up and back at the office, a friendly rental representative will 
          complete your paper work and have you on the road in no time.
        </ReadMore>
    </div>
    <div className="card" style={{width:"80%", marginLeft:"10%"}}>
        <h4 className="card-header">Can I Rent a Car at 18?</h4>
        <ReadMore>
        In some states, you can rent a car at the age of 18; however,
         the legal age to rent a car in most states is 25 years old.
          You may rent a car at some locations between the ages of 21-24 for 
          an additional young renter surcharge. Check the policies at the car 
          rental location you’re interested in renting from for that state’s renter requirements.
        </ReadMore>
    </div>
    <div className="card" style={{width:"80%", marginLeft:"10%"}}>
        <h4 className="card-header">Does Enterprise Accept Gift Cards?</h4>
        <ReadMore>
        Enterprise accepts pre-paid gift cards with a Visa, Mastercard® or 
        Amex symbol as a form of payment at the end of a rental.
         We do not accept gift cards to secure a rental*. Payment is never 
         required when making a reservation. Enterprise does not issue gift cards 
         and will never ask you for credit card or other payment information over 
         the phone. For more information, visit our pre-paid gift card alert page. 
        </ReadMore>
    </div>
    <div className="card" style={{width:"80%", marginLeft:"10%"}}>
        <h4 className="card-header">What does Rental Reimbursement typically not cover?</h4>
        <ReadMore>
        Rental reimbursement coverage does not help you pay to rent a car
        for other reasons, such as routine maintenance work on your car
        or for a vacation. Policies vary by insurance company and state.
        Refer to your own auto insurance agent for details on your coverage.
        Learn more about rental reimbursement coverage.
        </ReadMore>
    </div>
    <div className="card" style={{width:"80%", marginLeft:"10%"}}>
        <h4 className="card-header">Can I rent a different vehicle class than I reserved?</h4>
        <ReadMore>
        Yes, if you would like to rent a vehicle in a higher class than reserved,
        check with the Enterprise location on availability and cost to upgrade. 
        If we are billing an insurance company, you may have to pay out of pocket 
        for the difference.
        </ReadMore>
    </div>
    </div>
  );
};
  
export default Content;