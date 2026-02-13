// OtoFonFX Global Yapılandırma Dosyası
const APP_CONFIG = {
    version: "v3.5.1",
    year: "2026",
    company: "OTOFONFX TECHNOLOGIES",
    accessType: "PREMIUM ACCESS"
};

// Sayfa yüklendiğinde footer'ları otomatik doldurur
document.addEventListener("DOMContentLoaded", function() {
    const footers = document.querySelectorAll('.footer');
    const footerContent = `© ${APP_CONFIG.year} ${APP_CONFIG.company}<br><span style="opacity: 0.5;">${APP_CONFIG.version} ${APP_CONFIG.accessType}</span>`;
    
    footers.forEach(footer => {
        footer.innerHTML = footerContent;
    });

    // Eğer sayfa içinde sürüm numarasını başka yerde de kullanmak istersen (örn: nav-header)
    const versionLabels = document.querySelectorAll('.version-label');
    versionLabels.forEach(label => {
        label.innerText = `OTOFONFX ${APP_CONFIG.version}`;
    });
});
