import './App.css';
import { useState } from 'react';

function App() {
  const [showAvatar, setShowAvatar] = useState(false);

  // Плавный скролл к секции по id
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <div className="page-gradient" />

      <header className="header">
        <div className="container header__inner">
          <div className="logo">
            <span className="logo__mark" />
            <span className="logo__text">MiginITCompany</span>
          </div>

          <nav className="nav">
            <a href="#features" className="nav__link">
              Преимущества
            </a>
            <a href="#how" className="nav__link">
              Как это работает
            </a>
            <a href="#pricing" className="nav__link">
              Тарифы
            </a>
            <a href="#contact" className="nav__link">
              Контакты
            </a>
          </nav>

          <div className="header__actions">
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              Войти
            </button>
            <button
              className="btn btn--primary"
              onClick={() => {
                setShowAvatar(true);
                scrollTo('contact');
              }}
            >
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="container hero__inner">
            <div className="hero__content">
              <span className="hero__badge">Новый уровень вашего продукта</span>
              <h1 className="hero__title">
                Красивый и продуманный лендинг,
                <span className="hero__title-gradient"> который конвертирует</span>
              </h1>
              <p className="hero__subtitle">
                Покажите ценность продукта за первые секунды. Чистый дизайн, понятная структура и акцент на вашем
                предложении помогают превратить посетителей в клиентов.
              </p>

              <div className="hero__author">
                <img src="/avatar.png" alt="MiginITCompany" className="hero__avatar" />
                <div className="hero__author-text">
                  <span className="hero__author-name">MiginITCompany</span>
                  <span className="hero__author-role">Разработка и сопровождение IT‑решений под ключ</span>
                </div>
              </div>

              <div className="hero__actions">
                <button className="btn btn--primary btn--lg" onClick={() => scrollTo('pricing')}>
                  Начать сейчас
                </button>
                <button className="btn btn--ghost btn--lg" onClick={() => setShowAvatar(true)}>
                  Смотреть демо
                </button>
              </div>

              <div className="hero__meta">
                <div className="hero__meta-item">
                  <span className="hero__meta-value">+42%</span>
                  <span className="hero__meta-label">к конверсии лендинга</span>
                </div>
                <div className="hero__meta-item">
                  <span className="hero__meta-value">7 дней</span>
                  <span className="hero__meta-label">до запуска готовой страницы</span>
                </div>
                <div className="hero__meta-item">
                  <span className="hero__meta-value">24/7</span>
                  <span className="hero__meta-label">поддержка и сопровождение</span>
                </div>
              </div>
            </div>

              <div className="hero__visual">
              <div className="card card--primary">
                <div className="card__header">
                  <span className="card__label">Аналитика</span>
                  <span className="card__dot card__dot--green" />
                </div>
                <div className="card__body">
                  <p className="card__title">Рост конверсии</p>
                  <div className="card__chart">
                    <span className="card__bar card__bar--1" />
                    <span className="card__bar card__bar--2" />
                    <span className="card__bar card__bar--3" />
                    <span className="card__bar card__bar--4" />
                  </div>
                </div>
              </div>

              <div className="card card--secondary">
                <p className="card__title">Автоматические A/B‑тесты</p>
                <p className="card__text">
                  Система сама подберёт лучшую связку заголовков, CTA и блоков, чтобы увеличить эффективность лендинга.
                </p>
              </div>

              <div className="hero__floating">
                <div className="pill">
                  <span className="pill__dot" />
                  <span className="pill__text">Адаптивный дизайн под все устройства</span>
                </div>
                <div className="pill pill--glass">
                  <span className="pill__text">Оптимизировано под SEO и скорость загрузки</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Что делает лендинг эффективным</h2>
              <p className="section__subtitle">
                Мы продумали структуру страницы так, чтобы пользователь быстро понял выгоду и сделал целевое действие.
              </p>
            </div>

            <div className="grid grid--3">
              <article className="feature-card">
                <div className="feature-card__icon feature-card__icon--accent">01</div>
                <h3 className="feature-card__title">Сильный первый экран</h3>
                <p className="feature-card__text">
                  Ясный оффер, подкреплённый визуалом и социальным доказательством, чтобы зацепить пользователя с
                  первых секунд.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-card__icon feature-card__icon--blue">02</div>
                <h3 className="feature-card__title">Логичная структура</h3>
                <p className="feature-card__text">
                  Блоки выстроены в понятную историю: проблема — решение — выгоды — социальное доказательство — CTA.
                </p>
              </article>

              <article className="feature-card">
                <div className="feature-card__icon feature-card__icon--purple">03</div>
                <h3 className="feature-card__title">Чистый визуал</h3>
                <p className="feature-card__text">
                  Минималистичный дизайн, акцентный цвет и аккуратная типографика без лишнего визуального шума.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section section--alt" id="how">
          <div className="container section__split">
            <div className="section__content">
              <h2 className="section__title">Как это работает</h2>
              <p className="section__subtitle">
                Всего три шага, чтобы получить готовый лендинг под вашу задачу — от сбора информации до запуска
                трафика.
              </p>

              <ol className="steps">
                <li className="steps__item">
                  <span className="steps__bullet">1</span>
                  <div>
                    <h3 className="steps__title">Бриф и прототип</h3>
                    <p className="steps__text">
                      Формируем позиционирование и собираем ключевые смыслы. На основе этого создаём прототип будущей
                      страницы.
                    </p>
                  </div>
                </li>
                <li className="steps__item">
                  <span className="steps__bullet">2</span>
                  <div>
                    <h3 className="steps__title">Дизайн и верстка</h3>
                    <p className="steps__text">
                      Разрабатываем адаптивный дизайн, реализуем анимации и собираем страницу на чистом и быстром
                      коде.
                    </p>
                  </div>
                </li>
                <li className="steps__item">
                  <span className="steps__bullet">3</span>
                  <div>
                    <h3 className="steps__title">Запуск и оптимизация</h3>
                    <p className="steps__text">
                      Подключаем аналитику, запускаем трафик и оптимизируем конверсию по данным первых недель.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="section__visual">
              <div className="glass-panel">
                <p className="glass-panel__label">Предпросмотр лендинга</p>
                <div className="glass-panel__screen">
                  <div className="glass-panel__topbar">
                    <span className="glass-panel__dot" />
                    <span className="glass-panel__dot glass-panel__dot--yellow" />
                    <span className="glass-panel__dot glass-panel__dot--green" />
                  </div>
                  <div className="glass-panel__content">
                    <div className="glass-panel__hero" />
                    <div className="glass-panel__lines">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <p className="glass-panel__note">
                  Все страницы создаются под ваши задачи и бренд‑гайд.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="section" id="pricing">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Прозрачные тарифы</h2>
              <p className="section__subtitle">
                Выберите формат, который подходит вашему проекту сейчас. При необходимости тариф можно масштабировать.
              </p>
            </div>

            <div className="grid grid--3 pricing">
              <article className="pricing-card">
                <h3 className="pricing-card__name">Старт</h3>
                <p className="pricing-card__price">от 29 000 ₽</p>
                <p className="pricing-card__tagline">Для теста гипотез и MVP.</p>
                <ul className="pricing-card__list">
                  <li>1 экран + базовые блоки</li>
                  <li>Адаптив под мобильные</li>
                  <li>Базовая настройка аналитики</li>
                </ul>
                <button className="btn btn--ghost btn--full" onClick={() => scrollTo('contact')}>
                  Выбрать тариф
                </button>
              </article>

              <article className="pricing-card pricing-card--highlight">
                <div className="pricing-card__badge">Рекомендуем</div>
                <h3 className="pricing-card__name">Бизнес</h3>
                <p className="pricing-card__price">от 59 000 ₽</p>
                <p className="pricing-card__tagline">Оптимальное решение для продукта.</p>
                <ul className="pricing-card__list">
                  <li>Полноценный лендинг до 8 блоков</li>
                  <li>SEO‑оптимизация и высокая скорость</li>
                  <li>Настройка A/B‑тестов и аналитики</li>
                </ul>
                <button className="btn btn--primary btn--full" onClick={() => scrollTo('contact')}>
                  Заказать разработку
                </button>
              </article>

              <article className="pricing-card">
                <h3 className="pricing-card__name">Индивидуально</h3>
                <p className="pricing-card__price">по запросу</p>
                <p className="pricing-card__tagline">Под сложные и нестандартные задачи.</p>
                <ul className="pricing-card__list">
                  <li>Глубокая аналитика и стратегия</li>
                  <li>Интеграции и личный кабинет</li>
                  <li>Долгосрочное сопровождение</li>
                </ul>
                <button className="btn btn--ghost btn--full" onClick={() => scrollTo('contact')}>
                  Обсудить проект
                </button>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section section--alt" id="contact">
          <div className="container section__split">
            <div className="section__content">
              <h2 className="section__title">Готовы обсудить ваш лендинг?</h2>
              <p className="section__subtitle">
                Оставьте контакт, и мы вернёмся с предложением по структуре и стоимости в течение рабочего дня.
              </p>

              <ul className="contact-list">
                <li>
                  <span>Почта</span>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </li>
                <li>
                  <span>Телеграм</span>
                  <a href="@s.migin">{'@your_nickname'}</a>
                </li>
                <li>
                  <span>Телефон</span>
                  <a href="tel:+79990000000">+7 (999) 000‑00‑00</a>
                </li>
              </ul>
            </div>

            <div className="section__visual">
              <form className="form">
                <div className="form__row">
                  <div className="form__field">
                    <label htmlFor="name">Имя</label>
                    <input id="name" type="text" placeholder="Как к вам обращаться" />
                  </div>
                  <div className="form__field">
                    <label htmlFor="company">Компания</label>
                    <input id="company" type="text" placeholder="Название компании или проекта" />
                  </div>
                </div>

                <div className="form__field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="example@company.com" />
                </div>

                <div className="form__field">
                  <label htmlFor="message">Кратко о задаче</label>
                  <textarea id="message" rows={4} placeholder="Опишите продукт и цель лендинга" />
                </div>

                <button type="submit" className="btn btn--primary btn--full">
                  Получить предложение
                </button>
                <p className="form__note">
                  Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__left">
            <div className="logo">
              <span className="logo__mark" />
              <span className="logo__text">MiginITCompany</span>
            </div>
            <p className="footer__copy">© 2026. Все права защищены.</p>
          </div>
          <div className="footer__right">
            <a href="#top" className="footer__link">
              Наверх
            </a>
            <a href="/privacy" className="footer__link">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>

      {showAvatar && (
        <div className="avatar-overlay" onClick={() => setShowAvatar(false)}>
          <img src="/avatar.png" alt="MiginITCompany" className="avatar-overlay__image" />
        </div>
      )}
    </>
  );
}

export default App;
