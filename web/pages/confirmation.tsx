// App.js or App.tsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import ContainerApp from "../components/ContainerApp";

//const stripePromise = loadStripe('pk_test_51MmQHlJhgEFpvHDfUpbrtS2tHV4cO8lUzfYQ56IP3Dqirj74CHVbNHUuBRTI2N78sFnV5lN4tgN0aAjjJUJRlapQ00F6Gvp8ud'); // Replace with your actual publishable key
//live key: pk_live_51Ml1VPEJJDG8LJHiGFrmZmdsbHnf8Ji32TMkbt6S1SuCr9moFmOxG0HW5p1CqEDoCLsCE1Ba8LDpsS6I0sbb9UsR00CaJPa6OF
function App() {

    const redirectToCheckout = async () => {
        const priceId = 'price_1Mn6OOEJJDG8LJHisqyFE9hJ'; // Replace with your actual price ID
        
        
        const res = await fetch('/api/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ priceId }),
        });
      
        const { sessionId } = await res.json();
        const stripe = await loadStripe('pk_test_51Ml1VPEJJDG8LJHibi4ZwdJEMFpLWQt4fNOWsRxED8zNAaaLW0SuCBYjJ8boW4A60HF7LPTCo57FHuOYbCf69Cdu00GVxZZ9MV'); // Replace with your actual publishable key
        if(!(stripe == null)) await stripe.redirectToCheckout({ sessionId: sessionId });
      };

    return (
        <ContainerApp>
            <button onClick={redirectToCheckout}>Buy now</button>
        </ContainerApp>
    );
}

export default App;