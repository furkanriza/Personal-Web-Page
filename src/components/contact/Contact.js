import React from 'react';

const Contact = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <section id="contact_area" className="contact_area">
                <div className="row">
                    <div className="column2">
                        <br /><br /><br />
                        <div className="contfrm">
                            <h3 className="contact_title">Contact Me</h3>
                            <form onSubmit={handleSubmit} name="Contact_Form">
                                <label className="input_title" htmlFor="fname">Full Name</label><br />
                                <input type="text" name="fname" placeholder="Type Your Full Name" /><br />
                                <label className="input_title" htmlFor="email">Email</label><br />
                                <input type="text" name="email" placeholder="Type Your Email Address" /><br />
                                <label className="input_title" htmlFor="message">Message</label><br />
                                <textarea type="text" name="message" id="" cols="60" rows="10" placeholder="Type Your Message..."></textarea><br />
                                <br />
                                <div className="center_content">
                                    <input type="submit" name="send" value="Send Message" id="" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
