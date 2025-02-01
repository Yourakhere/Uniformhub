import './works.css';
import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { v4 as uuidv4 } from 'uuid';
import { jsPDF } from 'jspdf';  
import emailjs from 'emailjs-com';   

import jpg1 from '../../assets/1.jpg';
import jpg2 from '../../assets/2.jpg';   
import jpg3 from '../../assets/3.jpg'; 
import jpg4 from '../../assets/4.jpg';
import jpg5 from '../../assets/5.jpg';   
import jpg6 from '../../assets/6.jpg';
import jpg7 from '../../assets/7.jpg';
import jpg8 from '../../assets/8.jpg';   
import jpg9 from '../../assets/9.jpg';
import jpg10 from '../../assets/10.jpg';
import jpg11 from '../../assets/11.jpg'; 
import jpg12 from '../../assets/12.jpg';   
import jpg13 from '../../assets/13.jpg';
import jpg14 from '../../assets/14.jpg';
import jpg15 from '../../assets/15.jpg';   
import jpg16 from '../../assets/16.jpg';
import jpg17 from '../../assets/17.jpg';
import jpg18 from '../../assets/18.jpg';   
import jpg19 from '../../assets/19.jpg';
const Works = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Hoodie',
      description: 'Description of Product 1',
      price: 555,
      image: jpg1,
    },
    {
      id: 2,
      name: 't shirt',
      description: 'Description of Product 2',
      price: 656,
      image: jpg2,   
    },
    {
      id: 3,
      name: 't shirt',
      description: 'Description of Product 1',
      price: 555,
      image: jpg3,
    },
    {
      id: 4,
      name: 't shirt',
      description: 'Description of Product 2',
      price: 656,
      image: jpg4,   
    },
    {
      id: 5,
      name: 'court',
      description: 'Description of Product 3',
      price: 567,
      image: jpg5,
    },
    {
      id: 6,
      name: 'court',
      description: 'Description of Product 1',
      price: 555,
      image: jpg6,
    },
    {
      id: 7,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 656,
      image: jpg7,   
    },
    {
      id: 8,
      name: 'court',
      description: 'Description of Product 3',
      price: 567,
      image: jpg8,
    },
    {
      id: 9,
      name: 'Hoodie',
      description: 'Description of Product 1',
      price: 555,
      image: jpg9,
    },
    {
      id: 10,
      name: 'Hoodie',
      description: 'Description of Product 2',
      price: 656,
      image: jpg10,   
    },
    {
      id: 11,
      name: 'Hoodie',
      description: 'Description of Product 3',
      price: 567,
      image: jpg11,
    },
    {
      id: 12,
      name: 'skirt gray',
      description: 'Description of Product 1',
      price: 555,
      image: jpg12,
    },
    {
      id: 13,
      name: 'skirt black',
      description: 'Description of Product 2',
      price: 656,
      image: jpg13,   
    },
    {
      id: 14,
      name: 'tie',
      description: 'Description of Product 3',
      price: 567,
      image: jpg14,
    },
    {
      id: 15,
      name: 'tie',
      description: 'Description of Product 1',
      price: 555,
      image: jpg15,
    },
    {
      id: 16,
      name: 'skaaf',
      description: 'Description of Product 2',
      price: 656,
      image: jpg16,   
    },
    {
      id: 17,
      name: 'skaaf',
      description: 'Description of Product 3',
      price: 567,
      image: jpg17,
    },
    {
      id: 18,
      name: 'Court blue',
      description: 'Description of Product 1',
      price: 555,
      image: jpg18,
    },
    {
      id: 19,
      name: 'Court black',
      description: 'Description of Product 2',
      price: 656,
      image: jpg19,   
    }, 
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');  
  const [upiQRCode, setUpiQRCode] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [timer, setTimer] = useState(300); 
  const [userEmail, setUserEmail] = useState('');  // Email state for user input
  const sizes = ['S', 'M', 'L', 'XL'];

  useEffect(() => {
    if (timer > 0 && paymentStatus === null) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, paymentStatus]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleUPIPay = () => {
    const qrData = `upi://pay?pa=merchant@upi&pn=Merchant%20Name&mc=1234&tid=${uuidv4()}&tr=${uuidv4()}&tn=Payment%20for%20${selectedProduct.name}&am=${selectedProduct.price}&cu=INR&url=`;
    setUpiQRCode(qrData);
    setTransactionId(uuidv4());
  };

  const handleSuccess = () => {
    setPaymentStatus('success');
  };

  const handleFailure = () => {
    setPaymentStatus('failure');
  };

  const handleDownload = () => {
    if (paymentStatus === 'success') {
      const doc = new jsPDF();
 
      doc.setFontSize(18);
      doc.text('Payment Receipt', 20, 20);
 
      doc.setFontSize(12);
      doc.text(`Product Name: ${selectedProduct.name}`, 20, 40);
      doc.text(`Product Size: ${selectedSize}`, 20, 50);
      doc.text(`Price: ₹${selectedProduct.price}`, 20, 60);
      doc.text(`Delivery Method: ${deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'}`, 20, 70);
      doc.text(`Transaction ID: ${transactionId}`, 20, 80);
      doc.text(`Payment Status: ${paymentStatus === 'success' ? 'Successful' : 'Failed'}`, 20, 90);

      const receiptFileName = `Receipt-${transactionId}.pdf`;
      doc.save(receiptFileName);

      // After downloading, send the receipt by email
      sendEmail(receiptFileName);
    }
  };

  // Function to send email using EmailJS
  const sendEmail = (receiptFileName) => {
    if (userEmail) {
      // Convert PDF to base64 to send as an attachment (we'll simulate this)
      const receiptBase64 = 'data:application/pdf;base64,' + btoa('dummy-pdf-content'); // Replace with actual base64 of PDF
      
      // Send email using EmailJS
      const templateParams = {
        to_email: userEmail,
        subject: 'Payment Receipt',
        message: `Thank you for your purchase! Here is your payment receipt.`,
        attachment: receiptBase64,
      };

      emailjs.send(
        'service_gsj3x6u', 
        'template_8vukyhx',  
        templateParams,
        'iS2cCyhwe6H1DvebJ'  
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert(`Receipt has been sent to ${userEmail}`);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('There was an error sending your receipt via email. Please try again.');
      });
    } else {
      alert('Please provide your email address.');
    }
  }

  

  return (
    <section id='works'>
      <div className="container">
      <h1>Product Selection</h1>

      {/* Product Display */}
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductSelect(product)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>

      {/* Product Details and Size Selection */}
      {selectedProduct && (
        <div className="product-details">
          <h2>{selectedProduct.name}</h2>
          <img src={selectedProduct.image} alt={selectedProduct.name} />
          <p>{selectedProduct.description}</p>
          <p>Price: ₹{selectedProduct.price}</p>

          <h3>Select Size:</h3>
          {sizes.map((size) => (
            <button key={size} onClick={() => handleSizeSelect(size)}>
              {size}
            </button>
          ))}

          {/* Delivery method selection */}
          <h3>Select Delivery Method:</h3>
          <div>
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="delivery"
                checked={deliveryMethod === 'delivery'}
                onChange={() => setDeliveryMethod('delivery')}
              />
              Delivery
            </label>
            <label>
              <input
                type="radio"
                name="deliveryMethod"
                value="pickup"
                checked={deliveryMethod === 'pickup'}
                onChange={() => setDeliveryMethod('pickup')}
              />
              Pickup
            </label>
          </div>

          <button onClick={handleUPIPay}>UPI Pay</button>
        </div>
      )}

      {/* UPI QR Code Section */}
      {upiQRCode && (
        <div className="qr-code-section">
          <QRCode value={upiQRCode} />
          <p>Scan the QR code to make the payment</p>
          <p>Timer: {Math.floor(timer / 60)}:{timer % 60}</p>
          <div>
            <button onClick={handleSuccess}>Success</button>
            <button onClick={handleFailure}>Failure</button>
          </div>
        </div>
      )}

      {/* Email Input for Receipt */}
      {paymentStatus === 'success' && (
        <div>
          <h3>Enter Your Email Address to Receive the Receipt:</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button onClick={handleDownload}>Download PDF Receipt & Send Email</button>
        </div>
      )}

      {/* Failure or Pending Status */}
      {paymentStatus === 'failure' && (
        <div>
          <p>Payment Failed. Please try again.</p>
        </div>
      )}
    </div>
    </section>
  );
};

export default Works;
