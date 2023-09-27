import ContentBox from "@/components/content_box";
import ContactForm from "@/components/form/contact_form";
import {
    faEnvelope,
    faLocationDot,
    faPhone
} from '@fortawesome/free-solid-svg-icons';

export default function ContactSection() {
    const linkText = process.env.APP_EMAIL ?? '';
    const emailLink = `mailto:${linkText}`;
    const locationLink = 'https://goo.gl/maps/cALEZCxPauBCsxwH9';

    return (
        <div className="section contacts" data-scroll-target="true">
            <div className="content">
                <div className="service-items">
                    <ContentBox
                        icon={faPhone}
                        name="Phone"
                        linkHref="tel:085159997670"
                        linkText="+62 851-5999-7670"
                    />
                    <ContentBox
                        icon={faLocationDot}
                        name="Address"
                        linkHref={locationLink}
                        linkText="Surabaya, Jawa Timur, Indonesia"
                    />
                    <ContentBox
                        icon={faEnvelope}
                        name="Email"
                        linkHref={emailLink}
                        linkText={linkText}
                    />
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
}
