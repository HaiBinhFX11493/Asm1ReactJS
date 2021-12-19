import React from "react";
import 'font-awesome/css/font-awesome.min.css';



function BotTomUI() {
    return <div className="Footer">
        <div className="FooterChild1">
			<h3>Our Addres</h3>
            <p>121,Clear Water Bay Road Clear Water Bay,Kowloon HONGKONG </p>
            <i className="fa fa-phone" aria-hidden="true">: +852 1234 5678</i>
            <i className="fa fa-fax" aria-hidden="true"> +852 8765 4321</i>
            <i className="fa fa-envelope" aria-hidden="true">confusion@food.net</i>
        </div>
        <div className="FooterChild2">
            <div className="ContentSocial"><a href="google.com"><i className="fa fa-google" aria-hidden="true"></i></a></div>
            <div className="ContentSocial"> <a href="facebook.com"><i className="fa fa-facebook-official" aria-hidden="true"></i></a></div>
            <div className="ContentSocial"> <a href="https://www.skype.com"><i className="fa fa-skype" aria-hidden="true"></i></a></div>
            <div className="ContentSocial"> <a href="https://www.youtube.com/"><i className="fa fa-youtube-square" aria-hidden="true"></i></a></div>
            <div className="ContentSocial"> <a href="https://mail.google.com/mail/u/0/?pli=1"><i className="fa fa-envelope-o" aria-hidden="true"></i></a></div>
        </div>

    </div>

}
export default BotTomUI