  
import React, { useRef, useEffect } from "react";


export default function PayPal({totalSum}){
    const paypal = useRef();
    useEffect(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "homemade food",
                  amount: {
                    currency_code: "ILS",
                    value: totalSum,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }, []);
    
    return(
        <div>
            <div ref={paypal}>{alert('hallo!!')}</div>
        </div>
    )
    
}