export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            message: (msg: string) => {
                const divMess = document.createElement('div')
                divMess.className = 'notification bg-green'
                divMess.style.right = '15px'
                divMess.style.top = '167px'
                divMess.style.display = 'none'

                divMess.innerHTML = '<strong>' + msg + '</strong><br>' 
                divMess.style.display = 'flex'
                const parentElement = document.querySelector('body')
                if(parentElement) {
                    parentElement.appendChild(divMess)
                    setTimeout(() => {
                    divMess.style.display = 'none'
                    divMess.remove()
                    }, 4000)
                }
            },
            error: (msg: string) => {
                const divMess = document.createElement('div')
                divMess.className = 'notification bg-red'
                divMess.style.right = '15px'
                divMess.style.top = '167px'
                divMess.style.display = 'none'

                divMess.innerHTML = '<strong>' + msg + '</strong><br>' 
                divMess.style.display = 'flex'
                const parentElement = document.querySelector('body')
                if(parentElement) {
                    parentElement.appendChild(divMess)
                    setTimeout(() => {
                    divMess.style.display = 'none'
                    divMess.remove()
                    }, 4000)
                }
            }
        }
    }
})