
# Crealive Study Case

Bana göndermiş olduğunuz Figma çalışması üzerinde yönlendirmeleriniz doğrultusunda bir ürün detay sayfası ortaya çıkarmış oldum. Bu projeyi geliştirirken alt yapı olarak kendi geliştirmiş olduğum [vite-starter](https://github.com/barishakverdi/vite-starter) starter'ı ile oluşturdum. Starter içerisinde header, mobil menü gibi yapılar responsive şekilde halihazırda bulunmakta idi.




## Bilgisayarınızda Çalıştırın

Projeyi bilgisayarınızda istediğiniz bir konuma klonladıktan sonra içerisine girip aşağıdaki komutları çalıştırırarak inceleyebilirsiniz.

```bash 
  npm install
  npm run dev
```

Projeyi yukarıdaki komutlar ile başarılı bir şekilde çalıştırdıktan sonra terminalizde size verilen localhost linkini tarayıcınıza yapıştırıp projeyi incelemeye başlayabilirsiniz.

## Custom Dropdown

Ürün detay sayfasında 2 adet dropdown bulunmakta idi. Özel bir dropdown tasarımı belirtilmediği için kendim ayrıca tasarımını ve kodlamasını oluşturmak istedim. Bu sebepten ötürü aşağıdaki JavaScript kodu ile sayfa içerisinde birden fazla dropdown'ı aynı anda kullanabilmekteyiz.

```javascript
let customDropdown = document.querySelectorAll(".custom-dropdown");
let options = document.querySelectorAll(".options");
let option = document.querySelectorAll(".option");

customDropdown.forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {

        options.forEach(options => {
            if (dropdown.getAttribute("data-dropdown-id") === options.getAttribute("data-options-id")) {
                dropdown.firstElementChild.lastElementChild.classList.toggle("rotate-180"); //angle-down-icon
                options.classList.toggle("options-open");

                option.forEach(option => {
                    option.addEventListener("click", function (e) {
                        let placeholderText = option.parentElement.parentElement.querySelectorAll(".placeholder span");
                        placeholderText.forEach(placeholderText => {
                            if (placeholderText.getAttribute("data-placeholder-id") === dropdown.getAttribute("data-dropdown-id")) {
                                placeholderText.innerHTML = option.firstElementChild.innerHTML;
                            }
                        })
                    })
                })
            }
        })
    })
})
```

Yukarıdaki JavaScript kodunun kusursuz bir şekilde çalışması için aşağıdaki HTML yapısına ihtiyaç duymaktayız. Sayfa içerisinde birden fazla dropdown bulundurmak için **.custom-dropdown** class'ına sahip div etiketine verilmiş **data-dropdown-id**, **span** etiketine verilmiş **data-placeholder-id** ve .**options** class'ına verilmiş **data-options-id** attribute'leri aynı olmak zorundadır.

```html
<div class="dropdown">
    <span>Yüzük Ölçüsü</span>
    <div class="custom-dropdown" data-dropdown-id="1">
        <div class="placeholder">
            <span data-placeholder-id="1">12 (İade ve değişim yapılamaz)</span>
            <i class="fa-regular fa-angle-down"></i>
        </div>

        <div class="options" data-options-id="1">
            <div class="option">
                <span>12 (İade ve değişim yapılamaz)</span>
            </div>
            <div class="option">
                <span>13</span>
            </div>
            <div class="option">
                <span>14</span>
            </div>
            <div class="option">
                <span>15</span>
            </div>
            <div class="option">
                <span>16</span>
            </div>
        </div>
    </div>
</div>
```

## Custom Modal

Figma üzerinde "Yüzük Ölçümü Bilmiyorum" adlı bir buton bulunmakta idi ancak nereye yönlendireceği konusunda bir bilgi yoktu. Bundan dolayı tasarıma ekleme yaparak custom bir modal oluşturmuş oldum.

```javascript
import {body} from "./header.js";
let modalContainer = document.querySelector(".modal-container");
let modal = modalContainer.querySelectorAll(".modal");
let modalTriggerButton = document.querySelectorAll(".modal-trigger-button");
let modalCloseButton = modalContainer.querySelectorAll(".close-button");

modalTriggerButton.forEach(button => {
    button.addEventListener("click", function () {
        modalContainer.classList.toggle("closed");
        body.classList.toggle("overflow-hidden");

        modal.forEach(modal => {
            if (button.getAttribute("modal-trigger-id") === modal.getAttribute("modal-id")) {
                modal.classList.remove("closed");
                modal.classList.add("opened");
            }
        })
    })
})

modalCloseButton.forEach(closeButton => {
    closeButton.addEventListener("click", function() {
        modalContainer.classList.toggle("closed");
        body.classList.toggle("overflow-hidden");

        modal.forEach(modal => {
            modal.classList.add("closed");
            modal.classList.remove("opened");
        })
    })
})
```

Yukarıdaki JavaScript kodunun kusursuz bir şekilde çalışması için aşağıdaki HTML yapısına ihtiyaç duymaktayız. Sayfa içerisinde birden fazla modal açılacak ise **.modal** ve **.closed** class'larına sahip bir div etiketi açılmalıdır. Daha sonrasında ise modal içerisindeki div yapıları aşağıdaki örnekte olduğu gibi birebir olmalıdır. Birden fazla modal'ı oluşturmak için **.modal** class'ına sahip div etiketine **modal-id** attribute'u verilmelidir.

```html
<div class="modal-container closed">
    <div class="modal closed" modal-id="1">
        <div class="close-button">
            <i class="fa-light fa-xmark"></i>
        </div>
        <div class="modal-body">
            <div class="modal-content">
                <img src="../images/yuzuk.jpg" alt="">
            </div>
        </div>
    </div>
</div>
```

Son olarak modal'ı açacak olan yani modal'ın açılmasını tetikleyecek butona/yazıya aşağıdaki class ve attribute'u vermeliyiz.

```html
<a href="#" class="modal-trigger-button" modal-trigger-id="1">Yüzük Ölçümü Bilmiyorum</a>
```

Bu sayede bir sayfada birden fazla modal'ı açabiliriz.


## Language Switcher

Figma tasarımı içerisinde header'da bulunan dil seçicinin açılır hali belirtilmemişti. Bundan dolayı tasarımını da kendim oluşturarak aşağıdaki JavaScript ve HTML kodlarını oluşturdum.

```javascript
languageSwitcher.addEventListener("click", function () {
    languageSwitcher.classList.toggle("switch-open");
})
```

```html
<div class="language-switcher" id="languageSwitcher">
    <div>
        <img src="../images/tr-flag.svg" alt="">
        <i class="fa-light fa-angle-down"></i>
    </div>

    <ul>
        <li>
            <a href="#">
                <img src="../images/tr-flag.svg" alt="">
            </a>
        </li>

        <li>
            <a href="#">
                <img src="../images/tr-flag.svg" alt="">
            </a>
        </li>
        ...
    </ul>
</div>
```


## Kullanılan Kütüphaneler/Pluginler

### Kütüphaneler

Ürün detay sayfası içerisinde bir adet thumb görsellere sahip galeri alanı bulunmakta idi. Bu galeri alanı için:

- Swiper JS,
- Fancyapps (Fancybox)

kütüphanelerini kullandım.

Swiper JS için kendi dokümantasyonundan yola çıkarak aşağıdaki yapıyı kurdum.

```javascript
import Swiper, {Autoplay, Thumbs} from 'swiper';
import 'swiper/css/bundle';

const swiper = new Swiper(".thumbCarousel", {
    modules: [Autoplay, Thumbs],

    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 4,
    // freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        576: {
            direction: "vertical",
            width: 102,
            slidesPerView: 5,
            spaceBetween: 0,
        },
    },
});

const swiper2 = new Swiper(".mainCarousel", {
    modules: [Autoplay, Thumbs],

    loop: true,
    direction: "horizontal",
    thumbs: {
        swiper: swiper,
    },

    breakpoints: {
        576: {
            direction: "vertical",
        },
    },
});
```


### Pluginler

- [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars)

Bu plugin kısaca HTML sayfalarında layout'ları ve componentleri farklı değişkenlerle birlikte çağırmaya yaramaktadır. Nasıl kullandığımla ilgili daha detaylı bilgiyi yine kendi starter'ımda bulunan bu [index.html](https://github.com/barishakverdi/vite-starter/blob/main/src/views/index.html) dosyasında açıkladım. Dilerseniz starter'ı yine aynı çalıştırma komutları ile çalıştırıp inceleyebilirsiniz.


## Notlar

Kullanılan paketlerin neler olduğu gizli bırakılmamak için package.json dosyası gizlenmemiştir.
