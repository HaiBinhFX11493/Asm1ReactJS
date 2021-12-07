import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components';


const BotTomFooter=styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
background-color: #04c8ee
`;
const GridBotTomFooter = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

`
function BotTomUI() {
    return <BotTomFooter>
        <div><h3>Our Addres</h3>
            <p>121,Clear Water Bay Road Clear Water Bay,Kowloon HONGKONG </p>
            <i class="fa fa-phone" aria-hidden="true">: +852 1234 5678</i>
            <i class="fa fa-fax" aria-hidden="true"> +852 8765 4321</i>
            <i class="fa fa-envelope" aria-hidden="true">confusion@food.net</i>
        </div>
        <GridBotTomFooter>
            <h1><a href="google.com"><i class="fa fa-google" aria-hidden="true"></i></a></h1>
            <h1> <a href="facebook.com"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></h1>
            <h1> <a href="https://www.skype.com"><i class="fa fa-skype" aria-hidden="true"></i></a></h1>
            <h1> <a href="https://www.youtube.com/"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></h1>
            <h1> <a href="https://mail.google.com/mail/u/0/?pli=1"><i class="fa fa-envelope-o" aria-hidden="true"></i></a></h1>
        </GridBotTomFooter>

    </BotTomFooter>
}
export default BotTomUI