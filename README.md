# Критерии приема
Создан репозиторий goit-js-hw-07.
При сдаче домашней работы есть две ссылки: на исходные файлы и рабочую страницу на GitHub Pages.
При посещении живой страницы задания, в консоли нету ошибок и предупреждений.
Имена переменных и функций понятные, описательные.
Код отформатирован Prettier.
Стартовые файлы
Скачай стартовые файлы с базовой разметкой, готовыми стилями и подключенными файлами скриптов для каждого задания. Скопируй их себе в проект.

В файле gallery-items.js есть массив galleryItems, который содержит объекты с информацией о изображениях: маленькое (превью), оригинальное (большое) и описание. Мы уже подключили его к каждому из JS-файлов проекта.

<h2>Задание 1 - галерея изображений</h2>
Создай галерею с возможностью клика по её элементам и просмотра полноразмерного изображения в модальном окне. Посмотри демо видео работы галереи.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

<ol>
  <li>
    Создание и рендер разметки по массиву данных <code>galleryItems</code> и предоставленному шаблону элемента галереи.
  </li>
  <li>
    Реализация делегирования на <code>div.gallery</code> и получение <code>url</code> большого изображения.
  </li>
  <li>
    Подключение скрипта и стилей библиотеки модального окна
<a href="https://basiclightbox.electerious.com/" target="_blank" rel="noopener noreferrer">basicLightbox</a>. Используй
<a href="https://www.jsdelivr.com/package/npm/basiclightbox?path=dist" target="_blank" rel="noopener noreferrer">CDN сервис jsdelivr</a>
и добавь в проект ссылки на минифицированные (<code>.min</code>) файлы библиотеки.
  </li>
  <li>
    Открытие модального окна по клику на элементе галереи. Для этого ознакомься с
<a href="https://github.com/electerious/basicLightbox#readme" target="_blank" rel="noopener noreferrer">документацией</a> и
<a href="https://basiclightbox.electerious.com/" target="_blank" rel="noopener noreferrer">примерами</a>.
  </li>
  <li>
    Замена значения атрибута <code>src</code> элемента <code>&lt;img&gt;</code> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки 
    <a href="https://basiclightbox.electerious.com/" target="_blank" rel="noopener noreferrer">basicLightbox</a>.
  </li>
</ol>

```html
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
```

Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

Закрытие с клавиатуры
<p><b>ВНИМАНИЕ</b></p>
Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.

<h2>Задание 2 - библиотека SimpleLightbox</h2>
Сделай такую же галерею как в первом задании, но используя библиотеку SimpleLightbox, которая возьмет на себя обработку кликов по изображениям, открытие и закрытие модального окна, а также пролистывание изображений при помощи клавиатуры. Посмотри демо видео работы галереи с подключенной библиотекой.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

Необходимо немного изменить разметку карточки галереи, используй этот шаблон.

```html
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
```

Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.
Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. Необходимо добавить ссылки на два файла: simple-lightbox.min.js и simple-lightbox.min.css.
Инициализация библиотеки после того как элементы галереи созданы и добавлены в div.gallery. Для этого ознакомься с документацией SimpleLightbox - в первую очередь секции «Usage» и «Markup».
Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.
