import React, {useRef, useState} from "react";

const ContactForm: React.FC = () => {
    const [result, setResult] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setResult("Sending....");
        const formData = new FormData(event.target as HTMLFormElement);

        formData.append("access_key", "52fecdc2-5b63-4ec3-af40-ba5b66d33ab0");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            await handleResponse(response);
        } catch (error) {
            console.error("Error:", error);
            setResult("An error occurred while submitting the form.");
        }
    };

    const handleResponse = async (response: Response) => {
        if (response.ok) {
            const data = await response.json();
            console.log("Success", data);
            setResult("Thanks, your message is sent successfully. We will contact you shortly!");
            if (formRef.current) {
                formRef.current.reset();
            }
        } else {
            console.error("Failed to submit form");
            setResult("Failed to submit form");
        }
    };

    return (
        <>
            <div className="contact_form">
                <form name="contact" ref={formRef} onSubmit={handleSubmit}>
                    <div className="group-val">
                        <input type="text" name="name" placeholder="Name" required/>
                    </div>
                    <div className="group-val">
                        <input type="email" name="email" placeholder="Email" required/>
                    </div>
                    <div className="group-val ct-gr">
                        <textarea name="message" placeholder="Message" required/>
                    </div>
                    <button className="btn fill mouse-hover" type="submit" data-text="Send Message">Send Message
                    </button>
                </form>
                {result && <p>{result}</p>}
            </div>
        </>
    );
};

export default ContactForm;