import React, { useEffect } from 'react';

function GoogleReviewsWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js'; // Replace with your actual script URL
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className=''>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold py-10 text-center">What Our Customers Say</h1>
      <div className="elfsight-app-a631cf56-86ec-4a88-8492-b23644fe1dd8 mx-16" data-elfsight-app-lazy></div> {/* Replace the id if needed */}
    </div>
  );
}

export default GoogleReviewsWidget;
