import React from 'react';

const Contact = () => (
    <>
        <section id="contact_area" className="contact_area">
            <div className="row">
                <div className="column2">
                    <div className="contfrm">
                        <h3 className="contact_title">Contact Me</h3>
                        <form action="#" name="Contact_Form">
                            <label className="input_title" htmlFor="fname">Full Name</label><br />
                            <input type="text" name="fname" placeholder="Type Your Full Name" /><br />
                            <label className="input_title" htmlFor="email">Email</label><br />
                            <input type="text" name="email" placeholder="Type Your Email Address" /><br />
                            <label className="input_title" htmlFor="message">Message</label><br />
                            <textarea type="text" name="message" id="" cols="60" rows="10" placeholder="Type Your Message..."></textarea><br />

                            <label className="radio_container">Buyer
                                <input type="radio" name="radio" id="" value="Buyer" checked />
                                <span className="checkmark"></span>
                            </label>

                            <label className="radio_container">Developer
                                <input type="radio" name="radio" id="" value="Developer" />
                                <span className="checkmark"></span>
                            </label>

                            <label className="radio_container">Student
                                <input type="radio" name="radio" id="" value="Student" />
                                <span className="checkmark"></span>
                            </label>

                            <label className="radio_container">Others
                                <input type="radio" name="radio" id="" value="Others" />
                                <span className="checkmark"></span>
                            </label>
                            <br />
                            <input type="submit" name="send" value="Send Message" id="" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Contact;
