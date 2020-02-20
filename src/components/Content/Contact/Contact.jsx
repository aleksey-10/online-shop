import React from 'react';

export default function Contact() {
    return (
        <div className="contact container">
            <header className="content-title" >Contact Us</header>
            <div id="contacts row">
                <div className="contact-items row col justify-content-around">
                    <div><i className="fas fa-paper-plane" aria-hidden="true"></i>
                        <a href="https://t.me/" className="navLink" rel="noopener noreferrer" target="_blank">Aleksey</a></div>
                    <div><i className="fas fa-envelope" aria-hidden="true"></i>
                        <a className="navLink" href="mailto:alexcare1337@gmail.com">some_email@gmail.com</a></div>
                    <div><i className="fas fa-mobile-alt" aria-hidden="true"></i>
                        <a className="navLink" href="tel:+380932657847">+38(093)-393-93-33</a></div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20326.065521301334!2d30.436714190356554!3d50.44560459199414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1576323955462!5m2!1sru!2sua"
                    title="contacts-map" className="w-100 google-map" height="300px" frameBorder="0" allowFullScreen=""></iframe>
            </div>
        </div>
    )
}