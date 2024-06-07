import React, { useEffect } from 'react';
import './styles.css';
import AppNavbar from './Navbar';

function App() {
  useEffect(() => {
    const form = document.getElementById('example-form');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      if (!name || !email || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
      }

      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailPattern.test(email)) {
        alert('Lütfen geçerli bir e-posta adresi girin.');
        return;
      }

      alert('Form başarıyla gönderildi!');
      form.reset();
    });

    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach((item) => {
      item.addEventListener('click', () => {
        alert(item.textContent + ' tıklandı!');
      });
    });

    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
      alert('Butona tıklandı!');
    });
  }, []);

  return (
    <div>
      <AppNavbar />
      <div className="container">
        <h1 id="main-title">Merhaba, Dünya!</h1>
        <p id="intro-text">Bu bir örnek web sayfasıdır.</p>
        <h1>This is a Heading</h1>
        <p>This is a paragraph.</p>
        <h2>HTML Image</h2>
        <br />
        <img className="img" src="/pic_trulli.png" alt="Trulli" width="500" height="333" />
        <br />
        <br />
        <button className="button" onClick={() => alert('Butona tıklandı!')}>Bir Buton</button>
        <br />
        <br />
        <h2>Background Image</h2>
        <p>A background image for a p element:</p>
        <p className="background-image-paragraph">
          You can specify background images<br />
          for any visible HTML element.<br />
          In this example, the background image<br />
          is specified for a p element.<br />
          By default, the background-image<br />
          will repeat itself in the direction(s)<br />
          where it is smaller than the element<br />
          where it is specified. (Try resizing the<br />
          browser window to see how the<br />
          background image behaves.
        </p>
        <form id="example-form">
          <label htmlFor="name">İsim:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Mesaj:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit" className="button">Gönder</button>
        </form>
        <ul id="example-list">
          <li className="list-item">Liste Elemanı 1</li>
          <li className="list-item">Liste Elemanı 2</li>
          <li className="list-item">Liste Elemanı 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
