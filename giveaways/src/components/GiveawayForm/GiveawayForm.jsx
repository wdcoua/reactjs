import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import './GiveawayForm.css'; // Підключення файлу стилів

function GiveawayForm({ handleInstagramAuth }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Логіка обробки відправки форми
    };

    return (
        <div className="giveaway-form-container">
            <div className="auth-icons">
                <FaInstagram className="auth-icon" onClick={handleInstagramAuth} />
                <FaYoutube className="auth-icon" />
                <FaTiktok className="auth-icon" />
            </div>
            <h2 className="giveaway-form-title">Участь в розіграші</h2>
            <form onSubmit={handleSubmit} className="giveaway-form">
                <div className="form-group">
                    <label htmlFor="postLink" className="form-label">Посилання на пост з Giveaway:</label>
                    <input type="text" id="postLink" name="postLink" className="form-input" required />
                </div>
                <button type="submit" className="form-submit-btn">Подати заявку</button>
            </form>
        </div>
    );
}

export default GiveawayForm;
