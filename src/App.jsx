import React from 'react';
import './App.css';

function App() {
  // ข้อมูลเมนูแนะนำ 3 รายการ
  const recommendedMenu = [
    {
      id: 1,
      name: 'Dirty Coffee',
      price: '85 ฿',
      image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 2,
      name: 'Matcha Latte',
      price: '90 ฿',
      image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=60'
    },
    {
      id: 3,
      name: 'Homemade Croissant',
      price: '75 ฿',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=60'
    }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">My Favorite Cafe</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Homnual Cafe (หอมนวล คาเฟ่)</h1>
          <p>“คาเฟ่เล็ก ๆ บรรยากาศดี กาแฟอร่อย อบอุ่นเหมือนอยู่บ้าน”</p>
        </div>
      </section>

      {/* About Cafe */}
      <section id="about" className="section about">
        <h2>About Cafe</h2>
        <h3>หอมนวล คาเฟ่ (Homnual Cafe)</h3>
        <p className="location"><strong>ที่ตั้ง:</strong> อำเภอเมือง จังหวัดสระบุรี</p>
        <p className="highlight"><strong>จุดเด่น:</strong> กาแฟคั่วพิเศษรสชาติเข้มข้น ขนมโฮมเมดอบใหม่วันต่อวัน และบรรยากาศร้านสไตล์มินิมอลเน้นโทนไม้สบายตา</p>
        <p className="description">
          หอมนวล คาเฟ่ เป็นคาเฟ่สไตล์โฮมมี่ใจกลางเมืองสระบุรี ที่ตั้งใจเสิร์ฟเครื่องดื่มคุณภาพและเบเกอรี่ทำเองด้วยความใส่ใจ 
          เหมาะสำหรับการมานั่งทำงาน พักผ่อน หรือพบปะพูดคุยกับเพื่อนฝูงในวันสบาย ๆ
        </p>
      </section>

      {/* Recommended Menu */}
      <section id="menu" className="section menu">
        <h2>เมนูแนะนำ</h2>
        <div className="menu-grid">
          {recommendedMenu.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <div className="contact-info">
          <p><strong>ที่อยู่:</strong> อ.เมืองสระบุรี จ.สระบุรี 18000</p>
          <p><strong>เวลาเปิด–ปิด:</strong> เปิดบริการทุกวัน 08:00 – 17:00 น.</p>
          <p><strong>Facebook / Instagram:</strong> @homnualcafe</p>
          <p><strong>เบอร์โทรศัพท์:</strong> 081-234-5678</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 My Favorite Cafe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;