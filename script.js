const buttons = document.querySelectorAll(".brand-btn");
const cars = document.querySelectorAll(".car-card");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // Barcha buttonlardan active olib tashlaymiz
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Bosilgan button active bo'ladi
        button.classList.add("active");

        // Qaysi brend tanlanganini olamiz
        const selectedBrand = button.dataset.brand;

        // Mashinalarni filter qilamiz
        cars.forEach(car => {

            const carBrand = car.dataset.brand;

            if (
                selectedBrand === "all" ||
                carBrand === selectedBrand
            ) {
                car.classList.remove("hidden");
            } else {
                car.classList.add("hidden");
            }

        });

    });

});

const buttonss = document.querySelectorAll(".brand-btn");
const carss = document.querySelectorAll(".car-card");


// ===============================
// BRAND FILTER
// ===============================

buttonss.forEach(button => {

    button.addEventListener("click", () => {

        buttonss.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const selectedBrand = button.dataset.brand;

        carss.forEach(car => {

            const carBrand = car.dataset.brand;

            if (
                selectedBrand === "all" ||
                carBrand === selectedBrand
            ) {
                car.classList.remove("hidden");
            } else {
                car.classList.add("hidden");
            }

        });

    });

});


// ===============================
// CAR INFORMATION
// ===============================

const modal = document.getElementById("carModal");

const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");

const modalBrand = document.getElementById("modalBrand");
const modalYear = document.getElementById("modalYear");
const modalFuel = document.getElementById("modalFuel");

const modalTransmission =
    document.getElementById("modalTransmission");

const modalDescription =
    document.getElementById("modalDescription");


// Har bir mashinani bosish
cars.forEach(car => {

    car.addEventListener("click", () => {

        // Ma'lumotlarni card ichidan olamiz

        const image =
            car.querySelector("img").src;

        const title =
            car.querySelector("h3").textContent;

        const price =
            car.querySelector(".price").textContent;

        const brand =
            car.dataset.brand;


        // Yilni olish
        const year =
            car.querySelector(".details span:first-child")
            .textContent
            .replace("📅", "")
            .trim();


        // Yoqilg'ini olish
        const fuel =
            car.querySelector(".details span:last-child")
            .textContent
            .replace("⛽", "")
            .replace("⚡", "")
            .trim();


        // Modalga ma'lumotlarni joylash

        modalImage.src = image;

        modalTitle.textContent = title;

        modalPrice.textContent = price;

        modalBrand.textContent = brand;

        modalYear.textContent = year;

        modalFuel.textContent = fuel;


        // Hamma mashinalar uchun vaqtinchalik
        // uzatma ma'lumoti

        modalTransmission.textContent = "Avtomat";


        // Mashina haqida description

        modalDescription.textContent =
            `${title} — ${brand} brendining zamonaviy avtomobili. 
            Ushbu avtomobil yuqori komfort, zamonaviy texnologiyalar 
            va yaxshi haydash imkoniyatlarini taqdim etadi.`;


        // Modalni ochish

        modal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


// ===============================
// MODALNI YOPISH
// ===============================

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

});


// Modal tashqarisini bosganda yopiladi

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});


// ESC tugmasi bilan yopish

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        modal.classList.remove("show");

        document.body.style.overflow = "auto";

    }

});

// SOTIB OLISH TUGMASI
const buyBtn = document.getElementById("buyBtn");

buyBtn.addEventListener("click", () => {
    window.location.href = "buy.html";
});

// Elementlarni olish
const searchInput = document.getElementById('searchInput');
const carCards = document.querySelectorAll('.car-card');
const brandButtons = document.querySelectorAll('.brand-btn');

let currentBrand = 'all'; // Hozirgi tanlangan brend

// 1. QIDIRUV FUNKSIYASI
searchInput.addEventListener('input', function() {
    filterCars();
});

// 2. BREND TUGMALARI FUNKSIYASI
brandButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Active klassini o'zgartirish
        brandButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Tanlangan brendni saqlash
        currentBrand = this.getAttribute('data-brand');
        
        // Qayta filtrlash
        filterCars();
    });
});

// 3. ASOSIY FILTRLASH FUNKSIYASI (Qidiruv + Brend)
function filterCars() {
    const searchText = searchInput.value.toLowerCase().trim();

    carCards.forEach(card => {
        const carName = card.querySelector('h3').textContent.toLowerCase();
        const carBrand = card.getAttribute('data-brand').toLowerCase();

        // Qidiruv matni mashina nomi yoki brendida bormi?
        const matchesSearch = carName.includes(searchText) || carBrand.includes(searchText);
        
        // Brend filtri bilan mos keladimi?
        const matchesBrand = currentBrand === 'all' || carBrand === currentBrand.toLowerCase();

        // Ikkala shart ham bajarilsa, ko'rsatish, aks holda yashirish
        if (matchesSearch && matchesBrand) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// 4. MODAL OYNA FUNKSIYASI
const carModal = document.getElementById('carModal');
const closeModall = document.getElementById('closeModal');
const buyBtnn = document.getElementById('buyBtn');

// Har bir mashina kartasiga bosganda modalni ochish
carCards.forEach(card => {
    card.addEventListener('click', function() {
        const img = this.querySelector('img').src;
        const title = this.querySelector('h3').textContent;
        const price = this.querySelector('.price').textContent;
        const brand = this.getAttribute('data-brand');
        const year = this.querySelector('.details span:first-child').textContent;
        const fuel = this.querySelector('.details span:last-child').textContent;

        // Modalga ma'lumotlarni yozish
        document.getElementById('modalImage').src = img;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalPrice').textContent = price;
        document.getElementById('modalBrand').textContent = brand;
        document.getElementById('modalYear').textContent = year.replace('📅 ', '').trim();
        document.getElementById('modalFuel').textContent = fuel.replace('⛽ ', '').replace('⚡ ', '').trim();
        
        // Modalni ko'rsatish
        carModal.style.display = 'flex';
    });
});

// Modalni yopish
closeModal.addEventListener('click', () => {
    carModal.style.display = 'none';
});

// Modal tashqarisiga bosganda yopish
window.addEventListener('click', (e) => {
    if (e.target === carModal) {
        carModal.style.display = 'none';
    }
});

// Sotib olish tugmasi bosilganda buy.html sahifasiga o'tkazish
buyBtn.addEventListener('click', () => {
    window.location.href = 'buy.html';
});

// 5. CHIQISH FUNKSIYASI
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

