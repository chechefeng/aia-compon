import AiaButton from './AiaButton/AiaButton';

const components = [AiaButton]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

// export {
//     Item,
//     AiaButton
// }
export default install
