export function initPageLoader() {
    window.addEventListener('load', () => {
        const pageloader = document.getElementById('pageloader');
        const infraloader = document.getElementById('infraloader');
        const heroShape = document.querySelector('.hero-shape');
        const heroImageLight = document.querySelector('.hero-image.light-image');
        const heroImageDark = document.querySelector('.hero-image.dark-image');
        const heroCaption = document.querySelector('.hero-caption');
        const CaptionTitle = heroCaption.querySelector('.title');
        const CaptionSubTitle = heroCaption.querySelector('.subtitle');
        const CaptionControl = heroCaption.querySelector('.control');
        pageloader.classList.toggle('is-active');
        var pageloaderTimeout = setTimeout(function () {
            infraloader.classList.remove('is-active');
            pageloader.classList.toggle('is-active');
            clearTimeout(pageloaderTimeout);
            setTimeout(function () {
                heroShape.classList.add('is-active');
                heroImageLight.classList.add('is-active');
                heroImageDark.classList.add('is-active');
                heroCaption.classList.add('is-active');
                CaptionTitle.classList.add('is-active');
                CaptionSubTitle.classList.add('is-active');
                CaptionControl.classList.add('is-active');
            }, 350)
        }, 1200);
    })
}