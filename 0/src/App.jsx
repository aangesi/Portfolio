import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ===== ЦИТАТЫ =====
  const quotes = [
    "«Программирование — это не наука, это искусство создавать то, чего ещё не существует.»",
    "«Код — это поэзия, написанная для машины, но прочитанная человеком.»",
    "«Технологии не стоят на месте — если ты не учишься, ты уже отстаёшь.»",
    "«Ошибка — это не провал, а путь к пониманию системы.»",
    "«Лучший способ предсказать будущее — создать его самому.» — Алан Кэй",
    "«Хороший программист пишет код, который понимает компьютер. Великий программист — код, который понимает человек.»",
    "«IT — это не просто работа, это способ думать логически и создавать мир из нуля.»",
    "«Сложность — враг. Простота — союзник.» — Стив Джобс",
    "«В мире технологий невозможно быть идеальным, но можно быть адаптивным.»",
    "«Каждая строка кода — это шаг к решению, а не к проблеме.»",
  ];

  const [text, setText] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  // ===== ЭФФЕКТ ПЕЧАТАНИЯ =====
  useEffect(() => {
    const currentQuote = quotes[quoteIndex];
    let timer;

    if (!isDeleting && text.length < currentQuote.length) {
      timer = setTimeout(() => setText(currentQuote.slice(0, text.length + 1)), speed);
    } else if (isDeleting && text.length > 0) {
      timer = setTimeout(() => setText(currentQuote.slice(0, text.length - 1)), speed / 2);
    } else if (!isDeleting && text.length === currentQuote.length) {
      timer = setTimeout(() => setIsDeleting(true), 2500); // пауза перед удалением
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, quoteIndex]);

  return (
    <div className="app">
      {/* ===== ШАПКА ===== */}
      <header className="header">
        <h1 className="logo">Портфолио</h1>
        <h1>Баршева Ангелина</h1>

        <div className="menu-container">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰ Меню
          </button>

          {menuOpen && (
            <nav className="nav-dropdown">
              <a href="#about" onClick={() => setMenuOpen(false)}>Обо мне</a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>Навыки</a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
              <a href="#achievements" onClick={() => setMenuOpen(false)}>Достижения</a>
              <a href="#education" onClick={() => setMenuOpen(false)}>Образование</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
            </nav>
          )}
        </div>
      </header>

      {/* ===== ВСТУПЛЕНИЕ ===== */}
      <section className="hero">
        <div className="hero-content">
          <h1>Я АНГЕЛИНА 💗</h1>
          <p className="typed-text">{text}</p>
          <a
            href="#about"
            className="hero-btn"
          >
            ОБО МНЕ
          </a>
        </div>
      </section>

      {/* ===== ОБО МНЕ ===== */}
      <section id="about" className="section about">
        <h2>Обо мне</h2>
              <p>Меня зовут <strong>Брешева Ангелина Александровна</strong>.</p>
            <p>
              Я — студентка 3 курса по специальности «Программное обеспечение IT» 
              в Республиканском Высшем Техническом колледже.
            </p>
            <p>
              С первых дней обучения меня вдохновляет мир информационных технологий. 
              Мне интересно создавать современные и удобные программы, 
              разрабатывать сайты и понимать, как работает программное обеспечение изнутри.
            </p>
            <p>
              Я постоянно развиваюсь в направлениях программирования, веб-разработки 
              и работы с базами данных. В своей работе стремлюсь не просто писать код, 
              а создавать продуманные и полезные решения, которые делают жизнь пользователей проще.
            </p>
            <p>
              Моя цель — стать профессиональным IT-разработчиком, принимать участие 
              в создании интересных и значимых проектов и вносить вклад 
              в развитие цифровых технологий будущего.
            </p>
      </section>

   {/* ===== НАВЫКИ ===== */}
<section id="skills" className="section skills">
  <h2>💡 Навыки</h2>

  <div className="skills-group">
    <h3>💻 Hard Skills</h3>
    <p>
      Я владею современными технологиями разработки и уверенно чувствую себя как в
      frontend-, так и в backend-направлении.  
      Мои технические навыки включают:
    </p>
    <ul>
      <li><strong>Языки программирования:</strong> Python, JavaScript, C#, Java</li>
      <li><strong>Фреймворки и библиотеки:</strong> React, Node.js, Flask</li>
      <li><strong>Инструменты разработки:</strong> Git, GitHub, Visual Studio Code, Figma</li>
      <li><strong>Базы данных:</strong> MySQL, MongoDB</li>
      <li><strong>Дополнительные компетенции:</strong> Работа с API, адаптивная вёрстка, тестирование, оптимизация кода</li>
    </ul>
    <p>
      Я стремлюсь писать чистый, понятный и поддерживаемый код, создавать удобные и
      современные интерфейсы, а также разрабатывать эффективные серверные решения.
    </p>
  </div>

  <div className="skills-group">
    <h3>🤝 Soft Skills</h3>
    <p>
      Я ценю командную работу и считаю, что успех проекта рождается из общения,
      поддержки и взаимопонимания между участниками.
    </p>
    <ul>
      <li>Умею работать в команде и помогать коллегам</li>
      <li>Ответственно подхожу к выполнению задач и соблюдению сроков</li>
      <li>Эффективно распределяю время и приоритеты</li>
      <li>Быстро осваиваю новые технологии и инструменты</li>
      <li>Внимательна к деталям и всегда стремлюсь к качественному результату</li>
    </ul>
    <p>

      Моя цель — постоянно развиваться как специалист, создавая проекты, которые
      приносят реальную пользу людям и вдохновляют других на новые идеи.
    </p>
  </div>
</section>


   {/* ===== ПРОЕКТЫ ===== */}
<section id="projects" className="section projects">
  <h2>📁 Мои проекты</h2>

  <div className="project-list">

    {/* 1️⃣ Доставка (продолжение) */}
    <div className="project-card">
      <h3>🚚 Доставка (продолжение)</h3>
      <p>Проект по разработке приложения для доставки. Реализован интерфейс, логика и структура данных.</p>
      <a
        href="https://github.com/aangesi/20.01.24/tree/main/%D0%94%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B4%D0%BE%D0%BB%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        🔗 Смотреть на GitHub
      </a>
    </div>

    {/* 2️⃣ Игра «Нажми» */}
    <div className="project-card">
      <h3>🎮 Игра «Нажми»</h3>
      <p>Весёлая мини-игра с реакцией и кликами. Разработана на Python с использованием библиотеки Pygame.</p>
      <a
        href="https://github.com/aangesi/20.01.24/tree/main/%D0%98%D0%B3%D1%80%D0%B0%20%22%D0%9D%D0%90%D0%96%D0%9C%D0%98%22"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        🔗 Смотреть на GitHub
      </a>
    </div>

    {/* 3️⃣ Курьерская доставка */}
    <div className="project-card">
      <h3>📦 Курьерская доставка</h3>
      <p>Система для управления доставкой заказов с удобным интерфейсом и базой данных.</p>
      <a
        href="https://github.com/aangesi/20.01.24/tree/main/%D0%9A%D1%83%D1%80%D1%8C%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        🔗 Смотреть на GitHub
      </a>
    </div>

    {/* 4️⃣ Угадай фильм */}
    <div className="project-card">
      <h3>🎬 Угадай фильм</h3>
      <p>Игра-викторина, где нужно угадывать фильмы по подсказкам. Написана на Python.</p>
      <a
        href="https://github.com/aangesi/20.01.24/tree/main/%D0%A3%D0%B3%D0%B0%D0%B4%D0%B0%D0%B9%20%D0%A4%D0%98%D0%9B%D0%AC%D0%9C"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        🔗 Смотреть на GitHub
      </a>
    </div>

    {/* 5️⃣ Чат с ботом */}
    <div className="project-card">
      <h3>💬 Чат с ботом</h3>
      <p>Интерактивный чат-бот с простым интерфейсом. Создан с использованием Python и AI-логики.</p>
      <a
        href="https://github.com/aangesi/20.01.24/tree/main/%D0%A7%D0%B0%D1%82%20%D1%81%20%D0%B1%D0%BE%D1%82%D0%BE%D0%BC"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        🔗 Смотреть на GitHub
      </a>
    </div>



  </div>
</section>
 


{/* ===== ДОСТИЖЕНИЯ ===== */}
<section id="achievements" className="section achievements">
  <h2>🏆 Достижения</h2>
  <p>Мои сертификаты и дипломы:</p>

  <div className="certificates">
    <a href="/src/assets/course_54_certificate_ru.pdf" target="_blank">
      <img src="/src/assets/course_54_certificate_ru_page-0001.jpg" alt="Сертификат Stepik 54" />
    </a>

    {/* 2 → теперь курс 520 */}
    <a href="/src/assets/course_520_certificate_ru.pdf" target="_blank">
      <img src="/src/assets/course_520_certificate_ru_page-0001.jpg" alt="Сертификат Stepik 520" />
    </a>

    <a href="/src/assets/course_440_certificate_ru.pdf" target="_blank">
      <img src="/src/assets/course_440_certificate_ru_page-0001.jpg" alt="Сертификат Stepik 440" />
    </a>

    <a href="/src/assets/course_444_certificate_ru.pdf" target="_blank">
      <img src="/src/assets/course_444_certificate_ru_page-0001 (1).jpg" alt="Сертификат Stepik 444" />
    </a>

    {/* 5 → теперь сертификат 681446 */}
    <a href="/src/assets/certificate-681446.pdf" target="_blank">
      <img src="/src/assets/certificate-681446_page-0001.jpg" alt="Сертификат 681446" />
    </a>

    <a href="/src/assets/diploma-681446.pdf" target="_blank">
      <img src="/src/assets/diploma-681446_page-0001.jpg" alt="Диплом" />
    </a>
  </div>
</section>





{/* ===== ОБРАЗОВАНИЕ ===== */}
<section id="education" className="section education">
  <h2>🎓 Образование</h2>

  <div className="education-content">
    <p><strong>Республиканский Высший Технический Колледж</strong></p>
    <p><strong>Специальность:</strong> Программное обеспечение IT</p>
    <p><strong>Курс:</strong> 3</p>

    <p>
      Обучаюсь по направлению «Программное обеспечение IT», где изучаю современные технологии разработки, 
      создание веб-приложений и работу с базами данных.  
      С каждым годом обучения всё больше углубляюсь в практическую часть — разрабатываю проекты, 
      осваиваю новые языки программирования и инструменты.
    </p>

    <p>
      Колледж стал для меня отличной площадкой для профессионального роста: 
      здесь я развиваю аналитическое мышление, творческий подход и умение работать в команде.
    </p>

    <p>
      Моя цель — стать специалистом, который не просто пишет код, 
      а создаёт решения, улучшающие жизнь пользователей.
    </p>
  </div>
</section>


      {/* ===== КОНТАКТЫ ===== */}
      <footer id="contact" className="footer">
        <h2>📬 Контакты</h2>
        <p>Email: <a href="xiangeliba@mail.com">xiangeliba@mail.com</a></p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/aangesi?tab=repositories" target="_blank">
          github.com/aangesi
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
