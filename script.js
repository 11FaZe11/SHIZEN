// Quick View Modal
document.querySelectorAll(".quick-view").forEach((item) => {
  item.addEventListener("click", function () {
    const productCard = item.closest(".product-card");
    const productName = productCard.querySelector("h3").textContent;
    const productPrice =
      productCard.querySelector(".current-price").textContent;
    const productImage = productCard.querySelector("img").src;

    document.getElementById("modal-product-name").textContent = productName;
    document.getElementById("modal-product-price").textContent = productPrice;
    document.getElementById("modal-product-img").src = productImage;

    document.querySelector(".quick-view-modal").style.display = "block";
  });
});

// Close Modal
document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".quick-view-modal").style.display = "none";
});

document.querySelectorAll(".skin-card").forEach((card) => {
  card.addEventListener("click", () => {
    // Remove active class from all cards
    document
      .querySelectorAll(".skin-card")
      .forEach((c) => c.classList.remove("active"));

    // Add active class to the clicked card
    card.classList.add("active");

    // Hide all content sections
    document
      .querySelectorAll(".content-section")
      .forEach((section) => (section.style.display = "none"));

    // Show the content section corresponding to the clicked card
    const type = card.getAttribute("data-type");
    const contentToShow = document.querySelector(
      `.content-section[data-type="${type}"]`
    );
    if (contentToShow) {
      contentToShow.style.display = "block";
    }

    // Show only products related to the selected card
    document.querySelectorAll(".product-card").forEach((product) => {
      if (product.classList.contains(type)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Ensure the default content for 'bestseller' is displayed on page load
document.addEventListener("DOMContentLoaded", () => {
  const defaultContent = document.querySelector(
    '.content-section[data-type="bestseller"]'
  );
  if (defaultContent) {
    defaultContent.style.display = "block";
  }

  document.querySelectorAll(".product-card").forEach((product) => {
    if (product.classList.contains("bestseller")) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });

  const priceFilter = document.getElementById("price-filter");

  priceFilter.addEventListener("change", () => {
    const selectedRange = priceFilter.value;
    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
      const productPrice = parseInt(product.getAttribute("data-price"), 10);

      if (selectedRange === "all") {
        product.style.display = "block";
      } else if (selectedRange === "0-100" && productPrice <= 100) {
        product.style.display = "block";
      } else if (
        selectedRange === "100-250" &&
        productPrice > 100 &&
        productPrice <= 250
      ) {
        product.style.display = "block";
      } else if (selectedRange === "250+" && productPrice > 250) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });

  const searchBox = document.querySelector(".search-box input");

  searchBox.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    const activeCard = document.querySelector(".skin-card.active");
    const activeType = activeCard ? activeCard.getAttribute("data-type") : null;

    document.querySelectorAll(".product-card").forEach((product) => {
      const productName = product.querySelector("h3").textContent.toLowerCase();

      if (activeType && !product.classList.contains(activeType)) {
        product.style.display = "none";
      } else if (productName.includes(searchTerm)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Create and append the loading screen element
const loadingScreen = document.createElement('div');
loadingScreen.className = 'loading-screen';
loadingScreen.textContent = 'Loading...';
document.body.appendChild(loadingScreen);

// Modify the language toggle event to show the loading screen
const toggleLanguageButton = document.getElementById('toggle-language');
toggleLanguageButton.addEventListener('click', function() {
    const htmlElement = document.documentElement;
    const isArabic = htmlElement.lang === 'ar';

    // Show the loading screen
    loadingScreen.classList.add('active');

    setTimeout(() => {
        if (isArabic) {
            htmlElement.lang = 'en';
            htmlElement.dir = 'ltr';
            toggleLanguageButton.textContent = 'Change Language';
            document.querySelector('.main-nav ul li:nth-child(1) a').textContent = 'Home';
            document.querySelector('.main-nav ul li:nth-child(2) a').textContent = 'Skin Care';
            document.querySelector('.main-nav ul li:nth-child(3) a').textContent = 'Products';
            document.querySelector('.main-nav ul li:nth-child(4) a').textContent = 'Contact Us';
            document.querySelector('.section-title span').textContent = 'Discover Our Products';
            document.querySelector('.section-title').childNodes[1].textContent = ' suitable for your skin';
            document.querySelector('.skin-card[data-type="oily"] h3').textContent = 'Oily Skin';
            document.querySelector('.skin-card[data-type="oily"] p').textContent = 'Products to regulate oil secretion';
            document.querySelector('.skin-card[data-type="dry"] h3').textContent = 'Dry Skin';
            document.querySelector('.skin-card[data-type="dry"] p').textContent = 'Deep moisturizers for dry skin';
            document.querySelector('.skin-card[data-type="combination"] h3').textContent = 'Combination Skin';
            document.querySelector('.skin-card[data-type="combination"] p').textContent = 'Balanced solutions for all areas';
            document.querySelector('.skin-card[data-type="bestseller"] h3').textContent = 'Best Sellers';
            document.querySelector('.skin-card[data-type="bestseller"] p').textContent = 'Our most requested products';
            document.querySelector('.skin-card[data-type="all"] h3').textContent = 'All Skin Types';
            document.querySelector('.skin-card[data-type="all"] p').textContent = 'Products suitable for all skin types';
        } else {
            htmlElement.lang = 'ar';
            htmlElement.dir = 'rtl';
            toggleLanguageButton.textContent = 'تغيير اللغة';
            document.querySelector('.main-nav ul li:nth-child(1) a').textContent = 'الرئيسية';
            document.querySelector('.main-nav ul li:nth-child(2) a').textContent = 'العناية بالبشرة';
            document.querySelector('.main-nav ul li:nth-child(3) a').textContent = 'المنتجات';
            document.querySelector('.main-nav ul li:nth-child(4) a').textContent = 'اتصل بنا';
            document.querySelector('.section-title span').textContent = 'اكتشف منتجاتنا';
            document.querySelector('.section-title').childNodes[1].textContent = ' المناسبة لبشرتك';
            document.querySelector('.skin-card[data-type="oily"] h3').textContent = 'بشرة دهنية';
            document.querySelector('.skin-card[data-type="oily"] p').textContent = 'منتجات تنظيم الإفرازات الدهنية';
            document.querySelector('.skin-card[data-type="dry"] h3').textContent = 'بشرة جافة';
            document.querySelector('.skin-card[data-type="dry"] p').textContent = 'مرطبات عميقة للبشرة الجافة';
            document.querySelector('.skin-card[data-type="combination"] h3').textContent = 'بشرة مختلطة';
            document.querySelector('.skin-card[data-type="combination"] p').textContent = 'حلول متوازنة لكل المناطق';
            document.querySelector('.skin-card[data-type="bestseller"] h3').textContent = 'الأكثر مبيعاً';
            document.querySelector('.skin-card[data-type="bestseller"] p').textContent = 'منتجاتنا الأكثر طلباً';
            document.querySelector('.skin-card[data-type="all"] h3').textContent = 'جميع انواع البشره';
            document.querySelector('.skin-card[data-type="all"] p').textContent = 'منتجات تناسب جميع أنواع البشرة';
        }

        // Hide the loading screen after the transition
        loadingScreen.classList.remove('active');
    }, 1000); // Match the duration of the CSS animation

    document.querySelectorAll('.product-card').forEach((productCard) => {
        const productName = productCard.querySelector('h3');
        const productDescription = productCard.querySelector('.product-description p');
        const quickView = productCard.querySelector('.quick-view');

        if (isArabic) {
            if (productName) productName.textContent = productName.textContent.replace('منتج', 'Product');
            if (productDescription) productDescription.textContent = productDescription.textContent.replace('هذا المنتج', 'This product').replace('مثالي', 'is ideal').replace('لجميع أنواع البشرة', 'for all skin types').replace('يساعد على', 'helps to').replace('ترطيب البشرة بعمق', 'deeply moisturize the skin');
            if (quickView) quickView.textContent = 'Quick View';
        } else {
            if (productName) productName.textContent = productName.textContent.replace('Product', 'منتج');
            if (productDescription) productDescription.textContent = productDescription.textContent.replace('This product', 'هذا المنتج').replace('is ideal', 'مثالي').replace('for all skin types', 'لجميع أنواع البشرة').replace('helps to', 'يساعد على').replace('deeply moisturize the skin', 'ترطيب البشرة بعمق');
            if (quickView) quickView.textContent = 'معاينة سريعة';
        }
    });

    const bestsellerTitle = document.querySelector('.content-section[data-type="bestseller"] h2');
    const bestsellerDescription = document.querySelector('.content-section[data-type="bestseller"] p');

    if (isArabic) {
        if (bestsellerTitle) bestsellerTitle.textContent = 'Best Sellers';
        if (bestsellerDescription) bestsellerDescription.textContent = 'Discover our most requested and favorite products among our customers.';
    } else {
        if (bestsellerTitle) bestsellerTitle.textContent = 'الأكثر مبيعاً';
        if (bestsellerDescription) bestsellerDescription.textContent = 'تعرف على منتجاتنا الأكثر طلباً والمفضلة لدى عملائنا.';
    }

    // Added functionality to translate the search filters and other remaining elements
    const categoryFilterLabel = document.querySelector('label[for="category-filter"]');
    const priceFilterLabel = document.querySelector('label[for="price-filter"]');
    const searchBoxPlaceholder = document.querySelector('.search-box input');

    if (isArabic) {
        if (categoryFilterLabel) categoryFilterLabel.innerHTML = '<i class="fas fa-filter"></i> Filter by:';
        if (priceFilterLabel) priceFilterLabel.innerHTML = '<i class="fas fa-tags"></i> Price Range:';
        if (searchBoxPlaceholder) searchBoxPlaceholder.placeholder = 'Search for a product...';
    } else {
        if (categoryFilterLabel) categoryFilterLabel.innerHTML = '<i class="fas fa-filter"></i> تصفية حسب:';
        if (priceFilterLabel) priceFilterLabel.innerHTML = '<i class="fas fa-tags"></i> نطاق السعر:';
        if (searchBoxPlaceholder) searchBoxPlaceholder.placeholder = 'ابحث عن منتج...';
    }

    const oilyTitle = document.querySelector('.content-section[data-type="oily"] h2');
    const oilyDescription = document.querySelector('.content-section[data-type="oily"] p');

    if (isArabic) {
        if (oilyTitle) oilyTitle.textContent = 'Oily Skin Products';
        if (oilyDescription) oilyDescription.textContent = 'Discover the best products to regulate oil secretion and keep your skin clean and healthy.';
    } else {
        if (oilyTitle) oilyTitle.textContent = 'منتجات البشرة الدهنية';
        if (oilyDescription) oilyDescription.textContent = 'اكتشف أفضل المنتجات لتنظيم الإفرازات الدهنية والحفاظ على بشرتك نظيفة وصحية.';
    }
});

const priceFilter = document.getElementById("price-filter");

function updatePriceFilterLanguage(isArabic) {
    if (isArabic) {
        priceFilter.innerHTML = `
            <option value="all">الكل</option>
            <option value="0-100">حتى 100 ج.م</option>
            <option value="100-250">100 - 250 ج.م</option>
            <option value="250+">أكثر من 250 ج.م</option>
        `;
    } else {
        priceFilter.innerHTML = `
            <option value="all">All</option>
            <option value="0-100">Under 100 EGP</option>
            <option value="100-250">100 - 250 EGP</option>
            <option value="250+">More than 250 EGP</option>
        `;
    }
}

toggleLanguageButton.addEventListener("click", function () {
    const isArabic = document.documentElement.lang === "ar";
    updatePriceFilterLanguage(!isArabic);
});

// Initialize the price filter language on page load
document.addEventListener("DOMContentLoaded", () => {
    const isArabic = document.documentElement.lang === "ar";
    updatePriceFilterLanguage(isArabic);
});

const categoryFilterLabel = document.querySelector('label[for="category-filter"]');

function updateCategoryFilterLanguage(isArabic) {
    if (isArabic) {
        categoryFilterLabel.innerHTML = '<i class="fas fa-filter"></i> تصفية حسب:';
    } else {
        categoryFilterLabel.innerHTML = '<i class="fas fa-filter"></i> Filter by:';
    }
}

toggleLanguageButton.addEventListener("click", function () {
    const isArabic = document.documentElement.lang === "ar";
    updateCategoryFilterLanguage(!isArabic);
});

// Initialize the category filter language on page load
document.addEventListener("DOMContentLoaded", () => {
    const isArabic = document.documentElement.lang === "ar";
    updateCategoryFilterLanguage(isArabic);
});

// Add a full-page loading spinner
const loadingSpinner = document.createElement('div');
loadingSpinner.className = 'loading-spinner';
loadingSpinner.innerHTML = '<div class="spinner"></div>';
document.body.appendChild(loadingSpinner);

// Hide the spinner once the content is fully loaded
window.addEventListener('load', () => {
    loadingSpinner.style.display = 'none';
});

// Optional: Add section-specific spinners
const showSectionSpinner = (section) => {
    const spinner = document.createElement('div');
    spinner.className = 'section-spinner';
    spinner.innerHTML = '<div class="spinner"></div>';
    section.appendChild(spinner);
};

const hideSectionSpinner = (section) => {
    const spinner = section.querySelector('.section-spinner');
    if (spinner) {
        spinner.remove();
    }
};
