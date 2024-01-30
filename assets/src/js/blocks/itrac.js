($ => {

    document.addEventListener("DOMContentLoaded", () => {

        const mainel = document.querySelector('.itrac-block')

        if(!mainel) {
            return false
        }

        mainel.querySelectorAll('.icon-popup-trigger').forEach(el => {
            el.addEventListener('click', () => {
                var content = JSON.parse(el.dataset.content)
                var popup = mainel.querySelector('.popup-target')
                popup.querySelector('.image-target').src = content.contentImage.url
                popup.querySelector('.title-target').innerHTML = content.title
                popup.querySelector('.content-target').innerHTML = content.contentDescription
                popup.classList.remove('hidden')
            })
        })

        const hidePopup = () => {
            var popup = mainel.querySelector('.popup-target')
            popup.classList.add('hidden')
            popup.querySelector('.image-target').src = ''
            popup.querySelector('.title-target').innerHTML = ''
            popup.querySelector('.content-target').innerHTML = ''
        }

        mainel.querySelector('.popup-target .overlay').addEventListener('click', e => {
            hidePopup()
        })
        mainel.querySelector('.popup-target .close-button').addEventListener('click', e => {
            hidePopup()
        })

    })

})(jQuery)