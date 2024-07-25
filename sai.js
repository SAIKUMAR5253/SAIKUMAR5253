WEEK-4

DAY-3

AdminDashboard.jsx

import React from 'react';
import './AdminDashboard.css'; // Assuming you have corresponding CSS file

const AdminDashboard = () => {
    return (
        <div className="dashboard">
            <header className="header">
                <div className="logo">a</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Menu</a>
                    <a href="#">Tables</a>
                    <a href="#">Users</a>
                    <a href="#">Payments</a>
                </nav>
                <div className="profile">
                    <img src="profile.jpg" alt="Profile" />
                </div>
            </header>
            <div className="stats">
                <div className="stat-card total-amount">
                    <h3>Total Amount</h3>
                    <p>₹163.00/-</p>
                </div>
                <div className="stat-card total-users">
                    <h3>Total No. of Users</h3>
                    <p>2</p>
                </div>
                <div className="stat-card total-dishes">
                    <h3>Total No. of Dishes</h3>
                    <p>3</p>
                </div>
                <div className="stat-card total-tables">
                    <h3>Total No. of Tables</h3>
                    <p>7</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
________________________________________________________________________
________________________________________________________________________
AdmiNDashboard.css

.dashboard {
    width: 100%;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
}

.profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.stats {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.stat-card {
    width: 23%;
    padding: 20px;
    border-radius: 8px;
    color: white;
    text-align: center;
}

.total-amount {
    background-color: #9c27b0;
}

.total-users {
    background-color: #e91e63;
}

.total-dishes {
    background-color: #2196f3;
}

.total-tables {
    background-color: #3f51b5;
}
__________________________________________________________________________
__________________________________________________________________________

AdminPaymentsComponent.jsx

import React, { useState } from 'react';
import './AdminPayments.css'; // Assuming you have corresponding CSS file

const AdminPaymentsComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const paymentsData = [
        { name: 'Prasanth', email: 'prasanth.s@iamneo.ai', phone: '9999999999', spent: '₹163/-', status: 'successful' }
    ];

    const filteredPayments = paymentsData.filter(payment => 
        payment.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        payment.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dashboard">
            <header className="header">
                <div className="logo">a</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Menu</a>
                    <a href="#">Tables</a>
                    <a href="#">Users</a>
                    <a href="#">Payments</a>
                </nav>
                <div className="profile">
                    <img src="profile.jpg" alt="Profile" />
                </div>
            </header>
            <div className="payments">
                <h2>Payments</h2>
                <h3>Total Payment: ₹163/-</h3>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>PhoneNo</th>
                            <th>Spent</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.name}</td>
                                <td>{payment.email}</td>
                                <td>{payment.phone}</td>
                                <td>{payment.spent}</td>
                                <td>{payment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPaymentsComponent;
___________________________________________________________________________
___________________________________________________________________________

AdminPayments.css

.dashboard {
    width: 100%;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
}

.profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.payments {
    margin-top: 20px;
}

.payments h2, .payments h3 {
    margin: 10px 0;
}

.payments input {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead th {
    border-bottom: 1px solid #ddd;
    padding: 10px;
}

tbody td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
__________________________________________________________________________
__________________________________________________________________________

AdminTable.jsx

import React, { useState } from 'react';
import './AdminTable.css'; // Assuming you have corresponding CSS file

const AdminTable = () => {
    const [tables, setTables] = useState([
        { id: 1, available: true },
        { id: 2, available: true },
        { id: 3, available: false },
        { id: 4, available: true },
        { id: 5, available: true },
        { id: 6, available: true },
        { id: 7, available: true },
    ]);

    const addNewTable = () => {
        const newTable = { id: tables.length + 1, available: true };
        setTables([...tables, newTable]);
    };

    const toggleAvailability = (id) => {
        setTables(tables.map(table => 
            table.id === id ? { ...table, available: !table.available } : table
        ));
    };

    return (
        <div className="dashboard">
            <header className="header">
                <div className="logo">a</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Menu</a>
                    <a href="#">Tables</a>
                    <a href="#">Users</a>
                    <a href="#">Payments</a>
                </nav>
                <div className="profile">
                    <img src="profile.jpg" alt="Profile" />
                </div>
            </header>
            <div className="tables">
                <h2>Tables</h2>
                <button onClick={addNewTable}>+ Add New Table</button>
                <div className="table-container">
                    {tables.map((table) => (
                        <div key={table.id} className="table">
                            <div className="table-icon">{table.id}</div>
                            <p>Mark as Un-Available</p>
                            <input 
                                type="checkbox" 
                                checked={!table.available}
                                onChange={() => toggleAvailability(table.id)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminTable;
_________________________________________________________________________________
_________________________________________________________________________________

AdminTable.css

.dashboard {
    width: 100%;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
}

.profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.tables {
    margin-top: 20px;
}

.tables h2 {
    margin: 10px 0;
}

.tables button {
    margin: 10px 0;
    padding: 10px 20px;
    cursor: pointer;
}

.table-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.table {
    width: 150px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
}

.table-icon {
    font-size: 24px;
    margin-bottom: 10px;
}

.table p {
    margin: 10px 0;
}

.table input {
    cursor: pointer;
}
______________________________________________________________________________
______________________________________________________________________________

DAY-4

TableSelection.jsx

import React, { useState } from 'react';
import './TableSelection.css'; // Assuming you have corresponding CSS file

const TableSelection = () => {
    const [selectedTable, setSelectedTable] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [meal, setMeal] = useState("Lunch");

    const tables = [
        { id: 1, status: 'Vacant' },
        { id: 2, status: 'Vacant' },
        { id: 3, status: 'Vacant' },
        { id: 4, status: 'Booked' },
        { id: 5, status: 'Vacant' },
        { id: 6, status: 'Vacant' },
        { id: 7, status: 'Vacant' },
    ];

    const handleTableClick = (id) => {
        setSelectedTable(id);
    };

    const handleOrderClick = () => {
        if (selectedTable) {
            setShowModal(true);
        }
    };

    const handleProceedToOrder = () => {
        // Logic to proceed to order page
        setShowModal(false);
    };

    return (
        <div className="dashboard">
            <header className="header">
                <div className="logo">a</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Menu</a>
                    <a href="#">Tables</a>
                    <a href="#">Users</a>
                    <a href="#">Payments</a>
                </nav>
                <div className="profile">
                    <img src="profile.jpg" alt="Profile" />
                </div>
            </header>
            <div className="tables">
                {tables.map((table) => (
                    <div 
                        key={table.id} 
                        className={`table ${selectedTable === table.id ? 'selected' : ''}`}
                        onClick={() => handleTableClick(table.id)}
                    >
                        <div className="table-icon">{`T${table.id}`}</div>
                        <p>{table.status}</p>
                    </div>
                ))}
            </div>
            <div className="selected-table-info">
                {selectedTable && <p>Selected table: {selectedTable}</p>}
                <button onClick={handleOrderClick} disabled={!selectedTable}>Select & Order food</button>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Select preferred date and time</h3>
                        <input 
                            type="date" 
                            value={selectedDate} 
                            onChange={(e) => setSelectedDate(e.target.value)} 
                        />
                        <div className="meal-selection">
                            <button onClick={() => setMeal('Lunch')} className={meal === 'Lunch' ? 'selected' : ''}>Lunch</button>
                            <button onClick={() => setMeal('Dinner')} className={meal === 'Dinner' ? 'selected' : ''}>Dinner</button>
                        </div>
                        <input 
                            type="time" 
                            value={selectedTime} 
                            onChange={(e) => setSelectedTime(e.target.value)} 
                        />
                        <div className="modal-actions">
                            <button onClick={() => setShowModal(false)}>Close</button>
                            <button onClick={handleProceedToOrder}>Proceed to order</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TableSelection;
______________________________________________________________________________
______________________________________________________________________________

orderPage.jsx

import React, { useState } from 'react';
import './OrderPage.css'; // Assuming you have corresponding CSS file

const OrderPage = () => {
    const [orderItems, setOrderItems] = useState([
        { name: 'Chicken Biryani', price: 100, quantity: 1 },
        { name: 'Chicken', price: 13, quantity: 1 }
    ]);

    const handleQuantityChange = (index, change) => {
        const newOrderItems = [...orderItems];
        newOrderItems[index].quantity += change;
        if (newOrderItems[index].quantity < 1) {
            newOrderItems[index].quantity = 1;
        }
        setOrderItems(newOrderItems);
    };

    const handleRemoveItem = (index) => {
        const newOrderItems = orderItems.filter((_, i) => i !== index);
        setOrderItems(newOrderItems);
    };

    const subTotal = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const serviceCharges = 50; // Static for example
    const totalPayables = subTotal + serviceCharges;

    return (
        <div className="order-page">
            <header className="header">
                <div className="logo">a</div>
                <nav className="nav">
                    <a href="#">Starters</a>
                    <a href="#">Main Course</a>
                    <a href="#">Deserts</a>
                    <a href="#">Beverages</a>
                </nav>
            </header>
            <div className="order-container">
                <div className="menu">
                    {/* Add logic to dynamically generate menu items */}
                    <div className="menu-item">
                        <div className="item-info">
                            <h4>Chicken Biryani</h4>
                            <p>This is a tasty biryani</p>
                            <p>₹100.00</p>
                        </div>
                        <div className="item-actions">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="preview-order">
                    <h3>Preview Order</h3>
                    {orderItems.map((item, index) => (
                        <div key={index} className="order-item">
                            <p>{item.name}</p>
                            <div className="order-actions">
                                <button onClick={() => handleQuantityChange(index, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleQuantityChange(index, 1)}>+</button>
                                <span>₹{item.price * item.quantity}</span>
                                <button onClick={() => handleRemoveItem(index)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="order-summary">
                        <p>Sub Total: ₹{subTotal}</p>
                        <p>Service Charges: ₹{serviceCharges}</p>
                        <p>Total Payables: ₹{totalPayables}</p>
                    </div>
                    <button className="proceed-button">Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default OrderPage;
_____________________________________________________________________________
_____________________________________________________________________________

TableSelection.css

.dashboard {
    width: 100%;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
}

.profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.tables {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.table {
    width: 100px;
    height: 100px;
    border: 1px solid #ddd;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.table.selected {
    border-color: blue;
}

.table-icon {
    font-size: 24px;
    margin-bottom: 10px;
}

.selected-table-info {
    margin-top: 20px;
}

.selected-table-info button {
    padding: 10px 20px;
    cursor: pointer;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
}

.meal-selection button {
    margin: 0 5px;
    padding: 10px 20px;
    cursor: pointer;
}

.meal-selection .selected {
    background: #007bff;
    color: white;
}

.modal-actions button {
    margin: 10px 5px;
    padding: 10px 20px;
    cursor: pointer;
}
_____________________________________________________________________________
_____________________________________________________________________________
OrderPage.css

.order-page {
    width: 100%;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
}

.order-container {
    display: flex;
    margin-top: 20px;
}

.menu {
    flex: 2;
    padding: 20px;
}

.menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.item-info {
    flex: 1;
}

.item-actions {
    display: flex;
    align-items: center;
}

.item-actions button {
    padding: 5px 10px;
    cursor: pointer;
}

.preview-order {
    flex: 1;
    padding: 20px;
    border-left: 1px solid #ddd;
}

.order-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.order-actions {
    display: flex;
    align-items: center;
}

.order-actions button {
    padding: 5px 10px;
    cursor: pointer;
}

.order-summary {
    margin-top: 20px;
}

.proceed-button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
}
________________________________________________________________________
________________________________________________________________________

DAY-5

PaymentPage.jsx

import React, { useState } from 'react';
import './PaymentPage.css'; // Assuming you have corresponding CSS file

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    const [errors, setErrors] = useState({});
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);
    const [feedback, setFeedback] = useState({ rating: 5, description: '' });

    const validate = () => {
        const newErrors = {};
        if (!cardNumber || cardNumber.length !== 16) {
            newErrors.cardNumber = 'Invalid card number (must be 16 digits)';
        }
        if (!cvv || cvv.length !== 3) {
            newErrors.cvv = 'Invalid CVV (must be 3 digits)';
        }
        if (!expiryDate || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
            newErrors.expiryDate = 'Invalid expiry date (MM/YY format)';
        }
        if (!nameOnCard) {
            newErrors.nameOnCard = 'Card name is required';
        }
        return newErrors;
    };

    const handleCheckout = () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setShowFeedbackModal(true);
        }
    };

    const handleSubmitFeedback = () => {
        if (feedback.description) {
            alert('Thank you for your feedback!');
            setShowFeedbackModal(false);
        } else {
            setErrors({ feedback: 'Feedback is required' });
        }
    };

    return (
        <div className="payment-page">
            <header className="header">
                <div className="logo">a</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Menu</a>
                    <a href="#">Tables</a>
                    <a href="#">Users</a>
                    <a href="#">Payments</a>
                </nav>
                <div className="profile">
                    <img src="profile.jpg" alt="Profile" />
                </div>
            </header>
            <div className="payment-methods">
                <h2>Choose your payment method</h2>
                <div className="methods">
                    <button>Credit Card</button>
                    <button>UPI</button>
                    <button>Cash</button>
                    <button>E-Wallet</button>
                </div>
                <div className="payment-form">
                    <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
                    <input
                        type="text"
                        placeholder="CVV Number"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                    />
                    {errors.cvv && <span className="error">{errors.cvv}</span>}
                    <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />
                    {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
                    <input
                        type="text"
                        placeholder="Name On Card"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                    />
                    {errors.nameOnCard && <span className="error">{errors.nameOnCard}</span>}
                </div>
                <div className="summary">
                    <h3>Summary</h3>
                    <p>Sub Total: ₹113/-</p>
                    <p>Service Charges: ₹50/-</p>
                    <p>Total Payables: ₹163/-</p>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>Check Out</button>
            </div>

            {showFeedbackModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Please provide feedback</h3>
                        <div className="rating">
                            <span>Rating:</span>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className={feedback.rating >= star ? 'star selected' : 'star'} onClick={() => setFeedback({ ...feedback, rating: star })}>★</span>
                            ))}
                        </div>
                        <textarea
                            placeholder="Enter description"
                            value={feedback.description}
                            onChange={(e) => setFeedback({ ...feedback, description: e.target.value })}
                        />
                        {errors.feedback && <span className="error">{errors.feedback}</span>}
                        <div className="modal-actions">
                            <button onClick={() => setShowFeedbackModal(false)}>Close</button>
                            <button onClick={handleSubmitFeedback}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
___________________________________________________________________________
___________________________________________________________________________

PaymentPage.css

.payment-page {
    width: 100%;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
}

.payment-methods {
    margin-top: 20px;
}

.payment-methods h2 {
    margin-bottom: 10px;
}

.methods {
    display: flex;
    gap: 10px;
}

.methods button {
    padding: 10px;
    cursor: pointer;
}

.payment-form {
    margin-top: 20px;
}

.payment-form input {
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

.summary {
    margin-top: 20px;
}

.checkout-button {
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
}

.rating .star {
    font-size: 24px;
    cursor: pointer;
}

.rating .selected {
    color: gold;
}

.error {
    color: red;
    font-size: 12px;
}

.modal-actions button {
    margin: 10px 5px;
    padding: 10px 20px;
    cursor: pointer;
}
______________________________________________________________________________
______________________________________________________________________________

Register.jsx

import React, { useState } from 'react';
import './Register.css'; // Assuming you have corresponding CSS file

const Register = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        phoneNo: '',
        password: '',
        role: 'User'
    });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!form.fullName) {
            newErrors.fullName = 'Full Name is required';
        }
        if (!form.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!form.phoneNo) {
            newErrors.phoneNo = 'Phone No is required';
        } else if (!/^\d{10}$/.test(form.phoneNo)) {
            newErrors.phoneNo = 'Invalid phone number (10 digits required)';
        }
        if (!form.password) {
            newErrors.password = 'Password is required';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(form.password)) {
            newErrors.password = 'Password must be 8 characters or more and include at least one uppercase, one lowercase, one special character, and one number';
        }
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Logic to handle form submission
            console.log('Form submitted', form);
        }
    };

    return (
        <div className="register-page">
            <div className="form-container">
                <h2>Create Account</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name*</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                        />
                        {errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNo">Phone No*</label>
                        <input
                            type="text"
                            id="phoneNo"
                            name="phoneNo"
                            value={form.phoneNo}
                            onChange={handleChange}
                        />
                        {errors.phoneNo && <span className="error">{errors.phoneNo}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <label>Role</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="User"
                                    checked={form.role === 'User'}
                                    onChange={handleChange}
                                />
                                User
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="role"
                                    value="Admin"
                                    checked={form.role === 'Admin'}
                                    onChange={handleChange}
                                />
                                Admin
                            </label>
                        </div>
                    </div>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <a href="/login">Sign in</a></p>
            </div>
            <div className="image-container">
                <img src="food-image.jpg" alt="Food" />
            </div>
        </div>
    );
};

export default Register;
________________________________________________________________________________
________________________________________________________________________________

Register.css

.register-page {
    display: flex;
    width: 100%;
    padding: 20px;
}

.form-container {
    flex: 1;
    padding: 20px;
}

.image-container {
    flex: 1;
}

.image-container img {
    width: 100%;
    height: auto;
}

h2 {
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.radio-group {
    display: flex;
    gap: 10px;
}

.radio-group label {
    display: flex;
    align-items: center;
    gap: 5px;
}

button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
}

.error {
    color: red;
    font-size: 12px;
}

p {
    margin-top: 20px;
}

p a {
    color: #007bff;
    text-decoration: none;
}
_________________________________________________________________________
_________________________________________________________________________

DAY-6

AdmnMenuComponent.jsx

import React, { useState } from 'react';
import './AdminMenuComponent.css'; // Assuming you have corresponding CSS file

const AdminMenuComponent = () => {
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: 'Chicken', category: 'main course', price: 13.00, status: 'Available' },
        { id: 2, name: 'Chicken Biryani', category: 'main course', price: 100.00, status: 'Available' },
        { id: 3, name: 'Carrot Halwa', category: 'deserts', price: 50.00, status: 'Unavailable' }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [newItem, setNewItem] = useState({
        image: '',
        name: '',
        category: '',
        subCategory: '',
        description: '',
        price: '',
        status: 'Available'
    });
    const [errors, setErrors] = useState({});

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMenuItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const validateNewItem = () => {
        const newErrors = {};
        if (!newItem.image) newErrors.image = 'Image selection is required';
        if (!newItem.name) newErrors.name = 'Item Name is required';
        if (!newItem.category) newErrors.category = 'Item Category is required';
        if (!newItem.subCategory) newErrors.subCategory = 'Sub Category is required';
        if (!newItem.description) newErrors.description = 'Description is required';
        if (!newItem.price || isNaN(newItem.price) || newItem.price <= 0) newErrors.price = 'Price should be greater than 0';
        return newErrors;
    };

    const handleNewItemChange = (e) => {
        const { name, value } = e.target;
        setNewItem({
            ...newItem,
            [name]: value
        });
    };

    const handleAddNewItem = () => {
        const validationErrors = validateNewItem();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setMenuItems([...menuItems, { ...newItem, id: menuItems.length + 1 }]);
            setShowModal(false);
            setNewItem({
                image: '',
                name: '',
                category: '',
                subCategory: '',
                description: '',
                price: '',
                status: 'Available'
            });
            setErrors({});
        }
    };

    return (
        <div className="dashboard">
            <header className="header">
                <div className="logo">a</div>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Menu</a>
                    <a href="#">Tables</a>
                    <a href="#">Users</a>
                    <a href="#">Payments</a>
                </nav>
                <div className="profile">
                    <img src="profile.jpg" alt="Profile" />
                </div>
            </header>
            <div className="menu-section">
                <h2>Menu Items</h2>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={handleSearch} 
                />
                <button className="new-item-button" onClick={() => setShowModal(true)}>+ New Item</button>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMenuItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>₹{item.price.toFixed(2)}</td>
                                <td>
                                    <input 
                                        type="checkbox" 
                                        checked={item.status === 'Available'} 
                                        readOnly 
                                    />
                                    {item.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Add New Item</h3>
                        <div className="form-group">
                            <label>Image</label>
                            <input
                                type="text"
                                name="image"
                                value={newItem.image}
                                onChange={handleNewItemChange}
                            />
                            {errors.image && <span className="error">{errors.image}</span>}
                        </div>
                        <div className="form-group">
                            <label>Item Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newItem.name}
                                onChange={handleNewItemChange}
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label>Item Category</label>
                            <input
                                type="text"
                                name="category"
                                value={newItem.category}
                                onChange={handleNewItemChange}
                            />
                            {errors.category && <span className="error">{errors.category}</span>}
                        </div>
                        <div className="form-group">
                            <label>Sub Category</label>
                            <input
                                type="text"
                                name="subCategory"
                                value={newItem.subCategory}
                                onChange={handleNewItemChange}
                            />
                            {errors.subCategory && <span className="error">{errors.subCategory}</span>}
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                name="description"
                                value={newItem.description}
                                onChange={handleNewItemChange}
                            />
                            {errors.description && <span className="error">{errors.description}</span>}
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input
                                type="text"
                                name="price"
                                value={newItem.price}
                                onChange={handleNewItemChange}
                            />
                            {errors.price && <span className="error">{errors.price}</span>}
                        </div>
                        <button onClick={handleAddNewItem}>Add</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminMenuComponent;
_____________________________________________________________________________
_____________________________________________________________________________

AdmiMeuComponent.css

.dashboard {
    width: 100%;
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

.nav a {
    margin: 0 10px;
    text-decoration: none;
    color: black;
}

.profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
}

.menu-section {
    margin-top: 20px;
}

.menu-section h2 {
    margin-bottom: 10px;
}

.menu-section input {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

.new-item-button {
    padding: 10px 20px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead th {
    border-bottom: 1px solid #ddd;
    padding: 10px;
}

tbody td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

.error {
    color: red;
    font-size: 12px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer &#8203;:citation[oaicite:0]{index=0}&#8203;
}
______________________________________________________________________________
______________________________________________________________________________

ErrorComponent.jsx

import React from 'react';
import './ErrorComponent.css'; // Assuming you have corresponding CSS file

const ErrorComponent = () => {
    return (
        <div className="error-page">
            <div className="error-message">
                <h1>Something Went Wrong</h1>
                <p>We're sorry, but an error occurred. Please try again later.</p>
            </div>
        </div>
    );
};

export default ErrorComponent;
________________________________________________________________________________
_________________________________________________________________________________
ErrorComponent.css

.error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
}

.error-message {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.error-message h1 {
    color: red;
    font-size: 24px;
    margin-bottom: 10px;
}

.error-message p {
    color: #333;
    font-size: 16px;
}
_______________________________________________________________________________
_______________________________________________________________________________

Dont write this code ignore this code please....

Example of Using Try-Catch Blocks and Exception Handling
Here’s an example of how you might use the ErrorComponent in conjunction with a try-catch block for handling HTTP errors in an API request:

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ErrorComponent from './components/error/ErrorComponent';

const SomeComponent = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/some-endpoint');
                setData(response.data);
            } catch (err) {
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    if (err.response.status === 404 || err.response.status === 500) {
                        setError('Something Went Wrong');
                    }
                } else if (err.request) {
                    // The request was made but no response was received
                    setError('No response received');
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setError('Error in setting up request');
                }
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <ErrorComponent />;
    }

    return (
        <div>
            {/* Render your component data here */}
            {data && <div>{data.someField}</div>}
        </div>
    );
};

export default SomeComponent;

In this example, ErrorComponent is rendered if an error occurs during the API request.

Save the ErrorComponent.jsx in the directory src/components/error/ as specified. Ensure you have the necessary CSS adjustments according to your application's requirements. ​​

----------------------------------------------------------------------------
-----------------------------------------------------------------------------

WEEK-5

DAY-1

LoginComponent.jsx

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../toolkit/userSlice';
import './LoginComponent.css'; // Assuming you have corresponding CSS file

const LoginComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Dispatch login action
            dispatch(loginUser({ email, password }));
            // Clear form
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="login-page">
            <div className="form-container">
                <h2>Login to Your Account</h2>
                <p>Welcome back! Select method to login</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password*</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="rememberMe" name="rememberMe" />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>Forgot Password? <a href="/forgot-password">Forgot Password?</a></p>
                <p>Don't have an account? <a href="/register">Create an account</a></p>
            </div>
            <div className="image-container">
                <img src="restaurant-image.jpg" alt="Restaurant" />
            </div>
        </div>
    );
};

export default LoginComponent;
_________________________________________________________________________________
_________________________________________________________________________________

LoginComponent.css

.login-page {
    display: flex;
    width: 100%;
    padding: 20px;
}

.form-container {
    flex: 1;
    padding: 20px;
}

.image-container {
    flex: 1;
}

.image-container img {
    width: 100%;
    height: auto;
}

h2 {
    color: #333;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 20px;
}

.error {
    color: red;
    font-size: 12px;
}

p {
    margin-top: 20px;
}

p a {
    color: #007bff;
    text-decoration: none;
}
________________________________________________________________________
_________________________________________________________________________

App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from './components/auth/login/LoginComponent';
import RegisterComponent from './components/auth/register/RegisterComponent';
import AdminMenuComponent from './components/adminComponents/adminMenu/AdminMenuComponent';
import ErrorComponent from './components/error/ErrorComponent';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route path="/register" component={RegisterComponent} />
                    <Route path="/admin-menu" component={AdminMenuComponent} />
                    <Route component={ErrorComponent} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
____________________________________________________________________________
____________________________________________________________________________

store.js
Create a store.js file to configure the Redux store.

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './toolkit/userSlice';

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;


Save the LoginComponent.jsx in the directory src/components/auth/login/ and the userSlice.js in src/toolkit/ as specified. Ensure you have the necessary CSS adjustments according to your application's requirements. ​
___________________________________________________________________________
___________________________________________________________________________



