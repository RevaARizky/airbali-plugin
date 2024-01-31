($ => {

    document.addEventListener("DOMContentLoaded", () => {

        const mainel = document.querySelectorAll('.image-overlay-block.custom-block')
        if(!mainel.length) {
            return false
        }

        var minHeight = 0

        mainel.forEach(el => {
            var triggerButton = el.querySelector('.overlay-button-trigger')
            var imageWrapper = el.querySelector('.image-wrapper')
            triggerButton.addEventListener('click', () => {
                if(imageWrapper.classList.contains('active')) {
                    imageWrapper.classList.remove('active')
                } else {
                    imageWrapper.classList.add('active')
                }
            })
            console.log(jQuery(el).siblings())
            if(jQuery(el).siblings().css('height') > minHeight) {
                minHeight = jQuery(el).siblings().css('height')
            }
            
        })

        mainel.forEach(el => {
            console.log(mainel)
            jQuery(el).siblings().css('height', `${minHeight}px`)
        })
        

    })

})(jQuery)