import './Qrcode.css';


function Qrcode() {

    return (
      <div className="qrCard">
        <div className='image'>
          <img
            src="https://image.shutterstock.com/image-vector/vector-qr-code-sample-smartphone-600w-521220724.jpg"
            alt="qr-image" width={410}></img>
        </div>
        <div className="cardText">
          <h4>Improve your front-end skills by building projects.</h4>
          <p>
            Scan the QR code to visit Frontend Mentors and take your coding
            skills to the next level.
          </p>
        </div>
      </div>
    );
    
}

export default Qrcode;